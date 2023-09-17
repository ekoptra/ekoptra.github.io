import { FC, PropsWithChildren, HTMLProps } from "react";
import { clsx } from "@mantine/core";

type Props = PropsWithChildren<{
  className?: HTMLProps<HTMLElement>["className"];
}>;

const TextBold: FC<Props> = ({ children, className }) => {
  return <span className={clsx(className, "font-semibold")}>{children}</span>;
};

export default TextBold;
