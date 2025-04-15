import { ConditionInfoProp } from "../ConditionCard";
import LowerBackImage from '@/public/lowerbackpain.png'
import LowerBackSide from '@/public/lowerbackpainside.jpeg'
import Image from "next/image";
import OutlinedButton from '@/components/OutlinedButton'
import cervicalspinalstenosis1 from '@/public/cervicalspinal.jpeg'
import cervicalspinalstenosis2 from '@/public/cervicalspinal2.png'
import cervicalspinalstenosisside from '@/public/cervicalspinalside.png'
import sciatica from '@/public/sciatica.png'
import sciaticaside from '@/public/sciaticaside.png'
import coccydynia from '@/public/coccydynia.jpeg'
import coccydynia2 from '@/public/coccydynia2.jpeg'
import coccydyniaside from '@/public/coccydyniaside.png'
import cervicalhernia from '@/public/cervicalhernia.jpeg'
import cervicalherniaside from '@/public/cervicalherniaside.png'
import degendisc from '@/public/degendisc.png'
import degendisc2 from '@/public/degendisc2.png'
import degendiscside from '@/public/degendiscside.jpeg'
import GradientOverlayImage from "../GradientOverlayImage"
import lumbarherniateddisc from '@/public/lumberherniateddisc.jpeg'
import lumbarherniateddisc2 from '@/public/lumberherniateddisc2.png'
import lumbarherniateddiscside from '@/public/lumberherniateddiscside.png'
import arthritis from '@/public/arthritis.png'
import arthritis2 from '@/public/arthritis2.jpeg'
import arthritisside from '@/public/arthritisside.jpeg'
import pinchednerve from '@/public/pinchednerve.jpeg'
import pinchednerve2 from '@/public/pinchednerve2.jpeg'
import pinchednerveside from '@/public/pinchednerveside.jpeg'


