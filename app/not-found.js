// app/not-found.js or app/404/page.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
}