import { Card, Flex } from "@mantine/core";
import { FC } from "react";

export type CardPenyebabProps = {
  text: string;
};

const CardPenyebab: FC<CardPenyebabProps> = ({ text }) => (
  <Card
    style={{
      height: "500px",
    }}
  >
    <Flex
      direction="column"
      justify="end"
      className="h-full text-2xl text-center pb-6 font-semibold"
      align="center"
    >
      {text}
    </Flex>
  </Card>
);

export default CardPenyebab;
