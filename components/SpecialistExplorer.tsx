"use client";

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import styles from './SpecialistExplorer.module.css';

type Scene = { title: string; label: string; color: string; views: [string,string,string]; notes: [string,string,string] };
const scenes: Record<string,Scene> = {
 'spine-specialist': {title:'See the bigger picture',label:'Your spine, in focus',color:'#63dcff',views:['Neck','Mid-back','Lower back'],notes:['Describe neck symptoms and any changes in your arms or hands.','Share where discomfort sits and how it affects daily movement.','Tell your specialist about back symptoms and any changes in your legs.']},
 'back-pain-doctor': {title:'Start with your everyday',label:'Your movement story',color:'#83e3c1',views:['Sitting','Standing','Walking'],notes:['Notice whether sitting changes your symptoms and how long you feel comfortable.','Describe how standing affects your back and whether changing position helps.','Share how far you can walk comfortably and what makes you stop.']},
 'scoliosis-doctor': {title:'More than a curve',label:'A whole-person perspective',color:'#bdaaff',views:['Alignment','Balance','Daily life'],notes:['Bring previous spine imaging if available so your specialist can review alignment.','Describe any changes you have noticed in posture or balance.','Explain which activities matter most to you when discussing your care goals.']},
 'sciatica-doctor': {title:'Trace your symptom story',label:'From your back to your leg',color:'#ffbc8a',views:['Back','Buttock','Leg'],notes:['Tell your specialist whether back discomfort accompanies your leg symptoms.','Describe which side is affected and where the discomfort begins.','Share how far symptoms travel and any numbness or weakness.']},
 'spinal-stenosis-specialist': {title:'Make room for questions',label:'Understanding the spaces',color:'#80caff',views:['Spinal canal','Nerve opening','Walking'],notes:['Your specialist can explain what your imaging shows about the spinal canal.','Ask how imaging findings relate to the symptoms you describe.','Discuss your walking tolerance and whether rest or position changes symptoms.']},
 'herniated-disc-specialist': {title:'Look beneath the surface',label:'A layered view of a disc',color:'#ff9faa',views:['Outer layer','Inner material','Nearby nerve'],notes:['Ask your specialist to explain the disc findings on your scan.','Imaging is considered alongside your symptoms and examination.','Describe any symptoms extending into an arm or leg when reviewing your scan.']},
 'pinched-nerve-doctor': {title:'Connect the clues',label:'Your nerve symptom map',color:'#f4d68b',views:['Sensation','Strength','Location'],notes:['Describe tingling or numbness, including when it happens and how long it lasts.','Tell your specialist about changes in grip, lifting, or walking.','Point out where symptoms start and whether they spread elsewhere.']},
};

