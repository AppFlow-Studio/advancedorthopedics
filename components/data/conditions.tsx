import { ConditionInfoProp } from "../ConditionCard";
import LowerBackImage from "@/public/lowerbackpain.png";
import LowerBackSide from "@/public/lowerbackpainside.jpeg";
import Image from "next/image";
import OutlinedButton from "@/components/OutlinedButton";
import cervicalspinalstenosis1 from "@/public/cervicalspinal.jpeg";
import cervicalspinalstenosis2 from "@/public/cervicalspinal2.png";
import cervicalspinalstenosisside from "@/public/cervicalspinalside.png";
import sciatica from "@/public/sciatica.png";
import sciaticaside from "@/public/sciaticaside.png";
import coccydynia from "@/public/coccydynia.jpeg";
import coccydynia2 from "@/public/coccydynia2.jpeg";
import coccydyniaside from "@/public/coccydyniaside.png";
import cervicalhernia from "@/public/cervicalhernia.jpeg";
import cervicalherniaside from "@/public/cervicalherniaside.png";
import degendiscside from "@/public/degendiscside.jpeg";
import GradientOverlayImage from "../GradientOverlayImage";
import lumbarherniateddisc from "@/public/lumberherniateddisc.jpeg";
import lumbarherniateddisc2 from "@/public/lumberherniateddisc2.png";
import lumbarherniateddiscside from "@/public/lumberherniateddiscside.png";
import arthritis from "@/public/arthritis.png";
import arthritis2 from "@/public/arthritis2.jpeg";
import pinchednerve from "@/public/pinchednerve.jpeg";
import pinchednerve2 from "@/public/pinchednerve2.jpeg";
import pinchednerveside from "@/public/pinchednerveside.jpeg";

import spondy3 from "@/public/spondy3.png";
import { sign } from "crypto";
import { StaticImageData } from "next/image";

// export interface ConditionInfoProp {
// title : string
// body : string
// slug : string
// forum? : {}[]
// card_img?: StaticImageData
// inTxt_img?: StaticImageData
// side_img? : StaticImageData
// detail? : string
// what_sym? : string
// risk_fac? : string
// diagnose? : string
// treatment? : string
// pain_info? : string
// prevent? : string
// schedule? : string
// }

