import { Flex } from "@mantine/core";
import React from "react";
import Hexagon from "react-hexagon";

export type HexagonProps = {
  text: string;
  fillColor: string;
};

const HexagonWrapper: React.FC<HexagonProps> = ({ text, fillColor }) => {
  return (
    <Flex justify="center" align="center" className="w-44 relative">
      <div className="absolute w-full text-sm text-center text-black px-2">
        {text}
      </div>
      <Hexagon className="w-full" style={{ fill: fillColor }} />
    </Flex>
  );
};

export default HexagonWrapper;
