'use client'
import Image from "next/image";
import { Avatars } from "@/components/ui/avatar";
import BookAnAppoitmentButton from "@/components/BookAnAppoitmentButton";
import AAOS from '../public/aaos.png';
import ACP from '../public/ACP.png';
import AOA from '../public/AOA.png';
import NASS from '../public/NASS.png';
import Serpent from '../public/Serpent.png';
import SMIS from '../public/SMIS.png';
import Foot from '../public/Foot.png'
import HomeWhyAO from '@/public/HomeWhyAO-min.jpeg'
import Neck from '../public/neck.png'
import LowerBack from '../public/Lowerback.png'
import Joints from '../public/Joints.png'
import JointsAnat from '../public/JointsAnat.png'
import FootAnat from '../public/FootAnat.png'
import LowerbackAnat from '../public/LowerbackAnat.png'
import NeckAnat from '../public/NeckAnat.png'
import HumanModel from '../public/HumanModel.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "@/components/ui/carousel";
import StarRating from "@/components/StarRating";
import { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import MRI1 from '../public/MRI1.png'
import MRI2 from '../public/MRI2.png'
import MRI3 from '../public/MRI3.png'
import Consultation from '../public/Consultation.png'
import Diagnosis from '../public/Diagnosis.png'
import Treatment from '../public/Treatment.png'
import HomeContactUs from '../public/HomeContactUs.jpeg'
import { ConsultationForm } from "@/components/ContactForm";
import ClinicsMap from "@/components/ClinicsMap";
import ContactUsSection from "@/components/ContactUsSection";
import RatingsAndReviews from "@/components/RatingsAndReviews";
import { Doctors } from "@/components/data/doctors";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedList } from "@/components/magicui/animated-list";
import Reveal from "@/components/RevealAnimation";
import { NumberTicker } from "@/components/magicui/number-ticker";
import SlidingDiv from "@/components/SlidingAnimation";
import { TextAnimate } from "@/components/magicui/text-animate";
import ExpertCare from '@/public/ExpertCare.png'
import aftercare from '@/public/aftercare.jpg'
import { Marquee } from "@/components/magicui/marquee";


const ServicesAndExpertise = [
  {
    img : Foot,
    title : 'Foot & Ankle',
    anatomy : 'https://mountainspineortho.b-cdn.net/public/FootAnat.png',
    desc : 'Precision interventions fix lower extremity biomechanics.'
  },
  {
    img : Neck,
    title : 'Neck & Spine',
    anatomy : 'https://mountainspineortho.b-cdn.net/public/NeckAnat.png',
    desc : 'Cutting-edge cervical treatments relieve compression and restore alignment.'
  },
  {
    img : LowerBack,
    title : 'Lower Back',
    anatomy : 'https://mountainspineortho.b-cdn.net/public/LowerbackAnat.png',
    desc : 'Minimally invasive lumbar interventions reduce pain and improve function.'
  },
  {
    img : Joints,
    title : 'Joints',
    anatomy : 'https://mountainspineortho.b-cdn.net/public/JointsAnat.png',
    desc : 'Arthroscopic and regenerative methods help get your joints moving again.'
  }
]

const OurSpecialtyItems = [
  {
    icon : () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 11.2502C7.19892 11.2502 7.38968 11.3293 7.53033 11.4699L9 12.9396L10.4697 11.4699C10.6103 11.3293 10.8011 11.2502 11 11.2502H11H11.0001C12.3676 11.2502 13.5248 11.2502 14.3918 11.3668C15.2919 11.4878 16.0497 11.7467 16.6517 12.3486C17.2536 12.9505 17.5125 13.7084 17.6335 14.6085C17.75 15.4755 17.75 16.5778 17.75 17.9454V21.0002C17.75 21.4145 17.4142 21.7502 17 21.7502L1 21.7502C0.585789 21.7502 0.250001 21.4145 0.250001 21.0002L0.250001 17.9454V17.9454V17.9453C0.249981 16.5778 0.249965 15.4755 0.366525 14.6085C0.487541 13.7084 0.746435 12.9505 1.34835 12.3486C1.95027 11.7467 2.70814 11.4878 3.60825 11.3668C4.4752 11.2502 5.63238 11.2502 6.99994 11.2502H6.99998H7ZM13 13.7502C13.4142 13.7502 13.75 14.086 13.75 14.5002V15.7502H15C15.4142 15.7502 15.75 16.086 15.75 16.5002C15.75 16.9145 15.4142 17.2502 15 17.2502H13.75V18.5002C13.75 18.9145 13.4142 19.2502 13 19.2502C12.5858 19.2502 12.25 18.9145 12.25 18.5002V17.2502H11C10.5858 17.2502 10.25 16.9145 10.25 16.5002C10.25 16.086 10.5858 15.7502 11 15.7502H12.25V14.5002C12.25 14.086 12.5858 13.7502 13 13.7502ZM9 0.250137C6.65279 0.250137 4.75 2.15293 4.75 4.50014V5.50014C4.75 7.84735 6.65279 9.75014 9 9.75014C11.3472 9.75014 13.25 7.84735 13.25 5.50014L13.25 4.50014C13.25 2.15293 11.3472 0.250137 9 0.250137Z" fill="#0094E0"/>
    </svg>
    ),
    title : 'World - Class Expertise',
    body : 'Our board-certified orthopedic surgeons bring years of experience and a proven track record of successful outcomes.'
  },
  {
    icon : () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Spine--Streamline-Simple-Icons" height="24" width="24">
        <path d="M7.157 2.207c0.066 2.004 1.454 3.117 4.221 3.55 2.345 0.368 4.46 0.181 5.151 -1.829C17.874 0.01 14.681 0.985 11.915 0.55S7.051 -1.013 7.157 2.207m0.831 8.23c0.257 1.497 1.652 2.355 3.786 2.297 2.135 -0.059 3.728 -0.892 3.949 -2.507 0.409 -2.988 -1.946 -1.832 -4.08 -1.774 -2.136 0.059 -4.161 -0.952 -3.655 1.984m2.778 6.852c0.424 1.117 1.587 1.589 3.159 1.253 1.569 -0.335 2.656 -0.856 2.568 -2.129 -0.159 -2.357 -1.713 -1.616 -3.283 -1.279 -1.571 0.333 -3.272 -0.039 -2.444 2.155m1.348 5.221c0.123 0.943 0.939 1.5 2.215 1.49 1.279 -0.011 2.248 -0.515 2.412 -1.525 0.308 -1.871 -1.123 -1.175 -2.4 -1.165 -1.28 0.01 -2.47 -0.65 -2.227 1.2" fill="#0094e0" stroke-width="1"></path>
      </svg>
    ),
    title : 'Laser Spine & Radio',
    body : 'We lead the industry in advanced laser spine procedures and targeted radio treatments, delivering exceptional outcomes with cutting-edge technology.'
  },
  {
    icon : () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.02299 3.376C7.03911 3.15406 7.06365 2.97295 7.09643 2.82372C7.15781 2.54433 7.23372 2.44399 7.27636 2.40136C7.31899 2.35872 7.41933 2.28281 7.69872 2.22143C7.98944 2.15756 8.40114 2.125 9 2.125H13C13.5989 2.125 14.0106 2.15756 14.3013 2.22143C14.5807 2.28281 14.681 2.35872 14.7236 2.40136C14.7663 2.44399 14.8422 2.54433 14.9036 2.82372C14.9364 2.97295 14.9609 3.15406 14.977 3.376C14.6818 3.37499 14.3738 3.375 14.0527 3.375H14.0527H14.0527H7.94732H7.94731H7.9473C7.62618 3.375 7.31821 3.37499 7.02299 3.376ZM5.01648 3.41956C5.03581 3.05074 5.07429 2.70741 5.14301 2.39459C5.25632 1.8788 5.46503 1.38426 5.86214 0.987143C6.25926 0.59003 6.7538 0.381319 7.26959 0.268009C7.77406 0.157186 8.35786 0.125 9 0.125H13C13.6421 0.125 14.2259 0.157186 14.7304 0.268009C15.2462 0.381319 15.7407 0.59003 16.1379 0.987143C16.535 1.38426 16.7437 1.8788 16.857 2.39459C16.9257 2.70741 16.9642 3.05074 16.9835 3.41956C17.325 3.43802 17.6415 3.46412 17.9342 3.50102C18.9621 3.63057 19.8113 3.90463 20.4878 4.5389C21.1712 5.1796 21.4729 5.99471 21.6143 6.98061C21.75 7.92738 21.75 9.13186 21.75 10.6289V10.6289V10.6289V10.6289V12.6211V12.6211V12.6211V12.6211C21.75 14.1181 21.75 15.3226 21.6143 16.2694C21.4729 17.2553 21.1712 18.0704 20.4878 18.7111C19.8113 19.3454 18.9621 19.6194 17.9342 19.749C16.9342 19.875 15.6579 19.875 14.0527 19.875H7.94733C6.3421 19.875 5.06579 19.875 4.06576 19.749C3.03794 19.6194 2.18873 19.3454 1.51217 18.7111C0.828766 18.0704 0.527127 17.2553 0.385739 16.2694C0.249962 15.3226 0.249979 14.1181 0.250001 12.6211V12.6211V12.6211V12.6211V10.6289V10.6289V10.6289V10.6289C0.249979 9.13188 0.249962 7.92739 0.385739 6.98061C0.527127 5.99471 0.828765 5.1796 1.51217 4.5389C2.18873 3.90463 3.03794 3.63057 4.06576 3.50102C4.35855 3.46412 4.67501 3.43802 5.01648 3.41956ZM11 7.625C11.5523 7.625 12 8.07272 12 8.625V10.625H14C14.5523 10.625 15 11.0727 15 11.625C15 12.1773 14.5523 12.625 14 12.625H12V14.625C12 15.1773 11.5523 15.625 11 15.625C10.4477 15.625 10 15.1773 10 14.625V12.625H8C7.44772 12.625 7 12.1773 7 11.625C7 11.0727 7.44772 10.625 8 10.625H10V8.625C10 8.07272 10.4477 7.625 11 7.625Z" fill="#0094E0"/>
      </svg>
    ),
    title : 'Band Aid Back Surgery',
    body : 'Mountain Spine is one of the only providers of Band Aid Back Surgery, a revolutionary minimally-invasive technique that delivers exceptional results with faster recovery times.'
  },
  {
    icon : () => (
      <svg className="text-[#0094E0]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 22 22">
        <path d="m17.9646 5.49185.3705.37054c.3906.39052 1.0237.39052 1.4142 0 .3906-.39053.3906-1.02369 0-1.41422L17.594 2.29283c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l.3706.37059-.7412.74118-.3706-.37059c-.3905-.39053-1.0237-.39053-1.4142 0L9.71372 8.75891c-.39053.39053-.39053 1.02369 0 1.41419l.34948.3495-.77031.7703c-.39053.3905-.39053 1.0237 0 1.4142.39052.3905 1.02371.3905 1.41421 0l.7703-.7703.3917.3917c.3905.3905 1.0236.3905 1.4142 0l2.0628-2.0629c.4145.6745.6539 1.4706.6539 2.3256 0 2.4448-1.9584 4.4087-4.3521 4.4087-1.0458 0-2.00787-.3737-2.76051-.9999H11c.5523 0 1-.4477 1-1s-.4477-1-1-1H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h1.26803C6.92225 17.0489 7.8715 17.8952 9 18.4182V20H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-1.9637c1.8034-1.1328 3-3.1517 3-5.4451 0-1.4061-.4498-2.70897-1.2126-3.76687l.8066-.80655c.3905-.39052.3905-1.02369 0-1.41421l-.3706-.37054.7412-.74118Z"/>
      </svg>

    ),
    title : 'Minimally Invasive',
    body : 'We specialize in minimally invasive treatments that minimize tissue damage, reduce recovery time, and help you get back to your life faster with less pain and scarring.'
  },
]
const Testimonials = [
  {
    stat : 'k+',
    value : 15,
    desc : 'Successful Treatments'
  },
  {
    stat : '+',
    value : 20,
    desc : 'Years of Experience'
  },
  {
    stat : '%',
    value : 95,
    desc : 'Patient Satasfaction Rate'
  },
  {
    stat : '/7',
    value : 24,
    desc : 'Customer Support'
  }

]

