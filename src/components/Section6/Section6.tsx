import { FC } from "react";
import useStyles from "./Section6.style";
import { Card, Flex, Grid, Stack } from "@mantine/core";
import BarChart from "./BarChart";

type CardProps = {
  text: string;
};

const cardData: CardProps[] = [
  { text: "Sulitnya Akses Listrik yang Memadai" },
  { text: "Tingginya Angka Kemiskinan" },
  { text: "Sulitnya Akses Air Bersih" },
];

const Section6: FC = ({}) => {
  const { classes, cx } = useStyles();

  const CardPenyebab: FC<CardProps> = ({ text }) => (
    <Card className="h-96">
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

  return (
    <div className={cx(classes.wrapper)}>
      <div className="lg:px-28 md:px-20 sm:px-16 px-8 pt-20 pb-28">
        <h2 className="text-center text-yellow italic text-xl font-semibold">
          Bagaimana rentannya pangan di Papua ini bisa terjadi?
        </h2>

        <Grid className="my-16" gutter={20}>
          {cardData.map((d) => (
            <Grid.Col span={4}>
              <Card className="h-96">
                <CardPenyebab {...d} />
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <hr className={cx(classes.line, "w-1/3 mb-10")} />

        <h2 className={cx(classes.header, "text-center px-32 leading-tight")}>
          Rasio Elektrifikasi (%) di 34 Provinsi di Indonesia
        </h2>

        <div className="mt-7">
          <p className="text-xl">
            Akses listrik bukan sekadar memiliki hubungan yang kuat dengan
            ketahanan pangan, seolah-olah ia adalah nadi yang mengalirkan
            kehidupan ke seluruh rantai pasokan makanan, dengan kemampuan
            ajaibnya yang menciptakan makanan dari tanaman ke meja kita, menjaga
            kelestariannya sepanjang perjalanan.
          </p>
        </div>

        <Grid className="mt-16" align="center">
          <Grid.Col span={8}>
            <div
              style={{
                border: "2px solid white",
              }}
              className="py-5 rounded-xl"
            >
              <div
                style={{
                  height: "300px",
                }}
                className=""
              >
                <BarChart />
              </div>

              <Flex gap={0} direction="column" align="end" className="pr-3">
                <div>
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
                </div>
              </Flex>
            </div>
          </Grid.Col>

          <Grid.Col span={4}>
            <p className="text-lg">
              <b>3 dari 34 Provinsi</b> dengan nilai rasio elektrifikasi
              terendah ada di{" "}
              <b className="text-yellow">Kawasan Indonesia Timur</b>.
            </p>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default Section6;