export const conditions: ConditionInfoProp[] = [
    {
        title: "Adult Degenerative Scoliosis",
        tag: "Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/AdultDegenerativeScoliosis.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/AdultDegenerativeScoliosisArti.png",
        body: "Adult degenerative scoliosis is a sideways spinal curve that develops with age, often causing back pain and stiffness.",
        detail: "Adult degenerative scoliosis occurs when age-related wear on the spinal discs and facet joints causes the spine to develop a sideways curve. This condition, typically affecting adults over 50, can lead to chronic back pain, nerve compression, and difficulty with daily activities as the spine tilts and rotates. At Mountain Spine & Orthopedics, our team uses precise diagnostics to measure the curvature and create a personalized treatment plan.",
        what_sym: "Symptoms often include chronic lower back pain, visibly uneven shoulders or hips, a noticeable spinal curve, and stiffness. Some individuals experience radiating pain, numbness, or weakness in the legs due to nerve compression.",
        risk_fac:
            "The risk of developing this condition increases with advanced age, a history of degenerative disc disease or spinal arthritis, low bone density (osteoporosis), and previous spinal surgery or significant injury. A sedentary lifestyle and smoking can also accelerate degenerative spinal changes.",
        diagnose:
            "A thorough diagnosis begins with a comprehensive medical history and physical examination. Our specialists then use advanced imaging, such as complimentary MRI scans and standing X-rays, to map the precise curve, assess spinal balance, and create the most effective, individualized treatment plan.",
        treatment:
            "Treatment plans often start with conservative care, such as customized physical therapy, targeted low-impact exercises, pain management medication, or spinal injections. Supportive bracing may also be recommended. When non-surgical care is not enough to relieve symptoms or halt progression, our surgeons may suggest minimally invasive surgery to correct the deformity and stabilize the spine, promoting a faster recovery.",
        pain_info:
            "Discomfort primarily results from pressure on spinal nerves, inflammation in the facet joints, and mechanical instability in the curved spinal segments. The pain can range from a mild, persistent ache to severe, chronic pain. Targeted care from our specialists can significantly lower these symptoms and help patients move with greater comfort and confidence.",
        prevent:
            "While the natural aging process of the spine cannot be stopped, certain measures can help slow scoliosis progression. These include practicing good posture, participating in regular low-impact exercise, strengthening core and back muscles, avoiding tobacco, and maintaining healthy levels of calcium and vitamin D to support bone density.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our board-certified specialists offer unparalleled expertise in diagnosing and managing complex spinal conditions like adult degenerative scoliosis. Our Florida-based practice is equipped with advanced diagnostics, and we provide every patient with a complimentary MRI review and a free second opinion. We are committed to developing personalized, patient-focused care plans that prioritize the least invasive yet most effective treatments available.",
        schedule:
            "Book a consultation with Mountain Spine & Orthopedics today to explore lasting relief from adult degenerative scoliosis. Take advantage of our complimentary MRI review and free second opinion to better understand your condition and treatment options.",
        slug: "adult-degenerative-scoliosis",
        keywords: [
            "adult degenerative scoliosis",
            "scoliosis treatment Florida",
            "spine curvature treatment",
            "lower back pain relief",
            "minimally invasive spine surgery",
            "Florida spine specialist",
            "scoliosis in adults",
            "spinal deformity",
        ],
        metaTitle:
            "Adult Degenerative Scoliosis | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Adult degenerative scoliosis causes a sideways spinal curve and back pain. Our Florida spine specialists offer advanced diagnosis and minimally invasive care.",
    },
    {
        title: "Adjacent Segment Disease",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/adjsegdisease1.jpg",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/AdjacentSegmentDisease2.png",
        body: "Adjacent Segment Disease (ASD) is a condition that can cause new pain and degeneration at spinal levels next to a previous surgical fusion.",
        detail: "Adjacent Segment Disease (ASD) refers to the accelerated degeneration of spinal segments directly above or below a previous surgical fusion. The fusion alters spinal biomechanics, placing additional stress on these neighboring levels and making them more susceptible to wear and tear. At Mountain Spine & Orthopedics, our specialists provide thorough evaluations, including complimentary MRI reviews, to deliver precise diagnoses and create effective, individualized care plans for ASD.",
        what_sym: "Common symptoms include the return of neck or back pain, new stiffness near the original surgery site, reduced range of motion, and radiating numbness, tingling, or muscle weakness in the arms or legs. These issues can worsen over time.",
        risk_fac:
            "Key risk factors for developing ASD include pre-existing degenerative changes, multi-level fusions, obesity, poor posture, osteoporosis, and smoking. Recognizing these factors allows for proactive monitoring and management to potentially slow the onset of adjacent segment degeneration.",
        diagnose:
            "Diagnosis at our clinic begins with a detailed medical history and a comprehensive physical exam. This is followed by advanced imaging, such as X-rays and MRI scans. A complimentary MRI review allows our experts to accurately check spinal integrity, identify any adjacent segment degeneration, and differentiate it from other potential causes of pain.",
        treatment:
            "Treatment for Adjacent Segment Disease depends on symptom severity. Conservative options like physical therapy, anti-inflammatory medications, targeted injections, and lifestyle changes often provide relief. If symptoms persist or worsen, our care team may recommend advanced treatments, including minimally invasive revision surgery. We always offer a free second opinion to ensure patients can move forward with confidence in their chosen treatment path.",
        pain_info:
            "Pain is a primary symptom of ASD, resulting from increased mechanical stress, nerve irritation, or inflammation at the affected levels. The discomfort is typically centered near the previously operated region and can radiate along the impacted nerve pathways, mimicking the original symptoms that led to surgery.",
        prevent:
            "Helpful prevention strategies include maintaining a healthy weight, engaging in low-impact exercises to strengthen core and spinal muscles, practicing good posture, and managing chronic conditions like diabetes and osteoporosis. Following a structured post-operative rehabilitation program after the initial surgery is also crucial.",
        why_choose_us:
            "Patients suffering from persistent pain after a previous surgery require specialized care. The board-certified specialists at Mountain Spine & Orthopedics have extensive experience in diagnosing and treating Adjacent Segment Disease. Our Florida orthopedic practice provides complimentary MRI reviews and free second opinions to ensure an accurate diagnosis, exploring all non-surgical and minimally invasive options to restore your quality of life.",
        schedule:
            "If you've had spine surgery and are experiencing new or worsening symptoms, schedule a consultation with Mountain Spine & Orthopedics today. Let us help you understand the cause of your pain with a complimentary MRI review and expert second opinion.",
        slug: "adjacent-segment-disease",
        keywords: [
            "adjacent segment disease",
            "failed back surgery Florida",
            "post-surgery spine pain",
            "revision spine surgery",
            "neck pain after fusion",
            "ASD treatment",
            "Florida spine center",
            "spinal degeneration",
        ],
        metaTitle:
            "Adjacent Segment Disease | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Pain after spine surgery may be Adjacent Segment Disease. Our Florida specialists diagnose and treat ASD with advanced non-surgical and revision surgery options.",
    },
    {
        title: "Lumbar Herniated Disc",
        tag: "Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/LumbarHerniatedDisc.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/LumbarHerniatedDiscarti.png",
        body: "A lumbar herniated disc occurs when a disc in the lower back presses on a nerve, causing sciatica and radiating leg pain.",
        detail: "A lumbar herniated disc happens when the soft, gel-like center of a spinal disc pushes out through a tear in its tough outer layer, compressing a nerve in the lower back. This condition is a common cause of sciatica—radiating pain, numbness, or weakness that travels down the leg. It can result from gradual, age-related wear or a sudden injury. Mountain Spine & Orthopedics specializes in accurately diagnosing the location and severity of the herniation to create an effective treatment plan.",
        what_sym: "Symptoms often include sharp, shooting pain from the lower back down one buttock and leg (sciatica), as well as numbness, tingling, or muscle weakness in the affected leg or foot. Pain may worsen with sitting, bending, coughing, or sneezing.",
        risk_fac:
            "Key risk factors include age-related disc degeneration (most common between 30-50), improper lifting techniques, physically demanding jobs with repetitive twisting, and excess body weight, which adds strain to the spine. A sedentary lifestyle, smoking, and a possible genetic predisposition to disc degeneration also increase the risk.",
        diagnose:
            "Diagnosis at our clinic involves a comprehensive evaluation, starting with a detailed medical history and physical exam, including neurological testing. While symptoms often point to a herniated disc, an MRI is crucial to confirm the diagnosis, visualize the nerve compression, and rule out other conditions. We offer a complimentary MRI review to ensure diagnostic accuracy and help you understand your condition.",
        treatment:
            "We prioritize conservative treatment for most lumbar herniated discs. This often includes targeted physical therapy, pain and anti-inflammatory medications, and epidural steroid injections to reduce nerve inflammation. If significant pain or neurological symptoms persist despite conservative care, minimally invasive surgical options like microdiscectomy may be recommended to decompress the affected nerve and provide lasting relief.",
        pain_info:
            "The pain from a lumbar herniated disc is typically neuropathic, stemming from direct nerve compression. This results in sharp, burning, or electric shock-like sensations down the leg (sciatica), which is often more severe than the back pain itself. Our treatments focus on alleviating this nerve pain through targeted injections, physical therapy, and other non-surgical methods designed to reduce nerve irritation.",
        prevent:
            "While not all herniated discs are preventable, you can lower your risk by using proper lifting techniques (lift with your legs, not your back), maintaining a healthy weight, practicing good posture, and strengthening your core muscles through regular exercise. Avoiding prolonged sitting and quitting smoking also contribute to better disc health.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our specialists are leaders in treating lumbar herniated discs and sciatica. We provide patients across Florida with a clear path to recovery, starting with a complimentary MRI review and a free second opinion. Our focus on non-surgical and minimally invasive techniques means we are dedicated to finding the most effective, least disruptive solution to relieve your pain and restore your mobility.",
        schedule:
            "If you are experiencing persistent lower back pain radiating into your leg, contact Mountain Spine & Orthopedics for an expert evaluation. Utilize our complimentary MRI review for an accurate diagnosis and let our specialists create your personalized treatment plan.",
        slug: "lumbar-herniated-disc",
        side_img: "https://mountainspineortho.b-cdn.net/public/lumbarherniateddiscs.jpg",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            How Do I Know If I Have a Lumbar Herniated Disc?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Signs of a lumbar herniated disc often start gradually but may
                                worsen over time if not treated. The most common symptom is a
                                sharp or burning pain that radiates from the lower back into the
                                leg, often following the path of the sciatic nerve. Many
                                patients describe the pain as electric or stabbing, and it may
                                worsen when sitting for long periods, bending forward, or
                                coughing. Some patients also experience tingling, numbness, or
                                muscle weakness in the leg or foot on the affected side. In
                                severe cases, the condition can affect walking or standing for
                                extended periods, reducing your quality of life.
                            </p>
                            <GradientOverlayImage
                                imageData={lumbarherniateddisc} // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If these symptoms sound familiar, you may be suffering from a
                                lumbar herniated disc. Mountain Spine & Orthopedics offers a
                                quick and effective symptom checker to gather information and
                                help determine the best path to recovery. Our goal is to
                                diagnose your condition early and create a treatment plan that
                                delivers real results.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Lumbar Herniated Disc Treatment is Right for Me?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The right treatment for a lumbar herniated disc depends on how
                                severe your symptoms are and how much they impact your daily
                                life. Most cases respond well to conservative care, including
                                rest, heat and ice therapy, physical therapy, and
                                anti-inflammatory medications. These methods aim to reduce
                                nerve irritation, restore movement, and strengthen the muscles
                                that support the spine. If pain persists or worsens despite
                                these efforts, more advanced treatments such as spinal
                                injections or minimally invasive surgery may be recommended.
                                <br />
                                <br />
                                At Mountain Spine & Orthopedics, our spine specialists will
                                evaluate your condition and create a customized treatment plan
                                to help you return to a pain-free, active lifestyle. You don't
                                have to live with back pain we're here to help you find the
                                right solution.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Pain Management for a Lumbar Herniated Disc
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The right treatment for a lumbar herniated disc depends on how
                                severe your symptoms are and how much they impact your daily
                                life. Most cases respond well to conservative care, including
                                rest, heat and ice therapy, physical therapy, and
                                anti-inflammatory medications. These methods aim to reduce
                                nerve irritation, restore movement, and strengthen the muscles
                                that support the spine. If pain persists or worsens despite
                                these efforts, more advanced treatments such as spinal
                                injections or minimally invasive surgery may be recommended. At
                                Mountain Spine & Orthopedics, our spine specialists will
                                evaluate your condition and create a customized treatment plan
                                to help you return to a pain-free, active lifestyle. You don't
                                have to live with back pain we're here to help you find the
                                right solution.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/lumberherniateddisc2.png"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Preventative Treatments for Lumbar Herniated Disc Pain
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing symptoms of a lumbar herniated disc,
                                there are several treatment options available depending on the
                                severity of your condition. If your pain is mild and manageable,
                                starting with home care and guided physical therapy can often
                                lead to improvement. Applying heat or ice, taking
                                anti-inflammatory medications such as ibuprofen or naproxen, and
                                making lifestyle adjustments like avoiding long periods of
                                sitting or poor lifting techniques can help reduce strain on the
                                lower back. Exercise programs that strengthen the core and
                                improve flexibility are also an essential part of recovery.
                                <br />
                                <br />
                                When conservative care is not enough, surgical treatment may be
                                necessary to relieve pressure on the affected nerves. Discectomy
                                is a common procedure where the portion of the disc pressing on
                                the nerve is removed to relieve pain. In some cases, a
                                laminectomy may be performed to widen the spinal canal and ease
                                nerve compression. For patients with severe disc damage, spinal
                                fusion may be considered to stabilize the spine and prevent
                                further injury.
                                <br />
                                <br />
                                Every patient is different, which is why the team at Mountain
                                Spine & Orthopedics develops personalized care plans using the
                                most advanced and least invasive techniques available. Whether
                                your condition is new or has been ongoing for years, we're here
                                to help you get back to living the life you love.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Living with a lumbar herniated disc can affect every aspect of
                                your day, from walking and sitting to sleeping and working. You
                                don't have to push through the pain. At Mountain Spine &
                                Orthopedics, our expert spine team is ready to help you regain
                                control through innovative treatments and compassionate care.
                                Whether you're just beginning to feel discomfort or you've been
                                suffering for some time, the first step toward recovery starts
                                with a conversation.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our secure online
                                form to schedule your consultation. With Mountain Spine &
                                Orthopedics on your side, a pain-free future is within reach.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        keywords: [
            "lumbar herniated disc",
            "sciatica treatment Florida",
            "lower back pain relief",
            "bulging disc treatment",
            "radiating leg pain",
            "epidural steroid injection",
            "microdiscectomy",
            "non-surgical back pain treatment",
        ],
        metaTitle:
            "Lumbar Herniated Disc | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A lumbar herniated disc causes lower back pain and sciatica. Our Florida spine specialists offer expert diagnosis, MRI reviews, and advanced pain relief options.",
    },
    {
        title: "Degenerative Disc Disease",
        tag: "Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/DegenerativeDiscDiseasec.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/DegenerativeDiscDisease.png",
        body: "Degenerative disc disease (DDD) involves the natural age-related wear and tear of spinal discs, which can lead to chronic pain and stiffness.",
        detail: "Degenerative Disc Disease isn't a true disease, but a condition that develops as the intervertebral discs in the spine lose hydration, shrink, and lose their ability to cushion the vertebrae. These age-related changes can lead to chronic pain, reduced mobility, and nerve-related symptoms if a disc compresses a nerve. Mountain Spine & Orthopedics excels at diagnosing and treating DDD with precise imaging and personalized care focused on relieving pain and improving function.",
        what_sym: "Common signs include chronic neck or back pain that can worsen with sitting, bending, or lifting, and may radiate into the arms or legs. Patients also frequently experience numbness, tingling, and a general feeling of spinal stiffness.",
        risk_fac:
            "Factors that can accelerate disc degeneration include advancing age, smoking, excess body weight, physically demanding jobs with repetitive spinal strain, acute injuries, and a family history of spine problems.",
        diagnose: (
            <div className=" flex flex-col space-y-[16px] items-center justify-center">
                <p>
                    Evaluation begins with a detailed medical history and a physical
                    examination. then confirms the affected areas with advanced imaging
                    such as complimentary MRI scans, creating a precise plan of care.
                </p>
                <Image
                    src={"https://mountainspineortho.b-cdn.net/public/ddd3.png"}
                    alt="degenerative disc disease"
                    layout="cover"
                    width={300}
                    height={300}
                    className="w-full h-full object-fill aspect-video rounded-2xl overflow-hidden"
                />
            </div>
        ),
        pain_info:
            "Pain from DDD can range from a mild, nagging ache to severe, debilitating episodes that significantly impact quality of life. Understanding personal pain triggers and following a professionally guided treatment plan can help manage and reduce symptoms effectively, allowing for a more active lifestyle.",
        prevent:
            "Although the aging process cannot be stopped, you can slow disc degeneration by exercising regularly, maintaining a healthy weight, practicing good posture, avoiding tobacco, and using ergonomic furniture and tools to reduce spinal strain in your daily activities.",
        why_choose_us:
            "The specialists at Mountain Spine & Orthopedics are dedicated to providing expert care for degenerative disc disease. As a leading Florida orthopedic practice, we ensure every patient understands their condition with a complimentary MRI review and a free second opinion. Our team creates personalized treatment plans that emphasize non-surgical and minimally invasive options to restore your mobility and comfort.",
        schedule:
            "Book a consultation with Mountain Spine & Orthopedics today to address your ongoing back or neck pain. Take advantage of our complimentary MRI review and free second opinion to get a clear diagnosis and a customized care plan for your degenerative disc disease.",
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            What is Degenerative Disc Disease?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Degenerative Disc Disease is a spinal condition caused by
                                age-related breakdown of the discs that cushion the vertebrae.
                                These discs act like shock absorbers, allowing your spine to
                                flex, bend, and twist. Over time, discs can lose water content,
                                flatten, and develop small tears, reducing their ability to
                                support your spine and absorb impact. Unlike acute injuries, DDD
                                develops slowly over time and is especially common in
                                individuals over 40. However, it can also affect younger
                                individuals with physically demanding lifestyles or spinal
                                injuries.
                            </p>
                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/public/degendisc.png"} // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                To diagnose DDD, our specialists begin with a full medical
                                history and physical exam, followed by advanced imaging such as
                                X-rays or MRI scans to evaluate disc height, disc shape, and any
                                signs of degeneration. We also assess nerve function and spinal
                                alignment to understand the full extent of the damage. Diagnosis
                                may involve ruling out other conditions, such as herniated discs
                                or spinal stenosis, that share similar symptoms.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Symptoms of Degenerative Disc Disease
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Symptoms vary depending on the location and severity of the disc
                                degeneration. Common signs include chronic lower back or neck
                                pain that worsens with bending, twisting, or prolonged sitting.
                                Some patients find relief when walking or changing positions.
                                Others may experience muscle weakness or numbness in the arms or
                                legs if nerve compression occurs. Many people also report
                                stiffness or reduced flexibility in the spine. The pain may be
                                intermittent, flaring up during activity and easing with rest.
                            </p>
                            <OutlinedButton text="Find a Treatment" />

                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/public/degendisc2.png"} // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Risk Factors for Degenerative Disc Disease
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                You may be at higher risk for DDD if you are over the age of 40,
                                smoke, or lead a sedentary lifestyle. A history of spinal
                                injuries or trauma can increase your risk, especially if paired
                                with poor posture or spinal misalignment. Genetic factors also
                                contribute, and individuals with a family history of
                                spine-related conditions are more likely to develop DDD.
                                Identifying these risk factors early can help slow the
                                progression of the disease and guide preventative care.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Treatment Options for Degenerative Disc Disease
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                At Mountain Spine & Orthopedics, we create personalized
                                treatment plans tailored to your condition and lifestyle.
                                Treatment options may include physical therapy to improve
                                strength, flexibility, and posture, as well as medications like
                                non-steroidal anti-inflammatory drugs (NSAIDs) to reduce pain
                                and swelling. For patients with nerve irritation, epidural
                                steroid injections can offer targeted relief. Other approaches
                                may include chiropractic care or spinal manipulation therapy. In
                                more severe cases, minimally invasive spine surgery may be
                                recommended to stabilize the spine and relieve nerve pressure.
                                Our goal is to relieve your pain and restore spine stability
                                while avoiding unnecessary surgery whenever possible.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing persistent back or neck pain, don't wait
                                to seek help. Degenerative Disc Disease is manageable with the
                                right care plan and professional guidance. At Mountain Spine &
                                Orthopedics, our experienced spine specialists are here to
                                evaluate your condition, offer expert recommendations, and guide
                                you toward long-term relief.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our online form to
                                schedule your consultation. Let's work together to get your
                                spine and your life back on track.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        side_img: "https://mountainspineortho.b-cdn.net/public/degendiscside.jpeg",
        slug: "degenerative-disc-disease",
        keywords: [
            "degenerative disc disease",
            "DDD treatment Florida",
            "chronic back pain",
            "neck pain relief",
            "spinal injections",
            "non-surgical spine care",
            "spinal arthritis",
            "disc degeneration",
        ],
        metaTitle:
            "Degenerative Disc Disease | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Degenerative Disc Disease causes chronic back or neck pain from disc wear. Our Florida specialists offer advanced non-surgical and surgical care for DDD.",
    },
    {
        title: "Cervical Spinal Stenosis",
        tag: "Neck",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/CervicalSpinalStenosis.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/cervicalspinal2.png",
        body: "Cervical spinal stenosis is a narrowing of the spinal canal in the neck, which can compress the spinal cord and cause radiating pain or numbness.",
        detail: "Cervical spinal stenosis occurs when degenerative changes like bulging discs, thickened ligaments, or bone spurs progressively constrict the spinal canal in the neck. This narrowing can compress the delicate spinal cord, leading to radiating arm pain, numbness, weakness, or, in advanced cases, myelopathy with gait imbalance and hand clumsiness. Our specialists perform comprehensive evaluations, including complimentary MRI reviews, to pinpoint the exact levels of compression and develop a personalized treatment plan.",
        what_sym: "Patients often report neck stiffness and aching, along with radiating burning or electric-like pain in the shoulders and arms. Other common symptoms include hand numbness, difficulty with fine motor skills, leg weakness, and balance problems.",
        risk_fac:
            "The risk of cervical spinal stenosis increases with advancing age. Other risk factors include osteoarthritis, degenerative disc disease, previous neck trauma or surgery, a congenitally narrow spinal canal, and lifestyle factors like smoking or heavy manual labor.",
        diagnose: (
            <div className=" flex flex-col space-y-[16px] ">
                <p>
                    Our diagnostic process integrates detailed physical and neurological
                    examinations with upright X rays to assess alignment flexion extension
                    films to reveal instability and nerve conduction studies when arm
                    symptoms predominate. These complimentary diagnostics ensure dynamic
                    and static contributors to stenosis are identified before therapy
                    begins
                </p>
                <Image
                    src={"https://mountainspineortho.b-cdn.net/public/cervicalspinal3.jpeg"}
                    width={300}
                    height={300}
                    layout="cover"
                    alt="cervicalspinalstenosisside"
                    className="w-full h-full object-cover aspect-video rounded-2xl"
                />
            </div>
        ),
        treatment:
            "Initial management focuses on conservative care, such as activity modification, physical therapy, and anti-inflammatory medications. Image-guided epidural steroid injections can provide powerful relief from radiating arm pain. When symptoms progress or myelopathy is present, our surgeons may recommend minimally invasive procedures like laminoplasty or ACDF to decompress the spinal cord and restore function.",
        pain_info:
            "Pain may fluctuate with neck posture and activity, but neurological symptoms like numbness or weakness can progress silently. Our approach blends precise decompression techniques with targeted rehabilitation to curb pain, restore nerve function, and prevent irreversible spinal cord changes.",
        prevent:
            "Maintaining strong neck and core muscles, practicing ergonomic workstation habits, treating arthritis early, avoiding tobacco, and staying physically active can help preserve spinal canal diameter and reduce the likelihood of developing symptomatic stenosis.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our fellowship-trained spine surgeons specialize in treating complex neck conditions like cervical spinal stenosis. We provide patients throughout Florida with world-class care, beginning with a complimentary MRI review and a free second opinion. Our focus is on restoring spinal health and protecting your future mobility using the most advanced techniques available.",
        schedule:
            "If neck pain, arm tingling, or balance issues are affecting your life, schedule a consultation with Mountain Spine & Orthopedics today. We will review your complimentary MRI and provide a free second opinion to help you find the best path to recovery.",
        side_img: "https://mountainspineortho.b-cdn.net/public/cervicalspinalside.png",
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            How Do I Know If I Have Cervical Spinal Stenosis?
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Cervical spinal stenosis can cause a variety of symptoms
                                depending on the severity and levels affected. Common signs
                                include shock-like pain in the neck or arms, tingling
                                sensations, arm weakness, numbness in the hands or fingers, loss
                                of coordination, balance issues, difficulty walking, and in
                                severe cases, loss of bladder control. These symptoms may
                                suggest compression of the spinal cord or nerve roots and should
                                never be ignored.
                            </p>

                            <GradientOverlayImage
                                imageData={cervicalspinalstenosis1} // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing any of these symptoms, it's essential to
                                get evaluated early. We offer a quick and easy spinal condition
                                assessment tool to help gather information and determine if you
                                may be a candidate for treatment. Don't delay your recovery the
                                earlier we intervene, the better your outcome.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What is the Right Treatment for Me?
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                At Mountain Spine & Orthopedics, we specialize in procedures
                                that relieve spinal cord compression while preserving motion.
                                For patients with multi level stenosis (typically three or more
                                levels), we recommend cervical laminoplasty. This procedure opens
                                the spinal canal and decompresses the spinal cord without the
                                need for a multi-level fusion, preserving mobility in the neck.
                                <br /> <br />
                                For patients with one or two affected levels, a decompression
                                and artificial disc replacement is often ideal. This modern
                                approach allows for motion preservation and avoids the long-term
                                stiffness associated with spinal fusion. While multi-level
                                fusion is sometimes used, it can leave patients with a
                                permanently stiff neck, especially when four levels are
                                involved. In contrast, laminoplasty provides the best option for
                                multiple levels of compression without sacrificing mobility.
                            </p>

                            <OutlinedButton text="Find a Treatment" />

                            <GradientOverlayImage
                                imageData={cervicalspinalstenosis2} // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Understanding Cervical Laminoplasty
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Cervical laminoplasty is a motion-preserving surgery done
                                through the back of the neck. During the procedure, the muscles
                                are temporarily moved aside and small cuts are made in the
                                lamina the bone protecting the spinal cord. These bones are then
                                lifted and repositioned to create more space for the spinal
                                cord, relieving pressure and reducing symptoms.
                                <br />
                                <br />
                                The key benefit of this procedure is that it retains the neck's
                                natural movement. Unlike fusion, which locks segments together,
                                laminoplasty allows the bones to remain flexible. However, it's
                                important to note that while laminoplasty is excellent for
                                relieving nerve-related symptoms like arm and leg pain or
                                headaches, it is not intended to address central neck pain. For
                                axial neck pain, artificial disc replacement may be the better
                                solution.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Post-Operative Recovery
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Most patients recover quickly after cervical laminoplasty. Many
                                go home the next day, and in some cases, it may be performed on
                                an outpatient basis. Pain typically improves by the third day
                                after surgery. Since neck movement is preserved, stiffness is
                                minimized, and mobility is encouraged early on, which further
                                speeds up recovery.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing symptoms like numbness, clumsiness, or
                                radiating pain in your arms or legs, you may have cervical
                                spinal stenosis. Early treatment can significantly improve your
                                outcome and prevent further neurological damage. At Mountain
                                Spine & Orthopedics, our expert surgeons specialize in both
                                minimally invasive and motion-preserving spinal procedures to
                                help you get back to life without pain or stiffness.
                                <br />
                                <br />
                                Take the first step toward recovery. Call us at (561) 223-9959
                                or fill out our online form to schedule your consultation today.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "cervical-spinal-stenosis",
        keywords: [
            "cervical spinal stenosis",
            "neck pain treatment Florida",
            "spinal cord compression",
            "radiating arm pain",
            "numbness in hands",
            "laminoplasty",
            "ACDF surgery",
            "cervical myelopathy",
        ],
        metaTitle:
            "Cervical Spinal Stenosis | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Cervical spinal stenosis narrows the neck's spinal canal, causing pain and numbness. Our Florida specialists offer advanced diagnosis and treatment options.",
    },
    {
        title: "Spondylolisthesis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/adtcard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/sdtarti.jpg",
        body: "Spondylolisthesis is a spinal condition where one vertebra slips forward over the one below it, often causing lower back pain and nerve compression.",
        detail: "Spondylolisthesis occurs when a vertebra slips out of place, typically in the lower back, and moves forward over the vertebra beneath it. This misalignment can compress spinal nerves, leading to persistent lower back pain, <a href=\"/area-of-specialty/sciatica\" class=\"text-blue-600 hover:underline\">sciatica</a>, and difficulty walking or standing. The condition can result from spinal degeneration, stress fractures (common in athletes), trauma, or congenital defects. At Mountain Spine & Orthopedics, our evaluation includes advanced imaging to determine the type and grade of slippage and guide treatment.",
        what_sym: "Common symptoms include persistent lower back pain that may radiate into the buttocks or legs (sciatica), tight hamstrings, and numbness, tingling, or weakness in the legs. Some people have trouble standing or walking for long periods.",
        risk_fac:
            "Repetitive spinal stress, such as from gymnastics or football, significantly increases the risk. Other factors include spinal arthritis, a genetic predisposition, congenital spinal anomalies, previous spine trauma, and the natural aging process.",
        diagnose: (
            <div className="flex flex-col space-y-[16px]">
                <p>
                    Complimentary standing flexion extension X rays confirm vertebral
                    slippage and instability MRI and CT imaging assess nerve compression
                    and bony detail. Grading the severity of the slip guides treatment
                    decisions and helps monitor progression
                </p>
                <Image
                    src={spondy3}
                    alt="spondy3"
                    className="w-full h-full object-fill aspect-video rounded-2xl"
                />
            </div>
        ),
        treatment:
            "Non-surgical care is the first line of treatment and may include physical therapy to strengthen and stabilize the core, anti-inflammatory medications, and <a href=\"/treatments/non-surgical-treatments-for-pain-management\" class=\"text-blue-600 hover:underline\">image-guided injections</a> to reduce nerve inflammation. If conservative care fails or the slippage progresses, surgical options like decompression and <a href=\"/treatments/lumbar-fusion-surgery\" class=\"text-blue-600 hover:underline\">spinal fusion</a> are considered. At our practice, we use minimally invasive techniques to achieve long-term spinal stability while reducing recovery time.",
        pain_info:
            "The pain associated with spondylolisthesis often stems from both mechanical instability of the spine and direct nerve compression. It may increase with activities like standing, walking, or bending backward. Our integrated treatment approach targets both the pain and its underlying structural source to provide long-lasting relief.",
        prevent:
            "Core strengthening exercises, practicing proper body mechanics, limiting repetitive hyperextension of the lower back (common in certain sports), and addressing early symptoms can help prevent the progression or recurrence of spondylolisthesis.",
        why_choose_us:
            "The specialists at Mountain Spine & Orthopedics are highly experienced in managing spondylolisthesis, from conservative care to complex surgical correction. Our Florida-based clinic provides every patient with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We are dedicated to using the least invasive methods possible to stabilize the spine, relieve pain, and restore your confident movement.",
        schedule:
            "If you are experiencing lower back pain, leg symptoms, or spinal instability, schedule a consultation with Mountain Spine & Orthopedics today. A complimentary MRI review and free second opinion can be the first steps toward resolving your pain and regaining stability.",
        slug: "spondylolisthesis",
        keywords: [
            "spondylolisthesis",
            "slipped vertebra treatment",
            "lower back pain Florida",
            "sciatica relief",
            "spinal instability",
            "spinal fusion surgery",
            "non-surgical back treatment",
            "back pain specialist",
        ],
        metaTitle:
            "Spondylolisthesis | Mountain Spine & Orthopedics – Florida's Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Spondylolisthesis causes vertebral slippage, back pain, and nerve compression. Our Florida spine specialists offer expert diagnosis and advanced treatment.",
    },
    {
        title: "Cervical Herniated Disc",
        tag: "Neck",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/CervicalHerniatedDisc.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/CervicalHerniatedDiscarti.png",
        body: "A cervical herniated disc occurs when a disc in the neck bulges and presses on a nerve, causing neck pain and radiating arm symptoms.",
        detail: "A cervical herniated disc occurs when the soft inner core of a disc in the neck pushes through a tear in its tough outer layer. This displacement can compress nearby nerve roots or the spinal cord, causing neck pain, radiating arm pain, and other neurological issues. This condition can develop from age-related wear, poor posture, or a sudden injury. At Mountain Spine & Orthopedics, we use high-resolution MRI scans to pinpoint the herniation and guide a customized treatment plan.",
        what_sym: "Symptoms often include sharp or burning neck pain that can worsen with head movements, coughing, or sneezing. Patients frequently experience radiating pain, tingling, or numbness down the shoulder, arm, or into the hand and fingers.",
        risk_fac:
            "Risk factors include age-related disc dehydration, poor posture during prolonged screen use, repetitive heavy lifting, sudden whiplash injuries, and a family history of degenerative disc disease. Lifestyle factors like smoking and obesity can also contribute to poor disc health.",
        diagnose: (
            <div className="flex flex-col space-y-[16px]">
                <p>
                    Diagnosis involves a comprehensive physical exam and neurological
                    assessment combined with complimentary MRI confirmation nerve
                    conduction studies to quantify root irritation and dynamic imaging to
                    rule out instability. These tests ensure all contributing factors are
                    identified before treatment
                </p>
                <Image
                    src={"https://mountainspineortho.b-cdn.net/public/cervhernia3.png"}
                    alt="cervicalspinalstenosisside"
                    width={300}
                    height={300}
                    layout="cover"
                    className="w-full h-full object-cover aspect-video rounded-2xl"
                />
            </div>
        ),
        treatment:
            "Initial care focuses on conservative treatments like activity modification, targeted physical therapy, and anti-inflammatory medication. For persistent or severe symptoms, our spine surgeons may perform minimally invasive procedures such as anterior cervical discectomy and fusion (ACDF) or artificial disc replacement. These surgeries decompress neural structures, restore alignment, and support a rapid recovery with lasting stability.",
        pain_info:
            "Pain intensity often peaks in the first few weeks after herniation and can be aggravated by neck movement or sustained positions. Our comprehensive approach combines precise diagnostic injections and rehabilitative exercises to reduce inflammation, improve posture, and accelerate symptom resolution.",
        prevent:
            "Preventive steps include setting up ergonomic workstations with monitors at eye level, practicing proper lifting mechanics, performing regular core and cervical strengthening exercises, staying hydrated, and avoiding tobacco to lower the risk of future disc injuries.",
        why_choose_us:
            "If you're suffering from a cervical herniated disc, the specialists at Mountain Spine & Orthopedics offer cutting-edge care. Our Florida practice provides every patient with a complimentary MRI review and free second opinion to ensure an accurate diagnosis. We specialize in motion-preserving and minimally invasive surgical techniques, like artificial disc replacement, to help you return to a pain-free life.",
        schedule:
            "If neck or arm pain is limiting your life, schedule a consultation with Mountain Spine & Orthopedics today. We will review your complimentary MRI and provide a free second opinion so you can focus on returning to pain-free motion and reliable nerve function.",
        slug: "cervical-herniated-disc",
        side_img: cervicalherniaside,
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is a Cervical Herniated Disc?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                A herniated cervical disc occurs when one of the discs in the
                                neck region (cervical spine) becomes damaged. These discs are
                                gel-like cushions that sit between the vertebrae and act as
                                shock absorbers. Over time or due to injury, the outer wall of
                                the disc can tear, allowing the inner nucleus to leak out and
                                press against surrounding spinal nerves. This can lead to
                                symptoms such as neck pain, numbness, tingling, or weakness in
                                the shoulders, arms, or hands. Treatment options range from
                                conservative therapies like rest and physical therapy to more
                                advanced solutions, including cervical spine surgery.
                            </p>

                            <div className="rounded-[24px] overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube.com/embed/gUG_zbKqlaU?si=k_-WQStF8cvjCaMj"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing neck pain, numbness, or weakness in your
                                upper limbs, you may be dealing with a herniated disc in your
                                cervical spine. Our symptom checker tool is a quick and easy way
                                to help determine if you're showing signs of disc herniation and
                                whether a treatment consultation is recommended.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            How Are Cervical Herniated Discs Diagnosed?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Diagnosing a herniated disc begins with a medical history review
                                and physical examination. Your doctor may recommend imaging
                                tests such as X-rays, MRI scans, or CT scans to confirm whether
                                a disc is bulging or ruptured. While X-rays can help rule out
                                other causes of pain, MRI and CT scans offer the most accurate
                                visualization of soft tissue and nerve compression. If a
                                herniated disc is confirmed, treatment usually starts
                                conservatively with rest, ice, and medication. If symptoms
                                persist, surgical intervention may be recommended.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Pain Management for a Cervical Herniated Disc
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                In the early stages of a cervical disc herniation, pain can
                                often be managed with rest, ice, heat therapy, and
                                anti-inflammatory medications. Muscle relaxants or prescription
                                pain relievers may also be used. If pain continues, physicians
                                may suggest physical therapy to help strengthen the surrounding
                                neck muscles. In some cases, nerve root blocks or epidural
                                steroid injections are used to reduce inflammation and nerve
                                pressure. Our team at Mountain Spine & Orthopedics will help
                                determine the best approach based on your condition.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Causes a Cervical Herniated Disc?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Cervical disc herniation can occur suddenly due to trauma or
                                gradually as part of the aging process. The most common cause is
                                wear and tear, which leads to disc degeneration. Over time, the
                                discs lose elasticity and hydration, making them more prone to
                                rupture. Other contributing factors include poor posture,
                                obesity, repetitive strain, and spinal injury. In people over
                                the age of 30, disc degeneration becomes more common, but even
                                younger patients can suffer from herniated discs if their
                                lifestyle puts excess stress on the spine.
                            </p>

                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/cervicalhernia.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Risk Factors for a Cervical Herniated Disc
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Several factors can increase your risk of developing a cervical
                                herniated disc. These include being overweight, smoking, living
                                a sedentary lifestyle, or engaging in activities that involve
                                repetitive neck strain or heavy lifting. Trauma to the spine or
                                poor posture while sitting or sleeping can also contribute.
                                Herniated discs may present with a wide range of symptoms pain,
                                numbness, tingling, and weakness in the arms or legs so it's
                                important to get evaluated by a medical professional if you
                                suspect you may have this condition.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Treatment Options for Cervical Herniated Discs
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Treatment for a herniated disc depends on the severity of the
                                condition and the patient’s overall health. Mild cases often
                                respond well to conservative approaches like rest, physical
                                therapy, heat/ice, and anti-inflammatory medication. If these
                                measures fail to provide relief, more advanced treatments such
                                as epidural injections or surgery may be required. Surgical
                                options typically involve removing part or all of the damaged
                                disc to relieve pressure on the spinal nerves. At Mountain Spine
                                & Orthopedics, our specialists are trained in minimally invasive
                                procedures that aim to reduce recovery time and preserve neck
                                mobility
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Cervical herniated discs can significantly impact your daily
                                life but you don’t have to manage the pain alone. Whether you're
                                just beginning to feel discomfort or you've been struggling for
                                months, there are many effective treatments available. At
                                Mountain Spine & Orthopedics, our spine surgeons are highly
                                experienced in diagnosing and treating herniated discs through
                                both non-surgical and surgical solutions.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our online form to
                                schedule a consultation. You may have more options than you
                                think and recovery may be closer than you realize.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        keywords: [
            "cervical herniated disc",
            "neck pain treatment Florida",
            "radiating arm pain",
            "pinched nerve in neck",
            "artificial disc replacement",
            "ACDF surgery",
            "numbness in arm",
            "cervical radiculopathy",
        ],
        metaTitle:
            "Cervical Herniated Disc | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A cervical herniated disc causes neck and radiating arm pain. Our Florida spine specialists provide advanced diagnosis, MRI reviews, and treatment options.",
    },
    {
        title: "Spinal Compression Fractures",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/scfcard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/scfarti.jpg",
        body: "A spinal compression fracture is a collapse or crack in a vertebra, often caused by osteoporosis, leading to sudden back pain and height loss.",
        detail: "A spinal compression fracture occurs when a vertebra weakens and collapses, often under normal body pressure or from minor trauma. Osteoporosis is the leading cause, making bones fragile, but these fractures can also result from high-impact injuries or spinal tumors. The condition can lead to chronic back pain, a stooped posture (kyphosis), and a noticeable loss of height. At Mountain Spine & Orthopedics, our evaluation includes a focused physical exam and complimentary imaging to identify the fracture's location and severity.",
        what_sym: "Symptoms typically include the sudden onset of severe, localized back pain that worsens with movement and may improve with rest. Patients may also notice a visible forward curvature of the spine (kyphosis) and a gradual loss of height.",
        risk_fac:
            "Osteoporosis is the most significant risk factor, particularly in postmenopausal women and older men. Other risks include long-term steroid use, a history of cancer (especially metastatic), previous spinal fractures, smoking, poor nutrition, and a low body weight.",
        diagnose:
            "Our specialists use complimentary high-resolution imaging, such as X-rays or an MRI, to detect fractures and assess vertebral alignment and bone quality. A bone density test, known as a DEXA scan, may also be performed to evaluate for osteoporosis and guide a long-term management strategy to improve bone health.",
        treatment:
            "Most compression fractures can heal with conservative care, including bracing, pain management, and calcium and vitamin D supplementation. For cases with persistent pain or spinal instability, our surgeons may perform minimally invasive procedures like vertebroplasty or kyphoplasty. These procedures stabilize the fracture, restore vertebral height, and provide rapid pain relief.",
        pain_info:
            "The pain from a compression fracture is typically localized to the site of the fracture and often worsens with standing or walking. Our comprehensive approach aims to stabilize the spine, reduce inflammation, and strengthen supporting musculature, helping patients return to their daily activities with confidence and less pain.",
        prevent:
            "Maintaining strong bones through weight-bearing exercise, ensuring adequate calcium and vitamin D intake, and undergoing osteoporosis screening are key to prevention. Implementing fall prevention strategies and promptly treating any bone-weakening conditions are also crucial for avoiding compression fractures.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, we provide expert, compassionate care for patients with painful spinal compression fractures. Our Florida-based specialists offer a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We utilize advanced, minimally invasive procedures like kyphoplasty to stabilize the fracture, relieve pain, and help you stand tall again.",
        schedule:
            "If you're experiencing sudden back pain or a loss of height, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and an expert second opinion to move forward with a personalized plan to rebuild your stability and strength.",
        slug: "spinal-compression-fractures",
        keywords: [
            "spinal compression fracture",
            "osteoporosis treatment Florida",
            "vertebroplasty",
            "kyphoplasty",
            "back pain in seniors",
            "vertebral fracture",
            "minimally invasive spine surgery",
            "bone density",
        ],
        metaTitle:
            "Spinal Compression Fractures | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Spinal compression fractures cause sudden back pain, often from osteoporosis. Our Florida specialists offer kyphoplasty and other advanced treatments for relief.",
    },

    {
        title: "Kyphosis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/Kyphosiscard.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/Kyphosisarti.png",
        body: "Kyphosis is an exaggerated forward rounding of the upper back, which can cause pain, stiffness, and significant postural problems.",
        detail: "Kyphosis is a spinal condition characterized by an excessive forward curvature of the upper back, leading to a rounded or 'humpback' appearance. While a gentle forward curve is normal, kyphosis occurs when this curve becomes exaggerated due to factors like degenerative disc disease, osteoporotic compression fractures, or poor posture. This abnormal alignment can strain back muscles, causing chronic pain and stiffness. At Mountain Spine & Orthopedics, we provide a thorough evaluation and tailored treatment plan to improve posture and relieve pain.",
        what_sym: "Many patients notice a persistent mid-back ache that worsens after prolonged sitting or standing, a visible rounding of the back, and fatigue in the neck and shoulders. In severe cases, it can cause height loss or even breathing difficulties.",
        risk_fac:
            "Risk increases with advancing age and osteoporosis. Adolescent growth spurts associated with Scheuermann's disease, chronic poor posture, previous spinal trauma, and certain genetic disorders affecting connective tissue can also contribute to the development of kyphosis.",
        diagnose:
            "Diagnosis includes standing long-cassette X-rays to measure the Cobb angle and assess overall sagittal balance. We also use complimentary high-resolution MRI or CT scans to evaluate disc integrity and spinal cord space. These evaluations ensure all contributing factors are addressed in the final treatment strategy.",
        treatment:
            "Flexible, postural kyphosis often improves with specialized physical therapy that strengthens core and back muscles. For rigid curves in younger patients, bracing may be used to halt progression. For adults with painful or progressive deformity, our spine surgeons may perform minimally invasive osteotomies and fusion to restore sagittal balance, protect the spinal cord, and relieve pain.",
        pain_info:
            "Pain from kyphosis often stems from muscle fatigue, facet joint overload, and stress on the intervertebral discs. We use targeted injections, muscle-balancing therapy, and, when necessary, surgical realignment to deliver durable pain relief and functional improvement.",
        prevent:
            "Preventive measures include maintaining strong back extensor and core muscles, practicing ergonomic posture, ensuring adequate calcium and vitamin D intake to treat osteoporosis early, and monitoring adolescent spinal curves to prevent progression.",
        why_choose_us:
            "The spine specialists at Mountain Spine & Orthopedics are experts in correcting complex spinal deformities like kyphosis. Our Florida clinic is dedicated to restoring proper posture and relieving pain through a combination of advanced non-surgical therapies and precision surgical techniques. With a complimentary MRI review and free second opinion, we provide the clarity and confidence you need to move forward.",
        schedule:
            "If rounding of the back or persistent mid-spine pain concerns you, schedule a consultation with Mountain Spine & Orthopedics today. Enjoy a complimentary MRI review and thorough second opinion to create a customized plan to correct kyphosis and help you stand tall.",
        slug: "kyphosis",
        keywords: [
            "kyphosis treatment",
            "rounded back correction",
            "Scheuermann's disease",
            "postural kyphosis",
            "spine deformity surgery Florida",
            "humpback correction",
            "spinal alignment",
            "osteoporosis back pain",
        ],
        metaTitle:
            "Kyphosis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Kyphosis, or a rounded back, causes pain and postural issues. Our Florida spine specialists offer advanced therapies and surgery to correct spinal alignment.",
    },
    {
        title: "Osteoarthritis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/oste.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/ostearti.jpg",
        body: "Osteoarthritis is a common 'wear-and-tear' joint condition caused by the breakdown of protective cartilage, leading to pain, stiffness, and reduced mobility.",
        detail: "Osteoarthritis, often called 'wear-and-tear' arthritis, is a degenerative joint condition that occurs when the protective cartilage cushioning the ends of your bones wears down over time. This can affect any joint but is most common in the knees, hips, hands, and spine. As cartilage thins, bones can rub together, leading to pain, stiffness, swelling, and the formation of bone spurs. At Mountain Spine & Orthopedics, our assessment includes a focused exam and complimentary imaging to create a personalized treatment plan.",
        what_sym: "Patients often notice a deep, aching joint pain that worsens after activity, along with morning stiffness, swelling, and a grinding or crunching sensation during movement. In advanced stages, it can lead to joint deformity and instability.",
        risk_fac:
            "Key risk factors include advancing age, a history of joint trauma or surgery, obesity (which overloads weight-bearing joints), and a genetic predisposition to cartilage weakness. Repetitive occupational or athletic stress can also accelerate cartilage wear.",
        diagnose:
            "Our diagnostic process includes a thorough physical exam and imaging studies. We offer complimentary MRI reviews and weight-bearing X-rays to visualize cartilage loss, bone spurs, and joint space narrowing. In some cases, we may use ultrasound to detect inflammation or perform a guided aspiration to analyze joint fluid, ensuring a precise diagnosis.",
        treatment:
            "Initial management centers on conservative care, including patient education, weight optimization, low-impact aerobic and strengthening exercises, and activity modifications. For pain relief, we may recommend anti-inflammatory medication or image-guided corticosteroid or hyaluronic acid injections. For persistent symptoms, our surgeons offer advanced options, including arthroscopic procedures or joint replacement using minimally invasive techniques to speed recovery.",
        pain_info:
            "Osteoarthritic pain typically surfaces during or after activity and may linger as a dull ache at night. Our specialists blend targeted injections, regenerative biologics, bracing, and muscle-balancing exercises to break the cycle of inflammation and mechanical stress, producing durable pain relief.",
        prevent:
            "Maintaining a healthy body weight, engaging in a balanced strength and flexibility training program, correcting any biomechanical malalignment, and addressing acute joint injuries promptly can help slow cartilage degradation and preserve long-term joint function.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, we offer comprehensive management for osteoarthritis, focusing on preserving your mobility and quality of life. Our Florida-based specialists provide a complimentary MRI review and a free second opinion to create a personalized plan. From advanced non-surgical options like regenerative medicine to minimally invasive joint replacement, our goal is to help you remain active at every stage of life.",
        schedule:
            "If joint pain or stiffness is limiting your lifestyle, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and expert second opinion to move forward with a personalized plan to manage your osteoarthritis.",
        slug: "osteoarthritis",
        keywords: [
            "osteoarthritis treatment",
            "joint pain relief Florida",
            "arthritis specialist",
            "knee arthritis",
            "hip arthritis",
            "non-surgical arthritis treatment",
            "joint replacement surgery",
            "cartilage restoration",
        ],
        metaTitle:
            "Osteoarthritis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Osteoarthritis causes joint pain and stiffness from cartilage wear. Our Florida specialists offer advanced non-surgical and surgical treatments to restore mobility.",
    },
    {
        title: "Rotator Cuff Tear",
        tag: "Shoulder",
        card_img: "https://mountainspineortho.b-cdn.net/public/rctcard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/rtcarti.jpg",
        body: "A rotator cuff tear involves damage to the crucial tendons that stabilize the shoulder, commonly causing deep shoulder pain, weakness, and limited motion.",
        detail: "A rotator cuff tear is an injury to one or more of the four tendons that surround the shoulder joint, which are essential for lifting and rotating the arm. Tears can result from a sudden injury, like a fall, or from chronic degeneration due to aging and repetitive overhead activities. At Mountain Spine & Orthopedics, our assessment includes a focused physical exam and high-resolution imaging to determine the tear size and guide a personalized treatment plan aimed at restoring function and relieving pain.",
        what_sym: "Patients typically experience shoulder pain that worsens with overhead activities or at night, weakness when lifting the arm, and a clicking or popping sensation during movement. Difficulty with daily tasks like combing hair is also common.",
        risk_fac:
            "Risk factors include advancing age, repetitive overhead sports (swimming, tennis) or occupations (painting, carpentry), a history of shoulder impingement, smoking, and systemic factors like diabetes that can impair tendon health.",
        diagnose: (
            <div className=" flex flex-col space-y-[16px] items-center justify-center">
                <p>
                    Diagnosis relies on a combination of clinical examination and imaging.
                    We perform specific orthopedic tests—including the empty can test and
                    lift-off maneuvers—to localize the tear and assess functional deficit.
                    MRI remains the gold standard for visualizing tendon tears, muscle
                    atrophy, and fatty infiltration, while ultrasound offers a dynamic,
                    cost-effective alternative. Plain X rays help rule out bony spurs and
                    arthritis. Electromyography may be indicated for chronic tears to
                    evaluate muscle function and nerve involvement.
                </p>
                <Image
                    src={
                        "https://mountainspineortho.b-cdn.net/public/rotatorcufftear3.png"
                    }
                    alt="rotator cuff tear"
                    width={300}
                    height={300}
                    layout="cover"
                    className="w-full h-full object-fill aspect-video rounded-xl overflow-hidden"
                />
            </div>
        ),
        treatment:
            "Initial management for small or partial tears often includes non-surgical options like activity modification, physical therapy, and image-guided corticosteroid injections for pain relief. For patients with persistent symptoms or larger tears, our surgeons perform minimally invasive arthroscopic rotator cuff repair to reattach the torn tendon to the bone, promoting a faster and less painful recovery.",
        pain_info:
            "Pain in a rotator cuff tear arises from tendon inflammation, mechanical impingement of the tendon under the acromion bone, and chemical irritation from inflammatory mediators. Patients often report a deep, aching discomfort that intensifies with arm elevation and activities such as lifting or throwing.",
        prevent:
            "To reduce the risk of a rotator cuff injury, it's important to maintain shoulder flexibility and strength through a regular, targeted exercise program. Practicing proper warm-up and cool-down routines before sports or repetitive work, and addressing early symptoms promptly with rest and evaluation, can prevent minor issues from becoming major tears.",
        why_choose_us:
            "The orthopedic specialists at Mountain Spine & Orthopedics are leaders in diagnosing and treating rotator cuff tears. Our Florida shoulder experts provide a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We specialize in minimally invasive arthroscopic techniques that restore shoulder function with less pain and a quicker return to the activities you enjoy.",
        schedule:
            "If you are experiencing shoulder pain, weakness, or limited mobility, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of our complimentary MRI review and free second opinion to get a precise diagnosis and a personalized treatment plan.",
        slug: "rotator-cuff-tear",
        keywords: [
            "rotator cuff tear",
            "shoulder pain treatment Florida",
            "arthroscopic shoulder surgery",
            "torn shoulder tendon",
            "shoulder impingement",
            "shoulder weakness",
            "shoulder specialist",
            "minimally invasive shoulder repair",
        ],
        metaTitle:
            "Rotator Cuff Tear | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A rotator cuff tear causes shoulder pain and weakness. Our Florida shoulder specialists offer advanced diagnosis and minimally invasive arthroscopic repair.",
    },
    {
        title: "ACL Injury",
        tag: "Knee",
        card_img: "https://mountainspineortho.b-cdn.net/public/aclcard.webp",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/aclcard.png",
        body: "An ACL injury is a tear of the anterior cruciate ligament in the knee, a key stabilizer that often leads to knee instability, pain, and swelling.",
        detail: "An ACL (anterior cruciate ligament) injury is a tear of one of the major ligaments responsible for stabilizing the knee joint. These injuries are common in sports involving sudden stops, pivots, or direct impact, and often occur with an audible 'pop' followed by immediate swelling. An ACL tear can cause significant knee instability and pain. At Mountain Spine & Orthopedics, our specialists use advanced diagnostics to assess the injury and determine the best course of action to restore knee stability and function.",
        what_sym: "Common symptoms include an audible 'pop' at the time of injury, rapid knee swelling, significant pain, and a feeling of the knee 'giving way' or instability. Patients often have difficulty bearing weight and experience a limited range of motion.",
        risk_fac:
            "Risk factors include participation in high-risk sports like soccer, basketball, and football. Anatomical factors, such as a wider pelvis in female athletes, and biomechanical issues, like muscle imbalances between the quadriceps and hamstrings, can also increase the risk of an ACL tear.",
        diagnose:
            "A definitive diagnosis of an ACL injury relies on a combination of a thorough clinical examination and imaging studies. We provide a complimentary MRI review, as MRI is the gold standard for accurately depicting the extent of the ligament tear, as well as identifying any associated bone bruises or meniscal and cartilage injuries, which are common with ACL tears.",
        treatment:
            "Treatment options depend on the tear's severity, the patient's age, and their activity level. For complete tears or athletes seeking to return to pivoting sports, ACL reconstruction surgery is often recommended. At Mountain Spine & Orthopedics, our surgeons employ minimally invasive arthroscopic ACL reconstruction techniques, using either an autograft or allograft to rebuild the ligament and restore knee stability.",
        pain_info:
            "The initial sharp pain in an ACL injury arises from the acute tearing of ligament fibers and rapid swelling from bleeding within the joint (hemarthrosis). Following the initial injury, pain may be felt with weight-bearing, twisting, or movements that challenge the knee's stability. Our treatment approach addresses both the mechanical instability and the associated pain to restore function.",
        prevent:
            "To reduce the risk of ACL injuries, athletes should engage in neuromuscular training programs that focus on proper landing mechanics, strengthening the muscles around the knee and hip, and improving balance. Plyometric drills that emphasize safe deceleration and flexibility training are also key components of an effective prevention program.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our board-certified sports medicine specialists provide expert care for ACL injuries. For athletes and active individuals across Florida, we offer a complimentary MRI review and a free second opinion to ensure a precise diagnosis. We utilize advanced, minimally invasive arthroscopic reconstruction to restore knee stability and help you return to your sport with confidence.",
        schedule:
            "If you suspect an ACL injury due to knee pain, swelling, or instability, schedule a consultation with Mountain Spine & Orthopedics today. A complimentary MRI review and a free second opinion can help you understand your injury and create a comprehensive treatment plan.",
        slug: "acl-injury",
        keywords: [
            "ACL injury",
            "ACL reconstruction Florida",
            "torn ACL treatment",
            "knee instability",
            "arthroscopic knee surgery",
            "sports medicine specialist",
            "knee ligament tear",
            "Lachman test",
        ],
        metaTitle:
            "ACL Injury | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "An ACL tear causes knee instability, pain, and swelling. Our Florida sports medicine specialists offer advanced ACL reconstruction to restore knee stability.",
    },
    {
        title: "Labral Tears",
        tag: "Shoulder",
        card_img: "https://mountainspineortho.b-cdn.net/public/labraltear.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/LabralTeararti.png",
        body: "A labral tear in the shoulder or hip involves damage to the cartilage ring that stabilizes the joint, causing deep pain, clicking, and instability.",
        detail: "The labrum is a ring of fibrocartilage that deepens the socket of ball-and-socket joints like the shoulder and hip, providing crucial stability. A labral tear can result from a traumatic injury, repetitive overhead or pivoting motions, or underlying structural issues. This damage can cause deep joint pain, clicking, and instability. At Mountain Spine & Orthopedics, we use advanced imaging like MRI arthrography to accurately diagnose the tear and create a personalized plan to repair the damage and preserve the joint.",
        what_sym: "Patients commonly experience a sharp or aching pain deep within the joint, often accompanied by a clicking, catching, or locking sensation during movement. A sense of instability, reduced range of motion, and decreased strength are also frequent symptoms.",
        risk_fac:
            "High-risk groups include athletes in sports like baseball, volleyball, and ballet, as well as individuals with structural issues like femoroacetabular impingement (FAI) in the hip. A history of joint dislocation or trauma also significantly increases the risk of a labral tear.",
        diagnose:
            "Beyond a physical exam, diagnosis is confirmed with advanced imaging. A complimentary MRI arthrogram, where contrast dye is injected into the joint, is the most effective way to visualize a labral tear. In some cases, a diagnostic intra-articular anesthetic injection may be used to confirm the labrum as the primary source of pain.",
        treatment:
            "Initial care often emphasizes conservative management, including activity modification, targeted physical therapy, and anti-inflammatory or biologic injections. If pain persists or mechanical symptoms are present, our surgeons perform minimally invasive arthroscopic repair. This procedure uses small incisions and specialized instruments to reattach the labrum to the bone, restoring the joint's stability and suction seal.",
        pain_info:
            "Labral tear pain often presents as a deep, pinpoint discomfort that is exacerbated by specific movements, such as rotation or sustained loading. By correcting the mechanical conflict and promoting tissue healing through phased rehabilitation, our integrated approach markedly diminishes pain and restores confidence in the joint's stability.",
        prevent:
            "Maintaining balanced strength in the muscles surrounding the joint (like the rotator cuff in the shoulder or the glutes in the hip), optimizing flexibility, and refining athletic or work mechanics can reduce stress on the labrum and help prevent future tears.",
        why_choose_us:
            "The orthopedic surgeons at Mountain Spine & Orthopedics are experts in the arthroscopic treatment of labral tears in both the shoulder and hip. Serving patients across Florida, we provide a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. Our minimally invasive techniques are designed to repair the damage, restore stability, and facilitate a rapid return to peak activity.",
        schedule:
            "If joint clicking, catching, or deep pain is limiting your performance, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a comprehensive second opinion to move forward with a personalized strategy to heal your labral tear.",
        slug: "labral-tears",
        keywords: [
            "labral tear",
            "hip labral tear Florida",
            "shoulder labral tear",
            "arthroscopic hip surgery",
            "arthroscopic shoulder surgery",
            "joint clicking and pain",
            "SLAP tear",
            "femoroacetabular impingement",
        ],
        metaTitle:
            "Labral Tears | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Labral tears in the hip or shoulder cause deep joint pain and clicking. Our Florida orthopedic surgeons specialize in arthroscopic labral repair surgery.",
    },
    {
        title: "Torn Meniscus",
        tag: "Knee",
        card_img: "https://mountainspineortho.b-cdn.net/public/tmcard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/tmarti.webp",
        body: "A torn meniscus is a common knee injury involving the C-shaped cartilage that cushions the joint, causing pain, swelling, and locking sensations.",
        detail: "A torn meniscus is a common knee injury that affects the C-shaped pads of cartilage (menisci) that act as shock absorbers between the thighbone and shinbone. These tears can happen suddenly during sports from a forceful twist, or they can develop gradually due to age-related wear. At Mountain Spine & Orthopedics, our specialists use advanced imaging to determine the tear's location and pattern, guiding a personalized treatment plan focused on preserving the knee joint.",
        what_sym: "Symptoms often include localized pain along the knee joint line, swelling, stiffness, and mechanical issues such as locking, catching, or a feeling of the knee giving way. Many people have difficulty fully straightening or bending their knee.",
        risk_fac:
            "Risk factors include participation in sports that involve pivoting and sudden changes in direction, such as basketball and soccer. Age-related degeneration, previous knee injuries, obesity, and muscle weakness around the knee can also increase the likelihood of a meniscal tear.",
        diagnose:
            "Diagnosis involves a thorough clinical examination, including tests like the McMurray's and Apley grind tests, to reproduce mechanical symptoms. We offer a complimentary MRI review, as MRI provides detailed visualization of the tear type and severity, which is crucial for determining the best course of treatment—whether it be repair or removal.",
        treatment:
            "Conservative management, including rest, ice, physical therapy, and anti-inflammatory medications, often succeeds for small, stable tears. For larger tears causing persistent mechanical symptoms, our surgeons recommend minimally invasive arthroscopic surgery. Depending on the tear pattern, we perform either a meniscal repair to preserve the cartilage or a partial meniscectomy to remove the damaged portion, optimizing recovery and minimizing long-term joint degeneration.",
        pain_info:
            "Pain from a torn meniscus arises from both mechanical impingement of the torn fragments within the joint and inflammation of the synovial lining. Patients often describe a sharp pain with weight-bearing, twisting, or deep knee bending. Swelling is also a common result of the internal joint irritation.",
        prevent:
            "To reduce the risk of meniscal tears, it is important to maintain strong and flexible muscles around the knee through regular strengthening and stretching exercises. Using proper techniques when pivoting or landing, wearing supportive footwear, and maintaining a healthy weight can also lessen stress on the joint.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our knee specialists are experts in treating meniscal tears with the most advanced, minimally invasive arthroscopic techniques. For patients across Florida, we offer a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. Our focus on meniscal preservation and repair helps protect the long-term health of your knee joint.",
        schedule:
            "If you are experiencing knee pain, swelling, or locking, schedule a consultation with Mountain Spine & Orthopedics today. A complimentary MRI review and free second opinion can be your first step toward an accurate diagnosis and an effective treatment plan.",
        slug: "torn-meniscus",
        keywords: [
            "torn meniscus",
            "knee pain treatment Florida",
            "arthroscopic knee surgery",
            "meniscus tear repair",
            "knee locking",
            "knee specialist",
            "meniscectomy",
            "sports knee injury",
        ],
        metaTitle:
            "Torn Meniscus | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A torn meniscus causes knee pain, swelling, and locking. Our Florida knee specialists offer advanced arthroscopic surgery for meniscus repair and treatment.",
    },
    {
        title: "Sacroiliac Joint Dysfunction",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/sjdcard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/sjdarti.jpg",
        body: "Sacroiliac (SI) joint dysfunction is a common source of lower back, buttock, or groin pain caused by abnormal movement or inflammation of the SI joint.",
        detail: "Sacroiliac (SI) joint dysfunction occurs when the joint connecting the base of the spine (sacrum) to the pelvis becomes inflamed or moves abnormally. This condition can produce pain that often mimics sciatica or lumbar disc issues, making an accurate diagnosis crucial. At Mountain Spine & Orthopedics, our specialists use provocative maneuvers and precision diagnostic injections to confirm the SI joint as the pain source, ensuring therapy is correctly targeted for effective relief.",
        what_sym: "Symptoms typically include a deep, aching pain in the lower back or buttock, which can radiate into the groin or thigh. Pain often worsens when rising from a seated position, climbing stairs, or rolling over in bed.",
        risk_fac:
            "Risk factors for SI joint dysfunction include pregnancy and postpartum ligamentous laxity, a history of prior lumbar fusion which alters pelvic load, leg length discrepancy, and inflammatory conditions such as ankylosing spondylitis. Traumatic falls on the buttocks and obesity also heighten the risk.",
        diagnose:
            "The gold standard for diagnosis is a diagnostic SI joint injection. Our specialists perform this procedure under fluoroscopic guidance, injecting a local anesthetic into the joint. A pain reduction of at least 75% confirms the SI joint as the primary pain source. This is often preceded by a complimentary MRI review to rule out other spinal pathologies.",
        treatment:
            "Conservative management includes activity modification, physical therapy focusing on pelvic and core stabilization, and anti-inflammatory medication. For more significant relief, we offer image-guided corticosteroid injections. For chronic, refractory pain, our surgeons perform minimally invasive SI joint fusion using advanced implants that promote rapid bone integration and provide long-term stability.",
        pain_info:
            "SI joint pain is typically sharp during transitional movements like standing up from a chair, rolling in bed, or climbing stairs. It often eases with short bouts of walking or lying flat. By stabilizing the joint's motion and calming inflammation, our integrated approach delivers lasting pain relief and renewed confidence.",
        prevent:
            "Maintaining balanced core and hip strength, correcting leg length discrepancies with orthotics, practicing proper lifting mechanics, and managing body weight can all help protect the integrity of the SI joints and prevent dysfunction.",
        why_choose_us:
            "Diagnosing and treating SI joint pain requires specialized expertise. The specialists at Mountain Spine & Orthopedics are leaders in this field, offering patients in Florida access to precise diagnostic injections and minimally invasive fusion techniques. With a complimentary MRI review and a free second opinion, we provide clarity for a condition that is often misdiagnosed, guiding you toward stable, pain-free mobility.",
        schedule:
            "If lower back or buttock pain is hindering your life, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a comprehensive second opinion to see if SI joint dysfunction is the cause of your pain.",
        slug: "sacroiliac-joint-dysfunction",
        keywords: [
            "SI joint dysfunction",
            "sacroiliac joint pain Florida",
            "lower back and buttock pain",
            "SI joint fusion",
            "non-surgical SI joint treatment",
            "diagnostic SI joint injection",
            "pelvic instability",
            "pain after lumbar fusion",
        ],
        metaTitle:
            "Sacroiliac Joint Dysfunction | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "SI joint dysfunction causes lower back and buttock pain. Our Florida spine experts offer diagnostic injections and minimally invasive SI joint fusion for relief.",
    },
    {
        title: "Trochanteric Bursitis",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/tbcard.avif",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/tbarti.webp",
        body: "Trochanteric bursitis is the inflammation of the bursa sac over the outer point of the hip, causing sharp, localized hip pain.",
        detail: "Trochanteric bursitis is inflammation of the trochanteric bursa, a fluid-filled sac that cushions the outer point of the hip bone (greater trochanter). Repetitive stress from activities like running, a direct injury, or improper biomechanics can irritate this bursa, leading to significant pain. At Mountain Spine & Orthopedics, diagnosis begins with a clinical exam to pinpoint tenderness, often confirmed with imaging to rule out other issues like tendon tears and ensure an accurate treatment plan.",
        what_sym: "The hallmark symptom is sharp or aching pain on the outer side of the hip or thigh. This pain often worsens when lying on the affected side, climbing stairs, or rising from a chair, and the area is typically tender to the touch.",
        risk_fac:
            "Overuse from activities like running or cycling, a direct fall onto the hip, underlying hip arthritis, leg length discrepancies, and tight iliotibial (IT) bands all contribute to the development of this condition.",
        diagnose:
            "In addition to a physical exam demonstrating point tenderness, our specialists may perform complimentary imaging to confirm bursal inflammation. An MRI or ultrasound can also help rule out other causes of outer hip pain, such as gluteus medius tendonitis or tears, ensuring your treatment is accurately targeted.",
        treatment:
            "Initial care is conservative and includes rest, ice, and physical therapy designed to correct biomechanics and stretch the IT band and other tight structures. Anti-inflammatory medications are also helpful. For persistent cases, an image-guided corticosteroid injection can provide rapid and effective relief. Surgery is rarely needed but may be considered if all conservative measures fail.",
        pain_info:
            "Pain from trochanteric bursitis is typically sharp with direct pressure or movement and can be a dull ache at rest. It is notoriously worse when lying on the affected side at night, which can significantly disrupt sleep. Our treatments focus on reducing the inflammation to restore pain-free movement and sleep.",
        prevent:
            "Maintaining strong hip and core muscles, using proper form during exercise, addressing leg length discrepancies with orthotics, managing weight, and regularly stretching tight structures like the IT band can help reduce the risk of developing bursitis or having it recur.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, we understand how debilitating outer hip pain can be. Our specialists in Florida provide accurate diagnosis, often utilizing complimentary imaging reviews, to differentiate bursitis from other conditions. We offer advanced, image-guided injections for precise and effective relief, helping you return to your active lifestyle quickly.",
        schedule:
            "If outer hip pain is limiting your comfort or mobility, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a free second opinion to move forward with a plan to resolve your trochanteric bursitis.",
        slug: "trochanteric-bursitis",
        keywords: [
            "trochanteric bursitis",
            "hip pain treatment Florida",
            "outer hip pain",
            "bursitis injection",
            "hip bursitis relief",
            "greater trochanteric pain syndrome",
            "corticosteroid injection for hip",
            "IT band syndrome",
        ],
        metaTitle:
            "Trochanteric Bursitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Trochanteric bursitis causes sharp outer hip pain. Our Florida specialists offer accurate diagnosis and advanced, image-guided injections for effective relief.",
    },


    {
        title: "Carpal Tunnel Syndrome",
        tag: "Hand",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/CarpalTunnelSyndrome.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/CarpalTunnelSyndromearti.png",
        body: "Carpal tunnel syndrome is a common nerve compression disorder that causes pain, numbness, and tingling in the hand and wrist.",
        detail: "Carpal Tunnel Syndrome occurs when the median nerve, which runs from the forearm into the hand, becomes compressed at the wrist within a narrow passageway called the carpal tunnel. This compression can be caused by swelling from repetitive hand motions, wrist anatomy, or underlying health conditions. At Mountain Spine & Orthopedics, our experts use detailed clinical assessments and nerve studies to confirm the diagnosis and develop a personalized treatment plan for lasting relief.",
        what_sym: "Common signs include numbness, burning, or tingling in the thumb, index, middle, and ring fingers. Patients may also experience hand weakness, pain that worsens at night, and difficulty with fine motor tasks like buttoning a shirt.",
        risk_fac:
            "Key factors include repetitive wrist motions from activities like typing or using tools, previous wrist fractures, inflammatory conditions like rheumatoid arthritis, and fluid retention related to pregnancy or thyroid disorders. Diabetes and obesity are also significant risk factors.",
        diagnose:
            "Diagnosis starts with a detailed medical history and physical exam, including provocative tests like Tinel's and Phalen's maneuvers. To confirm the diagnosis and measure the severity of nerve compression, our specialists use nerve conduction studies (NCS) and electromyography (EMG). These tests accurately assess median nerve function and help rule out other causes.",
        treatment:
            "Our treatment plan begins with conservative measures such as wrist splinting (especially at night), activity modification, ergonomic changes, and targeted hand therapy. If symptoms persist, an ultrasound-guided corticosteroid injection can offer fast relief. For severe or resistant cases, our surgeons perform minimally invasive carpal tunnel release surgery to relieve the pressure on the nerve and provide lasting relief.",
        pain_info:
            "Pain from CTS can range from a mild ache to sharp, shooting sensations that travel up the forearm. It often worsens with sustained wrist flexion or extension. Our comprehensive pain management approach combines therapeutic exercise, splinting, and targeted injections to ease nerve irritation and restore function.",
        prevent:
            "Preventive steps include keeping the wrist in a neutral position during repetitive activities, taking frequent stretch breaks, using ergonomic keyboards and tools, and managing underlying health conditions effectively. Strengthening exercises for the forearm and hand can also reduce tendon inflammation.",
        why_choose_us:
            "The hand and wrist specialists at Mountain Spine & Orthopedics provide comprehensive care for carpal tunnel syndrome. Serving patients across Florida, we offer advanced diagnostic testing and a full range of treatments, from custom splinting and guided injections to minimally invasive endoscopic release. Our goal is to restore your hand function and provide lasting relief from nerve pain.",
        schedule:
            "Contact Mountain Spine & Orthopedics today to book your personalized consultation. Benefit from our expert diagnosis, free second opinions, and a comprehensive care plan to find lasting relief from Carpal Tunnel Syndrome.",
        slug: "carpal-tunnel-syndrome",
        keywords: [
            "carpal tunnel syndrome",
            "hand numbness treatment Florida",
            "wrist pain relief",
            "median nerve compression",
            "carpal tunnel release surgery",
            "tingling in fingers",
            "hand specialist",
            "nerve conduction study",
        ],
        metaTitle:
            "Carpal Tunnel Syndrome | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Carpal tunnel syndrome causes hand numbness and wrist pain. Our Florida hand specialists offer diagnosis, injections, and minimally invasive release surgery.",
    },
    {
        title: "Back Pain",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/BackPaincard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/BackPaintxt.jpeg",
        body: "Back pain is a widespread condition that can severely limit daily activity, ranging from a dull ache to sharp, debilitating pain.",
        detail: "Back pain can arise from various sources, including muscle strain, ligament sprain, herniated discs, degenerative changes, or structural issues like spinal stenosis. Whether it's in the neck or lower back, persistent pain can disrupt daily life and impact overall well-being. The team at Mountain Spine & Orthopedics performs careful evaluations, including complimentary MRI reviews, to identify the precise cause of your pain and create a supportive path to recovery.",
        what_sym: "Symptoms can range from a steady, dull ache to sharp, stabbing sensations. The pain may be localized or radiate into the arms or legs (radiculopathy), and it is often accompanied by muscle tightness, spasms, stiffness, and limited motion.",
        risk_fac:
            "Factors that increase the risk of back pain include aging, a sedentary lifestyle, poor posture, excess body weight, improper heavy lifting, repetitive motions, a previous back injury, and a family history of spinal conditions.",
        diagnose:
            "Diagnosis begins with a complete medical history and a thorough physical examination. To identify the precise source of pain, our specialists often utilize advanced imaging. We offer a complimentary MRI review to assess the spine for issues like herniated discs, stenosis, or arthritis, which allows us to select the best possible treatment.",
        treatment:
            "Personalized plans are designed to relieve pain and restore function as safely and quickly as possible. Treatment may include physical therapy, targeted exercises, pain relief medication, minimally invasive spinal injections, or lifestyle changes. When non-surgical care is not enough, our surgeons may recommend advanced, minimally invasive procedures.",
        pain_info:
            "Back pain can vary from mild, occasional soreness to severe, continuous discomfort. Identifying individual triggers and following a structured, professional treatment plan can greatly reduce symptoms and support long-term comfort and function.",
        prevent:
            "Key prevention steps include regular physical activity to strengthen core and back muscles, maintaining a healthy weight, using correct lifting techniques, choosing ergonomic furniture, maintaining good posture, and practicing routine stretching exercises.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our board-certified spine specialists are dedicated to diagnosing and treating the underlying cause of your back pain. Our Florida clinics offer a complimentary MRI review and a free second opinion to ensure you receive an accurate diagnosis. We believe in a patient-focused approach, emphasizing non-surgical and minimally invasive options to help you achieve lasting relief.",
        schedule:
            "Arrange a consultation with Mountain Spine & Orthopedics today. Benefit from our complimentary MRI review and a free second opinion to understand the source of your back pain and begin your journey to relief.",
        slug: "back-pain",
        keywords: [
            "back pain",
            "lower back pain treatment Florida",
            "chronic back pain relief",
            "spine specialist",
            "non-surgical back pain care",
            "spinal injections for pain",
            "back muscle strain",
            "causes of back pain",
        ],
        metaTitle:
            "Back Pain | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Struggling with back pain? Our Florida spine specialists diagnose the root cause and provide advanced, non-surgical, and minimally invasive treatments for relief.",
    },
    {
        title: "Bulging Disc",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/BulgingDisc.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/BulgingDiscarti.png",
        body: "A bulging disc occurs when a spinal disc protrudes and presses on nearby nerves, which can cause localized or radiating pain.",
        detail: "A bulging disc develops when a spinal disc, which acts as a cushion between vertebrae, weakens and extends beyond its normal boundary. This is often a result of age-related wear and tear but can also be caused by repetitive strain. While some bulging discs cause no symptoms, they can lead to significant pain, tingling, or weakness if they compress an adjacent nerve root in the neck or lower back. At Mountain Spine & Orthopedics, we use advanced diagnostics, including complimentary MRI reviews, to accurately assess each case.",
        what_sym: "Common symptoms include localized back or neck pain, which can be a dull ache or sharp pain. If the disc compresses a nerve, you may experience radiating pain, numbness, or weakness in the arms or legs.",
        risk_fac:
            "Risk factors include advancing age, occupations that involve repetitive heavy lifting or strain, a sedentary lifestyle, poor posture, and excess body weight. Smoking and a genetic predisposition to degenerative disc disease can also contribute.",
        diagnose:
            "Diagnosis begins with a thorough physical examination and a detailed patient history. This is followed by advanced imaging, such as a complimentary MRI scan, to confirm the presence of a bulging disc. Accurately identifying the disc and its impact on surrounding nerves is essential for creating an effective, personalized treatment plan.",
        treatment:
            "Personalized treatment strategies typically start with conservative care, such as physical therapy, guided exercises, pain management medications, and lifestyle modifications. If pain persists, minimally invasive spinal injections can be highly effective. Surgical procedures are considered only when necessary to relieve nerve compression and restore function.",
        pain_info:
            "Pain from a bulging disc can range from a mild, localized discomfort to severe, debilitating sensations that worsen with certain movements or positions. Expert pain management at our clinic, including targeted injections, can greatly improve comfort and support better daily functioning.",
        prevent:
            "Preventive measures include engaging in regular exercise to strengthen core muscles, maintaining a healthy weight, practicing proper lifting techniques, ensuring good posture during daily activities, and performing consistent stretching and strengthening exercises.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our specialists are experts at diagnosing and treating the pain associated with a bulging disc. We provide patients throughout Florida with a clear diagnosis, supported by a complimentary MRI review and a free second opinion. Our goal is to relieve your pain and restore function using the most effective, least invasive treatments available.",
        schedule:
            "Contact Mountain Spine & Orthopedics today to schedule your personalized consultation for a bulging disc. Benefit from a complimentary MRI review and a free second opinion to find an effective path to relief.",
        slug: "bulging-disc",
        keywords: [
            "bulging disc",
            "bulging disc in back",
            "bulging disc in neck",
            "treatment for bulging disc Florida",
            "radiating arm pain",
            "radiating leg pain",
            "spinal decompression",
            "non-surgical spine treatment",
        ],
        metaTitle:
            "Bulging Disc | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A bulging disc can cause back or neck pain that radiates into the limbs. Our Florida spine experts offer precise diagnosis and advanced non-surgical therapies.",
    },
    {
        title: "Pinched Nerve",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/PinchedNerve.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/PinchedNervearti.png",
        body: "A pinched nerve, or radiculopathy, happens when a nerve is compressed by surrounding tissue, causing radiating pain, numbness, or tingling.",
        detail: "A pinched nerve, clinically known as radiculopathy, occurs when surrounding tissues—such as a herniated disc, bone spurs, or swollen ligaments—exert pressure on a spinal nerve root. This compression can cause symptoms along the nerve's pathway, such as radiating pain down an arm (from the neck) or leg (from the lower back). At Mountain Spine & Orthopedics, our specialists use complimentary imaging and a focused exam to pinpoint the structural cause and develop an effective treatment strategy.",
        what_sym: "Patients often describe a sharp, burning, or electric-like pain that travels along the nerve's path. This is frequently accompanied by numbness, tingling, or a 'pins and needles' sensation. Muscle weakness or foot drop can occur if compression persists.",
        risk_fac:
            "Age-related disc degeneration, repetitive heavy lifting, prolonged poor posture, and obesity all heighten the likelihood of nerve compression. Inflammatory conditions that cause tissue swelling and previous spinal injuries are also significant risk factors.",
        diagnose:
            "Alongside a clinical exam, we provide a complimentary MRI review to identify the source of nerve compression, such as a herniated disc or spinal stenosis. Nerve conduction studies and electromyography (EMG) may also be used to assess the nerve's health and function. These complimentary diagnostics ensure treatment targets the true pain generator.",
        treatment:
            "Initial care emphasizes conservative management, including activity modification, ergonomic adjustments, and a structured physical therapy program. For more direct relief, we offer image-guided epidural steroid injections to reduce inflammation around the compressed nerve. When structural issues are severe or neurological deficits progress, our surgeons may perform minimally invasive decompression surgery, such as a microdiscectomy or foraminotomy, to free the nerve.",
        pain_info:
            "Pain from a pinched nerve often spikes with certain movements or sustained positions and may ease with gentle stretching or finding a more comfortable posture. Our team combines targeted injections, therapeutic exercise, and ergonomic coaching to break the pain-inflammation cycle and foster lasting nerve healing.",
        prevent:
            "Maintaining strong core and limb muscles, practicing proper lifting mechanics, optimizing workstation ergonomics, taking regular breaks from repetitive motions, and controlling body weight can all help prevent nerve compression and recurrent flare-ups.",
        why_choose_us:
            "The specialists at Mountain Spine & Orthopedics are experts in relieving the pain of a pinched nerve. For patients across Florida, we offer a complimentary MRI review and free second opinion to ensure an accurate diagnosis. We utilize a range of advanced non-surgical and minimally invasive techniques to relieve nerve compression, restore sensation, and get you moving comfortably again.",
        schedule:
            "If radiating pain, numbness, or weakness is affecting your life, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a comprehensive second opinion to move forward with a personalized plan to relieve your pinched nerve.",
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            What Is a Pinched Nerve?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                A pinched nerve occurs when soft tissue or bone compresses a
                                nearby nerve root, interrupting its ability to transmit signals
                                correctly. This can result in pain that radiates from the spine
                                to the extremities, depending on the location of the
                                compression. When the cervical spine is affected, symptoms often
                                extend into the arms or hands. If the lumbar spine is involved,
                                the pain can travel into the buttocks, legs, or feet.
                                <br />
                                <br />
                                Common causes of nerve compression include herniated discs, bone
                                spurs, spinal stenosis, and poor posture. Over time, continued
                                pressure can lead to worsening symptoms and even permanent nerve
                                damage if not treated properly.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/pinchednerve.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Many patients report that pinched nerve pain worsens with
                                movement or after long periods of sitting. Some also experience
                                burning sensations or weakness in the arms or legs. Early
                                diagnosis and treatment are essential to preventing long-term
                                nerve damage and restoring full function.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Symptoms of a Pinched Nerve
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Symptoms of a pinched nerve depend on where the nerve is
                                compressed, but common warning signs include:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>A sharp or burning pain radiating into the arms or legs</li>
                                <li>Numbness or tingling in the affected limb</li>
                                <li>Muscle weakness or feeling that the limb is "asleep"</li>
                                <li>
                                    Pain that worsens with certain movements, like turning the
                                    head or standing up
                                </li>
                                <li>
                                    Discomfort that improves slightly when leaning forward or
                                    resting
                                </li>
                            </ul>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Pinched nerve symptoms can come and go or be constant, depending
                                on the cause. If left untreated, nerve compression may lead to
                                permanent nerve damage, chronic pain, or muscle atrophy.
                                Recognizing these early warning signs is the first step toward
                                finding lasting relief.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/pinchednerve2.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Common Conditions Causing a Pinched Nerve
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Several spinal conditions can lead to pinched nerves. Herniated
                                discs are one of the most common causes. When the soft inner
                                material of the disc bulges out, it can press against nearby
                                nerves and cause pain, tingling, or numbness. Spinal stenosis,
                                which involves narrowing of the spinal canal, is another major
                                cause especially in older adults.
                                <br />
                                <br />
                                Bone spurs, often related to arthritis or spinal degeneration,
                                can also contribute to nerve compression by invading space meant
                                for nerves. In some cases, muscle tightness or repetitive strain
                                from poor posture may also lead to a pinched nerve. Understanding
                                what’s causing your symptoms is key to receiving the right care.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Treatments for a Pinched Nerve
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                A pinched nerve doesn’t have to control your life. With early
                                intervention and the right treatment strategy, most patients
                                experience relief without surgery. Non-surgical options may
                                include physical therapy, anti-inflammatory medication, activity
                                modification, ergonomic adjustments, and corticosteroid
                                injections. When conservative care fails to relieve pressure on
                                the nerve, minimally invasive surgical solutions such as
                                microdiscectomy or foraminotomy may be considered.
                                <br />
                                <br />
                                At Mountain Spine & Orthopedics, our team uses advanced imaging
                                and diagnostic tools to pinpoint the source of nerve compression
                                and build a customized care plan. Whether you need non-invasive
                                treatment or surgical intervention, we’re here to help you
                                recover quickly and safely.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you’re living with shooting pain, numbness, or tingling that
                                just won’t go away, it may be time to speak with a spine
                                specialist. A pinched nerve is highly treatable, especially
                                when diagnosed early. At Mountain Spine & Orthopedics, our
                                experienced physicians will evaluate your symptoms, identify the
                                source of the problem, and recommend a treatment path that works
                                best for your needs and lifestyle.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our online
                                consultation form to schedule your appointment. Lasting relief
                                could be just one visit away.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "pinched-nerve",
        keywords: [
            "pinched nerve",
            "radiculopathy treatment Florida",
            "sciatica",
            "radiating leg pain",
            "numbness in arm",
            "pinched nerve in neck",
            "pinched nerve in back",
            "epidural steroid injection",
        ],
        side_img: "https://mountainspineortho.b-cdn.net/public/pinchednerveside.jpeg",
        metaTitle:
            "Pinched Nerve | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "A pinched nerve causes radiating pain, numbness, and tingling. Our Florida spine specialists offer expert diagnosis and treatment to relieve nerve compression.",
    },
    {
        title: "Cervical Deformities",
        tag: "Neck",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/CervicalDeformitiescard.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/CervicalDeformitiestxt.webp",
        body: "Cervical deformities are abnormal curvatures or alignments of the neck, which can cause chronic pain, fatigue, and serious postural issues.",
        detail: "Cervical deformities involve an abnormal alignment of the neck's seven vertebrae, leading to conditions like kyphosis (forward tilt) or scoliosis (sideways curve). This malalignment can result from degenerative disease, trauma, or congenital issues, placing excess stress on discs and nerves. It can cause chronic neck pain, fatigue, and difficulty holding the head up. At Mountain Spine & Orthopedics, we conduct meticulous assessments and use advanced imaging to craft a personalized plan for correction.",
        what_sym: "Patients commonly experience persistent neck or upper back pain, muscle tightness, tension headaches, and radiating numbness or weakness in the arms. Difficulty maintaining a level gaze and visible changes in head position are also key signs.",
        risk_fac:
            "Risk factors include advancing age with progressive disc degeneration, prior cervical fusion or laminectomy, inflammatory arthritis (like rheumatoid arthritis), untreated fractures, and low bone density (osteoporosis).",
        diagnose:
            "Diagnosis integrates a detailed physical and neurological exam with upright radiographic imaging to measure spinal balance. We provide a complimentary MRI review to view soft tissue compromise and CT scans to assess bony anatomy, ensuring every structural issue is addressed before treatment begins.",
        treatment:
            "Non-operative care is preferred when possible and may include customized physical therapy, posture retraining, and anti-inflammatory medication. When surgery is required to protect the spinal cord and relieve pain, our surgeons use minimally invasive decompression and fusion techniques or, for severe deformities, osteotomies with modern instrumentation to restore natural alignment.",
        pain_info:
            "Pain from a cervical deformity arises from overloaded facet joints, strained posterior muscles, and nerve compression. Symptoms often worsen after prolonged sitting or when trying to keep the head level. Our comprehensive pain management blends targeted injections, muscle balancing therapy, and, when needed, corrective surgery.",
        prevent:
            "Maintaining ergonomic posture, strengthening neck and shoulder muscles, treating degenerative changes early, and ensuring adequate calcium and vitamin D intake can all help preserve alignment and prevent the progression of a deformity.",
        why_choose_us:
            "Correcting cervical deformities requires immense skill. The fellowship-trained spine surgeons at Mountain Spine & Orthopedics are leaders in this field, offering patients in Florida advanced surgical and non-surgical solutions. We provide a complimentary MRI review and free second opinion to ensure a precise diagnosis and a care plan tailored to restoring your natural alignment and comfort.",
        schedule:
            "Take the first step toward better alignment and comfort by scheduling a consultation. We will review your complimentary MRI and provide a free second opinion to help you reclaim a pain-free lifestyle.",
        slug: "cervical-deformities",
        keywords: [
            "cervical deformity",
            "neck deformity correction",
            "cervical kyphosis",
            "dropped head syndrome",
            "neck pain specialist Florida",
            "complex spine surgery",
            "spinal realignment",
            "cervical osteotomy",
        ],
        metaTitle:
            "Cervical Deformities | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Cervical deformities cause neck pain and poor posture. Our Florida spine surgeons offer advanced evaluation and corrective surgery for kyphosis and other issues.",
    },
    {
        title: "Disc Tear",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/DiscTear.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/DiscTeartxt.jpeg",
        body: "A disc tear, or annular tear, is a crack in the tough outer layer of a spinal disc, which can cause sharp, localized back or neck pain.",
        detail: "An annular tear, or disc tear, is a rip in the resilient outer ring (annulus fibrosus) of a spinal disc. This can be caused by a sudden twist, heavy lifting, or chronic strain. Even without a full disc herniation, the tear can allow inflammatory proteins from the disc's core to leak out, triggering sharp, localized pain. If left untreated, an annular tear can progress. At Mountain Spine & Orthopedics, our specialists use complimentary MRI reviews to confirm the tear and guide targeted treatment.",
        what_sym: "Symptoms often include a sudden, stabbing pain in the neck or lower back, typically after a specific movement like lifting or twisting. Patients may also experience deep, aching pain that worsens with sitting, along with episodes of muscle spasm.",
        risk_fac:
            "Risk increases in individuals who perform repetitive heavy lifting or twisting, such as athletes in impact sports. Smokers, people with sedentary lifestyles and weak core muscles, and those with a family history of disc disease are also at higher risk.",
        diagnose:
            "Diagnosis uses a thorough history and physical examination, supplemented by advanced imaging. We offer a complimentary MRI review, as high-intensity zones on an MRI can confirm an annular tear and identify any early disc bulging or nerve irritation. This precise mapping guides a tailored rehabilitation and intervention strategy.",
        treatment:
            "Initial management includes activity modification, core stabilization physical therapy, and anti-inflammatory medication to calm the chemical irritation. Image-guided epidural injections can deliver medication directly to the tear to reduce inflammation. If pain persists or the tear progresses to a large herniation, minimally invasive procedures like microdiscectomy may be performed to provide lasting relief.",
        pain_info:
            "Pain from an annular tear is often described as deep and burning, intensifying after prolonged sitting or with sudden movements. It typically eases with gentle walking or lying flat. By addressing both the chemical inflammation and mechanical instability, our integrated approach rapidly reduces pain.",
        prevent:
            "Preventive measures include maintaining strong core and back muscles, practicing proper lifting techniques, avoiding sudden twisting under load, staying hydrated, and avoiding tobacco to safeguard the annulus and reduce the risk of future tears.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, we specialize in the precise diagnosis and treatment of painful disc tears. Our Florida-based spine experts use advanced imaging, including complimentary MRI reviews and free second opinions, to identify the exact source of your pain. We focus on non-surgical and minimally invasive options to resolve annular tears quickly and effectively.",
        schedule:
            "If sharp back or neck pain is limiting your life, schedule a consultation with Mountain Spine & Orthopedics today. A complimentary MRI review and a free second opinion can help you find a path to healing and returning to the activities you love.",
        slug: "disc-tear",
        keywords: [
            "annular tear",
            "disc tear treatment",
            "sharp back pain",
            "annular fissure",
            "back pain when sitting",
            "disc tear MRI",
            "Florida spine specialist",
            "non-surgical back treatment",
        ],
        metaTitle:
            "Disc Tear | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "An annular disc tear can cause sharp, localized back or neck pain. Our Florida spine specialists offer accurate MRI diagnosis and advanced, non-surgical care.",
    },
    {
        title: "Hip Dysplasia",
        tag: "Lower Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/HipDysplasiatxt.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/HipDysplsia.jpg",
        body: "Hip dysplasia is a condition where the hip socket is too shallow to properly support the 'ball' of the thighbone, leading to instability and early arthritis.",
        detail: "Hip dysplasia is a structural condition where the hip socket (acetabulum) is too shallow, preventing it from fully covering the 'ball' (femoral head) of the thighbone. This poor fit leads to instability and abnormal stress on the joint's cartilage and labrum, often causing early-onset arthritis. While often diagnosed in infancy, mild cases can go unnoticed until adulthood. At Mountain Spine & Orthopedics, we use high-resolution imaging to map the socket's depth and create a personalized joint-preservation strategy.",
        what_sym: "Adults often report deep groin or lateral hip pain that worsens with prolonged standing or pivoting activities. A sensation of instability, clicking, or catching may also occur, and as arthritis advances, stiffness and a reduced stride length are common.",
        risk_fac:
            "Risk increases with a family history of dysplasia, female sex, and a breech birth position. Ligamentous laxity disorders and participation in high-impact athletics that overload a shallow socket can also contribute.",
        diagnose:
            "Diagnosis begins with standing X-rays to reveal a shallow socket. We offer a complimentary MRI review to delineate any cartilage and labral damage, while a 3D CT scan can assist in surgical planning by capturing the precise three-dimensional orientation of the hip joint, ensuring a comprehensive diagnosis.",
        treatment:
            "Conservative care focuses on physical therapy to strengthen core and gluteal muscles and activity modification to limit repetitive pivoting. When structural instability and pain persist, our surgeons may perform a periacetabular osteotomy (PAO) to reorient the socket and preserve the native joint. For hips with advanced arthritis, minimally invasive total hip replacement offers predictable and lasting pain relief.",
        pain_info:
            "Hip dysplasia pain often begins as intermittent groin discomfort after exercise and can progress to a constant ache that disrupts sleep. By correcting the underlying biomechanical overload and rehabilitating surrounding muscles, our integrated care model breaks the cycle of inflammation and provides lasting relief.",
        prevent:
            "Early detection through screening of at-risk infants is the best prevention. For adults, a healthy body weight, engaging in low-impact exercise, and avoiding repetitive, extreme hip positions can help slow cartilage degeneration and delay the onset of arthritis.",
        why_choose_us:
            "The fellowship-trained hip specialists at Mountain Spine & Orthopedics offer cutting-edge care for hip dysplasia. Our Florida-based practice is one of few that performs advanced joint preservation surgeries like the periacetabular osteotomy (PAO). With a complimentary MRI review and free second opinion, we can create a personalized plan to preserve your joint health and keep you moving pain-free.",
        schedule:
            "If hip pain or instability is limiting your lifestyle, schedule a consultation with Mountain Spine & Orthopedics. Benefit from a complimentary MRI review and a thorough second opinion to get answers and a personalized plan for managing your hip dysplasia.",
        slug: "hip-dysplasia",
        keywords: [
            "hip dysplasia",
            "adult hip dysplasia Florida",
            "periacetabular osteotomy (PAO)",
            "hip pain in young adults",
            "hip joint preservation",
            "hip specialist",
            "groin pain treatment",
            "shallow hip socket",
        ],
        metaTitle:
            "Hip Dysplasia | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Hip dysplasia can cause hip pain and instability. Our Florida hip specialists offer advanced joint preservation surgery like PAO to treat adult hip dysplasia.",
    },


    {
        title: "Facet Joint Disease",
        tag: "Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/FacetJointDisease.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/FacetJointDiseasearti.png",
        body: "Facet joint disease, also known as spinal arthritis or facet arthropathy, is a common source of chronic neck and back pain.",
        detail: "Facet joint disease, or facet arthropathy, is a condition that occurs when the small, stabilizing joints linking your vertebrae (facet joints) wear down or become inflamed. This is a form of spinal arthritis that can result from aging, injury, or repetitive stress. At Mountain Spine & Orthopedics, we evaluate each case with advanced imaging and diagnostic injections to provide a clear diagnosis and a patient-focused treatment plan for lasting pain relief.",
        what_sym: "Typical symptoms include persistent, dull, aching pain in the neck or back that often worsens when standing, twisting, or bending backward. It can be accompanied by stiffness and pain that radiates into the shoulders, hips, or thighs.",
        risk_fac:
            "The risk of facet joint disease rises with age, especially after fifty. A history of spinal injury, degenerative disc disease, repetitive strain from heavy lifting, and excess body weight can all accelerate the wear and tear on these joints.",
        diagnose:
            "Our diagnostic process begins with a complete medical history and physical exam. To confirm the diagnosis, we may use a complimentary MRI review to visualize the arthritic joints. The most definitive diagnostic tool is a facet joint injection, where an anesthetic is precisely injected into the suspected joint under imaging guidance to see if it relieves the pain.",
        treatment:
            "Care often begins with conservative measures like structured physical therapy and anti-inflammatory medication. For more targeted relief, our specialists perform facet joint injections with corticosteroids. For longer-lasting relief from chronic pain, a minimally invasive procedure called radiofrequency ablation (RFA) can be performed to deactivate the small nerves that send pain signals from the joint.",
        pain_info:
            "Pain from facet joint disease is typically localized to the area of the affected joint and often grows worse with certain movements or long periods of standing. A structured pain management plan, including targeted injections and physical therapy, can greatly reduce symptoms and improve daily comfort.",
        prevent:
            "You can help slow joint wear by engaging in regular low-impact exercise, maintaining a healthy weight, practicing good posture, and avoiding smoking and repetitive heavy strain on your back.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our spine specialists are experts in diagnosing and treating facet joint pain. Serving patients across Florida, we provide precise diagnostic injections and advanced, minimally invasive treatments like radiofrequency ablation. With a complimentary MRI review and a free second opinion, we can identify the true source of your pain and offer lasting relief.",
        schedule:
            "Set up a consultation with Mountain Spine & Orthopedics today for your back or neck pain. Take advantage of our complimentary MRI review and free second opinion to see if facet joint disease is the cause and explore your treatment options.",
        slug: "facet-joint-disease",
        keywords: [
            "facet joint disease",
            "facet joint injection Florida",
            "spinal arthritis",
            "radiofrequency ablation (RFA)",
            "chronic neck pain",
            "chronic back pain",
            "facet arthropathy",
            "non-surgical spine care",
        ],
        metaTitle:
            "Facet Joint Disease | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Facet joint disease causes chronic back and neck pain. Our Florida spine specialists offer facet injections and radiofrequency ablation (RFA) for lasting relief.",
    },
    {
        title: "Arthritis",
        tag: "Hand",
        card_img: "https://mountainspineortho.b-cdn.net/public/arthritis2.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/arthritis.png",
        body: "Arthritis is a condition that causes joint inflammation, leading to chronic pain, stiffness, and reduced mobility that can impact quality of life.",
        detail: "Arthritis is an umbrella term for over 100 conditions that cause joint inflammation, pain, and disease. The most common forms are Osteoarthritis (OA), caused by cartilage breakdown, and Rheumatoid Arthritis (RA), an autoimmune disorder. Regardless of the type, arthritis can significantly impact mobility and overall well-being. Mountain Spine & Orthopedics is dedicated to identifying the specific type of arthritis you have to provide targeted, effective relief and improve your quality of life.",
        what_sym: "Common symptoms include persistent joint pain, stiffness (especially in the morning), swelling or warmth around the joints, and a decreased range of motion. Inflammatory types like Rheumatoid Arthritis may also cause fatigue.",
        risk_fac:
            "Risk factors vary but commonly include advancing age, a family history of arthritis, previous joint injuries, and obesity, which puts extra stress on joints like the hips and knees. Autoimmune conditions are also a significant risk factor for inflammatory types of arthritis.",
        diagnose:
            "At Mountain Spine & Orthopedics, diagnosis begins with a thorough medical history and a detailed physical examination. We utilize diagnostic imaging, such as X-rays or MRIs, to visualize the joint; we also offer a complimentary MRI review to aid this process. Blood tests or an analysis of joint fluid may also be necessary to pinpoint specific inflammatory types like RA or gout.",
        treatment:
            "We create personalized treatment plans that may involve a combination of approaches: pain-relieving medications, tailored physical therapy programs, lifestyle adjustments, and corticosteroid or hyaluronic acid injections. For severe cases that are unresponsive to conservative care, our surgeons may consider advanced minimally invasive surgical options or joint replacement.",
        pain_info:
            "Arthritis pain can manifest as a dull ache or a sharp pain, and it is often accompanied by significant stiffness. Our comprehensive pain management strategy combines medication, therapeutic injections, and physical therapy to effectively reduce discomfort, manage flare-ups, and improve your ability to perform daily tasks.",
        prevent:
            "While some types of arthritis are not preventable, managing risk factors is key. Maintaining a healthy weight, engaging in regular low-impact exercise, and protecting joints from injury can slow the progression of the disease and preserve function.",
        why_choose_us:
            "The specialists at Mountain Spine & Orthopedics provide expert, comprehensive care for all types of arthritis. Serving the Florida community, we offer a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. From advanced regenerative medicine to minimally invasive joint replacement, our team is dedicated to managing your arthritis and restoring your comfort and mobility.",
        schedule:
            "If joint pain and stiffness are impacting your life, schedule a consultation at Mountain Spine & Orthopedics today. Our specialists will provide an accurate diagnosis and develop a personalized care plan to manage your arthritis.",
        side_img: "https://mountainspineortho.b-cdn.net/public/arthritisside.jpeg",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            What Is Arthritis?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Arthritis refers to inflammation of one or more joints. It’s not
                                a single disease but a broad term used to describe over 100
                                different types of joint disorders. The two most common types
                                are osteoarthritis (OA) and rheumatoid arthritis (RA), though
                                others like gout, psoriatic arthritis, and lupus-related
                                arthritis are also common.
                                <br />
                                <br />
                                The primary symptoms of arthritis include joint pain, stiffness,
                                swelling, redness, and decreased range of motion. Over time,
                                arthritis can lead to cartilage loss, bone erosion, and even
                                joint deformity, particularly if left untreated.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/arthritis.png"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Many patients describe arthritis as a dull, aching pain that
                                worsens with activity or after periods of rest. Understanding
                                the exact type of arthritis you have is critical for choosing
                                the most effective treatment path.
                            </p>
                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Symptoms of Arthritis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>
                                    Joint stiffness, especially in the morning or after inactivity
                                </li>
                                <li>Swelling around the joints</li>
                                <li>Persistent or sharp joint pain</li>
                                <li>Tenderness when touching the joint</li>
                                <li>Reduced range of motion</li>
                                <li>Clicking, popping, or grinding sounds</li>
                                <li>Warmth or redness over the joint</li>
                                <li>
                                    Fatigue or flu-like symptoms (common in inflammatory types
                                    like RA)
                                </li>
                            </ul>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                In more advanced stages, arthritis can lead to joint deformity,
                                loss of function, and reduced ability to perform everyday
                                tasks. Early diagnosis and treatment can significantly slow
                                progression and reduce permanent damage.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/arthritis2.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Types of Arthritis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                There are several major types of arthritis that affect people of
                                all ages. Osteoarthritis is the most common and is caused by
                                the gradual breakdown of cartilage, which cushions the ends of
                                bones within a joint. As this cartilage deteriorates, bones
                                begin to rub against each other, leading to pain and stiffness.
                                Rheumatoid arthritis is an autoimmune disorder in which the
                                immune system attacks the lining of the joints, causing chronic
                                inflammation, swelling, and joint erosion. Gout results from a
                                buildup of uric acid crystals, often in the big toe, and leads
                                to sudden, intense pain. Psoriatic arthritis is associated with
                                psoriasis and can cause both joint inflammation and skin
                                symptoms. Each of these conditions presents unique challenges
                                and requires a tailored treatment plan to effectively control
                                pain and prevent further damage.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Arthritis Treatment Options
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Arthritis may be a chronic condition, but that doesn’t mean it
                                has to control your life. With the right treatment plan, it’s
                                possible to reduce pain, slow joint damage, and improve your
                                mobility. At Mountain Spine & Orthopedics, our team of experts
                                offers a full spectrum of arthritis care from advanced imaging
                                and diagnosis to non-surgical therapies and state-of-the-art
                                surgical solutions when needed. Whether you’re managing early
                                signs of osteoarthritis or facing the challenges of an
                                inflammatory condition like rheumatoid arthritis, we’re here to
                                help guide you through every stage of your treatment.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you’re living with persistent joint pain, stiffness, or
                                swelling, don’t wait to get the help you need. Arthritis is a
                                manageable condition when addressed early with the right
                                treatment plan and expert care. At Mountain Spine & Orthopedics,
                                our experienced specialists are here to evaluate your symptoms,
                                provide a personalized diagnosis, and guide you toward lasting
                                relief and better joint health.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our online
                                consultation form to schedule your appointment. Let’s take the
                                first step together toward improving your mobility, comfort, and
                                quality of life.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "arthritis",
        keywords: [
            "arthritis",
            "arthritis treatment Florida",
            "osteoarthritis",
            "rheumatoid arthritis",
            "joint pain relief",
            "knee arthritis treatment",
            "hip arthritis treatment",
            "orthopedic specialist",
        ],
        metaTitle:
            "Arthritis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Arthritis causes joint pain, stiffness, and swelling. Our Florida specialists offer comprehensive care for osteoarthritis, RA, and other types of arthritis.",
    },
    {
        title: "Lower Back Pain",
        tag: "Lower Spine",
        card_img:
            "https://mountainspineortho.b-cdn.net/public/LowerBackPainimg.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/LowerBackPaintxt.png",
        body: "Lower back pain is an extremely common condition that can range from a dull, constant ache to sharp, sudden pain, significantly impacting daily life.",
        detail: "The lower back, or lumbar spine, bears more weight and stress than any other spinal region, making it highly vulnerable to injury and degenerative conditions. Common causes of pain include muscle strains, herniated discs, degenerative disc disease, and spinal stenosis. At Mountain Spine & Orthopedics, a thorough history and physical exam, along with a complimentary high-resolution MRI review, help us pinpoint the exact cause of your pain and create a targeted, effective treatment plan.",
        what_sym: "Patients may feel a constant dull ache or episodic sharp pain in the lower back. Other common symptoms include stiffness, muscle tightness, and radiating pain, numbness, or tingling down the leg, a condition known as sciatica.",
        risk_fac:
            "Risk for lower back pain increases with aging, a sedentary lifestyle, weak core musculature, obesity, and occupations requiring repetitive bending or heavy lifting. Smoking, which impairs disc nutrition, is also a significant risk factor.",
        diagnose:
            "Our diagnostic process includes a detailed history, a physical exam, and complimentary imaging. An MRI can pinpoint disc pathology, nerve compression, or arthritic changes, while standing X-rays can assess alignment and stability. These investigations ensure that treatment targets the true pain generator.",
        treatment:
            "Initial management emphasizes conservative care, including patient education, physical therapy to strengthen core stabilizers, and anti-inflammatory medication. Image-guided epidural steroid injections can provide focal relief. When structural issues cause persistent pain or neurological deficits, our surgeons may perform minimally invasive decompression or fusion surgery to offer durable relief.",
        pain_info:
            "Lower back pain can fluctuate with daily activity, often easing during gentle movement and worsening with prolonged static postures. Our integrative approach combines targeted pain interventions and graded exercise to break the cycle of inflammation and muscle guarding that perpetuates chronic pain.",
        prevent:
            "Preventive steps include maintaining a healthy weight, engaging in regular low-impact exercise, strengthening core and hip muscles, and practicing proper lifting techniques. Using ergonomically designed workstations and avoiding smoking can also help prevent recurrent flare-ups.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our board-certified spine specialists are committed to resolving your lower back pain. We provide every patient in our Florida clinics with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. Our focus on a wide array of non-surgical and minimally invasive options helps you reclaim an active life.",
        schedule:
            "If lower back pain is limiting your life, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of a complimentary MRI review and free second opinion to move forward with a personalized plan to conquer your pain.",
        side_img: "https://mountainspineortho.b-cdn.net/public/lowerbackpainside.jpeg",
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Could Be Causing My Lower Back Pain?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Lower back conditions can present in many ways, including
                                radiating pain, stiffness, numbness, or tingling that travels
                                through one or both legs. The severity and type of symptoms
                                often depend on the specific condition and how far it has
                                progressed. Conditions like herniated discs, spinal stenosis,
                                osteoarthritis, and spondylolisthesis are among the most common
                                causes of chronic lower back pain. If you’re experiencing
                                numbness or tingling in particular, this may point to nerve
                                compression which is often more serious than general discomfort
                                and should be addressed immediately to prevent long-term damage.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/lowerbackpain.png"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Even if your pain seems manageable, it’s important not to ignore
                                it. Small symptoms can be early warning signs of more serious
                                spinal conditions. That’s why we offer a quick and easy Back
                                Condition Checker to help identify potential issues. This tool
                                is designed to gather information about your symptoms and guide
                                you toward the appropriate care pathway.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What is the Right Treatment for Me?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The only way to determine the right treatment is through an
                                accurate diagnosis. Our specialists use a variety of advanced
                                tools, including MRI scans, X-rays, ultrasounds, and physical
                                evaluations to assess the source of your lower back pain. These
                                methods help detect conditions like herniated or bulging discs,
                                osteoarthritis, spinal stenosis, spondylolisthesis, or even
                                spinal fractures. Once a clear diagnosis is made, our highly
                                trained doctors at Mountain Spine & Orthopedics can recommend a
                                treatment plan tailored to your needs. With access to advanced
                                procedures not widely available elsewhere, we’re able to offer
                                both non-surgical and surgical options based on what’s best for
                                your recovery.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Is Surgery Necessary for Back Pain?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Surgery is not always necessary for lower back pain. In fact,
                                many patients experience significant relief through
                                non-surgical treatments such as physical therapy, spinal
                                injections, or medications that improve body mechanics and
                                reduce inflammation. However, if conservative treatments fail
                                or if there is significant damage to spinal discs or nerves,
                                surgical intervention may be required. In those cases, our team
                                specializes in minimally invasive procedures designed to reduce
                                recovery time and improve outcomes.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            How Can I Prevent Lower Back Pain?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The most effective way to prevent lower back pain is by
                                maintaining a healthy lifestyle. Carrying excess weight places
                                added pressure on the lower spine, accelerating disc
                                degeneration. Poor posture and lack of physical activity can
                                also contribute to spinal issues over time. Even habits like
                                smoking or prolonged sitting can increase the risk of developing
                                chronic back pain. Making simple changes, such as staying
                                active and practicing good posture, can go a long way in
                                protecting your spine.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you’re experiencing persistent lower back pain, numbness, or
                                radiating leg symptoms, it may be time to speak with a spine
                                specialist. These signs could indicate a more serious issue
                                that, if caught early, can be treated before it worsens. <br />{" "}
                                <br /> At Mountain Spine & Orthopedics, we specialize in
                                diagnosing and treating the full range of lower back conditions
                                with the most advanced technology and techniques available.
                                Don’t wait to take control of your health. Contact us at (833)
                                931-4888 or fill out our online form to schedule your
                                consultation today.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "lower-back-pain",
        keywords: [
            "lower back pain",
            "back pain treatment Florida",
            "lumbar pain relief",
            "sciatica",
            "herniated disc",
            "spine specialist",
            "non-surgical back treatment",
            "back muscle pain",
        ],
        metaTitle:
            "Lower Back Pain | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Lower back pain can be debilitating. Our Florida spine specialists diagnose the cause and provide advanced, personalized treatments to restore your mobility.",
    },
    {
        title: "Sciatica",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/Sciaticacopy.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/Sciaticaarti.png",
        body: "Sciatica is radiating nerve pain that travels from the lower back down the leg, caused by compression or irritation of the sciatic nerve.",
        detail: "Sciatica is a symptom, not a condition itself, characterized by pain radiating along the path of the sciatic nerve. This nerve, the body's largest, can be compressed by a herniated disc, bone spur, or spinal stenosis in the lower back. Accurately identifying the underlying cause is essential for effective treatment. At Mountain Spine & Orthopedics, our evaluation includes a physical exam and a complimentary MRI review to pinpoint the source of the nerve compression and relieve your pain.",
        what_sym: "The hallmark symptom of sciatica is pain that radiates from the lower back through the buttock and down one leg. This pain is often described as sharp, burning, or electric-like, and may be accompanied by numbness, tingling, or muscle weakness.",
        risk_fac:
            "Age-related disc degeneration is a primary risk factor. Obesity, a sedentary lifestyle, occupations involving heavy lifting or prolonged sitting, diabetes, and a previous spine injury can all increase the risk of developing sciatica.",
        diagnose:
            "In addition to a physical exam and a complimentary MRI review, our specialists may use a diagnostic selective nerve root block to confirm the precise location of the nerve irritation. This ensures that any subsequent treatment, like an epidural steroid injection, is targeted to the exact source of your pain.",
        treatment:
            "First-line treatments include physical therapy focused on lumbar stabilization and nerve gliding techniques, anti-inflammatory medications, and activity modification. Image-guided epidural steroid injections are highly effective for targeting inflammation at the nerve root level. For persistent cases, our surgeons may recommend minimally invasive decompression procedures, such as a microdiscectomy, to relieve pressure on the sciatic nerve.",
        pain_info:
            "Sciatica pain can range from a mild ache to debilitating shocks of nerve pain that fluctuate with movement or posture. Our multidisciplinary approach targets both the structural source of the compression and the resulting nerve inflammation to restore nerve health and daily comfort.",
        prevent:
            "Maintaining a healthy body weight, practicing proper lifting techniques, staying active with core strengthening exercises, and avoiding prolonged sitting can all help prevent sciatic nerve compression.",
        why_choose_us:
            "The spine specialists at Mountain Spine & Orthopedics are experts at diagnosing the root cause of sciatica. We provide patients across Florida with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We offer a full spectrum of care, from physical therapy and targeted injections to minimally invasive surgery, to resolve your sciatica and restore confident, pain-free movement.",
        schedule:
            "If radiating leg or lower back pain is interfering with your mobility, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a detailed second opinion to start on your path to resolving sciatica.",
        side_img: "https://mountainspineortho.b-cdn.net/public/sciaticaside.png",
        forum: [
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            How Do I Know if I Have Sciatica?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Sciatica symptoms usually affect only one side of the body, most
                                commonly the lower back and leg. They often intensify while
                                sitting and may include radiating pain, numbness, tingling, and
                                muscle weakness in the affected leg. If the condition advances,
                                it may begin to impact your ability to walk or perform daily
                                activities. In some cases, tingling or numbness in the arms and
                                legs could signal a more advanced orthopedic issue.
                            </p>

                            <div className="rounded-[24px] overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube.com/embed/EVPlqu2FH2g?si=iSAQ8CBU0XJwmMAv"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you suspect you may be experiencing sciatica, we offer a
                                quick and easy condition checker. This tool gathers key
                                information about your symptoms and helps determine if you're a
                                candidate for evaluation and treatment.
                            </p>

                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is the Right Treatment for Me?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Most cases of sciatica respond well to conservative treatment,
                                especially when the underlying condition compressing the sciatic
                                nerve is addressed. Treatment may include anti-inflammatory
                                medication, stretching exercises, heat and ice therapy, and
                                physical therapy. These methods aim to relieve pressure, reduce
                                inflammation, and restore mobility.
                                <br />
                                <br />
                                Only after conservative options have been exhausted is surgery
                                considered. At Mountain Spine & Orthopedics, our board-certified
                                orthopedic doctors are experts in treating sciatica. We offer
                                advanced, customized care plans that many other practices are
                                not equipped to provide.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Sciatica Treatment Options
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Sciatica treatments vary depending on nerve involvement and
                                symptom severity. Our team offers both non-surgical and
                                surgical solutions tailored to your condition
                            </p>

                            <h3
                                style={{
                                    fontFamily: "var(--font-inter),",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                Non-Surgical Treatment:
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Stretching exercises improve mobility and flexibility.
                                Chiropractic care eases pressure on the spine. Medications
                                reduce inflammation and pain.
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                Surgical Treatment:
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Foraminotomy relieves pressure by enlarging the foramen.
                                <br />
                                Discectomy removes the herniated disc causing nerve compression.
                                <br /> Laminotomy removes part of the lamina to decompress the
                                nerve.
                                <br />
                                <br />
                                Our orthopedic specialists will help determine the best option
                                based on your condition, lifestyle, and treatment goals.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/sciatica.png"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you suspect you’re experiencing sciatica, don’t wait to seek
                                help. Our team at Mountain Spine & Orthopedics specializes in
                                diagnosing and treating sciatica with both non-invasive and
                                surgical approaches. We’ve helped thousands of patients regain
                                their comfort, mobility, and quality of life.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or fill out our online form to
                                book your appointment. Let us help you find lasting relief.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "sciatica",
        keywords: [
            "sciatica",
            "sciatica treatment Florida",
            "radiating leg pain",
            "pinched sciatic nerve",
            "herniated disc leg pain",
            "epidural injection for sciatica",
            "lower back and leg pain",
            "sciatic nerve relief",
        ],
        metaTitle:
            "Sciatica | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Sciatica causes radiating leg pain from a pinched nerve in the lower back. Our Florida spine specialists offer expert diagnosis and treatment to find relief.",
    },
    {
        title: "Coccydynia",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/Coccydynia.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/Coccydyniaarti.png",
        body: "Coccydynia, more commonly known as tailbone pain, is a condition that can make sitting painful and difficult.",
        detail: "Coccydynia is pain and inflammation in the coccyx, or tailbone, which is located at the very bottom of the spine. This pain can result from a fall, repetitive microtrauma from activities like cycling, childbirth, or prolonged sitting on hard surfaces. At Mountain Spine & Orthopedics, our specialists use a focused physical exam and precision imaging to clarify the alignment and rule out other issues, allowing for a customized care plan that targets the true source of your tailbone pain.",
        what_sym: "The classic sign of coccydynia is a sharp or aching pain directly over the tailbone. The pain typically worsens when sitting down, rising from a seated position, or leaning backward while seated, and the area is often tender to the touch.",
        risk_fac:
            "A higher risk for coccydynia is linked to a recent fall onto the buttocks, childbirth, excess body weight, or prolonged sitting on hard surfaces without ergonomic support. Repetitive-motion sports such as cycling and rowing can also contribute.",
        diagnose:
            "Diagnosis often includes a diagnostic local anesthetic injection to confirm the coccyx as the source of pain, in addition to imaging studies. We offer complimentary MRI or dynamic X-ray reviews to guide therapy and avoid unnecessary treatment of unrelated areas. This precise diagnostic approach ensures we target the right spot.",
        treatment:
            "Care begins with conservative measures, such as using a specialized cut-out seat cushion, activity modification, and targeted physical therapy to relieve pelvic floor tension. Ultrasound-guided steroid or nerve block injections can offer potent relief. In rare cases of persistent pain and confirmed instability, our surgeons may perform a minimally invasive coccygectomy (removal of the tailbone).",
        pain_info:
            "Tailbone pain often intensifies after long car rides or sitting on hard surfaces. Our specialists pair ergonomic counseling with image-guided interventions to reduce inflammation, retrain posture, and break the cycle of chronic coccygeal pain, allowing you to sit, move, and live comfortably.",
        prevent:
            "Using cushioned or U-shaped seats, taking frequent standing breaks during extended periods of sitting, maintaining a healthy weight, and strengthening core and pelvic floor muscles can help protect the coccyx from injury and irritation.",
        why_choose_us:
            "Coccydynia requires a specialized diagnostic approach. The experts at Mountain Spine & Orthopedics are skilled in identifying and treating this unique condition. For patients in Florida dealing with tailbone pain, we offer a complimentary MRI review and advanced, image-guided injections to provide targeted relief, so you can sit comfortably again.",
        schedule:
            "Don't let tailbone pain dictate your day. Schedule a consultation with Mountain Spine & Orthopedics for a complimentary MRI review and expert second opinion so you can sit, move, and live comfortably again.",
        side_img: "https://mountainspineortho.b-cdn.net/public/coccydyniaside.png",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is Coccydynia?
                        </h2>
                        <div className="flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Coccydynia is the medical term for inflammation or injury to the
                                coccyx (tailbone), located at the bottom of the spine. Pain may
                                occur while sitting, standing up from a seated position, or
                                during bowel movements. It can be dull and persistent or sharp
                                and stabbing.
                                <br />
                                <br />
                                The cause isn't always obvious, but common triggers include a
                                traumatic fall, stressful childbirth, or prolonged pressure from
                                improper sitting posture. Rarely, it may be due to a tumor in
                                the coccyx region. If the pain persists or intensifies, it’s
                                important to consult with a spine specialist.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/coccydynia.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If you're experiencing symptoms like tailbone pain that worsens
                                when sitting or during bowel movements, you may be dealing with
                                coccydynia. Our diagnostic checker is a fast way to determine
                                whether a specialist evaluation is recommended.
                            </p>
                            <OutlinedButton text="Do I have this Condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl"
                        >
                            How Is Coccydynia Diagnosed?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Diagnosing coccydynia typically starts with a physical
                                examination and discussion of your symptoms and medical
                                history. Your doctor may gently press on the tailbone area to
                                assess tenderness and rule out other causes of pain. In some
                                cases, imaging tests like X-rays or MRIs are used to identify
                                fractures, joint instability, or signs of inflammation.
                                <br />
                                <br />
                                Once diagnosed, your provider will recommend a treatment plan
                                based on the severity and duration of symptoms.
                            </p>
                            <OutlinedButton text="Find a Treatment" />
                        </div>
                    </div>
                ),
            },

            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Pain Management for Coccydynia
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                In early cases, coccydynia can be managed with non-surgical
                                treatment. This includes using a wedge or donut-shaped cushion
                                to reduce pressure while sitting, increasing fiber intake, and
                                using stool softeners to minimize discomfort during bowel
                                movements. Over-the-counter anti-inflammatory medications and
                                hot/cold therapy can also help reduce inflammation and pain.
                                <br />
                                <br />
                                If the pain persists beyond a few weeks, stronger pain
                                relievers, physical therapy, or injections may be recommended.
                                Surgery (coccygectomy) is reserved for severe cases when all
                                other options have failed.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Causes Coccydynia?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Coccydynia can result from both sudden trauma and long-term
                                strain. Common causes include:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li> Falls or direct impact to the tailbone</li>
                                <li> Prolonged sitting on hard or unstable surfaces</li>
                                <li>Childbirth, especially when prolonged or difficult</li>
                                <li>
                                    Repetitive strain or poor posture In rare cases, bone tumors
                                    or infections may lead to coccyx pain, which is why imaging
                                    may be required when pain does not respond to treatment.
                                </li>
                            </ul>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/coccydynia2.jpeg"
                                } // Passing static image data
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Risk Factors for Coccydynia
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Several factors increase the risk of developing coccydynia,
                                including being:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>Female (due to childbirth)</li>
                                <li> Obese or underweight (both affect sitting posture)</li>
                                <li>Sedentary (extended sitting)</li>
                                <li>
                                    Engaging in high-impact sports or activities Additionally,
                                    hormonal changes during pregnancy or aging can loosen the
                                    pelvic area and increase tailbone vulnerability.
                                </li>
                            </ul>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Treatment Options for Coccydynia
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Treatment depends on how long you’ve had symptoms and how severe
                                the pain is. Common treatments include:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>Cushions and posture correction</li>
                                <li>Anti-inflammatory medications</li>
                                <li>Physical Therapy</li>
                                <li>Corticosteroid injections</li>
                            </ul>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                In rare cases, a coccygectomy (surgical removal of the coccyx)
                                may be considered. At Mountain Spine & Orthopedics, we specialize
                                in minimally invasive spine procedures to provide targeted
                                relief while preserving mobility and reducing recovery time.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Frequently Asked Questions About Coccydynia
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter),",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                How is coccydynia pain treated during pregnancy?
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Tailbone pain in pregnancy is common and usually caused by the
                                hormone relaxin, which loosens pelvic joints. Using supportive
                                cushions, applying hot/cold therapy, and taking acetaminophen
                                may provide relief. Persistent pain should be evaluated by a
                                spine specialist.
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                Does walking help coccydynia?
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                For many, gentle walking can reduce tailbone pressure. But if
                                there’s a fracture or joint instability, walking may worsen the
                                pain. Low-impact stretching or yoga may be a safer option in
                                those cases.
                            </p>

                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                How should I sleep with coccydynia?
                            </h3>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Avoid sleeping flat on your back. Instead, sleep on your side
                                with a pillow between your knees. This position minimizes
                                pressure on the coccyx and can improve sleep quality.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>

                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Tailbone pain doesn’t have to interfere with your life. At
                                Mountain Spine & Orthopedics, our expert team offers effective,
                                patient-centered solutions for coccydynia from non-surgical
                                therapies to advanced procedures. We’ll help you get to the root
                                of your pain and back to feeling your best.
                                <br />
                                <br />
                                Call us today at (561) 223-9959 or complete our online form to
                                schedule your consultation.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "coccydynia",
        keywords: [
            "coccydynia",
            "tailbone pain relief",
            "pain when sitting",
            "coccyx pain treatment Florida",
            "tailbone injury",
            "coccydynia injection",
            "pain management specialist",
            "coccygectomy",
        ],
        metaTitle:
            "Coccydynia | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Coccydynia, or tailbone pain, makes sitting painful. Our Florida spine specialists offer precise diagnosis and advanced therapies to relieve your discomfort.",
    },
    {
        title: "Failed Back or Failed Neck Surgery Syndrome",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/FailedBAN.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/failedBANarti.png",
        body: "Failed Back (or Neck) Surgery Syndrome refers to persistent pain after a spinal procedure, requiring expert evaluation to find the underlying cause.",
        detail: "Failed Back Surgery Syndrome (FBSS) or Failed Neck Surgery Syndrome describes persistent or worsening pain and functional limitations after a spinal procedure that was intended to provide relief. This complex issue can be due to unresolved nerve compression, a failed fusion (pseudarthrosis), adjacent segment disease, or hardware complications. At Mountain Spine & Orthopedics, our specialists perform a meticulous evaluation, reviewing surgical records and advanced imaging to find the true source of your ongoing pain.",
        what_sym: "Patients frequently report persistent or worsening back or neck pain, often accompanied by radiating burning or electric-like sensations in the limbs. Numbness, weakness, and limited range of motion are also common complaints.",
        risk_fac:
            "Factors that can elevate the likelihood of persistent postoperative symptoms include pre-existing diffuse degenerative disease, multilevel pathology, inadequate preoperative rehabilitation, technical surgical challenges, and the formation of epidural scar tissue.",
        diagnose:
            "Diagnosis goes beyond standard imaging. In addition to a complimentary MRI review, we may use diagnostic selective nerve root blocks, facet joint injections, or even a spinal cord stimulation trial to pinpoint the pain generators. These advanced diagnostics create an evidence-based foundation for targeted revision surgery or non-surgical management.",
        treatment:
            "Treatment begins with a comprehensive re-evaluation. Our approach may include personalized physical therapy, specialized medications for neuropathic pain, and image-guided injections. Neuromodulation options, including spinal cord stimulation, can dramatically cut pain. For clear mechanical failures, such as a non-union or hardware malposition, our surgeons perform minimally invasive revision surgery to correct the issue and provide lasting stability.",
        pain_info:
            "Postoperative pain often involves a mix of residual mechanical compression, nerve hypersensitivity, and central pain amplification. Our team integrates targeted medical interventions with rehabilitative therapies to recalibrate pain pathways and foster sustained relief from this complex condition.",
        prevent:
            "While not always preventable, the risk of FBSS can be reduced by ensuring a rigorous preoperative assessment to confirm the correct indication for the initial surgery. Meticulous surgical technique and adherence to an individualized rehabilitation protocol are also critical for success.",
        why_choose_us:
            "If a previous spine surgery has failed to provide relief, you need a second opinion from true experts. The board-certified surgeons at Mountain Spine & Orthopedics specialize in diagnosing and treating Failed Back and Neck Surgery Syndrome. We provide patients across Florida with a complimentary, in-depth MRI review to guide you toward a clear plan to confront this challenging condition and regain control of your life.",
        schedule:
            "If spine surgery has failed to provide you with lasting relief, schedule a consultation with Mountain Spine & Orthopedics. Our specialists will conduct a complimentary MRI review and a thorough second opinion to help you find a new path to recovery.",
        slug: "failed-back-surgery-syndrome",
        keywords: [
            "failed back surgery syndrome",
            "persistent pain after spine surgery",
            "FBSS treatment Florida",
            "revision spine surgery",
            "failed neck fusion",
            "spinal cord stimulator",
            "post-laminectomy syndrome",
            "complex spine specialist",
        ],
        metaTitle:
            "Failed Back or Failed Neck Surgery Syndrome | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Persistent pain after spine surgery? Our Florida specialists diagnose and treat Failed Back Surgery Syndrome with advanced revision surgery and pain management.",
    },
    {
        title: "Foraminal Stenosis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/ForaminalS.png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/public/ForaminalSarti.png",
        body: "Foraminal stenosis is a narrowing of the spinal openings where nerves exit, which can 'pinch' the nerves and cause radiating pain.",
        detail: "Foraminal stenosis occurs when the small openings (foramina) on each side of your spine, through which nerve roots exit the spinal canal, become narrowed. This narrowing is often due to degenerative changes like bone spurs or <a href=\"/area-of-specialty/herniated-disc\" class=\"text-blue-600 hover:underline\">herniated discs</a>, and it can compress or 'pinch' the exiting nerve root. This leads to symptoms along that nerve's pathway. At Mountain Spine & Orthopedics, our specialists use advanced imaging and a detailed neurological exam to precisely identify the location of the stenosis and create an effective treatment plan.",
        what_sym: "Symptoms depend on the location of the pinched nerve and can include radiating pain (sciatica in the leg or radiculopathy in the arm), numbness, tingling, burning sensations, or muscle weakness in the affected limb.",
        risk_fac:
            "Age is the primary risk factor, as degenerative changes accumulate over time. Other factors include a genetic predisposition to disc degeneration or arthritis, previous spinal injury, occupations involving heavy lifting, and obesity.",
        diagnose:
            "Diagnosis involves a thorough clinical evaluation to assess symptoms, reflexes, and muscle strength. Imaging is crucial; we offer a complimentary MRI review to get a detailed view of the nerves and soft tissues, while a CT scan can excel at showing bone structure. These tools help us create a tailored treatment plan targeting the specific compressed nerve.",
        treatment:
            "Initial treatment is typically conservative, focusing on physical therapy, anti-inflammatory medications, and <a href=\"/treatments/epidural-steroid-injection\" class=\"text-blue-600 hover:underline\">epidural steroid injections</a> to reduce inflammation around the nerve. If symptoms persist or there is significant weakness, our expert surgeons at Mountain Spine & Orthopedics may recommend a minimally invasive surgical option like <a href=\"/treatments/endoscopic-foraminotomy-surgery\" class=\"text-blue-600 hover:underline\">foraminotomy</a> to decompress the nerve.",
        pain_info:
            "Pain from foraminal stenosis often follows a specific nerve path (a dermatome). Lumbar stenosis typically causes leg pain (sciatica), while cervical stenosis causes arm pain. The pain can range from a dull ache to sharp, shooting sensations. Our team focuses on identifying the exact nerve involved to deliver targeted, effective relief.",
        prevent:
            "While age-related degeneration is difficult to prevent entirely, maintaining a healthy weight, practicing good posture, using proper lifting techniques, and performing regular core strengthening exercises can help maintain spinal health and slow the progression of degenerative changes.",
        why_choose_us:
            "The spine specialists at Mountain Spine & Orthopedics are highly skilled in diagnosing and treating foraminal stenosis. For patients across Florida, we offer a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We specialize in minimally invasive procedures like foraminotomy to relieve nerve compression and help you return to a life without radiating pain.",
        schedule:
            "Don't live with radiating nerve pain, numbness, or weakness. Contact Mountain Spine & Orthopedics today to schedule your consultation. Benefit from our complimentary MRI review and expert free second opinion to improve your quality of life.",
        side_img: "https://mountainspineortho.b-cdn.net/public/ForaminalS.png",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Understanding Foraminal Stenosis
                        </h2>
                        <div className="flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Foraminal stenosis is a specific type of spinal stenosis where
                                the openings between your spinal bones (vertebrae), called the
                                neural foramina, become narrow. These openings are crucial
                                because they provide the pathway for your spinal nerves to exit
                                the spinal cord and travel to other parts of your body, like
                                your arms and legs.
                                <br />
                                <br />
                                When a foramen narrows, it can squeeze or 'pinch' the nerve
                                passing through it. This nerve compression is what leads to the
                                characteristic symptoms of foraminal stenosis, such as pain,
                                numbness, tingling, or weakness that radiates away from the
                                spine along the path of the affected nerve. The location of
                                symptoms depends on which nerve is compressed – neck (cervical)
                                stenosis affects the arms, while lower back (lumbar) stenosis
                                affects the legs (often called sciatica).
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/ForaminalSarti.png"
                                } // Placeholder for diagram image
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Common causes include age-related wear and tear like bone spurs
                                (bony growths), bulging or herniated discs pushing into the
                                space, thickening of spinal ligaments, or a vertebra slipping
                                out of place (spondylolisthesis). If you're experiencing
                                radiating symptoms, understanding the cause is the first step
                                toward effective treatment.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] text-2xl" // Adjusted size for secondary heading
                        >
                            How Is Foraminal Stenosis Diagnosed?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Diagnosing foraminal stenosis accurately requires a combination
                                of understanding your symptoms and using advanced imaging. Our
                                specialists at Mountain Spine Orthopedics begin with a detailed
                                discussion about your pain pattern, numbness, weakness, and what
                                activities make your symptoms better or worse. A thorough
                                neurological exam follows, testing your reflexes, muscle
                                strength, and sensation to pinpoint which nerve might be
                                affected.
                                <br />
                                <br />
                                Imaging plays a vital role. While X-rays can show bone
                                alignment and arthritis, an MRI (Magnetic Resonance Imaging) is
                                usually the preferred test. It provides clear pictures of soft
                                tissues, including nerves and discs, showing exactly where and
                                how severely the nerve is being compressed within the foramen.
                                We offer complimentary MRI reviews to help assess your
                                condition. In some cases, a CT (Computed Tomography) scan might
                                be used for better bone detail, or nerve conduction studies
                                (EMG/NCS) might assess nerve function directly.
                            </p>
                            <OutlinedButton text="Explore Treatment Options" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Managing Pain from Foraminal Stenosis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The goal of managing foraminal stenosis pain is to reduce nerve
                                compression and inflammation. Conservative, non-surgical
                                approaches are typically tried first:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>
                                    <b>Activity Modification:</b> Avoiding activities that worsen
                                    symptoms.
                                </li>
                                <li>
                                    <b>Medications:</b> Over-the-counter or prescription
                                    nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen
                                    or naproxen can reduce pain and swelling.
                                </li>
                                <li>
                                    <b>Physical Therapy:</b> Specific exercises can help improve
                                    flexibility, strengthen supporting muscles (core, back), and
                                    improve posture, potentially creating more space for the
                                    nerve.
                                </li>
                                <li>
                                    <b>Epidural Steroid Injections:</b> Corticosteroid medication
                                    injected near the compressed nerve can provide significant,
                                    though often temporary, relief from inflammation and pain.
                                </li>
                            </ul>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                If these methods don't provide adequate relief, or if there is
                                progressive weakness, surgical options might be considered. Our
                                focus is on effective pain relief tailored to your specific
                                situation.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Causes Foraminal Stenosis?
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Foraminal stenosis is most often caused by the natural aging
                                process and degenerative changes in the spine. As we age,
                                various structures can encroach upon the neural foramina:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>
                                    <b>Bone Spurs (Osteophytes):</b> The body may grow extra bone
                                    around joints affected by arthritis, narrowing the foraminal
                                    space.
                                </li>
                                <li>
                                    <b>Herniated or Bulging Discs:</b> The soft discs between
                                    vertebrae can bulge or rupture, pushing disc material into the
                                    foramen and compressing the nerve.
                                </li>
                                <li>
                                    <b>Thickened Ligaments:</b> Ligaments within the spinal canal
                                    can thicken and stiffen over time, reducing the available
                                    space.
                                </li>
                                <li>
                                    <b>Spondylolisthesis:</b> One vertebra slips forward relative
                                    to the one below it, potentially narrowing the foramen at that
                                    level.
                                </li>
                                <li>
                                    <b>Facet Joint Arthritis:</b> Enlargement of the small joints
                                    connecting vertebrae (facet joints) due to arthritis can also
                                    contribute to foraminal narrowing.
                                </li>
                            </ul>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Less common causes include spinal injuries, tumors, or cysts.
                                Understanding the specific cause is key to choosing the right
                                treatment.
                            </p>
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/public/ForaminalS.png"
                                } // Placeholder for another diagram/image
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Risk Factors for Developing Foraminal Stenosis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                While anyone can develop foraminal stenosis, certain factors
                                increase your risk:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>
                                    <b>Age:</b> It's most common in individuals over 50 due to
                                    cumulative wear and tear.
                                </li>
                                <li>
                                    <b>Degenerative Conditions:</b> Osteoarthritis, degenerative
                                    disc disease are major contributors.
                                </li>
                                <li>
                                    <b>Spinal Deformities:</b> Conditions like scoliosis can alter
                                    spinal mechanics and increase stress.
                                </li>
                                <li>
                                    <b>Previous Spinal Injury:</b> Trauma can accelerate
                                    degenerative changes or directly narrow the foramina.
                                </li>
                                <li>
                                    <b>Genetics:</b> Some individuals may have a hereditary
                                    predisposition to spinal degeneration.
                                </li>
                                <li>
                                    <b>Lifestyle Factors:</b> Obesity puts extra stress on the
                                    spine, and smoking can impair disc health. Repetitive strain
                                    from certain jobs or activities may also play a role.
                                </li>
                            </ul>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Being aware of these factors can help in early recognition and
                                management.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Surgical Treatments for Foraminal Stenosis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Treatment for foraminal stenosis aims to relieve nerve pressure
                                and reduce symptoms. The approach depends on symptom severity
                                and cause. After conservative treatments have been explored, surgical options may be considered:
                            </p>
                            <ul
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl list-disc list-inside"
                            >
                                <li>
                                    <b>Foraminotomy:</b> A minimally invasive procedure where bone
                                    or tissue compressing the nerve within the foramen is removed,
                                    enlarging the opening.
                                </li>
                                <li>
                                    <b>Laminotomy/Laminectomy:</b> Removal of a small portion
                                    (laminotomy) or the entire lamina (laminectomy) - part of the
                                    vertebral bone - to create more space, often combined with
                                    foraminotomy.
                                </li>
                                <li>
                                    <b>Spinal Fusion:</b> May be necessary in cases of instability
                                    (like spondylolisthesis) often performed alongside
                                    decompression procedures.
                                </li>
                            </ul>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                At Mountain Spine Orthopedics, our surgeons specialize in
                                minimally invasive techniques whenever possible. These
                                approaches often involve smaller incisions, less muscle
                                disruption, reduced blood loss, and potentially faster recovery
                                times compared to traditional open surgery. We tailor the
                                treatment plan to provide the most effective relief for your
                                specific condition.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Frequently Asked Questions About Foraminal Stenosis
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                Is foraminal stenosis serious?
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                While often manageable with conservative care, severe or
                                progressive foraminal stenosis can lead to chronic pain,
                                significant weakness, numbness, and loss of function if left
                                untreated. In rare cases involving the lower spine, severe
                                compression can affect bowel or bladder control (cauda equina
                                syndrome), which is a medical emergency. Early diagnosis and
                                treatment are important.
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                Can foraminal stenosis heal on its own?
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                The underlying structural narrowing (like bone spurs or
                                thickened ligaments) typically does not resolve on its own.
                                However, symptoms can sometimes improve or fluctuate with
                                conservative treatments that reduce inflammation (like
                                injections) or improve biomechanics (like physical therapy),
                                effectively managing the condition without surgery.
                            </p>
                            <h3
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                }}
                                className="text-[#111315] text-md sm:text-xl"
                            >
                                What activities should be avoided with foraminal stenosis?
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Activities that worsen your specific symptoms should generally
                                be avoided or modified. This often includes high-impact
                                activities (like running on hard surfaces), heavy lifting with
                                improper form, prolonged sitting or standing without breaks, and
                                activities involving excessive twisting or extension of the
                                affected spinal region. A physical therapist can provide
                                personalized guidance.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className=" flex flex-col space-y-[16px] ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule Your Consultation
                        </h2>
                        <div className=" flex flex-col space-y-[40px]">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] text-md sm:text-xl"
                            >
                                Radiating nerve pain, numbness, or weakness shouldn't limit
                                your life. The expert team at Mountain Spine Orthopedics offers
                                comprehensive evaluation and cutting-edge treatments for
                                foraminal stenosis, from conservative care to advanced
                                minimally invasive surgery.
                                <br />
                                <br />
                                Take the first step towards relief. Contact us to schedule your
                                consultation, benefit from a complimentary MRI review, and
                                receive a free second opinion from our spine specialists. Call
                                us today or use our online form to request an appointment.
                            </p>
                        </div>
                    </div>
                ),
            },
        ],
        slug: "foraminal-stenosis",
        keywords: [
            "foraminal stenosis",
            "neuroforaminal stenosis",
            "pinched nerve treatment Florida",
            "radiating leg pain",
            "radiating arm pain",
            "foraminotomy",
            "spinal nerve compression",
            "cervical radiculopathy",
        ],
        metaTitle:
            "Foraminal Stenosis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Foraminal stenosis causes radiating pain from a pinched nerve. Our Florida spine specialists offer advanced, minimally invasive treatments to provide relief.",
    },
    {
        title: "Hip Impingement (Femoroacetabular Impingement)",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/Hipcard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/Hiparti.png",
        body: "Hip impingement, or FAI, occurs when abnormal bone growth in the hip joint causes damaging contact, leading to groin pain and stiffness.",
        detail: "Hip impingement, or Femoroacetabular Impingement (FAI), is a condition where extra bone growth on the femoral head (cam lesion) or socket rim (pincer lesion) causes abnormal, damaging contact during movement. This repeated pinching can tear the labrum and wear down cartilage, leading to sharp groin pain and stiffness. At Mountain Spine & Orthopedics, our hip preservation specialists use advanced imaging to visualize the bony issues and create a personalized plan to relieve pain and protect the joint.",
        what_sym: "Most patients report a sharp or aching groin pain that is triggered by deep hip flexion, such as squatting, pivoting, or prolonged sitting. Other common symptoms include clicking or locking sensations and reduced range of motion.",
        risk_fac:
            "Risk increases with participation in high-impact or pivoting sports during adolescence. A family history of FAI, childhood hip disorders, and repetitive deep squatting can also contribute to the development of hip impingement.",
        diagnose:
            "Diagnosis uses X-rays to measure key angles and confirm the cam or pincer morphology. We offer a complimentary MRI review, often with an arthrogram, to clearly show labral tears and cartilage wear. A diagnostic intra-articular anesthetic injection can also be used to confirm that the pain is originating from within the hip joint.",
        treatment:
            "Initial care focuses on conservative measures like activity modification and targeted physical therapy to strengthen hip and core muscles. When pain persists, our surgeons perform minimally invasive hip arthroscopy to reshape the bone, repair the labrum, and address cartilage defects. This procedure restores smooth joint mechanics while preserving the native joint and facilitating a rapid return to activity.",
        pain_info:
            "The pain from FAI often spikes during activities that involve deep hip flexion or athletic pivoting, then lingers as a dull ache. Our approach addresses both the mechanical impingement and the resulting soft tissue inflammation through integrated care that rapidly reduces pain and prevents further joint damage.",
        prevent:
            "Early recognition of hip pain, limiting repetitive deep flexion and pivoting, maintaining balanced hip and core strength, and correcting movement mechanics can all reduce impingement forces and protect the labrum and cartilage from progressive wear.",
        why_choose_us:
            "The hip preservation specialists at Mountain Spine & Orthopedics are leaders in treating FAI. Our Florida-based surgeons use advanced hip arthroscopy techniques to correct impingement and repair labral tears, helping you return to your sport or active lifestyle. With a complimentary MRI review and free second opinion, we provide the expert guidance you need.",
        schedule:
            "Don’t let hip pain sideline your active lifestyle. Schedule a consultation with Mountain Spine & Orthopedics for a complimentary MRI review and an expert second opinion to resolve your hip impingement and reclaim full motion.",
        slug: "hip-impingement",
        keywords: [
            "hip impingement",
            "femoroacetabular impingement (FAI)",
            "hip arthroscopy Florida",
            "groin pain treatment",
            "hip labral tear",
            "cam lesion",
            "pincer lesion",
            "hip preservation specialist",
        ],
        metaTitle:
            "Hip Impingement (FAI) | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Hip impingement (FAI) causes groin pain and stiffness. Our Florida hip specialists offer advanced hip arthroscopy to repair damage and preserve your joint.",
    },

    {
        title: "Loose Bodies",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/looseBodiescard.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/looseBody.png",
        body: "Loose bodies are fragments of cartilage or bone floating within a joint, which can cause painful catching, popping, and locking sensations.",
        detail: "Loose bodies are small fragments of cartilage or bone that break free and float within a joint, most commonly the knee, elbow, or ankle. They can result from a traumatic injury, osteoarthritis, or a condition called osteochondritis dissecans. While some fragments cause no issues, many can get lodged between the joint surfaces, triggering sharp pain, sudden locking episodes, and swelling. At Mountain Spine & Orthopedics, our specialists use high-resolution imaging to locate the fragment and guide a customized treatment strategy.",
        what_sym: "Patients often describe intermittent sharp pain, popping, or clicking in the joint. The most distinct symptom is transient locking, where the joint suddenly gets stuck and requires gentle manipulation to unlock, along with swelling after activity.",
        risk_fac:
            "Participation in high-impact sports, a history of intra-articular fractures or ligament injuries, and chronic osteoarthritis all elevate the likelihood of loose body formation. Certain conditions, such as synovial chondromatosis, can also cause the joint lining to produce multiple cartilage loose bodies.",
        diagnose:
            "Diagnosis combines a clinical exam with complimentary imaging. An MRI or dynamic ultrasound can map the fragment's characteristics, while a low-dose CT scan provides a clear definition of any mineralized (bony) bodies. These studies ensure an accurate diagnosis before any intervention.",
        treatment:
            "If a loose body is causing mechanical symptoms like locking, arthroscopic removal is the most effective treatment. Our surgeons use minimally invasive techniques to enter the joint, locate the fragment with a small camera, and extract it. This procedure is done on an outpatient basis and allows for a rapid recovery and return to activities.",
        pain_info:
            "Pain from a loose body typically strikes when the fragment wedges between the articulating surfaces of the joint, then subsides once it dislodges and begins floating again. By arthroscopically removing the offending body, our integrated care model provides rapid, lasting pain relief and protects the joint from further cartilage wear.",
        prevent:
            "Prevention focuses on promptly addressing underlying joint issues that can create loose bodies, such as treating cartilage and ligament injuries, maintaining balanced muscle strength for joint support, and modifying high-impact activities that place shear forces on the cartilage.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our sports medicine specialists are experts in the arthroscopic removal of loose bodies from the knee, shoulder, and ankle. Serving patients across Florida, we offer a complimentary MRI review and a free second opinion to confirm your diagnosis. Our minimally invasive approach ensures you can return to smooth, pain-free motion quickly.",
        schedule:
            "If sudden joint locking or sharp pain is disrupting your routine, schedule a consultation with Mountain Spine & Orthopedics. Benefit from a complimentary MRI review and a comprehensive second opinion to move forward with a clear plan to remove the loose bodies.",
        slug: "loose-bodies",
        keywords: [
            "loose bodies in knee",
            "joint locking and catching",
            "arthroscopic surgery Florida",
            "loose bodies in ankle",
            "osteochondritis dissecans",
            "cartilage fragment in joint",
            "knee arthroscopy",
            "sports medicine orthopedics",
        ],
        metaTitle:
            "Loose Bodies | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Loose bodies in a joint cause painful locking and catching. Our Florida specialists use minimally invasive arthroscopy to remove fragments and restore motion.",
    },
    {
        title: "Aging Management",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/agingM.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/agearti.png",
        body: "Our aging management programs focus on preserving bone density, joint health, and muscle strength to help you stay active, strong, and independent as you age.",
        detail: "As we age, natural changes like declining bone density (osteoporosis), cartilage wear (arthritis), and muscle loss (sarcopenia) can increase the risk of falls, fractures, and chronic pain. Our aging management program shifts orthopedic care from reactive to proactive, identifying vulnerabilities early to delay musculoskeletal decline. Our evaluation includes a physical exam, complimentary bone density (DEXA) scanning, and imaging to create a comprehensive picture of your bone, joint, and muscle health.",
        what_sym: "Common indicators of musculoskeletal aging include a gradual loss of height, new or worsening joint stiffness, decreased grip strength, a slower walking speed, and difficulty rising from chairs. Episodic low back or joint pain after routine tasks is also common.",
        risk_fac:
            "A genetic predisposition to osteoporosis, a sedentary lifestyle, smoking, inadequate protein or calcium intake, and hormonal changes like menopause can all accelerate age-related tissue degeneration.",
        diagnose:
            "Beyond imaging and DEXA scanning, our program utilizes laboratory tests to evaluate vitamin D status and inflammatory markers. Gait analysis and computerized balance testing can pinpoint biomechanical inefficiencies that increase injury risk. These complimentary assessments create a precise baseline against which we can measure your progress.",
        treatment:
            "Our integrated program combines resistance and balance training supervised by physical therapists, personalized nutrition plans, and medication review. When bone density is low, we may introduce pharmacologic therapies. For joints, we focus on preservation techniques like viscosupplementation or regenerative medicine to address symptomatic degeneration early, potentially delaying or avoiding joint replacement.",
        pain_info:
            "Age-related pain often stems from low-grade inflammation, cartilage thinning, or tendon stiffness. Our approach combines anti-inflammatory nutrition, targeted exercise, and, when appropriate, image-guided interventions to keep discomfort minimal and function high.",
        prevent:
            "This entire program is preventive. Participants commonly experience improved posture and balance, increased muscle mass, higher bone density scores, a reduced incidence of falls, and enhanced confidence to pursue active hobbies well into their later years.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, we believe in proactive care to help you age gracefully and strongly. Our Florida-based aging management program, led by orthopedic specialists, provides a comprehensive plan to maintain your mobility. With a complimentary DEXA or MRI review and a free second opinion, we can build a personalized strategy for your lifelong health.",
        schedule:
            "Take charge of your health as you age by scheduling a consultation with Mountain Spine & Orthopedics today. Enjoy a complimentary DEXA review and a thorough second opinion, then embark on a personalized aging management plan designed to keep you mobile, strong, and independent.",
        slug: "aging-management",
        keywords: [
            "aging management",
            "osteoporosis prevention Florida",
            "sarcopenia treatment",
            "healthy aging",
            "bone density screening",
            "fall prevention program",
            "geriatric orthopedics",
            "maintaining mobility",
        ],
        metaTitle:
            "Aging Management | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Our Florida aging management programs focus on bone density, joint health, and fall prevention to help you stay active, strong, and independent as you age.",
    },
    {
        title: "Neck Pain",
        tag: "Neck",
        card_img: "https://mountainspineortho.b-cdn.net/public/neckcard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/neckarti.webp",
        body: "Neck pain is a common condition that can range from a mild, dull ache to sharp, radiating pain that disrupts daily activities and sleep.",
        detail: "The neck, or cervical spine, supports the head's weight while allowing extensive motion, making it highly susceptible to conditions like muscle strain, degenerative disc disease, facet arthritis, and herniated discs. Modern issues like 'tech neck' from prolonged screen use also contribute to postural overload and pain. At Mountain Spine & Orthopedics, our evaluation includes a thorough physical exam and complimentary imaging to reveal the root cause of your pain and develop a personalized treatment plan.",
        what_sym: "Patients may experience a persistent ache or stiffness in the neck, sharp pain with sudden head movements, and headaches originating at the base of the skull. Pain, tingling, or numbness that radiates into the shoulder, arm, or hand is also common.",
        risk_fac:
            "Risk increases with prolonged forward head posture (tech neck), whiplash trauma, weak shoulder and core muscles, degenerative disc disease, arthritis, and smoking, which impairs disc nutrition.",
        diagnose:
            "Diagnosis starts with a detailed medical history and physical exam. We offer a complimentary MRI review and X-rays to pinpoint the cause of pain, such as a herniated disc or facet arthritis. In some cases, diagnostic selective nerve root or facet blocks may be used to confirm the precise pain generator.",
        treatment:
            "First-line care focuses on conservative treatments like physical therapy, ergonomic adjustments, and anti-inflammatory medication. Image-guided cervical epidural or facet injections can provide potent relief from inflammatory flares. When structural issues like a large herniated disc cause persistent pain or neurologic deficits, our surgeons may recommend minimally invasive decompression or fusion surgery.",
        pain_info:
            "Neck pain often worsens with prolonged static posture or stress and eases with gentle movement or heat therapy. Our integrative approach combines precise pain interventions, graded exercise, and posture retraining to break the cycle of inflammation and muscle guarding that sustains chronic discomfort.",
        prevent:
            "Preventive measures include maintaining ergonomic workstation setups with monitors at eye level, taking regular stretch breaks, strengthening shoulder and core muscles, practicing good sleep posture, and avoiding tobacco.",
        why_choose_us:
            "The spine specialists at Mountain Spine & Orthopedics are dedicated to resolving your neck pain. We provide every patient at our Florida clinics with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. Our comprehensive approach, from physical therapy to minimally invasive surgery, is designed to restore your comfort and function.",
        schedule:
            "If neck pain is limiting your activities, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a comprehensive second opinion to move forward with a personalized plan to conquer your neck pain.",
        slug: "neck-pain",
        keywords: [
            "neck pain",
            "neck pain treatment Florida",
            "stiff neck relief",
            "cervical pain",
            "radiating arm pain",
            "headache from neck pain",
            "tech neck treatment",
            "cervical spine specialist",
        ],
        metaTitle:
            "Neck Pain | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Suffering from neck pain or stiffness? Our Florida spine specialists diagnose the cause and offer advanced non-surgical and surgical treatments for relief.",
    },
    {
        title: "Degenerative Disc Disease Surgery",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/dddScard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/dddarti.png",
        body: "For severe degenerative disc disease, surgery such as spinal fusion or artificial disc replacement can restore stability and provide lasting pain relief.",
        detail: "When non-surgical treatments fail to relieve the relentless pain from Degenerative Disc Disease (DDD), surgery may be an option. Severe degeneration can cause vertebral collapse and nerve compression, leading to chronic pain and weakness. Surgical treatment aims to eliminate this mechanical pain by either removing the damaged disc and fusing the vertebrae (spinal fusion) or replacing it with an artificial disc. At Mountain Spine & Orthopedics, we conduct a meticulous evaluation to determine the most appropriate surgical solution for you.",
        what_sym: "This is a treatment, not a condition. Surgery is considered for patients with persistent axial or radicular pain that is unresponsive to at least six months of comprehensive non-operative therapy, progressive neurological deficits (like weakness or numbness), and a diminished quality of life that limits work, sleep, or mobility.",
        risk_fac:
            "Better surgical outcomes are correlated with being a non-smoker, having a healthy body weight, and strong core musculature. Risk factors such as osteoporosis, diabetes, or active infections must be optimized before surgery to ensure a solid fusion and smooth recovery.",
        diagnose:
            "Surgical candidacy is determined by a comprehensive evaluation. We provide a complimentary MRI review to clarify disc collapse and nerve impingement, while dynamic X-rays assess spinal movement and instability. These diagnostics guarantee that surgery targets the precise pain generator and that any implant selection aligns with your individual anatomy.",
        treatment:
            "Our surgical options include: Lumbar or Cervical Fusion, where the damaged disc is removed and replaced with a cage and bone graft to fuse the bones into one solid unit; Artificial Disc Replacement, where the disc is replaced with a mobile implant that preserves motion; and Minimally Invasive Decompression and Fusion, which uses smaller incisions for a quicker recovery.",
        pain_info:
            "Post-surgical soreness is managed with a multimodal analgesia plan and early mobilization. As the fusion matures or the artificial disc settles, the original nerve irritation and mechanical pain subsides, producing durable pain relief and renewed confidence in movement.",
        prevent:
            "Successful surgery can markedly improve pain and quality of life. Maintaining a strong core, practicing proper lifting mechanics, avoiding tobacco, and adhering to scheduled follow-ups can protect adjacent discs and extend the benefits of your surgery for years to come.",
        why_choose_us:
            "The board-certified surgeons at Mountain Spine & Orthopedics are leaders in motion-preserving and minimally invasive spine surgery for DDD. We offer patients across Florida a complimentary MRI review and a free second opinion to determine if you are a candidate for procedures like artificial disc replacement or minimally invasive fusion, guiding you confidently from decision to recovery.",
        schedule:
            "If unrelenting disc-related pain is limiting your life, schedule a surgical evaluation at Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a comprehensive second opinion to take the next step toward lasting relief.",
        slug: "degenerative-disc-disease-surgery",
        keywords: [
            "degenerative disc disease surgery",
            "spinal fusion Florida",
            "artificial disc replacement",
            "minimally invasive spine surgery",
            "ACDF surgery",
            "lumbar fusion",
            "DDD surgery",
            "spine surgeon",
        ],
        metaTitle:
            "Degenerative Disc Disease Surgery | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Explore surgery for Degenerative Disc Disease. Our Florida surgeons specialize in spinal fusion and artificial disc replacement for lasting pain relief.",
    },
    {
        title: "Pseudarthrosis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/Pseudarti.webp",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/Pseud.png",
        body: "Pseudarthrosis, or a non-union, occurs when a spinal fusion fails to heal into solid bone, resulting in persistent pain and instability.",
        detail: "Pseudarthrosis, also known as a non-union or 'false joint,' occurs when a surgical spinal fusion fails to heal into a solid piece of bone. This allows for persistent, abnormal motion at the fusion site, which can perpetuate pain and cause hardware to loosen or fail. At Mountain Spine & Orthopedics, our subspecialty surgeons combine advanced imaging, biologic therapies, and expert revision surgical techniques to achieve a solid fusion, relieve pain, and restore stability.",
        what_sym: "Patients often experience persistent, deep pain at the original fusion site long after surgery. Grinding or clicking sensations with movement, continued radiating nerve symptoms, and an inability to wean from a back brace are key signs of a non-union.",
        risk_fac:
            "Smoking is the single biggest risk factor for pseudarthrosis. Other factors include diabetes, malnutrition, chronic steroid use, vitamin D deficiency, and multilevel spinal fusions. These issues can interfere with the body's natural healing cascade.",
        diagnose:
            "Diagnosis hinges on persistent pain and imaging that shows an absence of bridging bone months after surgery. We use complimentary thin-slice CT scanning to assess for bone bridging and implant integrity. Dynamic radiographs may also be used to reveal motion at the intended fusion site.",
        treatment:
            "A persistent non-union requires revision surgery. This involves removing the old hardware, meticulously debriding the fibrous tissue from the 'false joint', and placing new bone graft material, often augmented with biologic enhancers like bone morphogenetic protein (BMP). New, more rigid hardware is then used to create a stable environment for the fusion to heal solidly.",
        pain_info:
            "The pain from a non-union arises from micromotion at the failed fusion site and the resulting irritation of surrounding soft tissues and nerves. By re-establishing rigid stability and invigorating the bone's biology, our integrated approach transforms this chronic pain into dependable support and renewed confidence in movement.",
        prevent:
            "To maximize the chance of a successful first-time fusion, it is critical to optimize risk factors. This includes strict smoking cessation, managing diabetes, ensuring adequate nutrition, and selecting the most stable fixation constructs during the initial surgery. Our team provides comprehensive peri-operative risk factor modification to maximize success.",
        why_choose_us:
            "Diagnosing and treating pseudarthrosis is a complex challenge that requires a high level of surgical expertise. The board-certified surgeons at Mountain Spine & Orthopedics specialize in revision spine surgery. For patients in Florida dealing with a failed fusion, we provide a complimentary CT or MRI review and a free second opinion to move forward with a personalized plan to achieve a solid, pain-free fusion.",
        schedule:
            "If lingering pain or instability persists after a spinal fusion, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary CT or MRI review and an expert second opinion to conquer pseudarthrosis and regain solid, pain-free function.",
        slug: "pseudarthrosis-revision-surgery",
        keywords: [
            "pseudarthrosis",
            "failed spinal fusion",
            "non-union spine surgery Florida",
            "revision spine surgery",
            "pain after back surgery",
            "bone graft for fusion",
            "spinal hardware failure",
            "complex spine surgeon",
        ],
        metaTitle:
            "Pseudarthrosis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Pseudarthrosis, or a failed spinal fusion, causes persistent pain. Our Florida revision spine surgeons specialize in treating non-unions for lasting relief.",
    },
    {
        title: "Shoulder Arthritis",
        tag: "Shoulder",
        card_img: "https://mountainspineortho.b-cdn.net/public/sacard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/saartib.jpg",
        body: "Shoulder arthritis is a degenerative condition that involves the breakdown of joint cartilage, leading to chronic pain, stiffness, and loss of motion.",
        detail: "Shoulder arthritis occurs when the smooth cartilage that covers the bones of the shoulder joint wears down, leading to pain, stiffness, and grinding. This degeneration can result from wear-and-tear, a past injury, or an inflammatory condition. At Mountain Spine & Orthopedics, our diagnosis includes a physical exam and advanced imaging to show joint space narrowing and bone spurs, which helps shape a personalized treatment strategy to restore motion and relieve pain.",
        what_sym: "Symptoms include a deep, aching pain in the shoulder that worsens with activity and at night. Patients also experience stiffness, an audible grinding or clicking with movement, and a decreased ability to lift the arm or rotate the shoulder.",
        risk_fac:
            "Key risk factors include aging, a history of previous shoulder injuries or dislocations, chronic overuse (common in overhead athletes), and inflammatory autoimmune disorders like rheumatoid arthritis. A chronic, untreated rotator cuff tear can also lead to a specific type of arthritis.",
        diagnose:
            "Our specialists use detailed imaging, including a complimentary MRI or ultrasound review when needed, to assess joint cartilage, the condition of the rotator cuff, and any inflammation. Combined with a thorough clinical evaluation, this ensures the most accurate diagnosis and an effective treatment plan.",
        treatment:
            "Initial management includes anti-inflammatory medications, physical therapy to preserve motion, and corticosteroid or biologic injections. When symptoms persist or joint damage is advanced, our surgeons offer advanced surgical options, including minimally invasive arthroscopy, partial joint resurfacing, or total shoulder replacement. A reverse shoulder replacement may be used if a large rotator cuff tear is also present.",
        pain_info:
            "Pain from shoulder arthritis often flares with repetitive activity or lifting and can become constant over time. Our comprehensive approach targets both the inflammation and the underlying joint mechanics to relieve pain and restore comfortable, functional motion.",
        prevent:
            "Avoiding repetitive overhead strain, maintaining shoulder strength and flexibility through a balanced exercise program, and treating minor shoulder injuries promptly can help delay the progression of arthritis.",
        why_choose_us:
            "At Mountain Spine & Orthopedics, our board-certified shoulder specialists provide expert care for arthritis, from advanced injections to state-of-the-art shoulder replacement surgery. For patients across Florida, we offer a complimentary MRI review and a free second opinion to create a plan that reduces your pain and improves your quality of life.",
        schedule:
            "If shoulder pain or stiffness is interfering with your routine, schedule a consultation with Mountain Spine & Orthopedics today. Enjoy a complimentary MRI review and a second opinion to take the first step toward lasting relief from shoulder arthritis.",
        slug: "shoulder-arthritis",
        keywords: [
            "shoulder arthritis",
            "shoulder pain treatment Florida",
            "total shoulder replacement",
            "reverse shoulder replacement",
            "shoulder joint pain",
            "osteoarthritis in shoulder",
            "shoulder specialist",
            "arthritic shoulder relief",
        ],
        metaTitle:
            "Shoulder Arthritis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Shoulder arthritis causes deep pain and stiffness. Our Florida shoulder specialists offer advanced treatments, including total shoulder replacement surgery.",
    },
    {
        title: "Shoulder Tendonitis",
        tag: "Shoulder",
        card_img: "https://mountainspineortho.b-cdn.net/public/stcard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/starti.png",
        body: "Shoulder tendonitis is an overuse injury that causes inflammation of the rotator cuff or biceps tendons, leading to pain and limited motion.",
        detail: "Shoulder tendonitis is the inflammation of the rotator cuff or biceps tendons, often caused by repetitive overhead motion, poor posture, or an acute injury. This common overuse condition can lead to significant pain and, if left untreated, may progress to a more serious tendon tear. At Mountain Spine & Orthopedics, our specialists use a detailed physical exam and complimentary imaging review to confirm inflammation and guide a targeted treatment approach to calm the tendon and restore function.",
        what_sym: "Symptoms include a sharp or aching pain at the front or side of the shoulder that typically worsens with lifting, reaching overhead, or sleeping on the affected side. The area may also be tender to the touch.",
        risk_fac:
            "Repetitive overhead activities from sports like swimming or occupations like painting are a major risk factor. Poor posture, weak shoulder-stabilizing muscles, advancing age, and the presence of bone spurs can also increase the risk of developing shoulder tendonitis.",
        diagnose:
            "Our specialists use focused physical tests, such as the Hawkins-Kennedy or Speed's Test, alongside complimentary imaging to detect inflammation, microtears, and any associated bursitis or impingement. This process ensures a clear diagnosis and allows for an effective, customized treatment plan.",
        treatment:
            "Initial treatment includes rest from the aggravating activity, anti-inflammatory medications, and physical therapy focused on balancing the muscles of the rotator cuff and scapula. An ultrasound-guided corticosteroid injection can provide rapid relief. For persistent cases, regenerative medicine options like platelet-rich plasma (PRP) therapy or minimally invasive arthroscopy may be used to treat chronic tendon damage.",
        pain_info:
            "Shoulder tendonitis pain is usually activity-related and feels sharp with movement, especially when reaching overhead. The pain may radiate into the upper arm and worsen at night. Our targeted therapies are designed to reduce inflammation, promote tendon healing, and restore pain-free strength.",
        prevent:
            "A proper warm-up before activity, maintaining shoulder flexibility and strength, making ergonomic modifications at work, and avoiding repetitive overhead tasks when possible can all help prevent tendonitis from developing or recurring.",
        why_choose_us:
            "The shoulder specialists at Mountain Spine & Orthopedics are experts in diagnosing and treating shoulder tendonitis. Serving patients across Florida, we offer a complimentary MRI review and a free second opinion. Our advanced, image-guided injections and regenerative medicine therapies can help you return to your regular activities safely and confidently.",
        schedule:
            "If shoulder pain or limited motion is disrupting your daily activities, schedule a consultation with Mountain Spine & Orthopedics today. Benefit from a complimentary MRI review and an expert second opinion to resolve your shoulder tendonitis and regain pain-free motion.",
        slug: "shoulder-tendonitis",
        keywords: [
            "shoulder tendonitis",
            "rotator cuff tendonitis",
            "biceps tendonitis",
            "shoulder pain when lifting arm",
            "shoulder impingement syndrome",
            "orthopedic specialist Florida",
            "PRP for tendonitis",
            "shoulder pain relief",
        ],
        metaTitle:
            "Shoulder Tendonitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Shoulder tendonitis from overuse causes pain and limited motion. Our Florida specialists offer PRP injections and other advanced treatments to restore function.",
    },
    {
        title: "Snapping Hip Syndrome",
        tag: "Lower Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/shscard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/shsarti.jpg",
        body: "Snapping hip syndrome is a condition where a tendon moves over a bone in the hip, creating an audible or palpable snapping sensation.",
        detail: "Snapping hip syndrome, or coxa saltans, is caused by a muscle or tendon catching and releasing as it moves across a bony prominence in the hip. It can be caused by the IT band on the outside of the hip or the iliopsoas tendon in the front. While often painless initially, the repeated friction can lead to painful inflammation (bursitis or tendonitis). At Mountain Spine & Orthopedics, we use dynamic ultrasound and a physical exam to confirm the source and create a plan to restore smooth hip motion.",
        what_sym: "The primary symptom is an audible or palpable snapping or popping in the hip during activities like walking, rising from a chair, or swinging the leg. Pain or discomfort may accompany the snapping, especially with repetitive movements.",
        risk_fac:
            "Athletes involved in repetitive hip motion, such as dancers, runners, and cyclists, are at a higher risk. Other risk factors include muscle tightness (especially of the hip flexors and IT band), leg length discrepancies, and weak hip-stabilizing muscles.",
        diagnose:
            "Our specialists use clinical movement assessments and complimentary dynamic ultrasound or MRI to identify the exact snapping structure. A dynamic ultrasound is particularly useful as it can visualize the tendon snapping in real-time. This precise diagnosis ensures that treatment is appropriately targeted.",
        treatment:
            "Most cases respond well to non-operative care, including activity modification and a physical therapy program focused on stretching tight structures (like the IT band and iliopsoas) and strengthening hip and core stabilizers. If conservative treatment fails or imaging reveals an intra-articular issue like a labral tear, minimally invasive hip arthroscopy may be used to correct the underlying problem.",
        pain_info:
            "While the snapping itself may be painless, the associated inflammation (tendonitis or bursitis) or an intra-articular cause can lead to a sharp or aching pain in the hip or groin. Addressing both the mechanical snapping and any resulting inflammation is essential for achieving long-lasting relief.",
        prevent:
            "Regular stretching, especially of the hip flexors, IT band, and gluteal muscles, is key to prevention. Strength training for the core and hip stabilizers, a proper warm-up before activity, and early treatment of any muscle tightness or imbalance can prevent the condition from developing or recurring.",
        why_choose_us:
            "Snapping hip syndrome can be a frustrating condition with multiple potential causes. The sports medicine specialists at Mountain Spine & Orthopedics use advanced diagnostic tools like dynamic ultrasound to pinpoint the issue. For patients in Florida, we offer a complimentary imaging review and a free second opinion to create a personalized plan to resolve the snapping and restore smooth, pain-free motion.",
        schedule:
            "If hip snapping or pain is disrupting your movement, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of a complimentary MRI or ultrasound review and an expert second opinion to move forward with a personalized treatment plan.",
        slug: "snapping-hip-syndrome",
        keywords: [
            "snapping hip syndrome",
            "coxa saltans",
            "hip popping treatment",
            "IT band syndrome",
            "iliopsoas tendonitis",
            "hip pain in athletes",
            "sports medicine Florida",
            "dynamic ultrasound",
        ],
        metaTitle:
            "Snapping Hip Syndrome | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc:
            "Snapping hip syndrome causes a painful popping in the hip joint. Our Florida specialists offer advanced diagnosis and treatment to restore smooth hip motion.",
    },
    // Final Batch: Refactoring conditions 41 through 57 to complete the file.
    // - Forums for Plantar Fasciitis, Bunions, Achilles Tendonitis, Flat Feet, Ankle Arthroscopy, Hammertoes, Diabetic Foot Ulcers, and Ankle Replacement were refactored with proper <h2> heading structure and <p>/<ul> tags.
    // - All other conditions in this batch were reviewed and confirmed compliant.
    // - This completes the refactoring for the entire file of 57 conditions.

    {
        title: "Spinal Bone Spurs",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/sbscard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/sbsarti.webp",
        body: "Spinal bone spurs, or osteophytes, are bony growths that form on the spine, often due to arthritis, and can cause pain by compressing nerves.",
        detail: "Spinal bone spurs (osteophytes) are bony projections that develop along the edges of vertebrae, typically as a response to the joint degeneration seen in osteoarthritis. While many bone spurs are asymptomatic, they can cause significant pain, stiffness, or radiating symptoms if they grow large enough to narrow the spinal canal or press on nearby nerves. At Mountain Spine & Orthopedics, our evaluation includes a detailed physical exam and complimentary imaging to identify the impact of bone spurs and guide treatment.",
        what_sym: "When symptomatic, bone spurs can cause localized neck or back pain, stiffness, and radiating pain, numbness, or weakness in the arms or legs. In severe cases, they can contribute to spinal stenosis, leading to issues with balance or walking.",
        risk_fac: "Age-related disc degeneration and osteoarthritis are the primary risk factors. Other contributing factors include previous spinal injuries, poor posture, repetitive spinal stress from manual labor or sports, and a genetic predisposition to joint degeneration.",
        diagnose: "In addition to a clinical evaluation, we offer a complimentary high-resolution MRI or CT review to pinpoint the size and location of bone spurs and assess their impact on spinal nerves. This precise diagnosis helps differentiate bone spur pain from other spinal conditions.",
        treatment: "Initial management may include anti-inflammatory medications, physical therapy focused on improving posture and core stabilization, and activity modification. Image-guided injections can reduce inflammation and relieve nerve pressure. When symptoms persist, our surgeons may recommend minimally invasive surgery to remove the bone spur and decompress the affected nerve root or spinal cord.",
        pain_info: "Pain from spinal bone spurs often presents as a dull, aching discomfort that can become a sharper, radiating pain during activity. Our approach aims to reduce the mechanical pressure and calm the nerve inflammation to provide long-term symptom relief.",
        prevent: "Maintaining good posture, engaging in regular low-impact exercise, managing weight, and treating underlying conditions like arthritis or disc degeneration early can help slow the progression of bone spur formation.",
        why_choose_us: "At Mountain Spine & Orthopedics, our spine specialists are experts at treating symptomatic bone spurs. We provide patients across Florida with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We utilize the full spectrum of non-surgical and minimally invasive surgical techniques to relieve your pain and restore mobility.",
        schedule: "If neck or back pain from bone spurs is impacting your life, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of a complimentary MRI review and an expert second opinion to move forward with a personalized care plan.",
        slug: "spinal-bone-spurs",
        keywords: [
            "spinal bone spurs",
            "osteophytes treatment",
            "bone spurs on spine",
            "neck pain relief Florida",
            "back pain from arthritis",
            "spinal decompression surgery",
            "nerve compression",
            "facet joint arthritis",
        ],
        metaTitle: "Spinal Bone Spurs | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Spinal bone spurs (osteophytes) can cause pain by pinching nerves. Our Florida spine specialists offer advanced non-surgical and surgical treatment options.",
    },
    {
        title: "Spinal Stenosis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/sscard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/ssarti.jpg",
        body: "Spinal stenosis is a narrowing of the spinal canal that can compress the spinal cord and nerves, causing pain, numbness, or weakness.",
        detail: "Spinal stenosis is a condition characterized by the narrowing of the spinal canal, most commonly in the neck (cervical) or lower back (lumbar) due to age-related changes like herniated discs, thickened ligaments, or bone spurs. This narrowing places pressure on the spinal cord or nerve roots, leading to symptoms that may worsen over time. At Mountain Spine & Orthopedics, our specialists use complimentary imaging and a neurologic exam to confirm the stenosis and develop a personalized treatment plan.",
        what_sym: "Lumbar stenosis often causes pain, cramping, or weakness in the legs with walking or standing, which improves with sitting. Cervical stenosis can cause neck pain, numbness in the arms or hands, and in severe cases, balance or coordination issues.",
        risk_fac: "The primary risk factor for spinal stenosis is aging. Other factors include arthritis, herniated discs, prior spinal surgery, spinal injuries, and a congenitally narrow spinal canal. Conditions like scoliosis can also contribute.",
        diagnose: "We use complimentary high-resolution imaging, such as an MRI and standing X-rays, to visualize the spinal canal, nerve roots, and surrounding structures. This allows us to confirm the location and severity of the stenosis and identify any associated spinal instability or disc issues, guiding the best course of treatment.",
        treatment: "Conservative care includes anti-inflammatory medications, physical therapy to improve strength and flexibility, and activity modification. Image-guided epidural steroid injections can effectively reduce inflammation and relieve nerve compression. If symptoms persist or neurologic function declines, our surgeons may recommend minimally invasive decompression surgery, such as a laminectomy, to create more space for the nerves.",
        pain_info: "Pain from spinal stenosis is often positional, worsening with standing or walking and improving with sitting or leaning forward (which opens up the spinal canal). Our treatments target both the mechanical compression and the resulting nerve inflammation to provide lasting relief and improve mobility.",
        prevent: "Staying physically active, maintaining good posture, avoiding smoking, and treating other spinal conditions early can help reduce the risk or slow the progression of spinal stenosis.",
        why_choose_us: "The spine specialists at Mountain Spine & Orthopedics are leaders in treating spinal stenosis. We provide patients throughout Florida with a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We utilize advanced, minimally invasive surgical techniques designed to minimize downtime and maximize long-term relief.",
        schedule: "If you're experiencing back or neck pain, numbness, or difficulty walking, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and an expert second opinion to manage your spinal stenosis and regain mobility.",
        slug: "spinal-stenosis",
        keywords: [
            "spinal stenosis",
            "lumbar spinal stenosis Florida",
            "cervical spinal stenosis",
            "leg pain when walking",
            "laminectomy surgery",
            "neurogenic claudication",
            "spinal decompression",
            "stenosis pain relief",
        ],
        metaTitle: "Spinal Stenosis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Spinal stenosis causes pain and numbness from nerve compression. Our Florida spine specialists offer advanced, minimally invasive surgery to provide lasting relief.",
    },
    {
        title: "Spine Deformities",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/sdcard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/sdarti.jpg",
        body: "Spine deformities like scoliosis and kyphosis involve abnormal spinal curves that can cause pain, poor posture, and functional limitations.",
        detail: "Spinal deformities are abnormal curvatures of the spine, such as scoliosis (sideways curve) or kyphosis (forward rounding), that can develop during adolescence or in adulthood due to degenerative changes. These curvatures can disrupt spinal balance, strain muscles, and compress nerves, leading to chronic pain and fatigue. At Mountain Spine & Orthopedics, our specialists use advanced imaging and a thorough physical exam to confirm the type and severity of the deformity and create a personalized treatment plan.",
        what_sym: "Common symptoms include visibly uneven shoulders or hips, a noticeable spinal curve, persistent back pain, and fatigue after standing. Severe deformities can lead to a loss of height or interfere with breathing.",
        risk_fac: "Risk factors include genetics, adolescent growth spurts, degenerative disc disease, osteoporosis, spinal trauma, and a history of previous spinal surgery. Neuromuscular conditions can also lead to the development of spinal deformities.",
        diagnose: "Our specialists use complimentary standing X-rays to measure the curvature angles (like the Cobb angle) and assess overall spinal balance. An MRI or CT scan may be used to detect any associated disc or nerve issues. Ongoing monitoring is often used to track curve progression, especially in younger patients.",
        treatment: "Non-surgical options include physical therapy to strengthen core muscles and, for growing adolescents, bracing to halt curve progression. For painful, progressive, or functionally limiting curves, our spine surgeons offer advanced surgical correction using spinal instrumentation and fusion techniques. These procedures are tailored to the curve type and are designed to improve alignment and reduce discomfort.",
        pain_info: "Pain from spine deformities can be mechanical, stemming from muscle fatigue and postural strain, or neurologic, resulting from compressed nerves. Our comprehensive approach addresses both sources with a combination of targeted therapies and, when necessary, structural realignment.",
        prevent: "Early detection in children and adolescents is key. For adults, maintaining strong core musculature, good bone health, and proper posture can help slow the progression or reduce the impact of degenerative spinal deformities.",
        why_choose_us: "Correcting a spinal deformity is a complex procedure that requires a high degree of expertise. The fellowship-trained surgeons at Mountain Spine & Orthopedics are specialists in this field. Serving patients across Florida, we offer a complimentary MRI or X-ray review and a free second opinion to create a plan that restores your natural alignment and balance.",
        schedule: "If you or a loved one is living with a spinal curvature, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary imaging review and a thorough second opinion to move forward with a plan to manage the deformity.",
        slug: "spine-deformities",
        keywords: [
            "spine deformity",
            "scoliosis treatment Florida",
            "kyphosis correction",
            "adult scoliosis surgery",
            "spinal fusion for scoliosis",
            "uneven shoulders",
            "spinal alignment",
            "complex spine surgeon",
        ],
        metaTitle: "Spine Deformities | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Spine deformities like scoliosis and kyphosis cause pain and postural issues. Our Florida surgeons offer advanced correction surgery to improve alignment.",
    },
    {
        title: "Synovitis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/syncard.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/synarti.jpg",
        body: "Synovitis is the inflammation of the synovial membrane that lines a joint, which causes pain, swelling, and stiffness.",
        detail: "Synovitis is the inflammation of the synovial membrane, the thin layer of tissue that lines joints and produces lubricating fluid. This inflammation can be caused by trauma, overuse, or an underlying autoimmune condition like <a href=\"/area-of-specialty/rheumatoid-arthritis\" class=\"text-blue-600 hover:underline\">rheumatoid arthritis</a>. The resulting pain, swelling, and excess fluid can damage joint cartilage over time if left untreated. At Mountain Spine & Orthopedics, our diagnosis begins with a physical exam, often supplemented by complimentary imaging to detect inflammation and guide treatment.",
        what_sym: "Key symptoms include joint pain, visible swelling, warmth over the affected joint, tenderness, and a reduced range of motion. When caused by an inflammatory condition, synovitis may affect multiple joints and worsen with inactivity.",
        risk_fac: "Autoimmune diseases such as rheumatoid arthritis or lupus are major risk factors. Other causes include overuse injuries, joint trauma, infections, and metabolic conditions like gout.",
        diagnose: "Our specialists use complimentary MRI and diagnostic ultrasound to assess synovial thickening and fluid buildup. If an underlying condition is suspected, blood tests may be ordered. For definitive diagnosis, a joint aspiration may be performed to analyze the synovial fluid for signs of crystals, infection, or inflammation.",
        treatment: "Treatment depends on the underlying cause. Nonsteroidal anti-inflammatory drugs (NSAIDs) and <a href=\"/treatments/anti-inflammatory-injections\" class=\"text-blue-600 hover:underline\">corticosteroid injections</a> are often used to reduce inflammation and restore function. If the cause is an autoimmune condition, specific medications like DMARDs may be prescribed. In persistent cases, a minimally invasive procedure called an <a href=\"/treatments/arthroscopic-knee-surgery\" class=\"text-blue-600 hover:underline\">arthroscopic synovectomy</a> may be recommended to remove the inflamed tissue.",
        pain_info: "The pain from synovitis is typically a dull, aching sensation but can intensify with activity or prolonged immobility. Our integrated approach aims to reduce the inflammation, protect the joint surfaces from further damage, and restore comfortable function.",
        prevent: "Prevention focuses on managing any underlying autoimmune or metabolic disorders, avoiding joint overuse, maintaining a healthy weight, and using proper biomechanics during physical activity to reduce stress on the joints.",
        why_choose_us: "At Mountain Spine & Orthopedics, our specialists are skilled at diagnosing the cause of synovitis, whether it's in the knee, shoulder, or another joint. For patients in Florida, we offer a complimentary MRI review and free second opinion to ensure an accurate diagnosis. Our goal is to reduce your joint inflammation and prevent long-term joint damage.",
        schedule: "If joint swelling, pain, or stiffness is limiting your lifestyle, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and a thorough second opinion to take the first step toward resolving synovitis.",
        slug: "synovitis",
        keywords: [
            "synovitis",
            "joint inflammation treatment",
            "knee synovitis",
            "rheumatoid arthritis Florida",
            "swollen painful joint",
            "arthroscopic synovectomy",
            "joint aspiration",
            "orthopedic pain management",
        ],
        metaTitle: "Synovitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Synovitis is joint inflammation causing pain and swelling. Our Florida specialists diagnose the cause and offer advanced care to reduce inflammation and pain.",
    },
    {
        title: "Tingling or Numbness in Extremities",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/tnecard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/tnearti.jpg",
        body: "Tingling or numbness in the arms, hands, legs, or feet is often a sign of nerve compression or irritation that requires expert evaluation. Common causes include <Link href='/area-of-specialty/spinal-stenosis'>Spinal Stenosis</Link> and <Link href='/area-of-specialty/herniated-disc'>Herniated Disc</Link>.",
        detail: "Tingling and numbness in the extremities, also known as paresthesia, can signal a problem with a nerve. This may be caused by nerve root compression in the spine (radiculopathy), peripheral nerve entrapment like carpal tunnel syndrome, or systemic conditions such as diabetes. At Mountain Spine & Orthopedics, our diagnosis starts with a thorough neurologic exam, advanced imaging, and electrodiagnostic testing (EMG/NCS) to identify the precise nerve involved and determine the cause.",
        what_sym: "Symptoms include a 'pins and needles' sensation, a loss of feeling, burning, or prickling in the hands, arms, legs, or feet. This can be accompanied by weakness, clumsiness, or a feeling that the limbs are 'falling asleep.'",
        risk_fac: "Common risk factors include spinal issues like herniated discs and stenosis, as well as diabetes, repetitive motion injuries, autoimmune diseases, and vitamin deficiencies. A previous trauma can also lead to nerve-related symptoms.",
        diagnose: "A comprehensive clinical and neurological evaluation is key. We provide a complimentary MRI review to check for spinal causes, and we use electrodiagnostic testing (EMG/NCS) to assess nerve health directly. These tools help us differentiate between a peripheral issue (like carpal tunnel) and a spinal nerve root compression (radiculopathy).",
        treatment: "Treatment is entirely guided by the underlying diagnosis. If the cause is spinal, care may include physical therapy, anti-inflammatory medications, and targeted epidural steroid injections. If a structural issue like a herniated disc is the cause, minimally invasive surgery may be considered. For peripheral issues, treatments like wrist splinting or carpal tunnel release may be recommended.",
        pain_info: "Tingling and numbness may be painless or accompanied by burning, aching, or sharp, shooting pain. Our approach targets both symptom relief and the underlying condition to protect long-term nerve health and improve daily function.",
        prevent: "Maintaining good posture, avoiding repetitive strain, managing blood sugar levels in the case of diabetes, and staying physically active can all help reduce the risk of developing nerve-related numbness and tingling.",
        why_choose_us: "At Mountain Spine & Orthopedics, our specialists are experts at getting to the root cause of numbness and tingling. We offer patients in Florida a comprehensive diagnostic workup, including a complimentary MRI review and a free second opinion. By identifying the exact source of your symptoms, we can provide the most effective treatment to restore healthy nerve function.",
        schedule: "If tingling or numbness is affecting your mobility or quality of life, schedule a consultation with Mountain Spine & Orthopedics today. Receive a complimentary MRI review and an expert second opinion to resolve your symptoms and restore healthy sensation.",
        slug: "tingling-or-numbness-in-extremities",
        keywords: [
            "tingling in hands and feet",
            "numbness in arms and legs",
            "radiculopathy treatment Florida",
            "paresthesia causes",
            "pinched nerve symptoms",
            "carpal tunnel syndrome",
            "nerve compression",
            "EMG test",
        ],
        metaTitle: "Tingling or Numbness in Extremities | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Tingling or numbness can signal nerve compression. Our Florida specialists offer advanced diagnostics like EMG to find the cause and provide effective treatment.",
    },
    {
        title: "Herniated Disc",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/hdarti.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/hdcard.webp",
        body: "A herniated disc, also known as a slipped or ruptured disc, occurs when a disc's soft core pushes out and presses on a nerve, causing significant pain.",
        detail: "A herniated disc occurs when the soft, gel-like nucleus of a spinal disc pushes through a tear in its tough outer wall, often compressing a nearby nerve root. This condition, which most commonly affects the lower back or neck, can cause localized pain as well as radiating pain, numbness, or weakness in the limbs. At Mountain Spine & Orthopedics, our evaluation includes a comprehensive exam and a complimentary MRI review to pinpoint the herniation and guide a personalized care plan.",
        what_sym: "Common symptoms include persistent back or neck pain, pain that radiates down an arm or leg (sciatica), and numbness or tingling in the extremities. Muscle weakness and difficulty with fine motor tasks can also occur.",
        risk_fac: "Risk factors include advancing age, occupations involving repetitive heavy lifting or bending, poor posture, smoking, and obesity. A genetic predisposition to disc degeneration can also play a significant role.",
        diagnose: "Diagnosis relies on a thorough clinical examination and imaging studies. We provide a complimentary MRI review, as MRI is the gold standard for visualizing the herniated disc and its effect on the nerves. Electromyography (EMG) and nerve conduction studies may also be used to assess the extent of nerve irritation and help guide treatment planning.",
        treatment: "Conservative management is often successful and may include targeted physical therapy, anti-inflammatory medications, and epidural steroid injections to reduce nerve inflammation. For patients who do not respond to non-surgical care or who have severe neurologic deficits, our surgeons may perform a minimally invasive microdiscectomy to relieve the nerve compression while preserving spinal stability.",
        pain_info: "Pain results from both the mechanical compression of the nerve root and the inflammatory chemicals released by the damaged disc material. Symptoms often worsen with sitting, bending, or coughing. Our multidisciplinary approach addresses both the inflammation and the structural issue to provide lasting relief.",
        prevent: "Patients can reduce their risk of herniation by maintaining good posture, practicing proper lifting techniques, engaging in regular core strengthening exercises, maintaining a healthy weight, and avoiding prolonged static positions.",
        why_choose_us: "The spine specialists at Mountain Spine & Orthopedics are leaders in treating herniated discs. Our Florida clinics offer a complimentary MRI review and a free second opinion to ensure an accurate diagnosis. We prioritize non-surgical and minimally invasive options like microdiscectomy to help you recover faster and with less pain.",
        schedule: "If you are experiencing back or neck pain with radiating limb symptoms, schedule a consultation with Mountain Spine & Orthopedics today. Benefit from a complimentary MRI review and a free second opinion to take the first step toward relief.",
        slug: "herniated-disc",
        keywords: [
            "herniated disc",
            "herniated disc treatment Florida",
            "slipped disc",
            "ruptured disc",
            "sciatica pain relief",
            "radiculopathy",
            "microdiscectomy surgery",
            "non-surgical spine care",
        ],
        metaTitle: "Herniated Disc | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "A herniated disc causes back or neck pain and radiating symptoms. Our Florida spine specialists offer advanced, minimally invasive treatments for lasting relief.",
    },
    {
        title: "Rheumatoid Arthritis",
        tag: "Spine",
        card_img: "https://mountainspineortho.b-cdn.net/public/racard.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/raarti.jpeg",
        body: "Rheumatoid arthritis (RA) is a chronic autoimmune disorder where the body's immune system attacks its own joints, causing inflammation, pain, and damage.",
        detail: "Rheumatoid arthritis (RA) is a systemic autoimmune disease that primarily attacks the synovial lining of joints, causing chronic inflammation, pain, swelling, and progressive joint damage. It most often affects the small joints of the hands and feet but can also involve the spine and other organs. At Mountain Spine & Orthopedics, our specialists use advanced diagnostics to confirm RA, gauge disease activity, and create a comprehensive treatment plan to prevent irreversible joint erosion.",
        what_sym: "Patients with RA typically experience persistent joint pain, swelling, warmth, and prolonged morning stiffness lasting more than an hour. Symptoms are often symmetrical (affecting both sides of the body) and may include systemic issues like fatigue and fever.",
        risk_fac: "Risk factors for rheumatoid arthritis include a family history of autoimmune disease, specific genetic markers, and being female. Environmental factors like smoking and obesity can also contribute to disease onset and progression.",
        diagnose: "Diagnosis follows established criteria, combining clinical findings with serologic markers. We perform comprehensive blood tests for rheumatoid factor and anti-CCP antibodies, and we use complimentary high-resolution MRI or ultrasound to detect early joint inflammation and erosions. Early detection allows for timely initiation of therapy to prevent irreversible joint damage.",
        treatment: "Treatment focuses on achieving remission or low disease activity through early and aggressive therapy with medications known as DMARDs. Biologic agents and other targeted molecules may be introduced for more severe cases. Adjunctive measures include physical therapy to preserve function and, in advanced cases with severe joint destruction, collaboration with our orthopedic surgeons to evaluate for joint replacement.",
        pain_info: "The inflammatory joint pain in RA arises from the autoimmune attack on the synovial lining and the release of inflammatory chemicals. The pain often worsens after periods of rest and improves with gentle movement. Our multidisciplinary team addresses both the inflammation and the pain through tailored pharmacologic regimens and supportive therapies.",
        prevent: "While there is no cure for RA, early intervention can slow progression. Patients can improve outcomes by quitting smoking, maintaining a healthy weight, and engaging in low-impact exercises to preserve joint mobility. Diligent management of the disease with a specialist is crucial.",
        why_choose_us: "At Mountain Spine & Orthopedics, our specialists work as part of a multidisciplinary team to provide comprehensive management of rheumatoid arthritis. For patients across Florida, we offer expert diagnosis, including complimentary imaging reviews and free second opinions, and state-of-the-art treatment plans designed to control your RA and help you reclaim an active, pain-free life.",
        schedule: "If you are experiencing persistent joint pain, stiffness, or swelling, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of our complimentary MRI review and free second opinion to begin a personalized treatment plan.",
        slug: "rheumatoid-arthritis",
        keywords: [
            "rheumatoid arthritis",
            "RA treatment Florida",
            "autoimmune arthritis",
            "joint pain and swelling",
            "rheumatologist care",
            "DMARD therapy",
            "biologic agents for RA",
            "arthritis specialist",
        ],
        metaTitle: "Rheumatoid Arthritis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Rheumatoid Arthritis causes joint pain, swelling, and damage. Our Florida specialists offer advanced diagnosis and treatment to manage RA and preserve joints.",
    },
    {
        title: "Tennis Elbow",
        tag: "Hand",
        card_img: "https://mountainspineortho.b-cdn.net/public/tecard.jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/tearti.jpg",
        body: "Tennis elbow, or lateral epicondylitis, is an overuse injury from repetitive wrist and arm motions that causes pain on the outside of the elbow.",
        detail: "Tennis elbow (lateral epicondylitis) is a painful condition caused by overuse of the tendons on the outside of the elbow. Repetitive wrist and arm motions can lead to micro-tears and degeneration in the tendon, causing pain and weakness. Though its name comes from racquet sports, it commonly affects anyone engaged in repetitive gripping tasks. At Mountain Spine & Orthopedics, our evaluation includes a focused physical exam and may use imaging to visualize the tendon pathology and guide treatment.",
        what_sym: "Patients commonly report pain and tenderness on the bony knob on the outside of the elbow. This pain can radiate down the forearm and may be accompanied by weakness when gripping objects, shaking hands, or turning a doorknob.",
        risk_fac: "Risk factors include repetitive wrist extension movements found in sports and certain occupations (like plumbing or painting), poor ergonomic setup, and being between the ages of 35 and 55. Smoking can also impair the tendon's ability to heal.",
        diagnose: "Diagnosis relies on a clinical assessment and physical tests like Cozen’s test to reproduce the symptoms. A high-resolution ultrasound offers a dynamic evaluation of the tendon structure, while a complimentary MRI review can provide detailed visualization of any tears or associated joint pathology if needed.",
        treatment: "Conservative management is successful in most cases and includes activity modification, using a counterforce brace, and physical therapy emphasizing eccentric strengthening of the wrist extensors. For persistent symptoms, our specialists may recommend image-guided interventions such as platelet-rich plasma (PRP) injections to enhance tendon healing. Surgery is rarely required.",
        pain_info: "The pain in tennis elbow stems from both the mechanical overload of the tendon fibers and the inflammatory mediators released during the degenerative process. This sensitizes local nerve endings, amplifying pain with even simple wrist movements.",
        prevent: "To prevent tennis elbow, patients should use proper technique and equipment in sports, incorporate a thorough warm-up and stretching routine, perform regular forearm strengthening exercises, and maintain optimal workstation ergonomics.",
        why_choose_us: "The orthopedic specialists at Mountain Spine & Orthopedics are experts in treating overuse injuries like tennis elbow. We provide patients across Florida with accurate diagnoses, often aided by a complimentary imaging review, and advanced, non-surgical treatments like PRP injections. Our goal is to relieve your pain and restore full, pain-free function.",
        schedule: "If you are experiencing persistent lateral elbow pain or weakness, schedule a consultation with Mountain Spine & Orthopedics today. Take advantage of our complimentary MRI review and free second opinion to begin an effective treatment plan.",
        slug: "tennis-elbow",
        keywords: [
            "tennis elbow",
            "lateral epicondylitis",
            "outer elbow pain",
            "elbow pain treatment Florida",
            "PRP injection for tennis elbow",
            "golfer's elbow",
            "overuse injury",
            "orthopedic hand specialist",
        ],
        metaTitle: "Tennis Elbow | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Tennis elbow causes outer elbow pain from overuse. Our Florida specialists offer advanced non-surgical treatments, including PRP injections, to restore function.",
    },
    {
        title: "Plantar Fasciitis",
        tag: "Foot",
        card_img: "https://mountainspineortho.b-cdn.net/public/pfcard.webp",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/pfarti.jpg",
        body: "Plantar fasciitis is a common condition causing stabbing heel pain, especially with the first steps in the morning, due to inflammation of the plantar fascia.",
        detail: "Plantar fasciitis is one of the most common causes of heel pain, occurring when the thick band of tissue (plantar fascia) that runs across the bottom of your foot becomes inflamed. This ligament acts as a shock absorber, and repetitive stress can cause tiny tears, leading to pain and stiffness. At Mountain Spine & Orthopedics, our foot specialists use a precise diagnosis to create an evidence-based therapy plan to relieve your discomfort and help you stay active.",
        what_sym: "Patients typically report a sharp, stabbing pain at the bottom of the heel that is most intense with the first steps in the morning or after long periods of rest. The pain may improve with movement but often returns after prolonged standing.",
        risk_fac: "Key risk factors include having flat feet or high arches, tight calf muscles, a sudden increase in activity, obesity, and occupations that require prolonged standing on hard surfaces. Improper or worn-out footwear is also a major contributor.",
        diagnose: "Diagnosis is primarily clinical, based on your history and a physical exam demonstrating point tenderness at the plantar fascia's origin on the heel bone. We may use a complimentary ultrasound or MRI review to assess fascia thickness and rule out alternative diagnoses in atypical or refractory cases.",
        treatment: "Most patients improve with conservative care, which includes activity modification, specific stretching exercises for the plantar fascia and calf muscles, and using custom orthotics or supportive shoes. For persistent cases, our specialists may recommend image-guided corticosteroid injections, platelet-rich plasma (PRP), or extracorporeal shockwave therapy (ESWT) to promote healing. Surgery is rarely needed.",
        pain_info: "The pain arises from both the mechanical overload of the fascia and the inflammatory response to micro-tearing. The hallmark morning pain is due to the fascia tightening overnight. Our treatment plans address both the inflammation and the underlying biomechanical contributors to deliver lasting relief.",
        prevent: "Preventive strategies include maintaining a healthy weight, choosing supportive footwear, performing daily stretching of the Achilles tendon and plantar fascia, and gradually increasing activity intensity. Using orthotic inserts can also be beneficial.",
        why_choose_us: "The foot and ankle specialists at Mountain Spine & Orthopedics are experts in treating plantar fasciitis. For patients across Florida, we provide an accurate diagnosis, often aided by a complimentary imaging review, and create a comprehensive, personalized plan. Our goal is to relieve your heel pain and keep you active without interruption.",
        schedule: "If you are experiencing stabbing heel pain, schedule a consultation with Mountain Spine & Orthopedics today. Benefit from our complimentary MRI review and free second opinion as we create a personalized plan to relieve your plantar fasciitis.",
        slug: "plantar-fasciitis",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is Plantar Fasciitis?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Plantar Fasciitis is a degenerative inflammatory condition of the
                            plantar fascia. Repetitive overload causes tiny tears at the
                            origin of the fascia on the heel bone, leading to a cycle of
                            inflammation, scarring, and further degeneration. Pain is
                            classically described as a knife like sensation in the heel with
                            the first few steps after waking or after extended sitting. As the
                            fascia warms up, pain may ease, only to return after prolonged
                            standing or activity. Identifying the true source of heel pain is
                            essential because nerve entrapment, fat pad atrophy, and systemic
                            arthritis can mimic plantar fasciitis and require different
                            treatment strategies.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px] w-full h-full ">
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/Orthopedic%20Website.jpg"
                                }
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px] w-full ">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Plantar Fasciitis
                        </h2>
                        <div
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Sharp or stabbing heel pain with the first steps in the morning
                                </li>
                                <li>
                                    Pain that improves after a few minutes of walking but returns
                                    with prolonged standing
                                </li>
                                <li>Tenderness and swelling near the bottom of the heel</li>
                                <li>
                                    Increased discomfort when climbing stairs or after intense
                                    exercise
                                </li>
                                <li>A tight feeling in the calf or Achilles region</li>
                                <li>
                                    Difficulty walking barefoot on hard floors. When left untreated,
                                    plantar fasciitis can alter walking mechanics and trigger
                                    secondary problems such as knee, hip, and lower back strain.
                                </li>
                            </ul>
                        </div>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={"https://mountainspineortho.b-cdn.net/fixplantf.jpg"}
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Plantar Fasciitis
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Early stage – intermittent heel pain that flares after new
                            activities or long days on the feet. Progressive stage – daily pain,
                            tightening of the calf and arch, and swelling near the heel pad.
                            <br />
                            <br /> Chronic stage – persistent inflammation, thickening of the
                            fascia, heel spur formation, and compensatory gait changes.
                            <br />
                            <br /> Recognizing your stage enables the care team at Mountain
                            Spine & Orthopedics to tailor treatments from basic stretching to
                            advanced regenerative options exactly to your needs.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Plantar Fasciitis Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Initial therapy focuses on reducing inflammation and restoring
                            flexibility. Key components include doctor guided stretching,
                            massage of the plantar fascia and calf, ice massage, and
                            nonsteroidal anti inflammatory medication. Night splints hold the
                            foot in gentle dorsiflexion during sleep, preventing painful
                            morning tightness. Custom orthotic inserts cushion the heel and
                            support the arch, while targeted physical therapy strengthens
                            intrinsic foot muscles for long term stability.
                            <br />
                            <br />
                            When conservative care does not provide lasting relief within
                            three to six months, advanced modalities such as extracorporeal
                            shockwave therapy, platelet rich plasma injections, or ultrasound
                            guided needle tenotomy can stimulate tissue healing. Surgical
                            release of the plantar fascia is reserved for rare, stubborn cases
                            and is performed using minimally invasive techniques that allow
                            rapid return to weight bearing with a structured rehabilitation
                            program.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Persistent heel pain should not sideline your lifestyle. Early
                            professional intervention can stop Plantar Fasciitis from
                            progressing and return you to comfortable movement. <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br /> Our dedicated specialists will evaluate your symptoms,
                            provide an accurate diagnosis, and craft a comprehensive treatment
                            plan that relieves pain, restores function, and gets you back on
                            your feet with confidence.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(1).jpg",
        keywords: [
            "plantar fasciitis",
            "heel pain treatment Florida",
            "foot arch pain",
            "morning heel pain",
            "orthotics for plantar fasciitis",
            "heel spur",
            "foot and ankle specialist",
            "ESWT for plantar fasciitis",
        ],
        metaTitle: "Plantar Fasciitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Plantar fasciitis causes stabbing heel pain. Our Florida foot and ankle specialists offer advanced, effective treatments to relieve pain and restore mobility.",
    },
    {
        title: "Bursitis",
        tag: "Knee",
        card_img: "https://mountainspineortho.b-cdn.net/public/bcard.jpeg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/barti.webp",
        body: "Bursitis is the inflammation of a bursa, a small, fluid-filled sac near a joint, which causes localized pain, swelling, and tenderness.",
        detail: "Bursitis is the inflammation of a bursa, one of the small, fluid-filled sacs that cushion the bones, tendons, and muscles near your joints. Repetitive motions, prolonged pressure, or direct trauma can trigger this inflammation, most commonly in the shoulder, elbow, hip, or knee. At Mountain Spine & Orthopedics, our specialists use a focused physical exam and, when needed, complimentary imaging to confirm the diagnosis and guide treatment to relieve pain and restore function.",
        what_sym: "Symptoms of bursitis include localized sharp or aching pain, visible swelling, warmth, and tenderness over the affected joint. The pain often intensifies with specific activities, such as leaning on an elbow or kneeling.",
        risk_fac: "Risk factors include occupations or hobbies involving repetitive or prolonged pressure on a joint, such as gardening, tiling, or leaning on a desk. Overuse from sports, direct trauma, and underlying inflammatory conditions like gout or rheumatoid arthritis also increase the risk.",
        diagnose: "Diagnosis is primarily clinical, based on your history and a physical exam demonstrating point tenderness. We may use a complimentary ultrasound review to visualize the fluid collection and guide an aspiration or injection. An MRI can provide a more detailed assessment of adjacent structures and rule out other causes of pain.",
        treatment: "Most cases of non-infectious bursitis respond to conservative care, including rest, ice, compression, and anti-inflammatory drugs (NSAIDs). If the fluid collection persists or the pain is severe, our specialists can perform an ultrasound-guided bursal aspiration and corticosteroid injection to accelerate recovery. Septic (infected) bursitis requires aspiration for culture and treatment with antibiotics.",
        pain_info: "Pain in bursitis originates from the stretching and irritation of the inflamed bursal lining. Mechanical pressure and movement stimulate pain receptors, leading to sharp or throbbing discomfort that can limit daily activities. Our goal is to reduce this inflammation quickly and effectively.",
        prevent: "Preventive measures include avoiding prolonged pressure on vulnerable joints by using protective padding for kneeling or leaning. Practicing proper ergonomics and body mechanics, and strengthening the muscles surrounding the joint can also help prevent recurrence.",
        why_choose_us: "The orthopedic specialists at Mountain Spine & Orthopedics are experts in diagnosing and treating bursitis. Serving patients across Florida, we utilize advanced, image-guided procedures to aspirate fluid and deliver medication precisely. With a complimentary imaging review and a free second opinion, we can develop a tailored plan to treat your bursitis and help you return to pain-free movement.",
        schedule: "If you are experiencing persistent joint pain, swelling, or stiffness, schedule a consultation with Mountain Spine & Orthopedics today. Benefit from our complimentary MRI review and free second opinion to develop a tailored plan to diagnose and treat your bursitis.",
        slug: "bursitis",
        keywords: [
            "bursitis",
            "hip bursitis treatment Florida",
            "knee bursitis",
            "elbow bursitis",
            "shoulder bursitis",
            "bursa sac inflammation",
            "joint swelling and pain",
            "corticosteroid injection",
        ],
        metaTitle: "Bursitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Bursitis causes localized joint pain and swelling. Our Florida specialists offer expert diagnosis and advanced, image-guided injections for effective relief.",
    },
    {
        title: "Bunions (Hallux Valgus)",
        tag: "Foot",
        card_img: "https://mountainspineortho.b-cdn.net/public/Bunions%20(1).jpg",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/bunions2.png",
        body: "A bunion is a painful bony bump that develops at the base of the big toe as it drifts inward, causing deformity and difficulty with footwear.",
        detail: "A bunion, medically known as hallux valgus, is a deformity that occurs when the big toe drifts inward toward the other toes, causing the joint at its base to enlarge and protrude. While often aggravated by tight footwear, bunions typically stem from inherited foot structure and biomechanical imbalances. At Mountain Spine & Orthopedics, our specialists diagnose and treat bunions with personalized plans to relieve pain, correct alignment, and help you stay active.",
        what_sym: "Key symptoms include a visible bony prominence on the side of the big toe, pain and tenderness around the joint, redness and inflammation, and difficulty finding shoes that fit comfortably due to the bump.",
        risk_fac: "Primary risk factors include a family history of bunions, as foot type and structure are often inherited. Wearing shoes that are too tight, narrow, or have high heels significantly increases the risk. Individuals with certain arthritic conditions or those with flat feet are also more susceptible.",
        diagnose: "Diagnosing a bunion involves a physical examination of the foot and a review of your symptoms. To fully assess the deformity, we use weight-bearing X-rays to determine the alignment of the bones and detect any associated arthritis. This imaging is crucial for planning the appropriate treatment strategy.",
        treatment: "Conservative treatments are often the first approach and include wearing wider shoes, using bunion pads, and custom orthotic devices to improve foot mechanics. If conservative measures fail or the bunion is severe, our surgeons may recommend a bunionectomy. We utilize state-of-the-art procedures to realign the bone, repair soft tissues, and provide lasting relief.",
        pain_info: "Pain from bunions primarily originates from the inflamed joint due to pressure and misalignment. It can range from a dull ache to a sharp, intense pain, especially when wearing shoes. The overlying bursa can also become inflamed (bursitis), contributing to the tenderness and swelling.",
        prevent: "While a genetic predisposition cannot be changed, certain measures can help prevent bunions or slow their progression. Choosing well-fitting footwear with a wide toe box and low heels is the most crucial step. If you have flat feet or other structural issues, using orthotics can help maintain proper alignment.",
        why_choose_us: "The foot and ankle surgeons at Mountain Spine & Orthopedics are leaders in bunion correction. We offer patients in Florida a full range of treatments, from custom orthotics to advanced, minimally invasive surgical techniques. With a complimentary X-ray review and a free second opinion, we can create a personalized plan to get you back on your feet comfortably.",
        schedule: "If you are struggling with bunion pain or a deformity that affects your daily life, contact Mountain Spine & Orthopedics. Our specialists can provide a thorough evaluation and discuss personalized treatment pathways to provide relief.",
        slug: "bunions-hallux-valgus",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What are Bunions?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            A bunion is a structural misalignment of the first
                            metatarsophalangeal joint where the first metatarsal bone deviates
                            outward and the big toe angles inward. This creates an outward
                            bulge that rubs against footwear and concentrates pressure on the
                            joint surface, leading to inflammation, bursitis, and arthritic
                            change. Patients typically report localized soreness, swelling,
                            burning sensations, and difficulty finding comfortable shoes.
                            Accurate assessment of bunion size, joint flexibility, and
                            underlying bone shape guides the most effective treatment
                            strategy.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px] w-full h-full">
                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/bunions.png"}
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Bunions
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Most patients first notice a visible bump and intermittent
                            soreness at the base of the big toe. With time, persistent joint
                            pain develops, often described as a burning or throbbing sensation
                            that worsens in snug footwear. Localized skin may appear shiny and
                            warm because of underlying bursitis. The big toe gradually
                            overlaps or under-rides the second toe, increasing crowding and
                            making ordinary activities such as running, hiking, or even
                            shopping arduous. Advanced bunions can cause numbness along the
                            inside of the toe or lead to tingling within the forefoot as nerve
                            branches become compressed. Prompt evaluation is crucial because
                            early intervention can slow or even halt further joint damage.
                        </p>
                        <div className="mt-[40px] space-y-[40px] flex flex-col">
                            <OutlinedButton text="Find a Treatment" />
                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/bunion3.png"}
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Bunion Development
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Bunion progression typically follows a predictable path. In the
                            mild stage, the joint angle deviates slightly, and discomfort
                            appears only during extended activity. During the moderate stage,
                            the bump becomes visually obvious, pain occurs daily, and the big
                            toe begins to rotate. In the severe stage, pronounced angular
                            deviation, joint stiffness, and arthritic change limit walking
                            distance and shoe options to wide or custom designs. Recognizing
                            your stage allows the team at Mountain Spine & Orthopedics to match
                            therapies from conservative bracing to surgical realignment
                            precisely to your needs and lifestyle goals.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Bunion Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Many bunions respond well to conservative management when
                            addressed early. Wider toe-box shoes, silicone separators worn at
                            night, and custom orthotics redistribute weight and slow
                            progression. Targeted stretching and strengthening exercises
                            restore flexor-extensor balance in the foot, while nonsteroidal
                            anti-inflammatory medication eases flare-ups. When these measures
                            no longer control pain or when deformity interferes with normal
                            footwear, surgical correction becomes the gold standard. <br />
                            <br />
                            Our surgeons perform minimally invasive percutaneous osteotomies
                            as well as state-of-the-art Lapidus and scarf-type procedures that
                            realign the metatarsal, restore joint congruency, and stabilize
                            the foot with low-profile titanium hardware. Patients often bear
                            weight in a protective postoperative shoe within days and resume
                            athletic activities within weeks, guided by our in-house physical
                            therapy team.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Persistent foot pain, swelling, and visible toe deviation do not
                            have to define your day-to-day life. Early, expert-guided
                            treatment can halt bunion progression and restore comfortable
                            motion.
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our specialists will evaluate your symptoms, provide a
                            personalized diagnosis, and craft a comprehensive plan that
                            relieves pain, realigns your toe, and gets you back on your feet
                            without compromise to your lifestyle or goals.
                        </p>
                    </div>
                ),
            },
        ],
        side_img: "https://mountainspineortho.b-cdn.net/bunions2.png",
        keywords: [
            "bunion",
            "hallux valgus",
            "bunion surgery Florida",
            "bunionectomy",
            "foot pain relief",
            "painful bony bump on foot",
            "foot and ankle surgeon",
            "minimally invasive bunion surgery",
        ],
        metaTitle: "Bunions (Hallux Valgus) | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Bunions cause a painful bony bump on the big toe. Our Florida foot surgeons offer advanced, minimally invasive bunion surgery to correct the deformity.",
    },
    {
        title: "Achilles Tendonitis",
        tag: "Foot",
        card_img: "https://mountainspineortho.b-cdn.net/public/tendo.png",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/tendo2.jpeg",
        body: "Achilles tendonitis is a common overuse injury of the tendon connecting the calf muscles to the heel, causing pain and stiffness at the back of the ankle.",
        detail: "Achilles tendonitis is an overuse injury that occurs when the Achilles tendon, the strong cord connecting your calf muscles to your heel, becomes irritated and inflamed from repetitive stress. This condition is common in active adults and can lead to significant pain and stiffness. At Mountain Spine & Orthopedics, our foot and ankle specialists provide state-of-the-art diagnostics and comprehensive treatment plans to calm inflammation, rebuild strength, and protect you from future injury.",
        what_sym: "Symptoms include pain and stiffness along the back of the Achilles tendon, especially in the morning or after periods of rest. The pain typically worsens with activity, and there may be swelling or tenderness at the back of the heel.",
        risk_fac: "Risk factors include a sudden increase in the intensity or amount of physical activity, having tight calf muscles, and wearing improper footwear. Individuals with flat arches or bone spurs on the heel can also be more susceptible to Achilles tendonitis.",
        diagnose: "Diagnosis usually involves a physical exam where our specialist will assess the tendon for pain, swelling, and thickening. We may use a complimentary ultrasound or MRI review to get a more detailed view of the tendon and assess the extent of the damage or degeneration.",
        treatment: "Treatment focuses on reducing pain and inflammation. The RICE protocol (Rest, Ice, Compression, Elevation) and physical therapy are crucial. Therapy typically includes stretching and eccentric strengthening exercises like heel drops. If conservative treatments are not effective, we offer advanced options like extracorporeal shock wave therapy (ESWT) or platelet-rich plasma (PRP) injections.",
        pain_info: "Pain from Achilles tendonitis is typically felt along the back of the lower leg, near the heel. It often begins as a mild ache after activity and can gradually worsen to a more severe, burning pain. Morning pain and stiffness are characteristic symptoms.",
        prevent: "Prevention involves several key strategies: gradually increase your activity level, always warm up before exercising, and perform regular stretching for your calf muscles and Achilles tendons. Wearing appropriate, supportive footwear and strengthening your calf muscles are also crucial.",
        why_choose_us: "The foot and ankle specialists at Mountain Spine & Orthopedics are experts in treating Achilles tendonitis. We provide patients across Florida with a complimentary imaging review and a free second opinion. Our goal is to use the most effective conservative and regenerative treatments to help you avoid surgery and return to your active life.",
        schedule: "If ongoing Achilles tendon pain is limiting your activities, contact Mountain Spine & Orthopedics to arrange a consultation. We provide thorough diagnostic services and can discuss your path to a smooth and effective recovery.",
        slug: "achilles-tendonitis",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is Achilles Tendonitis?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Achilles Tendonitis is a degenerative inflammatory condition
                            resulting from cumulative overload. Two primary patterns occur:
                            insertional tendonitis, which affects the lower 2 cm where the
                            tendon anchors into the heel bone, and mid-substance tendonitis,
                            which involves the region 2–6 cm above the heel. In both cases,
                            collagen fibers lose their organized alignment, forming
                            thickened, painful nodules. Patients usually describe morning
                            “start-up pain” that improves with gentle movement but returns
                            after intense exercise or long periods on their feet. Properly
                            distinguishing Achilles Tendonitis from conditions such as
                            Haglund’s deformity, retrocalcaneal bursitis, or partial tendon
                            rupture is essential to selecting the right treatment.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/achilles.jpg"}
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Achilles Tendonitis
                        </h2>
                        <div
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Persistent or burning pain at the back of the heel or lower
                                    calf, worse with activity
                                </li>
                                <li>
                                    Morning stiffness that loosens after a few minutes of walking
                                </li>
                                <li>
                                    Localized swelling or a thickened “cord-like” feeling in the
                                    tendon
                                </li>
                                <li>Tender nodules or bumps that hurt when squeezed</li>
                                <li>Pain when rising on tiptoes or during uphill running</li>
                                <li>
                                    A creaking or crackling sensation (crepitus) during ankle
                                    movement
                                </li>
                                <li>
                                    Limited ankle dorsiflexion (when the foot flexes upward) due to
                                    tight calf muscles. Ignoring these signs can lead to tendon
                                    degeneration (tendinosis) and elevate the risk of full rupture—a
                                    surgical emergency.
                                </li>
                            </ul>
                        </div>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={"https://mountainspineortho.b-cdn.net/tendon2.jpg"}
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Achilles Tendonitis
                        </h2>
                        <div
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            <ol className="list-decimal list-inside space-y-2">
                                <li>
                                    Reactive Stage – Sudden overload triggers temporary swelling
                                    of the tendon sheath; pain appears after an unusually hard
                                    workout.
                                </li>
                                <li>
                                    Early Degenerative Stage – Collagen fibers begin to
                                    disorganize; pain emerges more frequently, and a small lump may
                                    form.
                                </li>
                                <li>
                                    Late Degenerative Stage – Significant thickening, chronic
                                    inflammation, and scar tissue reduce elasticity; daily pain and
                                    weakness limit activity.
                                </li>
                                <li>
                                    Pre-Rupture Stage – Multiple micro-tears create severe pain,
                                    audible snapping sensations, or sudden loss of push-off power.
                                </li>
                            </ol>
                            <p className="mt-4">
                                Determining your stage helps Mountain Spine & Orthopedics
                                match therapies—from conservative care to minimally invasive
                                procedures—precisely to your needs.
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Achilles Tendonitis Treatments
                        </h2>
                        <div
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Phase 1: Calm Inflammation – Activity modification, ice
                                    massage, topical or oral NSAIDs, and a structured
                                    eccentric-calf-loading program proven to stimulate tendon
                                    remodeling.
                                </li>
                                <li>
                                    Phase 2: Correct Mechanics – Customized orthotics or heel lifts
                                    reduce tensile load; our physical therapists mobilize tight
                                    ankle joints and teach calf-lengthening stretches.
                                </li>
                                <li>
                                    Phase 3: Regenerate Tissue – For persistent cases, we offer
                                    ultrasound-guided platelet-rich plasma (PRP) injections,
                                    extracorporeal shock-wave therapy, and percutaneous needle
                                    micro-tenotomy to trigger new collagen growth.
                                </li>
                                <li>
                                    Phase 4: Restore Strength & Return to Sport – Progressive
                                    strengthening, plyometrics, and sport-specific drills under
                                    physiotherapist supervision ensure a safe comeback.
                                </li>
                                <li>
                                    Phase 5: Surgical Options (When Necessary) – Minimally invasive
                                    debridement, tendon-splitting repair, or reconstruction with a
                                    flexor-hallucis-longus tendon transfer for severe degeneration
                                    or partial tears. Most patients walk in a boot within days and
                                    transition to sneakers by week eight, guided by our on-site
                                    rehab team.
                                </li>
                            </ul>
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Heel or calf pain that lingers more than a few days deserves
                            expert evaluation early treatment preserves tendon integrity and
                            prevents rupture.
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our experienced specialists will confirm your diagnosis, explain
                            every treatment option, and design a personalized plan that
                            relieves pain, rebuilds tendon strength, and returns you to
                            pain-free performance.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(4).png",
        keywords: [
            "Achilles tendonitis",
            "heel pain treatment",
            "tendonitis in ankle Florida",
            "calf pain relief",
            "PRP for tendonitis",
            "ESWT treatment",
            "foot and ankle specialist",
            "running injury",
        ],
        metaTitle: "Achilles Tendonitis | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Achilles tendonitis causes heel and ankle pain from overuse. Our Florida specialists offer advanced treatments like PRP and ESWT to restore tendon health.",
    },
    {
        title: "Flat Feet",
        tag: "Foot",
        card_img: "https://mountainspineortho.b-cdn.net/public/flat2.webp",
        inTxt_img: "https://mountainspineortho.b-cdn.net/public/flat.webp",
        body: "Flat feet, or fallen arches, occur when the arch of the foot collapses, which can lead to pain, imbalance, and other lower body issues.",
        detail: "Flat feet (pes planus) is a condition where the arch on the inside of the foot collapses, causing the entire sole to contact the ground. While some people are born with flat feet and have no issues, others acquire them over time, leading to strain on the ankles, knees, and hips. At Mountain Spine & Orthopedics, our foot specialists use advanced imaging and gait analysis to create personalized treatment plans that support your arches, improve alignment, and help you move comfortably.",
        what_sym: "When symptomatic, flat feet can cause pain in the arch, heel, or ankle, as well as tired, achy feet after prolonged standing. Some people experience swelling along the inside of the ankle and pain that extends to the calf, knee, or lower back.",
        risk_fac: "Risk factors include genetics, aging, injuries to the foot or ankle, obesity, and certain medical conditions like rheumatoid arthritis and diabetes. Pregnancy can also cause temporary or permanent flat feet due to hormonal changes and weight gain.",
        diagnose: "Diagnosing flat feet involves a physical exam where our specialist will observe your feet as you stand and walk. If pain is present or an acquired flatfoot is suspected, we will use weight-bearing X-rays to examine your bone structure and alignment. An MRI may be used to evaluate tendon or ligament damage.",
        treatment: "Treatment is usually only necessary if the condition is causing pain. Conservative measures are often effective and include wearing supportive shoes, using over-the-counter or custom-made orthotic insoles, and performing specific stretching and strengthening exercises. If conservative treatments fail, particularly in cases of posterior tibial tendon dysfunction, surgical options may be considered.",
        pain_info: "Pain associated with flat feet often manifests as an ache or fatigue in the feet and legs, particularly after activity. This discomfort arises from the increased strain on tendons, ligaments, and joints due to the lack of arch support and the resulting overpronation (inward rolling) of the foot.",
        prevent: "While congenital flat feet cannot be prevented, you can take steps to prevent symptoms from an acquired flatfoot. Wearing supportive shoes, maintaining a healthy weight, and performing regular stretching exercises for the Achilles tendon and calf muscles can all help reduce strain on the arches.",
        why_choose_us: "The foot and ankle specialists at Mountain Spine & Orthopedics are experts in managing painful flat feet. For patients across Florida, we offer comprehensive gait analysis, complimentary imaging reviews, and a full range of treatments from custom orthotics to complex reconstructive surgery. Our goal is to restore your alignment and help you move without pain.",
        schedule: "If foot pain or fatigue associated with flat feet is impacting your comfort or mobility, schedule an appointment at Mountain Spine & Orthopedics. Our team can provide a detailed evaluation and outline suitable treatment strategies.",
        slug: "flat-feet",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Are Flat Feet?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Flat feet fall into three broad categories. Flexible flat feet
                            maintain an arch when the foot is off the ground but flatten under
                            body weight. Rigid flat feet lack an arch whether seated or
                            standing, often because of tarsal bone fusion or severe
                            arthritis. Adult acquired flatfoot usually appears later in life
                            when the posterior tibial tendon—the primary dynamic supporter of
                            the arch weakens or tears. People with flat feet frequently notice
                            rapid shoe wear along the inner edge, aching or swelling along the
                            arch or inside ankle, and a tendency to stand or walk with the
                            toes pointed outward. A precise diagnosis is essential because
                            each subtype responds to different interventions.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/flatfoot.png"
                                }
                                height="500px"
                                objectFit="contain"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Flat Feet
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Typical signs include tired, aching feet after prolonged
                            standing, persistent pain or swelling along the inner ankle and
                            arch, heel or arch stiffness first thing in the morning, frequent
                            ankle sprains, knee or lower back discomfort from altered gait,
                            difficulty fitting into regular shoes because of foot widening,
                            and thickened skin under the big toe or along the inside border of
                            the foot. Ignoring these symptoms can invite complications such as
                            plantar fasciitis, shin splints, posterior tibial tendonitis, and
                            early joint arthritis.
                        </p>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={
                                "https://mountainspineortho.b-cdn.net/flatfoot.jpg"
                            }
                            height="500px"
                            objectFit="contain"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Flat Feet Progression
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Flat foot deformity generally advances through four recognizable
                            stages. In Stage I the posterior tibial tendon is inflamed but
                            still functional, and the arch collapses only during strenuous
                            activity. Stage II brings a flexible deformity in which the tendon
                            elongates, the heel drifts outward, and the arch flattens fully
                            under load, though manual realignment is still possible.
                            <br />
                            <br />
                            Stage III represents a rigid deformity in which the tendon is
                            severely degenerated or torn, the arch collapse becomes fixed, and
                            arthritis develops in the subtalar and midfoot joints. Stage IV
                            extends the collapse into the ankle itself, producing valgus tilt
                            and advanced arthritic change. Understanding your stage allows
                            our specialists to match treatment, from conservative bracing to
                            corrective surgery, precisely to your needs.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Flat Feet Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Early care focuses on non surgical measures. Custom molded
                            orthotics or ankle foot braces cradle the arch and limit
                            overpronation, while calf stretching and posterior tibial
                            strengthening exercises improve muscular support. Physical therapy
                            sessions teach balance drills and gait retraining techniques that
                            stabilize the entire lower limb chain. When painful flare ups
                            occur, short courses of anti inflammatory medication or precisely
                            guided corticosteroid injections reduce swelling and restore
                            mobility, and footwear counseling ensures you select shoes with
                            firm heel counters, ample toe boxes, and built in arch support.
                            For stubborn cases, regenerative therapies such as platelet rich
                            plasma injections or extracorporeal shock wave therapy stimulate
                            tendon healing. If the deformity is rigid or continues to progress
                            despite diligent conservative care, surgical correction may be
                            necessary. Our surgeons perform realignment procedures that can
                            include calcaneal osteotomy to reposition the heel, tendon
                            transfer or reconstruction to replace a degenerated posterior
                            tibial tendon, and midfoot or subtalar fusion when severe
                            arthritis is present. Most patients are allowed to bear weight in
                            a protective boot within a few weeks and transition to supportive
                            footwear under the guidance of our in house rehabilitation team.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Foot fatigue, arch pain, or ankle instability do not have to limit
                            your daily life. Early expert evaluation can halt flat foot
                            progression and protect the joints throughout your lower body.
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br /> Our multidisciplinary team will confirm your diagnosis,
                            explain every treatment option, and design a personalized plan
                            that supports your arches, relieves discomfort, and helps you
                            walk, run, and work without pain.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(6).png",
        keywords: [
            "flat feet",
            "fallen arches treatment",
            "pes planus",
            "custom orthotics Florida",
            "posterior tibial tendon dysfunction",
            "foot arch pain",
            "overpronation",
            "foot and ankle specialist",
        ],
        metaTitle: "Flat Feet | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Painful flat feet or fallen arches can cause widespread issues. Our Florida foot specialists offer custom orthotics and advanced surgery to restore alignment.",
    },
    {
        title: "Ankle Arthroscopy",
        tag: "Foot",
        card_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(11).png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(11).png",
        body: "Ankle arthroscopy is a minimally invasive surgical procedure that allows surgeons to diagnose and treat a wide range of ankle joint problems.",
        detail: "Ankle arthroscopy is a minimally invasive technique where an orthopedic surgeon uses a small camera (arthroscope) to look inside the ankle joint. This allows for the diagnosis and treatment of various problems, such as cartilage lesions, bone spurs, and chronic instability, without the need for large incisions. At Mountain Spine & Orthopedics, our surgeons use ankle arthroscopy to provide less pain, reduced scarring, and a faster recovery compared to traditional open surgery.",
        what_sym: "Ankle arthroscopy is a procedure, not a condition. It is recommended for symptoms like persistent ankle pain not relieved by conservative care, chronic instability or recurrent sprains, sensations of catching or locking in the joint, and stiffness or swelling that does not resolve.",
        risk_fac: "This is a treatment. Risks, while lower than open surgery, include infection, bleeding, blood clots, and nerve irritation around the ankle. Your surgeon will discuss these potential risks in detail before the procedure.",
        diagnose: "The decision to proceed with ankle arthroscopy is based on a thorough diagnostic process. This includes a physical exam and imaging studies. We offer a complimentary MRI review, as MRI provides detailed images of the soft tissues like ligaments and cartilage, helping to identify tears or damage that are amenable to arthroscopic treatment.",
        treatment: "Ankle arthroscopy is itself a treatment method. During the procedure, our surgeons can debride damaged cartilage, remove loose bone or cartilage fragments, repair torn ligaments, treat osteochondral lesions, and remove bone spurs that cause impingement. Post-operative care involves rest, ice, and a critical physical therapy program to restore range of motion, strength, and function.",
        pain_info: "Pain after ankle arthroscopy is expected but is generally less severe than after traditional open ankle surgery. The level of pain depends on the complexity of the procedure performed and is managed with prescribed medication. This initial pain and swelling subsides as healing progresses.",
        prevent: "Prevention focuses on avoiding the ankle injuries that might necessitate arthroscopy in the first place. This includes wearing supportive footwear, strengthening the muscles around theankle for better stability, and seeking prompt and appropriate treatment for any ankle sprains to prevent chronic problems.",
        why_choose_us: "The foot and ankle surgeons at Mountain Spine & Orthopedics are highly skilled in advanced, minimally invasive ankle arthroscopy. For patients in Florida, we offer a complimentary MRI review and a free second opinion to determine if this procedure is right for you. Our goal is to correct the underlying problem with less pain and a faster recovery.",
        schedule: "If chronic ankle issues are holding you back, connect with Mountain Spine & Orthopedics. Our specialists offer expert consultations and complimentary MRI reviews to help you find the best path toward a pain-free, functional ankle.",
        slug: "ankle-arthroscopy",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is Ankle Arthroscopy?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Ankle arthroscopy uses a rigid fiber optic scope connected to a
                            digital camera and light source to visualize the interior of the
                            joint on a high resolution monitor. The surgeon works through
                            portals typically measuring less than one centimeter, guiding
                            instruments such as graspers, shavers, micro drills, and
                            radiofrequency probes to perform precise repairs. Common
                            indications include persistent ankle pain after a sprain,
                            osteochondral defects, impingement caused by bone spurs at the
                            front or back of the joint, loose fragments of cartilage or bone
                            that catch during movement, and early synovitis associated with
                            inflammatory arthritis. By treating these conditions early, ankle
                            arthroscopy can delay or even eliminate the need for more
                            extensive surgery such as ankle fusion or total ankle replacement.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/anklereplace.jpg"
                                }
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I need this surgery?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            When Is Ankle Arthroscopy Recommended?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Patients considered for ankle arthroscopy usually report ongoing
                            deep ankle pain that fails to improve with rest, physical
                            therapy, and medication; repeated episodes of the ankle giving way
                            because of chronic ligament laxity; locking, catching, or
                            grinding sensations that suggest loose bodies or cartilage flaps;
                            swelling that persists long after the original injury; or painful
                            limits in ankle motion caused by anterior or posterior bone spurs.
                            A careful clinical exam combined with targeted imaging confirms
                            whether arthroscopy is the most effective next step.
                        </p>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={
                                "https://mountainspineortho.b-cdn.net/ankleant3.jpg"
                            }
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Injury Progression and Recovery Timeline
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Most ankle problems begin with an acute injury such as a sprain
                            or fracture that heals incompletely, leaving residual scar tissue,
                            cartilage defects, or subtle bone overgrowth. When conservative
                            care fails, ankle arthroscopy addresses these residual issues
                            before they advance to diffuse arthritis. Recovery unfolds in
                            three predictable phases. The first week focuses on pain control
                            and gentle motion while weight bearing occurs in a removable
                            boot. Weeks two through six emphasize progressive strengthening,
                            balance training, and gradual transition from the boot to
                            supportive athletic shoes. By the third month most patients resume
                            running, court sports, or occupational tasks that require
                            prolonged standing, guided throughout by our on site physical
                            therapy team.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Ankle Arthroscopy Procedures
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Not every ankle problem requires surgery, so we exhaust
                            nonsurgical measures first, including targeted physical therapy,
                            ultrasound guided corticosteroid or platelet rich plasma
                            injections, custom bracing, and gait retraining. When imaging
                            shows mechanical impingement, unstable cartilage, or loose
                            debris, arthroscopy becomes the gold standard. Our surgeons use
                            state of the art 4K camera systems, biologic adhesives, and micro
                            fracture drilling techniques that stimulate new cartilage growth,
                            all performed through incisions so small they often require only
                            adhesive strips rather than sutures. After surgery patients
                            follow a tailored rehabilitation plan that blends early protected
                            motion with incremental loading to restore full strength and
                            flexibility without overstressing the healing tissues.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Persistent ankle pain, swelling, or instability should not
                            compromise your lifestyle. Early expert intervention can prevent
                            minor joint problems from progressing to disabling arthritis.{" "}
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our fellowship trained foot and ankle specialists will review your
                            imaging, perform a comprehensive exam, and explain whether ankle
                            arthroscopy or another advanced treatment can give you lasting
                            relief and a confident return to work, sport, and everyday life.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(7).jpg",
        keywords: [
            "ankle arthroscopy",
            "minimally invasive ankle surgery Florida",
            "ankle impingement",
            "osteochondral lesion",
            "chronic ankle instability",
            "ankle scope surgery",
            "foot and ankle surgeon",
            "ankle pain relief",
        ],
        metaTitle: "Ankle Arthroscopy | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Ankle arthroscopy treats joint pain and instability. Our Florida surgeons perform this minimally invasive procedure for faster recovery and lasting relief.",
    },
    {
        title: "Hammertoes",
        tag: "Foot",
        card_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(12).png",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(12).png",
        body: "A hammertoe is a progressive toe deformity where a toe bends abnormally at the middle joint, causing pain, corns, and difficulty with shoes.",
        detail: "A hammertoe is a foot deformity where one of the lesser toes bends downward at the middle joint, creating a hammer-like shape. This abnormal position causes the joint to rub against shoes, leading to painful corns, calluses, and inflammation. While ill-fitting footwear is a common cause, hammertoes can also result from muscle imbalance or arthritis. At Mountain Spine & Orthopedics, our foot specialists use advanced imaging and personalized care plans to straighten the toe, relieve pressure, and keep you comfortable.",
        what_sym: "The primary symptoms include a visible, abnormal bend in the toe, pain or irritation on the top of the bent toe when wearing shoes, and the formation of painful corns or calluses on the joint or at the tip of the toe.",
        risk_fac: "The most common risk factor for hammertoes is wearing ill-fitting shoes, particularly those that are too tight or have high heels, which can crowd the toes. A traumatic toe injury or an imbalance in the toe muscles and tendons can also be a significant factor.",
        diagnose: "Diagnosis is typically made through a physical examination of the foot. Our specialist will assess the structure of the toes and check for flexibility or rigidity. X-rays may be taken to evaluate the alignment of the bones and the severity of the deformity, which helps in planning treatment.",
        treatment: "Treatment depends on whether the hammertoe is flexible or rigid. For flexible hammertoes, conservative treatments like wearing shoes with a wider toe box and using corn pads are often effective. For rigid hammertoes or when pain persists, our surgeons may recommend minimally invasive surgery to release a tight tendon or realign the toe, providing a permanent correction.",
        pain_info: "Pain from hammertoes primarily arises from the pressure and friction on the bent joint when wearing shoes, leading to the formation of painful corns and calluses. The abnormal joint position can also cause inflammation within the joint itself.",
        prevent: "The most effective way to prevent hammertoes is to wear properly fitting shoes with a wide toe box and low heels. Avoid shoes that squeeze the toes. If you have a predisposition to hammertoes, be particularly mindful of your footwear choices.",
        why_choose_us: "The foot and ankle specialists at Mountain Spine & Orthopedics are experts in correcting painful hammertoes. For patients in Florida, we offer a full range of treatments from custom orthotics to advanced, minimally invasive surgical techniques. With a complimentary consultation and a free second opinion, we can help you walk in comfort once again.",
        schedule: "If hammertoes are causing you discomfort or difficulty with shoes, it's time to explore your options. The specialists at Mountain Spine & Orthopedics are available for consultations to help you find the best path toward pain-free, functional toes.",
        slug: "hammer-toes",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Are Hammertoes?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Hammertoes most often affect the second third or fourth toes and
                            can be either flexible or rigid. In the flexible stage you can
                            still straighten the toe with your fingers, although it quickly
                            returns to a bent position when pressure is released. In the semi
                            rigid stage stiffness increases and pain becomes more frequent
                            with activity. In the rigid stage the joint locks in place, corns
                            harden, and shoes become difficult to wear. Although hammertoes
                            can arise in isolation they often occur alongside bunions or arch
                            imbalance which must be addressed simultaneously for lasting
                            relief.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/hammertoe3.jpg"
                                }
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Hammertoes
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Early signs include a noticeable upward bump at the middle of the
                            toe, redness or irritation on the top of the joint, and soreness
                            that worsens in narrow shoes or high heels. As the condition
                            advances you may feel a sharp burning pain when walking, develop
                            thickened skin at the toe tip, or experience cramps in the ball of
                            the foot as the metatarsal heads bear extra load. Chronic
                            hammertoes can also cause the affected toe to overlap its
                            neighbor, leading to further crowding and friction.
                        </p>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={
                                "https://mountainspineortho.b-cdn.net/hammertoe2.jpg"
                            }
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Hammertoe Progression
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Stage one involves a flexible deformity with occasional discomfort
                            that improves after removing tight shoes. Stage two brings semi
                            rigid change with daily pain and limited toe motion. Stage three
                            results in a rigid deformity where the joint cannot be
                            straightened by hand and corns or calluses become persistent.
                            Recognizing your stage allows the specialists at Mountain Spine &
                            Orthopedics to match treatment intensity to the exact severity of
                            your condition.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Hammertoe Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Conservative management aims to reduce pressure and restore tendon
                            balance. Wider toe box shoes with soft uppers prevent rubbing
                            while custom orthotic inserts offload the ball of the foot. Toe
                            spacers and prefabricated hammer toe pads cushion prominent joints
                            and night splints gently stretch the flexor tendons during sleep.
                            Physical therapy focuses on towel scrunches marble pickups and
                            resistance band exercises to strengthen the small muscles that
                            stabilize the toes. When discomfort persists or the toe becomes
                            rigid surgical correction offers a reliable solution. <br />
                            <br /> Our surgeons perform minimally invasive procedures such as
                            flexor to extensor tendon transfer or small joint resection to
                            realign the toe, remove painful corns in the same sitting, and
                            secure the toe with low profile implants that allow early
                            protected weight bearing. Postoperative care includes protective
                            footwear for two to four weeks followed by progressive range of
                            motion and strengthening supervised by our onsite rehabilitation
                            team. Most patients resume regular shoes and low impact activities
                            within six to eight weeks.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Do not let painful hammertoes dictate your footwear choices or
                            limit your mobility. Early expert evaluation can stop the
                            deformity from worsening and restore natural toe alignment
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our dedicated foot and ankle team will confirm your diagnosis,
                            explain every treatment option, and create a personalized plan
                            that straightens your toes, relieves pressure, and lets you walk
                            in comfort and confidence once again.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(7).png",
        keywords: [
            "hammertoe",
            "hammertoe correction Florida",
            "bent toe treatment",
            "painful corn on toe",
            "foot deformity surgery",
            "minimally invasive foot surgery",
            "foot and ankle specialist",
            "toe pain relief",
        ],
        metaTitle: "Hammertoes | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Hammertoes are painful, bent toes caused by muscle imbalance or poor footwear. Our Florida foot specialists offer advanced surgical correction for relief.",
    },
    {
        title: "Diabetic Foot Ulcers",
        tag: "Foot",
        card_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(15).jpg",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(15).jpg",
        body: "Diabetic foot ulcers are open sores on the foot that can lead to serious infection and amputation if not treated by a specialist.",
        detail: "Diabetic foot ulcers are open sores that typically develop on the bottom of the foot in people with diabetes. They are a serious complication caused by nerve damage (neuropathy) and poor circulation, which means even a small cut can become a non-healing wound. At Mountain Spine & Orthopedics, our multidisciplinary wound care team combines advanced diagnostics with evidence-based therapies to heal ulcers quickly, prevent complications, and protect limb health.",
        what_sym: "A key sign of a diabetic foot ulcer is an open sore or wound on the foot, often with drainage, swelling, redness, and a foul odor if infected. Crucially, due to nerve damage, these ulcers may be painless, making daily foot inspection essential.",
        risk_fac: "Major risk factors include poorly controlled blood sugar, a history of previous foot ulcers, peripheral neuropathy (nerve damage), peripheral artery disease (poor circulation), and wearing improper footwear. The longer a person has diabetes, the higher their risk.",
        diagnose: "Diagnosis involves a thorough examination of the foot to assess the ulcer's size, depth, and location, looking for signs of infection. We will check for neuropathy and assess vascular status. An X-ray or MRI may be ordered to check for bone infection (osteomyelitis).",
        treatment: "Treatment is multifaceted and aims to promote healing and prevent infection. Key components include 'off-loading' (reducing pressure on the ulcer with special footwear or casts), debridement (removal of dead tissue), and the application of advanced wound dressings. In cases of poor circulation, procedures to restore blood flow may be necessary. Meticulous blood sugar control is also essential for healing.",
        pain_info: "A significant concern with diabetic foot ulcers is that they are often painless due to diabetic neuropathy. This lack of a pain signal means an ulcer can develop and worsen without the individual being aware of it. Any new pain in the foot of a person with diabetes should be evaluated promptly as it could indicate a deep infection.",
        prevent: "Prevention is paramount. Key measures include daily foot inspection, practicing good foot hygiene, wearing properly fitting shoes (and never going barefoot), and having regular professional foot exams. Managing blood sugar levels effectively and quitting smoking are also crucial.",
        why_choose_us: "At Mountain Spine & Orthopedics, our dedicated wound care experts provide specialized care for diabetic foot ulcers. Serving the Florida community, we utilize advanced therapies, including off-loading and bioengineered skin substitutes, to heal wounds and prevent amputation. We offer complimentary consultations to assess your wound and create a limb-salvage plan.",
        schedule: "For individuals with diabetes, any foot wound or unusual change requires immediate professional attention. Contact Mountain Spine & Orthopedics without delay to arrange an evaluation and receive timely, comprehensive wound care.",
        slug: "diabetic-foot-ulcers",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Are Diabetic Ulcers?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Diabetic ulcers are classified as chronic full thickness wounds
                            that penetrate through the dermis. Most appear beneath the
                            metatarsal heads or at the heel where body weight concentrates,
                            but any area exposed to friction or trauma can break down. The
                            ulcers are staged according to depth and tissue involvement. A
                            superficial Grade One ulcer involves only skin, whereas a Grade
                            Four ulcer exposes bone or joint and may already harbor
                            osteomyelitis. Recognizing the exact grade guides both local
                            wound care and systemic treatment decisions.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={"https://mountainspineortho.b-cdn.net/ulcer1.jpg"}
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I have this condition?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Symptoms of Diabetic Ulcers
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Early signs include a persistent redness or callus that feels
                            slightly moist, a foul odor from bacterial colonization, or
                            drainage spotted inside socks. As the ulcer deepens patients may
                            notice swelling, warmth, or blackened tissue called eschar along
                            the edges. Fever, chills, and increasing pain signal spreading
                            infection that demands urgent medical attention. Any nonhealing
                            foot sore lasting longer than two weeks warrants evaluation by a
                            specialist.
                        </p>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={"https://mountainspineortho.b-cdn.net/ulcer3.png"}
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Stages of Diabetic Ulcer Progression
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Stage one involves a flexible deformity with occasional discomfort
                            that improves after removing tight shoes. Stage two brings semi
                            rigid change with daily pain and limited toe motion. Stage three
                            results in a rigid deformity where the joint cannot be
                            straightened by hand and corns or calluses become persistent.
                            Recognizing your stage allows the specialists at Mountain Spine &
                            Orthopedics to match treatment intensity to the exact severity of
                            your condition.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Diabetic Ulcer Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Comprehensive care begins with aggressive offloading using total
                            contact casts, removable walkers, or custom orthotics that
                            redirect pressure away from the ulcer bed. Debridement removes
                            devitalized tissue and biofilm, creating a clean base for healing.
                            We apply advanced dressings impregnated with silver or iodine to
                            control bacterial load and maintain optimal moisture balance.
                            Negative pressure wound therapy draws edges together and
                            stimulates granulation, while biologic skin substitutes and
                            growth factor gels accelerate closure in stubborn wounds. When
                            poor circulation impedes healing our vascular partners perform
                            minimally invasive angioplasty or bypass to restore blood flow.
                            <br />
                            <br />
                            For confirmed osteomyelitis we combine targeted antibiotics with
                            surgical excision of infected bone if necessary. Throughout
                            recovery our diabetes educators fine tune blood sugar control
                            because tight glycemic management speeds tissue repair and
                            reduces recurrence.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            A diabetic foot ulcer should never be ignored. Prompt specialized
                            care prevents infection, shortens healing time, and safeguards
                            mobility.
                            <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our dedicated wound care experts will evaluate your ulcer, design a
                            personalized treatment plan, and guide you toward rapid healing
                            and lasting limb preservation.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(8).png",
        keywords: [
            "diabetic foot ulcer",
            "diabetic wound care Florida",
            "foot ulcer treatment",
            "osteomyelitis",
            "peripheral neuropathy",
            "limb salvage",
            "diabetic foot care",
            "foot and ankle specialist",
        ],
        metaTitle: "Diabetic Foot Ulcers | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Diabetic foot ulcers require urgent care. Our Florida wound care specialists offer advanced treatments to heal ulcers and prevent serious complications.",
    },
    {
        title: "Ankle Replacement",
        tag: "Foot",
        card_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(16).jpg",
        inTxt_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(16).jpg",
        body: "Ankle replacement is an advanced surgical procedure to treat severe ankle arthritis by replacing damaged bone and cartilage with a prosthesis.",
        detail: "Total ankle replacement, or total ankle arthroplasty, is a surgical procedure for treating severe ankle arthritis. It involves removing damaged bone and cartilage and replacing them with a precision-engineered prosthesis to relieve pain and restore motion. Unlike ankle fusion, which eliminates movement, an ankle replacement helps maintain a more natural gait. At Mountain Spine & Orthopedics, our fellowship-trained surgeons use cutting-edge imaging and alignment tools to personalize each ankle replacement for lasting mobility.",
        what_sym: "This is a treatment. It is recommended for patients with severe and persistent ankle pain during weight-bearing activities, significant ankle stiffness, chronic swelling, and a grinding or catching sensation in the joint. These symptoms typically persist despite conservative treatments and limit daily activities.",
        risk_fac: "Factors that can lead to severe ankle arthritis necessitating a replacement include a history of significant ankle trauma (like fractures), osteoarthritis, and inflammatory arthritis like rheumatoid arthritis. Avascular necrosis of the talus, where a loss of blood supply leads to bone collapse, is another cause.",
        diagnose: "The decision to proceed with an ankle replacement is based on a comprehensive evaluation. This includes a physical exam and weight-bearing X-rays to visualize the extent of the joint damage. We use complimentary, high-resolution CT scans to create a three-dimensional plan that guides implant positioning with pinpoint accuracy.",
        treatment: "The surgery involves removing the diseased joint surfaces and preparing the tibia and talus to accept the implant. The new joint consists of metal components and a durable polyethylene insert that glides smoothly. Unlike an ankle fusion, which eliminates motion, an ankle replacement preserves up-and-down movement, allowing for a more natural gait.",
        pain_info: "The chronic, debilitating pain that leads to an ankle replacement is due to the arthritic changes and bone-on-bone contact in the joint. The primary goal of the surgery is to eliminate this pain by replacing the damaged surfaces, thereby restoring smoother, pain-free motion to the ankle.",
        prevent: "While it's not always possible to prevent the conditions that lead to needing a replacement, you can reduce the risk by seeking prompt medical attention for ankle injuries, maintaining a healthy body weight, and wearing supportive footwear.",
        why_choose_us: "The fellowship-trained foot and ankle surgeons at Mountain Spine & Orthopedics are leaders in total ankle replacement. Using state-of-the-art technology, we provide patients in Florida with personalized surgical plans designed to preserve motion and provide lasting pain relief. We offer a complimentary imaging review and a free second opinion to help you make an informed decision.",
        schedule: "If persistent ankle pain and stiffness are dictating your life, schedule a consultation with Mountain Spine & Orthopedics. Our experienced foot and ankle team will review your imaging, explain your options, and help you step forward with confidence.",
        slug: "ankle-replacement",
        forum: [
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            What Is Ankle Replacement?
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Ankle replacement involves two main steps. First the surgeon
                            removes the diseased joint surfaces and any osteophytes or bone
                            spurs. Second custom cutting guides prepare precise flat surfaces
                            on the tibia and talus to accept the implant. The new joint
                            consists of a cobalt chrome tibial component a titanium talar
                            component and a durable polyethylene insert that glides smoothly
                            between them. Unlike ankle fusion which eliminates motion ankle
                            replacement preserves up and down movement allowing more natural
                            gait and reducing stress on nearby joints such as the knee and
                            hip.
                        </p>
                        <div className="flex flex-col space-y-[40px] mt-[40px]">
                            <GradientOverlayImage
                                imageData={
                                    "https://mountainspineortho.b-cdn.net/ankleant6.jpg"
                                }
                                height="500px"
                                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                            />
                            <OutlinedButton text="Do I need this surgery?" />
                        </div>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[40px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Ankle Replacement Candidates
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Candidates for ankle replacement usually experience constant deep
                            ankle pain that interferes with walking work and sleep. Swelling
                            and stiffness limit range of motion and the joint may give way on
                            uneven ground. Imaging shows advanced arthritis with narrow joint
                            space cystic bone changes and large spurs. When daily activities
                            require frequent pain medication or when bracing and injections
                            no longer provide relief our specialists may recommend ankle
                            replacement as the best path to restore quality of life.
                        </p>
                        <OutlinedButton text="Find a Treatment" />
                        <GradientOverlayImage
                            imageData={
                                "https://mountainspineortho.b-cdn.net/anklereplace1.jpg"
                            }
                            height="500px"
                            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"
                        />
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Ankle Replacement Recovery Progress
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Ankle arthritis begins with intermittent soreness after vigorous
                            activity then progresses to daily pain morning stiffness and
                            episodic swelling. As cartilage erodes the joint space narrows and
                            spurs form leading to visible deformity and limited motion. In the
                            final stage bone on bone contact causes grinding and sharp pain
                            with every step. During evaluation we assess the integrity of
                            surrounding ligaments alignment of the foot and prior surgeries
                            to confirm that ankle replacement will offer predictable pain
                            relief and durable function.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Ankle Replacement Treatments
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            The procedure is performed under regional or general anesthesia
                            and usually requires a hospital stay of one night. A well padded
                            splint protects the ankle for the first two weeks while the
                            incision heals. Most patients begin gentle non weight bearing
                            range of motion exercises within days followed by progressive
                            partial weight bearing in a removable boot. By the sixth week
                            supervised physical therapy focuses on rebuilding strength balance
                            and gait mechanics.
                            <br />
                            <br />
                            During months three to six many people return to low impact
                            sports such as cycling golf and swimming while long distance
                            running and high impact court activities are discouraged to
                            prolong implant life. Our modern implants have shown excellent ten
                            year survival and ongoing studies demonstrate continued success
                            beyond fifteen years.
                        </p>
                    </div>
                ),
            },
            {
                post: (
                    <div className="flex flex-col space-y-[16px]">
                        <h2
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-[#111315] sm:text-4xl text-3xl"
                        >
                            Schedule a Consultation Today
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#424959] text-md sm:text-xl"
                        >
                            Persistent ankle pain and stiffness do not have to dictate your
                            pace of life. Early expert evaluation can determine whether total
                            ankle replacement is the right solution for you. <br />
                            <br /> Contact Mountain Spine & Orthopedics today at (833)
                            931-4888 or complete our simple online consultation form.
                            <br />
                            <br />
                            Our experienced foot and ankle team will review your imaging
                            explain every treatment option and design a personalized surgical
                            and rehabilitation plan that restores comfort supports mobility
                            and helps you step forward with confidence.
                        </p>
                    </div>
                ),
            },
        ],
        side_img:
            "https://mountainspineortho.b-cdn.net/Orthopedic%20Website%20(13).jpg",
        keywords: [
            "ankle replacement",
            "total ankle arthroplasty Florida",
            "ankle arthritis surgery",
            "ankle fusion alternative",
            "foot and ankle surgeon",
            "ankle pain relief",
            "post-traumatic ankle arthritis",
            "rheumatoid arthritis ankle",
        ],
        metaTitle: "Ankle Replacement | Mountain Spine & Orthopedics – Florida’s Trusted Spine and Joint Pain Specialists",
        metaDesc: "Total ankle replacement relieves arthritis pain and restores motion. Our Florida foot surgeons specialize in this advanced procedure for lasting mobility.",
    },
]