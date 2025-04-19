import Katzman from '../../public/ScottKatzman.png'
import Monica from '../../public/Monica.png'
import David from '../../public/David.png'
import Douglas from '../../public/DouglasSlaughter.png'
import Christopher from '../../public/ChristopherMcarthy.png'
import { StaticImageData } from 'next/image'
export interface DoctorProp {
    img : StaticImageData,
    slug : string
    name : string,
    practice : string,
    socials : string,
    desc : string,
    aboutme : string,
    bio : React.JSX.Element,
    snapshot : string[]
}
export const Doctors : DoctorProp[] = [
    {
    img : Katzman,
    slug : 'dr.scottkatzman',
    name  : 'Dr.Scott Katzman',
    practice : 'Orthopediatric Surgeon',
    socials : '',
    desc : 'Dr. Scott Katzman is a nationally acclaimed orthopedic spine surgeon, recognized for his groundbreaking work in minimally invasive spinal and laser surgery. With over 25 years of experience, he is one of the most sought-after spinal specialists in the country.',
    aboutme:"Dr. Scott Katzman is an internationally recognized board-certified orthopedic and spine surgeon specializing in minimally invasive surgical procedures. Since 1996, he has led the field in spinal disc replacement, laser spine surgery, and outpatient spine procedures that minimize recovery time and maximize patient outcomes. Practicing in both New Jersey, New York, and Florida, Dr. Katzman also educates fellow surgeons worldwide and serves as a trusted clinical instructor for major medical companies.",
    bio : (
        <h1>
        Dr. Katzman is an internationally recognized orthopedic surgeon specializing in minimally invasive spine surgery, and currently practices in New Jersey and Florida. In October 2015, Dr. Katzman was locally recognized as a top New Jersey doctor by The Star-Ledger’s Inside New Jersey.
        After graduating from the University of California at San Diego in 1985, Dr. Scott Katzman attended medical school at Jefferson Medical College in Philadelphia. Upon graduating in 1989, he completed his residency in Orthopedic Surgery at the University of Arizona and went on to become a Board Certified Orthopedic Surgeon in 1996. Since then Dr. Katzman has focused his career on minimally invasive spinal and laser surgical procedures.\n
        As one of the most sought after spinal surgeons in the U.S., Dr. Katzman has spent time throughout his career lecturing and educating other physicians on his highly regarded techniques. He has also been a clinical instructor for companies such as Biomet, Johnson & Johnson, Othrocore, Kyphon and Clarus. His spinal disc replacement and fusion procedures are so minimally invasive, patients are often able to have their surgeries performed in an outpatient surgery center. To his patients this means less down time and a quicker recovery than most traditional spinal surgeries.
        </h1>
    ),
    snapshot : [
        'One of the most sought after spinal surgeons in the U.S.',
        'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.',
        'Medical Degree at Jefferson Medical College in Philadelphia in 1989',
        'Graduated from the University of California at San Diego in 1985',
        'Top Orthopedic Spine Surgeon 2023 award by FindATopDoc',
        'Named Top New Jersey Doctor by Inside New Jersey (2015)',
        'Clinical instructor for Biomet, Johnson & Johnson, Orthocore, Kyphon, and Clarus',
      ]
    },
    {
    img : David,
    slug : 'dr.davidcowin',
    name  : 'Dr. David Cowin',
    practice : 'Orthopediatric Surgeon',
    socials : '',
    desc : 'Dr. David Cowin is a board-certified orthopedic surgeon specializing in general orthopedic conditions and minimally invasive spine treatments, with expertise in both upper and lower extremity care.',
    aboutme : 'Dr. David Cowin diagnoses and treats a wide range of orthopedic conditions affecting the upper and lower extremities as well as the spine. He is highly skilled in both sophisticated surgical procedures and minimally invasive techniques, with a particular interest in sacroiliac fusions and laser spine surgery. Known for his precision and patient-first approach, Dr. Cowin offers personalized care plans aimed at restoring function and relieving pain.',
    bio : (<h1>
            Dr. David Cowin was born in Washington, D.C. and spent part of his upbringing in the Philippines, where his father served as an orthopedic surgeon for the U.S. Air Force. He attended Dartmouth College in New Hampshire as an undergraduate, where he conducted orthopedic research. He earned his Doctor of Medicine degree from the University of Florida Medical School, graduating with research honors.
            <br/> <br/>
            He completed his orthopedic residency at the University of Florida’s Department of Orthopaedics and then went on to train further at the Bone and Joint Institute in Arizona, focusing on total joint reconstruction. Dr. Cowin specializes in diagnosing and treating a variety of orthopedic conditions including joint disorders, extremity injuries, and spine-related issues. His clinical focus also includes sacroiliac fusion and other minimally invasive spine procedures.
            <br/> <br/>
            Outside the clinic, Dr. Cowin enjoys traveling, scuba diving, snowboarding, and spending time with his children as they participate in sports.
        </h1>),
    snapshot : ['Board-certified orthopedic surgeon with over 20 years of experience',
    'Doctor of Medicine from University of Florida in 1998',
    'Residency in Orthopaedics at University of Florida Department of Orthopaedics',
    'Completed advanced training at Bone and Joint Institute in Arizona focusing on joint reconstruction',
    'Specializes in sacroiliac fusion and minimally invasive spine procedures',
    'Undergraduate research in orthopedic surgery at Dartmouth College',
    'Experience treating both upper and lower extremities and spine conditions']
    },
    {
    img : Christopher,
    slug : 'dr.christophermccarthy',
    name  : 'Dr. Christopher McCarthy',
    practice : 'Orthopediatric Surgeon',
    socials : '',
    desc : 'Dr. Christopher McCarthy is an Ivy League-trained orthopedic spine surgeon and one of the few physicians in the nation dual-trained in both Orthopedic Surgery and Emergency Medicine. With extensive trauma and sports medicine expertise, he is known for managing complex spinal conditions with precision and care.',
    aboutme : (<h1>
        Dr. Christopher McCarthy brings a rare and powerful combination of training in both orthopedic surgery and emergency medicine. Educated at Princeton and Harvard, and fellowship-trained in orthopedic spine surgery at Brown University, he is among the nation’s most uniquely skilled spinal surgeons.
        <br/> <br/>
        Dr. McCarthy has treated elite athletes, responded to high-stakes trauma cases, and contributed significantly to advancements in spinal diagnostics and surgical methods. His background allows him to approach spine care not only from a surgical standpoint but with a broader understanding of general and emergency medical care. From minimally invasive decompression procedures to complex spine reconstructions, Dr. McCarthy tailors each treatment plan with precision, empathy, and innovation.
    </h1>),
    bio : (<h1>
            Raised in New Jersey, Dr. McCarthy graduated magna cum laude from Princeton University and earned his medical degree from Rutgers New Jersey Medical School. He trained in Emergency Medicine at Harvard, where he learned under some of the world’s top physicians and treated a wide spectrum of trauma and ICU-level emergencies. He also served as an on-field physician for the Boston Red Sox during their championship years.
            <br/> <br/>
            After returning to NJ, he pursued fellowship training in Disaster Medicine and served as Director of EMS and Disaster Medicine for St. Vincent’s Hospital in Manhattan. Driven by a passion to expand his scope, Dr. McCarthy undertook a second full residency in Orthopedic Surgery at Rutgers Robert Wood Johnson University Hospital. There, he also served as a sideline physician for the Rutgers football team.
            <br/> <br/>
            Drawn to the intricate challenges of spine surgery, he completed a specialized fellowship at Brown University in Spine Surgery. At one of the busiest trauma centers in the nation, Dr. McCarthy handled hundreds of major spinal trauma cases. Today, his combined expertise in emergency and orthopedic care enables him to treat some of the most complex spinal conditions with unmatched precision.
            <br/> <br/>
            His specialties include adult degenerative spine disorders, spinal trauma, minimally invasive decompression, reconstructive surgery, and sports-related injuries. With every patient, Dr. McCarthy brings a commitment to compassionate care and customized solutions.
    </h1>),
    snapshot : [
        'Dual-trained in Orthopedic Surgery and Emergency Medicine',
        'Graduated magna cum laude from Princeton University',
        'Completed Emergency Medicine training at Harvard',
        'Orthopedic Surgery residency at Rutgers Robert Wood Johnson University Hospital',
        'Spine Surgery fellowship at Brown University',
        'Former EMS Director at St. Vincent’s Hospital, NYC',
        'Treated championship-level athletes, including the Boston Red Sox',
        'Specializes in minimally invasive decompression and spine reconstruction',
        'Expert in adult degenerative spine disorders and spinal trauma',
        'Performed hundreds of major spine trauma surgeries at a top trauma center'
      ]
    },
    {
    img : Monica,
    slug : 'dr.monicamcphail-pruitt',
    name  : 'Dr. Monica McPhail-Pruitt',
    practice : 'Anesthesiologist and Pain Management Specialist',
    socials : '',
    desc : 'Dr. Monica McPhail-Pruitt is a double board-certified anesthesiologist and pain management specialist with decades of experience in perioperative care. A vital part of the surgical team, her expertise ensures patients receive the safest and most effective anesthesia and pain relief before, during, and after surgery.',
    aboutme: 'Dr. Monica McPhail-Pruitt plays an essential role as a board-certified anesthesiologist with a specialized focus in pain management. With a career grounded in clinical excellence and patient-centered care, she has helped countless patients experience smoother recoveries and improved quality of life. Dr. McPhail-Pruitt provides expert perioperative pain strategies and collaborates closely with the surgical team to ensure every patient is prepared for surgery and supported throughout the healing process.',
    bio : (<h1>
            Dr. Monica McPhail-Pruitt is a highly respected anesthesiologist with board certifications in both anesthesiology and pain medicine. She earned her Bachelor of Arts from the University of Michigan in 1991 and her Doctor of Medicine from Northwestern University's Feinberg School of Medicine in 1996. Following her internship and residency at the University of Michigan Medical Center’s Department of Anesthesia, she went on to complete a fellowship in Multidisciplinary Pain Management at the same institution.
            <br/> <br/>
            Dr. McPhail-Pruitt’s clinical career has spanned over two decades, with a focus on anesthesia services, pain medicine application, and pre- and post-operative care. She is certified as both an ACLS and BLS provider through the American Heart Association. As a member of the American Society of Anesthesiologists, the American Society of Regional Anesthesia and Pain Medicine, and the Florida Medical Association, she stays at the forefront of advancements in patient comfort and surgical safety.
            <br/> <br/>
            Her expertise in managing complex pain cases and optimizing anesthesia care has made her an invaluable part of the OLSS team. Patients benefit not only from her deep knowledge but also from her compassionate approach to helping individuals lead pain-free lives after surgery.
    </h1>),
    snapshot : [
        'Double board-certified in anesthesiology and pain medicine',
        'Doctor of Medicine from Northwestern University Feinberg School of Medicine in 1996',
        'Completed internship, residency, and fellowship at University of Michigan Medical Center',
        'Fellowship-trained in multidisciplinary pain management',
        'Bachelor of Arts degree from the University of Michigan in 1991',
        'Certified ACLS and BLS provider with the American Heart Association',
        'Over two decades of experience in surgical anesthesia and pain relief',
        'Member of the American Society of Anesthesiologists and the American Society of Regional Anesthesia & Pain Medicine',
        'Expert in pre-surgical consultations, post-op pain management, and perioperative care',
        'Key contributor to Mountain Spine & Care advanced surgical and therapeutic procedures'
      ]
    },
    {
      img : Douglas,
      slug : 'dr.douglasslaughter',
      name  : 'Dr. Douglas Slaughter',
      practice : 'Orthopediatric Surgeon',
      socials : '',
      desc : 'Dr. Douglas Slaughter is an award-winning, board-certified orthopedic spine surgeon with over 21 years of experience in minimally invasive and reconstructive spine surgery. Now part of the NJSO expert team, Dr. Slaughter is known for providing patients with advanced care and faster recoveries',
      aboutme : 'With a career spanning more than two decades, Dr. Douglas Slaughter brings unmatched expertise in orthopedic spine surgery to NJSO. His background in mechanical engineering, service in the U.S. Army Reserves, and medical training across top institutions have shaped him into a leader in minimally invasive and reconstructive surgical techniques. Dr. Slaughter is committed to providing every patient with highly personalized, low-impact care to restore mobility and relieve pain — often avoiding the need for traditional open surgery. Recognized as a 2023 Top Orthopedic Spine Surgeon, he continues to innovate and educate, helping raise the standard of care for spinal conditions nationwide.',
      bio : (<h1>
            Dr. Douglas Slaughter, M.D. is NJSO’s newest board-certified orthopedic surgeon, bringing over 21 years of experience in orthopedic spine surgery. He specializes in minimally invasive and reconstructive surgical techniques for spinal conditions caused by injuries, aging, and high-impact activities. Dr. Slaughter earned his undergraduate degree in mechanical engineering and biochemistry from The Ohio State University while serving in the U.S. Army Reserves. He then received his medical degree from the University of Cincinnati College of Medicine and completed his orthopedic surgery residency at Maricopa Medical Center in Phoenix, Arizona.
            <br/> <br/>
            Further honing his skills, Dr. Slaughter trained in spinal reconstructive surgery in New York City under the direction of Dr. Michael Neuwirth at the Beth Israel Spine Institute. He later joined Sonoran Spine Center, where he developed and refined his own minimally invasive surgical methods now taught to surgeons across the southwestern U.S.
            <br/> <br/>
            Dr. Slaughter’s patient-first philosophy, technical precision, and commitment to minimizing recovery times have earned him national recognition — including the title of Top Orthopedic Spine Surgeon in 2023. At NJSO, he continues to lead with compassion and innovation, tailoring every treatment plan to each patient's unique needs.
      </h1>),
      snapshot : 
        [
      'Over 21 years of experience in orthopedic spine surgery',
      'Board-certified orthopedic surgeon specializing in minimally invasive and reconstructive spinal procedures',
      'Medical degree from the University of Cincinnati College of Medicine',
      'Residency in orthopedic surgery at Maricopa Medical Center in Phoenix, Arizona',
      'Advanced spinal reconstructive training at Beth Israel Spine Institute in New York City',
      'Background in mechanical engineering and biochemistry from The Ohio State University',
      'Served in the United States Army Reserves during undergraduate studies',
      'Pioneered minimally invasive techniques now taught to surgeons across the western U.S.',
      'Named Top Orthopedic Spine Surgeon in 2023 by Findatopdoc',
      'Currently practicing at Mountain Spine & Care'
    ]
      },
]

