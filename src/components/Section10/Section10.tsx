import { FC } from "react";
import Container from "../common/Container";
import TextBold from "../common/TextBold";
import { Blockquote, Card, Flex, Group, Stack } from "@mantine/core";
import TextPenjelasan from "../common/TextPenjelasan";
import {
  IconBulb,
  IconHomeEco,
  IconDropletHalf2,
  IconFlame,
} from "@tabler/icons-react";

type PropsCardKebijakan = {
  icon: React.ReactNode;
  text: string;
};

const listKebijakan: PropsCardKebijakan[] = [
  {
    icon: <IconHomeEco size={80} />,
    text: "Pemerintah melaksanakan kebijakan pengurangan beban pengeluaran masyarakat, peningkatan pendapatan masyarakat, dan penurunan jumlah Kantong-kantong kemiskinan",
  },
  {
    icon: <IconDropletHalf2 size={80} />,
    text: "Pembangunan infrastruktur dasar, energi, dan TIK menjadi prioritas yang akan dipercepat pembangunannya oleh Pemerintah dalam jangka menengah, termasuk ketersediaan air bersih sertasanitasi",
  },
  {
    icon: <IconBulb size={80} />,
    text: "Pemerintah mengejar target pembangunan infrastruktur kelistrikan 100% listrik yang memadai dan berkelanjutan, sehingga bermanfaat jangka panjang bagi masyarakat dan perekonomian secara keseluruhan.",
  },
];

const CardKebijakan: FC<PropsCardKebijakan> = ({ icon, text }) => {
  return (
    <Card className="py-12 px-10">
      <Flex gap={30} align="center">
        <div>{icon}</div>
        <TextPenjelasan>
          <p>{text}</p>
        </TextPenjelasan>
      </Flex>
    </Card>
  );
};

const Section10: FC = ({}) => {
  return (
    <Container colorScheme="Light" className="pb-8 z-10">
      <h2 className="text-center px-32 leading-tight 2xl:text-4xl text-3xl">
        Apa yang{" "}
        <TextBold className="text-orange">telah Pemerintah lakukan</TextBold>{" "}
        untuk mengatasi masalah kerentanan pangan di Papua ini?
      </h2>

      <Stack className="mt-20">
        {listKebijakan.map((k) => (
          <CardKebijakan {...k} />
        ))}
      </Stack>

      <div className="w-1/2 mx-auto mt-20 ">
        <Flex>
          <div className="w-36 text-orange mr-7">
            <IconFlame height="100%" width="100%" />
          </div>
          <div>
            <p className="2xl:text-4xl xl:text-3xl leading-tight">
              Let’s take action, take decision and take the risk
            </p>
            <p className="2xl:text-xl text-lg leading-tight mt-6">
              Semoga Papua dan Kawasan Indonesia Timur bisa cepat keluar dari
              belenggu kerentanan pangan
            </p>
          </div>
        </Flex>
      </div>

      <div className="mt-20 text-center">
        <Flex align="center" justify="center">
          <hr className="border border-gray-600 w-32" />
          <div className="h-3 w-3 rounded-full bg-black mx-1"></div>
          <div className="h-3 w-3 rounded-full bg-black mx-1"></div>
          <hr className="border border-gray-600 w-32" />
        </Flex>
        <div className="mt-1 italic">Made with love 🖤 PVD Team</div>
      </div>
    </Container>
  );
};

export default Section10;
