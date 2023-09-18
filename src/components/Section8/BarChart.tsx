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
  const kemiskinan = useDataStore((state) => state.kemiskinan).slice(0, 34);
  kemiskinan.reverse();

  return (
    <ResponsiveBar
      data={kemiskinan.map((e) => ({
        provinsiShort: e.provinsi_short,
        kemiskinan: e.kemiskinan,
      }))}
      layout="horizontal"
      keys={["kemiskinan"]}
      indexBy="provinsiShort"
      margin={{ top: 0, right: 10, bottom: 0, left: 120 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={kemiskinan.map((e) => (e.is_timur ? "#d9d9d9" : "#d2d461"))}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      colorBy="indexValue"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
      }}
      labelSkipWidth={30}
      labelSkipHeight={12}
      enableGridY={false}
      theme={{
        fontFamily: "Poppins, sens-serif",
        textColor: "white",
        axis: {
          ticks: {
            text: {
              fontSize: 13,
            },
          },
        },
      }}
      labelTextColor="black"
      tooltip={(label) => (
        <Card>
          <p className="text-sm">
            {label.data.provinsiShort} : {label.data.kemiskinan}
          </p>
        </Card>
      )}
    />
  );
};

export default BarChart;
