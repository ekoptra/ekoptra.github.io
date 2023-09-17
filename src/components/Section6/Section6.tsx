import { FC } from "react";
import Container from "../common/Container";
import { Grid } from "@mantine/core";
import CardPenyebab, { CardPenyebabProps } from "./CardPenyebab";

const cardData: CardPenyebabProps[] = [
  { text: "Sulitnya Akses Listrik yang Memadai" },
  { text: "Tingginya Angka Kemiskinan" },
  { text: "Sulitnya Akses Air Bersih" },
];

const Section6: FC = ({}) => {
  return (
    <Container colorScheme="Dark">
      <h2 className="text-center text-yellow italic text-3xl font-semibold">
        Bagaimana rentannya pangan di Papua ini bisa terjadi?
      </h2>

      <Grid className="mt-16" gutter={20}>
        {cardData.map((d) => (
          <Grid.Col span={4}>
            <CardPenyebab {...d} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
