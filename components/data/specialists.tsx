import type { StaticImageData } from "next/image";
import { Doctors } from "@/components/data/doctors";

export interface SpecialistPageProp {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  conditionName: string;
  relatedConditionSlug?: string;
  relatedTreatmentSlugs?: string[];
  whenToSeeSpecialist: {
    intro: string;
    triggers: string[];
    redFlags: string[];
  };
  firstAppointment: {
    intro: string;
    steps: { title: string; body: string }[];
  };
  treatmentPathway: {
    nonSurgical: string[];
    surgical: string[];
  };
  physicianSlugs: string[];
  faqs: { question: string; answer: string }[];
  ogImage: string;
  updatedAt: string;
}

const sharedAccessFaqs = [
  {
    question: "Do I need a referral?",
    answer:
      "No referral is needed to request an appointment. Some health plans may have their own referral requirements, so our scheduling team can help you identify what to confirm before your visit.",
  },
  {
    question: "How soon can I be seen?",
    answer:
      "Same-day to same-week appointments are often available, depending on the clinic and physician schedule. Our team provides same-day callbacks so you can discuss the earliest appropriate opening.",
  },
  {
    question: "Are you open on weekends?",
    answer:
      "Mountain Spine & Orthopedics is available from 8AM to 8PM, seven days a week. Appointment availability varies by clinic, and our scheduling team can help identify the closest opening.",
  },
  {
    question: "What insurance do you accept?",
    answer:
      "Mountain Spine & Orthopedics works with {{INSURANCE_LINE}} Please contact the office before your visit so the team can verify your plan details and expected benefits.",
  },
];

const spinePhysicians = [
  "dr-christopher-mccarthy",
  "dr-douglas-slaughter",
  "dr-steven-schiebert",
];

