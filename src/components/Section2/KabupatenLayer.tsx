import { useMap, GeoJSON, FeatureGroup, Tooltip } from "react-leaflet";
import useDataStore from "../../hooks/useDataStore";
const bbox = require("geojson-bbox");

const selaluRentan = [
  "KOTA SUBULUSSALAM",
  "KABUPATEN TELUK WONDAMA",
  "KABUPATEN TAMBRAUW",
  "KABUPATEN PEGUNUNGAN ARFAK",
  "KABUPATEN PUNCAK JAYA",
  "KABUPATEN MAPPI",
  "KABUPATEN ASMAT",
  "KABUPATEN YAHUKIMO",
  "KABUPATEN PEGUNUNGAN BINTANG",
  "KABUPATEN TOLIKARA",
  "KABUPATEN SUPIORI",
  "KABUPATEN MAMBERAMO RAYA",
  "KABUPATEN NDUGA",
  "KABUPATEN LANNY JAYA",
  "KABUPATEN MAMBERAMO TENGAH",
  "KABUPATEN YALIMO",
  "KABUPATEN PUNCAK",
  "KABUPATEN DOGIYAI",
  "KABUPATEN INTAN JAYA",
  "KABUPATEN DEIYAI",
];

const KabupatenLayer: React.FC = () => {
  const kab = useDataStore((state) => state.kabupaten);

  const map = useMap();

  const bb = bbox(kab);

  map.flyToBounds([
    [bb[1], bb[0]],
    [bb[3], bb[2]],
  ]);

  return (
    <FeatureGroup>
      {kab.features.map((feature) => {
        if (!["PAPUA", "PAPUA BARAT"].includes(feature.properties.prov_name))
          return null;

        if (selaluRentan.includes(feature.properties.alt_name)) {
          return (
            <GeoJSON
              data={feature}
              style={{
                weight: 0.5,
                fillColor: "#ff8e68",
                fill: true,
                fillOpacity: 1,
                color: "#656565",
              }}
            >
              <Tooltip>{feature.properties.alt_name}</Tooltip>
            </GeoJSON>
          );
        }

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

export default KabupatenLayer;
