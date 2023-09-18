import React from "react";
import useStyles from "./Section4.style";
import { Checkbox, Flex, Grid, Stack } from "@mantine/core";
import MapComponent from "./MapComponent";
import useFilterStore from "../../hooks/useFilterStore";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import LegendComponent from "../common/LegendComponent";

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
      <Flex className="w-2/3">
        <TextPenjelasan>
          Kawasan Indonesia Timur dan Barat selalu bagaikan dua sisi mata uang
          yang berlawanan. Perlu komitmen bersama untuk memperpendek kesenjangan
          antara kedua wilayah tersebut.
        </TextPenjelasan>
      </Flex>

      <Grid className="mt-16">
        <Grid.Col span={2}>
          <Flex direction="column" justify="space-between">
            <Checkbox
              label="Wilayah Rentan"
              checked={displayRawan}
              onChange={toggleDisplayRawan}
              className="mt-12"
              size="lg"
            />

            <Checkbox
              label="Wilayah Tahan"
              checked={displayTahan}
              onChange={toggleDisplayTahan}
              className="mt-12"
              size="lg"
            />

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
          </Flex>
        </Grid.Col>

        <Grid.Col span={10}>
          <div className="relative">
            <Flex
              justify="end"
              className="  absolute -top-12 z-50 right-0 w-1/3"
            >
              <TextPenjelasan className="text-left">
                <p className="text-4xl">33%</p>
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

            <Flex className="  absolute -bottom-12 z-50 left-0 w-1/3">
              <TextPenjelasan className="text-right">
                <p className="text-4xl">8%</p>
                <p>
                  Kabupaten/Kota di Indonesia Barat{" "}
                  <span className="text-orange">
                    <b>Rentan pangan</b>
                  </span>{" "}
                </p>
              </TextPenjelasan>
            </Flex>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section4;
