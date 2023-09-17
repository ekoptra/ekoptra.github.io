import { useMap, GeoJSON, FeatureGroup } from "react-leaflet";
import useDataStore from "../../hooks/useDataStore";
const bbox = require("geojson-bbox");

const ProvinsiLayer: React.FC = () => {
  const prov = useDataStore((state) => state.provinsi);

  return (
    <FeatureGroup>
      {prov.features.map((feature) => {
        if (["PAPUA", "PAPUA BARAT"].includes(feature.properties.name))
          return null;

        return (
          <GeoJSON
            data={feature}
            style={{
              weight: 0.5,
              fill: false,
              color: "#656565",
            }}
          />
        );
      })}
    </FeatureGroup>
  );
};

export default ProvinsiLayer;
