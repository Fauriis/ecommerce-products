import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Map() {
  const Map = {
    width: "50%",
    height: "500px",
  };

  const defaultProps = {
    lat: 44.439663,
    lng: 26.096306,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={Map}
          center={defaultProps}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}
