import { Flex, clsx } from "@mantine/core";
import { FC, HTMLProps } from "react";

type LegendTipe = "barat" | "timur" | "tahan" | "rentan";

type LegendData = {
  tipe: LegendTipe;
  backgroundColor: string;
  text: string;
};

interface LegendComponentProps {
  tipe: LegendTipe;
  classNameKotak?: HTMLProps<HTMLElement>["className"];
  classNameText?: HTMLProps<HTMLElement>["className"];
  gap?: number;
}

const listLegend: LegendData[] = [
  {
    tipe: "barat",
    text: "Kawasan Barat Indonesia",
    backgroundColor: "#D2D461",
  },
  {
    tipe: "timur",
    text: "Kawasan Timur Indonesia",
    backgroundColor: "#D9D9D9",
  },
  {
    tipe: "rentan",
    text: "Wilayah Rentan Pangan",
    backgroundColor: "#F39200",
  },
  {
    tipe: "tahan",
    text: "Wilayah Tahan Pangan",
    backgroundColor: "#61d37d",
  },
];

const LegendComponent: FC<LegendComponentProps> = ({
  tipe,
  classNameKotak,
  classNameText,
  gap,
}) => {
  const legend = listLegend.find((l) => l.tipe === tipe);

  return (
    <Flex align="center" gap={gap ?? 5}>
      <div
        className={clsx("h-3 w-3", classNameKotak)}
        style={{ backgroundColor: legend?.backgroundColor }}
      ></div>
      <div className={clsx("text-sm", classNameText)}>{legend?.text}</div>
    </Flex>
  );
};

export default LegendComponent;
