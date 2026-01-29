#!/usr/bin/env python3
import re
import json

# Read the mapping file
with open('lib/seo/condition-images.ts', 'r', encoding='utf-8') as f:
    mapping_content = f.read()

# Extract all URLs
urls_match = re.search(r'const ALL_THUMBNAIL_URLS = \[([\s\S]*?)\];', mapping_content)
if not urls_match:
    print('Could not find URL list')
    exit(1)

urls_text = urls_match.group(1)
urls = re.findall(r'https://[^\'",\s]+', urls_text)

print(f'Found {len(urls)} URLs')

# Build mappings
slug_to_url = {}
slug_to_alt = {}

hub_slugs = {'back', 'neck', 'shoulder', 'hip', 'knee', 'spine', 'foot-ankle', 'hand-wrist-elbow', 'sports-medicine', 'pain-management'}

special_cases = {
    'ac-joint-injury': 'AC Joint Injury',
    'acl-injury': 'ACL Injury',
    'pcl-tear': 'PCL Tear',
    'tfcc-tear': 'TFCC Tear',
    'de-quervains': "De Quervain's",
    'dupuytrens-contracture': "Dupuytren's Contracture",
    'mortons-neuroma': "Morton's Neuroma",
    'bunions-hallux-valgus': 'Bunions (Hallux Valgus)',
    'iliotibial-band-syndrome': 'Iliotibial Band Syndrome',
    'patellofemoral-pain-syndrome': 'Patellofemoral Pain Syndrome',
    'bakers-cyst': "Baker's Cyst",
    'golfers-elbow': "Golfer's Elbow",
    'runner-knee': "Runner's Knee",
    'slap-tear': 'SLAP Tear',
}

for url in urls:
    match = re.search(r'--condition--(.+?)--thumbnail\.png$', url)
    if match:
        slug = match.group(1)
        slug_to_url[slug] = url
        
        # Generate title
        if slug in special_cases:
            title = special_cases[slug]
        elif slug.startswith('ac-joint'):
            title = 'AC Joint ' + ' '.join(word.capitalize() for word in slug[9:].split('-'))
        elif slug.startswith('acl-'):
            title = 'ACL ' + ' '.join(word.capitalize() for word in slug[4:].split('-'))
        elif slug.startswith('pcl-'):
            title = 'PCL ' + ' '.join(word.capitalize() for word in slug[4:].split('-'))
        elif slug.startswith('tfcc-'):
            title = 'TFCC ' + ' '.join(word.capitalize() for word in slug[5:].split('-'))
        else:
            title = ' '.join(word.capitalize() for word in slug.split('-'))
        
        # Generate alt text
        if slug in hub_slugs:
            slug_to_alt[slug] = f'Orthopedic and spine care for {title} at Mountain Spine & Orthopedics.'
        else:
            slug_to_alt[slug] = f'Medical illustration of {title} treated by Mountain Spine & Orthopedics.'

print(f'Created mappings for {len(slug_to_url)} slugs')

# Save to JSON
with open('slug-url-mappings.json', 'w', encoding='utf-8') as f:
    json.dump({'slugToUrl': slug_to_url, 'slugToAlt': slug_to_alt}, f, indent=2, ensure_ascii=False)

print('Mappings saved to slug-url-mappings.json')
print('\nSample mappings:')
print(f'- herniated-disc: {slug_to_url.get("herniated-disc", "NOT FOUND")}')
print(f'- ac-joint-injury: {slug_to_url.get("ac-joint-injury", "NOT FOUND")}')
print(f'- back (hub): {slug_to_url.get("back", "NOT FOUND")}')
