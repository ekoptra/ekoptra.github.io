import { GeoJSON, FeatureGroup, Tooltip } from "react-leaflet";
import useDataStore from "../../hooks/useDataStore";
import { Table } from "@mantine/core";

const KabupatenLayer: React.FC = () => {
  const kab = useDataStore((state) => state.kabupaten);

  return (
    <FeatureGroup>
      {kab.features.map((feature) => {
        if (feature.properties.kelompok_2022 > 3) return null;
        return (
          <GeoJSON
            data={feature}
            style={{
              weight: 0.5,
              fill: true,
              fillColor: "#f39200",
              fillOpacity: 1,
              color: "#656565",
            }}
          >
            <Tooltip>
              <div>
                <h4>{feature.properties.alt_name}</h4>
                <Table>
                  <thead>
                    <tr>
                      <th>Indeks 2022</th>
                      <th>Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Indeks Ketahanan Pangan</td>
                      <td>{feature.properties.ikp_2022}</td>
                    </tr>
                    <tr>
                      <td>Indeks Ketersediaan</td>
                      <td>
                        {Math.round(
                          feature.properties.index_ketersediaan_2022 * 100
                        ) / 100}
                      </td>
                    </tr>
                    <tr>
                      <td>Indeks Keterjankauan</td>
                      <td>
                        {Math.round(
                          feature.properties.index_keterjangkauan_2022 * 100
                        ) / 100}
                      </td>
                    </tr>
                    <tr>
                      <td>Indeks Pemanfaatan</td>
                      <td>
                        {Math.round(
                          feature.properties.index_pemanfaatan_2022 * 100
                        ) / 100}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tooltip>
          </GeoJSON>
        );
      })}
    </FeatureGroup>
  );
};

export default KabupatenLayer;
