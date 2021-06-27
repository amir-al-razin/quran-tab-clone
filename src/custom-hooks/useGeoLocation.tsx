import React, { useState, useEffect } from "react";

interface State {
  loaded: boolean;
  coordinates?: {
    lat: string;
    lng: string;
  };
}
const useGeoLocation = () => {
  const [location, setLocation] = useState<State>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  // @ts-ignore
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  // @ts-ignore
  const onError = (error) => {
    setLocation({
      loaded: true,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
