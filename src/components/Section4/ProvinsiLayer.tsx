import { useMap, GeoJSON, FeatureGroup } from "react-leaflet";
import useDataStore from "../../hooks/useDataStore";
import React from "react";
const bbox = require("geojson-bbox");

const ProvinsiLayer: React.FC = () => {
  const prov = useDataStore((state) => state.provinsi);

  const map = useMap();

  React.useEffect(() => {
    const bb = bbox(prov);

    map.flyToBounds([
      [bb[1], bb[0]],
      [bb[3], bb[2]],
    ]);
  }, []);

  return (
    <FeatureGroup>
      {prov.features.map((feature) => {
        return (
          <GeoJSON
            data={feature}
            style={{
              weight: 0.5,
              fill: true,
              fillOpacity: 1,
              fillColor: feature.properties.is_indonesia_timur
                ? "#5B6456"
                : "#D2D461",
              color: "#656565",
            }}
          />
        );
      })}
    </FeatureGroup>
  );
};

export default ProvinsiLayer;
