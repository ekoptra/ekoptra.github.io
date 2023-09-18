import { FC } from "react";
import { Flex, Grid } from "@mantine/core";
import BarChart from "./BarChart";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import TextBold from "../common/TextBold";
import CardChart from "../common/CardChart";
import LegendComponent from "../common/LegendComponent";

const Section8: FC = ({}) => {
  return (
    <Container
      colorScheme="Dark"
      header={
        <>
          <TextBold className="text-yellow">Tingginya </TextBold>
          Angka Kemiskinan
        </>
      }
    >
      <Grid className="mt-16">
        <Grid.Col span={6}>
          <div className="mr-16">
            <TextPenjelasan>
              Orang-orang yang tinggal{" "}
              <TextBold className="text-yellow">
                di bawah garis kemiskinan{" "}
              </TextBold>
              memiliki daya beli yang terbatas sehingga mereka kesulitan untuk
              mencukupi kebutuhan pokok mereka. Hal ini berdampak pada{" "}
              <TextBold className="text-yellow">ketahanan pangan.</TextBold>
            </TextPenjelasan>

            <TextPenjelasan className="mt-16 text-right">
              Provinsi Papua, Papua Barat, Nusa Tenggara Timur dan Maluku
              memiliki{" "}
              <TextBold className="text-yellow">
                persentase penduduk miskin yang besar.
              </TextBold>
            </TextPenjelasan>

            <TextPenjelasan className="mt-16">
              Provinsi di Indonesia Timur yang mendominasi Rasio Elektrifikasi
              rendah juga <TextBold className="text-yellow">cenderung</TextBold>{" "}
              memiliki Persentase Penduduk Miskin yang tinggi
            </TextPenjelasan>
          </div>
        </Grid.Col>

        <Grid.Col span={6}>
          <CardChart
            colorScheme="Dark"
            chart={<BarChart />}
            heightContainer="500px"
            height="1000px"
            title="Persentase Kemiskinan Tahun 2022"
          >
            <Flex gap={10} direction="row" justify="end" className="pr-3 mt-3">
              <LegendComponent tipe="timur" />
              <LegendComponent tipe="barat" />
            </Flex>
          </CardChart>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section8;
