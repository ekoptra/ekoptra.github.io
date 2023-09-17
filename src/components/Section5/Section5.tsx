import React from "react";
import useStyles from "./Section5.style";
import { Flex, Grid } from "@mantine/core";
import LineChart from "./LineChart";
import berasImg from "../../images/beras.png";

const Section5: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper, "pb-16")}>
      <div className="lg:px-28 md:px-20 sm:px-16 px-8 pt-20">
        <hr className={cx(classes.line, "w-1/3 mb-10")} />

        <h2 className={cx(classes.header, "text-center px-32 leading-tight")}>
          Di kawasan timur Indonesia, terbentang dua cerita yang sungguh kontras
          mengenai ketahanan pangan. Antara{" "}
          <b className="text-orange">Bali dan Papua.</b>
        </h2>

        <Grid className="mt-16" gutter={40} align="center">
          <Grid.Col span={6}>
            <Flex className={cx(classes.cardChart)} direction="column">
              <h3 className="text-center pt-5 mb-3">
                Produktivitas Padi Bali dan Papua Tahun 2020-2022
              </h3>
              <Flex className={cx(classes.heightChart)} justify="center">
                <LineChart />
              </Flex>
            </Flex>
          </Grid.Col>

          <Grid.Col span={6}>
            <p>
              <b className="text-2xl">Ketersediaan pangan </b>
              yang memadai adalah inti dari ketahanan pangan. Bali memang bukan
              daerah dengan produksi padi terbanyak tetapi Bali menjadi daerah
              dengan produktivitas Padi tertinggi selama 3 tahun terakhir.
              Sementara itu, di kawasan Indonesia Timur, Papua terus menunjukkan
              konsistensi negatif sebagai daerah dengan
              <b className="text-orange"> produktivitas beras terendah.</b>
            </p>
          </Grid.Col>
        </Grid>

        <div className="mt-16">
          <h3 className="text-3xl mb-1">
            Bali dan Papua memiliki populasi hampir setara,
          </h3>
          <p>
            dengan sekitar 4,4 juta jiwa. Namun, perbandingan produksi padi
            mereka terasa seperti langit dan bumi. Bali mampu menghasilkan 680
            ribu ton padi, sementara Papua hanya mencapai 193 ribu ton. Setiap
            individu di Bali dapat menikmati pasokan 154 kg beras setiap tahun,
            sementara di Papua hanya sebesar 43 kg. Ironisnya, setiap orang
            membutuhkan 114,6 kg beras per tahun untuk memenuhi kebutuhan pangan
            mereka. Kondisi ini menunjukkan bahwa Papua masih{" "}
            <b className="text-orange">belum mampu memenuhi kebutuhan pangan</b>{" "}
            masyarakatnya.
          </p>
        </div>

        <Grid className="mt-16">
          <Grid.Col span={6}>
            <Flex direction="column" align="center">
              <h3 className="font-bold text-4xl mb-6">Bali</h3>
              <div>
                <Flex>
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-28" />
                </Flex>
                <Flex align="end">
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-24" />
                </Flex>
              </div>
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex direction="column" align="center">
              <h3 className="font-bold text-4xl mb-6">Papua</h3>
              <div>
                <Flex>
                  <img src={berasImg} alt="Beras" className="h-28" />
                  <img src={berasImg} alt="Beras" className="h-28" />
                </Flex>
              </div>
            </Flex>
          </Grid.Col>
        </Grid>

        <div className="mt-16">
          <p className="text-xl">
            <b className="text-3xl">“Pemanfaatan pangan </b> adalah elemen kunci
            dalam memastikan ketahanan pangan yang berkelanjutan. Lebih dari
            sekadar memproduksi, penting memastikan bahwa pangan dapat
            memberikan nutrisi yang cukup bagi masyarakat.{" "}
            <b className="text-3xl">”</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