export const Conditions : ConditionInfoProp[] = [
    {
      "title": "Adjacent Segment Disease",
      "body": "An adjacent segment disc disease is the presence of a degenerative disc that affects the spinal column above and below a previously operated segment. It can occur in any patient who has had previous spine surgery.",
      "slug": "adjacentsegmentdisease"
    },
    {
      "title": "Degenerative Disc Disease",
      "body": "Around 40% of adults over 40 have a minimum of one degenerated vertebral disc. Approximately 80% of adults will have one by the age of 80. Disc...",
      forum : [
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                What is Degenerative Disc Disease?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Degenerative Disc Disease is a spinal condition caused by age-related breakdown of the discs that cushion the vertebrae. These discs act like shock absorbers, allowing your spine to flex, bend, and twist. Over time, discs can lose water content, flatten, and develop small tears, reducing their ability to support your spine and absorb impact. Unlike acute injuries, DDD develops slowly over time and is especially common in individuals over 40. However, it can also affect younger individuals with physically demanding lifestyles or spinal injuries.
                </h1>
                <GradientOverlayImage
                  imageData={degendisc} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
              <h1 
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  To diagnose DDD, our specialists begin with a full medical history and physical exam, followed by advanced imaging such as X-rays or MRI scans to evaluate disc height, disc shape, and any signs of degeneration. We also assess nerve function and spinal alignment to understand the full extent of the damage. Diagnosis may involve ruling out other conditions, such as herniated discs or spinal stenosis, that share similar symptoms.
                </h1>

                <OutlinedButton text="Do I have this Condition?"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Symptoms of Degenerative Disc Disease
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Symptoms vary depending on the location and severity of the disc degeneration. Common signs include chronic lower back or neck pain that worsens with bending, twisting, or prolonged sitting. Some patients find relief when walking or changing positions. Others may experience muscle weakness or numbness in the arms or legs if nerve compression occurs. Many people also report stiffness or reduced flexibility in the spine. The pain may be intermittent, flaring up during activity and easing with rest.
                </h1>
                <OutlinedButton text="Find a Treatment"/>

                <GradientOverlayImage
                  imageData={degendisc2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />

              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Risk Factors for Degenerative Disc Disease
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                You may be at higher risk for DDD if you are over the age of 40, smoke, or lead a sedentary lifestyle. A history of spinal injuries or trauma can increase your risk, especially if paired with poor posture or spinal misalignment. Genetic factors also contribute, and individuals with a family history of spine-related conditions are more likely to develop DDD. Identifying these risk factors early can help slow the progression of the disease and guide preventative care.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Treatment Options for Degenerative Disc Disease
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                At Advanced Orthopedics, we create personalized treatment plans tailored to your condition and lifestyle. Treatment options may include physical therapy to improve strength, flexibility, and posture, as well as medications like non-steroidal anti-inflammatory drugs (NSAIDs) to reduce pain and swelling. For patients with nerve irritation, epidural steroid injections can offer targeted relief. Other approaches may include chiropractic care or spinal manipulation therapy. In more severe cases, minimally invasive spine surgery may be recommended to stabilize the spine and relieve nerve pressure. Our goal is to relieve your pain and restore spine stability while avoiding unnecessary surgery whenever possible.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Schedule a Consultation Today
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                If you’re experiencing persistent back or neck pain, don’t wait to seek help. Degenerative Disc Disease is manageable with the right care plan and professional guidance. At Advanced Orthopedics, our experienced spine specialists are here to evaluate your condition, offer expert recommendations, and guide you toward long-term relief.<br/><br/>Call us today at (855) 853-6542 or fill out our online form to schedule your consultation. Let’s work together to get your spine and your life back on track.
                </h1>
              </div>
            </div>
          )
        }
      ],
      side_img : degendiscside,
      "slug": "degenerativediscdisease"
    },
    {
      "title": "Adult Degenerative Scoliosis",
      "body": "Adult degenerative scoliosis, also known as adult-onset scoliosis, is a unique and frustrating disease where the spine begins to curve due to age-degeneration of your fa...",
      "slug": "adultdegenerativescoliosis"
    },
    {
      "title": "Facet Joint Disease",
      "body": "Facet joint disease is a condition that occurs in the spine and develops over many years as the facet joints begin to break down through everyday wear and tear. The facet j...",
      "slug": "facetjointdisease"
    },
    {
      "title": "Arthritis",
      "body": `Arthritis is a common joint condition that causes inflammation, stiffness, and pain, affecting millions of people across the U.S. It can severely limit mobility and interfere with daily activities like walking, climbing stairs, or even gripping objects. While arthritis is often associated with aging, it can affect people of all ages depending on the type and underlying cause.
At Advanced Orthopedics, we offer comprehensive arthritis treatment plans tailored to your condition whether it's osteoarthritis, rheumatoid arthritis, or another form. With a combination of expert diagnosis, non-surgical therapies, and cutting-edge orthopedic care, our goal is to reduce inflammation, restore joint function, and help you regain your quality of life.`,
      side_img : arthritisside,
      forum : [
        {
          post : (
            <div className="flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                What Is Arthritis?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Arthritis refers to inflammation of one or more joints. It’s not a single disease but a broad term used to describe over 100 different types of joint disorders. The two most common types are osteoarthritis (OA) and rheumatoid arthritis (RA), though others like gout, psoriatic arthritis, and lupus-related arthritis are also common.<br/><br/>
                The primary symptoms of arthritis include joint pain, stiffness, swelling, redness, and decreased range of motion. Over time, arthritis can lead to cartilage loss, bone erosion, and even joint deformity, particularly if left untreated.
                </h1>
                <GradientOverlayImage
                  imageData={arthritis} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
                <h1 
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  Many patients describe arthritis as a dull, aching pain that worsens with activity or after periods of rest. Understanding the exact type of arthritis you have is critical for choosing the most effective treatment path.
                </h1>
                <OutlinedButton text="Do I have this Condition?"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Symptoms of Arthritis
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  <li>Joint stiffness, especially in the morning or after inactivity</li><br/>
                  <li>Swelling around the joints</li><br/>
                  <li>Persistent or sharp joint pain</li><br/>
                  <li>Tenderness when touching the joint</li><br/>
                  <li>Reduced range of motion</li><br/>
                  <li>Clicking, popping, or grinding sounds</li><br/>
                  <li>Warmth or redness over the joint</li><br/>
                  <li>Fatigue or flu-like symptoms (common in inflammatory types like RA)</li><br/>
                </h1>
                
                <h1 
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  In more advanced stages, arthritis can lead to joint deformity, loss of function, and reduced ability to perform everyday tasks. Early diagnosis and treatment can significantly slow progression and reduce permanent damage.
                </h1>
                <OutlinedButton text="Find a Treatment"/>
                <GradientOverlayImage
                  imageData={arthritis2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Types of Arthritis
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                There are several major types of arthritis that affect people of all ages. Osteoarthritis is the most common and is caused by the gradual breakdown of cartilage, which cushions the ends of bones within a joint. As this cartilage deteriorates, bones begin to rub against each other, leading to pain and stiffness. Rheumatoid arthritis is an autoimmune disorder in which the immune system attacks the lining of the joints, causing chronic inflammation, swelling, and joint erosion. Gout results from a buildup of uric acid crystals, often in the big toe, and leads to sudden, intense pain. Psoriatic arthritis is associated with psoriasis and can cause both joint inflammation and skin symptoms. Each of these conditions presents unique challenges and requires a tailored treatment plan to effectively control pain and prevent further damage.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Learn About Arthritis Treatments
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  Arthritis may be a chronic condition, but that doesn’t mean it has to control your life. With the right treatment plan, it’s possible to reduce pain, slow joint damage, and improve your mobility. At Advanced Orthopedics, our team of experts offers a full spectrum of arthritis care from advanced imaging and diagnosis to non-surgical therapies and state-of-the-art surgical solutions when needed. Whether you’re managing early signs of osteoarthritis or facing the challenges of an inflammatory condition like rheumatoid arthritis, we’re here to help guide you through every stage of your treatment.
                </h1>
              </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Schedule a Consultation Today
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  If you’re living with persistent joint pain, stiffness, or swelling, don’t wait to get the help you need. Arthritis is a manageable condition when addressed early with the right treatment plan and expert care. At Advanced Orthopedics, our experienced specialists are here to evaluate your symptoms, provide a personalized diagnosis, and guide you toward lasting relief and better joint health.<br/><br/>
                  Call us today at (855) 853-6542 or fill out our online consultation form to schedule your appointment. Let’s take the first step together toward improving your mobility, comfort, and quality of life.
                </h1>
              </div>
          </div>
          )
        }
      ],
      "slug": "arthritis"
    },
    {
      "title": "Lower Back Pain",
      "body": "As we age, bones lose strength and muscles become less flexible. The lumbar discs in the lower back dry out and lose elasticity, reducing their ability to cushion the spine. This can lead to a bulging or herniated disc, which may press on one of the spinal nerve roots over 50 nerves that control movement and send signals between the brain and body. When these nerves are compressed or irritated, it can cause chronic lower back pain, tingling, or numbness common symptoms of conditions like sciatica or spinal stenosis.",
      side_img : LowerBackSide,
      forum : [
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                What Could Be Causing My Lower Back Pain?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Lower back conditions can present in many ways, including radiating pain, stiffness, numbness, or tingling that travels through one or both legs. The severity and type of symptoms often depend on the specific condition and how far it has progressed. Conditions like herniated discs, spinal stenosis, osteoarthritis, and spondylolisthesis are among the most common causes of chronic lower back pain. If you’re experiencing numbness or tingling in particular, this may point to nerve compression — which is often more serious than general discomfort and should be addressed immediately to prevent long-term damage.
                </h1>
                <GradientOverlayImage
                  imageData={LowerBackImage} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
                <h1 
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  Even if your pain seems manageable, it’s important not to ignore it. Small symptoms can be early warning signs of more serious spinal conditions. That’s why we offer a quick and easy Back Condition Checker to help identify potential issues. This tool is designed to gather information about your symptoms and guide you toward the appropriate care pathway.
                </h1>

                <OutlinedButton text="Do I have this Condition?"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
                  What is the Right Treatment for Me?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  The only way to determine the right treatment is through an accurate diagnosis. Our specialists use a variety of advanced tools, including MRI scans, X-rays, ultrasounds, and physical evaluations to assess the source of your lower back pain. These methods help detect conditions like herniated or bulging discs, osteoarthritis, spinal stenosis, spondylolisthesis, or even spinal fractures. Once a clear diagnosis is made, our highly trained doctors at OLSS can recommend a treatment plan tailored to your needs. With access to advanced procedures not widely available elsewhere, we’re able to offer both non-surgical and surgical options based on what’s best for your recovery. 
               </h1>
               <OutlinedButton text="Find a Treatment"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
                 Can Back Pain Mean I Need Surgery?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
Surgery is not always necessary for lower back pain. In fact, many patients experience significant relief through non-surgical treatments such as physical therapy, spinal injections, or medications that improve body mechanics and reduce inflammation. However, if conservative treatments fail or if there is significant damage to spinal discs or nerves, surgical intervention may be required. In those cases, our team specializes in minimally invasive procedures designed to reduce recovery time and improve outcomes.
               </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
                 What Can I Do to Prevent Lower Back Pain?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  The most effective way to prevent lower back pain is by maintaining a healthy lifestyle. Carrying excess weight places added pressure on the lower spine, accelerating disc degeneration. Poor posture and lack of physical activity can also contribute to spinal issues over time. Even habits like smoking or prolonged sitting can increase the risk of developing chronic back pain. Making simple changes, such as staying active and practicing good posture, can go a long way in protecting your spine.
               </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
                Schedule a Consultation Today
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  If you’re experiencing persistent lower back pain, numbness, or radiating leg symptoms, it may be time to speak with a spine specialist. These signs could indicate a more serious issue that, if caught early, can be treated before it worsens. <br/> <br/> At OLSS, we specialize in diagnosing and treating the full range of lower back conditions with the most advanced technology and techniques available. Don’t wait to take control of your health. Contact us at (855) 853-6542 or fill out our online form to schedule your consultation today.
                </h1>
              </div>
            </div>
          )
        }
      ],
      "slug": "lowerbackpain",
    },
    {
      "title": "Pinched Nerve",
      "body": `Nerve pain can disrupt your daily life and limit your mobility. A pinched nerve, also known as nerve compression, occurs when surrounding tissues such as bones, cartilage, muscles, or discs put pressure on a nearby nerve. This pressure can interfere with the nerve's function and cause pain, numbness, or weakness.
The most common areas for pinched nerves are the neck (cervical spine) and lower back (lumbar spine). When nerves in the lower back are affected, it often leads to sciatica, where pain radiates from the lower back into the legs. At Advanced Orthopedics, our spine specialists offer precise diagnosis and advanced treatment options to relieve nerve pressure and restore function.`,
      forum : [
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                What Is a Pinched Nerve?
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  A pinched nerve occurs when soft tissue or bone compresses a nearby nerve root, interrupting its ability to transmit signals correctly. This can result in pain that radiates from the spine to the extremities, depending on the location of the compression. When the cervical spine is affected, symptoms often extend into the arms or hands. If the lumbar spine is involved, the pain can travel into the buttocks, legs, or feet.<br/><br/>
                  Common causes of nerve compression include herniated discs, bone spurs, spinal stenosis, and poor posture. Over time, continued pressure can lead to worsening symptoms and even permanent nerve damage if not treated properly.
                </h1>
                <GradientOverlayImage
                  imageData={pinchednerve} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
                <h1 
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  Many patients report that pinched nerve pain worsens with movement or after long periods of sitting. Some also experience burning sensations or weakness in the arms or legs. Early diagnosis and treatment are essential to preventing long-term nerve damage and restoring full function.
                </h1>

                <OutlinedButton text="Do I have this Condition?"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
               Symptoms of a Pinched Nerve
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  Symptoms of a pinched nerve depend on where the nerve is compressed, but common warning signs include:<br/>
                  <li>A sharp or burning pain radiating into the arms or legs</li><br/>
                  <li>Numbness or tingling in the affected limb</li><br/>
                  <li>Muscle weakness or feeling that the limb is "asleep"</li><br/>
                  <li>Pain that worsens with certain movements, like turning the head or standing up</li><br/>
                  <li>Discomfort that improves slightly when leaning forward or resting</li><br/>
                </h1>
                
                <h1 
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
                >
                  Pinched nerve symptoms can come and go or be constant, depending on the cause. If left untreated, nerve compression may lead to permanent nerve damage, chronic pain, or muscle atrophy. Recognizing these early warning signs is the first step toward finding lasting relief.
                </h1>
                <OutlinedButton text="Find a Treatment"/>
                <GradientOverlayImage
                  imageData={pinchednerve2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-2xl">
                Types of Pinched Nerve Conditions
              </h1>
              <div  className=" flex flex-col space-y-[40px]">
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Several spinal conditions can lead to pinched nerves. Herniated discs are one of the most common causes. When the soft inner material of the disc bulges out, it can press against nearby nerves and cause pain, tingling, or numbness. Spinal stenosis, which involves narrowing of the spinal canal, is another major cause especially in older adults.<br/><br/>
                Bone spurs, often related to arthritis or spinal degeneration, can also contribute to nerve compression by invading space meant for nerves. In some cases, muscle tightness or repetitive strain from poor posture may also lead to a pinched nerve. Understanding what’s causing your symptoms is key to receiving the right care.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-2xl">
              Learn About Pinched Nerve Treatments
            </h1>
            <div  className=" flex flex-col space-y-[40px]">
              <h1
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                A pinched nerve doesn’t have to control your life. With early intervention and the right treatment strategy, most patients experience relief without surgery. Non-surgical options may include physical therapy, anti-inflammatory medication, activity modification, ergonomic adjustments, and corticosteroid injections. When conservative care fails to relieve pressure on the nerve, minimally invasive surgical solutions such as microdiscectomy or foraminotomy may be considered.<br/><br/>
                At Advanced Orthopedics, our team uses advanced imaging and diagnostic tools to pinpoint the source of nerve compression and build a customized care plan. Whether you need non-invasive treatment or surgical intervention, we’re here to help you recover quickly and safely.
              </h1>
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-2xl">
              Schedule a Consultation Today
            </h1>
            <div  className=" flex flex-col space-y-[40px]">
              <h1
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                If you’re living with shooting pain, numbness, or tingling that just won’t go away, it may be time to speak with a spine specialist. A pinched nerve is highly treatable, especially when diagnosed early. At Advanced Orthopedics, our experienced physicians will evaluate your symptoms, identify the source of the problem, and recommend a treatment path that works best for your needs and lifestyle.<br/><br/>
                Call us today at (855) 853-6542 or fill out our online consultation form to schedule your appointment. Lasting relief could be just one visit away.
              </h1>
            </div>
          </div>
          )
        }
      ],
      side_img : pinchednerveside,
      "slug": "pinchednerve"
    },
    {
      "title": "Bulging Disc",
      "body": "A disc bulges when the outer layer of a vertebral disc swells outward and places pressure on the surrounding nerves and structures. Although a bulging disc is similar to...",
      "slug": "bulgingdisc"
    },
    {
      "title": "Herniated Disc",
      "body": "A herniated disc is a vertebral disc that has broken down to the point where the inner material, called the nucleus, has seeped through the wall of the vertebral disc and ca...",
      "slug": "herniateddisc"
    },
    {
      "title": "Carpal Tunnel Syndrome",
      "body": "The median nerve in the wrist is pinched. Compression of that median nerve can cause pain in the wrist, hand and fingers. Also numbness in the fingers can cause you to dr...",
      "slug": "carpaltunnelsyndrome"
    },
    {
      "title": "Osteoarthritis",
      "body": "A degenerative joint disease where cartilage wears down over time, commonly affecting knees, hips, and hands.",
      "slug": "osteoarthritis"
    },
    {
      "title": "Rheumatoid Arthritis",
      "body": "An autoimmune condition that causes inflammation in the joints, often leading to pain, swelling, and joint deformity.",
      "slug": "rheumatoidarthritis"
    },
    {
      "title": "Torn Meniscus",
      "body": "A common knee injury involving torn cartilage that cushions and stabilizes the joint, often caused by twisting motions.",
      "slug": "tornmeniscus"
    },
    {
      "title": "Rotator Cuff Tear",
      "body": "A tear in one or more of the tendons of the shoulder’s rotator cuff, leading to weakness and pain in arm movement.",
      "slug": "rotatorcufftear"
    },
    {
      "title": "ACL Injury",
      "body": "A tear or sprain of the anterior cruciate ligament (ACL) in the knee, often caused by sudden stops or changes in direction.",
      "slug": "aclinjury"
    },
    {
      "title": "Tennis Elbow",
      "body": "A painful condition caused by overuse of the elbow, leading to inflammation of the tendons on the outside of the elbow.",
      "slug": "tenniselbow"
    },
    {
      "title": "Plantar Fasciitis",
      "body": "Inflammation of the tissue on the bottom of the foot, causing heel pain especially in the morning or after rest.",
      "slug": "plantarfasciitis"
    },
    {
      "title": "Bursitis",
      "body": "Inflammation of the small fluid-filled sacs (bursae) that cushion the bones, tendons, and muscles near joints.",
      "slug": "bursitis"
    },
    {
      title : 'Cervical Herniated Disc',
      body : 'A herniated disc occurs when one of the soft, cushion-like discs between the vertebrae in your spine becomes damaged. Over time or due to injury, pressure on the disc can cause the tough outer layer to tear, allowing the inner gel-like material (nucleus pulposus) to leak out. When this material presses against nearby spinal nerves, it can lead to symptoms such as sharp back or neck pain, numbness, tingling, and muscle weakness. This condition is also commonly referred to as a slipped disc or ruptured disc, and it most often affects the lower back (lumbar spine) or neck (cervical spine).',
      slug : 'cervicalherniateddisc',
      side_img : cervicalherniaside,
      forum: [
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              What Is a Herniated Cervical Disc?
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                A herniated cervical disc occurs when one of the discs in the neck region (cervical spine) becomes damaged. These discs are gel-like cushions that sit between the vertebrae and act as shock absorbers. Over time or due to injury, the outer wall of the disc can tear, allowing the inner nucleus to leak out and press against surrounding spinal nerves. This can lead to symptoms such as neck pain, numbness, tingling, or weakness in the shoulders, arms, or hands. Treatment options range from conservative therapies like rest and physical therapy to more advanced solutions, including cervical spine surgery.
              </h1>
  
              <div className="rounded-[24px] overflow-hidden"><iframe width="100%" height="500" src="https://www.youtube.com/embed/gUG_zbKqlaU?si=k_-WQStF8cvjCaMj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe></div>
              
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                If you’re experiencing neck pain, numbness, or weakness in your upper limbs, you may be dealing with a herniated disc in your cervical spine. Our symptom checker tool is a quick and easy way to help determine if you’re showing signs of disc herniation and whether a treatment consultation is recommended.
              </h1>

              <OutlinedButton text="Do I have this Condition?" />

            </div>
  
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                How Are Herniated Discs Diagnosed?
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                 Diagnosing a herniated disc begins with a medical history review and physical examination. Your doctor may recommend imaging tests such as X-rays, MRI scans, or CT scans to confirm whether a disc is bulging or ruptured. While X-rays can help rule out other causes of pain, MRI and CT scans offer the most accurate visualization of soft tissue and nerve compression. If a herniated disc is confirmed, treatment usually starts conservatively with rest, ice, and medication. If symptoms persist, surgical intervention may be recommended.
                </h1>
                <OutlinedButton text="Find a Treatment" />
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                Pain Management for a Cervical Herniated Disc
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                 In the early stages of a cervical disc herniation, pain can often be managed with rest, ice, heat therapy, and anti-inflammatory medications. Muscle relaxants or prescription pain relievers may also be used. If pain continues, physicians may suggest physical therapy to help strengthen the surrounding neck muscles. In some cases, nerve root blocks or epidural steroid injections are used to reduce inflammation and nerve pressure. Our team at OLSS will help determine the best approach based on your condition.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              What Causes a Herniated Disc in the Neck?
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               Cervical disc herniation can occur suddenly due to trauma or gradually as part of the aging process. The most common cause is wear and tear, which leads to disc degeneration. Over time, the discs lose elasticity and hydration, making them more prone to rupture. Other contributing factors include poor posture, obesity, repetitive strain, and spinal injury. In people over the age of 30, disc degeneration becomes more common, but even younger patients can suffer from herniated discs if their lifestyle puts excess stress on the spine.
              </h1>

              <GradientOverlayImage
                  imageData={cervicalhernia} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />

            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Risk Factors for a Cervical Herniated Disc
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               Several factors can increase your risk of developing a cervical herniated disc. These include being overweight, smoking, living a sedentary lifestyle, or engaging in activities that involve repetitive neck strain or heavy lifting. Trauma to the spine or poor posture while sitting or sleeping can also contribute. Herniated discs may present with a wide range of symptoms pain, numbness, tingling, and weakness in the arms or legs so it’s important to get evaluated by a medical professional if you suspect you may have this condition.
              </h1>
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Treatment Options for Herniated Discs
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               Treatment for a herniated disc depends on the severity of the condition and the patient’s overall health. Mild cases often respond well to conservative approaches like rest, physical therapy, heat/ice, and anti-inflammatory medication. If these measures fail to provide relief, more advanced treatments such as epidural injections or surgery may be required. Surgical options typically involve removing part or all of the damaged disc to relieve pressure on the spinal nerves. At OLSS, our specialists are trained in minimally invasive procedures that aim to reduce recovery time and preserve neck mobility
              </h1>
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Schedule a Consultation Today
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               Cervical herniated discs can significantly impact your daily life but you don’t have to manage the pain alone. Whether you're just beginning to feel discomfort or you've been struggling for months, there are many effective treatments available. At Orthopedic & Laser Spine Surgery, our spine surgeons are highly experienced in diagnosing and treating herniated discs through both non-surgical and surgical solutions.<br/><br/>
               Call us today at (855) 853-6542 or fill out our online form to schedule a consultation. You may have more options than you think and recovery may be closer than you realize.
              </h1>
            </div>
          </div>
          )
        }
      ]
    },
    {
      "title": "Cervical Spinal Stenosis",
      "body": "A narrowing of the spaces within your spine, which can put pressure on the nerves traveling through the spine.",
      side_img : cervicalspinalstenosisside,
      forum : [
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1 
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
                 How Do I Know If I Have Spinal Stenosis?
              </h1>

              <div className=" flex flex-col space-y-[40px]">
                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                Cervical spinal stenosis can cause a variety of symptoms depending on the severity and levels affected. Common signs include shock-like pain in the neck or arms, tingling sensations, arm weakness, numbness in the hands or fingers, loss of coordination, balance issues, difficulty walking, and in severe cases, loss of bladder control. These symptoms may suggest compression of the spinal cord or nerve roots and should never be ignored.
                </h1>

                <GradientOverlayImage
                  imageData={cervicalspinalstenosis1} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />

                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  If you’re experiencing any of these symptoms, it’s essential to get evaluated early. We offer a quick and easy spinal condition assessment tool to help gather information and determine if you may be a candidate for treatment. Don’t delay your recovery the earlier we intervene, the better your outcome.
                </h1>

                <OutlinedButton text="Do I have this Condition?"/>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
              What is the Right Treatment for Me?
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                At Orthopedic & Laser Spine Surgery, we specialize in procedures that relieve spinal cord compression while preserving motion. For patients with multi-level stenosis (typically three or more levels), we recommend cervical laminoplasty. This procedure opens the spinal canal and decompresses the spinal cord without the need for a multi-level fusion, preserving mobility in the neck.<br/> <br/>
                For patients with one or two affected levels, a decompression and artificial disc replacement is often ideal. This modern approach allows for motion preservation and avoids the long-term stiffness associated with spinal fusion. While multi-level fusion is sometimes used, it can leave patients with a permanently stiff neck, especially when four levels are involved. In contrast, laminoplasty provides the best option for multiple levels of compression without sacrificing mobility.
              </h1>

              <OutlinedButton text="Find a Treatment"/>

              <GradientOverlayImage
                  imageData={cervicalspinalstenosis2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />

            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
              More About Cervical Laminoplasty
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                Cervical laminoplasty is a motion-preserving surgery done through the back of the neck. During the procedure, the muscles are temporarily moved aside and small cuts are made in the lamina the bone protecting the spinal cord. These bones are then lifted and repositioned to create more space for the spinal cord, relieving pressure and reducing symptoms.<br /><br/>
                The key benefit of this procedure is that it retains the neck’s natural movement. Unlike fusion, which locks segments together, laminoplasty allows the bones to remain flexible. However, it’s important to note that while laminoplasty is excellent for relieving nerve-related symptoms like arm and leg pain or headaches, it is not intended to address central neck pain. For axial neck pain, artificial disc replacement may be the better solution.
              </h1>

            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
              Post-Op Recovery           
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                Most patients recover quickly after cervical laminoplasty. Many go home the next day, and in some cases, it may be performed on an outpatient basis. Pain typically improves by the third day after surgery. Since neck movement is preserved, stiffness is minimized, and mobility is encouraged early on, which further speeds up recovery.
              </h1>

            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
             Schedule a Consultation Today          
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                If you’re experiencing symptoms like numbness, clumsiness, or radiating pain in your arms or legs, you may have cervical spinal stenosis. Early treatment can significantly improve your outcome and prevent further neurological damage. At OLSS, our expert surgeons specialize in both minimally invasive and motion-preserving spinal procedures to help you get back to life without pain or stiffness.<br /><br/>
                Take the first step toward recovery. Call us at (855) 853-6542 or fill out our online form to schedule your consultation today.
              </h1>

            </div>
          </div>
          )
        },
       
      ],
      side_img : pinchednerveside,
      "slug": "cervicalspinalstenosis"
    },
    {
      "title": "Lumbar Herniated Disc",
       body : "A lumbar herniated disc occurs when a disc in the lower back becomes damaged or shifts out of place, often due to aging, injury, or improper lifting. These discs cushion the vertebrae and allow for movement, but when the outer layer tears, the inner gel like center can press on nearby nerves. This can lead to pain, tingling, or weakness that radiates from the lower back into the hips, buttocks, or legs often referred to as sciatica. The lower back is the most common area for herniated discs because it absorbs the most stress from daily movement.",
       side_img : lumbarherniateddiscside,
       forum : [
        {
          post : (
          <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              How Do I Know If I Have a Lumbar Herniated Disc?
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                Signs of a lumbar herniated disc often start gradually but may worsen over time if not treated. The most common symptom is a sharp or burning pain that radiates from the lower back into the leg, often following the path of the sciatic nerve. Many patients describe the pain as electric or stabbing, and it may worsen when sitting for long periods, bending forward, or coughing. Some patients also experience tingling, numbness, or muscle weakness in the leg or foot on the affected side. In severe cases, the condition can affect walking or standing for extended periods, reducing your quality of life.
              </h1>
              <GradientOverlayImage
                  imageData={lumbarherniateddisc} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
              />
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                If these symptoms sound familiar, you may be suffering from a lumbar herniated disc. Advanced Orthopedics offers a quick and effective symptom checker to gather information and help determine the best path to recovery. Our goal is to diagnose your condition early and create a treatment plan that delivers real results.
              </h1>

              <OutlinedButton text="Do I have this Condition?" />

            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              What Lumbar Herniated Disc Treatment is Right for Me?
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                The right treatment for a lumbar herniated disc depends on how severe your symptoms are and how much they impact your daily life. Most cases respond well to conservative care, including rest, heat and ice therapy, physical therapy, and anti-inflammatory medications. These methods aim to reduce nerve irritation, restore movement, and strengthen the muscles that support the spine. If pain persists or worsens despite these efforts, more advanced treatments such as spinal injections or minimally invasive surgery may be recommended.<br/><br/>
                At Advanced Orthopedics, our spine specialists will evaluate your condition and create a customized treatment plan to help you return to a pain-free, active lifestyle. You don’t have to live with back pain we’re here to help you find the right solution.
              </h1>
              <OutlinedButton text="Find a Treatment" />
            </div>
          </div>
          )
        },
        {
          post : (
          <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Pain Management for a Lumbar Herniated Disc
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                The right treatment for a lumbar herniated disc depends on how severe your symptoms are and how much they impact your daily life. Most cases respond well to conservative care, including rest, heat and ice therapy, physical therapy, and anti-inflammatory medications. These methods aim to reduce nerve irritation, restore movement, and strengthen the muscles that support the spine. If pain persists or worsens despite these efforts, more advanced treatments such as spinal injections or minimally invasive surgery may be recommended. 
                At Advanced Orthopedics, our spine specialists will evaluate your condition and create a customized treatment plan to help you return to a pain-free, active lifestyle. You don’t have to live with back pain we’re here to help you find the right solution.
              </h1>
              <GradientOverlayImage
                  imageData={lumbarherniateddisc2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
              />
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Best Treatment to Prevent Pain From a Lumbar Herniated Disc
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               If you’re experiencing symptoms of a lumbar herniated disc, there are several treatment options available depending on the severity of your condition. If your pain is mild and manageable, starting with home care and guided physical therapy can often lead to improvement. Applying heat or ice, taking anti-inflammatory medications such as ibuprofen or naproxen, and making lifestyle adjustments like avoiding long periods of sitting or poor lifting techniques can help reduce strain on the lower back. Exercise programs that strengthen the core and improve flexibility are also an essential part of recovery.<br/><br/>
                When conservative care is not enough, surgical treatment may be necessary to relieve pressure on the affected nerves. Discectomy is a common procedure where the portion of the disc pressing on the nerve is removed to relieve pain. In some cases, a laminectomy may be performed to widen the spinal canal and ease nerve compression. For patients with severe disc damage, spinal fusion may be considered to stabilize the spine and prevent further injury.<br/><br/>
                Every patient is different, which is why the team at Advanced Orthopedics develops personalized care plans using the most advanced and least invasive techniques available. Whether your condition is new or has been ongoing for years, we’re here to help you get back to living the life you love.
              </h1>
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-[#111315] text-4xl">
              Schedule a Consultation Today
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
               Living with a lumbar herniated disc can affect every aspect of your day, from walking and sitting to sleeping and working. You don’t have to push through the pain. At Advanced Orthopedics, our expert spine team is ready to help you regain control through innovative treatments and compassionate care. Whether you’re just beginning to feel discomfort or you’ve been suffering for some time, the first step toward recovery starts with a conversation.<br/><br/>
               Call us today at (855) 853-6542 or fill out our secure online form to schedule your consultation. With Advanced Orthopedics on your side, a pain-free future is within reach.
              </h1>
            </div>
          </div>
          )
        }
       ],
      "slug": "lumbarherniateddisc"
    },

    {
      "title": "Sciatica",
      "body": "Sciatica occurs when the sciatic nerve is compressed, often due to a spinal condition like a herniated disc or spinal stenosis. Pain may radiate from the lower back into the buttocks, legs, or feet. Orthopedic specialists diagnose and treat sciatica using physical therapy, medications, or, when needed, minimally invasive surgery to relieve pressure and restore function.",
      side_img : sciaticaside,
      forum: [
        {
          post: (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                How Do I Know if I Have Sciatica?
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Sciatica symptoms usually affect only one side of the body, most commonly the lower back and leg. They often intensify while sitting and may include radiating pain, numbness, tingling, and muscle weakness in the affected leg. If the condition advances, it may begin to impact your ability to walk or perform daily activities. In some cases, tingling or numbness in the arms and legs could signal a more advanced orthopedic issue.
                </h1>
    
                <div className="rounded-[24px] overflow-hidden"><iframe width="100%" height="315" src="https://www.youtube.com/embed/EVPlqu2FH2g?si=iSAQ8CBU0XJwmMAv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  If you suspect you may be experiencing sciatica, we offer a quick and easy condition checker. This tool gathers key information about your symptoms and helps determine if you're a candidate for evaluation and treatment.
                </h1>

                <OutlinedButton text="Do I have this Condition?" />

              </div>
    
            </div>
          )
        },
        {
          post: (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                What Is the Right Treatment for Me?
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Most cases of sciatica respond well to conservative treatment, especially when the underlying condition compressing the sciatic nerve is addressed. Treatment may include anti-inflammatory medication, stretching exercises, heat and ice therapy, and physical therapy. These methods aim to relieve pressure, reduce inflammation, and restore mobility.<br /><br />
                  Only after conservative options have been exhausted is surgery considered. At OLSS, our board-certified orthopedic doctors are experts in treating sciatica. We offer advanced, customized care plans that many other practices are not equipped to provide.
                </h1>
                <OutlinedButton text="Find a Treatment" />
              </div>
            </div>
          )
        },
        {
          post: (
            <div className="flex flex-col space-y-[16px]">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500
                }}
                className="text-[#111315] text-4xl">
                Best Sciatica Treatment Options
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Sciatica treatments vary depending on nerve involvement and symptom severity. Our team offers both non-surgical and surgical solutions tailored to your condition
                </h1>
    
                <h1
                  style={{
                    fontFamily: "var(--font-inter),",
                    fontWeight: 500
                  }}
                  className="text-[#111315] text-xl"
                >
                  Non-Surgical Treatment:
                </h1>
    
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Stretching exercises improve mobility and flexibility. Chiropractic care eases pressure on the spine. Medications reduce inflammation and pain.
                </h1>
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                  }}
                  className="text-[#111315] text-xl">
                  Surgical Treatment:
                </h1>
    
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Foraminotomy relieves pressure by enlarging the foramen.<br />Discectomy removes the herniated disc causing nerve compression.<br /> Laminotomy removes part of the lamina to decompress the nerve.<br /><br />
                  Our orthopedic specialists will help determine the best option based on your condition, lifestyle, and treatment goals.
                </h1>
                <GradientOverlayImage
                  imageData={sciatica} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
             Schedule a Consultation Today          
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                If you suspect you’re experiencing sciatica, don’t wait to seek help. Our team at Florida Orthopedic & Laser Spine Surgery specializes in diagnosing and treating sciatica with both non-invasive and surgical approaches. We’ve helped thousands of patients regain their comfort, mobility, and quality of life.<br/><br/>
                Call us today at (855) 853-6542 or fill out our online form to book your appointment. Let us help you find lasting relief.
              </h1>

            </div>
          </div>
          )
        }
      ],
      slug: "sciatica"
    },

    {
      "title": "Coccydynia",
      "body": "Coccydynia is pain or discomfort in the tailbone area (coccyx). It can result from trauma, prolonged sitting, childbirth, or degenerative joint changes, leading to chronic soreness or acute flare-ups.",
      side_img : coccydyniaside,
      forum: [
        {
          post: (
            <div className="flex flex-col space-y-[16px]">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl"
              >
                What Is Coccydynia?
              </h1>
              <div className="flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Coccydynia is the medical term for inflammation or injury to the coccyx (tailbone), located at the bottom of the spine. Pain may occur while sitting, standing up from a seated position, or during bowel movements. It can be dull and persistent or sharp and stabbing.<br /><br />
                  The cause isn't always obvious, but common triggers include a traumatic fall, stressful childbirth, or prolonged pressure from improper sitting posture. Rarely, it may be due to a tumor in the coccyx region. If the pain persists or intensifies, it’s important to consult with a spine specialist.
                </h1>
                <GradientOverlayImage
                  imageData={coccydynia} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  If you're experiencing symptoms like tailbone pain that worsens when sitting or during bowel movements, you may be dealing with coccydynia. Our diagnostic checker is a fast way to determine whether a specialist evaluation is recommended.
                </h1>
                <OutlinedButton text="Do I have this Condition?" />
              </div>
            </div>
          ),
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
              className="text-[#111315] text-2xl"
              >
                How Is Coccydynia Diagnosed?
              </h1>
              <div className=" flex flex-col space-y-[40px]">
              <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Diagnosing coccydynia typically starts with a physical examination and discussion of your symptoms and medical history. Your doctor may gently press on the tailbone area to assess tenderness and rule out other causes of pain. In some cases, imaging tests like X-rays or MRIs are used to identify fractures, joint instability, or signs of inflammation.<br /><br />
                  Once diagnosed, your provider will recommend a treatment plan based on the severity and duration of symptoms.
                </h1>
                <OutlinedButton text="Find a Treatment" />
              </div>
            </div>
          )
        },

        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                Pain Management for Coccydynia
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  In early cases, coccydynia can be managed with non-surgical treatment. This includes using a wedge or donut-shaped cushion to reduce pressure while sitting, increasing fiber intake, and using stool softeners to minimize discomfort during bowel movements. Over-the-counter anti-inflammatory medications and hot/cold therapy can also help reduce inflammation and pain.<br/><br/>
                  If the pain persists beyond a few weeks, stronger pain relievers, physical therapy, or injections may be recommended. Surgery (coccygectomy) is reserved for severe cases when all other options have failed.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                What Causes Coccydynia?
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Coccydynia can result from both sudden trauma and long-term strain. Common causes include:<br/>
                   <li> Falls or direct impact to the tailbone</li>
                   <li> Prolonged sitting on hard or unstable surfaces</li>
                    <li>Childbirth, especially when prolonged or difficult</li>
                    <li>Repetitive strain or poor posture In rare cases, bone tumors or infections may lead to coccyx pain, which is why imaging may be required when pain does not respond to treatment.</li>
                </h1>
                <GradientOverlayImage
                  imageData={coccydynia2} // Passing static image data
                  height="500px"
                  gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                />
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
                Risk Factors for Coccydynia
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Several factors increase the risk of developing coccydynia, including being:
                   <li>Female (due to childbirth)</li>
                   <li> Obese or underweight (both affect sitting posture)</li>
                   <li>Sedentary (extended sitting)</li>
                   <li>Engaging in high-impact sports or activities Additionally, hormonal changes during pregnancy or aging can loosen the pelvic area and increase tailbone vulnerability.</li>
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px]">
              <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-4xl">
               Treatment Options for Coccydynia
              </h1>
              <div className=" flex flex-col space-y-[40px]">
                <h1
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                  className="text-[#5B5F67] text-xl"
                >
                  Treatment depends on how long you’ve had symptoms and how severe the pain is. Common treatments include:
                   <li>Cushions and posture correction</li>
                   <li>Anti-inflammatory medications</li>
                   <li>Physical Therapy</li>
                   <li>Corticosteroid injections</li>
                </h1>
                <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
                >
                  In rare cases, a coccygectomy (surgical removal of the coccyx) may be considered. At OLSS, we specialize in minimally invasive spine procedures to provide targeted relief while preserving mobility and reducing recovery time.
                </h1>
              </div>
            </div>
          )
        },
        {
          post : (
            <div className="flex flex-col space-y-[16px]">
            <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500
              }}
              className="text-[#111315] text-4xl">
              Frequently Asked Questions About Coccydynia
            </h1>
            <div className=" flex flex-col space-y-[40px]">
              <h1
                style={{
                  fontFamily: "var(--font-inter),",
                  fontWeight: 500
                }}
                className="text-[#111315] text-xl"
              >
                How is coccydynia pain treated during pregnancy?
              </h1>
  
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400
                }}
                className="text-[#5B5F67] text-xl"
              >
                Tailbone pain in pregnancy is common and usually caused by the hormone relaxin, which loosens pelvic joints. Using supportive cushions, applying hot/cold therapy, and taking acetaminophen may provide relief. Persistent pain should be evaluated by a spine specialist.
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-xl">
                Does walking help coccydynia?
              </h1>
  
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                For many, gentle walking can reduce tailbone pressure. But if there’s a fracture or joint instability, walking may worsen the pain. Low-impact stretching or yoga may be a safer option in those cases.
              </h1>

              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-xl">
                How should I sleep with coccydynia?
              </h1>
  
              <h1
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
                className="text-[#5B5F67] text-xl"
              >
                Avoid sleeping flat on your back. Instead, sleep on your side with a pillow between your knees. This position minimizes pressure on the coccyx and can improve sleep quality.
              </h1>
            </div>
          </div>
          )
        },
        {
          post : (
            <div className=" flex flex-col space-y-[16px] ">
            <h1 
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-[#111315] text-4xl">
             Schedule a Consultation Today          
            </h1>

            <div className=" flex flex-col space-y-[40px]">
              <h1
               style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#5B5F67] text-xl"
              >
                Tailbone pain doesn’t have to interfere with your life. At Orthopedic & Laser Spine Surgery, our expert team offers effective, patient-centered solutions for coccydynia from non-surgical therapies to advanced procedures. We’ll help you get to the root of your pain and back to feeling your best.<br/><br/>
                Call us today at (855) 853-6542 or complete our online form to schedule your consultation.
              </h1>

            </div>
          </div>
          )
        }
      ],
      "slug": "coccydynia"
    },
  ]