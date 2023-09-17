import { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import useDataStore from "../../hooks/useDataStore";
import { Card } from "@mantine/core";

interface BarChartProps {}

const data = [
  {
    country: "AD",
    burger: 179,
    burgerColor: "hsl(277, 70%, 50%)",
  },
];

const BarChart: FC<BarChartProps> = ({}) => {
  const elektrifikasi = useDataStore((state) => state.elektrifikasi);

  return (
    <ResponsiveBar
      data={elektrifikasi.map((e) => ({
        provinsiShort: e.provinsi_short,
        elektrifitas: e.elektifitas,
      }))}
      keys={["elektrifitas"]}
      indexBy="provinsiShort"
      margin={{ top: 0, right: 0, bottom: 100, left: 0 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={elektrifikasi.map((e) => (e.is_timur ? "#d9d9d9" : "#d2d461"))}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      colorBy="indexValue"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
      }}
      axisLeft={null}
      labelSkipWidth={30}
      labelSkipHeight={12}
      enableGridY={false}
      theme={{
        fontFamily: "Poppins, sens-serif",
        textColor: "white",
      }}
      labelTextColor="black"
      tooltip={(label) => (
        <Card>
          <p className="text-sm">
            {label.data.provinsiShort} : {label.data.elektrifitas}
          </p>
        </Card>
      )}
    />
  );
};

export default BarChart;
