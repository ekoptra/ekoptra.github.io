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
    <div className={cx(classes.wrapper, className, "pt-40")}>
      <div className="container mx-auto px-16">
        {header && (
          <div
            className={cx(
              classes.header,
              "lg:w-2/5 sm:w-2/3 w-5/6 mb-12 pb-8 text-4xl"
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
