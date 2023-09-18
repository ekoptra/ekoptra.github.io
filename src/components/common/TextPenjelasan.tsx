import { FC, PropsWithChildren, HTMLProps } from "react";
import { clsx } from "@mantine/core";

type Props = PropsWithChildren<{
  className?: HTMLProps<HTMLElement>["className"];
}>;

const TextPenjelasan: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx(className, "xl:text-2xl lg:text-xl leading-relaxed")}>
      {children}
    </div>
  );
};

export default TextPenjelasan;
