import fs from 'fs';
import path from 'path';

const base = 'https://mountainspineorthopedics.com';
const txt = fs.readFileSync(path.resolve('public/crawlednotindexed.txt'),'utf8')
              .split(/\r?\n/).filter(Boolean);

const redirects: {source:string; destination:string; permanent:true}[] = [];
const disallows: string[] = [];
const orphans: string[] = [];

function slugify(str:string){ return str.toLowerCase().replace(/[^a-z0-9-]+/g,'-') }

for (const url of txt){
  // normalise www → non-www
  const clean = url.replace('https://www.','https://');

  // STATIC ASSET
  if (/\/\_next\/static\/media\//.test(clean)){
     const dir = clean.replace(base,'').split('/').slice(0,-1).join('/');
     disallows.push(`Disallow: ${dir}/*`);
     continue;
  }

  // AREA-OF-SPECIALITY → CONDITIONS
  if (/\/area-of-speciality\//.test(clean)){
     const conditionSlug = clean.split('/').pop()!.replace(/[^a-zA-Z0-9-]/g,'').toLowerCase();
     redirects.push({
       source: `/area-of-speciality/${conditionSlug}`,
       destination: `/conditions/${conditionSlug}`,
       permanent: true
     });
     continue;
  }

  // WWW DOMAIN redirect
  if (url.startsWith('https://www.')){
     redirects.push({
       source: clean.replace(base,''),
       destination: clean.replace('https://www.','https://'),
       permanent: true
     });
     continue;
  }

  // Everything else → orphan list
  orphans.push(clean);
}

// 2.  WRITE robots.txt additions  (dedupe)
if (disallows.length){
  const robotsPath = path.resolve('public/robots.txt');
  const current = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath,'utf8') : '';
  const lines = new Set(current.split(/\r?\n/).filter(Boolean).concat(disallows));
  fs.writeFileSync(robotsPath, [...lines].join('\n') + '\n');
  console.log('• robots.txt updated');
}

// 3.  APPEND redirects to next.config.js
if (redirects.length){
  const cfgPath = path.resolve('next.config.js');
  let cfg = fs.existsSync(cfgPath)
           ? fs.readFileSync(cfgPath,'utf8')
           : '/** @type {import("next").NextConfig} */\nmodule.exports = { async redirects(){ return []; } }';
  // inject into redirects() return array
  cfg = cfg.replace(/return\s*\[/, match => `${match}\n  ${JSON.stringify(redirects, null,2).slice(1,-1)},`);
  fs.writeFileSync(cfgPath, cfg);
  console.log(`• ${redirects.length} redirects appended to next.config.js`);
}

// 4.  CREATE orphan report
if (orphans.length){
  const md = ['# Orphan Pages (need internal links or redirects)\n',
              '| URL | Next action |',
              '|-----|-------------|',
              ...orphans.map(u=>`| ${u} | _add link / create page / 410_ |`)
             ].join('\n');
  fs.mkdirSync('seo',{recursive:true});
  fs.writeFileSync('seo/orphans.md', md);
  console.log(`• orphans.md created with ${orphans.length} entries`);
} 