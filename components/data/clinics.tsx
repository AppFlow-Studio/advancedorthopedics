// Define marker data (replace with your actual clinic data)

export interface ClinicsProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone : string;
  region : string;
}
export const clinics : ClinicsProps[]= [
    { id: 3, name: 'Advanced Ambulatory Surgery Center', region : 'Palm Springs, FL', lat: 28.674217, lng: -81.374192, address : '652 Palm Springs Dr Altamonte Springs, FL 32701', phone : '(407) 565-7598' }, // 
    { id: 4, name: 'Advanced Orthopedics Hollywood, FL', region : 'Hollywood, FL', lat: 26.011352, lng : -80.178874, address : '3500 Tyler St Hollywood, FL 33021', phone : '(754) 212-8736' }, // (954) 987-2047
    { id: 5, name: 'Advanced Orthopedics Orlando' , region : 'Orlando, FL', lat: 28.5144368, lng: -81.4658519, address : '6150 Metrowest Blvd Suite 102 Orlando, FL 32835', phone : '(407) 960-1717'}, // Orthopedic & Laser Spine
    { id: 6, name: 'Advanced Orthopedics Palm Beach Gardens', region : 'Palm Beach Gardens, FL', lat: 26.8307353, lng : -80.0878284, address : '3355 Burns Rd #304 Palm Beach Gardens, FL 33410', phone : '(561) 556-1802'}, // Orthopedic & Laser Spine
    { id: 7, name: 'Advanced Orthopedics Miami Beach', region : 'Miami Beach, FL', lat: 25.696306, lng : -80.30121, address : '8000 SW 67TH Ave, 2nd Floor Miami, Florida 33143', phone : '(954) 987-2047'}, // Orthopedic & Laser Spine
    { id: 8, name: 'Ambulatory Surgery Center of Boca Raton', region : 'Boca Raton, FL', lat: 26.408449, lng: -80.125801, address: '1905 Clint Moore Rd #300, Boca Raton, FL 33496', phone : '(561) 544-5501'},
    { id: 1, name: 'Altamonte Springs Spine Surgeon', region : 'Altamonte Springs, FL', lat: 28.670213, lng: -81.374701, address : '499 E Central Pkwy #130 Altamonte Springs, FL 32701', phone : '(407) 960-1717' }, // (407) 537-2134
    { id: 2, name: 'Davenport Spine Surgeons', region : 'Davenport, FL', lat: 28.167513, lng: -81.638889, address : '2400 North Blvd W Suite C, Davenport, FL 33837', phone : '(863) 777-5805'}, // (407) 960-1717
  ];

  // theres one problem if i change the names to Mountain Spine & Orthopaedics ... then when people try to google it or put the adress it wont take them there so im keep the location how it is