import React from "react";
import useStyles from "./Section2.style";
import MapComponent from "./MapComponent";
import { Flex } from "@mantine/core";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import TextBold from "../common/TextBold";

const Section2: React.FC = () => {
  const { classes, cx } = useStyles();

  return (
    <Container
      colorScheme="Dark"
      header={
        <>
          <span className="font-semibold text-yellow">Krisis Pangan </span>
          yang Melekat di Papua
        </>
      }
      className="pt-72"
    >
      <div>
        <Flex justify="end">
          <TextPenjelasan className="w-1/2">
            <p>
              <TextBold className="text-yellow">19 Kabupaten/Kota </TextBold>
              di Pulau Papua selama 5 tahun terakhir menjadi wilayah yang sangat
              rentan terhadap pangan
            </p>
          </TextPenjelasan>
        </Flex>

        <div className="my-16">
          <MapComponent />
        </div>

        <Flex justify="start">
          <TextPenjelasan className="w-1/2">
            <p>
              <TextBold className="text-yellow">2 juta 200 ribu jiwa</TextBold>{" "}
              terus berjuang melawan gelombang ketidakpastian pangan
            </p>
          </TextPenjelasan>
        </Flex>
      </div>
    </Container>
  );
};

export default Section2;
