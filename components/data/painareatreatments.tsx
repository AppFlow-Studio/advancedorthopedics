import { ConditionInfoProp } from "../ConditionCard";
import Image from "next/image";
import OutlinedButton from '@/components/OutlinedButton'
import backpaintreatment from '@/public/backpaintreatment.png'
import backpaintreatment2 from '@/public/backpaintreatment2.jpeg'
import backpaintreatmentside from '@/public/backpaintreatmentside.png'
import GradientOverlayImage from "../GradientOverlayImage";
import pinchednerve from '@/public/pinchednerve.jpeg'
import pinchednerve2 from '@/public/pinchednerve2.jpeg'
import pinchednerveside from '@/public/pinchednerveside.jpeg'

export const PainAreaTreatments : ConditionInfoProp[] = [
    {
        title : "Back Pain Treatment Options",
        body : "We offer a range of advanced back pain treatments, starting with non-surgical options like physical therapy and medication. When conservative care isn’t enough, we provide minimally invasive procedures such as microdiscectomy, cervical discectomy, and artificial disc replacement to relieve nerve compression. For more complex cases, traditional surgeries like spinal fusion or laminectomy may be necessary. Our focus is on restoring mobility, reducing pain, and helping you get back to daily life with lasting relief.",
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
                            What Back Pain Treatments Are Available?
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl"
                            >
                            At Mountain Spine & Care, we specialize in personalized back pain care, starting with conservative options like physical therapy, medications, and lifestyle adjustments. For more severe cases, we offer advanced minimally invasive spine surgery techniques that reduce tissue disruption, shorten recovery times, and provide lasting relief.
                            </h1>
                
                            <GradientOverlayImage
                            imageData={backpaintreatment} // Passing static image data
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
                            If you’re struggling with persistent or worsening back pain, our team is here to help. Use our quick and easy condition checker to determine whether you may be a candidate for evaluation or treatment.
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
                            className="text-[#111315] text-2xl">
                            Top Back Pain & Spine Procedures at Mountain Spine & Care
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl"
                            >
                                <li>Transforaminal Lumbar Interbody Fusion (TLIF): Stabilizes the spine by removing a damaged disc and inserting a bone graft or spacer, relieving nerve pressure.</li><br/>
                                <li>Lumbar Laminectomy: Removes a portion of vertebral bone (lamina) to decompress nerves, often used to treat spinal stenosis.</li><br/>
                                <li>Lumbar Fusion: Joins two or more vertebrae together to treat degenerative disc disease or spondylolisthesis.</li><br/>
                                <li>Lumbar Disc Replacement: Replaces a damaged disc with an artificial one to preserve motion and reduce pain.</li><br/>
                                <li>Coccygectomy: Removes the tailbone in severe, chronic coccydynia cases unresponsive to conservative treatment.</li><br/>
                                <li>Minimally Invasive Surgery: Includes TLIF, laminectomy, and others performed through small incisions for quicker recovery.</li>
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
                            How Is Back Pain Treated Without Surgery?
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            Not all back pain requires surgery. Many patients respond well to non-invasive treatment options such as:
                            <li>Steroid Injections: Reduce inflammation and provide temporary relief.</li><br/>
                            <li>Medications: NSAIDs, muscle relaxants, and analgesics ease discomfort and tension.</li><br/>
                            <li>Alternative Therapies: Acupuncture, TENS, tai chi, and chiropractic care can improve circulation and reduce nerve pain..</li><br/>
                            <li>Hot & Cold Therapy: Cold packs reduce swelling, while heat relaxes muscles and increases flexibility.</li><br/>
                            <li>Weight Management: Maintaining a healthy weight helps reduce strain on the spine and prevent flare-ups.</li><br/>
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
                            Common Causes of Chronic Back Pain
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            Chronic back pain is defined as pain lasting 12 weeks or longer, even after the initial cause has been treated. It can be caused by:<br/>
                            <li>Herniated or Bulging Discs: Disc material presses on nerve roots, causing inflammation and pain.</li><br/>
                            <li>Spinal Stenosis: Narrowing of the spinal canal compresses nerves and leads to chronic discomfort.</li><br/>
                            <li>Degenerative Disc Disease: Disc breakdown over time leads to stiffness, inflammation, and instability.</li><br/>
                            <li>Facet Joint Dysfunction: Irritation in the small joints between vertebrae creates localized back pain.</li><br/>
                            <li>Muscle Strains: Caused by overuse, poor posture, or improper lifting.</li><br/>
                            <li>Traumatic Injury: Fractures or direct trauma may result in long-term pain.</li>
                            </h1>

                            <GradientOverlayImage
                                imageData={backpaintreatment2} // Passing static image data
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
                            Signs Your Back Pain May Be Worsening
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            You should consult a spine specialist if you notice:<br/>
                            <li>Persistent Pain: Lasting more than a few weeks</li><br/>
                            <li>Limited Mobility: Struggling with walking, bending, or lifting</li><br/>
                            <li>Increased Pain After Rest: Pain worsens with inactivity or bed rest</li><br/>
                            <li>Radiating Symptoms: Numbness, weakness, or shooting pain in the legs or arms</li>      
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
                            How to Prevent Back Pain with Lifestyle Habits
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            A healthy lifestyle plays a key role in preventing chronic back pain. Here’s what we recommend:<br/>
                            <li>Exercise Regularly: Strengthen your core and improve flexibility</li><br/>
                            <li>Eat a Balanced Diet: Choose anti-inflammatory foods to support joint health</li><br/>
                            <li>Maintain Good Posture: Adjust your seating and work environment</li><br/>
                            <li>Avoid Heavy Lifting: Or use proper lifting techniques</li><br/>     
                            <li>Stay Active: Avoid prolonged sitting or sedentary habits</li>     
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
                            Frequently Asked Questions About Treating Back Pain
                        </h1>
                        <div className=" flex flex-col space-y-[16px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            What’s the recovery time for minimally invasive back surgery?<br/>
                            <li>Most patients recover faster than with traditional surgery returning to activity within weeks.</li>
                            </h1>

                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            Are minimally invasive surgeries effective?<br/>
                            <li>Yes, they offer the same or better outcomes with less pain and faster recovery.</li>
                            </h1>

                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            Will I need physical therapy after surgery?<br/>
                            <li>In most cases, yes PT helps strengthen muscles and improve mobility.</li>
                            </h1>

                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            What are the risks of spinal surgery?<br/>
                            <li>Risks are low, especially with minimally invasive techniques, but may include infection or incomplete relief.</li>
                            </h1>

                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                           Can physical activity worsen my back pain?<br/>
                            <li>Not if done correctly. Guided exercise helps reduce pain over time and prevent reinjury.</li>
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
                        Back Pain Doesn’t Have to Control Your Life
                    </h1>
                    <div className=" flex flex-col space-y-[40px]">
                        <h1
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                        }}
                        className="text-[#5B5F67] text-xl">
                        Living with chronic back pain can be exhausting—but you don’t have to do it alone. At Mountain Spine & Care, our team specializes in advanced, minimally invasive techniques and personalized recovery plans to help you get back to doing what you love.<br/><br/>
                        Call us today at (866) 272-9271 or fill out our online form to schedule your consultation. Relief may be closer than you think.
                        </h1>
                    </div>
                </div>
                )
            } 
        ],
        side_img : backpaintreatmentside,
        slug : "backpaintreatmentoptions"
    },
    {
        title : "Neck & Shoulder Treatment Options",
        body : `Chronic neck and shoulder pain can interfere with your everyday activities from working at a desk to sleeping through the night. Whether the cause is poor posture, a pinched nerve, muscle strain, arthritis, or a more complex spine condition, finding the right treatment starts with understanding the root cause.
At Mountain Spine & Care, our team specializes in diagnosing and treating a wide range of neck and shoulder conditions. From non-invasive therapies to advanced surgical solutions, we help patients regain motion, strength, and long-term comfort. If you're unsure about your current care plan, we also offer second opinions and customized treatment strategies.`,
        forum  : [
            {
                post : (
                    <div className=" flex flex-col space-y-[16px] ">
                    <h1
                        style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                        }}
                        className="text-[#111315] text-2xl">
                        What Neck & Shoulder Treatments Are Available?
                    </h1>
                    <div className=" flex flex-col space-y-[40px]">
                        <h1
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                        }}
                        className="text-[#5B5F67] text-xl"
                        >
                            We take a comprehensive approach to neck and shoulder care, beginning with a detailed evaluation and diagnosis. Treatments may include:<br/>
                            <li>Physical therapy to improve flexibility and reduce muscle strain</li><br/>
                            <li>Anti-inflammatory medications and muscle relaxants</li><br/>
                            <li>Corticosteroid injections to reduce inflammation around joints or nerves</li><br/>
                            <li>Trigger point injections for myofascial pain</li><br/>
                            <li>Minimally invasive surgery when conservative options fail</li><br/>

                            Our specialists will guide you through every option so you can make the most informed decision for your lifestyle and condition.

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
                            If you're struggling with persistent or worsening neck or shoulder pain, our team is here to help. Use our quick and easy condition checker to see if you're a candidate for treatment.
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
                        className="text-[#111315] text-2xl">
                       Top Neck & Shoulder Procedures at Mountain Spine & Care
                    </h1>
                    <div className=" flex flex-col space-y-[40px]">
                        <h1
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                        }}
                        className="text-[#5B5F67] text-xl"
                        >
                            <li>Cervical Discectomy & Fusion: Removes a damaged disc in the neck and fuses the vertebrae to relieve nerve pressure</li><br/>
                            <li>Artificial Disc Replacement: Replaces a worn disc with a synthetic one to maintain motion in the cervical spine</li><br/>
                            <li>Shoulder Arthroscopy: A minimally invasive surgery to repair rotator cuff tears or impingement</li><br/>
                            <li>TTrigger Point Injections: Used to treat myofascial pain and shoulder stiffness</li><br/>
                            <li>Cervical Laminoplasty: Expands the spinal canal in the neck to relieve nerve compression from spinal stenosis</li><br/><br/>

                            These procedures are performed using the latest technology to reduce downtime and improve outcomes.
                        </h1>
                        <OutlinedButton text="Find a Treatment" />
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
                            className="text-[#111315] text-4xl">
                            How Are Neck & Shoulder Issues Treated Without Surgery?
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            Many patients experience relief from conservative treatments without the need for surgery. Common non-invasive options include:<br/>
                            <li>Targeted physical therapy to stretch and strengthen key muscles</li><br/>
                            <li>Ergonomic adjustments for work or sleep posture</li><br/>
                            <li>AAnti-inflammatory and neuropathic medications</li><br/>
                            <li>Therapeutic massage or acupuncture</li><br/>
                            <li>Cold and heat therapy for pain relief</li><br/>
                            <br/>
                            Early intervention can prevent symptoms from worsening and may eliminate the need for more aggressive procedures down the line.
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
                            Frequently Asked Questions About Neck & Shoulder Treatments
                        </h1>
                        <div className=" flex flex-col space-y-[40px]">
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            <span className="text-black">Do I need surgery for chronic neck or shoulder pain?</span><br/>Not necessarily. Many conditions can be treated effectively with physical therapy, medications, or injections.
                            </h1>
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            <span className="text-black">When should I see a specialist?</span><br/>If your pain has lasted more than a few weeks or is interfering with daily activities, it's time to consult a physician.
                            </h1>
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            <span className="text-black">Are there long-term risks if I delay treatment?</span><br/>Prolonged nerve compression or joint damage can lead to permanent issues, so early care is best.
                            </h1>
                            <h1
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#5B5F67] text-xl">
                            <span className="text-black">Will I need physical therapy after surgery?</span><br/>In most cases, yes. Physical therapy helps improve range of motion and strengthen supporting muscles.
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
                            className="text-[#5B5F67] text-xl">
                                Living with chronic pain in your neck or shoulders can limit your ability to enjoy everyday activities. At Mountain Spine & Care, our expert team is here to help you find lasting relief. We take the time to understand your condition, explain all your options, and create a treatment plan tailored to your goals.<br/><br/>
                                Call us today at (855) 853-6542 or fill out our online consultation form to get started. Relief may be closer than you think.
                            </h1>
                           
                        </div>
                    </div>
                )
            }
        ],
        side_img : pinchednerveside,
        slug : "neckandshoulderpaintreatments"
    }
]