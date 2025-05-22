// GeolocationContext.jsx
"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

type LocationType = {
  latitude: number | null;
  longitude: number | null; 
  error: string | null;
};

type GeolocationContextType = {
  location: LocationType | undefined;
  onSetLocation: (params: {latitude: number, longitude: number, error: string}) => void;
};

const GeolocationContext = createContext<GeolocationContextType>({
  location: undefined,
  onSetLocation: () => {},
});

const GeolocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<LocationType>();

  const onSetLocation = ({latitude, longitude, error} : {latitude : number, longitude : number, error : string | null}) => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
      error: error,
    });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        },
        {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 1000,
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Geolocation is not supported by this browser.',
      });
    }
  }, []);

  return (
    <GeolocationContext.Provider value={{ location, onSetLocation }}>
      {children}
    </GeolocationContext.Provider>
  );
};

const useGeolocation = () => {
  const context = useContext(GeolocationContext);
  if (context === undefined) {
    throw new Error('useGeolocation must be used within a GeolocationProvider');
  }
  return context;
};

export { GeolocationProvider, useGeolocation };