const Amenities = [
  {
    icon : () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="37" viewBox="0 0 27 37" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.12393 8.50306C3.10176 8.33475 3.09048 8.2061 3.0859 8.1087C3.22963 8.09302 3.42998 8.08317 3.7093 8.08317L15.3629 8.08317L15.2353 12.6775C14.6937 12.824 14.1811 12.9906 13.7109 13.1473C13.5758 13.1923 13.4449 13.2363 13.3178 13.2791L13.3167 13.2795L13.3167 13.2795L13.3166 13.2795C12.8316 13.4426 12.4005 13.5876 11.9913 13.703C11.4733 13.8491 11.0928 13.9165 10.8107 13.9165C10.6792 13.9165 10.6093 13.9015 10.5793 13.8929C10.5534 13.8855 10.5417 13.8788 10.5301 13.8709C10.4781 13.8357 10.4527 13.8078 10.3541 13.6994L10.354 13.6994C10.3072 13.6479 10.2438 13.5782 10.1532 13.481C9.90878 13.2187 9.55403 12.8759 8.99397 12.6219C8.4454 12.3731 7.79225 12.2498 6.98494 12.2498C5.55991 12.2498 4.49594 12.6453 3.73649 13.1546L3.12393 8.50306ZM17.8639 8.08317L17.748 12.2568C17.8595 12.2522 17.9713 12.2498 18.0834 12.2498C19.5025 12.2498 20.7107 12.6294 21.6113 13.0462L22.2096 8.50306C22.2318 8.33475 22.243 8.2061 22.2476 8.1087C22.1039 8.09302 21.9036 8.08317 21.6242 8.08317H17.8639ZM20.8232 15.4433C20.9878 15.5285 21.1349 15.6134 21.2628 15.6927L21.2169 16.0415L17.6519 15.718L17.6784 14.764C17.8141 14.7547 17.9491 14.7498 18.0834 14.7498C19.1922 14.7498 20.1397 15.0895 20.8232 15.4433ZM19.5401 28.7742L21.2165 16.0445L17.6518 15.7202L17.2496 30.2012C17.2305 30.8913 16.6555 31.4352 15.9654 31.416C15.2753 31.3969 14.7314 30.8219 14.7506 30.1318L15.1571 15.4933L14.7038 15.452C14.6365 15.4741 14.5691 15.4965 14.5014 15.519C14.3838 15.5582 14.2646 15.5983 14.1444 15.6388C13.6526 15.8043 13.145 15.9752 12.6699 16.1091C12.0799 16.2756 11.4377 16.4165 10.8107 16.4165C10.1414 16.4165 9.5936 16.2559 9.12869 15.9412C8.80094 15.7194 8.52569 15.4106 8.38508 15.2528L8.38507 15.2528L8.38503 15.2528L8.38495 15.2527C8.36047 15.2252 8.34009 15.2024 8.32422 15.1853C8.18042 15.031 8.09009 14.9571 7.96123 14.8986C7.90228 14.8719 7.81874 14.8413 7.70044 14.8149L6.98494 14.7498C5.29644 14.7498 4.69919 15.5786 4.59746 15.7651C4.4867 15.9681 4.32781 16.1282 4.14267 16.2389L5.79347 28.7742C5.97991 30.19 6.10548 31.1211 6.29753 31.8095C6.47634 32.4505 6.67471 32.7316 6.92106 32.9273C7.18001 33.133 7.85183 33.405 8.97609 33.6113C10.0392 33.8064 11.3266 33.9119 12.6358 33.9164C13.9451 33.9208 15.2368 33.8241 16.3091 33.6315C17.4387 33.4286 18.1296 33.152 18.4125 32.9273C18.6588 32.7316 18.8572 32.4505 19.036 31.8095C19.228 31.1211 19.3536 30.19 19.5401 28.7742ZM7.6993 14.8147L7.70044 14.8149L14.7038 15.452L14.7077 15.4507L7.6993 14.8147ZM14.7077 15.4507L15.1572 15.4915L15.1624 15.3046C15.0118 15.3517 14.8602 15.4006 14.7077 15.4507ZM6.98494 14.7498L7.6993 14.8147C7.53606 14.7783 7.30681 14.7498 6.98494 14.7498ZM17.9333 5.58317H21.6242C22.0673 5.58317 22.5034 5.60231 22.8925 5.68015C23.2843 5.75852 23.7457 5.91866 24.1223 6.29177C24.5154 6.68111 24.6723 7.15778 24.7253 7.58449C24.7754 7.98769 24.7424 8.41826 24.6882 8.82947L22.0073 29.1868L22.0073 29.1868L22.0073 29.1869C21.8354 30.4929 21.6894 31.6019 21.4441 32.4813C21.1801 33.4274 20.7655 34.2509 19.9675 34.8848C19.1692 35.519 17.9473 35.8772 16.7511 36.0921C15.4977 36.3172 14.0507 36.4212 12.6272 36.4163C11.2036 36.4115 9.76405 36.2976 8.5249 36.0702C7.34692 35.8541 6.14116 35.5006 5.366 34.8848C4.56805 34.2509 4.15343 33.4274 3.88948 32.4813C3.64414 31.6019 3.49815 30.4929 3.32621 29.1868L0.645326 8.82947C0.591174 8.41826 0.558091 7.98769 0.608215 7.58449C0.661261 7.15778 0.818159 6.6811 1.21119 6.29177C1.58783 5.91866 2.04921 5.75852 2.44098 5.68015C2.83017 5.60231 3.26624 5.58317 3.7093 5.58317L15.4324 5.58317L15.4945 3.3479L15.4956 3.32856C15.5863 1.78693 16.8629 0.583168 18.4072 0.583168H25.169C25.8594 0.583168 26.419 1.14281 26.419 1.83317C26.419 2.52352 25.8594 3.08317 25.169 3.08317H18.4072C18.1909 3.08317 18.0114 3.24844 17.9922 3.46243L17.9333 5.58317ZM10.1668 23.4998C9.24629 23.4998 8.5001 24.246 8.5001 25.1665C8.5001 26.087 9.24629 26.8332 10.1668 26.8332H10.1817C11.1021 26.8332 11.8483 26.087 11.8483 25.1665C11.8483 24.246 11.1021 23.4998 10.1817 23.4998H10.1668Z" fill="#022968"/>
    </svg>
    ),
    title : 'Refreshments'
  },
  {
    icon : () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8333 0.583496C20.9336 0.583496 21.7766 1.25243 22.2876 2.0188C22.8043 2.79391 23.0833 3.79271 23.0833 4.8335C23.0833 5.08691 23.0608 5.33861 23.0164 5.5835C24.0809 5.58353 24.9758 5.58561 25.7093 5.66238C26.5041 5.74556 27.2336 5.92591 27.9018 6.36733C28.5784 6.81443 29.0139 7.41123 29.3663 8.1055C29.6933 8.74988 29.9903 9.56676 30.3361 10.5181L31.3106 13.1977L32.9413 12.3824C33.5586 12.0737 34.3094 12.3239 34.6183 12.9414C34.9269 13.5589 34.6768 14.3097 34.0593 14.6185L32.3926 15.4518C32.3541 15.471 32.3153 15.488 32.2759 15.503L32.3793 15.604C33.0774 16.2865 33.9429 17.1323 34.6619 18.0413C35.5618 19.1788 36.4166 20.6315 36.4166 22.2958V27.7588C36.4166 27.9117 36.4053 28.0632 36.3833 28.2122C36.4051 28.3047 36.4166 28.401 36.4166 28.5002V33.3035C36.4166 34.4893 35.6663 35.4793 34.6378 35.9365L34.5464 35.9775C34.1843 36.1415 33.5763 36.4168 32.8489 36.4168H29.9843C29.2569 36.4168 28.6489 36.1415 28.2868 35.9775L28.1954 35.9365C27.1669 35.4793 26.4166 34.4893 26.4166 33.3035V31.4168L10.5833 31.4168L10.5833 33.3035C10.5833 34.4893 9.83292 35.4793 8.80445 35.9365L8.71307 35.9775C8.3509 36.1415 7.74292 36.4168 7.01562 36.4168H4.15089C3.52749 36.4168 2.99176 36.2145 2.62334 36.0535L2.45344 35.9775L2.36205 35.9365C1.33359 35.4793 0.583252 34.4893 0.583252 33.3035L0.583252 28.5002C0.583252 28.401 0.594785 28.3047 0.616585 28.2122C0.594569 28.0632 0.583252 27.9117 0.583252 27.7588L0.583252 22.2958C0.583252 20.6315 1.43802 19.1788 2.33799 18.0413C2.9132 17.3141 3.58207 16.6274 4.1841 16.0323L4.62067 15.6038L4.7239 15.503C4.6846 15.488 4.64569 15.471 4.6073 15.4518L2.94064 14.6185C2.32315 14.3097 2.07287 13.5589 2.38162 12.9414C2.69035 12.3239 3.44119 12.0737 4.05867 12.3824L5.68864 13.1974L6.63864 10.5849L6.66294 10.5181C7.00882 9.56676 7.30582 8.74988 7.63284 8.1055C7.98519 7.41123 8.4206 6.81443 9.0973 6.36733C9.7654 5.92591 10.4949 5.74556 11.2897 5.66238C12.0235 5.5856 12.9186 5.58353 13.9835 5.5835C13.9391 5.33861 13.9166 5.08691 13.9166 4.8335C13.9166 3.79271 14.1956 2.79391 14.7123 2.0188C15.2233 1.25243 16.0663 0.583496 17.1666 0.583496L19.8333 0.583496ZM33.9166 30.7487C33.8944 30.752 33.8721 30.755 33.8498 30.7578L28.9166 31.3745V33.3035C28.9166 33.3802 28.9688 33.5443 29.2108 33.6518C29.6896 33.8647 29.8261 33.9168 29.9843 33.9168H32.8489C33.0071 33.9168 33.1436 33.8647 33.6224 33.6518C33.8644 33.5443 33.9166 33.3802 33.9166 33.3035V30.7487ZM3.08325 30.7487L3.08325 33.3035C3.08325 33.3802 3.13544 33.5443 3.3774 33.6518C3.8562 33.8647 3.99272 33.9168 4.15089 33.9168H7.01562C7.17379 33.9168 7.3103 33.8647 7.7891 33.6518C8.03107 33.5443 8.08325 33.3802 8.08325 33.3035V31.3745L3.15014 30.7578C3.12774 30.755 3.10544 30.752 3.08325 30.7487ZM30.4863 17.2502L6.51367 17.2502L6.30684 17.4528C5.62107 18.124 4.91105 18.819 4.30254 19.5873L6.5592 20.7157C7.17669 21.0245 7.42697 21.7753 7.11822 22.3928C6.80949 23.0103 6.05865 23.2605 5.44117 22.9518L3.13412 21.7983C3.10042 21.9675 3.08325 22.1333 3.08325 22.2958L3.08325 27.7588C3.08325 28.0858 3.30369 28.2575 3.46022 28.2772L8.57775 28.9168H10.6551C10.6607 28.901 10.6667 28.885 10.673 28.8693L11.0824 27.8457L11.1056 27.7877C11.3902 27.0762 11.6403 26.4508 11.9044 25.9555C12.1903 25.4195 12.5443 24.9313 13.0905 24.5617C13.6367 24.1918 14.2213 24.0443 14.8251 23.978C15.2716 23.9291 15.7919 23.9193 16.3745 23.9173L20.1774 23.9168C20.9439 23.9168 21.6173 23.9168 22.1754 23.978C22.7793 24.0443 23.3638 24.1918 23.9101 24.5617C24.4563 24.9313 24.8103 25.4195 25.0961 25.9555C25.3603 26.4508 25.6103 27.0762 25.8949 27.7877L26.3276 28.8693C26.3339 28.885 26.3398 28.901 26.3454 28.9168H28.4221L33.5396 28.2772C33.6961 28.2575 33.9166 28.0858 33.9166 27.7588V22.393L31.3028 23.0465C30.6331 23.2138 29.9544 22.8067 29.7869 22.137C29.6196 21.4672 30.0268 20.7885 30.6964 20.6212L33.0334 20.0368C32.9309 19.8908 32.8201 19.7427 32.7013 19.5923C32.0918 18.822 31.3803 18.1255 30.6929 17.4528L30.4863 17.2502ZM20.6948 26.4178H16.3057C15.7788 26.4204 15.4021 26.4297 15.0981 26.4632C14.7234 26.5042 14.5808 26.5717 14.4921 26.6318C14.4034 26.6918 14.2877 26.7992 14.1104 27.1318C13.9185 27.4917 13.7183 27.9875 13.4036 28.7742L13.3466 28.9168L23.6539 28.9168L23.5969 28.7742C23.2823 27.9875 23.0819 27.4917 22.8901 27.1318C22.7128 26.7992 22.5971 26.6918 22.5084 26.6318C22.4198 26.5717 22.2771 26.5042 21.9024 26.4632C21.5984 26.4297 21.2217 26.4204 20.6948 26.4178ZM23.6802 8.08474L13.3188 8.08474C12.5669 8.08818 12.0066 8.10102 11.55 8.1488C10.967 8.20981 10.6803 8.31785 10.4754 8.4532C10.2792 8.58285 10.0948 8.7786 9.86219 9.2369C9.61192 9.73001 9.36514 10.4025 8.98812 11.4393L7.78415 14.7502L29.2149 14.7502L28.0109 11.4393C27.6339 10.4025 27.3871 9.73001 27.1369 9.2369C26.9043 8.7786 26.7199 8.58285 26.5236 8.4532C26.3188 8.31785 26.0321 8.20981 25.4491 8.1488C24.9925 8.10102 24.4321 8.08818 23.6802 8.08474ZM19.8442 3.08457L17.1557 3.08457C17.1163 3.09072 16.975 3.13177 16.7924 3.40555C16.5853 3.71623 16.4166 4.21743 16.4166 4.8335C16.4166 5.17341 16.5108 5.42463 16.5973 5.55433L16.6178 5.5835L20.3821 5.5835L20.4026 5.55433C20.4891 5.42463 20.5833 5.17341 20.5833 4.8335C20.5833 4.21743 20.4146 3.71623 20.2074 3.40555C19.9944 3.08615 19.8376 3.0835 19.8333 3.0835L19.8442 3.08457Z" fill="#022968"/>
    </svg>
    ),
    title : 'Car Service'
  },
  {
    icon : () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4999 0.75C24.5441 0.749973 30.5232 3.10944 35.9731 7.71143C36.5005 8.15683 36.5671 8.94549 36.1217 9.47294C35.6763 10.0004 34.8876 10.0669 34.3602 9.62153C29.2837 5.33484 23.8593 3.24998 18.5 3.25C13.1406 3.25002 7.71621 5.33494 2.63975 9.62171C2.1123 10.0671 1.32364 10.0006 0.87824 9.47314C0.432837 8.94569 0.499352 8.15703 1.02681 7.71163C6.47666 3.10955 12.4558 0.750027 18.4999 0.75ZM30.1616 12.7305C23.3957 6.74448 13.9822 6.77657 6.86639 12.7064C6.33604 13.1483 6.26439 13.9366 6.70634 14.4669C7.1483 14.9972 7.9365 15.0689 8.46685 14.6269C14.6844 9.44566 22.7122 9.47774 28.505 14.6029C29.022 15.0603 29.812 15.012 30.2695 14.4949C30.7269 13.9779 30.6786 13.1879 30.1616 12.7305ZM25.6338 17.7828C21.8123 13.9613 15.1875 13.9613 11.366 17.7828C10.8779 18.2709 10.8779 19.0624 11.366 19.5506C11.8542 20.0387 12.6456 20.0387 13.1338 19.5506C15.979 16.7054 21.0209 16.7054 23.866 19.5506C24.3542 20.0387 25.1456 20.0387 25.6338 19.5506C26.122 19.0624 26.122 18.2709 25.6338 17.7828ZM17.2499 24.5C17.2499 23.8096 17.8096 23.25 18.4999 23.25C19.1903 23.25 19.7499 23.8096 19.7499 24.5C19.7499 25.1904 19.1903 25.75 18.4999 25.75C17.8096 25.75 17.2499 25.1904 17.2499 24.5ZM18.4999 20.75C16.4289 20.75 14.7499 22.4289 14.7499 24.5C14.7499 26.5711 16.4289 28.25 18.4999 28.25C20.571 28.25 22.2499 26.5711 22.2499 24.5C22.2499 22.4289 20.571 20.75 18.4999 20.75Z" fill="#022968"/>
    </svg>
    ),
    title : 'Free WiFi'
  },
]

