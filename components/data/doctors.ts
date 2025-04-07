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
    bio : string,
    snapshot : string[]
}
export const Doctors : DoctorProp[] = [
    {
    img : Katzman,
    slug : 'dr.scottkatzman',
    name  : 'Dr.Scott Katzman',
    practice : 'Orthopediatric',
    socials : '',
    desc : 'Dr. Katzman is a pioneer of minimally invasive spinal surgeries and has spent a lot of time teaching his highly-regarded technique to surgeons across the U.S. As the most sought-after spinal surgeon in the U.S., he is dedicated to treating every patient safely and quickly using the least invasive techniques.',
    bio : `Dr. Katzman is an internationally recognized orthopedic surgeon specializing in minimally invasive spine surgery, and currently practices in New Jersey and Florida. In October 2015, Dr. Katzman was locally recognized as a top New Jersey doctor by The Star-Ledger’s Inside New Jersey.\n
    After graduating from the University of California at San Diego in 1985, Dr. Scott Katzman attended medical school at Jefferson Medical College in Philadelphia. Upon graduating in 1989, he completed his residency in Orthopedic Surgery at the University of Arizona and went on to become a Board Certified Orthopedic Surgeon in 1996. Since then Dr. Katzman has focused his career on minimally invasive spinal and laser surgical procedures.\n
    As one of the most sought after spinal surgeons in the U.S., Dr. Katzman has spent time throughout his career lecturing and educating other physicians on his highly regarded techniques. He has also been a clinical instructor for companies such as Biomet, Johnson & Johnson, Othrocore, Kyphon and Clarus. His spinal disc replacement and fusion procedures are so minimally invasive, patients are often able to have their surgeries performed in an outpatient surgery center. To his patients this means less down time and a quicker recovery than most traditional spinal surgeries.`,
    snapshot : ['One of the most sought after spinal surgeons in the U.S.', 'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.', 'Medical Degree at Jefferson Medical College in Philadelphia in 1989', 'Graduated from the University of California at San Diego in 1985']
    },
    {
    img : David,
    slug : 'dr.davidcowin',
    name  : 'Dr. David Cowin',
    practice : 'Orthopediatric',
    socials : '',
    desc : 'Dr. Cowin was born in Washington, D.C. and was raised for part of his life in the Philippines where his father was an orthopedic surgeon for the US Air Force. He then attended Dartmouth College in New Hampshire. As an undergraduate student, he did research in orthopedic surgery. Subsequently he attended the University of Florida Medical School, graduating with research honors. He completed a residency in orthopedic at the University of Florida Department of Orthopaedics. Then, he spent a year at the Bone and Joint Institute in Arizona studying total joint reconstruction.',
    bio : '',
    snapshot : ['One of the most sought after spinal surgeons in the U.S.', 'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.', 'Medical Degree at Jefferson Medical College in Philadelphia in 1989', 'Graduated from the University of California at San Diego in 1985']
    },
    {
    img : Christopher,
    slug : 'dr.christophermccarthy',
    name  : 'Dr. Christopher McCarthy',
    practice : 'Orthopediatric',
    socials : '',
    desc : 'Dr. Christopher McCarthy is an Ivy League-trained orthopedic spine surgeon and is one of the only physicians in the nation trained in both Orthopedic Surgery & Emergency Medicine',
    bio : '',
    snapshot : ['One of the most sought after spinal surgeons in the U.S.', 'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.', 'Medical Degree at Jefferson Medical College in Philadelphia in 1989', 'Graduated from the University of California at San Diego in 1985']
    },
    {
    img : Monica,
    slug : 'dr.monicamcphail-pruitt',
    name  : 'Dr. Monica McPhail-Pruitt',
    practice : 'Orthopediatric',
    socials : '',
    desc : 'As an anesthesiologist, Dr. Monica McPhail-Pruitt is an important part of the OLSS surgical team. Her expertise makes many of our diagnostic and therapeutic procedures possible.',
    bio : '',
    snapshot : ['One of the most sought after spinal surgeons in the U.S.', 'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.', 'Medical Degree at Jefferson Medical College in Philadelphia in 1989', 'Graduated from the University of California at San Diego in 1985']
    },
    {
      img : Douglas,
      slug : 'dr.douglasslaughter',
      name  : 'Dr. Douglas Slaughter',
      practice : 'Orthopediatric',
      socials : '',
      desc : '',
      bio : '',
      snapshot : ['One of the most sought after spinal surgeons in the U.S.', 'Since 1996, he has focused his career on minimally invasive spinal and laser surgical procedures.', 'Medical Degree at Jefferson Medical College in Philadelphia in 1989', 'Graduated from the University of California at San Diego in 1985']
      },
]

