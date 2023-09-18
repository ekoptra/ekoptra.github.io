import { MapContainer } from "react-leaflet";
import useStyles from "./Section4.style";
import ProvinsiLayer from "./ProvinsiLayer";
import KabupatenLayer from "./KabupatenLayer";
import useFilterStore from "../../hooks/useFilterStore";

const MapComponent: React.FC = () => {
  const { classes, cx } = useStyles();
  const { displayTahan, displayRawan } = useFilterStore((state) => state);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      zoomControl={false}
      attributionControl={false}
      className={cx(classes.map, "w-full")}
      doubleClickZoom={false}
      boxZoom={false}
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <ProvinsiLayer />
      {(displayTahan || displayRawan) && <KabupatenLayer />}
    </MapContainer>
  );
};

export default MapComponent;
