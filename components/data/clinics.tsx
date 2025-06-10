import { StaticImageData } from 'next/image';

// Define marker data (replace with your actual clinic data)

export interface ClinicsProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone : string;
  region : string;
  link : string;
  slug : string;
  paragraph : string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const clinics : ClinicsProps[]= [
    {
      id: 4,
      name: 'Mountain Spine & Orthopedics Hollywood, FL',
      region : 'Hollywood, FL',
      lat: 26.011352,
      lng : -80.178874,
      address : '3500 Tyler St Hollywood, FL 33021',
      phone : '(754) 212-8736',
      link : 'https://www.google.com/maps/place/3500+Tyler+St,+Hollywood,+FL+33021,+USA/@26.0113543,-80.1814945,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9abe7a8e924a9:0xf99f3efb0fd2eb8!8m2!3d26.0113495!4d-80.1789196!16s%2Fg%2F11b8v4qncd?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD',
      slug: 'hollywood-fl-orthopedics',
      paragraph : `
      For those in search of an **orthopedic doctor in Hollywood, FL**, Mountain Spine & Orthopedics is the premier destination. Our fellowship-trained, board-certified surgeons are recognized as leading **sports medicine surgeons in FL**, blending advanced techniques with genuine compassion. Patients across the state trust us for exceptional, outcome-focused care.
      [PARAGRAPH BREAK]At Mountain Spine & Orthopedics, our **orthopedic specialists in Hollywood, FL** treat the full spectrum of musculoskeletal and spinal conditions. Whether you're dealing with issues related to vertebrae, discs, nerves, or joints, our team is here to help. We utilize state-of-the-art diagnostic imaging and minimally invasive procedures to restore you to an active, pain-free lifestyle as quickly and safely as possible.
      [PARAGRAPH BREAK]With a statewide reputation for excellence and nine convenient Florida locations, Mountain Spine & Orthopedics is your trusted partner in health. Our dedicated ambulatory surgery center is designed for your comfort and efficiency. We provide comprehensive care for a wide array of conditions, including herniated discs, spinal stenosis, sciatica, and sports-related injuries, delivering world-class treatment and rehabilitation under one roof. For trusted **orthopedic care in Hollywood, FL**, look no further.
      `,
      keywords: ['orthopedic hollywood fl', 'orthopedic doctor hollywood fl', 'orthopedic surgeon hollywood fl', 'pediatric orthopedic hollywood fl', 'orthopedic doctor hollywood, fl', 'orthopedic urgent care hollywood fl', 'los angeles west hollywood board certified orthopedic specialist', 'orthopedic in hollywood fl', 'orthopedic surgeon in hollywood florida'],
      metaTitle: 'Orthopedic Doctors in Hollywood FL | Sports Medicine Surgeons in FL',
      metaDescription: 'Find top Orthopedic Doctors in Hollywood FL at Mountain Spine & Orthopedics. Our Sports Medicine Surgeons in FL treat injuries with advanced & personalized care.'
    },
    {
      id: 3,
      name: 'Mountain Spine & Orthopedics Palm Springs, FL',
      region : 'Palm Springs, FL',
      lat: 28.674217,
      lng: -81.374192,
      address : '652 Palm Springs Dr Altamonte Springs, FL 32701',
      phone : '(407) 565-7598',
      link : 'https://maps.app.goo.gl/qtg72mbS8WFcSuxS7',
      slug: 'palm-spring-orthopedics',
      paragraph : `
      For the residents of Palm Springs and the surrounding Palm Beach County communities, Mountain Spine & Orthopedics offers a dedicated, local center for world-class spine and **orthopedic care**. We understand that life here is active and family-focused, and persistent pain shouldn't keep you on the sidelines. Our mission is to provide our neighbors with the advanced, compassionate treatment they need to live full, healthy lives, right here in their own community.
      [PARAGRAPH BREAK]
      Our Palm Springs clinic is staffed by highly respected, fellowship-trained, and board-certified **orthopedic surgeons** who combine years of specialized experience with a genuine commitment to patient well-being. They are experts in diagnosing and treating the full spectrum of musculoskeletal issues, including debilitating sciatica, herniated discs, spinal stenosis, and degenerative disc disease. Each patient receives a comprehensive evaluation and a recovery plan tailored specifically to their condition and personal goals.
      [PARAGRAPH BREAK]
      Utilizing the industry’s most advanced diagnostic tools and state-of-the-art, minimally invasive techniques, we tackle pain at its source. Our expertise in laser and endoscopic procedures means smaller incisions, less postoperative discomfort, and a significantly faster return to your daily routine. Trust Mountain Spine & Orthopedics in Palm Springs to be your partner in restoring function, eliminating pain, and reclaiming your active lifestyle.
      `,
      keywords: ['palm springs orthopedic', 'orthopedic care palm springs', 'spine specialists palm springs', 'orthopedic surgeons palm springs'],
      metaTitle: 'Orthopedic Surgeons in Palm Springs, FL | Mountain Spine',
      metaDescription: 'Advanced spine and orthopedic care in Palm Springs. Our board-certified surgeons specialize in minimally invasive techniques to restore your active lifestyle.'
    },
    {
      id: 5,
      name: 'Mountain Spine & Orthopedics Orlando',
      region : 'Orlando, FL',
      lat: 28.5144368,
      lng: -81.4658519,
      address : '6150 Metrowest Blvd Suite 102 Orlando, FL 32835',
      phone : '(407) 960-1717',
      link : 'https://www.google.com/maps/place/Orthopedic+%26+Laser+Spine+Surgery+(Orlando)/@28.5136111,-81.466257,15z/data=!4m6!3m5!1s0x88e77853a8dbc7bb:0x8835f4fad688eb5!8m2!3d28.5136111!4d-81.466257!16s%2Fg%2F1q6c8m48j?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD',
      slug: 'orlando-orthopedics',
      paragraph : `
      Orlando residents no longer need to search far and wide for a world-class **Orlando orthopaedic center**; Mountain Spine & Orthopedics brings its renowned services to the heart of The City Beautiful. We understand the physical demands of life in Central Florida and our mission is to provide accessible, top-tier care that gets Orlando back to work and play. We are the trusted **Orlando orthopaedic center and walk-in clinic** for all your needs.
      [PARAGRAPH BREAK]
      Our Orlando team includes fellowship-trained, board-certified **Orlando orthopaedic surgeons** celebrated for their technical skill and patient-first philosophy. We provide comprehensive, compassionate treatment for a host of conditions, including degenerative disc disease, painful sciatica, herniated discs, and complex sports injuries. Every treatment plan is highly individualized, ensuring we address the specific cause of your pain to achieve lasting results.
      [PARAGRAPH BREAK]
      Inside our state-of-the-art **Orlando orthopaedic center in Orlando, FL**, we utilize the latest in diagnostic technology and minimally invasive surgical techniques. These advanced methods allow for smaller incisions, less pain, and significantly faster recovery times. Trust our commitment to innovative, outcome-focused care to restore your mobility and quality of life. Mountain Spine & Orthopedics is proud to be Orlando’s expert team for spine and orthopedic health.
      `,
      keywords: ['orlando orthopaedic center', 'orlando orthopaedic', 'orlando orthopaedic center and walk-in clinic - lake nona', 'orlando orthopaedic center orlando fl', 'orlando orthopaedic lake nona', 'orlando orthopaedic surgeons', 'orlando orthopaedic center lake nona office', 'orlando orthopaedic center lake nona', 'orlando spine and orthopaedic specialists of central fl', 'orlando orthopaedic center orthopaedic injury walk-in clinic photos'],
      metaTitle: 'Orthopaedic Center in Orlando & Walk-in Clinic in Central Florida',
      metaDescription: 'Visit Mountain Spine and Orthopedics, your trusted Orthopaedic Center in Orlando and Walk-in Clinic in Central Florida for expert care, fast relief, and no appointments.'
    },
    {
      id : 9,
      name : 'Mountain Spine & Orthopedics Fort Pierce',
      region : 'Fort Pierce, FL',
      lat : 27.432531,
      lng : -80.344623,
      address : '2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950',
      link : 'https://www.google.com/maps/place/2215+Nebraska+Ave+Suite+1C,+Fort+Pierce,+FL+34950/@27.4316576,-80.35092,17z/data=!3m1!4b1!4m6!3m5!1s0x88def196a676de3d:0xaac8af034db8a37a!8m2!3d27.4316576!4d-80.3483451!16s%2Fg%2F11wg616lbv?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D',
      phone : '(833) 931-4888',
      slug: 'fort-pierce-orthopedics',
      paragraph : `
      Mountain Spine & Orthopedics is proud to bring its legacy of excellence to Fort Pierce, offering residents along the Treasure Coast direct access to premier **orthopedic doctors in Fort Pierce, FL**. We are deeply committed to the health of the Fort Pierce community, helping our neighbors overcome the pain that keeps them from enjoying an active coastal lifestyle.
      [PARAGRAPH BREAK]
      Our Fort Pierce clinic is staffed by distinguished, board-certified **orthopedic surgeons** with advanced fellowship training in spine and orthopedic medicine. They treat a wide array of musculoskeletal issues with a compassionate, patient-centric approach, specializing in conditions from chronic spinal stenosis and degenerative disc disease to acute herniated discs and sports injuries. We focus on delivering precise diagnoses to build the foundation for an effective and lasting recovery.
      [PARAGRAPH BREAK]
      By pairing our expertise with the most advanced medical technology, we offer innovative, minimally invasive treatment options that set a new standard for **orthopedic care in Fort Pierce, FL**. Our goal is your complete and rapid recovery, facilitated by cutting-edge laser and endoscopic procedures designed for maximum effectiveness and minimal downtime. For comprehensive orthopedic care under one roof, the Fort Pierce community can confidently turn to Mountain Spine & Orthopedics.
      `,
      keywords: ['orthopedic fort pierce', 'fort pierce orthopedic', 'orthopedic doctors fort pierce', 'orthopedic physical therapy fort pierce', 'orthopedic fort pierce fl', 'orthopedic doctors in fort pierce fl', 'orthopedic surgeon fort pierce', 'orthopedic doctor fort pierce'],
      metaTitle: 'Orthopedic Doctors in Fort Pierce, FL | Orthopedic Surgeons Near Me',
      metaDescription: 'Find trusted Orthopedic Doctors in Fort Pierce, FL at Mountain Spine & Orthopedics. Our Orthopedic Surgeons offer expert care for pain, injuries, and recovery.'
    },
    {
      id: 6,
      name: 'Mountain Spine & Orthopedics Palm Beach Gardens',
      region : 'Palm Beach Gardens, FL',
      lat: 26.8307353,
      lng : -80.0878284,
      address : '3355 Burns Rd #304 Palm Beach Gardens, FL 33410',
      phone : '(561) 556-1802',
      link : 'https://www.google.com/maps/place/3355+Burns+Rd+STE+304,+Palm+Beach+Gardens,+FL+33410,+USA/@26.8308667,-80.0900594,17z/data=!3m1!4b1!4m6!3m5!1s0x88df2aae0744a403:0x1f342d8e4463fb50!8m2!3d26.8308619!4d-80.0874845!16s%2Fg%2F11gg6dh9yq?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD',
      slug: 'palm-beach-gardens-orthopedics',
      paragraph : `
      For the discerning residents of Palm Beach Gardens who expect excellence, Mountain Spine & Orthopedics is the trusted provider of advanced spine and orthopedic care. Our local clinic, home to top **orthopedic doctors in Palm Beach Gardens**, is founded on delivering exceptional medical solutions to help our community maintain its active, high-quality lifestyle, free from musculoskeletal pain.
      [PARAGRAPH BREAK]
      The **orthopedic surgeons in Palm Beach Gardens** at our location are distinguished, fellowship-trained, and board-certified specialists renowned for their meticulous approach. They combine this expertise with genuine, patient-focused compassion to treat a variety of conditions, whether it's a golf-related injury, chronic sciatica, or debilitating spinal stenosis. We are passionately committed to creating individualized recovery plans that deliver superior outcomes.
      [PARAGRAPH BREAK]
      We equip our experts with the most innovative technology available, including state-of-the-art diagnostics and minimally invasive surgical options like laser and endoscopic procedures. This focus on advanced techniques ensures our patients experience a quicker, safer, and more comfortable recovery. Trust Mountain Spine & Orthopedics in Palm Beach Gardens to provide the precise diagnosis and compassionate treatment you deserve, with **same-day orthopedic appointments in Palm Beach Gardens** available.
      `,
      keywords: ['orthopedic doctors palm beach gardens', 'orthopedic palm beach gardens', 'orthopedic surgeon palm beach gardens', 'pediatric orthopedic bracing palm beach gardens', 'same-day orthopedic appointments palm beach gardens', 'orthopedic surgeons palm beach gardens', 'pediatric orthopedic palm beach gardens', 'orthopedic palm beach gardens fl', 'orthopedic doctor palm beach gardens', 'orthopedic urgent care palm beach gardens', 'orthopedic doctors in palm beach gardens', 'orthopedic surgeon palm beach gardens fl', 'palm beach orthopedic palm beach gardens'],
      metaTitle: 'Orthopedic Doctors in Palm Beach Gardens, Florida',
      metaDescription: 'Mountain Spine & Orthopedics connects you with top Orthopedic Doctors in Palm Beach Gardens, Florida—personalized care for sports injuries, arthritis, and more.'
    },
    {
      id: 7,
      name: 'Mountain Spine & Orthopedics Miami Beach',
      region : 'Miami Beach, FL',
      lat: 25.696306,
      lng : -80.30121,
      address : '8000 SW 67TH Ave, 2nd Floor Miami, Florida 33143',
      phone : '(954) 987-2047',
      link : 'https://www.google.com/maps/place/8000+SW+67th+Ave+2nd+Floor,+Miami,+FL+33143,+USA/@25.6960207,-80.3012753,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7950e5118eb:0xfe7d082cdf8a27ac!8m2!3d25.6960207!4d-80.3012753!16s%2Fg%2F11nss9lqm0?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD',
      slug: 'miami-beach-orthopedics',
      paragraph : `
      In a city as dynamic as Miami Beach, persistent pain shouldn’t compromise your lifestyle. Mountain Spine & Orthopedics provides sophisticated, outcome-focused care with the best **orthopedic doctor in Miami Beach**. We are the premier destination for those who seek a complete return to the activities they love, backed by a team of surgeons who understand the high expectations of Miami Beach residents.
      [PARAGRAPH BREAK]
      Our elite team consists of fellowship-trained, board-certified **Miami Beach orthopedic specialists** who are at the forefront of medical innovation. They are experts in treating a wide range of conditions, from sciatica and herniated discs to chronic degenerative conditions and sports injuries. We ensure every patient feels heard, understood, and confident in their personalized treatment plan from our trusted **orthopedic specialists & surgeon**.
      [PARAGRAPH BREAK]
      At our modern Miami Beach facility, we utilize cutting-edge, minimally invasive laser and endoscopic procedures to deliver unparalleled results. This commitment to technology means less scarring, reduced recovery time, and a faster return to your pain-free life. For the discerning patient who demands the best, our **orthopedic doctors in Miami Beach** offer the highest standard of spine and orthopedic care.
      `,
      keywords: ['orthopedic doctor miami beach', 'miami beach orthopedic specialists', 'orthopedic miami beach', 'orthopedic north miami beach', 'miami beach orthopedic surgeon'],
      metaTitle: 'Orthopedic Doctors in Miami Beach | Orthopedic Specialists & Surgeon',
      metaDescription: 'Find expert Orthopedic Doctors in Miami Beach at Mountain Spine & Orthopedics. Our Orthopedic Specialists & Surgeon treat pain, injuries, and joint conditions.'
    },
    {
      id: 8,
      name: 'Mountain Spine & Orthopedics Boca Raton',
      region : 'Boca Raton, FL',
      lat: 26.408449,
      lng: -80.125801,
      address: '1905 Clint Moore Rd #300, Boca Raton, FL 33496',
      phone : '(561) 544-5501',
      link : 'https://www.google.com/maps/place/1905+Clint+Moore+Rd+%23300,+Boca+Raton,+FL+33496/@26.4082259,-80.1260194,16.93z/data=!4m6!3m5!1s0x88d91fb4a0448137:0xfab345066623ba65!8m2!3d26.408839!4d-80.125999!16s%2Fg%2F11nsscsz7l?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
      slug: 'boca-raton-orthopedics',
      paragraph : `
      Mountain Spine & Orthopedics is the definitive choice for Boca Raton residents seeking sophisticated and effective solutions from a leading **Boca Raton orthopedic group**. We have built our reputation on providing a superior level of care that meets the high standards of our community. Our local clinic is your dedicated partner in overcoming pain and restoring the active, elegant lifestyle you enjoy.
      [PARAGRAPH BREAK]
      Our team of fellowship-trained, board-certified **orthopedic doctors in Boca Raton** is celebrated for its powerful combination of surgical expertise and heartfelt compassion. We specialize in diagnosing and treating a wide range of ailments, including herniated discs, degenerative disc disease, and sciatica. As the premier **orthopedic surgeon & sports doctor in Boca Raton, Florida**, we are wholly committed to an outcome-focused philosophy.
      [PARAGRAPH BREAK]
      By leveraging state-of-the-art diagnostic imaging and pioneering minimally invasive procedures, we offer a pathway to a faster, safer recovery. Our advanced laser and endoscopic techniques are designed to address the source of your pain with unmatched precision, minimizing your downtime. For the pinnacle of spine and orthopedic treatment, Boca Raton residents confidently trust the experts at our **spine and orthopedic center in Boca Raton**.
      `,
      keywords: ['boca raton orthopedic group', 'orthopedic boca raton', 'best orthopedic doctor in boca raton', 'orthopedic doctors boca raton', 'orthopedic doctors in boca raton', 'boca orthopedic', 'orthopedic surgeon boca raton fl', 'pediatric orthopedic boca raton', 'orthopedic surgeon boca', 'orthopedic doctor boca raton', 'walk in orthopedic boca raton', 'spine and orthopedic center boca raton', 'orthopedic surgeon boca raton', 'orthopedic surgeons boca raton', 'orthopedic surgery associates boca raton', 'boca raton orthopedic', 'sports & orthopedic center boca raton'],
      metaTitle: 'Orthopedic Surgeon & Sports Doctor in Boca Raton, Florida',
      metaDescription: 'Mountain Spine & Orthopedics connects you with a top Orthopedic Surgeon & Sports Doctor in Boca Raton, Florida—treating injuries, joint pain, and athletes.'
    },
    {
      id: 1,
      name: 'Mountain Spine & Orthopedics Altamonte Springs',
      region : 'Central Pkwy Altamonte Springs, FL',
      lat: 28.670213,
      lng: -81.374701,
      address : '499 E Central Pkwy #130 Altamonte Springs, FL 32701',
      phone : '(407) 960-1717',
      link : 'https://www.google.com/maps/place/499+E+Central+Pkwy+STE+130,+Altamonte+Springs,+FL+32701,+USA/@28.6701555,-81.3771552,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77185be955555:0xef8b788f235fee85!8m2!3d28.6701508!4d-81.3745803!16s%2Fg%2F11qz9gt3k8?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD',
      slug: 'altamonte-springs-orthopedics',
      paragraph : `
      For residents of Altamonte Springs seeking definitive relief from neck and back pain, Mountain Spine & Orthopedics sets the new standard for **orthopedic care in Altamonte Springs**. Our local clinic is dedicated to serving this vibrant community, helping you return to your life without limitations. We are committed to being the most trusted **orthopedic surgery specialists in Florida** for every patient.
      [PARAGRAPH BREAK]
      At the core of our **orthopedic Altamonte Springs** practice are our fellowship-trained, board-certified surgeons, who are leaders in the musculoskeletal field. They treat the full spectrum of conditions, including herniated discs, severe spinal stenosis, sciatica, and sports-related injuries. We believe in an outcome-focused approach, ensuring every patient receives a precise diagnosis and an effective treatment plan tailored to their needs.
      [PARAGRAPH BREAK]
      Leveraging state-of-the-art diagnostic imaging and pioneering minimally invasive procedures, our goal is to restore you to an active, pain-free life as quickly and safely as possible. From advanced laser techniques to sophisticated endoscopic surgeries, we provide innovative solutions that minimize recovery time. Experience the pinnacle of compassionate, technologically advanced care with the top **orthopedic doctors in Altamonte Springs, FL**.
      `,
      keywords: ['orthopedic altamonte springs', 'altamonte springs sports orthopedic doctor', 'orthopedic-laser spine surgery altamonte springs fl', 'orthopedic surgery specialists altamonte springs florida', 'orthopedic surgery specialists altamonte springs fl', 'orthopedic surgeon fl altamonte springs', 'orthopedic altamonte springs fl', 'orthopedic doctors in altamonte springs fl'],
      metaTitle: 'Orthopedic Altamonte Springs | Orthopedic Surgery Specialists in Florida',
      metaDescription: 'Mountain Spine and Orthopedics delivers expert care in Altamonte Springs. Trust our top Orthopedic Surgery Specialists in Florida to restore your mobility.'
    },
    {
      id: 2,
      name: 'Mountain Spine & Orthopedics Davenport',
      region : 'Davenport, FL',
      lat: 28.167513,
      lng: -81.638889,
      address : '2400 North Blvd W Suite C, Davenport, FL 33837',
      phone : '(863) 777-5805',
      link : 'https://www.google.com/maps/place/2400+North+Blvd+W,+Davenport,+FL+33837,+USA/@28.1674336,-81.6414992,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd710dcdc14069:0x95933b5620dfb1e2!8m2!3d28.1674289!4d-81.6389243!16s%2Fg%2F11h08yw72b?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD',
      slug: 'davenport-orthopedics',
      paragraph : `
      The rapidly growing Davenport community now has convenient, local access to Florida's most trusted name in musculoskeletal health: Mountain Spine & Orthopedics. As the leading **orthopedic surgeon in Davenport, FL**, we are thrilled to serve the residents of Davenport and the surrounding Four Corners area, providing dedicated care for those dealing with chronic pain or recent injuries.
      [PARAGRAPH BREAK]
      Our Davenport clinic is led by fellowship-trained, board-certified surgeons who are committed to the health and well-being of every patient. They bring a wealth of experience in treating a comprehensive range of conditions, including painful herniated discs, sciatica, and spinal stenosis. Our approach is always personal, ensuring your unique needs are met with a compassionate and thorough treatment plan from the best **orthopedic specialists in Davenport, FL**.
      [PARAGRAPH BREAK]
      We believe in pairing expert human touch with medical innovation. Our facility is equipped with advanced diagnostics and offers cutting-edge, minimally invasive procedures to ensure you heal faster and with better results. For a precise diagnosis and a personalized recovery strategy from a trusted **orthopedic doctor in Davenport, FL**, the Davenport community can count on Mountain Spine & Orthopedics.
      `,
      keywords: ['orthopedic davenport fl', 'orthopedic surgeon davenport fl', 'orthopedic doctor davenport fl', 'orthopedic specialists davenport fl', 'orthopedic in davenport fl', 'hill orthopedic davenport fl'],
      metaTitle: 'Orthopedic Surgeon Davenport, FL - Mountain Spine & Orthopedics',
      metaDescription: 'Trust Mountain Spine & Orthopedics for expert care from leading Surgeons in Davenport, FL. Advanced treatments for joint pain, injuries, and more.'
    },
];
  // theres one problem if i change the names to Mountain Spine & Orthopaedics ... then when people try to google it or put the adress it wont take them there so im keep the location how it is