const PainToProgress = [
  {
    img : Consultation,
    title : 'Personalised Consultation',
    body : 'We listen to understand your pain points and goals.'
  },
  {
    img : Diagnosis,
    title : 'Accurate Diagnosis',
    body : 'Using advanced imaging and evaluation techniques, we pinpoint the root cause.'
  },
  {
    img : Treatment,
    title : 'Tailored Treatment Plan',
    body : 'Whether surgical or non-surgical, we develop a plan that aligns with your lifestyle and recover y timeline.'
  },
  {
    img : ExpertCare,
    title : 'Expert Care',
    body : 'Our skilled team performs procedures with precision and compassion.'
  },
  {
    img: aftercare,
    title: "Ongoing Recovery Support",
    body: "Your journey continues with us. We provide dedicated post-treatment care and guidance for a full and lasting recovery."
  }
]

const OrthoConditionsWeTreat = [
  {
    area: 'Neck',
    area_procedures: {
      title: 'Neck Procedures',
      desc: 'Our expert spine specialists provide comprehensive neck care, treating conditions such as cervical disc herniation, spinal stenosis, and degenerative disc disease. We focus on relieving pain, restoring function, and using the least invasive techniques for optimal recovery.'
    },
    view_all_treatments: { text: 'View all Neck Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Cervical Disc Replacement',
        slug: 'cervical-disc-replacement'
      },
      {
        name: 'Anterior Cervical Discectomy and Fusion',
        slug: 'acdf-surgery'
      },
      {
        name: 'Cervical Laminectomy',
        slug: 'posteriorcervicallaminoplasty'
      },
      {
        name: 'Cervical Foraminotomy',
        slug: 'posterior-cervical-foraminotomy-surgery'
      },
      {
        name: 'Neck Pain Management',
        slug: 'neck-pain-treatment-and-shoulder-pain-relief'
      },
    ]
  },
  {
    area: 'Shoulder',
    area_procedures: {
      title: 'Shoulder Procedures',
      desc: 'At Mountain Spine & Orthopedics, our expert shoulder surgeons specialize in advanced shoulder procedures to treat a wide range of conditions, including rotator cuff tears, shoulder instability, and chronic shoulder pain. Using cutting-edge surgical techniques and minimally invasive approaches, we focus on relieving pain, restoring shoulder mobility, and delivering faster recovery times with optimal results.'
    },
    view_all_treatments: { text: 'View all Shoulder Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Rotator Cuff Repair',
        slug: 'rotatorcuffrepair'
      },
      {
        name: 'Shoulder Arthroscopy', 
        slug: 'shoulderarthroscopy'
      },
      {
        name: 'Resurfacing Shoulder Replacement',
        slug: 'resurfacingshoulderreplacement'
      },
      {
        name: 'Shoulder Instability',
        slug: 'shoulder-instability'
      },
      {
        name : 'Fracture Fixation Surgery',
        slug : 'fracturefixation'
      }
    ]
  },
  {
    area: 'Hand',
    area_procedures: {
      title: 'Hand Procedures',
      desc: 'Our hand specialists provide expert care for conditions ranging from carpal tunnel syndrome to arthritis and trigger finger. Using advanced microsurgical techniques and minimally invasive approaches, we focus on restoring hand function, reducing pain, and improving quality of life through precise surgical intervention and comprehensive treatment plans.'
    },
    view_all_treatments: { text: 'View all Hand Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Arthritis Treatment',
        slug: 'anti-inflammatory-injections'
      },
      {
        name: 'Carpal Tunnel Treatment', 
        slug: 'carpaltunnelrelease'
      },
      {
        name: 'Trigger Finger Release Surgery',
        slug: 'triggerfingerrelease'
      }
    ]
  },
  {
    area: 'Spine',
    area_procedures: {
      title: 'Spine Procedures',
      desc: 'Our spine specialists treat a wide range of conditions including degenerative disc disease, spinal deformities, and nerve compression using both minimally invasive procedures and comprehensive non-surgical care to alleviate pain, improve stability, and enhance overall spinal health.'
    },
    view_all_treatments: { text: 'View all Spine Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Anterior Cervical Discectomy & Fusion',
        slug: 'acdf-surgery'
      },
      {
        name: 'Facet Joint Rhizotomy Ablation',
        slug: 'facet-ablation-rhizotomy-treatment'  
      },
      {
        name: 'Anterior Cervical Corpectomy & Fusion',
        slug: 'anterior-cervical-corpectomy-and-fusion'
      },
      {
        name: 'Artifical Disc Arthroplasty',
        slug: 'artificial-disc-replacement-surgery'
      },
      {
        name: 'Axial Fusion Surgery',
        slug: 'axial-fusion-surgery'
      },
      
    ]
  },
  {
    area: 'Lower Back',
    area_procedures: {
      title: 'Lower Spine Procedure',
      desc: 'Our lower back specialists address conditions such as herniated discs, spinal stenosis, and sciatica through a combination of advanced surgical techniques and conservative therapies, aiming to relieve pain, restore mobility, and enhance spinal function.'
    },
    view_all_treatments: { text: 'View all Lower Back Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Lumbar Microdiscectomy',
        slug: 'lumbar-microdiscectomy-surgery'
      },
      {
        name: 'Lumbar Laminectomy',
        slug: 'lumbar-laminectomy-surgery'
      },
      {
        name: 'Lumbar Interbody Fusion',
        slug: 'lumbar-fusion-surgery'
      },
      {
        name: 'Anterior Lumbar Interbody Fusion',
        slug: 'anterior-lumbar-interbody-fusion'
      },
      {
        name: 'Lumbar Artificial Disc Replacement',
        slug: 'artificial-disc-replacement-surgery'
      }
    ]
  },
  {
    area: 'Knee',
    area_procedures: {
      title: 'Knee Procedures',
      desc: 'From sports injuries to chronic arthritis, our knee surgeons provide advanced care including ACL repair, meniscus surgery, and total knee replacement. Our goal is to restore movement, relieve pain, and help patients return to daily activities faster.'
    },
    view_all_treatments: { text: 'View all Knee Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'ACL Reconstruction',
        slug: 'acl-reconstruction-surgery'
      },
      {
        name: 'Meniscus Repair', 
        slug: 'arthroscopickneesurgery'
      },
      {
        name: 'Total Knee Replacement',
        slug: 'totalkneereplacement'
      },
      {
        name: 'Knee Arthroscopy',
        slug: 'arthroscopickneesurgery'
      },
    ]
  },
  {
    area: 'Foot',
    area_procedures: {
      title: 'Foot Procedures',
      desc: 'Our foot and ankle specialists treat a wide range of conditions, including bunions, plantar fasciitis, and fractures. We use cutting-edge techniques to ensure the best outcomes and minimal downtime for our patients.'
    },
    view_all_treatments: { text: 'View all Foot Treatments', href: '/' },
    treatment_categories: [
      {
        name: 'Bunion Correction',
        slug: 'bunioncorrectionsurgery'
      },
      {
        name: 'Ankle Ligament Reconstruction', 
        slug: 'ankle-ligament-reconstruction-surgery'
      },
      {
        name: 'Foot Fracture Fixation',
        slug: 'fracturefixation'
      },
    ]
  },
];

