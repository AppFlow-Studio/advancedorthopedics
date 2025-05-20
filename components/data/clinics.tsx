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
}
export const clinics : ClinicsProps[]= [
    { id: 3, name: 'Advanced Ambulatory Surgery Center', region : 'Palm Springs, FL', lat: 28.674217, lng: -81.374192, address : '652 Palm Springs Dr Altamonte Springs, FL 32701', phone : '(407) 565-7598', link : 'https://maps.app.goo.gl/qtg72mbS8WFcSuxS7' }, // 
    { id: 4, name: 'Advanced Orthopedics Hollywood, FL', region : 'Hollywood, FL', lat: 26.011352, lng : -80.178874, address : '3500 Tyler St Hollywood, FL 33021', phone : '(754) 212-8736', link : 'https://www.google.com/maps/place/3500+Tyler+St,+Hollywood,+FL+33021,+USA/@26.0113543,-80.1814945,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9abe7a8e924a9:0xf99f3efb0fd2eb8!8m2!3d26.0113495!4d-80.1789196!16s%2Fg%2F11b8v4qncd?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD' }, // (954) 987-2047
    { id: 5, name: 'Advanced Orthopedics Orlando' , region : 'Orlando, FL', lat: 28.5144368, lng: -81.4658519, address : '6150 Metrowest Blvd Suite 102 Orlando, FL 32835', phone : '(407) 960-1717', link : 'https://www.google.com/maps/place/Orthopedic+%26+Laser+Spine+Surgery+(Orlando)/@28.5136111,-81.466257,15z/data=!4m6!3m5!1s0x88e77853a8dbc7bb:0x8835f4fad688eb5!8m2!3d28.5136111!4d-81.466257!16s%2Fg%2F1q6c8m48j?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD'}, // Orthopedic & Laser Spine
    { id : 9, name : 'Mountain Spine & Orthopedics Fort Pierce', region : 'Fort Pierce, FL', lat : 27.432531, lng : -80.344623, address : '2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950', link : 'https://www.google.com/maps/place/2215+Nebraska+Ave+Suite+1C,+Fort+Pierce,+FL+34950/@27.4316576,-80.35092,17z/data=!3m1!4b1!4m6!3m5!1s0x88def196a676de3d:0xaac8af034db8a37a!8m2!3d27.4316576!4d-80.3483451!16s%2Fg%2F11wg616lbv?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D', phone : '(833) 931-4888'},
    { id: 6, name: 'Advanced Orthopedics Palm Beach Gardens', region : 'Palm Beach Gardens, FL', lat: 26.8307353, lng : -80.0878284, address : '3355 Burns Rd #304 Palm Beach Gardens, FL 33410', phone : '(561) 556-1802', link : 'https://www.google.com/maps/place/3355+Burns+Rd+STE+304,+Palm+Beach+Gardens,+FL+33410,+USA/@26.8308667,-80.0900594,17z/data=!3m1!4b1!4m6!3m5!1s0x88df2aae0744a403:0x1f342d8e4463fb50!8m2!3d26.8308619!4d-80.0874845!16s%2Fg%2F11gg6dh9yq?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD'}, // Orthopedic & Laser Spine
    { id: 7, name: 'Advanced Orthopedics Miami Beach', region : 'Miami Beach, FL', lat: 25.696306, lng : -80.30121, address : '8000 SW 67TH Ave, 2nd Floor Miami, Florida 33143', phone : '(954) 987-2047', link : 'https://www.google.com/maps/place/8000+SW+67th+Ave+2nd+Floor,+Miami,+FL+33143,+USA/@25.6960207,-80.3012753,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7950e5118eb:0xfe7d082cdf8a27ac!8m2!3d25.6960207!4d-80.3012753!16s%2Fg%2F11nss9lqm0?entry=tts&g_ep=EgoyMDI0MDgyMy4wKgBIAVAD'}, // Orthopedic & Laser Spine
    { id: 8, name: 'Ambulatory Surgery Center of Boca Raton', region : 'Boca Raton, FL', lat: 26.408449, lng: -80.125801, address: '1905 Clint Moore Rd #300, Boca Raton, FL 33496', phone : '(561) 544-5501', link : 'https://www.google.com/maps/place/1905+Clint+Moore+Rd+%23300,+Boca+Raton,+FL+33496/@26.4082259,-80.1260194,16.93z/data=!4m6!3m5!1s0x88d91fb4a0448137:0xfab345066623ba65!8m2!3d26.408839!4d-80.125999!16s%2Fg%2F11nsscsz7l?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D'},
    { id: 1, name: 'Altamonte Springs Spine Surgeon', region : 'Altamonte Springs, FL', lat: 28.670213, lng: -81.374701, address : '499 E Central Pkwy #130 Altamonte Springs, FL 32701', phone : '(407) 960-1717', link : 'https://www.google.com/maps/place/499+E+Central+Pkwy+STE+130,+Altamonte+Springs,+FL+32701,+USA/@28.6701555,-81.3771552,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77185be955555:0xef8b788f235fee85!8m2!3d28.6701508!4d-81.3745803!16s%2Fg%2F11qz9gt3k8?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD' }, // (407) 537-2134
    { id: 2, name: 'Davenport Spine Surgeons', region : 'Davenport, FL', lat: 28.167513, lng: -81.638889, address : '2400 North Blvd W Suite C, Davenport, FL 33837', phone : '(863) 777-5805', link : 'https://www.google.com/maps/place/2400+North+Blvd+W,+Davenport,+FL+33837,+USA/@28.1674336,-81.6414992,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd710dcdc14069:0x95933b5620dfb1e2!8m2!3d28.1674289!4d-81.6389243!16s%2Fg%2F11h08yw72b?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD'}, // (407) 960-1717
  ];

  // theres one problem if i change the names to Mountain Spine & Orthopaedics ... then when people try to google it or put the adress it wont take them there so im keep the location how it is