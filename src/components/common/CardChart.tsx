import { clsx } from "@mantine/core";
import { FC, PropsWithChildren, HTMLProps } from "react";

type CardChartProps = PropsWithChildren<{
  colorScheme: "Dark" | "Light";
  height?: string;
  className?: HTMLProps<HTMLElement>["className"];
  title?: React.ReactNode;
  chart: React.ReactNode;
}>;

const CardChart: FC<CardChartProps> = ({
  title,
  height,
  className,
  children,
  chart,
  colorScheme,
}) => {
  return (
    <div
      style={{
        border:
          colorScheme === "Dark" ? "2px solid white" : "2px solid #2A3028",
      }}
      className="p-5 py-8 rounded-xl"
    >
      {title && (
        <div>
          <h3 className="text-center text-xl font-semibold px-4">{title}</h3>
        </div>
      )}

      <div
        style={{
          height: height,
        }}
        className={clsx(className, "my-5")}
      >
        {chart}
      </div>

      {children}
    </div>
  );
};

export default CardChart;