export default function SpecialistExplorer({slug}:{slug:string}) {
 const scene=scenes[slug];
 const [active,setActive]=useState(0);
 const [replay,setReplay]=useState(0);
 const reduced=useReducedMotion();
 const id=useId();
 if(!scene)return null;
 const color=scene.color;
 const transition={duration:reduced?0:0.75,ease:'easeInOut' as const};
 const spine=(curved=false)=>Array.from({length:15},(_,i)=>{
  const x=curved?200+Math.sin(i/2.6)*35:200+Math.sin(i/5)*8;
  const lit=Math.floor(i/5)===active;
  return <motion.rect key={i} x={x-22} y={48+i*17} width={44} height={12} rx={5} animate={{attrX:x-22+(curved&&active===1?Math.sin(i/3)*9:0),fill:lit?color:'#284462',opacity:lit?1:0.6}} transition={transition}/>;
 });
 return <div className={styles.explorer} style={{'--scene-color':color} as React.CSSProperties}>
  <div className={styles.topline}><span>{scene.label}</span><button type="button" onClick={()=>setReplay(r=>r+1)} aria-label="Replay illustration"><RotateCcw size={16}/></button></div>
  <div className={styles.stage}>
   <svg viewBox="0 0 400 350" role="img" aria-label={`${scene.label}: ${scene.views[active]}. Conceptual illustration, not a diagnostic image.`}>
    <defs><radialGradient id={`${id}-halo`}><stop stopColor={color} stopOpacity=".22"/><stop offset="1" stopColor={color} stopOpacity="0"/></radialGradient></defs>
    <circle cx="200" cy="175" r="165" fill={`url(#${id}-halo)`}/>
    {[95,135,170].map(r=><circle key={r} cx="200" cy="175" r={r} fill="none" stroke="#fff" strokeOpacity=".07" strokeDasharray="3 9"/>)}
    <motion.g key={replay} initial={reduced?false:{opacity:.85,scale:.98}} animate={{opacity:1,scale:1}} transition={transition}>
     {slug==='spine-specialist'&&<>{spine()}<motion.circle cx="205" r="52" fill="none" stroke={color} strokeWidth="1.5" animate={{cy:90+active*85}} transition={transition}/><motion.path d="M95 80H150M250 165H310M100 260H145" stroke={color} strokeWidth="2" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:reduced?0:1.5}}/></>}
     {slug==='scoliosis-doctor'&&<><path d="M200 35V315M100 175H300" stroke="#ffffff35" strokeDasharray="4 7"/>{spine(true)}<motion.ellipse cx="200" cy="175" rx="98" ry="130" fill="none" stroke={color} strokeWidth="2" animate={{rotate:active===0?-12:active===1?12:0,rx:active===2?130:98}} transition={transition}/></>}
     {slug==='back-pain-doctor'&&<>{[0,1,2].map((n)=><motion.g key={n} animate={{opacity:active===n?1:.25,scale:active===n?1.08:1}} transition={transition}><circle cx={200+Math.sin(n*2.094)*106} cy={175-Math.cos(n*2.094)*106} r="29" fill="#162f4b" stroke={color}/><text x={200+Math.sin(n*2.094)*106} y={181-Math.cos(n*2.094)*106} textAnchor="middle" fill="white" fontSize="12">{scene.views[n]}</text></motion.g>)}<motion.circle cx="200" cy="175" r="58" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 8" animate={{rotate:active*120}} transition={transition}/><path d="M170 179h18l9-25 12 47 10-22h15" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/></>}
     {slug==='sciatica-doctor'&&<><path d="M184 45C168 90 182 124 210 151S252 201 230 242L208 309" fill="none" stroke="#35516b" strokeWidth="40" strokeLinecap="round"/><motion.path d="M184 45C168 90 182 124 210 151S252 201 230 242L208 309" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" animate={{pathLength:(active+1)/3}} transition={transition}/><motion.circle r="17" fill={color} fillOpacity=".35" stroke={color} animate={{cx:[181,210,223][active],cy:[100,151,263][active]}} transition={transition}/></>}
     {slug==='spinal-stenosis-specialist'&&<>{[0,1,2].map(n=><motion.ellipse key={n} cx="200" cy="175" fill="none" stroke={n===active?color:'#42617d'} strokeWidth={n===0?35:2} animate={{rx:[90,130,155][n],ry:[75,115,140][n],rotate:active*25+n*12}} transition={transition}/>)}<path d="M200 115v120M180 150l20 20 25-15M180 195l20-15 25 20" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/></>}
     {slug==='herniated-disc-specialist'&&<>{[0,1,2].map(n=><motion.ellipse key={n} cx="200" fill={n===1?color:'#173451'} fillOpacity={n===1?.6:1} stroke={color} strokeOpacity=".7" strokeWidth="2" animate={{cy:active===0?120+n*55:150+n*24,rx:n===1?62:100,ry:n===1?25:40}} transition={transition}/>)}<motion.path d="M315 70C275 120 340 200 290 290" fill="none" stroke={active===2?'white':color} strokeWidth="4" animate={{pathLength:1,opacity:active===2?1:.3}} transition={transition}/></>}
     {slug==='pinched-nerve-doctor'&&<>{[-1,0,1].map((n)=><motion.path key={n} d={`M80 175C160 175 200 ${175+n*95} 315 ${175+n*95}`} fill="none" stroke={active===n+1?color:'#385169'} strokeWidth={active===n+1?5:2} animate={{pathLength:1,opacity:active===n+1?1:.5}} transition={transition}/>)}{[-1,0,1].map(n=><motion.circle key={n} cx="315" cy={175+n*95} r={active===n+1?16:8} fill={color} animate={{opacity:active===n+1?1:.3}} transition={transition}/>)}<circle cx="80" cy="175" r="24" fill="#1d3853" stroke={color}/></>}
    </motion.g>
   </svg>
   <span className={styles.caption}>CONCEPTUAL VIEW · {String(active+1).padStart(2,'0')} / 03</span>
  </div>
  <h2>{scene.title}</h2>
  <div className={styles.choices} aria-label="Explore illustration views">{scene.views.map((view,index)=><button type="button" key={view} aria-pressed={active===index} onClick={()=>setActive(index)}>{view}</button>)}</div>
  <p className={styles.note} aria-live="polite">{scene.notes[active]}</p>
  <a className={styles.next} href="#first-appointment">Explore your first visit <ArrowUpRight size={16}/></a>
 </div>;
}
