import { ConditionInfoProp } from "../ConditionCard";
import Image from "next/image";
import OutlinedButton from '@/components/OutlinedButton'
import backpaintreatment from '@/public/backpaintreatment.png'
import backpaintreatment2 from '@/public/backpaintreatment2.jpeg'
import backpaintreatmentside from '@/public/backpaintreatmentside.png'
import GradientOverlayImage from "../GradientOverlayImage";

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
                            At Advanced Orthopedics, we specialize in personalized back pain care, starting with conservative options like physical therapy, medications, and lifestyle adjustments. For more severe cases, we offer advanced minimally invasive spine surgery techniques that reduce tissue disruption, shorten recovery times, and provide lasting relief.
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
                            Top Back Pain & Spine Procedures at Advanced Orthopedics
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
                        Living with chronic back pain can be exhausting—but you don’t have to do it alone. At Advanced Orthopedics, our team specializes in advanced, minimally invasive techniques and personalized recovery plans to help you get back to doing what you love.<br/><br/>
                        Call us today at (866) 272-9271 or fill out our online form to schedule your consultation. Relief may be closer than you think.
                        </h1>
                    </div>
                </div>
                )
            } 
        ],
        side_img : backpaintreatmentside,
        slug : "backpaintreatmentoptions"
    }
]