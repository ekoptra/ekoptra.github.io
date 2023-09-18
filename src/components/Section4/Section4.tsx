import React from "react";
import useStyles from "./Section4.style";
import { Checkbox, Flex, Grid, Stack } from "@mantine/core";
import MapComponent from "./MapComponent";
import useFilterStore from "../../hooks/useFilterStore";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import LegendComponent from "../common/LegendComponent";

const Legend = () => (
  <Flex gap={10} direction="column" className="mt-24">
    <LegendComponent
      tipe="timur"
      classNameKotak="h-6 w-6"
      classNameText="text-md"
      gap={10}
    />
    <LegendComponent
      tipe="barat"
      classNameKotak="h-6 w-6"
      classNameText="text-md"
      gap={10}
    />
    <LegendComponent
      tipe="rentan"
      classNameKotak="h-6 w-6"
      classNameText="text-md"
      gap={10}
    />
    <LegendComponent
      tipe="tahan"
      classNameKotak="h-6 w-6"
      classNameText="text-md"
      gap={10}
    />
  </Flex>
);

const Legend2 = () => (
  <Flex gap={10} direction="row" className="mt-24">
    <Flex gap={10} direction="column">
      <LegendComponent
        tipe="timur"
        classNameKotak="h-6 w-6"
        classNameText="text-md"
        gap={10}
      />
      <LegendComponent
        tipe="barat"
        classNameKotak="h-6 w-6"
        classNameText="text-md"
        gap={10}
      />
    </Flex>
    <Flex gap={10} direction="column">
      <LegendComponent
        tipe="rentan"
        classNameKotak="h-6 w-6"
        classNameText="text-md"
        gap={10}
      />
      <LegendComponent
        tipe="tahan"
        classNameKotak="h-6 w-6"
        classNameText="text-md"
        gap={10}
      />
    </Flex>
  </Flex>
);

const Section4: React.FC = () => {
  const { classes, cx } = useStyles();
  const { displayRawan, toggleDisplayRawan, displayTahan, toggleDisplayTahan } =
    useFilterStore((state) => state);

  return (
    <Container
      colorScheme="Light"
      className="relative"
      header={
        <span className="font-semibold">
          Ketahanan Pangan <span className="text-orange">Barat dan Timur</span>{" "}
          Terpaut Satu Dekade
        </span>
      }
    >
      <Flex className="2xl:w-2/3">
        <TextPenjelasan>
          Kawasan Indonesia Timur dan Barat selalu bagaikan dua sisi mata uang
          yang berlawanan. Perlu komitmen bersama untuk memperpendek kesenjangan
          antara kedua wilayah tersebut.
        </TextPenjelasan>
      </Flex>

      <Grid className="2xl:mt-16 mt-10">
        <Grid.Col xl={2} lg={12}>
          <Flex className="2xl:flex-col xl:flex-row 2xl:justify-between xl:justify-start gap-7 2xl:gap-0">
            <Checkbox
              label="Wilayah Rentan"
              checked={displayRawan}
              onChange={toggleDisplayRawan}
              className="2xl:mt-12 mt-6"
              size="md"
            />

            <Checkbox
              label="Wilayah Tahan"
              checked={displayTahan}
              onChange={toggleDisplayTahan}
              className="2xl:mt-12 mt-6"
              size="md"
            />

            <div className="2xl:block hidden">
              <Legend />
            </div>
          </Flex>
        </Grid.Col>

        <Grid.Col xl={10} lg={12}>
          <div className="relative">
            <Flex justify="end" className="absolute -top-12 z-50 right-0 w-1/3">
              <TextPenjelasan className="text-left">
                <p className="2xl:text-4xl xl:text-3xl">33%</p>
                <p>
                  Kabupaten/Kota di Indonesia Timur{" "}
                  <span className="text-orange">
                    <b>Rentan pangan</b>
                  </span>{" "}
                </p>
              </TextPenjelasan>
            </Flex>

            <div className={(classes.map, " z-0")}>
              <MapComponent />
            </div>

            <Flex className="absolute -bottom-12 z-50 left-0 w-1/3">
              <TextPenjelasan className="text-right">
                <p className="2xl:text-4xl xl:text-3xl">8%</p>
                <p>
                  Kabupaten/Kota di Indonesia Barat{" "}
                  <span className="text-orange">
                    <b>Rentan pangan</b>
                  </span>{" "}
                </p>
              </TextPenjelasan>
            </Flex>

            <div className="block 2xl:hidden absolute -bottom-12 right-12">
              <Legend2 />
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section4;
