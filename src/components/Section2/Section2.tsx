import React from "react";
import useStyles from "./Section2.style";
import MapComponent from "./MapComponent";
import { Flex } from "@mantine/core";

const Section2: React.FC = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper)}>
      <div className="pt-60 lg:px-28 md:px-20 sm:px-16 px-8">
        <div className={cx(classes.header, "lg:w-1/3 sm:w-2/3 w-5/6")}>
          <h2 className="leading-tight">
            <span className="font-semibold text-yellow">Krisis Pangan </span>
            yang Melekat di Papua
          </h2>
        </div>

        <div>
          <Flex justify="end" className="pr-28">
            <p className={cx(classes.textDescription, "font-light w-1/3")}>
              <b className="text-yellow">19 Kabupaten/Kota </b>
              di Pulau Papua selama 5 tahun terakhir menjadi wilayah yang sangat
              rentan terhadap pangan
            </p>
          </Flex>
          <MapComponent />

          <Flex justify="end" className="pr-28">
            <p className={cx(classes.textDescription, "font-light w-1/3")}>
              <b className="text-yellow">200 ribu jiwa </b>
              terus berjuang melawan gelombang ketidakpastian pangan
            </p>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Section2;
