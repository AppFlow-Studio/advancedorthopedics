#!/usr/bin/env python3
import re
import json

# Load mappings
with open('slug-url-mappings.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

slug_to_url = mappings['slugToUrl']
slug_to_alt = mappings['slugToAlt']

# Read conditions.tsx
with open('components/data/conditions.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

print('Starting conditions.tsx update...')
changes_made = 0

# Function to find slug in an object
def find_slug_in_object(obj_text):
    match = re.search(r'slug:\s*["\']([^"\']+)["\']', obj_text)
    return match.group(1) if match else None

# Update conditionContentPlaceholders array (new format)
# Find objects with heroImage and heroImageAlt
def update_new_format():
    global content, changes_made
    
    # Pattern to find heroImage lines
    hero_image_pattern = r'(heroImage:\s*["\'])([^"\']+)(["\'])'
    
    for match in re.finditer(hero_image_pattern, content):
        old_url = match.group(2)
        # Find the object this belongs to by looking for slug nearby
        start_pos = max(0, match.start() - 2000)
        end_pos = min(len(content), match.end() + 500)
        context = content[start_pos:end_pos]
        
        slug_match = re.search(r'slug:\s*["\']([^"\']+)["\']', context)
        if slug_match:
            slug = slug_match.group(1)
            if slug in slug_to_url:
                new_url = slug_to_url[slug]
                if old_url != new_url:
                    content = content.replace(match.group(0), f'{match.group(1)}{new_url}{match.group(3)}')
                    changes_made += 1
                    print(f'  Updated heroImage for {slug}')
    
    # Pattern to find heroImageAlt lines
    alt_pattern = r'(heroImageAlt:\s*["\'])([^"\']*?)(["\'])'
    
    for match in re.finditer(alt_pattern, content):
        old_alt = match.group(2)
        # Find slug nearby
        start_pos = max(0, match.start() - 2000)
        end_pos = min(len(content), match.end() + 500)
        context = content[start_pos:end_pos]
        
        slug_match = re.search(r'slug:\s*["\']([^"\']+)["\']', context)
        if slug_match:
            slug = slug_match.group(1)
            if slug in slug_to_alt:
                new_alt = slug_to_alt[slug]
                if old_alt != new_alt:
                    content = content.replace(match.group(0), f'{match.group(1)}{new_alt}{match.group(3)}')
                    changes_made += 1
                    print(f'  Updated heroImageAlt for {slug}')

update_new_format()

print(f'\nTotal changes made: {changes_made}')

# Write updated content
with open('components/data/conditions.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('conditions.tsx updated successfully!')