export default function Home() {
  const [ selectedService , setSelectedService ] = useState('Foot & Ankle')
  const [ selectedOrthoCondition, setSelectedOrthoCondition ] = useState(OrthoConditionsWeTreat[0])
  return (
    <main className=" w-full flex flex-col items-center justify-center bg-white h-full" >
      {/* Hero Section */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div 
        style={{
        background: 'white',
        filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={'https://mountainspineortho.b-cdn.net/public/home-landing-min.jpeg'} priority={true} layout='fill' className=" xl:max-h-[945px] h-full absolute top-0 object-cover  object-center md:object-top pt-16 self-end w-full md:pl-[100px] pl-8" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left xl:px-6 xl:py-8 relative  xl:pb-[160px]">
          <div className="lg:w-[60%] h-full absolute left-0 top-0 md:w-[85%] w-full"
          style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
          }}
          />

         <SlidingDiv position="left" className="z-[2]">
           <div className="lg:px-[80px]  px-8 flex sm:flex-row flex-col space-x-4 md:space-x-[20px] sm:items-center justify-start sm:space-y-0 space-y-2 mt-[128px] lg:w-[55%]">
              <div><Avatars /></div>
              <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "0.02em",
              }}
              className=" text-white"
              >
                100,000+ Happy Patient's
              </h1>
           </div>
         </SlidingDiv>

         <SlidingDiv position="left" className="z-[2]"
         >
           <div className="lg:px-[80px] px-8 my-[24px] xl:w-[44%] lg:w-[50%]">
              <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                lineHeight: "110%",
              }}
              className="text-white text-5xl sm:text-6xl xl:text-6xl"
              >
              Welcome to<br/> Mountain <br/> Spine & Orthopedics 
              </h1>
           </div>
         </SlidingDiv>

         <SlidingDiv position="left" className="z-[2]">
           <div className="lg:px-[80px] px-8 mb-[24px] xl:w-[50%] md:w-[80%] md:text-left sm:text-center">
              <p
              style={{
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "148%",
              }}
              className="text-white"
              >
              Experience the future of orthopedic care at our modern facility, where our expert team combines advanced technology with personalized treatment plans to deliver fast, effective minimally invasive procedures. 
              </p>
           </div>
         </SlidingDiv>
          
          <SlidingDiv position="left" className="z-[2]">
            <div className="lg:px-[80px] px-8 my-[24px] xl:w-[55%] flex md:flex-row flex-col md:space-y-0 space-y-4 space-x-[16px]">
              <div className=""><BookAnAppoitmentButton /></div>
              <button 
                  className="h-full max-h-[56px] group hover:cursor-pointer  px-[32px] py-[16px] rounded-[62px] relative flex items-center  justify-center `md:justify-between bg-[white] text-[#0094E0]  w-full md:w-fit font-[500] text-[14px] "
                  >
                  <p className="group-hover:scale-[1.1] transition-all duration-300 ease-in-out">Contact Us</p>
                  <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                          <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#0094E0"/>
                      </svg>
                  </div>
              </button>
            </div>
          </SlidingDiv>

          <div className="z-[2] w-full flex flex-row items-center justify-evenly xl:absolute bottom-0 left-0 right-0 bg-white py-12 xl:py-0 xl:pt-[32px] xl:pb-[50px]"
          style={{
            background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
          }}
          >


            <Marquee pauseOnHover className="w-full" >
              {
                [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                  <Image key={index} src={item} alt="Logo" className=" lg:h-[40px] h-10 md:h-8 object-contain mx-[20px]" draggable={false}/>
                ))
              }
            </Marquee>

          </div>

        </div>
        
      </section>
      {/*  */}

      {/* Services & Expertise */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-3 md:px-[40px]">
            <div className=" xl:grid xl:grid-cols-3 flex flex-col gap-[32px]">
              <div className=" rounded-[24px] bg-[#FAFAFA] p-[40px] flex flex-col col-span-1">

                <div className=" bg-white rounded-[32px] px-[14px] py-[7px] w-fit ">
                  <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    background : 'linear-gradient(270deg, #D4ABE5 0%, #9596EC 100%)',
                    backgroundClip : 'text',
                    WebkitBackgroundClip : 'text',
                    WebkitTextFillColor : 'transparent'
                  }}
                  className=" text-sm text-center"
                  >The Future of Spine & Orthopedic Care
                  </h1>
                </div>
                
                <div className="mt-[12px]">
                  <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    color : '#022968',
                  }}
                  className="text-5xl text-left"
                  >Services & Expertise</h1>
                </div>
                
                <div className="grid grid-cols-2 gap-[10px] mt-[40px]">
                  {
                    ServicesAndExpertise.map(( item ) => (
                      <div
                      key={item.title} className={`flex flex-row px-[15px] py-[10px] space-x-[10px] bg-[#EFF5FF] rounded-2xl hover:border hover:border-[#2358AC] items-center justify-center hover:cursor-pointer ${selectedService == item.title ? 'border border-[#2358AC]' : ''}`} onClick={() => setSelectedService(item.title)}>
                        <Image src={item.img} alt={item.title} className="h-[22px] w-[22px] "/>
                        <h1 className={`${selectedService == item.title ? 'text-[#2358AC]' : 'text-[#5B5F67]'} `}>{item.title}</h1>
                      </div>
                    ))
                  }
                </div>
                <div>

                </div>

              </div>

              <div className=" rounded-[24px] bg-[#FAFAFA] p-10 flex flex-col col-span-2">
                <div className="">
                  <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    color : 'black',
                    lineHeight : 1.5
                  }}
                  className="md:px-6 sm:text-2xl text-lg"
                  >
                    We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis,
                    sports injuries, and joint pain. Using minimally invasive techniques
                    and evidence-based treatments, our specialists provide personalised solutions for faster recovery and lasting mobility.
                  </h1>
                </div>

                <div className=" mt-[40px] md:w-[45%] "> 
                <BookAnAppoitmentButton />
                </div>
                
                <div>

                </div>

              </div>
            </div>

            <Reveal className="w-full" width="100%">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[32px]">
                  {
                    ServicesAndExpertise.map((item,index) => (
                      <div className="flex flex-col p-4 rounded-[24px] space-y-[24px] hover:cursor-pointer" key={item.title}
                      onClick={() => setSelectedService(item.title)}
                      style={{
                        background : selectedService == item.title ? 'linear-gradient(177deg, #022968 -13.59%, #0094E0 109.86%)' : '#FAFAFA'
                      }}
                      >
                        <div className=" flex flex-row items-center justify-between">
                          <div className=" rounded-full border border-[#EFF5FF] h-12 w-12 items-center justify-center flex">
                            <h1 
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color : selectedService == item.title  ? 'white' : '#022968'
                            }}
                            className="text-lg self-center"
                            >0{index + 1}</h1>
                          </div>
  
                         <div className=" bg-[#EFF5FF] rounded-full border border-[#EFF5FF] py-3 px-6"> <Image src={item.img} alt={item.title} className="h-[22px] w-[22px] "/> </div>
                          
                        </div>
  
                        <div className=" flex flex-col space-y-[16px]">
                            <h1
                             style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color : selectedService == item.title  ? 'white' : '#022968',
                            }}
                            className="text-3xl"
                            >{item.title}</h1>
  
                            <h1
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color : selectedService == item.title  ? '#EFF5FF' : '#5B5F67',
                            }}
                            className="text-lg"
                            >
                              {item.desc}
                            </h1>
                        </div>
  
                       <div className="w-full max-h-[240px] h-full relative" >
                        <Image src={item.anatomy} alt={item.title} height={240} width={240} layout="responsive" className="w-full max-h-[240px] h-full object-cover aspect-square rounded-[24px] lg:h-[240px]"/>
                       </div>
                      </div>
                    ))
                  }
              </div>
            </Reveal>
      </section>
      {/*  */}

      {/* Expert Orthopedic Conditions We Treat */}
      <section className=" w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center">
          <div className=" bg-[#EBF2FA] rounded-[40px] flex items-center justify-center w-full py-[60px] px-2 md:px-[60px] space-y-[60px] relative flex-col">

           <div className=" flex flex-col space-y-[16px]">
              <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                color : '#022968',
                lineHeight : 1.3
              }}
              className="text-5xl sm:text-6xl text-center"
              >
                Expert Orthopedic<br/> Conditions We Treat
              </h1>
              <h1
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color : '#5B5F67',
                lineHeight : 1.3
              }}
              className="text-xl text-center lg:w-[60%] self-center"
              >
              We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis, sports injuries, and joint pain. 
              </h1>
           </div>


           <div className=" flex xl:flex-row flex-col justify-between w-full relative">
             {/* Treatment Categories */}
             <div className=" xl:py-24  z-20 xl:max-w-[30%] xl:w-[20%] w-full">
                <h1
                style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                color : '#022968',
                }}
                className=" text-2xl  xl:text-start text-center"
                >
                  See Our Treatment Category
                </h1>

                <div className=" space-y-[20px] flex flex-col mt-[24px]">
                  {
                    selectedOrthoCondition.treatment_categories.map((item, index) => (
                      <Link key={index} href={`/treatments/${item.slug}`} className=" px-[28px] py-[14px] hover:bg-[#e8f0ff] bg-white rounded-[62px] hover:cursor-pointer hover:scale-[1.01] text-center">
                        <p className=" font-[500] text-black text-lg">{item.name}</p>
                      </Link>
                    ))
                  }
                </div>
             </div>


             <div className="relative z-10 lg:overflow-visible overflow-hidden h-fit  "> {/* Wrapper with high z-index  xl:-right-[46%]  lg:right-[5%]*/}
                {/* Circles behind the image */}
                <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full h-[90%] sm:w-[730px] z-0 lg:max-h-[705px] xl:h-[705px] lg:h-[750px] pointer-events-none sm:flex hidden" /> {/* Added pointer-events-none */}

                {/* Removed left-40 xl:-right-[16%] lg:right-[18%] mx-auto */}
                {/* Added left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 and max-w-full */}
                <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full w-[500px] bg-[#F5F8FD] h-[60%] lg:h-[480px] items-center justify-center z-0  pointer-events-none sm:flex hidden"> {/* Added pointer-events-none */}
                  <div className="bg-white h-[70%] w-[70%] rounded-full z-0" />
                </div>

                {/* Neck */}
                <motion.div className="rounded-[50px] absolute p-[10px] top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Neck' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Neck' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[0])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Neck' ? 'bg-[#5E96F0]' : 'bg-white'}` } />
                </motion.div>

                {/* Right Shoulder Dot */}
                <motion.div
                className="rounded-[50px] absolute p-[10px] top-[20%] sm:top-38 z-20 xl:left-[60%] left-[60%] md:left-[55%] hover:cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.40)",
                  boxShadow: "0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(2.95px)",
                }}
                animate={
                  selectedOrthoCondition.area == 'Shoulder' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Shoulder' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[1])}
              >
                <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Shoulder' ? 'bg-[#5E96F0]' : 'bg-white'}` }/>
              </motion.div>

              {/* Hand */}
              <motion.div className="rounded-[50px] absolute p-[10px] top-[50%] z-20  transform -translate-x-1/3 xl:-translate-x-1/2 -translate-y-1/2 xl:left-14 lg:left-1/3 md:left-[calc(1/3.6*100%)] sm:left-[calc(1/3.5*100%)] left-[calc(1/6*100%)]  hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Hand' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Hand' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[2])}

                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Hand' ? 'bg-[#5E96F0]' : 'bg-white'}` } />
               </motion.div>

                {/*Spine*/}
                <motion.div className="rounded-[50px] absolute p-[10px] top-[30%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Spine' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Spine' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[3])}

                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Spine' ? 'bg-[#5E96F0]' : 'bg-white'}` } />
                </motion.div>


                {/* Lower Back */}
                <motion.div className="rounded-[50px] absolute p-[10px]  top-[42%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Lower Back' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Lower Back' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[4])}

                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Lower Back' ? 'bg-[#5E96F0]' : 'bg-white'}` } />
                </motion.div>

                {/* Left Knee */}
                <motion.div className="rounded-[50px] absolute p-[10px] xl:top-110 top-[65%] sm:top-120 z-20 xl:right-[53%] right-[54%] hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Knee' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Knee' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[5])}

                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Knee' ? 'bg-[#5E96F0]' : 'bg-white'}` }  />
                </motion.div>

                 {/* Right Foot */}
                 <motion.div className="rounded-[50px] absolute p-[10px] xl:top-150 top-[85%] xs:top-132 sm:top-160 z-20 left-[55%] hover:cursor-pointer"
                style={{
                  background  : 'rgba(255, 255, 255, 0.40)',
                  boxShadow  : '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)',
                  backdropFilter : 'blur(2.950000047683716px)',
                }}
                animate={
                  selectedOrthoCondition.area == 'Foot' 
                    ? { scale: [1, 1.2, 1] } // Active pulsating animation
                    : { scale: 1 } // Idle state
                }
                transition={{
                  duration: 1.5,
                  repeat: selectedOrthoCondition.area == 'Foot' ? Infinity : 0,
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[6])}

                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area == 'Foot' ? 'bg-[#5E96F0]' : 'bg-white'}` } />
                </motion.div>


                {/* Foreground image */}
                <div className="relative z-10">
                  <Image 
                    src={'https://mountainspineortho.b-cdn.net/public/HumanModel.png'} 
                    alt="Human Anatomy Model"
                    height={705}
                    layout="responsive"
                    width={1440}
                    className="w-full max-h-[750px] max-h-sm  xl:max-h-[705px] h-full object-contain xl:object-cover py-4" 
                  />
                </div>
              </div>


             <div className=" flex flex-col space-y-[10px] xl:w-[20%] w-full  xl:pt-50 z-20">
               <TextAnimate  animation="blurInUp" by="character" once style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color : '#022968',
                  }}
                  className=" xl:text-2xl lg:text-3xl"> 
                   {selectedOrthoCondition.area_procedures.title}
               </TextAnimate>
                <h1> 
                  {selectedOrthoCondition.area_procedures.desc}
                </h1>
                <Link 
                className=" mt-[12px] max-h-[56px] h-full  rounded-[62px] space-x-[10px] relative flex p-8 bg-[#0094E0] text-white text-[14px] font-[500] w-fit xl:w-full justify-center items-center hover:cursor-pointer"
                href={'/treatments'}
                >
                    <TextAnimate
                    animation="blurInUp" by="word" once 
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    >{selectedOrthoCondition.view_all_treatments.text}</TextAnimate>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                      <path d="M12.9985 1.46524C12.752 1.23664 12.4267 1.10984 12.1498 1.03007C11.8544 0.944969 11.5165 0.886948 11.1686 0.84632C10.4713 0.764898 9.65365 0.744548 8.88838 0.751159C8.11878 0.757808 7.38161 0.791999 6.83826 0.824347C6.56612 0.840548 6.34152 0.856353 6.18445 0.868151C6.1059 0.874051 6.04417 0.878953 6.00177 0.882408L5.95295 0.88645L5.93999 0.887552L5.93495 0.887986C5.5223 0.923934 5.21693 1.2876 5.25287 1.70025C5.28882 2.11288 5.65303 2.4182 6.06565 2.38228L6.06817 2.38207L6.07907 2.38114L6.12358 2.37745C6.16303 2.37424 6.2216 2.36959 6.2968 2.36394C6.44725 2.35264 6.66405 2.33737 6.92741 2.3217C7.45506 2.29028 8.16529 2.25746 8.90134 2.2511C9.64171 2.24471 10.3879 2.26536 10.9946 2.3362C11.0287 2.34017 11.062 2.34428 11.0947 2.34852L0.46967 12.9736C0.176777 13.2665 0.176777 13.7413 0.46967 14.0342C0.762563 14.3271 1.23744 14.3271 1.53033 14.0342L12.1578 3.40672C12.1596 3.42107 12.1614 3.43557 12.1631 3.45021C12.2334 4.05004 12.2544 4.80047 12.2486 5.55046C12.2429 6.29576 12.211 7.01955 12.1803 7.55855C12.1651 7.82757 12.1501 8.04947 12.1391 8.20364C12.1336 8.2807 12.129 8.34078 12.1258 8.3813L12.1222 8.42705L12.121 8.44154C12.0868 8.85431 12.3936 9.21673 12.8063 9.25104C13.2191 9.28536 13.5816 8.97805 13.6159 8.56526L13.6163 8.56067L13.6174 8.54746L13.6213 8.49761C13.6247 8.45428 13.6295 8.39119 13.6352 8.31094C13.6467 8.15046 13.6622 7.9211 13.6779 7.64367C13.7094 7.08976 13.7426 6.33985 13.7485 5.56198C13.7545 4.7888 13.7338 3.96659 13.6529 3.27563C13.6125 2.93136 13.5547 2.59687 13.4689 2.30777C13.3907 2.04431 13.258 1.70593 12.9985 1.46524Z" fill="#E5F6FF"/>
                    </svg>
                </Link>
             </div>
              
           </div>

            
          </div>
      </section>
      {/*  */}

      {/* Our Speciality */}
      <section className=" w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center space-y-[60px]">
          <Reveal className="w-full" width="100%">
            <div className=" flex xl:flex-row space-x-[60px] flex-col xl:space-y-0 space-y-8 w-full">
                  <h1
                   style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    color : '#111315'
                   }}
                   className=" text-6xl w-[100%]"
                  >
                    Why Choose<br/> Mountain Spine & Orthopedics
                  </h1>
  
                  <div>
                    <h1
                    style={{
                      fontFamily: "var(--font-reem-kufi)",
                      fontWeight: 400,
                      color : '#5B5F67'
                     }}
                     className="text-lg "
                    >
                    Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results that make a difference. Your mobility and well-being are our top priority!
                    </h1>
  
                    <div className=" mt-[40px] xl:w-[50%] w-full md:w-fit"><BookAnAppoitmentButton /></div>
                  </div>
            </div>
          </Reveal>

          <div className=" flex xl:flex-row flex-col w-full gap-[32px] xl:items-stretch">
          <div className=" xl:w-[50%] w-full rounded-[20px] overflow-hidden"><Image src={HomeWhyAO} className=" w-full h-full md:aspect-video aspect-square  object-cover" alt="Doctor Diagnosing Patient " /></div>

              <div className=" xl:w-[50%] w-full flex flex-col space-y-[32px] ">
                <Reveal className="w-full" width="100%">
                  <div className=" flex flex-col w-full space-y-[16px]">
                    <h1
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                        color : '#111315'
                      }}
                      className=" text-4xl"
                      >
                        Our Specialty
                      </h1>
    
                      <h1
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                        color : '#5B5F67'
                      }}
                      className=" text-lg"
                      >
                       At Mountain Spine & Orthopedics, we are dedicated to providing exceptional care with cutting-edge treatments and a patient-first approach. Here’s why we stand out:
                      </h1>
            </div>
                </Reveal>

                <Reveal className="w-full" width="100%" >
                  <div className=" grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden w-full">
                      {
                        OurSpecialtyItems.map(( item, index ) => (
                          <div key={index} className={`flex flex-col space-y-[16px] ${index == 1 || index == 2 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} p-6`}>
                            <div className=" rounded-full bg-white p-1 items-center justify-center flex w-[20%] px-[12px] py-[15px] ">
                              <item.icon />
                            </div>
                            <h1
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color : '#022968'
                            }}  
                            className=" text-xl"
                            >{item.title}</h1>
                            <h1
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontWeight: 500,
                              color : '#5B5F67'
                            }}  
                            className="text-md"
                            >{item.body}</h1>
                          </div> 
                        ))
                      }
                  </div>
                </Reveal>

              </div>
          </div>
      </section>
      {/*  */}

      {/* Testimonials */}
      <section className=" bg-[#022968] w-full py-[50px]">
        <div className=" w-full max-w-[1440px] flex flex-col space-y-10  md:space-y-0  md:flex-row mx-auto px-[40px] items-center justify-evenly overflow-hidden">
            {
              Testimonials.map((item) => (
                <div className=" flex flex-col space-y-[12px] p-[18px] max-h-[190px] lg:h-[190px] items-center justify-center" key={item.desc}>
                  <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                  }}
                  className=" text-white lg:text-6xl md:text-4xl text-6xl"
                  >
                    <NumberTicker 
                      value={item.value}
                      className="text-white"
                    />
                    {item.stat}
                  </h1>
                  <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                  }}
                  className=" text-white text-xl md:text-lg text-center lg:text-start"
                  >{item.desc}</h1>
                </div>
              ))
            }
        </div>
      </section>
      {/*  */}

      {/* What our patients say */}
       <RatingsAndReviews />
      {/*  */}

      {/* Meet Our Experts */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
        <div className=" flex md:flex-row flex-col">
          <div className=" flex flex-col space-y-[24px] md:w-[50%] w-full">
            <h1
            style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 500,
            }}
            className="text-black text-5xl text-left w-full"
            >Meet Our Experts</h1>
            <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
            }}
            className="text-[#54535C] md:w-[50%] w-full"
            >
              Highly skilled and compassionate professionals ready to care for you
            </h1>
          </div>

          <div className="md:w-[50%] flex items-center md:justify-end w-full md:mt-0 mt-4">
            <Link
            href={'/about/meetourdoctors'}
            className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px]">
            <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
            }}
            className="text-[#022968]"
            >View all</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
              <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968"/>
            </svg>
            </Link>
          </div>
        </div>    
        <div className=" mt-[60px] grid xl:grid-cols-3  grid-cols-1 md:grid-cols-2 gap-[32px]">
            {
              Doctors.slice(0,3).map((item) => (
                <DoctorCard key={item.name} doctor={item}/>
              ))
            }
          </div>
      </section>
      {/*  */}

      {/* Complimentary Perks */}
      <section className="w-full max-w-[1440px] flex xl:flex-row flex-col py-[50px] h-full px-2 md:px-[40px] space-x-[32px]">
        {/* Free MRI Card */}
          <div className=" rounded-[24px] bg-[#FAFAFA] p-[24px] flex flex-col xl:w-[50%] w-full h-full">
              <div className="flex flex-col space-y-[24px]">
                <h1
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color : 'black',
                }}
                className="text-5xl "
                >
                 Top Florida Clinic Free Second Opinion & MRI Reading
                </h1>

                <h1
                 style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color : '#5B5F67',
                  lineHeight : 1.5
                }}
                className=""
                >
                 <span className="text-[#0094E0]">Free Second Opinion.</span>Still suffering from pain-despite multiple treatments? At Mountain Spine & Orthopedics we <span className="text-[#0094E0]">offer a free second opinion</span> and cutting-edge, minimally invasive procedures to relieve pain, restore mobility, and enhance your quality of life.
                </h1>

                <div className="flex md:flex-row flex-col w-full space-x-[11px] md:space-y-0 space-y-4 justify-center items-center">
                  <div className=" md:w-[45%] w-full "> 
                  <BookAnAppoitmentButton />
                  </div>
                  <button className="bg-white border hover:cursor-pointer border-[#022968] px-[32px] py-[16px] space-x-[10px] max-h-[56px] flex flex-row items-center justify-center rounded-[62px] w-full md:w-[45%] group">
                      <h1
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                      }}
                      className="text-[#022968]"
                      >Learn More</h1>
                      <div className=" group-hover:-translate-y-0.5 group-hover:translate-x-0.5   transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                          <path d="M13.4985 0.965242C13.252 0.736636 12.9267 0.609835 12.6498 0.530065C12.3544 0.444969 12.0165 0.386948 11.6686 0.34632C10.9713 0.264898 10.1536 0.244548 9.38838 0.251159C8.61878 0.257808 7.88161 0.291999 7.33826 0.324347C7.06612 0.340548 6.84152 0.356353 6.68445 0.368151C6.6059 0.374051 6.54417 0.378953 6.50177 0.382408L6.45295 0.38645L6.43999 0.387552L6.43495 0.387986C6.0223 0.423934 5.71693 0.787596 5.75287 1.20025C5.78882 1.61288 6.15303 1.9182 6.56565 1.88228L6.56817 1.88207L6.57907 1.88114L6.62358 1.87745C6.66303 1.87424 6.7216 1.86959 6.7968 1.86394C6.94725 1.85264 7.16405 1.83737 7.42741 1.8217C7.95506 1.79028 8.66529 1.75746 9.40134 1.7511C10.1417 1.74471 10.8879 1.76536 11.4946 1.8362C11.5287 1.84017 11.562 1.84428 11.5947 1.84852L0.96967 12.4736C0.676777 12.7665 0.676777 13.2413 0.96967 13.5342C1.26256 13.8271 1.73744 13.8271 2.03033 13.5342L12.6578 2.90672C12.6596 2.92107 12.6614 2.93557 12.6631 2.95021C12.7334 3.55004 12.7544 4.30047 12.7486 5.05046C12.7429 5.79576 12.711 6.51955 12.6803 7.05855C12.6651 7.32757 12.6501 7.54947 12.6391 7.70364C12.6336 7.7807 12.629 7.84078 12.6258 7.8813L12.6222 7.92705L12.621 7.94154C12.5868 8.35431 12.8936 8.71673 13.3063 8.75104C13.7191 8.78536 14.0816 8.47805 14.1159 8.06526L14.1163 8.06067L14.1174 8.04746L14.1213 7.99761C14.1247 7.95428 14.1295 7.89119 14.1352 7.81094C14.1467 7.65046 14.1622 7.4211 14.1779 7.14367C14.2094 6.58976 14.2426 5.83985 14.2485 5.06198C14.2545 4.2888 14.2338 3.46659 14.1529 2.77563C14.1125 2.43136 14.0547 2.09687 13.9689 1.80777C13.8907 1.54431 13.758 1.20593 13.4985 0.965242Z" fill="#022968"/>
                        </svg>
                      </div>
                  </button>
                </div>

                <div className="">
                  <Image src={'https://mountainspineortho.b-cdn.net/public/HomeWhyAO-min.jpeg'} layout="responsive" height={1000} width={1440} alt="Doctor Treating a Patient" className="w-full xl:h-[250px] xl:max-h-[250px] object-cover object-center xl:object-top-left rounded-[12px]"/>
                </div>

              </div>
          </div>
          
          <Reveal className="xl:w-[50%] w-full mt-0 " width="100%">
            <div className=" flex flex-col space-y-[38px] w-full">
                <div className=" bg-[#EFF5FF] w-full rounded-[24px] p-[24px] space-y-[24px] h-[50%]">
                  <div className=" flex flex-col space-y-[8px] ">
                    <h1
                    style={{
                      fontFamily: "var(--font-reem-kufi)",
                      fontWeight: 500,
                      color : 'black',
                      lineHeight : 1.2
                    }}
                    className="text-2xl "
                    >
                    Complimentary MRI Reading
                    </h1>
                    <h1 
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color : '#5B5F67',
                    }}
                    className="lg"
                    > 
                      Get a free MRI reading from our experts to tailor your treatment plan.
                    </h1>
                  </div>
  
                  <div className="grid grid-cols-3 gap-x-[16px]">
                    {
                      [MRI1,MRI2,MRI3].map((item, index) => (
                        <motion.div 
                          whileHover={{
                            translateY : -10
                          }}
                        >
                          <Image src={item} className="w-full h-full aspect-square rounded-[12px]" alt="Image of an MRI Bone Scan" key={index}/>
                        </motion.div>
                      ))
                    }
                  </div>
  
                </div>
  
                <div className=" bg-[#E5F6FF] w-full rounded-[24px] p-4 md:p-[24px] space-y-[24px] h-[50%] items-center justify-center">
                  <div className=" flex flex-col space-y-[8px] items-center justify-center md:mt-10">
                    <h1
                    style={{
                      fontFamily: "var(--font-reem-kufi)",
                      fontWeight: 500,
                      color : 'black',
                      lineHeight : 1.2
                    }}
                    className="md:text-2xl text-4xl text-center"
                    >
                    Complimentary Amenities 
                    </h1>
                    <h1 
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color : '#5B5F67',
                    }}
                    className="w-[65%] text-center"
                    > 
                  Enjoy Complimentary Amenities: Free Car Service, Refreshments & WiFi                  
                  </h1>
                  </div>
  
                  <div className="flex flex-row gap-x-[16px] items-center justify-center">
                    {
                      Amenities.map((item, index) => (
                        <motion.div 
                        whileHover={{
                          translateY : -5,
                          scale : 1.02
                        }}
                        className=" flex flex-col space-y-[12px] max-w-[88px] aspect-square p-[8px] items-center justify-center" key={item.title}>
                          <div className=" bg-white rounded-[12px] aspect-square flex items-center justify-center p-[8px]">
                            <item.icon />
                          </div>
                          <div>
                            <h1
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                            }}
                            className="text-sm text-[#022968]"
                            >{item.title}</h1>
                          </div>
                        </motion.div>
                      ))
                    }
                  </div>
  
                </div>
            </div>
          </Reveal>
      </section>
      {/*  */}

      {/* From Pain to Progress */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] ">
        <div
        style={{
          background : 'linear-gradient(246deg, #FAFBFC 13.17%, #E0F5FF 52.92%, #E1ECFE 99.53%)'
        }}
        className=" w-full p-[40px] rounded-[24px] items-center justify-center flex flex-col space-y-[0px]"
        > 

          <div className="w-full flex items-center justify-center flex-col">
            <div className=" bg-white px-[14px] py-[7px] flex items-center justify-center max-w-[150px] rounded-[62px] self-center">
              <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                background : 'linear-gradient(177deg, #022968 -13.59%, #0094E0 109.86%)',
                backgroundClip : 'text',
                WebkitBackgroundClip : 'text',
                WebkitTextFillColor : 'transparent'
              }}
              className="text-xl"
              >
                Our Process
              </h1>
            </div>

            <div>
              <h1
               style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-5xl text-black mt-[20px]"
              >
              From Pain to Progress
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <h1
               style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-lg text-[#5B5F67] mt-[20px] text-center w-full md:w-[55%] self-center"
              >
                Trust Mountain Spine & Orthopaedics for expert care, compassionate service, and results 
                that make a difference. Your mobility and well-being are our top priority!
              </h1>
            </div>
          </div>

          <div className=" w-full md:mt-[60px] mt-4 ">
          <Carousel className="w-full h-full " >
              <CarouselContent className=" -ml-4 md:gap-x-4 " minusOffset={2}>
                {
                PainToProgress.map((item, index) => (
                <CarouselItem className="xl:basis-1/3 md:basis-1/2 pl-6 relative" key={index}>
                  <div className=" bg-[#EFF5FF] flex flex-col p-4 rounded-[24px] space-y-[32px]" key={item.title}>
                     <div >
                      <Image src={item.img} alt={item.title} className="w-full max-h-[240px] h-[240px] object-cover rounded-[24px] lg:h-[240px]" draggable={false}/>
                     </div>

                      <div className=" flex flex-col space-y-[16px]">
                          <h1
                           style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 500,
                            color : '#022968',
                          }}
                          className="text-xl"
                          >{item.title}</h1>

                          <h1
                          style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 500,
                            color : '#5B5F67',
                          }}
                          className="text-lg"
                          >
                            {item.body}
                          </h1>

                          {/* <h1
                           style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 500,
                            color : '#022968',
                          }}
                          className="text-xl flex flex-row space-x-[12px] items-center"
                          >
                          <p>Read More </p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 6 9" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.646479 0.146445C0.841742 -0.0488162 1.15832 -0.0488149 1.35359 0.146448L5.35355 4.14645C5.54882 4.34171 5.54882 4.65829 5.35355 4.85355L1.35355 8.85355C1.15829 9.04882 0.841709 9.04882 0.646447 8.85355C0.451184 8.65829 0.451184 8.34171 0.646447 8.14645L4.29289 4.5L0.646477 0.853552C0.451215 0.658289 0.451217 0.341707 0.646479 0.146445Z" fill="#022968"/>
                          </svg>
                          </h1> */}
                      </div>
                    </div>
                </CarouselItem>
                ))            
                }
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      {/*  */}
      {/* Map */}
      <ClinicsMap />
      {/*  */}

      {/* Contact Us */}
      <ContactUsSection />
    </main>
  );
}
