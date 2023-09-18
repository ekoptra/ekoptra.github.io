import { FC, PropsWithChildren, HTMLProps } from "react";
import useCommonStyle from "../../hooks/useCommonStyle";

type ContainerProps = PropsWithChildren<{
  colorScheme: "Dark" | "Light";
  className?: HTMLProps<HTMLElement>["className"];
  header?: React.ReactNode;
}>;

const Container: FC<ContainerProps> = ({
  children,
  className,
  colorScheme,
  header,
}) => {
  const { classes, cx } = useCommonStyle({ colorScheme });

  return (
    <div className={cx(classes.wrapper, className, "xl:pt-40 lg:pt-32")}>
      <div className="container mx-auto 2xl:px-16 px-8">
        {header && (
          <div
            className={cx(
              classes.header,
              "xl:w-2/5  2xl:mb-12 mb-8 pb-8 xl:text-4xl lg:text-3xl"
            )}
          >
            <h2 className="leading-tight">{header}</h2>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Container;
