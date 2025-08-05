import { ORPHAN_URLS } from '../scripts/orphans';
import { AllTreatments } from './data/treatments';
import { conditions } from './data/conditions';

function slugToTitle(slug: string) {
  const treat = AllTreatments.find(t => `/treatments/${t.slug}` === slug);
  if (treat) return treat.title;
  const cond = conditions.find(c => `/area-of-specialty/${c.slug}` === slug);
  if (cond) return cond.title;
  const last = slug.split('/').filter(Boolean).pop() || '';
  return last.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function OrphanLinksFooter() {
  const links = ORPHAN_URLS
    .map(url => ({ url, title: slugToTitle(url) }))
    .sort((a, b) => a.title.localeCompare(b.title));
  return (
    <nav aria-label="Hidden crawler nav" className="sr-only">
      <ul className="space-y-1">
        {links.map(link => (
          <li key={link.url}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 