export const SpecialistPages: SpecialistPageProp[] = [
  {
    slug: "spine-specialist",
    h1: "Find a Spine Specialist Near You",
    metaTitle: "Spine Specialist Near You | Mountain Spine",
    metaDescription:
      "Meet a spine specialist for persistent back, neck, or nerve symptoms. Same-day to same-week visits are often available. Request an appointment.",
    primaryKeyword: "spine specialist near me",
    secondaryKeywords: ["spine doctor near me", "spine surgeon near me"],
    intro:
      "Persistent back, neck, or nerve symptoms can make it difficult to know which kind of doctor to see. A Mountain Spine & Orthopedics spine specialist evaluates your symptoms, examination findings, and available imaging together before recommending next steps. Our physicians provide both non-surgical and surgical perspectives across Florida, New Jersey, New York, Pennsylvania, and Georgia, with same-day callbacks and same-day to same-week appointments often available.",
    conditionName: "Spine Conditions",
    relatedConditionSlug: "lower-back-pain",
    relatedTreatmentSlugs: [
      "epidural-steroid-injection",
      "lumbar-decompression",
      "spinal-fusion",
    ],
    whenToSeeSpecialist: {
      intro:
        "A focused spine evaluation is appropriate when symptoms persist, return repeatedly, or begin to affect strength, sensation, sleep, work, or daily movement.",
      triggers: [
        "Back or neck pain that has not improved with reasonable activity changes",
        "Pain that travels into an arm, hand, buttock, leg, or foot",
        "Recurring numbness, tingling, burning, or electric sensations",
        "Weakness, reduced grip, foot slapping, or difficulty with balance",
        "An MRI or X-ray finding that needs to be matched to your symptoms",
        "A recommendation for spine surgery that you want reviewed",
      ],
      redFlags: [
        "New loss of bladder or bowel control, saddle numbness, or rapidly worsening leg weakness requires emergency evaluation.",
        "Severe pain after major trauma, or back pain with fever and significant illness, should be assessed urgently.",
      ],
    },
    firstAppointment: {
      intro:
        "Your first visit is designed to identify the likely pain source and give you a practical plan, not simply repeat the wording of an imaging report.",
      steps: [
        { title: "History and goals", body: "Your specialist reviews how the problem began, where symptoms travel, what makes them better or worse, prior care, and the activities you need to regain." },
        { title: "Focused examination", body: "Strength, sensation, reflexes, gait, alignment, and condition-specific movements help show whether symptoms are coming from a disc, joint, nerve, or another structure." },
        { title: "Imaging review", body: "Existing X-rays, MRI, or CT images are compared with your examination. Additional imaging is recommended only when it can answer a specific clinical question." },
        { title: "Options and next step", body: "You receive an explanation of the working diagnosis, reasonable non-surgical options, and when a procedure or surgical opinion may be appropriate." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Activity modification and monitored return to movement", "Medication and pain-management review", "Image-guided epidural or targeted diagnostic injections", "Observation with follow-up when symptoms are stable"],
      surgical: ["Targeted nerve decompression", "Microdiscectomy when disc material compresses a nerve", "Spinal fusion when instability or deformity requires stabilization"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "Should I bring my MRI to a spine specialist?", answer: "Yes. Bring the image files and report if they are available, along with prior X-rays, procedure records, and a current medication list. The images are most useful when reviewed alongside your symptoms and examination." },
      { question: "Does seeing a spine surgeon mean I need surgery?", answer: "No. A surgical specialist can determine whether an operation is relevant, but many evaluations lead to monitoring, injections, pain management, or another non-surgical plan." },
    ],
    ogImage: "/default-og.png",
    updatedAt: "2026-09-07",
  },
  {
    slug: "back-pain-doctor",
    h1: "Find a Back Pain Doctor Near You",
    metaTitle: "Back Pain Doctor Near You | Mountain Spine",
    metaDescription:
      "See a back pain doctor for persistent, recurring, or radiating symptoms. Same-day callbacks and prompt appointments are available. Book an evaluation.",
    primaryKeyword: "back doctor near me",
    secondaryKeywords: ["back pain doctor near me"],
    intro:
      "Back pain may come from muscles, discs, joints, nerves, alignment, or more than one structure at once. A Mountain Spine & Orthopedics back pain doctor looks for the source that best explains your pattern instead of treating an image alone. We evaluate new, persistent, and recurring symptoms across Florida, New Jersey, New York, Pennsylvania, and Georgia, with same-day callbacks and same-day to same-week appointments often available.",
    conditionName: "Lower Back Pain",
    relatedConditionSlug: "lower-back-pain",
    relatedTreatmentSlugs: ["epidural-steroid-injection", "lumbar-decompression", "spinal-fusion"],
    whenToSeeSpecialist: {
      intro: "An appointment is reasonable when back pain is not settling, keeps returning, or begins to limit walking, sitting, sleep, work, or exercise.",
      triggers: [
        "Pain lasting longer than expected after rest and activity changes",
        "Back pain that spreads into the buttock, thigh, calf, or foot",
        "Numbness, tingling, or weakness accompanying back pain",
        "Symptoms that worsen with standing, walking, sitting, bending, or lifting",
        "Repeated episodes that interrupt work, sleep, or normal activity",
        "Uncertainty about whether an MRI finding explains the pain",
      ],
      redFlags: [
        "Loss of bladder or bowel control, saddle numbness, or rapidly progressive weakness requires emergency care.",
        "Back pain after significant trauma, or pain with fever, chills, or severe illness, needs prompt medical assessment.",
      ],
    },
    firstAppointment: {
      intro: "The first appointment connects your history, physical findings, and imaging so the plan addresses the likely pain generator and your priorities.",
      steps: [
        { title: "Symptom mapping", body: "You describe the location, timing, triggers, and functional impact of the pain, including any leg symptoms and treatments already tried." },
        { title: "Back and nerve examination", body: "The doctor assesses movement, tenderness, strength, sensation, reflexes, and walking to distinguish mechanical pain from nerve involvement." },
        { title: "Imaging correlation", body: "Available studies are reviewed for findings that match the clinical pattern. Common age-related changes are separated from findings likely to matter." },
        { title: "Personalized pathway", body: "The visit ends with clear next steps, which may include activity guidance, pain management, an injection, monitoring, additional testing, or a surgical discussion." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Short-term activity modification", "Medication and pain-management strategies", "Targeted diagnostic or epidural injections", "Monitoring with planned reassessment"],
      surgical: ["Lumbar decompression for confirmed nerve compression", "Microdiscectomy for a symptomatic disc herniation", "Fusion when instability, deformity, or painful motion is confirmed"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "Which doctor should I see for back pain?", answer: "A spine-focused orthopedic physician is appropriate when pain persists, travels into a leg, includes numbness or weakness, or has not responded to initial care. Emergency symptoms should be evaluated immediately." },
      { question: "Will I need an MRI before my first visit?", answer: "Not always. Existing imaging is helpful, but the doctor may first examine you and decide which study, if any, will answer the clinical question most accurately." },
    ],
    ogImage: "/BackPaincard.jpg",
    updatedAt: "2026-09-07",
  },
  {
    slug: "scoliosis-doctor",
    h1: "Find a Scoliosis Doctor and Specialist",
    metaTitle: "Scoliosis Doctor & Specialist | Mountain Spine",
    metaDescription:
      "Meet a scoliosis doctor for adult curve, alignment, pain, or nerve symptoms. Get a detailed imaging review and a plan tailored to your goals.",
    primaryKeyword: "scoliosis doctor",
    secondaryKeywords: ["scoliosis specialist near me", "scoliosis treatment near me"],
    intro:
      "Adult scoliosis care requires more than measuring a curve on a single image. A Mountain Spine & Orthopedics scoliosis doctor evaluates spinal balance, curve pattern, nerve symptoms, bone health, and the activities that matter to you. Our specialists review both non-surgical and surgical options across Florida, New Jersey, New York, Pennsylvania, and Georgia, with same-day callbacks and prompt appointment access for new and existing patients.",
    conditionName: "Adult Degenerative Scoliosis",
    relatedConditionSlug: "adult-degenerative-scoliosis",
    relatedTreatmentSlugs: ["epidural-steroid-injection", "adult-scoliosis-surgery", "spinal-fusion"],
    whenToSeeSpecialist: {
      intro: "A scoliosis-focused evaluation can clarify whether symptoms come from the curve itself, degeneration around it, nerve compression, or a separate pain source.",
      triggers: [
        "A visible change in posture, shoulder height, waistline, or trunk balance",
        "Back pain that increases with standing or walking",
        "Leg pain, numbness, weakness, or reduced walking tolerance",
        "A known curve that appears to be progressing in adulthood",
        "Difficulty standing upright or increasing fatigue from spinal imbalance",
        "A recommendation for deformity surgery that you want reviewed",
      ],
      redFlags: [
        "Sudden bladder or bowel changes, saddle numbness, or rapidly worsening weakness requires emergency evaluation.",
        "New severe pain after a fall or other trauma, especially with known low bone density, needs urgent assessment.",
      ],
    },
    firstAppointment: {
      intro: "The first visit defines how the curve affects alignment, nerves, daily function, and treatment decisions rather than relying on the curve angle alone.",
      steps: [
        { title: "History and function", body: "Your doctor reviews the curve history, pain pattern, walking and standing tolerance, prior treatment, bone health, and changes you have noticed." },
        { title: "Alignment examination", body: "Posture, shoulder and pelvic balance, gait, flexibility, strength, sensation, and reflexes are assessed for mechanical and neurological effects." },
        { title: "Standing imaging review", body: "Standing full-length X-rays, when available, are used to evaluate overall balance. MRI or CT may be reviewed when nerve compression or surgical planning is relevant." },
        { title: "Prioritized plan", body: "The specialist explains which findings matter now, what can be monitored, and when targeted symptom care or reconstructive surgery deserves consideration." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Activity modification based on symptom triggers", "Medication and pain-management review", "Targeted injections for a confirmed pain source", "Curve and symptom monitoring with repeat standing imaging when clinically indicated"],
      surgical: ["Decompression for selected nerve compression", "Alignment correction when imbalance is disabling", "Instrumented spinal fusion when stabilization is required"],
    },
    physicianSlugs: ["dr-christopher-mccarthy", "dr-douglas-slaughter", "dr-howard-sharf"],
    faqs: [
      ...sharedAccessFaqs,
      { question: "What imaging should I bring to a scoliosis appointment?", answer: "Bring any prior standing X-rays, MRI or CT images, reports, and earlier curve measurements. Comparing studies over time can help the doctor assess progression and identify findings that match your symptoms." },
      { question: "Does adult scoliosis always require surgery?", answer: "No. The decision depends on symptoms, progression, spinal balance, nerve involvement, overall health, and response to non-surgical care. Many adults are monitored or treated without an operation." },
    ],
    ogImage: "/AdultDegenerativeScoliosis.png",
    updatedAt: "2026-09-07",
  },
  {
    slug: "sciatica-doctor",
    h1: "Find a Sciatica Doctor Near You",
    metaTitle: "Sciatica Doctor Near You | Mountain Spine",
    metaDescription:
      "See a sciatica doctor for radiating leg pain, numbness, tingling, or weakness. Get an exam, imaging review, and a clear treatment pathway.",
    primaryKeyword: "sciatica doctor near me",
    secondaryKeywords: ["sciatica specialist"],
    intro:
      "Sciatica describes pain or nerve symptoms that travel from the lower back or buttock into the leg. The important question is what is irritating the nerve and where. A Mountain Spine & Orthopedics sciatica doctor combines a focused neurological examination with available imaging to identify the likely source. Same-day callbacks and same-day to same-week appointments are often available across our five-state care footprint.",
    conditionName: "Sciatica",
    relatedConditionSlug: "sciatica",
    relatedTreatmentSlugs: ["epidural-steroid-injection", "lumbar-microdiscectomy-surgery", "lumbar-decompression"],
    whenToSeeSpecialist: {
      intro: "See a specialist when radiating leg symptoms persist, recur, or are accompanied by sensory change, weakness, or a meaningful loss of function.",
      triggers: [
        "Pain running from the back or buttock into the thigh, calf, or foot",
        "Numbness, tingling, burning, or electric sensations in one leg",
        "Pain that worsens with sitting, coughing, bending, standing, or walking",
        "Weakness when lifting the foot, pushing off, climbing stairs, or rising",
        "Symptoms that have not improved with reasonable activity changes",
        "A disc or stenosis finding on MRI that needs clinical interpretation",
      ],
      redFlags: [
        "New bladder or bowel dysfunction, saddle numbness, or weakness progressing over hours or days requires emergency evaluation.",
        "Severe bilateral leg symptoms or rapidly declining ability to walk should be assessed urgently.",
      ],
    },
    firstAppointment: {
      intro: "The visit is structured to identify the affected nerve pattern, determine whether imaging agrees, and choose the least invasive reasonable next step.",
      steps: [
        { title: "Nerve-pattern history", body: "You map where pain, numbness, or tingling travels and discuss onset, triggers, duration, prior episodes, and any change in strength or walking." },
        { title: "Neurological examination", body: "Strength, reflexes, sensation, gait, and nerve-tension maneuvers help localize which nerve root may be irritated." },
        { title: "Imaging comparison", body: "MRI or other available studies are reviewed to see whether the side and level of compression match the examination." },
        { title: "Treatment decision", body: "Your doctor explains whether monitoring, pain management, a targeted injection, decompression, or microdiscectomy is reasonable and what would change that plan." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Activity modification while avoiding prolonged inactivity", "Medication and pain-management review", "Image-guided epidural or selective nerve-root injection", "Monitoring of stable sensory symptoms and strength"],
      surgical: ["Microdiscectomy for a matching herniated disc", "Lumbar decompression for stenosis affecting the nerve", "Fusion only when instability or another structural problem also requires stabilization"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "What kind of doctor treats sciatica?", answer: "A spine-focused orthopedic physician can evaluate the nerve pattern, identify whether a disc, stenosis, or another structure is involved, and discuss both non-surgical and surgical options." },
      { question: "Can I be evaluated if I already have an MRI?", answer: "Yes. Bring the images and report. The doctor will compare them with your symptom pattern and examination because an MRI finding alone does not show whether it is causing the current symptoms." },
    ],
    ogImage: "/sciatica.png",
    updatedAt: "2026-09-07",
  },
  {
    slug: "spinal-stenosis-specialist",
    h1: "Find a Spinal Stenosis Specialist Near You",
    metaTitle: "Spinal Stenosis Specialist | Mountain Spine",
    metaDescription:
      "Meet a spinal stenosis specialist for walking limits, radiating pain, numbness, or weakness. Request a focused exam and imaging review today.",
    primaryKeyword: "spinal stenosis specialist near me",
    secondaryKeywords: [],
    intro:
      "Spinal stenosis can affect the central canal, the nerve exits, or both, and treatment depends on which narrowing actually matches your symptoms. A Mountain Spine & Orthopedics spinal stenosis specialist evaluates walking tolerance, balance, strength, sensation, reflexes, and imaging together. We offer same-day callbacks and same-day to same-week appointments across Florida, New Jersey, New York, Pennsylvania, and Georgia for patients seeking a clear next step.",
    conditionName: "Spinal Stenosis",
    relatedConditionSlug: "spinal-stenosis",
    relatedTreatmentSlugs: ["epidural-steroid-injection", "lumbar-decompression", "spinal-fusion"],
    whenToSeeSpecialist: {
      intro: "A specialist assessment is useful when standing or walking brings on symptoms, nerve changes are developing, or imaging shows narrowing that needs clinical interpretation.",
      triggers: [
        "Leg pain, heaviness, numbness, or weakness with standing or walking",
        "Symptoms that improve when sitting or leaning forward",
        "Arm or hand symptoms with neck stenosis findings",
        "Reduced walking distance or increasing need for support",
        "Balance difficulty, hand clumsiness, or frequent dropping of objects",
        "Persistent symptoms despite activity changes or prior injections",
      ],
      redFlags: [
        "New bladder or bowel changes, saddle numbness, or rapidly progressing weakness requires emergency care.",
        "Sudden major loss of balance, severe weakness, or inability to walk safely needs urgent assessment.",
      ],
    },
    firstAppointment: {
      intro: "Your first visit establishes whether the location and severity of narrowing explain your limitations and whether treatment should focus on symptoms, nerves, or stability.",
      steps: [
        { title: "Function review", body: "The doctor asks how far you can walk, what positions trigger or relieve symptoms, and how pain, numbness, balance, or hand function has changed." },
        { title: "Neurological examination", body: "Strength, sensation, reflexes, gait, balance, and region-specific maneuvers help identify the nerves or spinal cord pathways involved." },
        { title: "Imaging localization", body: "MRI, CT, and X-rays are reviewed to locate narrowing and determine whether alignment or instability also matters." },
        { title: "Escalation plan", body: "You receive a staged plan that may include monitoring, symptom management, injections, decompression, or stabilization, with clear reasons for each option." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Activity modification and pacing", "Medication and pain-management review", "Epidural or targeted diagnostic injections", "Monitoring when function and neurological findings remain stable"],
      surgical: ["Focused decompression of the affected canal or nerve exit", "Multilevel decompression when clinically necessary", "Fusion when decompression would worsen instability or deformity is present"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "When should spinal stenosis be evaluated by a specialist?", answer: "Evaluation is appropriate when walking or standing brings on leg symptoms, when arm or hand function changes, or when numbness, weakness, or balance difficulty is progressing." },
      { question: "Does spinal stenosis always get worse?", answer: "Not in a predictable way. Symptoms, function, examination findings, and imaging all matter. A specialist can define what should be monitored and which changes would justify a different treatment approach." },
    ],
    ogImage: "/CervicalSpinalStenosis.png",
    updatedAt: "2026-09-07",
  },
  {
    slug: "herniated-disc-specialist",
    h1: "Find a Herniated Disc Specialist Near You",
    metaTitle: "Herniated Disc Specialist | Mountain Spine",
    metaDescription:
      "See a herniated disc specialist for radiating pain, numbness, tingling, or weakness. Get an exam, MRI correlation, and treatment options.",
    primaryKeyword: "herniated disc specialist near me",
    secondaryKeywords: [],
    intro:
      "A herniated disc matters when displaced disc material irritates or compresses a nerve and matches the symptoms you feel. A Mountain Spine & Orthopedics herniated disc specialist reviews the pain pattern, neurological examination, and MRI together before discussing treatment. Same-day callbacks and same-day to same-week appointments are often available throughout our Florida, New Jersey, New York, Pennsylvania, and Georgia care footprint.",
    conditionName: "Lumbar Herniated Disc",
    relatedConditionSlug: "lumbar-herniated-disc",
    relatedTreatmentSlugs: ["epidural-steroid-injection", "lumbar-microdiscectomy-surgery", "lumbar-decompression"],
    whenToSeeSpecialist: {
      intro: "Specialist review is appropriate when disc-related symptoms persist, interfere with daily life, or include sensory or strength changes that need closer assessment.",
      triggers: [
        "Pain traveling from the back into one leg or from the neck into one arm",
        "Numbness, tingling, burning, or electric sensations in a limb",
        "Weakness in the foot, leg, hand, or arm",
        "Symptoms aggravated by sitting, bending, coughing, or sneezing",
        "An MRI showing a herniation that has not been matched to an examination",
        "Persistent symptoms after reasonable non-surgical care",
      ],
      redFlags: [
        "Bladder or bowel dysfunction, saddle numbness, or rapidly worsening weakness requires emergency evaluation.",
        "Sudden severe weakness, including a new foot drop, should be assessed promptly.",
      ],
    },
    firstAppointment: {
      intro: "The first appointment determines whether the disc finding is clinically meaningful, which nerve is affected, and how urgently treatment should progress.",
      steps: [
        { title: "Symptom timeline", body: "You review onset, limb distribution, triggers, prior episodes, medications, injections, and any change in strength, sensation, sleep, or work capacity." },
        { title: "Nerve examination", body: "Strength, reflexes, sensation, gait, and nerve-tension testing help identify the likely affected level and severity." },
        { title: "MRI correlation", body: "The specialist compares disc location, side, and nerve contact with the examination rather than treating the scan in isolation." },
        { title: "Shared decision", body: "You discuss expected monitoring, pain-management options, targeted injections, and when microdiscectomy or another decompression may be reasonable." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Temporary activity modification", "Medication and pain-management review", "Targeted epidural injection when appropriate", "Observation with neurological follow-up when symptoms are stable"],
      surgical: ["Lumbar microdiscectomy for persistent matching nerve compression", "Cervical or lumbar decompression based on the affected region", "Fusion only when instability or another structural indication is also present"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "Do all herniated discs require surgery?", answer: "No. Many are managed without surgery. The decision depends on pain, function, weakness, examination findings, imaging correlation, duration, and response to non-surgical care." },
      { question: "Should I bring the MRI images or only the report?", answer: "Bring both when possible. The images let the specialist see the disc, nerve relationship, and surrounding anatomy directly; the report remains useful context." },
    ],
    ogImage: "/LumbarHerniatedDisc.png",
    updatedAt: "2026-09-07",
  },
  {
    slug: "pinched-nerve-doctor",
    h1: "Find a Pinched Nerve Doctor Near You",
    metaTitle: "Pinched Nerve Doctor Near You | Mountain Spine",
    metaDescription:
      "See a pinched nerve doctor for radiating pain, tingling, numbness, or weakness. Get a focused neurological exam and imaging review. Book today.",
    primaryKeyword: "pinched nerve doctor near me",
    secondaryKeywords: [],
    intro:
      "A pinched nerve can cause pain, tingling, numbness, or weakness along a specific path into an arm or leg. Finding the site and cause of compression is essential because symptoms can arise from a disc, narrowed nerve exit, bone spur, or another structure. A Mountain Spine & Orthopedics doctor provides focused examination and imaging review, with same-day callbacks and prompt appointments across our five-state care footprint.",
    conditionName: "Pinched Nerve",
    relatedConditionSlug: "pinched-nerve",
    relatedTreatmentSlugs: ["nerve-block-injection", "epidural-steroid-injection", "lumbar-decompression"],
    whenToSeeSpecialist: {
      intro: "Arrange an evaluation when nerve symptoms persist, follow a clear arm or leg pathway, or begin to affect strength, dexterity, balance, or walking.",
      triggers: [
        "Shooting, burning, or electric pain into an arm or leg",
        "Numbness or tingling in a consistent hand, finger, foot, or toe pattern",
        "Weak grip, difficulty lifting the arm, foot slapping, or trouble pushing off",
        "Symptoms worsened by particular neck or back positions",
        "Recurring nerve symptoms that interrupt sleep, work, or driving",
        "Imaging that shows possible nerve compression and needs correlation",
      ],
      redFlags: [
        "New bladder or bowel changes, saddle numbness, or rapidly worsening leg weakness requires emergency evaluation.",
        "Major sudden weakness, severe balance loss, or rapidly spreading numbness should be assessed urgently.",
      ],
    },
    firstAppointment: {
      intro: "The first visit localizes the nerve pattern, tests how well the nerve is functioning, and identifies which structural findings are likely relevant.",
      steps: [
        { title: "Pattern review", body: "You identify where symptoms begin and travel, which positions change them, when they started, and whether dexterity, strength, or walking has changed." },
        { title: "Focused nerve testing", body: "The doctor checks strength, sensation, reflexes, gait, and provocative maneuvers to narrow the affected nerve and region." },
        { title: "Imaging and test review", body: "MRI, X-rays, CT, or prior electrodiagnostic results are compared with the clinical pattern. Additional tests are ordered only when they may change the plan." },
        { title: "Cause-specific pathway", body: "Treatment is matched to the likely cause and may include monitoring, pain management, a targeted injection, decompression, or another specialist referral." },
      ],
    },
    treatmentPathway: {
      nonSurgical: ["Activity modification that avoids the provoking position", "Medication and pain-management review", "Selective nerve-root or epidural injection", "Monitoring of stable strength and sensation"],
      surgical: ["Foraminotomy or focused nerve decompression", "Microdiscectomy when a disc fragment is the matching cause", "Broader decompression or stabilization when stenosis or instability is involved"],
    },
    physicianSlugs: spinePhysicians,
    faqs: [
      ...sharedAccessFaqs,
      { question: "What kind of doctor treats a pinched nerve?", answer: "A spine-focused orthopedic physician can localize nerve compression in the neck or lower back, review imaging, and discuss non-surgical care as well as decompression when appropriate." },
      { question: "How is the affected nerve identified?", answer: "The doctor compares the symptom pathway with strength, sensation, reflex, and movement findings. MRI or other testing may then confirm the location and likely cause of compression." },
    ],
    ogImage: "/PinchedNerve.png",
    updatedAt: "2026-09-07",
  },
];

const knownDoctorSlugs = new Set(Doctors.map((doctor) => doctor.slug));

for (const page of SpecialistPages) {
  if (page.physicianSlugs.includes("dr-scott-katzman")) {
    throw new Error(`Specialist page ${page.slug} includes an excluded physician.`);
  }

  for (const physicianSlug of page.physicianSlugs) {
    if (!knownDoctorSlugs.has(physicianSlug)) {
      throw new Error(
        `Specialist page ${page.slug} references unknown physician ${physicianSlug}.`,
      );
    }
  }
}

// Keep the import explicitly type-only while documenting the requested image type.
export type SpecialistImageData = StaticImageData;
