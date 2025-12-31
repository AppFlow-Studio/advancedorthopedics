export interface FAQItem {
  question: string;
  answer: string;
}

export const treatmentFAQs: Record<string, FAQItem[]> = {
  // 1. Revision Spinal Surgery
  "revision-spinal-surgery": [
    {
      question: "What is the success rate of revision spinal surgery?",
      answer: "The <strong>success rate of revision spinal surgery</strong> varies by condition but generally ranges between <strong>60% and 80%</strong> for pain relief. While lower than primary surgery due to scar tissue and anatomical changes, modern techniques like computer-navigated placement of <strong>pedicle screws</strong> have significantly improved outcomes for correcting <strong>pseudoarthrosis</strong> (failed fusion) and adjacent segment disease."
    },
    {
      question: "Is revision spine surgery more painful than the first?",
      answer: "Yes, <strong>revision spine surgery</strong> is often more painful initially than the first procedure because it involves working through scar tissue and often requires more extensive reconstruction. However, specialized <strong>pain management protocols</strong> are used to ensure patient comfort, and the long-term relief from nerve compression typically outweighs the surgical recovery period."
    },
    {
      question: "How long is the recovery for revision spinal surgery?",
      answer: "Recovery is typically longer than the initial surgery, often requiring <strong>3 to 5 days in the hospital</strong> and <strong>3 to 6 months</strong> for bone fusion to solidify. Patients may need to wear a back brace for support during the first 6 to 12 weeks while avoiding bending, lifting, and twisting."
    },
    {
      question: "What are the risks of revision spine surgery?",
      answer: "Risks include a higher rate of infection, dural tears (spinal fluid leak), and nerve injury compared to primary surgery. Utilizing a specialized <strong>orthopedic spine surgeon</strong> who uses intraoperative neuromonitoring drastically reduces these risks."
    }
  ],

  // 2. Multilevel Degenerative Disc Disease Surgery
  "multilevel-degenerative-disc-disease-surgery": [
    {
      question: "Can surgery fix multilevel degenerative disc disease?",
      answer: "Yes, surgery is effective for <strong>multilevel degenerative disc disease</strong> when conservative care fails. Options include <strong>multilevel spinal fusion</strong> to stabilize the spine or <strong>hybrid surgery</strong> (combining fusion and disc replacement) to preserve motion while correcting instability across multiple spinal segments."
    },
    {
      question: "How long is the recovery for 3-level spinal fusion?",
      answer: "Recovery from a <strong>3-level spinal fusion</strong> is a major process, typically requiring <strong>6 to 12 months</strong> for complete bone healing. Patients usually walk the day after surgery but must strictly limit physical activity for the first 3 months to ensure the grafts fuse properly."
    },
    {
      question: "Does multilevel fusion limit mobility?",
      answer: "Yes, fusing multiple levels of the spine will reduce flexibility in that specific region. However, most patients find that the elimination of debilitating pain allows for better overall functional mobility than they had prior to surgery."
    },
    {
      question: "Is multilevel disc replacement an option?",
      answer: "For qualified patients with healthy facet joints, <strong>multilevel artificial disc replacement</strong> (up to 2 levels) can be performed to maintain neck or back motion. This reduces the risk of adjacent segment disease compared to long fusion constructs."
    }
  ],

  // 3. Anterior Lumbar Corpectomy and Fusion
  "anterior-lumbar-corpectomy-and-fusion": [
    {
      question: "What happens during an Anterior Lumbar Corpectomy?",
      answer: "During an <strong>Anterior Lumbar Corpectomy</strong>, the surgeon removes the entire vertebral body and the adjacent discs to decompress the spinal cord. A <strong>vertebral body replacement (VBR) cage</strong> filled with bone graft is inserted to reconstruct the spine and promote <strong>spinal fusion</strong>."
    },
    {
      question: "Is a corpectomy a major surgery?",
      answer: "Yes, a <strong>corpectomy</strong> is a major, complex spinal surgery used for severe trauma, tumors, or infection. Despite its complexity, the anterior approach (from the front) allows for direct decompression of the nerves without moving the sensitive spinal cord."
    },
    {
      question: "What is the recovery time for a lumbar corpectomy?",
      answer: "Patients typically remain in the hospital for <strong>3 to 5 days</strong>. A custom back brace is worn for <strong>6 to 12 weeks</strong>, and full recovery with solid bone fusion generally takes <strong>6 to 12 months</strong> depending on the patient's bone quality."
    },
    {
      question: "Can you walk after corpectomy surgery?",
      answer: "Yes, patients are encouraged to walk as soon as possible, often the day after surgery, to prevent blood clots and pneumonia. Walking is the primary form of exercise during the initial 6-week recovery phase."
    }
  ],

  // 4. Anterior Lumbar Interbody Fusion
  "anterior-lumbar-interbody-fusion": [
    {
      question: "What are the benefits of ALIF over posterior fusion?",
      answer: "<strong>ALIF (Anterior Lumbar Interbody Fusion)</strong> allows for the placement of a larger interbody cage, which provides better correction of spinal alignment (lordosis) and a larger surface area for fusion. It also avoids cutting through the large back muscles, leading to less post-operative pain."
    },
    {
      question: "Does ALIF surgery require a vascular surgeon?",
      answer: "Yes, an <strong>access surgeon</strong> (vascular surgeon) typically assists during <strong>ALIF surgery</strong> to safely move the major blood vessels (aorta and vena cava) aside, ensuring clear access to the front of the spine."
    },
    {
      question: "How long does it take to recover from ALIF surgery?",
      answer: "Most patients go home within <strong>1 to 2 days</strong>. While bone fusion takes months, many patients return to light desk work in <strong>2 to 4 weeks</strong> and more active pursuits by <strong>3 months</strong>."
    },
    {
      question: "What are the permanent restrictions after ALIF?",
      answer: "Once the fusion is solid (usually after 1 year), there are rarely permanent restrictions. However, patients are often advised to use proper lifting mechanics and avoid extreme heavy loading of the spine to protect adjacent levels."
    }
  ],

  // 5. Hybrid Lumbar Spine Surgery
  "hybrid-lumbar-spine-surgery": [
    {
      question: "What is hybrid lumbar spine surgery?",
      answer: "<strong>Hybrid lumbar spine surgery</strong> combines two techniques: <strong>artificial disc replacement</strong> at one level (to preserve motion) and <strong>spinal fusion</strong> at an adjacent level (to stabilize severe degeneration). This offers a balanced approach for multilevel disease."
    },
    {
      question: "Who is a candidate for hybrid spine surgery?",
      answer: "Ideal candidates have disease at multiple levels where one level is too degenerated for replacement (requiring fusion) but the adjacent level is healthy enough for an artificial disc. This minimizes the stiffness associated with multi-level fusion."
    },
    {
      question: "Is hybrid surgery recovery faster than fusion?",
      answer: "Recovery is generally similar to fusion because bone healing is still required at the fused level. However, patients often report better long-term function and flexibility compared to an all-fusion approach."
    },
    {
      question: "What are the risks of hybrid spine surgery?",
      answer: "Risks are similar to standard spine surgery, including infection and implant migration. There is also a small risk that the artificial disc level may eventually degenerate and require conversion to a fusion."
    }
  ],

  // 6. Lumbar Fusion Surgery
  "lumbar-fusion-surgery": [
    {
      question: "What is the success rate of lumbar fusion surgery?",
      answer: "The <strong>success rate for lumbar fusion</strong> in treating spondylolisthesis and instability is high, typically <strong>85-95%</strong>. Success for treating solely 'back pain' without instability is variable, emphasizing the need for proper patient selection and diagnosis."
    },
    {
      question: "How long does back pain last after fusion surgery?",
      answer: "Acute surgical pain diminishes significantly within <strong>2 to 4 weeks</strong>. However, patients may experience intermittent muscular soreness for <strong>3 to 6 months</strong> as they rehabilitate and the fusion solidifies."
    },
    {
      question: "Can screws come loose after lumbar fusion?",
      answer: "Yes, screw loosening can occur if the bone fails to fuse (<strong>pseudoarthrosis</strong>). This risk is higher in smokers and patients with osteoporosis. Following post-op restrictions and using bone growth stimulators helps prevent this."
    },
    {
      question: "When can I drive after lumbar fusion?",
      answer: "Most patients can return to driving <strong>2 to 4 weeks</strong> after surgery, provided they are off narcotic pain medication and can safely operate the vehicle without severe pain."
    }
  ],

  // 7. Spinal Fusion
  "spinal-fusion": [
    {
      question: "What are the permanent restrictions after spinal fusion?",
      answer: "For a single-level fusion, there are few <strong>permanent restrictions</strong>. For multi-level fusions, doctors typically advise avoiding <strong>heavy deadlifts</strong>, high-impact contact sports, and extreme spinal twisting to prevent adjacent segment disease."
    },
    {
      question: "How serious is spinal fusion surgery?",
      answer: "<strong>Spinal fusion</strong> is a major orthopedic procedure. While safe and common, it involves a recovery period of several months. It is reserved for cases where instability, deformity, or severe nerve compression cannot be treated non-surgically."
    },
    {
      question: "Does spinal fusion stop you from bending?",
      answer: "A single-level fusion limits motion only at that specific segment, which is barely noticeable. Even with multi-level fusions, patients can still bend at the hips (hip-hinge) to pick things up, maintaining good functional mobility."
    },
    {
      question: "What is the 'dark side' of spinal fusion?",
      answer: "The 'dark side' refers to <strong>Adjacent Segment Disease</strong>, where the discs above and below the fusion wear out faster due to increased stress. This can occur years later, potentially requiring additional surgery. Minimally invasive techniques aim to reduce this risk."
    }
  ],

  // 8. Understanding TLIF Surgery
  "understanding-tlif-surgery": [
    {
      question: "What does TLIF stand for in spine surgery?",
      answer: "<strong>TLIF</strong> stands for <strong>Transforaminal Lumbar Interbody Fusion</strong>. It is a technique where the surgeon accesses the disc space from the back (posterior) but comes in from the side, minimizing the need to retract the spinal nerves."
    },
    {
      question: "Is TLIF surgery minimally invasive?",
      answer: "Yes, <strong>MIS-TLIF (Minimally Invasive TLIF)</strong> uses tubular retractors and small incisions. This results in less blood loss, less muscle damage, and a shorter hospital stay (often 1-2 days) compared to open surgery."
    },
    {
      question: "How long does it take for a TLIF cage to fuse?",
      answer: "While the titanium or PEEK cage provides immediate stability, the actual <strong>bone fusion</strong> takes <strong>6 to 12 months</strong> to fully mature. X-rays at follow-up appointments will track this progress."
    },
    {
      question: "Is TLIF safer than PLIF?",
      answer: "Generally, <strong>TLIF</strong> is considered safer for the nerves than PLIF (Posterior Lumbar Interbody Fusion) because it requires less retraction of the thecal sac to place the cage, reducing the risk of nerve injury."
    }
  ],

  // 9. Posterior Cervical Fusion With Instrumentation
  "posterior-cervical-fusion-with-instrumentation-surgery": [
    {
      question: "Why is instrumentation used in cervical fusion?",
      answer: "<strong>Instrumentation</strong> (screws and rods) acts as an internal brace, holding the cervical spine rigidly in place immediately after surgery. This drastically increases the <strong>fusion success rate</strong> compared to using bone graft alone."
    },
    {
      question: "How long do I wear a collar after posterior cervical fusion?",
      answer: "Patients typically wear a rigid cervical collar for <strong>6 to 12 weeks</strong> after posterior fusion. This prevents neck motion and supports the heavy head while the posterior muscles heal."
    },
    {
      question: "Is posterior cervical fusion more painful than anterior?",
      answer: "Yes, <strong>posterior cervical fusion</strong> is generally more painful than anterior (ACDF) surgery because it involves dissecting the thick muscles at the back of the neck. Muscle spasms are common but managed with medication and therapy."
    },
    {
      question: "Can the hardware be removed later?",
      answer: "Hardware is rarely removed unless it causes irritation, infection, or breaks. In most cases, the titanium screws and rods remain in the body permanently without issues."
    }
  ],

  // 10. Posterior Cervical Fusion Surgery
  "posterior-cervical-fusion-surgery": [
    {
      question: "When is posterior cervical fusion recommended?",
      answer: "It is recommended for conditions that cannot be treated from the front, such as multilevel <strong>cervical stenosis</strong>, ossification of the posterior longitudinal ligament (OPLL), or to repair a <strong>pseudarthrosis</strong> (failed fusion) from a previous anterior surgery."
    },
    {
      question: "What is the recovery time for posterior cervical fusion?",
      answer: "Full recovery takes <strong>6 to 12 months</strong>. Patients usually return to desk work in 4-6 weeks but must avoid heavy lifting or overhead work for at least 3 months."
    },
    {
      question: "Does this surgery correct neck deformity?",
      answer: "Yes, <strong>posterior cervical fusion</strong> is excellent for correcting <strong>cervical kyphosis</strong> (forward hunching of the neck) and restoring proper alignment to relieve strain on the spinal cord."
    },
    {
      question: "What are the risks?",
      answer: "Risks include C5 nerve palsy (temporary shoulder weakness), infection, and wound healing issues. Smoking significantly increases the risk of complications and non-union."
    }
  ],

  // 11. Anterior Cervical Corpectomy and Fusion
  "anterior-cervical-corpectomy-and-fusion": [
    {
      question: "What is the difference between ACDF and ACCF?",
      answer: "ACDF removes just the disc, while <strong>ACCF (Anterior Cervical Corpectomy and Fusion)</strong> removes the disc and the vertebral bone. ACCF is used when spinal cord compression extends behind the bone itself."
    },
    {
      question: "Is cervical corpectomy dangerous?",
      answer: "While it is a higher-risk procedure than ACDF due to the extent of bone removal, it is highly effective for preventing paralysis in patients with severe <strong>cervical myelopathy</strong>. Intraoperative monitoring makes it safer."
    },
    {
      question: "Do I need a plate for corpectomy?",
      answer: "Yes, a metal plate is screwed into the vertebrae above and below the removed bone to hold the graft or cage in place. This provides immediate stability for the <strong>cervical spine</strong>."
    },
    {
      question: "How long is the hospital stay?",
      answer: "The stay is typically <strong>2 to 4 days</strong>. Swallowing difficulty (dysphagia) is a common temporary side effect that is monitored closely before discharge."
    }
  ],

  // 12. ACDF Surgery
  "acdf-surgery": [
    {
      question: "What is the recovery time for ACDF surgery?",
      answer: "Most patients recover from <strong>ACDF surgery</strong> within <strong>4 to 6 weeks</strong> for light activities. Full bone fusion takes 3 to 6 months. Arm pain relief is often immediate, while neck muscle strength returns gradually."
    },
    {
      question: "What are the permanent restrictions after ACDF surgery?",
      answer: "There are typically few <strong>permanent restrictions</strong> once the fusion is solid. Patients are advised to avoid high-impact sports like football to protect the adjacent levels, but can return to gym workouts, running, and swimming."
    },
    {
      question: "How serious is ACDF surgery?",
      answer: "<strong>ACDF</strong> is a common and highly successful spine surgery. While 'major' because it involves the spine, it is often performed as an outpatient procedure with a low complication rate."
    },
    {
      question: "Does ACDF limit neck movement?",
      answer: "A single-level ACDF results in very little loss of motion. Even with 2 or 3 levels fused, patients are often surprised by how much neck mobility they retain because the unfused segments compensate."
    }
  ],

  // 13. Lumbar Disc Replacement Surgery
  "lumbar-disc-replacement-surgery": [
    {
      question: "Am I a candidate for lumbar disc replacement?",
      answer: "Ideal candidates are generally under 60, have <strong>single-level degenerative disc disease</strong>, and have no significant arthritis in the facet joints. It is designed to preserve motion in active patients."
    },
    {
      question: "How long does a lumbar disc replacement last?",
      answer: "Modern artificial discs are tested to last <strong>40+ years</strong>. Unlike hip or knee replacements, they do not bear the full weight of the body in the same way, leading to excellent long-term durability."
    },
    {
      question: "Is disc replacement better than fusion?",
      answer: "For the right patient, <strong>disc replacement</strong> is superior because it preserves spinal motion and reduces the risk of adjacent level degeneration. However, if the joints are arthritic, fusion is the better option."
    },
    {
      question: "What is the recovery time?",
      answer: "Recovery is faster than fusion because there is no bone graft to heal. Patients often return to non-impact activities in <strong>2 to 4 weeks</strong> and full sports in <strong>3 months</strong>."
    }
  ],

  // 14. Artificial Disc Replacement Surgery
  "artificial-disc-replacement-surgery": [
    {
      question: "Does insurance cover artificial disc replacement?",
      answer: "Yes, most major insurance plans and Medicare cover <strong>artificial disc replacement</strong> for the cervical spine (neck). Coverage for lumbar (back) replacement is becoming more common but varies by policy."
    },
    {
      question: "Can an artificial disc slip out?",
      answer: "Implant migration is extremely rare. The artificial disc is anchored into the bone. Over time, the bone grows into the surface of the implant (osseointegration), locking it permanently in place."
    },
    {
      question: "What materials are artificial discs made of?",
      answer: "Most devices use a combination of medical-grade <strong>titanium</strong>, cobalt-chromium alloy, and high-density polyethylene (plastic) to mimic the natural movement and shock absorption of a healthy disc."
    },
    {
      question: "Is it reversible?",
      answer: "While technically reversible, removing an artificial disc is complex. If a replacement fails, it is typically converted to a <strong>spinal fusion</strong> rather than replaced with another device."
    }
  ],

  // 15. Cervical Disc Arthroplasty
  "cervical-disc-arthroplasty": [
    {
      question: "What is the difference between ACDF and arthroplasty?",
      answer: "ACDF fuses the bones together, stopping motion. <strong>Cervical Disc Arthroplasty</strong> replaces the damaged disc with a movable implant, maintaining natural neck motion and reducing stress on other discs."
    },
    {
      question: "Who is eligible for cervical disc arthroplasty?",
      answer: "Patients with 1 or 2 levels of herniated discs causing arm pain (radiculopathy) who do not have severe arthritis, instability, or osteoporosis are excellent candidates."
    },
    {
      question: "How soon can I drive after cervical arthroplasty?",
      answer: "Most patients can drive within <strong>1 to 2 weeks</strong>, once they can turn their head comfortably and are off narcotic pain medication."
    },
    {
      question: "What is the success rate?",
      answer: "Success rates are very high (<strong>over 90%</strong>) for relief of arm pain. Studies show it provides equivalent or better outcomes than fusion with fewer long-term complications."
    }
  ],

  // 16. Motion Preservation Spine Surgery
  "motion-preservation-spine-surgery": [
    {
      question: "What types of motion preservation surgery exist?",
      answer: "The main types include <strong>Artificial Disc Replacement</strong>, <strong>Posterior Cervical Laminoplasty</strong> (opening space without fusion), and <strong>Dynamic Stabilization</strong> systems. These preserve natural spine mechanics."
    },
    {
      question: "Why choose motion preservation?",
      answer: "The primary goal is to prevent <strong>Adjacent Segment Disease</strong>. By keeping the treated level moving, stress is not transferred to the discs above and below, preserving the overall health of the spine."
    },
    {
      question: "Is motion preservation surgery safe?",
      answer: "Yes, these are FDA-approved procedures with extensive clinical data supporting their safety and efficacy, particularly for younger patients wishing to maintain an active lifestyle."
    },
    {
      question: "Can I play sports after motion preservation surgery?",
      answer: "Yes, one of the biggest advantages is the ability to return to sports like golf, tennis, and running without the stiffness associated with spinal fusion."
    }
  ],

  // 17. Total Hip Replacement
  "total-hip-replacement": [
    {
      question: "What are the lifetime restrictions after hip replacement?",
      answer: "Modern <strong>hip replacements</strong> have few restrictions. Doctors advise avoiding high-impact running or jumping. Low-impact activities like cycling, swimming, hiking, and golf are highly encouraged."
    },
    {
      question: "How long does a total hip replacement last?",
      answer: "With modern ceramic-on-plastic bearings, <strong>total hip replacements</strong> can last <strong>20 to 30 years</strong>. This longevity makes surgery a viable option even for younger patients with severe arthritis."
    },
    {
      question: "What is the fastest way to recover from hip surgery?",
      answer: "The fastest recovery comes from <strong>early ambulation</strong> (walking the day of surgery) and strictly following physical therapy exercises. Choosing the <strong>Direct Anterior Approach</strong> often leads to faster early recovery due to muscle preservation."
    },
    {
      question: "Can I sleep on my side after hip replacement?",
      answer: "You typically need to sleep on your back or non-operative side with a pillow between your legs for the first <strong>4 to 6 weeks</strong> to prevent dislocation while the tissues heal."
    }
  ],

  // 18. Total Knee Replacement
  "total-knee-replacement": [
    {
      question: "How painful is total knee replacement recovery?",
      answer: "<strong>Total knee replacement</strong> is known to be painful in the first 2 weeks due to the need for early movement. However, advanced <strong>nerve blocks</strong> and multimodal pain management have significantly reduced acute post-op pain."
    },
    {
      question: "How long until I can walk without a walker?",
      answer: "Most patients transition from a walker to a cane within <strong>2 to 3 weeks</strong> and are walking unassisted by <strong>4 to 6 weeks</strong>. Full strength and balance continue to improve for up to a year."
    },
    {
      question: "Can I kneel after knee replacement?",
      answer: "You *can* kneel, but it may feel uncomfortable or strange due to the lack of sensation in the scar or pressure on the implant. Using a cushioned kneeling pad usually solves this issue."
    },
    {
      question: "What is the success rate?",
      answer: "The procedure is one of the most successful in medicine, with <strong>over 90%</strong> of patients experiencing dramatic pain relief and improved function for daily activities."
    }
  ],

  // 19. Posterior Cervical Laminoplasty
  "posterior-cervical-laminoplasty": [
    {
      question: "What is a laminoplasty?",
      answer: "<strong>Laminoplasty</strong> is a motion-sparing surgery where the lamina (roof of the spine) is hinged open like a door to create more space for the spinal cord, relieving compression without fusing the bones."
    },
    {
      question: "Is laminoplasty better than laminectomy?",
      answer: "For many patients, yes. Unlike laminectomy (which removes bone), <strong>laminoplasty</strong> preserves the bone and natural posterior tension band, reducing the risk of post-surgical instability and deformity."
    },
    {
      question: "What is the recovery time?",
      answer: "Recovery takes <strong>6 to 12 weeks</strong>. Patients wear a soft collar for comfort for a few weeks. Range of motion exercises begin early to maintain the preserved neck flexibility."
    },
    {
      question: "Who is a candidate?",
      answer: "Candidates are patients with <strong>cervical myelopathy</strong> involving 3 or more levels who do not have significant neck pain or kyphosis (forward curvature)."
    }
  ],

  // 20. Posterior Cervical Foraminotomy Surgery
  "posterior-cervical-foraminotomy-surgery": [
    {
      question: "What does a foraminotomy treat?",
      answer: "A <strong>posterior cervical foraminotomy</strong> treats <strong>radiculopathy</strong> (pinched nerve) by shaving away a small amount of bone and disc to enlarge the neural foramen, the tunnel where the nerve exits the spine."
    },
    {
      question: "Is fusion required with foraminotomy?",
      answer: "No, this is a <strong>decompression-only</strong> procedure. The stability of the spine is maintained, and no screws or rods are implanted, preserving full range of motion."
    },
    {
      question: "How minimally invasive is it?",
      answer: "It is very minimally invasive. It can often be done through a small tube (16-18mm) as an outpatient surgery, with patients returning to desk work in just <strong>1 to 2 weeks</strong>."
    },
    {
      question: "What is the success rate?",
      answer: "Success rates for arm pain relief are <strong>85-95%</strong>. It is an excellent alternative to ACDF for patients with lateral disc herniations."
    }
  ],

  // 21. Lumbar Laminectomy Surgery
  "lumbar-laminectomy-surgery": [
    {
      question: "Does laminectomy weaken the back?",
      answer: "<strong>Lumbar laminectomy</strong> removes the lamina and spinous process. While it alters the anatomy, it does not cause instability in most patients. If instability is already present (spondylolisthesis), a fusion may be added."
    },
    {
      question: "How long does it take to recover?",
      answer: "Recovery is relatively quick. Patients walk immediately and return to light activity in <strong>2 to 4 weeks</strong>. Unrestricted activity is usually allowed after <strong>6 to 8 weeks</strong>."
    },
    {
      question: "Will my back pain go away after laminectomy?",
      answer: "Laminectomy is designed to treat <strong>leg pain (sciatica)</strong> and heaviness caused by stenosis. While it helps leg symptoms significantly, it may not relieve localized lower back pain caused by arthritis."
    },
    {
      question: "Can stenosis return after laminectomy?",
      answer: "Yes, over many years, bone spurs or disc bulges can reoccur at the same level or adjacent levels, a condition known as <strong>restenosis</strong>, potentially requiring further treatment."
    }
  ],

  // 22. Lumbar Decompression
  "lumbar-decompression": [
    {
      question: "What is lumbar decompression?",
      answer: "<strong>Lumbar decompression</strong> is a general term for procedures (laminectomy, discectomy, foraminotomy) that free compressed nerves to treat <strong>spinal stenosis</strong> or herniated discs."
    },
    {
      question: "Is lumbar decompression major surgery?",
      answer: "It ranges from minimally invasive micro-procedures to open surgery. Most isolated decompressions are considered <strong>moderate</strong> surgeries performed on an outpatient basis."
    },
    {
      question: "How do I sleep after lumbar decompression?",
      answer: "It is best to sleep on your back with a pillow under your knees, or on your side with a pillow between your knees. This relieves tension on the lower back nerves."
    },
    {
      question: "What are the restrictions?",
      answer: "The 'No BLT' rule applies: <strong>No Bending, Lifting (>10lbs), or Twisting</strong> for the first 4 to 6 weeks to prevent recurrent disc herniation or hematoma."
    }
  ],

  // 23. Lumbar Microendoscopic Discectomy Surgery
  "lumbar-microendoscopic-discectomy-surgery": [
    {
      question: "What is the difference between microdiscectomy and endoscopic discectomy?",
      answer: "Microdiscectomy uses a microscope and a small incision (~1 inch). <strong>Microendoscopic discectomy (MED)</strong> uses a tube and a camera (endoscope) with an even smaller incision (<1 inch), causing less muscle trauma."
    },
    {
      question: "How fast is recovery from MED?",
      answer: "Recovery is rapid. Patients often leave the surgery center within hours. Many return to sedentary work in <strong>1 week</strong> and light exercise in <strong>3 to 4 weeks</strong>."
    },
    {
      question: "Is MED effective for large herniations?",
      answer: "Yes, the endoscopic view allows the surgeon to see and remove even large or migrated disc fragments safely while navigating around the nerve roots."
    },
    {
      question: "What is the recurrence rate?",
      answer: "The risk of re-herniation is about <strong>5-10%</strong>, which is similar to standard microdiscectomy. Following post-op lifting restrictions is crucial to preventing this."
    }
  ],

  // 24. Lumbar Microdiscectomy Surgery
  "lumbar-microdiscectomy-surgery": [
    {
      question: "How long does leg pain last after microdiscectomy?",
      answer: "For most patients, <strong>leg pain (sciatica)</strong> relief is immediate upon waking from surgery. Some may experience temporary numbness or tingling as the compressed nerve heals over weeks."
    },
    {
      question: "Can I climb stairs after microdiscectomy?",
      answer: "Yes, you can climb stairs immediately, but you should do so slowly and utilize the handrail. Avoid carrying heavy objects up and down stairs for the first few weeks."
    },
    {
      question: "Is microdiscectomy a permanent fix?",
      answer: "It is a permanent removal of the herniated portion of the disc. However, the remaining disc can degenerate further over time. Maintaining a strong core helps prevent future issues."
    },
    {
      question: "What is the incision size?",
      answer: "The incision is typically very small, about <strong>1 to 1.5 inches</strong> long, placed in the midline of the lower back. It usually heals with a minimal cosmetic scar."
    }
  ],

  // 25. Degenerative Disc Disease Surgery
  "degenerative-disc-disease-surgery": [
    {
      question: "When should I have surgery for DDD?",
      answer: "Surgery for <strong>Degenerative Disc Disease (DDD)</strong> is considered only after 6 months of non-surgical treatment (PT, injections) has failed to relieve disabling pain that affects daily life."
    },
    {
      question: "Does surgery cure degenerative disc disease?",
      answer: "Surgery does not 'cure' the disease, which is a natural aging process. Instead, it treats the painful symptoms by stabilizing the painful joint (fusion) or removing the source of pain (replacement)."
    },
    {
      question: "What are the best surgical options for DDD?",
      answer: "The gold standards are <strong>Spinal Fusion</strong> (for stability) and <strong>Artificial Disc Replacement</strong> (for motion). Intradiscal therapies and stem cells are also emerging as non-surgical options."
    },
    {
      question: "How successful is surgery for DDD?",
      answer: "Success relies on accurate diagnosis. If the disc is confirmed as the sole pain generator (often via discogram), success rates for pain reduction are typically <strong>70-80%</strong>."
    }
  ],

  // 26. Percutaneous Discectomy
  "percutaneous-discectomy": [
    {
      question: "What is percutaneous discectomy?",
      answer: "<strong>Percutaneous discectomy</strong> is a minimally invasive procedure where a needle/probe is inserted into the disc to remove or vaporize disc material, reducing pressure on the nerve without an incision."
    },
    {
      question: "Who is a candidate?",
      answer: "Candidates are patients with small, <strong>contained disc herniations</strong> (where the outer wall is intact) who have sciatica but no severe stenosis or bone spurs."
    },
    {
      question: "Is it done under general anesthesia?",
      answer: "Usually, no. It is often performed under <strong>local anesthesia with sedation</strong>, allowing the patient to communicate with the surgeon during the procedure to ensure safety."
    },
    {
      question: "What is the recovery time?",
      answer: "Recovery is extremely fast. Patients go home the same day with just a Band-Aid. Most return to work in <strong>2 to 3 days</strong>."
    }
  ],

  // 27. Resurfacing Shoulder Replacement
  "resurfacing-shoulder-replacement": [
    {
      question: "What is the difference between resurfacing and total shoulder replacement?",
      answer: "Total replacement removes the entire humeral head (ball). <strong>Resurfacing</strong> simply places a smooth metal cap over the existing bone, preserving more of the patient's natural anatomy."
    },
    {
      question: "Who is a candidate for shoulder resurfacing?",
      answer: "It is ideal for <strong>young, active patients</strong> with osteoarthritis who have healthy rotator cuff tendons and good bone quality. It preserves bone for potential future surgeries."
    },
    {
      question: "What is the recovery timeline?",
      answer: "Patients wear a sling for <strong>3 to 6 weeks</strong>. Physical therapy starts immediately to prevent stiffness. Full return to sports and heavy activity typically takes <strong>4 to 6 months</strong>."
    },
    {
      question: "How long does the implant last?",
      answer: "Implants are durable, often lasting <strong>15 to 20 years</strong>. If it eventually fails, it can be easily converted to a total shoulder replacement."
    }
  ],

  // 28. Hip Arthroscopy Treatment
  "hip-arthroscopy-treatment": [
    {
      question: "What does hip arthroscopy treat?",
      answer: "<strong>Hip arthroscopy</strong> is used to repair <strong>labral tears</strong>, reshape bone in Femoroacetabular Impingement (FAI), and remove loose cartilage bodies or inflamed synovium."
    },
    {
      question: "How long am I on crutches after hip arthroscopy?",
      answer: "Most patients use crutches for <strong>2 to 4 weeks</strong> to protect the repair, especially if the labrum was refixed to the bone. Weight-bearing is graduated slowly."
    },
    {
      question: "Is hip arthroscopy major surgery?",
      answer: "It is a minimally invasive outpatient surgery, but recovery can be lengthy. While the incisions are small, the internal repair requires <strong>3 to 6 months</strong> of rehab for full sports return."
    },
    {
      question: "Can hip arthroscopy prevent hip replacement?",
      answer: "Yes, by correcting impingement (FAI) early, <strong>hip arthroscopy</strong> can prevent further cartilage damage and potentially delay or eliminate the need for hip replacement later in life."
    }
  ],

  // 29. Arthroscopic Knee Surgery
  "arthroscopic-knee-surgery": [
    {
      question: "Is knee arthroscopy worth it for arthritis?",
      answer: "<strong>Arthroscopic knee surgery</strong> is generally *not* recommended for treating arthritis alone. It is highly effective for mechanical symptoms like locking, catching, or meniscus tears, but does not regrow cartilage."
    },
    {
      question: "How long does swelling last?",
      answer: "Swelling is common for <strong>4 to 8 weeks</strong> after surgery. Regular icing, elevation, and compression stockings help resolve this fluid buildup."
    },
    {
      question: "When can I drive after knee arthroscopy?",
      answer: "Patients can typically drive in <strong>3 to 5 days</strong> (left knee) or <strong>1 to 2 weeks</strong> (right knee), once they have good braking control and are off pain medication."
    },
    {
      question: "What is the recovery for a meniscus trim?",
      answer: "If the meniscus is trimmed (partial meniscectomy), recovery is fast. Patients walk immediately and return to sports in <strong>4 to 6 weeks</strong>."
    }
  ],

  // 30. Rotator Cuff Repair Surgery
  "rotator-cuff-repair-surgery": [
    {
      question: "How painful is rotator cuff surgery?",
      answer: "It can be one of the more painful orthopedic recoveries due to the shoulder's sensitivity. <strong>Nerve blocks</strong> provide relief for the first 24 hours, and sleeping in a recliner is recommended for the first few weeks."
    },
    {
      question: "What is the 'danger zone' of recovery?",
      answer: "The period between <strong>6 and 12 weeks</strong> is critical. The shoulder feels better, but the tendon is not fully healed. Doing too much too soon during this window can cause the repair to fail."
    },
    {
      question: "How long does it take to heal completely?",
      answer: "The tendon heals to the bone in about 3 months, but full strength recovery takes <strong>6 to 9 months</strong>. Patience with physical therapy is key to a good outcome."
    },
    {
      question: "Can I lift my arm immediately?",
      answer: "No. You will be in a sling for <strong>4 to 6 weeks</strong>. Passive motion (therapist moving your arm) starts early, but active lifting is strictly forbidden until the tendon heals."
    }
  ],

  // 31. Meniscus Repair Surgery
  "meniscus-repair-surgery": [
    {
      question: "Repair vs. Removal: Which is better?",
      answer: "<strong>Meniscus repair</strong> (stitching it) is better for long-term knee health as it preserves the shock absorber. Removal (meniscectomy) has a faster recovery but increases the risk of future arthritis."
    },
    {
      question: "How long on crutches for meniscus repair?",
      answer: "Because the repair needs protection, patients are often on crutches with limited weight-bearing for <strong>4 to 6 weeks</strong>, unlike the rapid return seen with removal."
    },
    {
      question: "What is the success rate?",
      answer: "Success rates are <strong>80-90%</strong> for acute tears in younger patients. Success is lower for degenerative tears in older patients, where removal is often the preferred option."
    },
    {
      question: "Can the meniscus tear again?",
      answer: "Yes, re-tears can occur, especially in high-impact athletes. Following the slow progression of deep squatting and twisting exercises reduces this risk."
    }
  ],

  // 32. Disc Replacement vs Fusion
  "disc-replacement-vs-fusion-what-you-need-to-know": [
    {
      question: "Which has a faster recovery: fusion or replacement?",
      answer: "<strong>Disc replacement</strong> typically offers a faster recovery (return to activity in 4-6 weeks) because there is no need to wait for bones to fuse together, unlike fusion which takes 3-6 months."
    },
    {
      question: "Can fusion be converted to replacement?",
      answer: "No, once a spinal segment is fused, it cannot be 'unfused' and replaced. However, patients with a previous fusion can often have a replacement at a *new* adjacent level."
    },
    {
      question: "Which surgery is safer?",
      answer: "Both have similar safety profiles regarding the approach. <strong>Disc replacement</strong> has a lower risk of causing future problems at other spinal levels (adjacent segment disease)."
    },
    {
      question: "Why would a doctor recommend fusion over replacement?",
      answer: "Fusion is necessary if you have <strong>spinal instability</strong>, severe facet joint arthritis, deformity (scoliosis), or poor bone quality (osteoporosis), as replacement requires good bone and stable joints to function."
    }
  ],

  // 33. Ankle Ligament Reconstruction Surgery
  "ankle-ligament-reconstruction-surgery": [
    {
      question: "What is the Broström procedure?",
      answer: "The <strong>Broström-Gould procedure</strong> is the gold standard for <strong>ankle ligament reconstruction</strong>. It involves tightening the stretched ATFL and CFL ligaments and reinforcing them with a nearby retinaculum."
    },
    {
      question: "How long in a boot after ankle surgery?",
      answer: "Patients typically spend <strong>2 weeks in a cast</strong> followed by <strong>4 weeks in a walking boot</strong>. Physical therapy usually begins at the 6-week mark."
    },
    {
      question: "Will my ankle be stiff?",
      answer: "Some mild stiffness is normal and actually desirable to provide stability. However, rehab focuses on regaining range of motion so walking and running feel natural."
    },
    {
      question: "When can I return to sports?",
      answer: "Return to straight-line running is often possible at <strong>3 to 4 months</strong>, with cutting sports (soccer, basketball) allowed at <strong>4 to 6 months</strong> once strength is restored."
    }
  ],

  // 34. Axial Fusion Surgery
  "axial-fusion-surgery": [
    {
      question: "What is AxialIF (AxiaLIF)?",
      answer: "<strong>Axial Lumbar Interbody Fusion</strong> is a minimally invasive fusion of the L5-S1 level performed through a tiny incision near the tailbone. It avoids cutting back muscles or retracting nerves."
    },
    {
      question: "What are the benefits of axial fusion?",
      answer: "It offers minimal blood loss, very small scarring, and often less post-operative pain than traditional posterior fusion. It preserves the structural integrity of the spinal discs' outer walls."
    },
    {
      question: "What is the recovery time?",
      answer: "Patients often go home the next day. Walking is immediate. Fusion healing follows the standard <strong>6 to 12 month</strong> timeline, but functional recovery is faster due to the tissue-sparing approach."
    },
    {
      question: "Is everyone a candidate?",
      answer: "No. It is specifically for <strong>L5-S1</strong> pathology. Patients with severe rectal issues, sacral fractures, or specific anatomical variances may not be eligible."
    }
  ],

  // 35. Hybrid Cervical Spine Surgery
  "hybrid-cervical-spine-surgery": [
    {
      question: "What is hybrid cervical surgery?",
      answer: "It is a procedure combining <strong>ACDF (fusion)</strong> at one level and <strong>Cervical Disc Arthroplasty (replacement)</strong> at another. It treats multilevel disease by stabilizing the worst level while maintaining motion at the salvageable level."
    },
    {
      question: "Does hybrid surgery take longer?",
      answer: "The surgery time is slightly longer than a single-level procedure but is performed under one anesthesia session. It avoids the need for two separate surgeries."
    },
    {
      question: "What is the advantage?",
      answer: "It provides the 'best of both worlds': the reliability of fusion for severe degeneration and the motion preservation of replacement to protect the rest of the spine."
    },
    {
      question: "How is recovery compared to pure fusion?",
      answer: "Recovery is similar to ACDF, with a sore throat being common. However, patients often report less neck stiffness than those who undergo a 2-level fusion."
    }
  ],

  // 36. Back Pain Treatment
  "back-pain-treatment": [
    {
      question: "What is the best treatment for lower back pain?",
      answer: "Most acute back pain resolves with <strong>active rest</strong>, anti-inflammatories (NSAIDs), and physical therapy. For chronic pain, a multimodal approach including injections, lifestyle changes, and core strengthening is best."
    },
    {
      question: "When does back pain require an MRI?",
      answer: "An MRI is needed if pain persists for more than <strong>6 weeks</strong>, or immediately if there are 'red flags' like leg weakness, numbness, fever, history of cancer, or loss of bowel/bladder control."
    },
    {
      question: "Do muscle relaxers help back pain?",
      answer: "Muscle relaxers can help acute spasms for a few days but are not a long-term solution. They often cause drowsiness and do not address the underlying structural issue."
    },
    {
      question: "Is heat or ice better for back pain?",
      answer: "Ice is generally better for the first <strong>48 hours</strong> of an acute injury to reduce inflammation. Heat is better for chronic stiffness and muscle spasms to increase blood flow."
    }
  ],

  // 37. Bunion Correction Surgery
  "bunion-correction-surgery": [
    {
      question: "Is bunion surgery worth it?",
      answer: "Yes, if the bunion causes pain that limits walking or shoe wear. Cosmetic correction alone is not a valid reason. Modern <strong>3D correction</strong> techniques (like Lapiplasty) have low recurrence rates."
    },
    {
      question: "How painful is bunion surgery?",
      answer: "Pain is well-managed with long-acting nerve blocks that last up to 3 days. While the first week can be uncomfortable, keeping the foot elevated strictly reduces throbbing significantly."
    },
    {
      question: "Can I walk after bunion surgery?",
      answer: "With modern fixation, many patients can bear weight on their heel in a protective boot immediately. Traditional methods may require weeks of non-weight bearing."
    },
    {
      question: "Do bunions come back?",
      answer: "Recurrence is possible, especially with older surgical methods. Newer procedures that correct the root cause (unstable midfoot joint) have reduced recurrence to <strong>less than 5%</strong>."
    }
  ],

  // 38. Carpal Tunnel Release
  "carpal-tunnel-release": [
    {
      question: "How long does the surgery take?",
      answer: "<strong>Carpal tunnel release</strong> is a quick outpatient procedure, typically taking only <strong>10 to 15 minutes</strong> under local anesthesia."
    },
    {
      question: "Is the relief immediate?",
      answer: "Many patients feel immediate relief from the nighttime numbness and tingling. Surgical soreness in the palm (pillar pain) can last for a few weeks."
    },
    {
      question: "Can I type after carpal tunnel surgery?",
      answer: "You can do light typing and use your fingers immediately. However, heavy typing or gripping should be limited for <strong>2 to 3 weeks</strong> to allow the incision to heal."
    },
    {
      question: "Open vs. Endoscopic: Which is better?",
      answer: "<strong>Endoscopic release</strong> has a smaller incision and typically allows for a faster return to work (less palm tenderness), though both methods have equally high long-term success rates."
    }
  ],

  // 39. Cervical Disc Replacement
  "cervical-disc-replacement": [
    {
      question: "How long do I wear a collar after disc replacement?",
      answer: "Unlike fusion, many surgeons do *not* require a rigid collar after <strong>cervical disc replacement</strong>, or only a soft collar for a few days for comfort, encouraging early motion."
    },
    {
      question: "Can I get an MRI with a disc replacement?",
      answer: "Yes, modern artificial discs are <strong>MRI-conditional</strong>, meaning they are safe for scanning. They produce less image artifact (blurring) than steel implants."
    },
    {
      question: "What are the activity restrictions?",
      answer: "Restrictions are minimal. Patients avoid heavy lifting for 6 weeks. After that, there are typically <strong>no permanent activity restrictions</strong>, allowing return to high-level sports."
    },
    {
      question: "Is it safe for two levels?",
      answer: "Yes, the FDA has approved several devices for use at <strong>two contiguous levels</strong> of the cervical spine with excellent clinical outcomes."
    }
  ],

  // 40. Coccygectomy (Tailbone Removal Surgery)
  "coccygectomy-tailbone-removal-surgery": [
    {
      question: "What is the success rate of coccygectomy?",
      answer: "<strong>Coccygectomy</strong> has a high success rate (<strong>80-90%</strong>) for relieving chronic coccydynia when performed on carefully selected patients who failed conservative care."
    },
    {
      question: "How long does it take to sit comfortably?",
      answer: "Sitting can be uncomfortable for <strong>3 to 6 weeks</strong>. Patients use a 'donut' or gel cushion and lean forward to keep pressure off the incision. Full recovery takes 3 to 6 months."
    },
    {
      question: "Is the surgery dangerous?",
      answer: "The main risk is <strong>infection</strong> due to the location near the rectum. Surgeons use specialized dressings and antibiotics to minimize this risk. Nerve damage is rare."
    },
    {
      question: "Will I miss my tailbone?",
      answer: "No. The coccyx is a vestigial structure (a remnant). Removing it does not affect walking, balance, or pelvic floor function significantly."
    }
  ],

  // 41. Anti-Inflammatory Injections
  "anti-inflammatory-injections-for-joint-and-spine-pain": [
    {
      question: "What is in an anti-inflammatory injection?",
      answer: "Most injections contain a <strong>corticosteroid</strong> (like betamethasone or triamcinolone) to reduce inflammation and a local <strong>anesthetic</strong> (like lidocaine) for immediate pain relief."
    },
    {
      question: "How long do injections last?",
      answer: "Duration varies wildly from <strong>3 weeks to 3 months</strong> or more. They often provide a window of relief to allow physical therapy to correct the underlying mechanical issue."
    },
    {
      question: "Are injections painful?",
      answer: "There is a brief pinch and pressure. For spine injections, <strong>fluoroscopy</strong> (X-ray guidance) is used to ensure precision, making the process quick and minimizing discomfort."
    },
    {
      question: "Can injections damage joints?",
      answer: "Frequent steroid injections can weaken cartilage or tendons. Doctors typically limit them to <strong>3 or 4 per year</strong> in a single joint to ensure safety."
    }
  ],

  // 42. Aging Management
  "aging-management": [
    {
      question: "How does aging affect the spine?",
      answer: "Aging causes <strong>disc desiccation</strong> (drying out), loss of height, and facet joint arthritis. This leads to stiffness and potential nerve compression (stenosis)."
    },
    {
      question: "Can you stop spinal degeneration?",
      answer: "You cannot stop aging, but you can slow the symptoms. <strong>Core strengthening</strong>, maintaining a healthy weight, and not smoking are the most effective ways to manage an aging spine."
    },
    {
      question: "What supplements help joints?",
      answer: "Glucosamine, Chondroitin, and Turmeric (Curcumin) are popular for reducing inflammation, though clinical evidence is mixed. Calcium and Vitamin D are essential for bone density."
    },
    {
      question: "Is osteoporosis reversible?",
      answer: "It is difficult to reverse fully, but medications (bisphosphonates, anabolic agents) and weight-bearing exercise can significantly increase bone density and reduce fracture risk."
    }
  ],

  // 43. Coccyx Nerve Ablation
  "coccyx-nerve-ablation": [
    {
      question: "What is coccyx nerve ablation?",
      answer: "It is a procedure that uses <strong>radiofrequency energy</strong> (heat) to destroy the small nerves transmitting pain signals from the tailbone. It is a non-surgical alternative to coccygectomy."
    },
    {
      question: "How long does relief last?",
      answer: "Pain relief typically lasts <strong>6 months to 1 year</strong>. The nerves can eventually regenerate, at which point the procedure can be repeated."
    },
    {
      question: "Is the procedure painful?",
      answer: "It is done under local anesthesia and often mild sedation. Patients feel some pressure or heat, but it is generally well-tolerated. Soreness lasts for a few days."
    },
    {
      question: "Who is a candidate?",
      answer: "Patients with chronic tailbone pain who have responded positively to a temporary nerve block injection are good candidates for ablation."
    }
  ],

  // 44. Cortisone Injections for Back Pain
  "cortisone-injections-for-back-pain": [
    {
      question: "How quickly does a cortisone shot work?",
      answer: "The anesthetic provides immediate relief for a few hours. The steroid component typically takes <strong>2 to 5 days</strong> to start reducing inflammation and pain effectively."
    },
    {
      question: "What are the side effects?",
      answer: "Common side effects include a 'cortisone flare' (temporary pain increase), facial flushing, insomnia, or elevated blood sugar in diabetics. These are transient."
    },
    {
      question: "Where is the injection given?",
      answer: "For back pain, it is usually injected into the <strong>epidural space</strong> (around the nerves) or the <strong>facet joints</strong> (small joints of the spine), guided by X-ray."
    },
    {
      question: "Does it cure back pain?",
      answer: "No, it is a management tool. It reduces inflammation to facilitate rehabilitation. It does not fix the herniated disc or arthritis causing the pain."
    }
  ],

  // 45. Degenerative Disc Disease Surgery Details
  "degenerative-disc-disease-surgery-details": [
    {
      question: "Is fusion or replacement better for DDD?",
      answer: "<strong>Replacement</strong> is better for maintaining motion and preventing future surgery, but <strong>fusion</strong> is more reliable if there is significant instability or arthritis."
    },
    {
      question: "What is the 'Goldilocks' surgery for DDD?",
      answer: "Hybrid surgery is often called the 'Goldilocks' option for multilevel DDD, combining the stability of fusion at the worst level with the motion of replacement at the better level."
    },
    {
      question: "What are the signs I need surgery?",
      answer: "Signs include unrelenting pain, leg weakness (foot drop), loss of bowel/bladder control (emergency), or inability to walk or stand for more than a few minutes."
    },
    {
      question: "How is the surgery performed?",
      answer: "Most DDD surgeries are now performed using <strong>minimally invasive techniques</strong> (MIS), using small incisions and muscle-sparing approaches to speed up recovery."
    }
  ],

  // 46. Endoscopic Discectomy Surgery
  "endoscopic-discectomy-surgery": [
    {
      question: "How big is the incision?",
      answer: "The incision is ultra-small, typically <strong>less than 1 cm</strong> (about the size of a pinky nail). It usually requires just one stitch or surgical glue."
    },
    {
      question: "What are the advantages?",
      answer: "Advantages include minimal blood loss, no muscle cutting (muscles are dilated), reduced infection risk, and the ability to be performed under conscious sedation."
    },
    {
      question: "Can I walk immediately?",
      answer: "Yes, patients typically walk out of the surgery center within an hour or two. The rapid mobilization reduces post-op complications."
    },
    {
      question: "Is it suitable for all herniations?",
      answer: "It is excellent for most herniations. However, massive central herniations or those with calcification might still require a microscopic approach for safety."
    }
  ],

  // 47. Endoscopic Foraminotomy Surgery
  "endoscopic-foraminotomy-surgery": [
    {
      question: "What does this surgery treat?",
      answer: "It treats <strong>foraminal stenosis</strong>, where bone spurs or disc material narrow the exit canal of the nerve root, causing sciatica or arm pain."
    },
    {
      question: "How does it differ from open foraminotomy?",
      answer: "The endoscopic approach uses a camera and lateral entry point, allowing the surgeon to widen the foramen without removing as much stabilizing bone or ligament."
    },
    {
      question: "What is the recovery timeline?",
      answer: "Patients return to light work in <strong>1 week</strong>. Full sports and activity can often resume in <strong>4 to 6 weeks</strong>, much faster than open spine surgery."
    },
    {
      question: "Is it painful?",
      answer: "Post-op pain is minimal compared to open surgery. Most patients manage with Tylenol or NSAIDs after the first day or two."
    }
  ],

  // 48. ACL Reconstruction Surgery
  "acl-reconstruction-surgery": [
    {
      question: "Which graft is best for ACL reconstruction?",
      answer: "For young athletes, <strong>autograft</strong> (patellar tendon or hamstring) has the lowest failure rate. <strong>Allograft</strong> (donor tissue) is easier to recover from and is a good option for older patients."
    },
    {
      question: "How long is the recovery?",
      answer: "The biological healing of the graft takes time. Return to running is usually <strong>3-4 months</strong>, but return to cutting sports (soccer, basketball) takes <strong>9 to 12 months</strong>."
    },
    {
      question: "Is the surgery arthroscopic?",
      answer: "Yes, it is minimally invasive. The surgeon uses small camera incisions to drill tunnels and place the graft, though a slightly larger incision is needed if harvesting your own tendon."
    },
    {
      question: "Can I walk without crutches?",
      answer: "Most patients wean off crutches in <strong>1 to 2 weeks</strong> once they can engage their quadriceps and walk without a limp."
    }
  ],

  // 49. Epidural Steroid Injection
  "epidural-steroid-injection": [
    {
      question: "How painful is an epidural injection?",
      answer: "The procedure involves a momentary pinch for the numbing medication. The injection itself feels like pressure. It is generally well-tolerated and over in minutes."
    },
    {
      question: "What are the serious risks?",
      answer: "Serious risks like infection, bleeding, or nerve damage are <strong>extremely rare</strong> (less than 1%). The use of fluoroscopic (live X-ray) guidance ensures safety."
    },
    {
      question: "Can I drive home after the injection?",
      answer: "No. If you have sedation or even just because of potential temporary leg numbness from the anesthetic, you must have a driver to take you home."
    },
    {
      question: "How many can I have?",
      answer: "Doctors typically limit epidural steroid injections to <strong>3 to 4 per year</strong> to avoid side effects of cumulative steroid exposure, such as bone weakening."
    }
  ],

  // 50. Extreme Lateral Interbody Fusion (XLIF)
  "extreme-lateral-interbody-fusion-surgery": [
    {
      question: "What makes XLIF unique?",
      answer: "<strong>XLIF</strong> approaches the spine from the <strong>side</strong> (lateral). This avoids cutting through the heavy back muscles and avoids the major blood vessels in the front."
    },
    {
      question: "What is the main risk of XLIF?",
      answer: "The approach passes through the psoas muscle, which contains nerves. This can cause temporary <strong>thigh numbness or weakness</strong> in about 10-20% of patients, which usually resolves."
    },
    {
      question: "How fast is recovery?",
      answer: "Hospital stay is usually <strong>1 to 2 days</strong>. Patients walk immediately. Full recovery is faster than posterior fusion due to the muscle-sparing approach."
    },
    {
      question: "Can XLIF fix spondylolisthesis?",
      answer: "Yes, the large cages used in XLIF are excellent for reducing spondylolisthesis and restoring disc height, indirectly decompressing the nerves."
    }
  ],

  // 51. Facet Ablation (Rhizotomy)
  "facet-ablation-rhizotomy-treatment": [
    {
      question: "Does rhizotomy permanently kill the nerve?",
      answer: "No. <strong>Rhizotomy</strong> (Radiofrequency Ablation) burns the nerve to stop pain signals, but peripheral nerves can regenerate. Pain relief typically lasts <strong>6 to 12 months</strong>."
    },
    {
      question: "What is the recovery like?",
      answer: "There is virtually no recovery time. Patients may have a sore back for a few days (like a sunburn feeling inside), but can return to normal activities almost immediately."
    },
    {
      question: "Does it work for everyone?",
      answer: "It works best for patients whose pain was confirmed to be from the facet joints via a <strong>diagnostic nerve block</strong>. If the block worked, the ablation is likely to succeed."
    },
    {
      question: "Can I have it done again?",
      answer: "Yes, the procedure can be repeated if and when the nerves grow back and the pain returns, usually providing the same level of relief."
    }
  ],

  // 52. Facet Block, Ablation, Rhizotomy...
  "facet-block-ablation-rhizotomy-and-facet-fusion-treatment-information": [
    {
      question: "What is the difference between a block and ablation?",
      answer: "A <strong>block</strong> injects numbing medicine for temporary relief (diagnostic). An <strong>ablation</strong> uses heat to semi-permanently disable the nerve (therapeutic) for long-term relief."
    },
    {
      question: "What is facet fusion?",
      answer: "If ablation fails to provide lasting relief, <strong>facet fusion</strong> is a minimally invasive option where small wedges are placed into the facet joint to stabilize it permanently."
    },
    {
      question: "Is facet pain the same as sciatica?",
      answer: "No. Facet pain is usually localized to the lower back and may radiate to the buttocks/thighs but rarely goes below the knee. Sciatica shoots down the leg."
    },
    {
      question: "Are these procedures outpatient?",
      answer: "Yes, blocks, ablations, and even minimally invasive facet fusions are typically <strong>outpatient procedures</strong> performed in a surgery center."
    }
  ],

  // 53. Fracture Fixation
  "fracture-fixation": [
    {
      question: "What is kyphoplasty?",
      answer: "<strong>Kyphoplasty</strong> is a type of fixation for compression fractures where a balloon creates space in the crushed bone, which is then filled with bone cement to restore height and stop pain."
    },
    {
      question: "Do all spine fractures need surgery?",
      answer: "No. Most stable compression fractures heal with <strong>bracing</strong> and rest. Surgery is needed for unstable fractures, burst fractures, or those causing severe pain/nerve issues."
    },
    {
      question: "How long does a fracture take to heal?",
      answer: "Bony healing typically takes <strong>3 months</strong>. Pain relief from fixation surgery (like Kyphoplasty) is often immediate."
    },
    {
      question: "Can I walk with a spine fracture?",
      answer: "Depending on stability, yes. However, you should consult a spine specialist immediately. Walking with an unstable fracture can cause paralysis."
    }
  ],

  // 54. Impar Block Treatment
  "impar-block-treatment": [
    {
      question: "What does an Impar Block treat?",
      answer: "It treats visceral, sympathetic pain in the <strong>perineum, rectum, and tailbone</strong> area. It is often used for coccydynia, endometriosis, or cancer-related pain."
    },
    {
      question: "How is it performed?",
      answer: "A needle is guided via fluoroscopy (X-ray) through the sacrococcygeal ligament to the Ganglion Impar, a cluster of nerves in front of the tailbone."
    },
    {
      question: "Is it painful?",
      answer: "The area is sensitive, so local anesthesia is used. Most patients tolerate it well with only mild discomfort during the injection."
    },
    {
      question: "How long does relief last?",
      answer: "Relief varies. Some get weeks of relief, others months. It can be repeated, or followed by a neurolysis (using alcohol/heat) for longer duration."
    }
  ],

  // 55. Neck Pain Treatment & Shoulder Pain Relief
  "neck-pain-treatment-and-shoulder-pain-relief": [
    {
      question: "How do I know if it's my neck or shoulder?",
      answer: "<strong>Neck issues</strong> often cause pain that radiates down the arm past the elbow with numbness. <strong>Shoulder issues</strong> usually cause pain when lifting the arm and pain localized to the deltoid."
    },
    {
      question: "What is 'text neck'?",
      answer: "Text neck is strain caused by constantly looking down at phones. It increases load on the cervical spine, leading to muscle spasms and premature disc degeneration."
    },
    {
      question: "Can sleeping wrong cause lasting pain?",
      answer: "Yes, sleeping without proper support can irritate facet joints. Using a <strong>contoured cervical pillow</strong> helps maintain neutral alignment."
    },
    {
      question: "When should I see a doctor?",
      answer: "See a specialist if pain persists >2 weeks, if you have arm weakness, numbness, or if the pain was caused by trauma (like a car accident)."
    }
  ],

  // 56. Non-Surgical Treatments for Pain
  "non-surgical-treatments-for-pain-management": [
    {
      question: "What is regenerative medicine?",
      answer: "Regenerative medicine (like <strong>PRP</strong> and <strong>Stem Cells</strong>) utilizes the body's own healing factors to repair injured tendons and reduce inflammation in arthritic joints naturally."
    },
    {
      question: "Do TENS units work?",
      answer: "TENS units block pain signals temporarily by stimulating the nerves. They are good for managing chronic muscle pain but do not fix structural problems."
    },
    {
      question: "How effective is physical therapy?",
      answer: "<strong>Physical therapy</strong> is the first line of defense and is effective for 70-80% of back and neck pain cases by strengthening the core muscles that support the spine."
    },
    {
      question: "What is spinal decompression therapy?",
      answer: "It is a non-surgical traction therapy that gently stretches the spine to take pressure off herniated discs and promote fluid/nutrient exchange."
    }
  ],

  // 57. Oblique Lumbar Interbody Fusion (OLIF)
  "oblique-lumbar-interbody-fusion": [
    {
      question: "How is OLIF different from XLIF?",
      answer: "<strong>OLIF</strong> approaches the spine \"obliquely\" (in front of the psoas muscle), whereas XLIF goes through the muscle. This reduces the risk of thigh numbness/weakness associated with XLIF."
    },
    {
      question: "What are the benefits of OLIF?",
      answer: "It allows for a large cage placement for stability and correction of deformity while protecting the lumbar nerves. Recovery is faster than open posterior surgery."
    },
    {
      question: "How long is the surgery?",
      answer: "The procedure typically takes <strong>1 to 2 hours</strong> per level. Patients usually stay in the hospital for 1 or 2 days."
    },
    {
      question: "Is OLIF suitable for L5-S1?",
      answer: "Typically no. The iliac crest (hip bone) blocks the oblique angle at L5-S1. ALIF or TLIF is usually preferred for that specific level."
    }
  ],

  // 58. Percutaneous Carpal Tunnel Release
  "percutaneous-carpal-tunnel-release": [
    {
      question: "Does it leave a scar?",
      answer: "<strong>Percutaneous release</strong> is done through a tiny puncture wound, often leaving virtually no visible scar once healed."
    },
    {
      question: "How fast can I return to work?",
      answer: "Most patients return to normal activities in <strong>3 to 5 days</strong>. The recovery is significantly faster than open surgery because the palm skin is not cut."
    },
    {
      question: "Is it as effective as open surgery?",
      answer: "Yes, studies show it provides equivalent nerve decompression with the added benefits of less pain and faster recovery."
    },
    {
      question: "Is it done under ultrasound?",
      answer: "Yes, high-resolution <strong>ultrasound guidance</strong> is critical to visualize the nerve and safe zones, ensuring the ligament is cut safely without injuring nearby structures."
    }
  ],

  // 59. Shoulder Arthroscopy
  "shoulder-arthroscopy": [
    {
      question: "Can I sleep in a bed after shoulder surgery?",
      answer: "It is often painful to lie flat. Most patients sleep in a <strong>recliner</strong> or propped up with pillows for the first 3-6 weeks to reduce throbbing."
    },
    {
      question: "How long is the sling needed?",
      answer: "For a simple decompression: 1-2 weeks. For a <strong>rotator cuff repair</strong> or labral repair: <strong>4 to 6 weeks</strong> is standard to protect the stitches."
    },
    {
      question: "What is a subacromial decompression?",
      answer: "It is a shaving of bone spurs from the underside of the shoulder blade (acromion) to create more room for the rotator cuff, treating <strong>impingement syndrome</strong>."
    },
    {
      question: "When can I drive?",
      answer: "You cannot drive while in a sling. Typically, driving resumes at <strong>4 to 6 weeks</strong> once you have adequate range of motion and are off narcotics."
    }
  ],

  // 60. Stem Cell Treatment
  "stem-cell-treatment": [
    {
      question: "Where do the stem cells come from?",
      answer: "Stem cells are typically harvested from the patient's own <strong>bone marrow</strong> (hip bone) or <strong>adipose tissue</strong> (fat), or from ethically sourced umbilical cord tissue (allograft)."
    },
    {
      question: "Is stem cell therapy covered by insurance?",
      answer: "Currently, most insurance plans consider it <strong>investigational</strong> and do not cover it. It is usually a self-pay procedure."
    },
    {
      question: "Does it regrow cartilage?",
      answer: "While it can promote healing and reduce inflammation, it does not typically regrow a thick layer of new cartilage in 'bone-on-bone' arthritis. It is best for early to moderate degeneration."
    },
    {
      question: "How many treatments are needed?",
      answer: "Many patients experience significant relief with just <strong>one treatment</strong>. Some degenerative conditions may require a booster injection after a year."
    }
  ],

  // 61. Surgical Treatments (General)
  "surgical-treatments": [
    {
      question: "How do I prepare for orthopedic surgery?",
      answer: "Preparation includes stopping blood thinners, quitting smoking (nicotine slows healing), preparing your home (removing trip hazards), and arranging for a driver/caregiver."
    },
    {
      question: "What is 'minimally invasive' surgery?",
      answer: "<strong>Minimally invasive surgery (MIS)</strong> uses smaller incisions and specialized instruments to avoid cutting muscle. This leads to less pain, less blood loss, and faster recovery."
    },
    {
      question: "What is the risk of infection?",
      answer: "The risk is generally low (<strong>less than 1-2%</strong>) for elective orthopedic surgeries. Antibiotics are given before and after surgery to prevent this."
    },
    {
      question: "Do I need physical therapy after surgery?",
      answer: "Yes. <strong>Physical therapy</strong> is crucial for breaking down scar tissue, regaining motion, and strengthening muscles to support the surgical repair."
    }
  ],

  // 62. Trigger Finger Release
  "trigger-finger-release": [
    {
      question: "What causes trigger finger?",
      answer: "It is caused by inflammation of the tendon sheath (pulley) at the base of the finger, often due to repetitive gripping, diabetes, or rheumatoid arthritis."
    },
    {
      question: "How is the release performed?",
      answer: "The surgeon makes a small incision in the palm and cuts the <strong>A1 pulley</strong>. This opens the tunnel, allowing the tendon to glide freely without catching."
    },
    {
      question: "Can it come back?",
      answer: "Recurrence after surgical release is very rare. It is a highly definitive cure for the condition."
    },
    {
      question: "What is the recovery?",
      answer: "Hand use is allowed immediately for light tasks. The stitches are removed in 10-14 days. Grip strength returns fully in about <strong>3 to 4 weeks</strong>."
    }
  ],

  // 63. Ankle Replacement Surgery
  "ankle-replacement-surgery": [
    {
      question: "Is ankle replacement better than fusion?",
      answer: "For older, active patients, <strong>replacement</strong> is often better because it preserves natural gait and protects adjacent joints. <strong>Fusion</strong> is more durable for heavy laborers."
    },
    {
      question: "How long does the implant last?",
      answer: "Current data shows <strong>85-90%</strong> survival rates at 10 years. While not as long-lived as hip or knee replacements, technology is rapidly improving."
    },
    {
      question: "Can I run after surgery?",
      answer: "Running is generally <strong>not recommended</strong> as it wears out the plastic liner quickly. Hiking, doubles tennis, cycling, and golf are excellent activities."
    },
    {
      question: "What is the recovery timeline?",
      answer: "Non-weight bearing for <strong>4 to 6 weeks</strong>. Boot walking for another 4 weeks. Return to normal shoes at 3 months. Full recovery at <strong>6 to 12 months</strong>."
    }
  ],

  // 64. Ankle Arthroscopy Minimally Invasive
  "ankle-arthroscopy-minimally-invasive-surgery": [
    {
      question: "What conditions can it treat?",
      answer: "<strong>Ankle arthroscopy</strong> treats ankle impingement (bone spurs), loose bodies, OCD lesions (cartilage defects), and synovial inflammation."
    },
    {
      question: "How small are the incisions?",
      answer: "Two tiny incisions (portals) are made, each about <strong>5mm</strong> long. They are often closed with a single stitch or sterile strips."
    },
    {
      question: "When can I walk?",
      answer: "Depending on the procedure, many patients walk in a boot immediately. If cartilage repair was done, you may need crutches for <strong>4 to 6 weeks</strong>."
    },
    {
      question: "How long does swelling last?",
      answer: "The ankle is gravity-dependent, so swelling can persist for <strong>3 to 6 months</strong>. This is normal and does not mean something is wrong."
    }
  ]
};

// Helper: Generates generic FAQs for treatments if specific data is missing
export const getTreatmentFaqs = (slug: string, title: string): FAQItem[] => {
  const specific = treatmentFAQs[slug];
  if (specific && specific.length > 0) return specific;

  // Fallback High-Intent SEO FAQs
  return [
    {
      question: `What is the recovery time for ${title}?`,
      answer: `Recovery from <strong>${title}</strong> varies by patient severity. Generally, patients start physical therapy within the first few weeks, with return to full activity typically between 3 to 6 months.`
    },
    {
      question: `Is ${title} covered by insurance?`,
      answer: `Most medically necessary procedures for <strong>${title}</strong> are covered by major insurance plans, including Medicare. We recommend contacting our office to verify your specific benefits.`
    },
    {
      question: `Am I a candidate for ${title}?`,
      answer: `Candidates typically experience chronic pain that hasn't improved with conservative care. A consultation and MRI review are the best ways to determine if <strong>${title}</strong> is the right option for you.`
    },
    {
      question: `What are the risks of ${title}?`,
      answer: `As with any medical procedure, there are risks involved. However, <strong>${title}</strong> is generally considered safe when performed by an experienced specialist. We will discuss all specific risks during your consultation.`
    }
  ];
};
