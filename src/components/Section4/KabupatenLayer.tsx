import { GeoJSON, FeatureGroup, Tooltip } from "react-leaflet";
import useDataStore from "../../hooks/useDataStore";
import { Table } from "@mantine/core";
import { PropertiesKabupaten } from "../../types/kabupaten-data.type";
import useFilterStore from "../../hooks/useFilterStore";

const TableTooltip: React.FC<PropertiesKabupaten> = (props) => (
  <Tooltip>
    <div>
      <h4>
        {props.alt_name}, {props.prov_name}
      </h4>
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
            <td>{props.ikp_2022}</td>
          </tr>
          <tr>
            <td>Indeks Ketersediaan</td>
            <td>{Math.round(props.index_ketersediaan_2022 * 100) / 100}</td>
          </tr>
          <tr>
            <td>Indeks Keterjankauan</td>
            <td>{Math.round(props.index_keterjangkauan_2022 * 100) / 100}</td>
          </tr>
          <tr>
            <td>Indeks Pemanfaatan</td>
            <td>{Math.round(props.index_pemanfaatan_2022 * 100) / 100}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Tooltip>
);

const KabupatenLayer: React.FC = () => {
  const kab = useDataStore((state) => state.kabupaten);
  const { displayRawan, displayTahan } = useFilterStore((state) => state);

  return (
    <FeatureGroup>
      {kab.features.map((feature) => {
        if (displayRawan) {
          if (feature.properties.kelompok_2022 <= 3)
            return (
              <GeoJSON
                data={feature}
                style={{
                  weight: 0.5,
                  fill: true,
                  fillColor: "#F39200",
                  fillOpacity: 1,
                  color: "#656565",
                }}
              >
                <TableTooltip {...feature.properties} />
              </GeoJSON>
            );
        }

        if (displayTahan) {
          if (feature.properties.kelompok_2022 > 3)
            return (
              <GeoJSON
                data={feature}
                style={{
                  weight: 0.5,
                  fill: true,
                  fillColor: "#61d37d",
                  fillOpacity: 1,
                  color: "#656565",
                }}
              >
                <TableTooltip {...feature.properties} />
              </GeoJSON>
            );
        }
      })}
    </FeatureGroup>
  );
};

export default KabupatenLayer;
