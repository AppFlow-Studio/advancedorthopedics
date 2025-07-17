import { NavBarLinks } from './NavBarLinks';
import Link from 'next/link';
import NavBarClient from './NavBarClient';

export default function NavBar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">Mountain Spine</Link>
        {/* Desktop links */}
        <nav className="hidden md:flex gap-6">
          {NavBarLinks.map(l=>(
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        {/* Mobile / interactive */}
        <NavBarClient links={NavBarLinks} />
      </div>
    </header>
  );
} 