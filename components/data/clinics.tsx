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
}
export const clinics : ClinicsProps[]= [
    { id: 4, name: 'Advanced Orthopedics Hollywood, FL', region : 'Hollywood, FL', lat: 26.011352, lng : -80.178874, address : '3500 Tyler St Hollywood, FL 33021', phone : '(754) 212-8736', link : 'https://www.google.com/maps/place/3500+Tyler+St,+Hollywood,+FL+33021,+USA/@26.0113543,-80.1814945,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9abe7a8e924a9:0xf99f3efb0fd2eb8!8m2!3d26.0113495!4d-80.1789196!16s%2Fg%2F11b8v4qncd?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD', slug: 'hollywood-fl-orthopedics',
      paragraph : `
      Residents of Hollywood, FL who are searching for the most trusted South Florida spine and orthopedic specialists turn to Mountain Spine & Orthopedics. Our fellowship-trained, board-certified surgeons are renowned for pairing cutting-edge techniques with genuine compassion, which is why patients across the state rely on us for advanced, outcome-focused care.
      [PARAGRAPH BREAK]At Mountain Spine & Orthopedics we treat the full spectrum of musculoskeletal and spinal injuries, conditions, and diseases vertebrae, discs, nerves, joints, and muscles. Leveraging state-of the art diagnostic imaging and minimally invasive laser and endoscopic procedures, our goal is to restore you to an active, pain-free lifestyle as quickly and safely as possible. That commitment to innovation and individualized recovery plans has made us the experts South Florida residents trust for precise diagnosis and compassionate treatment.
      [PARAGRAPH BREAK]Mountain Spine & Orthopedics has earned a statewide reputation for excellence, with nine convenient Florida locations composing dedicated ambulatory surgery center designed for comfort and efficiency. We provide comprehensive care for a wide array of conditions including herniated discs, spinal stenosis, sciatica, degenerative disc disease, and sports-related injuries delivering world-class treatment and rehabilitation under one roof.
      `
     }, // (954) 987-2047
    { id: 3, name: 'Advanced Ambulatory Surgery Center', region : 'Palm Springs, FL', lat: 28.674217, lng: -81.374192, address : '652 Palm Springs Dr Altamonte Springs, FL 32701', phone : '(407) 565-7598', link : 'https://maps.app.goo.gl/qtg72mbS8WFcSuxS7', slug: 'palm-spring-orthopedics',
      paragraph : `
      For the residents of the village of Palm Springs and surrounding Palm Beach County communities, Mountain Spine & Orthopedics offers a dedicated, local center for world-class spine and orthopedic care. We understand that life here is active and family-focused, and persistent pain shouldn't keep you on the sidelines. Our mission is to provide our neighbors with the advanced, compassionate treatment they need to live full, healthy lives, right here in their own community.
[PARAGRAPH BREAK]
Our Palm Springs clinic is staffed by highly respected, fellowship-trained, and board-certified surgeons who combine years of specialized experience with a genuine commitment to patient well-being. They are experts in diagnosing and treating the full spectrum of musculoskeletal issues, including debilitating sciatica, herniated discs, spinal stenosis, and degenerative disc disease. Each patient receives a comprehensive evaluation and a recovery plan tailored specifically to their condition and personal goals.
[PARAGRAPH BREAK]
Utilizing the industry’s most advanced diagnostic tools and state-of-the-art, minimally invasive techniques, we tackle pain at its source. Our expertise in laser and endoscopic procedures means smaller incisions, less postoperative discomfort, and a significantly faster return to your daily routine. Trust Mountain Spine & Orthopedics in Palm Springs to be your partner in restoring function, eliminating pain, and reclaiming your active lifestyle.
      `
     }, // 
    { id: 5, name: 'Advanced Orthopedics Orlando' , region : 'Orlando, FL', lat: 28.5144368, lng: -81.4658519, address : '6150 Metrowest Blvd Suite 102 Orlando, FL 32835', phone : '(407) 960-1717', link : 'https://www.google.com/maps/place/Orthopedic+%26+Laser+Spine+Surgery+(Orlando)/@28.5136111,-81.466257,15z/data=!4m6!3m5!1s0x88e77853a8dbc7bb:0x8835f4fad688eb5!8m2!3d28.5136111!4d-81.466257!16s%2Fg%2F1q6c8m48j?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD', slug: 'orlando-orthopedics',
      paragraph : `
      Orlando residents no longer need to search far and wide for world-class spine and orthopedic care; Mountain Spine & Orthopedics brings its renowned services to the heart of The City Beautiful. We understand the physical demands of life in Central Florida, from working in our bustling hospitality industry to enjoying our many recreational parks and lakes. Our mission is to provide accessible, top-tier care that gets Orlando back to work and play.
[PARAGRAPH BREAK]
Our Orlando team is comprised of fellowship-trained, board-certified orthopedic and spine surgeons celebrated for their technical skill and patient-first philosophy. We provide comprehensive, compassionate treatment for a host of conditions, including degenerative disc disease, painful sciatica, herniated discs, and complex sports injuries. Every treatment plan is highly individualized, ensuring we address the specific cause of your pain to achieve lasting results.
[PARAGRAPH BREAK]
Inside our state-of-the-art Orlando facility, we utilize the latest in diagnostic technology and minimally invasive surgical techniques. These advanced methods, including endoscopic and laser-based procedures, allow for smaller incisions, less pain, and significantly faster recovery times. Trust our commitment to innovative, outcome-focused care to restore your mobility and quality of life. Mountain Spine & Orthopedics is proud to be Orlando’s expert team for spine and orthopedic health.`
    }, // Orthopedic & Laser Spine
    { id : 9, name : 'Mountain Spine & Orthopedics Fort Pierce', region : 'Fort Pierce, FL', lat : 27.432531, lng : -80.344623, address : '2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950', link : 'https://www.google.com/maps/place/2215+Nebraska+Ave+Suite+1C,+Fort+Pierce,+FL+34950/@27.4316576,-80.35092,17z/data=!3m1!4b1!4m6!3m5!1s0x88def196a676de3d:0xaac8af034db8a37a!8m2!3d27.4316576!4d-80.3483451!16s%2Fg%2F11wg616lbv?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D', phone : '(833) 931-4888', slug: 'fort-pierce-orthopedics',
      paragraph : `
      Mountain Spine & Orthopedics is proud to bring its legacy of excellence to Fort Pierce, offering residents along the Treasure Coast direct access to premier spine and orthopedic specialists. We are deeply committed to the health of the Fort Pierce community, helping our neighbors overcome the pain that keeps them from enjoying an active coastal lifestyle, whether that includes boating, fishing, or simply walking the beautiful waterfront.
[PARAGRAPH BREAK]
Our Fort Pierce clinic is staffed by distinguished, board-certified surgeons with advanced fellowship training in spine and orthopedic medicine. They treat a wide array of musculoskeletal issues with a compassionate, patient-centric approach, specializing in conditions from chronic spinal stenosis and degenerative disc disease to acute herniated discs and sports injuries. We focus on delivering precise diagnoses to build the foundation for an effective and lasting recovery.
[PARAGRAPH BREAK]

By pairing our expertise with the most advanced medical technology, we offer innovative, minimally invasive treatment options that set a new standard for care in the region. Our goal is your complete and rapid recovery, facilitated by cutting-edge laser and endoscopic procedures designed for maximum effectiveness and minimal downtime. For comprehensive orthopedic care under one roof, the Fort Pierce community can confidently turn to Mountain Spine & Orthopedics.
      `
    },
    { id: 6, name: 'Advanced Orthopedics Palm Beach Gardens', region : 'Palm Beach Gardens, FL', lat: 26.8307353, lng : -80.0878284, address : '3355 Burns Rd #304 Palm Beach Gardens, FL 33410', phone : '(561) 556-1802', link : 'https://www.google.com/maps/place/3355+Burns+Rd+STE+304,+Palm+Beach+Gardens,+FL+33410,+USA/@26.8308667,-80.0900594,17z/data=!3m1!4b1!4m6!3m5!1s0x88df2aae0744a403:0x1f342d8e4463fb50!8m2!3d26.8308619!4d-80.0874845!16s%2Fg%2F11gg6dh9yq?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD', slug: 'palm-beach-gardens-orthopedics',
      paragraph : `
      For the discerning residents of Palm Beach Gardens who expect excellence in all facets of their lives, Mountain Spine & Orthopedics is the trusted provider of advanced spine and orthopedic care. Our local clinic is founded on the principle of delivering exceptional medical solutions to help our community maintain its active, high-quality lifestyle, free from the constraints of musculoskeletal pain.
[PARAGRAPH BREAK]
The surgeons at our Palm Beach Gardens location are distinguished, fellowship-trained, and board-certified specialists renowned for their meticulous approach. They combine this expertise with genuine, patient-focused compassion to treat a variety of conditions, whether it's a golf-related injury, chronic sciatica, or debilitating spinal stenosis. We are passionately committed to creating individualized recovery plans that deliver superior outcomes.
[PARAGRAPH BREAK]
We equip our experts with the most innovative technology available, including state-of-the-art diagnostics and minimally invasive surgical options like laser and endoscopic procedures. This focus on advanced techniques ensures our patients experience a quicker, safer, and more comfortable recovery. Trust Mountain Spine & Orthopedics in Palm Beach Gardens to provide the precise diagnosis and compassionate treatment you deserve.
      `
    }, // Orthopedic & Laser Spine
    { id: 7, name: 'Advanced Orthopedics Miami Beach', region : 'Miami Beach, FL', lat: 25.696306, lng : -80.30121, address : '8000 SW 67TH Ave, 2nd Floor Miami, Florida 33143', phone : '(954) 987-2047', link : 'https://www.google.com/maps/place/8000+SW+67th+Ave+2nd+Floor,+Miami,+FL+33143,+USA/@25.6960207,-80.3012753,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7950e5118eb:0xfe7d082cdf8a27ac!8m2!3d25.6960207!4d-80.3012753!16s%2Fg%2F11nss9lqm0?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD', slug: 'miami-beach-orthopedics',
      paragraph : `
      In a city as dynamic and active as Miami Beach, persistent pain shouldn’t compromise your lifestyle. Mountain Spine & Orthopedics provides sophisticated, outcome-focused care specifically tailored to the needs of this vibrant community. We are the premier destination for those who seek not just relief, but a complete return to the activities they love, backed by a team of surgeons who understand the high expectations of Miami Beach residents.
[PARAGRAPH BREAK]
Our elite team consists of fellowship-trained, board-certified spine and orthopedic surgeons who are at the forefront of medical innovation and compassionate care. They are experts in treating a wide range of conditions, from sciatica and herniated discs exacerbated by an active life, to chronic degenerative conditions and sports injuries sustained on the sand or in the gym. We ensure every patient feels heard, understood, and confident in their personalized treatment plan.
[PARAGRAPH BREAK]
At our modern Miami Beach facility, we utilize cutting-edge, minimally invasive laser and endoscopic procedures to deliver unparalleled results. This commitment to technology means less scarring, reduced recovery time, and a faster return to your pain-free life. For the discerning patient who demands the best, Mountain Spine & Orthopedics offers the highest standard of spine and orthopedic care.
      `
    }, // Orthopedic & Laser Spine
    { id: 8, name: 'Ambulatory Surgery Center of Boca Raton', region : 'Boca Raton, FL', lat: 26.408449, lng: -80.125801, address: '1905 Clint Moore Rd #300, Boca Raton, FL 33496', phone : '(561) 544-5501', link : 'https://www.google.com/maps/place/1905+Clint+Moore+Rd+%23300,+Boca+Raton,+FL+33496/@26.4082259,-80.1260194,16.93z/data=!4m6!3m5!1s0x88d91fb4a0448137:0xfab345066623ba65!8m2!3d26.408839!4d-80.125999!16s%2Fg%2F11nsscsz7l?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D', slug: 'boca-raton-orthopedics',
      paragraph : `
      Mountain Spine & Orthopedics is the definitive choice for Boca Raton residents seeking sophisticated and effective solutions for complex spine and orthopedic conditions. We have built our reputation on providing a superior level of care that meets the high standards of our community. Our local clinic is your dedicated partner in overcoming pain and restoring the active, elegant lifestyle you enjoy.
[PARAGRAPH BREAK]
Our team of fellowship-trained, board-certified surgeons in Boca Raton is celebrated for its powerful combination of surgical expertise and heartfelt compassion. We specialize in diagnosing and treating a wide range of ailments, including herniated discs, degenerative disc disease, sciatica, and injuries related to sports and recreation. We are wholly committed to an outcome-focused philosophy, ensuring your treatment is as effective as it is compassionate.
[PARAGRAPH BREAK]
By leveraging state-of-the-art diagnostic imaging and pioneering minimally invasive procedures, we offer a pathway to a faster, safer recovery. Our advanced laser and endoscopic techniques are designed to address the source of your pain with unmatched precision, minimizing your downtime. For the pinnacle of spine and orthopedic treatment, Boca Raton residents confidently trust the experts at Mountain Spine & Orthopedics.
      `
    },
    { id: 1, name: 'Altamonte Springs Spine Surgeon', region : 'Central Pkwy Altamonte Springs, FL', lat: 28.670213, lng: -81.374701, address : '499 E Central Pkwy #130 Altamonte Springs, FL 32701', phone : '(407) 960-1717', link : 'https://www.google.com/maps/place/499+E+Central+Pkwy+STE+130,+Altamonte+Springs,+FL+32701,+USA/@28.6701555,-81.3771552,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77185be955555:0xef8b788f235fee85!8m2!3d28.6701508!4d-81.3745803!16s%2Fg%2F11qz9gt3k8?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD', slug: 'altamonte-springs-orthopedics',
      paragraph : `
      For residents of Altamonte Springs and the greater Seminole County area seeking definitive relief from neck and back pain, Mountain Spine & Orthopedics is the new standard of care. Our local clinic is dedicated to serving this vibrant community, understanding that whether you're dealing with a chronic condition or a recent injury, your goal is to return to your life without limitations. We are committed to being the most trusted spine and orthopedic specialists for every patient who walks through our doors.
      [PARAGRAPH BREAK]
      At the core of our Altamonte Springs practice are our fellowship-trained, board-certified surgeons, who are leaders in the musculoskeletal field. They pair this deep expertise with genuine compassion to treat the full spectrum of conditions, including herniated discs, severe spinal stenosis, sciatica, and sports-related injuries. We believe in an outcome-focused approach, ensuring every patient receives a precise diagnosis and a clear, effective treatment plan tailored specifically to their needs and lifestyle.
      [PARAGRAPH BREAK]
      Leveraging state-of-the-art diagnostic imaging and pioneering minimally invasive procedures, our goal is to restore you to an active, pain-free life as quickly and safely as possible. From advanced laser techniques to sophisticated endoscopic surgeries, we provide innovative solutions that minimize recovery time. Experience the pinnacle of compassionate, technologically advanced care and discover why Mountain Spine & Orthopedics is the trusted choice right here in Altamonte Springs.
      `
     }, // (407) 537-2134
    { id: 2, name: 'Davenport Spine Surgeons', region : 'Davenport, FL', lat: 28.167513, lng: -81.638889, address : '2400 North Blvd W Suite C, Davenport, FL 33837', phone : '(863) 777-5805', link : 'https://www.google.com/maps/place/2400+North+Blvd+W,+Davenport,+FL+33837,+USA/@28.1674336,-81.6414992,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd710dcdc14069:0x95933b5620dfb1e2!8m2!3d28.1674289!4d-81.6389243!16s%2Fg%2F11h08yw72b?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD', slug: 'davenport-orthopedics',
      paragraph : `
      The rapidly growing Davenport community now has convenient, local access to Florida's most trusted name in musculoskeletal health: Mountain Spine & Orthopedics. We are thrilled to serve the residents of Davenport and the surrounding Four Corners area, providing dedicated care for those dealing with chronic pain or recent injuries from an active or physically demanding job.
[PARAGRAPH BREAK]
Our Davenport clinic is led by fellowship-trained, board-certified surgeons who are committed to the health and well-being of every patient. They bring a wealth of experience in treating a comprehensive range of conditions, including painful herniated discs, sciatica, spinal stenosis, and degenerative disc disease. Our approach is always personal, ensuring your unique needs are met with a compassionate and thorough treatment plan.
[PARAGRAPH BREAK]
We believe in pairing expert human touch with medical innovation. Our facility is equipped with advanced diagnostics and offers cutting-edge, minimally invasive procedures to ensure you heal faster and with better results. For a precise diagnosis, a personalized recovery strategy, and a team that cares about restoring your active lifestyle, the Davenport community can count on Mountain Spine & Orthopedics.
      `
    }, // (407) 960-1717
  ];

  // theres one problem if i change the names to Mountain Spine & Orthopaedics ... then when people try to google it or put the adress it wont take them there so im keep the location how it is