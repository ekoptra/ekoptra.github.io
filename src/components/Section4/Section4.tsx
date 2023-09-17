import React from "react";
import useStyles from "./Section4.style";
import { Checkbox, Flex, Grid, Stack } from "@mantine/core";
import MapComponent from "./MapComponent";
import useFilterStore from "../../hooks/useFilterStore";

const Section4: React.FC = () => {
  const { classes, cx } = useStyles();
  const { displayRawan, toggleDisplayRawan } = useFilterStore((state) => state);

  return (
    <div className={cx(classes.wrapper)}>
      <div className="lg:px-28 md:px-20 sm:px-16 px-8 relative">
        <Flex justify="end" className="pr-5 absolute right-24 top-20">
          <div className="w-2/3">
            <p className="text-4xl">33%</p>
            <p>
              Kabupaten/Kota di Indonesia Timur{" "}
              <span className="text-orange">
                <b>Rentan pangan</b>
              </span>{" "}
            </p>
          </div>
        </Flex>

        <h2 className={cx(classes.header, "font-bold w-1/3 leading-tight")}>
          Ketahanan Pangan <span className="text-orange">Barat dan Timur</span>{" "}
          Terpaut Satu Dekade
        </h2>

        <Grid className="mt-10">
          <Grid.Col span={5}>
            <Flex direction="column" justify="space-between" className="h-full">
              <p>
                Kawasan Indonesia Timur dan Barat selalu bagaikan dua sisi mata
                uang yang berlawanan. Perlu komitmen bersama untuk memperpendek
                kesenjangan antara kedua wilayah tersebut.
              </p>
              <Checkbox
                label="Wilayah Rentan"
                checked={displayRawan}
                onChange={toggleDisplayRawan}
              />

              <Flex justify="end" className="pr-5">
                <div className="text-right w-2/3">
                  <p className="text-4xl">8%</p>
                  <p>
                    Kabupaten/Kota di Indonesia Barat{" "}
                    <span className="text-orange">
                      <b>Rentan pangan</b>
                    </span>{" "}
                  </p>
                </div>
              </Flex>
            </Flex>
          </Grid.Col>
          <Grid.Col span={7}>
            <div className={(classes.map, "border-2 border-gray-300")}>
              <MapComponent />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default Section4;
