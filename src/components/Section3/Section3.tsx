import React from "react";
import useStyles from "./Section3.style";
import { Card, Flex, Grid, Text } from "@mantine/core";
import { IconNote } from "@tabler/icons-react";
import HexagonWrapper, { HexagonProps } from "./HexagonWrapper";

const row1: HexagonProps[] = [
  {
    text: "Rasio konsumsi normatif per kapita terhadap produksi bersih",
    fillColor: "#e8dc29",
  },
  {
    text: "Persentase penduduk yang hidup di bawah garis kemiskinan",
    fillColor: "#e8dc29",
  },
];

const row2: HexagonProps[] = [
  {
    text: "Persentase rumah tangga dengan proporsi pengeluaran untuk pangan lebih dari 65% terhadap total pengeluaran",
    fillColor: "#e8dc29",
  },

  {
    text: "Persentase rumah tangga tanpa akses listrik",
    fillColor: "#e8dc29",
  },

  {
    text: "Rata-rata lama sekolah perempuan di atas 15 tahun",
    fillColor: "#e8dc29",
  },
];

const row3: HexagonProps[] = [
  {
    text: "Persentase rumah tangga tanpa akses ke air bersih",
    fillColor: "#e8dc29",
  },

  {
    text: ". Rasio jumlah penduduk per tenaga kesehatan terhadap tingkat kepadatan penduduk",
    fillColor: "#e8dc29",
  },

  {
    text: "Persentase balita dengan tinggi badan di bawah standar (stunting)",
    fillColor: "#e8dc29",
  },

  {
    text: "Angka harapan hidup pada saat lahir",
    fillColor: "#e8dc29",
  },
];

const Section3: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper)}>
      <div className="py-16 lg:px-28 md:px-20 sm:px-16 px-8">
        <Grid align="center">
          <Grid.Col span={5}>
            <Card radius={20} className={cx(classes.card, "p-8")}>
              <Flex justify="center" className="mb-5">
                <IconNote size="4em" stroke={1.5} />
              </Flex>

              <p className="mb-5">
                Ketahanan pangan tidak hanya mencakup <b>ketersediaan pangan</b>{" "}
                untuk dikonsumsi tetapi mencakup <b>keterjangkauan</b> dan{" "}
                <b>pemanfaatan</b>
                dari pangan itu sendiri.
              </p>
              <p>
                Badan Pangan Nasional (BPN) membentuk{" "}
                <b>Indeks Ketahanan Pangan (IKP) </b>
                untuk memberi gambaran ketahanan pangan di Indonesia. IKP
                tersebut dibentuk dari 9 indikator
              </p>
            </Card>
          </Grid.Col>
          <Grid.Col span={7}>
            <Flex justify="center" gap={1}>
              {row1.map((row) => (
                <HexagonWrapper {...row} />
              ))}
            </Flex>
            <Flex justify="center" className="-mt-11" gap={1}>
              {row2.map((row) => (
                <HexagonWrapper {...row} />
              ))}
            </Flex>
            <Flex justify="center" className="-mt-11" gap={1}>
              {row3.map((row) => (
                <HexagonWrapper {...row} />
              ))}
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default Section3;
