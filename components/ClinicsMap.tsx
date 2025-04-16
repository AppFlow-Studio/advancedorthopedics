'use client'

//Map component Component from library
import React, { useState, useCallback } from 'react';
// Make sure to import MarkerF and useLoadScript if needed
import { GoogleMap, Libraries, MarkerF, useLoadScript } from "@react-google-maps/api";
//Map's styling
export const defaultMapContainerStyle = {
  width: '100%',
  height: '680px',
  borderRadius: '24px',
};
const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004
}
const defaultMapZoom = 18
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

// Define marker data (replace with your actual clinic data)
const clinics = [
  { id: 1, name: 'Clinic Alpha', lat: 35.881, lng: 76.506 },
  { id: 2, name: 'Clinic Beta', lat: 35.878, lng: 76.503 },
  { id: 3, name: 'Clinic Gamma (A)', lat: 35.8795, lng: 76.5045, isSpecial: true }, // Special marker
  // Add more clinics...
];


// Assume icons are defined here or imported. IMPORTANT: Accessing window.google requires the library to be loaded.

// We will define these properly once th
export default function ClinicsMap() {
  
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEYKEY!, // Ensure you have your API key in .env.local
      "libraries" :[ "marker"],
    });

  
   // Optional: State to hold map instance
   const [map, setMap] = useState(null);
   const onLoad = useCallback(function callback(mapInstance) {
     // You can save the map instance if you need to interact with it
     setMap(mapInstance);
     // Example: Adjust bounds to fit markers after load (optional)
     // const bounds = new window.google.maps.LatLngBounds();
     // clinics.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
     // mapInstance.fitBounds(bounds);
   }, []);
 
   const onUnmount = useCallback(function callback(mapInstance) {
     setMap(null);
   }, []);
 
 
   if (loadError) return <div>Error loading maps: {loadError.message}</div>;
   if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className="bg-[#FAFCFF] w-full h-full py-[50px]">
      {/* This outer div needs to contain both map and overlay */}
      <div className="max-w-[1440px] w-full px-[40px] mx-auto h-[680px] relative"> {/* Added position: relative */}

        {/* The Overlay Card */}
        <MapOverlayCard />

        {/* The Google Map */}
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Render Markers Inside */}
          {clinics.map((clinic) => (
            <MarkerF
              key={clinic.id}
              position={{ lat: clinic.lat, lng: clinic.lng }}
              // Optional: Add title for hover effect
              title={clinic.name}
              // Optional: Add onClick handler
              // onClick={() => handleMarkerClick(clinic)}
            />
          ))}
        </GoogleMap>
      </div>
    </section>
  )
}


// Placeholder icons (replace with actual icons/SVG components)
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const DropdownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6l4 4 4-4H4z"/>
    </svg>
);


function MapOverlayCard() {
  return (
    <div className="absolute top-5 left-14 z-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md space-y-4">
      <h2 
      style={{
        fontFamily: "var(--font-reem-kufi)",
        fontWeight: 400,
      }}
      className="text-2xl font-semibold text-[#5B5F67]">Find your Clinic</h2>
      
      <div  className=' flex flex-row space-x-[20px]'>
        <div className="flex items-center border border-gray-300 rounded-md p-2 w-[50%] focus-within:ring-2 focus-within:ring-blue-500">
          <LocationIcon />
          <input
            type="text"
            placeholder="Sylhet" // Or use a dynamic placeholder/value
            className="ml-2 flex-grow focus:outline-none text-gray-700"
          />
        </div>
        <div className="flex items-center justify-between border border-gray-300 rounded-md w-[50%] p-2 text-gray-600">
          <span>Sort by <span className="font-medium text-blue-600">Near by</span></span>
           <DropdownIcon />
          {/* You would replace this with an actual dropdown/select component */}
        </div>
      </div>

    </div>
  );
}