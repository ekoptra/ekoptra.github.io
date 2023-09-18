import { Card, Flex, Image, clsx } from "@mantine/core";
import React, { FC } from "react";
import useStyles from "./Section6.style";

export type CardPenyebabProps = {
  text: string;
  src: string;
};

const CardPenyebab: FC<CardPenyebabProps & { urutan: number }> = ({
  text,
  src,
  urutan,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const { classes, cx } = useStyles();

  return (
    <Card
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Card.Section>
        <img
          src={src}
          className={cx(
            classes.image,
            "transition-all duration-500 object-cover",
            isHover ? "scale-110" : "scale-100"
          )}
        />
        <div
          className={cx(
            "bg-black transition-all duration-1000 absolute top-0 right-0 left-0 bottom-0",
            isHover ? "bg-opacity-20" : "bg-opacity-40"
          )}
        ></div>

        <div className="absolute bottom-0 text-white right-0 top-0  left-0 px-5 py-10">
          <Flex direction="column" className="h-full " justify="space-between">
            <div className="text-4xl italic ml-5">0{urutan}</div>
            <div className="text-center text-4xl font-semibold">{text}</div>
          </Flex>
        </div>
      </Card.Section>
    </Card>
  );
};

export default CardPenyebab;
