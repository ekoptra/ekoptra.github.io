import { FC } from "react";
import useStyles from "./Section7.style";
import { Flex, Grid } from "@mantine/core";
import BarChart from "./BarChart";

const Section7: FC = ({}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper)}>
      <div className="lg:px-28 md:px-20 sm:px-16 px-8 pt-20">
        <div className={cx(classes.header, "lg:w-1/3 sm:w-2/3 w-5/6")}>
          <h2 className="leading-tight">Tingginya Angka Kemiskinan</h2>
        </div>

        <Grid className="mt-16">
          <Grid.Col span={6}>
            <p className="text-lg">
              Orang-orang yang tinggal{" "}
              <b className="text-yellow">di bawah garis kemiskinan</b> memiliki
              daya beli yang terbatas sehingga mereka kesulitan untuk mencukupi
              kebutuhan pokok mereka. Hal ini berdampak pada{" "}
              <b className="text-yellow">ketahanan pangan</b>.
            </p>
          </Grid.Col>

          <Grid.Col span={6}>
            <div
              style={{
                border: "2px solid white",
              }}
              className="p-5 rounded-xl"
            >
              <div>
                <h3 className="text-center text-lg font-medium">
                  Provinsi dengan Persentase Kemiskinan di Atas Nilai Nasional
                  Tahun 2022
                </h3>
              </div>

              <div
                style={{
                  height: "500px",
                }}
              >
                <BarChart />
              </div>

              <Flex gap={10} justify="end">
                <Flex align="center" gap={5}>
                  <div
                    className="h-3 w-3"
                    style={{ backgroundColor: "#d9d9d9" }}
                  ></div>
                  <div className="text-sm">Indonesia Bagian Timur</div>
                </Flex>
                <Flex align="center" gap={5}>
                  <div
                    className="h-3 w-3"
                    style={{ backgroundColor: "#d2d461" }}
                  ></div>
                  <div className="text-sm">Indonesia Bagian Barat</div>
                </Flex>
              </Flex>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default Section7;
