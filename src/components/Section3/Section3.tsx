import React from "react";
import useStyles from "./Section3.style";
import { Card, Flex, Grid, Image, Text } from "@mantine/core";
import bpn from "../../images/bpn.png";
import Indikator from "./Indikator";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import TextBold from "../common/TextBold";

const Section3: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <Container colorScheme="Dark" className="pb-52">
      <Grid align="center">
        <Grid.Col span={5}>
          <Card radius={20} className={cx(classes.card, "p-8")}>
            <Image maw={240} mx="auto" src={bpn} alt="Badan Pangan Nasional" />
            <div className="mt-8">
              <TextPenjelasan className="">
                <p>
                  Ketahanan pangan tidak hanya mencakup{" "}
                  <TextBold>ketersediaan pangan</TextBold> untuk dikonsumsi
                  tetapi mencakup <TextBold>keterjangkauan</TextBold> dan{" "}
                  <TextBold>pemanfaatan</TextBold> dari pangan itu sendiri.
                </p>
              </TextPenjelasan>

              <TextPenjelasan className="mt-8 ">
                <p>
                  Badan Pangan Nasional (BPN) membentuk{" "}
                  <TextBold>Indeks Ketahanan Pangan (IKP)</TextBold>
                  untuk memberi gambaran ketahanan pangan di Indonesia. IKP
                  tersebut dibentuk dari 9 indikator
                </p>
              </TextPenjelasan>
            </div>
          </Card>
        </Grid.Col>

        <Grid.Col span={7}>
          <Indikator />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section3;
