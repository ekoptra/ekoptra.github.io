import { clsx } from "@mantine/core";
import { FC, PropsWithChildren, HTMLProps } from "react";

type CardChartProps = PropsWithChildren<{
  colorScheme: "Dark" | "Light";
  classNameWrapper?: HTMLProps<HTMLElement>["className"];
  className?: HTMLProps<HTMLElement>["className"];
  title?: React.ReactNode;
  chart: React.ReactNode;
}>;

const CardChart: FC<CardChartProps> = ({
  title,
  className,
  children,
  chart,
  colorScheme,
  classNameWrapper,
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
          <h3 className="text-center text-xl font-semibold px-4 mb-4">
            {title}
          </h3>
        </div>
      )}

      <div
        className={clsx(
          "overflow-x-hidden scroll-inside-page",
          classNameWrapper
        )}
      >
        <div className={clsx(className)}>{chart}</div>
      </div>

      {children}
    </div>
  );
};

export default CardChart;
