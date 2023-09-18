import { FC } from "react";
import Container from "../common/Container";
import { Grid } from "@mantine/core";
import CardPenyebab, { CardPenyebabProps } from "./CardPenyebab";
import imgKemiskinan from "../../images/kemiskinan.jpg";
import imgListrik from "../../images/listrik.jpeg";
import imgAir from "../../images/air.jpg";

const cardData: CardPenyebabProps[] = [
  { text: "Sulitnya Akses Listrik yang Memadai", src: imgListrik },
  { text: "Tingginya Angka Kemiskinan", src: imgKemiskinan },
  { text: "Sulitnya Akses Air Bersih", src: imgAir },
];

const Section6: FC = ({}) => {
  return (
    <Container colorScheme="Dark" className="z-auto">
      <h2 className="text-center text-yellow italic text-3xl font-semibold">
        Bagaimana rentannya pangan di Papua ini bisa terjadi?
      </h2>

      <Grid className="mt-16" gutter={20}>
        {cardData.map((d, i) => (
          <Grid.Col span={4}>
            <CardPenyebab {...d} urutan={i + 1} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
