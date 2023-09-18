import React from "react";
import useStyles from "./Section5.style";
import { Flex, Grid } from "@mantine/core";
import LineChart from "./LineChart";
import berasImg from "../../images/beras.png";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import TextBold from "../common/TextBold";
import CardChart from "../common/CardChart";

const Section5: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <Container colorScheme="Light">
        <hr className={cx(classes.line, "w-1/3 2xl:mb-10 2xl:mt-0")} />

        <h2 className="text-center px-32 leading-tight 2xl:text-4xl text-2xl 2xl:mt-32 mt-16">
          Di kawasan timur Indonesia, terbentang dua cerita yang sungguh kontras
          mengenai ketahanan pangan. Antara{" "}
          <TextBold className="text-orange">Bali dan Papua.</TextBold>
        </h2>

        <Grid className="2xl:mt-20 mt-12" gutter={40} align="center">
          <Grid.Col span={6}>
            <CardChart
              colorScheme="Light"
              chart={<LineChart />}
              className={classes.cardChart}
              title="Produktivitas Padi Bali dan Papua Tahun 2020-2022"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextPenjelasan className="2xl:ml-16 ml-8">
              <TextBold className=" 2xl:text-4xl text-3xl">
                Ketersediaan pangan
              </TextBold>{" "}
              yang memadai adalah inti dari ketahanan pangan. Bali memang bukan
              daerah dengan produksi padi terbanyak tetapi Bali menjadi daerah
              dengan produktivitas Padi tertinggi selama 3 tahun terakhir.
              Sementara itu, di kawasan Indonesia Timur, Papua terus menunjukkan
              konsistensi negatif sebagai daerah dengan{" "}
              <TextBold className="text-orange">
                produktivitas padi terendah.
              </TextBold>
            </TextPenjelasan>
          </Grid.Col>
        </Grid>

        <div className="2xl:mt-32 xl:mt-20">
          <h3 className="2xl:text-4xl text-3xl 2xl:mb-6 mb-2">
            Bali dan Papua memiliki populasi hampir setara,
          </h3>
          <TextPenjelasan>
            dengan sekitar 4,4 juta jiwa. Namun, perbandingan produksi padi
            mereka terasa seperti langit dan bumi. Bali mampu menghasilkan 680
            ribu ton padi, sementara Papua hanya mencapai 193 ribu ton. Setiap
            individu di Bali dapat menikmati pasokan 154 kg beras setiap tahun,
            sementara di Papua hanya sebesar 43 kg. Ironisnya, setiap orang
            membutuhkan 114,6 kg beras per tahun untuk memenuhi kebutuhan pangan
            mereka. Kondisi ini menunjukkan bahwa Papua masih{" "}
            <TextBold className="text-orange">
              belum mampu memenuhi kebutuhan pangan
            </TextBold>{" "}
            masyarakatnya.
          </TextPenjelasan>
        </div>
      </Container>

      <Container
        colorScheme="Light"
        className="pb-40 sticky top-0 2xl:pt-20 xl:pt-16 -z-10"
      >
        <div>
          <Grid className="mb-20">
            <Grid.Col span={6}>
              <Flex direction="column" align="center">
                <h3 className="font-semibold text-4xl mb-8">Bali</h3>
                <div>
                  <Flex>
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <Flex direction="column" className="ml-5">
                      <p className="text-5xl">680 </p>
                      <TextPenjelasan>Ribu Ton</TextPenjelasan>
                      <TextPenjelasan>Produksi Beras</TextPenjelasan>
                    </Flex>
                  </Flex>
                  <Flex align="end">
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-28" />
                  </Flex>
                </div>
              </Flex>
            </Grid.Col>
            <Grid.Col span={6}>
              <Flex direction="column" align="center">
                <h3 className="font-semibold text-4xl mb-8">Papua</h3>
                <div>
                  <Flex>
                    <Flex direction="column" className="mr-5">
                      <p className="text-5xl">193 </p>
                      <TextPenjelasan>Ribu Ton</TextPenjelasan>
                      <TextPenjelasan>Produksi Beras</TextPenjelasan>
                    </Flex>
                    <img src={berasImg} alt="Beras" className="h-32" />
                    <img src={berasImg} alt="Beras" className="h-32" />
                  </Flex>
                </div>
              </Flex>
            </Grid.Col>
          </Grid>

          <TextPenjelasan>
            <TextBold className="2xl:text-4xl text-3xl">
              “Pemanfaatan pangan
            </TextBold>{" "}
            adalah elemen kunci dalam memastikan ketahanan pangan yang
            berkelanjutan. Lebih dari sekadar memproduksi, penting memastikan
            bahwa pangan dapat memberikan nutrisi yang cukup bagi masyarakat.{" "}
            <TextBold className="2xl:text-4xl text-3xl">”</TextBold>
          </TextPenjelasan>
        </div>
      </Container>
    </>
  );
};

export default Section5;
