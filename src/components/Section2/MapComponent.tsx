import { MapContainer } from "react-leaflet";
import useStyles from "./Section2.style";
import KabupatenLayer from "./KabupatenLayer";
import ProvinsiLayer from "./ProvinsiLayer";

const MapComponent: React.FC = () => {
  const { classes, cx } = useStyles();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      className={cx(classes.map, "w-full")}
      touchZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      style={{
        backgroundColor: "#2A3028",
      }}
    >
      <ProvinsiLayer />
      <KabupatenLayer />
    </MapContainer>
  );
};

export default MapComponent;
