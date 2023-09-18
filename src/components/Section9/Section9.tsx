import { FC } from "react";
import { Flex, Grid, Stack } from "@mantine/core";
import orang from "../../images/orang.png";
import orang30 from "../../images/orang-30.png";
import orang100 from "../../images/orang-100.png";
import Container from "../common/Container";
import TextPenjelasan from "../common/TextPenjelasan";
import TextBold from "../common/TextBold";

const iter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Section9: FC = ({}) => {
  return (
    <Container
      colorScheme="Dark"
      header={
        <>
          <TextBold className="text-yellow">Sulitnya </TextBold>
          Akses Air Bersih
        </>
      }
      className="pb-52 sticky top-0 -z-10 xl:pt-16"
    >
      <Grid className="mt-10" align="center">
        <Grid.Col span={6}>
          <div className="pr-16">
            <TextPenjelasan>
              Akses berlimpah terhadap air bersih adalah kunci utama menuju
              produksi pangan yang tak terbatas, serta memastikan seluruh
              penjuru Indonesia menikmati makanan yang aman dan bergizi.
            </TextPenjelasan>

            <TextPenjelasan className="mt-16">
              Namun, penduduk di Papua masih merasakan sulitnya akses terhadap
              air minum layak. Infrastruktur air minum yang memadai adalah salah
              satu penyebab sulitnya akses tersebut. Sehingga penduduk lebih
              mengandalkan air sungai sebagai sumber air minum sehari-hari.
            </TextPenjelasan>
          </div>
        </Grid.Col>

        <Grid.Col span={6}>
          <Stack spacing={3}>
            <Stack>
              <h3 className="text-2xl">
                <TextBold>Papua</TextBold>
              </h3>
              <Flex className="mb-6" gap={16} align="center">
                <Flex>
                  {iter.map((i) => (
                    <img src={orang100} alt="orang" className="h-24" key={i} />
                  ))}
                  <img src={orang} alt="orang" className="h-24" />
                </Flex>

                <p className="text-xl">
                  <TextBold className="text-5xl text-yellow">10 </TextBold>
                  jiwa
                </p>
              </Flex>
            </Stack>

            <Stack>
              <h3 className="text-2xl">
                <TextBold>Papua Barat</TextBold>
              </h3>
              <Flex gap={16} align="center">
                <Flex>
                  {iter.map((i) => (
                    <img src={orang100} alt="orang" key={i} className="h-24" />
                  ))}
                  <img src={orang30} alt="orang" className="h-24" />
                </Flex>
                <p className="text-xl">
                  <TextBold className="text-5xl text-yellow">7 </TextBold> jiwa
                </p>
              </Flex>
            </Stack>
            <Flex className="mt-2 " align="center" justify="end" gap={10}>
              <p className="text-right">
                dari <TextBold className="text-xl">100</TextBold> jiwa{" "}
                <TextBold>tidak</TextBold> memiliki akses minum yang layak
              </p>

              <Flex align="center" gap={8} justify="end">
                <img src={orang} alt="orang" className="h-12" />
                <p> = 10 orang </p>
              </Flex>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Section9;
