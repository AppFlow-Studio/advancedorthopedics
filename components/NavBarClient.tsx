'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBarClient({ links }) {
  const [open,setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg">
          {links.map(l=>(
            <Link key={l.href} href={l.href} className="block px-4 py-2">{l.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
} 
