import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { usePosition } from "use-position";

interface Props {}
interface _Pos {
  lat: number;
  lng: number;
}
const UPDATE_POSITION = false;
const ZOOM = 11;
const DEFAULT_POS = {
  LATITUDE: 59.3347524,
  LONGITUDE: 18.0965903
};

const Map: React.FC<Props> = () => {
  const [pos, setPos] = useState<_Pos>({
    lat: DEFAULT_POS.LATITUDE,
    lng: DEFAULT_POS.LONGITUDE
  });
  const { latitude, longitude } = usePosition(UPDATE_POSITION, {
    enableHighAccuracy: true,
    timeout: 30,
    maximumAge: 10
  });
  useEffect(() => {
    setPos({
      lat: latitude ?? DEFAULT_POS.LATITUDE,
      lng: DEFAULT_POS.LONGITUDE
    });
  }, [latitude, longitude]);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_PROD}` }}
      defaultCenter={pos}
      defaultZoom={ZOOM}
    ></GoogleMapReact>
  );
};

export default Map;
