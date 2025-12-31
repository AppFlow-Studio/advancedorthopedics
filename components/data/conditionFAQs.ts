export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export const conditionFAQs: Record<string, FAQItem[]> = {
    "adult-degenerative-scoliosis": [
      {
        question: "What causes adult degenerative scoliosis to worsen?",
        answer: "Adult degenerative scoliosis worsens due to the <strong>asymmetric collapse of spinal discs and facet joints</strong> caused by aging. As one side of a disc wears down faster than the other, the spine curves further, often leading to <a href=\"/area-of-specialty/spinal-stenosis\">spinal stenosis</a> and nerve compression."
      },
      {
        question: "Can adult scoliosis be treated without surgery?",
        answer: "Yes, the majority of adult scoliosis cases are managed non-surgically. Treatments include <strong>physical therapy, core strengthening, and epidural steroid injections</strong> to manage pain. Surgery is typically reserved for curves exceeding 50 degrees or when nerve compression causes leg weakness."
      },
      {
        question: "What are the first symptoms of degenerative scoliosis?",
        answer: "Symptoms typically begin with <strong>gradual lower back pain</strong> and stiffness in the morning. As the curve progresses, patients may notice uneven shoulders, a rib hump, or shooting leg pain (<a href=\"/area-of-specialty/sciatica\">sciatica</a>) caused by the narrowing of the spinal canal."
      },
      {
        question: "Is spinal fusion the only option for scoliosis surgery?",
        answer: "While <a href=\"/treatments/spinal-fusion\">spinal fusion</a> is the most common method to permanently straighten the spine, <strong>decompression surgery</strong> (laminectomy) alone may be performed if the primary symptom is leg pain and the spinal curve is stable."
      },
      {
        question: "How long is the recovery for adult scoliosis surgery?",
        answer: "Recovery is significant, typically requiring <strong>3 to 6 months for fusion to solidify</strong>. Patients usually walk the day after surgery but must limit bending and twisting for several months to ensure the spine heals correctly."
      }
    ],
    "adjacent-segment-disease": [
      {
        question: "What is Adjacent Segment Disease (ASD)?",
        answer: "Adjacent Segment Disease is a condition where <strong>spinal levels immediately above or below a previous fusion degenerate</strong> due to increased mechanical stress. It is a potential long-term complication of spinal fusion surgery."
      },
      {
        question: "How do you prevent Adjacent Segment Disease?",
        answer: "The best prevention is maintaining a <strong>healthy weight and strong core muscles</strong> to support the spine. Additionally, opting for motion-preservation surgeries like <a href=\"/treatments/artificial-disc-replacement-surgery\">Artificial Disc Replacement</a> instead of fusion can significantly reduce the risk."
      },
      {
        question: "Does adjacent segment disease always require surgery?",
        answer: "No. Treatment begins with conservative measures like <strong>physical therapy and injections</strong>. Surgery is only recommended if these fail and nerve compression causes significant pain or weakness."
      },
      {
        question: "What are the symptoms of adjacent segment disease?",
        answer: "Symptoms mimic the original spinal problem, including <strong>returning back pain or radiating leg pain</strong> (<a href=\"/area-of-specialty/sciatica\">sciatica</a>) years after a successful fusion surgery, indicating new degeneration at a neighboring level."
      },
      {
        question: "How is adjacent segment disease treated surgically?",
        answer: "Surgical treatment typically involves <strong>extending the fusion</strong> to include the affected level. In some cases, a <a href=\"/treatments/lumbar-decompression\">decompression</a> or disc replacement can be performed to address the new issue without further fusing the spine."
      }
    ],
    "lumbar-herniated-disc": [
      {
        question: "How does a lumbar herniated disc cause sciatica?",
        answer: "A herniated disc causes sciatica when the <strong>inner gel of the disc leaks out</strong> and chemically irritates or mechanically compresses the sciatic nerve roots. This sends shooting pain, numbness, or tingling down the leg."
      },
      {
        question: "Will a herniated disc heal on its own?",
        answer: "<strong>Yes, 80-90% of herniated discs resolve on their own</strong> within 6 to 12 weeks. The body naturally reabsorbs the herniated material, and inflammation subsides with rest and anti-inflammatory medication."
      },
      {
        question: "What activities should I avoid with a herniated disc?",
        answer: "Avoid <strong>heavy lifting, deep bending, and prolonged sitting</strong>, as these increase pressure on the discs. High-impact activities like running should also be paused until the disc heals."
      },
      {
        question: "When is surgery needed for a herniated disc?",
        answer: "Surgery (<a href=\"/treatments/lumbar-microdiscectomy-surgery\">Microdiscectomy</a>) is recommended if pain is <strong>unmanageable after 6-12 weeks</strong> of conservative care, or immediately if there is progressive muscle weakness (foot drop) or loss of bladder/bowel control."
      },
      {
        question: "What is the fastest way to relieve herniated disc pain?",
        answer: "The fastest relief often comes from <a href=\"/treatments/epidural-steroid-injection\">epidural steroid injections</a>, which deliver strong anti-inflammatories directly to the nerve root. For home care, alternating ice and heat with NSAIDs and gentle extension exercises (McKenzie method) is effective."
      }
    ],
    "degenerative-disc-disease": [
      {
        question: "Is Degenerative Disc Disease actually a disease?",
        answer: "No, it is not a disease but a <strong>natural condition of aging</strong>. It refers to the wear-and-tear of spinal discs that lose hydration and height over time, potentially leading to pain or instability."
      },
      {
        question: "Does Degenerative Disc Disease lead to paralysis?",
        answer: "<strong>Extremely rarely.</strong> DDD primarily causes chronic pain and stiffness. While it can lead to nerve compression causing weakness, it does not typically cause total paralysis."
      },
      {
        question: "What makes degenerative disc pain worse?",
        answer: "Pain is often aggravated by <strong>sitting for long periods, bending, or lifting</strong>, which increases intradiscal pressure. Walking or changing positions frequently usually helps relieve symptoms."
      },
      {
        question: "Can you reverse degenerative disc disease?",
        answer: "You cannot strictly 'reverse' the degeneration, as discs do not regenerate. However, <a href=\"/treatments/non-surgical-treatments-for-pain-management\">non-surgical treatments</a> can manage symptoms effectively, and lifestyle changes like weight loss can slow the progression."
      },
      {
        question: "What is the best exercise for degenerative disc disease?",
        answer: "Low-impact aerobic exercises like <strong>walking, swimming, or cycling</strong> are best. They increase blood flow to the spine without high impact. Core strengthening (Pilates, yoga) helps support the spine and reduce load on the discs."
      }
    ],
    "cervical-spinal-stenosis": [
      {
        question: "What are the warning signs of cervical spinal stenosis?",
        answer: "Warning signs include <strong>neck pain, numbness in the hands</strong>, and balance coordination issues. Severe cases may cause 'myelopathy,' characterized by difficulty with fine motor skills like buttoning a shirt."
      },
      {
        question: "Can cervical stenosis be cured without surgery?",
        answer: "Stenosis is a structural narrowing that <strong>cannot be cured non-surgically</strong>, but symptoms can be managed. Physical therapy and injections can relieve inflammation, but they do not widen the spinal canal."
      },
      {
        question: "How is cervical stenosis treated surgically?",
        answer: "Common surgeries include <a href=\"/treatments/acdf-surgery\">ACDF (Anterior Cervical Discectomy and Fusion)</a> to remove the disc pressing on the cord, or Posterior Cervical Laminectomy to remove the back of the vertebra and create more space for the spinal cord."
      },
      {
        question: "Is walking difficult with cervical stenosis?",
        answer: "Yes, if the spinal cord is compressed (myelopathy), it can affect <strong>gait and balance</strong>, making patients feel unsteady or 'drunk' when walking, even if they have no leg pain."
      },
      {
        question: "What happens if cervical stenosis is left untreated?",
        answer: "If untreated, severe cervical stenosis can lead to <strong>permanent nerve damage or paralysis</strong>. Progressive weakness and loss of hand function are signs that surgery should not be delayed."
      }
    ],
    "spondylolisthesis": [
      {
        question: "What is the difference between spondylosis and spondylolisthesis?",
        answer: "Spondylosis is general spinal arthritis. <strong>Spondylolisthesis is the slippage</strong> of one vertebra forward over the one below it. This slippage can cause instability and pinch nerves."
      },
      {
        question: "Is walking good for spondylolisthesis?",
        answer: "<strong>Yes, walking is beneficial.</strong> It strengthens the core and legs without placing heavy stress on the spine. However, avoid hyperextending (arching) the back, which can worsen the slip."
      },
      {
        question: "What grade of spondylolisthesis requires surgery?",
        answer: "Surgery is typically required for <strong>Grade 3 or 4 slips (over 50% slippage)</strong> or if lower grades cause intractable nerve pain. <a href=\"/treatments/spinal-fusion\">Spinal fusion</a> stabilizes the slipped vertebra."
      },
      {
        question: "Can a chiropractor fix spondylolisthesis?",
        answer: "Chiropractors can provide symptom relief for mild slips, but <strong>they cannot push the vertebra back into place</strong>. High-velocity adjustments should be avoided in unstable, high-grade slips."
      },
      {
        question: "What exercises should be avoided with spondylolisthesis?",
        answer: "Avoid exercises that involve <strong>extension (arching the back)</strong>, such as 'Superman' poses or heavy overhead lifting, as these can push the slipped vertebra further forward."
      }
    ],
    "cervical-herniated-disc": [
      {
        question: "Where do you feel pain from a cervical herniated disc?",
        answer: "Pain usually starts in the neck and radiates down the <strong>shoulder blade, arm, and into the fingers</strong>. The specific fingers affected depend on which nerve (C5, C6, C7) is compressed."
      },
      {
        question: "How long does a cervical herniated disc take to heal?",
        answer: "Most cases improve within <strong>4 to 6 weeks</strong> with non-surgical care. If nerve pain is severe or causes weakness, surgery like <a href=\"/treatments/cervical-disc-replacement\">cervical disc replacement</a> may be discussed sooner."
      },
      {
        question: "Can a cervical herniated disc cause headaches?",
        answer: "<strong>Yes, cervicogenic headaches</strong> are common. They typically start at the base of the skull and radiate to the forehead or behind the eyes due to muscle tension and nerve irritation."
      },
      {
        question: "Is heat or ice better for a herniated neck disc?",
        answer: "Use <strong>ice for the first 48 hours</strong> to reduce inflammation. After that, heat can help relax the tight muscles and spasms that often accompany a herniated disc."
      },
      {
        question: "What is the best pillow for a cervical herniated disc?",
        answer: "A <strong>cervical contour pillow</strong> that keeps the neck in a neutral position (aligned with the spine) is best. Avoid pillows that are too high, which flex the neck forward."
      }
    ],
    "spinal-compression-fractures": [
      {
        question: "How are spinal compression fractures treated in the elderly?",
        answer: "First-line treatment is pain management and bracing. For persistent pain, <a href=\"/treatments/fracture-fixation\">Kyphoplasty (Fracture Fixation)</a> is a minimally invasive procedure where bone cement is injected to stabilize the fracture and restore height."
      },
      {
        question: "What is the main cause of compression fractures?",
        answer: "<strong>Osteoporosis (weak bones)</strong> is the leading cause, allowing even minor movements like coughing or lifting to collapse a vertebra. Trauma is a secondary cause."
      },
      {
        question: "Is bed rest recommended for compression fractures?",
        answer: "<strong>Only briefly.</strong> Prolonged bed rest can worsen bone loss. Early mobilization with a back brace is encouraged to prevent complications like pneumonia or blood clots."
      },
      {
        question: "Can a compression fracture heal on its own?",
        answer: "<strong>Yes, the bone typically heals in 8-10 weeks.</strong> However, the vertebra often heals in a wedge shape, which can lead to a hunched posture (kyphosis) if not treated."
      },
      {
        question: "How do I know if I have a compression fracture?",
        answer: "Symptoms include <strong>sudden, severe back pain</strong> (often after a minor fall or lifting), which worsens when standing or walking and improves when lying down."
      }
    ],
    "kyphosis": [
      {
        question: "Can bad posture cause permanent Kyphosis?",
        answer: "Postural kyphosis can typically be corrected with <strong>physical therapy and habit changes</strong>. However, structural kyphosis (like Scheuermann's disease) involves misshapen bones and requires medical treatment."
      },
      {
        question: "What is the surgical treatment for severe Kyphosis?",
        answer: "Surgery involves <a href=\"/treatments/spinal-fusion\">spinal fusion</a> with instrumentation (rods and screws) to realign the spine. In rigid cases, an osteotomy (cutting the bone) helps correct the curvature."
      },
      {
        question: "Is a brace effective for adult kyphosis?",
        answer: "<strong>Generally no.</strong> Bracing is most effective for adolescents who are still growing. In adults, bracing may provide pain relief but will not permanently correct the spinal curve."
      },
      {
        question: "What causes a 'dowager's hump'?",
        answer: "A dowager's hump is usually caused by <strong>multiple compression fractures</strong> in the upper spine due to osteoporosis, leading to an excessive forward curvature."
      },
      {
        question: "Does kyphosis affect breathing?",
        answer: "Yes, severe kyphosis can compress the chest cavity, <strong>limiting lung capacity</strong> and making it difficult to take deep breaths. This is a key indication for surgery."
      }
    ],
    "osteoarthritis": [
      {
        question: "What is the difference between osteoarthritis and rheumatoid arthritis?",
        answer: "<strong>Osteoarthritis is wear-and-tear</strong> of the cartilage, affecting specific joints asymmetrically. Rheumatoid arthritis is an autoimmune disease attacking the joint lining, often affecting joints symmetrically."
      },
      {
        question: "Can you rebuild cartilage lost to osteoarthritis?",
        answer: "<strong>No, cartilage cannot typically be regrown</strong> once lost. Treatments focus on preserving remaining cartilage and managing pain through injections (hyaluronic acid) and therapy."
      },
      {
        question: "Is walking good for osteoarthritis?",
        answer: "<strong>Yes.</strong> While it may seem counterintuitive, low-impact walking keeps joints lubricated and strengthens the muscles that support them, reducing overall pain."
      },
      {
        question: "When should I consider joint replacement for osteoarthritis?",
        answer: "Joint replacement, such as <a href=\"/treatments/total-hip-replacement\">total hip replacement</a>, is recommended when <strong>pain interferes with daily life</strong> (sleep, walking) and conservative treatments like injections and therapy no longer provide relief."
      },
      {
        question: "Does weather really affect arthritis pain?",
        answer: "<strong>Yes.</strong> Drops in barometric pressure can cause tissues in the joints to expand slightly, irritating nerve endings and increasing pain in arthritic joints."
      }
    ],
    "rotator-cuff-tear": [
      {
        question: "Can a rotator cuff tear heal without surgery?",
        answer: "<strong>Partial tears can heal</strong> or become asymptomatic with PT and regenerative injections. <strong>Full-thickness tears do not heal</strong> on their own and typically require surgical repair to restore strength."
      },
      {
        question: "What does a torn rotator cuff feel like?",
        answer: "It feels like a <strong>deep ache in the shoulder</strong>, especially at night. Patients often have difficulty raising their arm overhead or reaching behind their back."
      },
      {
        question: "How long is recovery after rotator cuff surgery?",
        answer: "Full recovery takes <strong>4 to 6 months</strong>. Patients wear a sling for 4-6 weeks, followed by passive motion therapy, and finally strengthening exercises."
      },
      {
        question: "Can I lift weights with a rotator cuff tear?",
        answer: "You should avoid <strong>overhead pressing and heavy lifting</strong> until cleared by a doctor. Strengthening the surrounding scapular muscles is beneficial, but heavy loads can widen the tear."
      },
      {
        question: "What is the success rate of rotator cuff repair?",
        answer: "Success rates are high, generally <strong>over 90% for pain relief</strong>. Functional strength return depends on the size of the tear and the patient's adherence to rehabilitation. See more about <a href=\"/treatments/rotator-cuff-repair-surgery\">rotator cuff repair surgery</a>."
      }
    ],
    "acl-injury": [
      {
        question: "Do all ACL tears require surgery?",
        answer: "<strong>No.</strong> Sedentary patients or those with partial tears may recover with bracing and PT. However, athletes and active individuals usually need <a href=\"/treatments/acl-reconstruction-surgery\">ACL reconstruction</a> to restore stability."
      },
      {
        question: "How long after ACL injury can I walk?",
        answer: "Most patients can walk <strong>within a few weeks</strong> after injury or surgery, often with crutches initially. Full normal gait typically returns by 4-6 weeks post-op."
      },
      {
        question: "Can an ACL tear heal itself?",
        answer: "<strong>Generally, no.</strong> The ACL has poor blood supply and is submerged in joint fluid, which prevents a full tear from knitting back together naturally."
      },
      {
        question: "What graft is best for ACL reconstruction?",
        answer: "Common grafts include the <strong>patellar tendon, hamstring tendon, or donor tissue (allograft)</strong>. The 'best' choice depends on the patient's age, activity level, and surgeon preference."
      },
      {
        question: "When can I return to sports after ACL surgery?",
        answer: "Return to sports typically takes <strong>6 to 9 months</strong>. It requires not just time, but passing functional tests to ensure the leg is strong enough to prevent re-injury."
      }
    ],
    "labral-tears": [
      {
        question: "What does a hip labral tear feel like?",
        answer: "A hip labral tear causes <strong>sharp groin pain</strong>, often accompanied by a clicking, locking, or catching sensation deep in the hip joint."
      },
      {
        question: "Can a labral tear be missed on MRI?",
        answer: "<strong>Yes.</strong> A standard MRI can miss small tears. An <strong>MRA (MRI with contrast dye)</strong> is the gold standard for diagnosing labral tears in the hip or shoulder."
      },
      {
        question: "Do hip labral tears require surgery?",
        answer: "Not always. Many are managed with <strong>physical therapy and injections</strong>. Surgery (<a href=\"/treatments/hip-arthroscopy-treatment\">hip arthroscopy</a>) is considered if pain persists and mechanical symptoms (locking) interfere with daily life."
      },
      {
        question: "What is the difference between a SLAP tear and a Bankart tear?",
        answer: "Both are shoulder labral tears. A <strong>SLAP tear</strong> is at the top (biceps attachment), while a <strong>Bankart tear</strong> is at the bottom (usually from dislocation) and causes instability."
      },
      {
        question: "How long is recovery from labral repair surgery?",
        answer: "Recovery takes <strong>4 to 6 months</strong>. The first month involves protecting the repair (crutches or sling), followed by progressive range of motion and strengthening."
      }
    ],
    "torn-meniscus": [
      {
        question: "Can you walk on a torn meniscus?",
        answer: "<strong>Yes, often.</strong> Many people can walk on a minor tear, though it may be painful. If the knee locks or buckles, walking becomes dangerous and surgery may be needed."
      },
      {
        question: "Does a meniscus tear heal without surgery?",
        answer: "Tears in the <strong>outer 'red zone' (good blood supply)</strong> can heal on their own. Tears in the inner 'white zone' lack blood flow and usually require surgical trimming."
      },
      {
        question: "What is the difference between repair and removal?",
        answer: "<strong>Repair</strong> stitches the meniscus (longer recovery, better long-term joint health). <strong>Meniscectomy</strong> trims the damaged part (faster recovery, higher arthritis risk). Learn more about <a href=\"/treatments/meniscus-repair-surgery\">meniscus repair surgery</a>."
      },
      {
        question: "How do I know if my meniscus tear is severe?",
        answer: "Severe tears often cause <strong>mechanical symptoms</strong> like the knee locking in place (inability to straighten) or giving way, along with significant swelling."
      },
      {
        question: "Is cycling good for a torn meniscus?",
        answer: "<strong>Yes.</strong> Cycling is excellent as it strengthens the legs with low impact. Ensure the seat is high enough to avoid deep knee bending."
      }
    ],
    "sacroiliac-joint-dysfunction": [
      {
        question: "Where is SI joint pain located?",
        answer: "SI joint pain is felt in the <strong>lower back and buttocks</strong>, often radiating into the groin or upper thigh. It is frequently mistaken for a herniated disc."
      },
      {
        question: "How do you fix SI joint pain?",
        answer: "Treatments include <strong>SI joint belts, physical therapy, and steroid injections</strong>. If these fail, minimally invasive SI joint fusion uses titanium implants to stabilize the joint."
      },
      {
        question: "What aggravates SI joint pain?",
        answer: "Pain is often worse with <strong>transitional movements</strong> (standing up from a chair), climbing stairs, or standing on one leg."
      },
      {
        question: "How is SI joint dysfunction diagnosed?",
        answer: "It is diagnosed via physical provocation tests and confirmed with a <strong>diagnostic injection</strong>. If the injection relieves pain temporarily, the SI joint is the confirmed source."
      },
      {
        question: "Is SI joint fusion major surgery?",
        answer: "No, modern <strong>minimally invasive SI fusion</strong> is performed through a small incision, takes less than an hour, and has a rapid recovery time compared to traditional open surgery."
      }
    ],
    "trochanteric-bursitis": [
      {
        question: "What triggers trochanteric bursitis?",
        answer: "Triggers include <strong>repetitive friction</strong> (walking/running), direct trauma (falling on the hip), or gait abnormalities caused by other issues like arthritis or leg length discrepancy."
      },
      {
        question: "How long does hip bursitis take to heal?",
        answer: "With rest and treatment, it typically resolves in <strong>6 to 8 weeks</strong>. Chronic cases may require physical therapy or <a href=\"/treatments/anti-inflammatory-injections-for-joint-and-spine-pain\">cortisone injections</a> to break the cycle of inflammation."
      },
      {
        question: "Is walking good for hip bursitis?",
        answer: "Walking is okay in moderation, but <strong>excessive walking can aggravate the bursa</strong>. It is best to rest until acute pain subsides, then gradually reintroduce activity."
      },
      {
        question: "How do you sleep with trochanteric bursitis?",
        answer: "Sleep on the <strong>unaffected side</strong> with a pillow between your knees. This aligns the hips and reduces pressure on the inflamed bursa."
      },
      {
        question: "Does bursitis ever require surgery?",
        answer: "<strong>Rarely.</strong> Surgery (bursectomy) is only considered if months of non-surgical treatment, including injections and therapy, fail to provide relief."
      }
    ],
    "carpal-tunnel-syndrome": [
      {
        question: "What are the first signs of carpal tunnel?",
        answer: "The first signs are <strong>numbness or tingling in the thumb, index, and middle fingers</strong>, especially at night or when holding a phone/steering wheel."
      },
      {
        question: "Can carpal tunnel go away on its own?",
        answer: "Mild cases can resolve with <strong>rest and wrist splinting</strong>. However, if the nerve compression is structural, it typically progresses without treatment."
      },
      {
        question: "Is surgery the only fix for carpal tunnel?",
        answer: "No. <strong>Splinting, ergonomic changes, and steroid injections</strong> are effective early treatments. <a href=\"/treatments/carpal-tunnel-release\">Carpal tunnel release</a> is needed when nerve damage risk is high."
      },
      {
        question: "How long is recovery from carpal tunnel release?",
        answer: "The skin heals in 2 weeks. <strong>Grip strength returns over 2-3 months.</strong> Most patients report immediate relief from the nighttime numbness."
      },
      {
        question: "What happens if carpal tunnel is left untreated?",
        answer: "Untreated carpal tunnel can lead to <strong>permanent nerve damage</strong> and muscle wasting at the base of the thumb, resulting in permanent weakness and loss of sensation."
      }
    ],
    "back-pain": [
      {
        question: "When should I see a doctor for back pain?",
        answer: "See a doctor if pain <strong>persists over 2 weeks</strong>, radiates down the leg, causes numbness/weakness, or is accompanied by fever or unexplained weight loss. Book a <a href=\"/find-care/book-an-appointment\">consultation</a> for evaluation."
      },
      {
        question: "What is the difference between acute and chronic back pain?",
        answer: "<strong>Acute pain</strong> is sudden and lasts <6 weeks (usually muscle strain). <strong>Chronic pain</strong> lasts >3 months and is often linked to structural issues like discs or arthritis."
      },
      {
        question: "Is bed rest good for back pain?",
        answer: "<strong>No.</strong> Prolonged bed rest weakens muscles and stiffens joints. Active recovery (gentle movement) is proven to heal back pain faster than staying in bed."
      },
      {
        question: "How do I know if my back pain is muscular or spinal?",
        answer: "Muscular pain is usually localized and sore to the touch. <strong>Spinal (disc/nerve) pain</strong> is often deep, sharp, and radiates into the buttocks or legs (like <a href=\"/area-of-specialty/sciatica\">sciatica</a>)."
      },
      {
        question: "What are the best exercises for lower back pain?",
        answer: "Core strengthening exercises like <strong>planks, bridges, and bird-dogs</strong> help stabilize the spine. Stretching the hamstrings and hip flexors also relieves back tension."
      }
    ],
    "bulging-disc": [
      {
        question: "Does a bulging disc always require surgery?",
        answer: "<strong>Rarely.</strong> Most bulging discs are managed with physical therapy and injections. Surgery is only considered if the bulge compresses a nerve causing severe pain or weakness."
      },
      {
        question: "Bulging disc vs. Herniated disc: What's the difference?",
        answer: "A <strong>bulging disc</strong> is like a flat tire (sags but intact). A <strong>herniated disc</strong> is like a blowout (inner gel leaks out). Herniations are generally more painful. Learn more about <a href=\"/area-of-specialty/lumbar-herniated-disc\">herniated discs</a>."
      },
      {
        question: "Can a bulging disc heal?",
        answer: "A bulging disc <strong>does not return to its original shape</strong>, but symptoms can resolve completely as inflammation subsides and the spine stabilizes."
      },
      {
        question: "Is walking good for a bulging disc?",
        answer: "<strong>Yes.</strong> Walking increases blood flow and nourishes the spinal discs. It is a safe, low-impact activity that prevents stiffness."
      },
      {
        question: "What positions make a bulging disc worse?",
        answer: "<strong>Slouching and forward bending</strong> increase pressure on the front of the disc, pushing the bulge backward toward the nerves. Maintaining good posture is critical."
      }
    ],
    "pinched-nerve": [
      {
        question: "How long does a pinched nerve last?",
        answer: "Most pinched nerves resolve within <strong>days to weeks</strong> with rest and anti-inflammatories. If pain persists beyond 6 weeks, medical evaluation is needed."
      },
      {
        question: "What does a pinched nerve feel like?",
        answer: "It feels like <strong>sharp, shooting pain</strong> accompanied by 'pins and needles,' numbness, or muscle weakness along the path of the nerve (e.g., down the arm or leg)."
      },
      {
        question: "How do you release a pinched nerve?",
        answer: "Treatments include <strong>NSAIDs, physical therapy (nerve glides), and corticosteroids</strong>. In severe cases, surgery may be needed to physically decompress the nerve."
      },
      {
        question: "Is heat or ice better for a pinched nerve?",
        answer: "Alternating both is best. <strong>Ice reduces inflammation</strong> around the nerve, while <strong>heat relaxes tight muscles</strong> that may be compressing the nerve."
      },
      {
        question: "Can a pinched nerve cause permanent damage?",
        answer: "Yes, chronic compression can lead to <strong>permanent neuropathy</strong> or muscle atrophy. Seek care if you experience profound weakness or loss of sensation."
      }
    ],
    "cervical-deformities": [
      {
        question: "What is cervical kyphosis?",
        answer: "Cervical kyphosis is a condition where the normal inward curve of the neck reverses, causing a <strong>forward hunch</strong>. It can strain muscles and compress the spinal cord."
      },
      {
        question: "Can cervical deformities be corrected?",
        answer: "<strong>Yes.</strong> Mild cases may improve with therapy. Severe, rigid deformities require <strong>osteotomy surgery</strong> to realign the vertebrae and relieve spinal cord pressure."
      },
      {
        question: "What causes cervical deformity?",
        answer: "Causes include <strong>degenerative disc disease, previous failed surgeries, trauma</strong>, or systemic conditions like Ankylosing Spondylitis."
      },
      {
        question: "What are the symptoms of cervical deformity?",
        answer: "Symptoms include <strong>inability to look straight ahead</strong>, severe neck pain, and difficulty swallowing. Cord compression may cause balance issues and hand numbness."
      },
      {
        question: "Is surgery risky for cervical deformity?",
        answer: "Corrective surgery is complex but effective. It carries risks like nerve injury, so it is performed by specialized spine surgeons using <strong>neuromonitoring</strong> to ensure safety."
      }
    ],
    "disc-tear": [
      {
        question: "What does an annular tear feel like?",
        answer: "An annular tear causes <strong>deep, localized burning pain</strong> in the back or neck. Unlike a herniation, the pain is often central and does not always radiate to the limbs."
      },
      {
        question: "Can a torn disc heal?",
        answer: "<strong>Yes.</strong> The outer layer (annulus) can heal with scar tissue over <strong>18-24 months</strong>. Avoiding heavy lifting and rotation is crucial during this time."
      },
      {
        question: "How is a disc tear diagnosed?",
        answer: "A standard MRI often misses small tears. A <strong>Provocative Discogram</strong> or high-resolution MRI (HIZ sign) helps identify painful annular tears."
      },
      {
        question: "Does a disc tear lead to a herniation?",
        answer: "<strong>It can.</strong> The tear weakens the disc wall. If intradiscal pressure increases (e.g., lifting), the inner gel can push through the tear, becoming a full <a href=\"/area-of-specialty/lumbar-herniated-disc\">herniation</a>."
      },
      {
        question: "What is the treatment for a painful disc tear?",
        answer: "Treatment focuses on time and stabilization. <strong>Physical therapy, bracing, and biologics</strong> (PRP) are used. <a href=\"/treatments/spinal-fusion\">Spinal fusion</a> or replacement is a last resort for chronic pain."
      }
    ],
    "hip-dysplasia": [
      {
        question: "Can adults have hip dysplasia?",
        answer: "<strong>Yes.</strong> While often congenital, mild dysplasia may not cause symptoms until adulthood, presenting as groin pain and early-onset arthritis."
      },
      {
        question: "How is adult hip dysplasia treated?",
        answer: "Joint-preserving surgery like <strong>PAO (Periacetabular Osteotomy)</strong> repositions the socket. If arthritis is advanced, <a href=\"/treatments/total-hip-replacement\">Total Hip Replacement</a> is the preferred solution."
      },
      {
        question: "What does hip dysplasia pain feel like?",
        answer: "It feels like a <strong>deep ache in the groin</strong> or side of the hip. Activity often worsens the pain, and patients may feel the hip is 'giving out'."
      },
      {
        question: "Does hip dysplasia always lead to arthritis?",
        answer: "Without treatment, the shallow socket causes excessive pressure on the cartilage, making <strong>early osteoarthritis highly likely</strong>."
      },
      {
        question: "Is hip dysplasia hereditary?",
        answer: "<strong>Yes, it tends to run in families.</strong> If you have hip dysplasia, it is recommended to have your children screened early."
      }
    ],
    "facet-joint-disease": [
      {
        question: "What aggravates facet joint pain?",
        answer: "Pain is typically worse with <strong>extension (leaning backward) and twisting</strong>. It is often relieved by bending forward, which opens the joints."
      },
      {
        question: "How long do facet joint injections last?",
        answer: "Diagnostic injections last hours. <strong><a href=\"/treatments/facet-ablation-rhizotomy-treatment\">Radiofrequency Ablation (RFA)</a></strong>, which burns the nerve, can provide relief for <strong>6 to 12 months</strong> or longer."
      },
      {
        question: "Is facet joint disease the same as arthritis?",
        answer: "<strong>Yes.</strong> Facet joint disease is effectively <strong>osteoarthritis of the spine</strong>. The cartilage between the facet joints wears down, causing bone-on-bone friction."
      },
      {
        question: "Can facet joint disease cause leg pain?",
        answer: "Yes, but unlike sciatica (which goes to the foot), facet pain typically radiates only to the <strong>buttocks or back of the thigh</strong> (referred pain)."
      },
      {
        question: "What is the best sleeping position for facet pain?",
        answer: "Sleeping <strong>on your side with knees curled up</strong> (fetal position) opens the facet joints and relieves pressure, reducing morning stiffness."
      }
    ],
    "arthritis": [
      {
        question: "What is the most common type of arthritis?",
        answer: "<strong><a href=\"/area-of-specialty/osteoarthritis\">Osteoarthritis</a> (wear-and-tear)</strong> is the most common, affecting millions. Rheumatoid arthritis is the second most common but is autoimmune."
      },
      {
        question: "Is heat or ice better for arthritis?",
        answer: "<strong>Heat is usually better</strong> for chronic arthritis stiffness, as it increases blood flow. Ice is used for acute flare-ups to reduce swelling."
      },
      {
        question: "Does cracking knuckles cause arthritis?",
        answer: "<strong>No.</strong> Studies show no link between knuckle cracking and arthritis. The sound is simply gas bubbles popping in the joint fluid."
      },
      {
        question: "What foods should I avoid with arthritis?",
        answer: "Avoid inflammatory foods like <strong>sugar, processed meats, and refined carbs</strong>. An anti-inflammatory diet (Mediterranean style) can help reduce flare-ups."
      },
      {
        question: "Can exercise help arthritis?",
        answer: "<strong>Absolutely.</strong> Movement produces synovial fluid which lubricates joints. Sedentary behavior makes stiffness worse. Stick to low-impact activities like swimming. Learn about <a href=\"/blogs/what-is-orthopedic-physical-therapy\">orthopedic physical therapy</a>."
      }
    ],
    "lower-back-pain": [
      {
        question: "What are red flags for lower back pain?",
        answer: "Seek emergency care if you have <strong>loss of bowel/bladder control, saddle anesthesia</strong>, fever, or sudden severe weakness (foot drop). These are signs of Cauda Equina Syndrome. Check out <a href=\"/blogs/10-signs-you-need-a-spine-surgeon\">signs you need a spine surgeon</a>."
      },
      {
        question: "How do I relieve lower back pain fast?",
        answer: "Use <strong>anti-inflammatories (NSAIDs)</strong> and apply heat. Gentle walking helps. Avoid bed rest, which can cause muscles to tighten further."
      },
      {
        question: "Why does my lower back hurt when I wake up?",
        answer: "Morning pain is often due to <strong>disc swelling overnight</strong> or an unsupportive mattress. It usually improves after moving around for 30 minutes."
      },
      {
        question: "Is a firm mattress better for back pain?",
        answer: "Not always. A <strong>medium-firm mattress</strong> is generally best as it supports the spine's natural curve while providing pressure relief for hips and shoulders."
      },
      {
        question: "Can stress cause lower back pain?",
        answer: "<strong>Yes.</strong> Stress causes muscle tension and increases pain sensitivity. Chronic stress is a significant contributor to persistent back pain."
      }
    ],
    "sciatica": [
      {
        question: "Is sciatica a condition or a symptom?",
        answer: "Sciatica is a <strong>symptom, not a disease</strong>. It refers to pain along the sciatic nerve, caused by an underlying issue like a <a href=\"/area-of-specialty/lumbar-herniated-disc\">herniated disc</a> or spinal stenosis."
      },
      {
        question: "How long does sciatica usually last?",
        answer: "Acute sciatica usually resolves in <strong>4 to 6 weeks</strong>. Chronic sciatica persisting longer than 3 months may require injections or surgery."
      },
      {
        question: "What is the best stretch for sciatica?",
        answer: "The <strong>Piriformis Stretch</strong> (Figure-4 stretch) is effective if the muscle is tight. Nerve glides (flossing) also help mobilize the nerve."
      },
      {
        question: "Can sciatica affect both legs?",
        answer: "<strong>Yes (Bilateral Sciatica).</strong> This is rarer and can indicate central spinal stenosis or cauda equina syndrome, which requires urgent evaluation."
      },
      {
        question: "Does walking help sciatica?",
        answer: "<strong>Generally, yes.</strong> Walking helps reduce inflammation. However, if walking significantly increases leg pain (neurogenic claudication), it may suggest <a href=\"/area-of-specialty/spinal-stenosis\">spinal stenosis</a>."
      }
    ],
    "coccydynia": [
      {
        question: "What causes tailbone pain (coccydynia)?",
        answer: "Common causes include <strong>trauma (falls), prolonged sitting on hard surfaces</strong>, or childbirth. Sometimes the cause is unknown (idiopathic)."
      },
      {
        question: "How do you treat a bruised tailbone?",
        answer: "Use a <strong>doughnut or wedge cushion</strong> to offload pressure when sitting. Ice, NSAIDs, and avoiding sitting for long periods allow it to heal."
      },
      {
        question: "Can the tailbone be removed?",
        answer: "<strong>Yes (<a href=\"/treatments/coccygectomy-tailbone-removal-surgery\">Coccygectomy</a>).</strong> If chronic pain persists despite months of conservative care, surgical removal of the coccyx is highly effective for relief."
      },
      {
        question: "How long does tailbone pain last?",
        answer: "Acute pain heals in weeks. <strong>Chronic Coccydynia</strong> can last months or years without treatment. Injections (<a href=\"/treatments/impar-block-treatment\">Ganglion Impar Block</a>) can break the pain cycle."
      },
      {
        question: "Is cycling bad for tailbone pain?",
        answer: "<strong>Yes.</strong> Cycling puts direct pressure on the coccyx. It should be avoided until the pain has completely resolved."
      }
    ],
    "failed-back-surgery-syndrome": [
      {
        question: "Why does back surgery fail?",
        answer: "Causes include <strong>improper diagnosis, failure to fuse (pseudarthrosis), scar tissue formation</strong>, or new problems at adjacent levels (Adjacent Segment Disease)."
      },
      {
        question: "Can failed back surgery be fixed?",
        answer: "<strong>Yes.</strong> <a href=\"/treatments/revision-spinal-surgery\">Revision surgery</a> can correct technical issues. If structural correction isn't possible, <strong>Spinal Cord Stimulation (SCS)</strong> is an effective option for pain control."
      },
      {
        question: "What are the symptoms of FBSS?",
        answer: "Symptoms include <strong>persistent or new leg pain</strong>, return of original symptoms, or reliance on high doses of pain medication after recovery should have finished."
      },
      {
        question: "Is revision surgery riskier?",
        answer: "Yes, revision surgery is more complex due to <strong>scar tissue</strong>. It requires an experienced surgeon to navigate the altered anatomy safely."
      },
      {
        question: "What non-surgical treatments help FBSS?",
        answer: "Treatments include <strong>neuromodulation (SCS), specialized physical therapy</strong>, and radiofrequency ablation to manage pain without further open surgery."
      }
    ],
    "foraminal-stenosis": [
      {
        question: "What is the difference between central and foraminal stenosis?",
        answer: "<strong>Central stenosis</strong> narrows the main canal (cord). <strong>Foraminal stenosis</strong> narrows the side exits (foramen) where nerve roots leave, causing specific nerve pain (radiculopathy)."
      },
      {
        question: "Can foraminal stenosis be treated without fusion?",
        answer: "<strong>Yes.</strong> A minimally invasive <strong><a href=\"/treatments/endoscopic-foraminotomy-surgery\">Foraminotomy</a></strong> can shave away bone spurs to widen the exit path for the nerve, preserving spinal motion."
      },
      {
        question: "What exercises help foraminal stenosis?",
        answer: "<strong>Flexion exercises</strong> (bending forward) open the foramen and relieve pressure. Avoid excessive extension (leaning back) which closes the space."
      },
      {
        question: "Does foraminal stenosis cause foot drop?",
        answer: "<strong>It can.</strong> Severe compression of the L4 or L5 nerve root in the foramen can lead to weakness in lifting the foot (foot drop)."
      },
      {
        question: "How is foraminal stenosis diagnosed?",
        answer: "It is best seen on an <strong>MRI or CT scan</strong>. Symptoms often include pain that worsens when standing and improves when sitting or bending forward."
      }
    ],
    "hip-impingement": [
      {
        question: "What is Femoroacetabular Impingement (FAI)?",
        answer: "FAI is a condition where the <strong>bones of the hip are misshapen</strong> (Cam or Pincer lesions), causing them to rub against each other and damage the joint."
      },
      {
        question: "Does hip impingement require surgery?",
        answer: "Not always. PT helps stabilize the hip. <strong><a href=\"/treatments/hip-arthroscopy-treatment\">Arthroscopic surgery</a></strong> is recommended if pain persists or if the impingement is tearing the labrum."
      },
      {
        question: "Can hip impingement cause back pain?",
        answer: "<strong>Yes.</strong> Restricted hip motion often forces the lower back to compensate, leading to secondary lumbar strain and pain."
      },
      {
        question: "Does FAI lead to arthritis?",
        answer: "<strong>Yes.</strong> Untreated impingement causes repetitive damage to the cartilage and labrum, significantly increasing the risk of early osteoarthritis."
      },
      {
        question: "What is the recovery for hip impingement surgery?",
        answer: "Arthroscopy recovery takes <strong>3 to 4 months</strong> for full return to sports. Crutches are used for 2-4 weeks to protect the repaired labrum."
      }
    ],
    "loose-bodies": [
      {
        question: "What are 'loose bodies' in a joint?",
        answer: "Loose bodies are <strong>fragments of bone or cartilage</strong> that break off and float freely in the joint fluid, often causing mechanical symptoms."
      },
      {
        question: "How do you remove loose bodies?",
        answer: "They are removed via <strong>Arthroscopy</strong>. It is a minimally invasive procedure where a camera and grasper are inserted to wash out the floating fragments. See <a href=\"/treatments/arthroscopic-knee-surgery\">knee arthroscopy</a> or <a href=\"/treatments/hip-arthroscopy-treatment\">hip arthroscopy</a>."
      },
      {
        question: "What does a loose body feel like?",
        answer: "Patients feel a <strong>sudden locking or catching</strong> of the joint, like a pebble in a shoe. The joint may get stuck and then suddenly click free."
      },
      {
        question: "Do loose bodies grow?",
        answer: "<strong>They can.</strong> Loose bodies are nourished by joint fluid and can increase in size over time, causing more damage to the cartilage."
      },
      {
        question: "What causes loose bodies?",
        answer: "Causes include <strong>trauma (chipped bone), osteoarthritis</strong>, or conditions like Synovial Chondromatosis (where the lining grows abnormal cartilage)."
      }
    ],
    "aging-management": [
      {
        question: "What is orthopedic aging management?",
        answer: "It is a proactive approach focusing on <strong>bone health (osteoporosis), joint preservation, and fall prevention</strong> to maintain mobility and independence as you age."
      },
      {
        question: "Can muscle mass be regained after 60?",
        answer: "<strong>Yes.</strong> Resistance training helps reverse Sarcopenia (muscle loss). Even light weights can significantly improve strength and balance in older adults."
      },
      {
        question: "How often should I get a bone density scan?",
        answer: "Women over 65 and men over 70 should get a <strong>DEXA scan every 2 years</strong>, or sooner if they have risk factors for fractures."
      },
      {
        question: "What supplements help aging joints?",
        answer: "<strong>Vitamin D and Calcium</strong> are critical for bone strength. Glucosamine and Turmeric may help reduce inflammation in arthritic joints."
      },
      {
        question: "Why do I get shorter as I age?",
        answer: "Height loss is due to the <strong>drying out and shrinking of spinal discs</strong> and potential compression fractures. Good posture and core strength can minimize this."
      }
    ],
    "neck-pain": [
      {
        question: "When is neck pain a medical emergency?",
        answer: "Seek care if neck pain follows trauma, or is accompanied by <strong>severe headache, fever, arm weakness, or loss of coordination</strong>."
      },
      {
        question: "What is 'text neck'?",
        answer: "Text neck is strain caused by <strong>looking down at phones</strong> for prolonged periods. This forward head posture doubles the load on the cervical spine."
      },
      {
        question: "How long does a stiff neck last?",
        answer: "Acute stiffness usually resolves in <strong>a few days to a week</strong>. Gentle stretching and heat help. If it lasts >2 weeks, check for structural issues."
      },
      {
        question: "Can stress cause neck pain?",
        answer: "<strong>Yes.</strong> Stress causes people to unconsciously hunch shoulders and tighten jaw muscles, leading to chronic neck tension and headaches."
      },
      {
        question: "Is a firm pillow better for neck pain?",
        answer: "Not necessarily. You need a supportive pillow that keeps the <strong>neck aligned with the spine</strong>. A contoured cervical pillow is often best for side/back sleepers."
      }
    ],
    "degenerative-disc-disease-surgery": [
      {
        question: "When is surgery needed for DDD?",
        answer: "Surgery is considered when <strong>pain is disabling</strong> despite 6 months of non-surgical care, or if there is nerve compression causing weakness. Learn more about <a href=\"/treatments/degenerative-disc-disease-surgery-details\">DDD surgery details</a>."
      },
      {
        question: "Fusion vs. Artificial Disc Replacement for DDD?",
        answer: "<strong>Fusion</strong> stops motion to stop pain (good for severe arthritis). <strong><a href=\"/treatments/artificial-disc-replacement-surgery\">Disc Replacement</a></strong> preserves motion (good for younger patients with healthy joints)."
      },
      {
        question: "What is the success rate of DDD surgery?",
        answer: "Success rates are generally <strong>80-90% for pain relief</strong>. Patient selection is key—surgery works best for leg pain or instability, rather than vague back pain."
      },
      {
        question: "How long is recovery after disc surgery?",
        answer: "Minimally invasive decompression heals in weeks. <strong>Fusion takes 3-6 months</strong> to bond. Artificial disc recovery is faster, often 6-8 weeks."
      },
      {
        question: "Can DDD come back after surgery?",
        answer: "The treated disc is gone, so it cannot degenerate further. However, <strong>adjacent levels</strong> can develop DDD over time (Adjacent Segment Disease)."
      }
    ],
    "pseudarthrosis-revision-surgery": [
      {
        question: "What is spinal pseudarthrosis?",
        answer: "Pseudarthrosis is a <strong>failed fusion</strong>—the bone graft did not grow to connect the vertebrae, creating a painful 'false joint' with motion."
      },
      {
        question: "How do you treat pseudarthrosis?",
        answer: "It requires <strong><a href=\"/treatments/revision-spinal-surgery\">revision surgery</a></strong> to clean the site, apply new bone graft (often with BMP), and typically replace/upgrade the hardware for better stability."
      },
      {
        question: "What are the signs of pseudarthrosis?",
        answer: "Signs include <strong>persistent back pain</strong> that never went away after surgery, or clicking/popping sounds from the hardware."
      },
      {
        question: "Why did my spinal fusion fail?",
        answer: "Risk factors include <strong>smoking (nicotine inhibits bone growth)</strong>, diabetes, steroid use, or excessive motion at the surgical site during healing."
      },
      {
        question: "Is revision surgery successful?",
        answer: "<strong>Yes</strong>, but it is more complex. Using advanced biologics (stem cells/BMP) and stricter post-op protocols improves the success rate of the second attempt."
      }
    ],
    "shoulder-arthritis": [
      {
        question: "What are the symptoms of shoulder arthritis?",
        answer: "Symptoms include <strong>deep joint pain, grinding (crepitus)</strong>, and progressive loss of range of motion, making it hard to reach overhead."
      },
      {
        question: "Anatomic vs. Reverse Shoulder Replacement?",
        answer: "<strong>Anatomic</strong> mimics nature (ball on arm). <strong><a href=\"/treatments/resurfacing-shoulder-replacement\">Reverse replacement</a></strong> switches them (ball on socket) and is used when the rotator cuff is torn, relying on the deltoid muscle."
      },
      {
        question: "How long does a shoulder replacement last?",
        answer: "Modern implants typically last <strong>15 to 20 years</strong>. Longevity depends on patient activity level and implant technology."
      },
      {
        question: "Can shoulder arthritis be treated without surgery?",
        answer: "Early stages are managed with <strong>NSAIDs, physical therapy, and steroid injections</strong>. Avoid heavy lifting to slow progression."
      },
      {
        question: "Is shoulder replacement painful?",
        answer: "Post-op pain is managed with nerve blocks. <strong>Long-term, it is very effective at eliminating arthritis pain</strong>, often more so than knee replacement."
      }
    ],
    "shoulder-tendonitis": [
      {
        question: "How long does shoulder tendonitis take to heal?",
        answer: "Mild cases heal in <strong>2-4 weeks</strong>. Chronic tendonitis (tendinosis) can take months. Rest and avoiding overhead activity are crucial."
      },
      {
        question: "Is heat or ice better for tendonitis?",
        answer: "<strong>Ice</strong> is best for acute pain. <strong>Heat</strong> helps chronic stiffness. <strong>Ultrasound therapy</strong> and massage also help increase blood flow to the tendon."
      },
      {
        question: "What causes shoulder impingement?",
        answer: "Impingement occurs when the <strong>rotator cuff catches on the acromion bone</strong> spur, causing inflammation (tendonitis). Poor posture contributes to this."
      },
      {
        question: "Can PRP help shoulder tendonitis?",
        answer: "<strong>Yes.</strong> PRP (<a href=\"/treatments/stem-cell-treatment\">Platelet-Rich Plasma</a>) injections deliver growth factors to the tendon, stimulating healing in chronic cases where standard treatments fail."
      },
      {
        question: "What exercises fix shoulder tendonitis?",
        answer: "Exercises focusing on <strong>scapular stabilization and rotator cuff strengthening</strong> (internal/external rotation) help correct the mechanics causing the irritation."
      }
    ],
    "snapping-hip-syndrome": [
      {
        question: "What causes snapping hip syndrome?",
        answer: "It is caused by a <strong>tight tendon/muscle sliding over a hip bone</strong>. Usually the IT band snapping over the greater trochanter (outer hip)."
      },
      {
        question: "Is snapping hip syndrome dangerous?",
        answer: "<strong>No</strong>, but it can be painful and lead to bursitis. If painless, it usually requires no treatment."
      },
      {
        question: "How do you stop your hip from snapping?",
        answer: "<strong>Stretching is key.</strong> Stretching the IT band, hip flexors, and glutes usually resolves the tightness causing the snap. PT is highly effective."
      },
      {
        question: "Does snapping hip require surgery?",
        answer: "<strong>Rarely.</strong> Surgery is only for painful, refractory cases to lengthen the tight tendon or remove cartilage debris if the snapping is internal."
      },
      {
        question: "Can I run with snapping hip?",
        answer: "Yes, if painless. If painful, reduce mileage and focus on stretching. <strong>Running on banked surfaces</strong> may aggravate it."
      }
    ],
    "spinal-bone-spurs": [
      {
        question: "Do bone spurs always cause pain?",
        answer: "<strong>No.</strong> Many people have spurs (osteophytes) with no symptoms. They only cause pain if they pinch a nerve or the spinal cord."
      },
      {
        question: "Can bone spurs be dissolved?",
        answer: "<strong>No.</strong> Bone spurs are hard bone. They cannot be dissolved by supplements or diet. They must be physically removed if they cause issues."
      },
      {
        question: "How are spinal bone spurs removed?",
        answer: "They are removed via <strong>Decompression Surgery</strong> (<a href=\"/treatments/lumbar-laminectomy-surgery\">Laminectomy</a> or <a href=\"/treatments/endoscopic-foraminotomy-surgery\">Foraminotomy</a>), where the surgeon carefully burrs away the excess bone pressing on nerves."
      },
      {
        question: "What causes bone spurs to grow?",
        answer: "They are the body's <strong>response to friction and instability</strong>. As discs wear out, the body grows extra bone to try and stabilize the joint."
      },
      {
        question: "Can bone spurs grow back after surgery?",
        answer: "<strong>It is possible</strong> over many years if instability remains, but they typically grow very slowly. Fusion surgery prevents regrowth by stopping motion."
      }
    ],
    "spinal-stenosis": [
      {
        question: "What relieves spinal stenosis pain?",
        answer: "<strong>Leaning forward</strong> (like over a shopping cart) relieves pain because it opens the spinal canal. Sitting also provides relief."
      },
      {
        question: "Is walking good for spinal stenosis?",
        answer: "Yes, but tolerate it only to your limit. <strong>Stationary cycling</strong> is often better because the leaned-forward position is more comfortable than upright walking."
      },
      {
        question: "How fast does spinal stenosis progress?",
        answer: "It is generally <strong>slow and gradual</strong>. Symptoms may remain stable for years. Sudden worsening is rare and warrants immediate checks."
      },
      {
        question: "What is the newest treatment for spinal stenosis?",
        answer: "<strong>Minimally invasive <a href=\"/treatments/lumbar-decompression\">decompression</a></strong> and interspinous spacers (devices placed between vertebrae) are modern alternatives to major fusion surgery."
      },
      {
        question: "Can spinal stenosis cause permanent damage?",
        answer: "<strong>Yes.</strong> Severe, untreated stenosis can damage the spinal cord (myelopathy), leading to permanent balance issues and incontinence."
      }
    ],
    "spine-deformities": [
      {
        question: "What are the types of spine deformities?",
        answer: "Common types include <strong><a href=\"/area-of-specialty/adult-degenerative-scoliosis\">Scoliosis</a></strong> (sideways curve), <strong><a href=\"/area-of-specialty/kyphosis\">Kyphosis</a></strong> (forward hunch), and <strong>Lordosis</strong> (excessive swayback)."
      },
      {
        question: "Can adult spine deformities be fixed?",
        answer: "<strong>Yes.</strong> Surgery can reconstruct the spine. It is a major procedure involving osteotomies (bone cuts) and long-segment fusion."
      },
      {
        question: "Do spine deformities affect organs?",
        answer: "Severe curves can <strong>compress the lungs and heart</strong>, reducing breathing capacity. This is a primary reason for surgical correction in severe cases."
      },
      {
        question: "Is surgery for spine deformity safe?",
        answer: "It is complex but safer than ever with <strong>computer navigation and neuromonitoring</strong>. It significantly improves quality of life for severe cases."
      },
      {
        question: "What is the recovery for deformity surgery?",
        answer: "It is a long recovery, often <strong>6 to 12 months</strong> for full bone healing. Patients walk immediately but must avoid bending/twisting for months."
      }
    ],
    "synovitis": [
      {
        question: "What is synovitis?",
        answer: "Synovitis is the <strong>inflammation of the synovial membrane</strong> (joint lining), causing pain and swelling. It is seen in arthritis and overuse injuries."
      },
      {
        question: "How is synovitis treated?",
        answer: "Treatment includes <strong>NSAIDs, rest, and steroid injections</strong>. In conditions like RA, DMARDs are used. Persistent cases may need a Synovectomy."
      },
      {
        question: "Can synovitis heal on its own?",
        answer: "Mild cases from overuse can heal with rest. Chronic synovitis from inflammatory diseases usually requires medical management."
      },
      {
        question: "Does ice help synovitis?",
        answer: "<strong>Yes.</strong> Ice constricts blood vessels and reduces the fluid accumulation (effusion) inside the joint."
      },
      {
        question: "What is a synovectomy?",
        answer: "It is a surgery to <strong>remove the inflamed joint lining</strong>. It is typically performed <a href=\"/treatments/arthroscopic-knee-surgery\">arthroscopically</a> to preserve the joint and stop destruction."
      }
    ],
    "tingling-or-numbness-in-extremities": [
      {
        question: "When is tingling a medical emergency?",
        answer: "Call 911 if tingling is sudden and accompanied by <strong>confusion, speech slurring (stroke signs)</strong>, or loss of bowel/bladder control (Cauda Equina). See more on <a href=\"/blogs/10-signs-you-need-a-spine-surgeon\">spine emergencies</a>."
      },
      {
        question: "What vitamin deficiency causes tingling?",
        answer: "Deficiency in <strong>Vitamin B12</strong> is a common cause of peripheral neuropathy (tingling in hands/feet). Diabetes is another leading cause."
      },
      {
        question: "Can anxiety cause tingling?",
        answer: "<strong>Yes.</strong> Hyperventilation during panic attacks alters blood chemistry, causing temporary tingling in the hands and face."
      },
      {
        question: "How is neuropathy treated?",
        answer: "Treatment targets the cause (e.g., controlling blood sugar). Medications like <strong>Gabapentin or Lyrica</strong> help mask the nerve pain."
      },
      {
        question: "Does a pinched nerve cause tingling?",
        answer: "<strong>Yes.</strong> A <a href=\"/area-of-specialty/pinched-nerve\">pinched nerve</a> in the neck causes hand tingling. A pinched nerve in the back causes foot tingling. Identifying the source is key."
      }
    ],
    "herniated-disc": [
      {
        question: "What is the difference between a slipped and herniated disc?",
        answer: "They are the same. <strong>'Slipped disc' is a non-medical term</strong> for a herniated disc, where the inner gel pushes out through a tear in the outer wall."
      },
      {
        question: "Can I exercise with a herniated disc?",
        answer: "<strong>Yes, but carefully.</strong> Walking and swimming are safe. Avoid high-impact running or heavy weightlifting until symptoms subside."
      },
      {
        question: "How long does the pain last?",
        answer: "Acute pain is worst for the first <strong>1-2 weeks</strong>. Most symptoms resolve significantly by 6 weeks. Only 10% of patients require surgery."
      },
      {
        question: "Does a herniated disc show on X-ray?",
        answer: "<strong>No.</strong> X-rays show bone, not discs. An <strong>MRI is required</strong> to visualize the soft tissue herniation and nerve compression. Get a <a href=\"/find-care/free-mri-review\">free MRI review</a>."
      },
      {
        question: "What is the best sleeping position for a herniated disc?",
        answer: "Sleep on your back with a <strong>pillow under your knees</strong>, or on your side with a pillow between your legs to keep the spine neutral."
      }
    ],
    "rheumatoid-arthritis": [
      {
        question: "How does RA affect the spine?",
        answer: "RA typically affects the <strong>cervical spine (neck)</strong>, causing instability between the top vertebrae (C1-C2). This can compress the spinal cord."
      },
      {
        question: "What is the first sign of Rheumatoid Arthritis?",
        answer: "Early signs include <strong>joint stiffness in the morning</strong> lasting >30 minutes, fatigue, and symmetrical swelling in small joints (hands/feet)."
      },
      {
        question: "Can RA be cured?",
        answer: "<strong>No, but remission is possible.</strong> Early treatment with DMARDs and biologics can stop joint damage and keep patients symptom-free."
      },
      {
        question: "Is surgery common for RA?",
        answer: "Surgery is less common now due to better meds. It is used for <strong>severe joint destruction</strong> (replacements) or stabilizing the neck (fusion)."
      },
      {
        question: "Does diet affect Rheumatoid Arthritis?",
        answer: "<strong>Yes.</strong> An anti-inflammatory diet helps. Avoiding triggers like processed foods and nightshades (for some) can reduce flare frequency."
      }
    ],
    "tennis-elbow": [
      {
        question: "Do you have to play tennis to get tennis elbow?",
        answer: "<strong>No.</strong> It is caused by any repetitive gripping/wrist extension. Painters, plumbers, and typists are commonly affected."
      },
      {
        question: "How do you treat tennis elbow fast?",
        answer: "<strong>Rest and bracing</strong> are key. A counterforce brace relieves tension. Ice massage and NSAIDs reduce acute pain."
      },
      {
        question: "Does tennis elbow heal on its own?",
        answer: "<strong>Yes, but it takes time.</strong> It is a self-limiting condition that typically resolves in 6-12 months. PT accelerates recovery."
      },
      {
        question: "What is PRP for tennis elbow?",
        answer: "<strong>Platelet-Rich Plasma (PRP)</strong> injections use your blood's growth factors to jumpstart healing in chronic tendons that haven't healed with rest. Learn about <a href=\"/treatments/stem-cell-treatment\">regenerative medicine</a>."
      },
      {
        question: "Is surgery needed for tennis elbow?",
        answer: "<strong>Rarely (<5%).</strong> Surgery is only for patients with disabling pain after a year of failed conservative treatment."
      }
    ],
    "plantar-fasciitis": [
      {
        question: "Why is plantar fasciitis worse in the morning?",
        answer: "The fascia contracts overnight. The first steps stretch this tight tissue, causing micro-tears and sharp <strong>'start-up' pain</strong>."
      },
      {
        question: "Can plantar fasciitis go away on its own?",
        answer: "<strong>Yes, but it can take a year.</strong> Active treatment with stretching, orthotics, and night splints speeds up recovery significantly. Read about <a href=\"/area-of-pain/foot-pain/heel-pain-plantar-fasciitis\">heel pain treatment</a>."
      },
      {
        question: "Is walking barefoot bad for plantar fasciitis?",
        answer: "<strong>Yes.</strong> Walking barefoot lacks arch support, increasing strain on the fascia. Wear supportive shoes or sandals even indoors."
      },
      {
        question: "Do cortisone shots cure plantar fasciitis?",
        answer: "<strong>No.</strong> They provide temporary pain relief (months) to allow you to do PT, but they do not heal the tissue. Overuse can weaken the fascia."
      },
      {
        question: "Does plantar fasciitis require surgery?",
        answer: "<strong>Very rarely.</strong> Surgery (fascia release) is considered only after 12 months of aggressive non-surgical treatment has failed."
      }
    ],
    "bursitis": [
      {
        question: "How do you know if bursitis is infected?",
        answer: "<strong>Septic bursitis</strong> is red, hot, and very painful. You may have a fever. This is an emergency requiring drainage and antibiotics."
      },
      {
        question: "Can you massage bursitis?",
        answer: "<strong>Avoid direct massage</strong> on the inflamed bursa, as it increases irritation. Massaging surrounding muscles is okay."
      },
      {
        question: "How long does bursitis last?",
        answer: "With rest, acute bursitis heals in <strong>weeks</strong>. Chronic bursitis from repetitive overuse can last months without lifestyle changes."
      },
      {
        question: "Is compression good for bursitis?",
        answer: "<strong>Yes.</strong> A compression sleeve can help reduce swelling (edema) and provide support to the joint."
      },
      {
        question: "Does bursitis show on X-ray?",
        answer: "<strong>No.</strong> X-rays show bone. An ultrasound or MRI is needed to see the fluid-filled bursa sacs."
      }
    ],
    "bunions-hallux-valgus": [
      {
        question: "Can bunions be corrected without surgery?",
        answer: "<strong>No.</strong> Toe spacers and wide shoes relieve pain, but they cannot structurally realign the bone. <strong>Only surgery can remove the bunion.</strong>"
      },
      {
        question: "When should I have bunion surgery?",
        answer: "Consider surgery when <strong>pain interferes with walking</strong> or wearing shoes. Surgery for cosmetic reasons alone is generally not recommended. Learn about <a href=\"/treatments/bunion-correction-surgery\">bunion correction surgery</a>."
      },
      {
        question: "What is minimally invasive bunion surgery?",
        answer: "It uses <strong>tiny incisions</strong> and special burrs to cut and shift the bone. It offers less pain, less scarring, and faster recovery than open surgery."
      },
      {
        question: "Do bunions grow back?",
        answer: "<strong>They can (recurrence).</strong> The risk is lower with modern surgical techniques (like Lapiplasty) that address the root instability."
      },
      {
        question: "Are bunions hereditary?",
        answer: "<strong>Yes.</strong> Foot shape and mechanics are inherited. Wearing tight shoes exacerbates the problem but is rarely the sole cause."
      }
    ],
    "achilles-tendonitis": [
      {
        question: "Is heat or ice better for Achilles tendonitis?",
        answer: "<strong>Ice is best</strong> for acute pain, especially after activity. Heat can be used *before* activity to loosen the tendon."
      },
      {
        question: "Can I run with Achilles tendonitis?",
        answer: "<strong>It is risky.</strong> Running through pain can lead to a rupture. Rest or cross-train (swim/bike) until pain subsides."
      },
      {
        question: "What exercises help Achilles tendonitis?",
        answer: "<strong>Eccentric heel drops</strong> (lowering the heel slowly off a step) are the gold standard exercise to remodel and strengthen the tendon."
      },
      {
        question: "What happens if the Achilles ruptures?",
        answer: "You will feel a <strong>pop</strong> and be unable to push off. It requires immediate medical care and often surgery for active people."
      },
      {
        question: "How long does Achilles tendonitis take to heal?",
        answer: "It is slow. Mild cases take weeks; chronic cases take <strong>3-6 months</strong>. Consistency with exercises is critical."
      }
    ],
    "flat-feet": [
      {
        question: "Do flat feet need to be fixed?",
        answer: "<strong>Only if painful.</strong> Many people have flat feet with no issues. Treatment is needed if it causes arch, ankle, or knee pain."
      },
      {
        question: "Can you develop flat feet as an adult?",
        answer: "<strong>Yes (Adult Acquired Flatfoot).</strong> This is usually due to Posterior Tibial Tendon Dysfunction (PTTD), where the arch-supporting tendon stretches out."
      },
      {
        question: "Are orthotics necessary for flat feet?",
        answer: "<strong>They are very helpful.</strong> Custom orthotics support the arch and correct misalignment, reducing strain on the foot and knees."
      },
      {
        question: "Can flat feet cause back pain?",
        answer: "<strong>Yes.</strong> Poor foot alignment affects the knees and hips, which alters posture and can lead to secondary lower back pain."
      },
      {
        question: "What is flat foot reconstruction surgery?",
        answer: "It involves <strong>tendon transfers and bone cuts (osteotomies)</strong> to rebuild the arch. Recovery is long (6-12 months) but effective for severe deformity. See <a href=\"/area-of-specialty/flat-feet\">flat feet treatment options</a>."
      }
    ],
    "ankle-arthroscopy": [
      {
        question: "What is ankle arthroscopy used for?",
        answer: "It treats <strong>cartilage damage, bone spurs (impingement), scar tissue</strong>, and loose bodies. It is also used for ankle fusion."
      },
      {
        question: "How long is recovery from ankle arthroscopy?",
        answer: "It is fast. Patients are often walking in a boot within <strong>1-2 weeks</strong>. Full sports return is typically 6-12 weeks."
      },
      {
        question: "Is ankle arthroscopy painful?",
        answer: "<strong>Minimally.</strong> Small incisions mean less tissue damage. Most pain is managed with mild meds and subsides quickly. Learn more about <a href=\"/treatments/ankle-arthroscopy-minimally-invasive-surgery\">minimally invasive ankle arthroscopy</a>."
      },
      {
        question: "Can arthroscopy fix ankle arthritis?",
        answer: "It can <strong>clean out debris (debridement)</strong> for temporary relief, but it cannot reverse lost cartilage. Severe arthritis needs replacement or fusion."
      },
      {
        question: "What are the risks of ankle arthroscopy?",
        answer: "Risks are low but include <strong>nerve irritation</strong> (numbness on top of foot) and infection. Complications are much rarer than with open surgery."
      }
    ],
    "hammer-toes": [
      {
        question: "Can hammer toes be straightened without surgery?",
        answer: "In the early <strong>flexible stage</strong>, splints and roomier shoes can stop progression. Once <strong>rigid</strong>, only surgery can straighten the bone."
      },
      {
        question: "What causes hammer toes?",
        answer: "Muscle imbalance caused by <strong>tight shoes, bunions, or high arches</strong> forces the toe to curl. Genetics also play a role."
      },
      {
        question: "What is hammer toe surgery?",
        answer: "The surgeon removes a small piece of bone to shorten the toe and inserts a <strong>pin or wire</strong> to hold it straight while it heals."
      },
      {
        question: "Can I walk after hammer toe surgery?",
        answer: "<strong>Yes, in a special shoe.</strong> You put weight on the heel. Recovery takes 4-6 weeks for the bone to knit."
      },
      {
        question: "Do hammer toes come back?",
        answer: "<strong>Recurrence is possible</strong> if the underlying cause (like a bunion or tight shoes) is not addressed."
      }
    ],
    "diabetic-foot-ulcers": [
      {
        question: "Why do diabetic ulcers not heal?",
        answer: "Healing is blocked by <strong>poor blood flow</strong> (preventing nutrients) and neuropathy (lack of feeling), which leads to continued pressure on the wound."
      },
      {
        question: "How serious is a diabetic foot ulcer?",
        answer: "<strong>Very serious.</strong> Without treatment, infection can spread to the bone (osteomyelitis), leading to amputation. Early care is vital. See <a href=\"/area-of-pain/foot-pain/diabetic-foot-ulcer-care\">ulcer care</a>."
      },
      {
        question: "How do you treat a foot ulcer?",
        answer: "Treatment involves <strong>debridement (cleaning)</strong>, offloading (special boots), and dressing changes. Vascular surgery may be needed to improve blood flow."
      },
      {
        question: "Can diabetic ulcers be prevented?",
        answer: "<strong>Yes.</strong> Daily foot checks, controlling blood sugar, and wearing <strong>diabetic shoes</strong> significantly reduce ulcer risk."
      },
      {
        question: "What does a diabetic ulcer look like?",
        answer: "It looks like a <strong>red crater or crater-like wound</strong>, often on the ball of the foot. It may be painless due to nerve damage."
      }
    ],
    "ankle-replacement": [
      {
        question: "Ankle Replacement vs. Fusion: Which is better?",
        answer: "<strong>Replacement</strong> preserves motion and protects other joints. <strong>Fusion</strong> is durable but locks the ankle. Replacement is preferred for active, older adults. Compare <a href=\"/treatments/ankle-replacement-surgery\">ankle replacement vs fusion</a>."
      },
      {
        question: "How long does an ankle replacement last?",
        answer: "Modern implants last <strong>10-15 years</strong> or more. If it fails, it can often be converted to a fusion."
      },
      {
        question: "Who is a candidate for total ankle replacement?",
        answer: "Candidates are typically <strong>older (>50), non-obese, with low physical demands</strong>. It is not for high-impact labourers or those with severe nerve damage."
      },
      {
        question: "Can I run after ankle replacement?",
        answer: "<strong>No.</strong> High-impact activities like running wear out the implant. Hiking, cycling, and golf are encouraged."
      },
      {
        question: "What is the recovery for ankle replacement?",
        answer: "You are non-weight bearing for <strong>4-6 weeks</strong>. Physical therapy follows. Full recovery takes 6-12 months."
      }
    ]
  };