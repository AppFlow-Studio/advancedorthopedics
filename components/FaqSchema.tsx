'use client';
import Head from 'next/head';

export default function FaqSchema({ schema }: { schema: any }) {
  if (!schema) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
}
