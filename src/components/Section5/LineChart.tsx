import { ResponsiveLine, Serie } from "@nivo/line";
import { FC } from "react";

interface LineChartProps {}

const data = [
  {
    id: "Bali",
    color: "#F39200",
    data: [
      {
        x: "2020",
        y: 58.49,
      },
      {
        x: "2021",
        y: 58.83,
      },
      {
        x: "2022",
        y: 60.59,
      },
    ],
  },
  {
    id: "Papua",
    color: "#D2D461",
    data: [
      {
        x: "2020",
        y: 31.48,
      },
      {
        x: "2021",
        y: 44.05,
      },
      {
        x: "2022",
        y: 38.99,
      },
    ],
  },
];

const LineChart: FC<LineChartProps> = ({}) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 60, bottom: 80, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 30,
        max: 61,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
      }}
      axisLeft={null}
      theme={{
        fontFamily: "Poppins, sans-serif",
        fontSize: 16,
        axis: {
          legend: {
            text: {
              fontSize: 16,
            },
          },
        },
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      colors={["#F39200", "#D2D461"]}
      pointLabelYOffset={-12}
      useMesh={true}
      enableGridY={false}
      enablePointLabel={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 10,
          symbolShape: "square",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
        },
      ]}
    />
  );
};

export default LineChart;
