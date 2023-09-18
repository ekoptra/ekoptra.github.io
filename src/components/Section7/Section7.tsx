import { FC } from "react";
import { Card, Flex, Grid } from "@mantine/core";
import BarChart from "./BarChart";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import CardChart from "../common/CardChart";
import TextBold from "../common/TextBold";
import LegendComponent from "../common/LegendComponent";
import useStyles from "./Section7.style";

const Section6: FC = ({}) => {
  const { classes } = useStyles();
  return (
    <Container
      colorScheme="Dark"
      header={
        <>
          <TextBold className="text-yellow">Sulitnya Akses </TextBold>
          Listrik yang Memadai
        </>
      }
    >
      <TextPenjelasan>
        Listrik merupakan pendorong krusial dalam mengamankan pasokan pangan
        yang mencukupi, bervariasi, dan berkualitas. Akses listrik yang memadai
        dan stabil sangat penting untuk mendukung ketahanan pangan dengan
        memastikan produksi, pengolahan, penyimpanan, dan distribusi pangan yang
        efisien dan berkelanjutan. Namun, hanya sedikit daerah di Papua yang
        dapat mengakses listrik dengan memadai.
      </TextPenjelasan>

      <Grid className="mt-12" align="center">
        <Grid.Col span={8}>
          <CardChart
            colorScheme="Dark"
            chart={<BarChart />}
            className={classes.chartCard}
            title="Rasio Elektrifikasi (%) di Indonesia Tahun 2022"
          >
            <Flex gap={10} direction="row" justify="end" className="pr-3">
              <LegendComponent tipe="timur" />
              <LegendComponent tipe="barat" />
            </Flex>
          </CardChart>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextPenjelasan className="2xl:pl-12 pl-6">
            <TextBold className="text-3xl text-yellow">
              3 dari 34 Provinsi{" "}
            </TextBold>
            dengan nilai rasio elektrifikasi terendah ada di{" "}
            <TextBold>Kawasan Indonesia Timur</TextBold>. Papua termasuk salah
            satunya
          </TextPenjelasan>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section6;
