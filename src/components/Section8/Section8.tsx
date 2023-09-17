import { FC } from "react";
import useStyles from "./Section8.style";
import { Flex, Grid, Stack } from "@mantine/core";
import orang from "../../images/orang.png";
import orang30 from "../../images/orang-30.png";
import orang100 from "../../images/orang-100.png";

const iter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Section8: FC = ({}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper)}>
      <div className="lg:px-28 md:px-20 sm:px-16 px-8 pt-20 pb-20">
        <div className={cx(classes.header, "lg:w-1/3 sm:w-2/3 w-5/6")}>
          <h2 className="leading-tight">Sulitnya Akses Air Bersih</h2>
        </div>

        <Grid className="mt-10">
          <Grid.Col span={6}>
            <div className="text-xl">
              <p className="mb-10">
                Akses berlimpah terhadap air bersih adalah kunci utama menuju
                produksi pangan yang tak terbatas, serta memastikan seluruh
                penjuru Indonesia menikmati makanan yang aman dan bergizi.
              </p>
              <p>
                Namun, penduduk di Papua masih merasakan sulitnya akses terhadap
                air minum layak. Infrastruktur air minum yang memadai adalah
                salah satu penyebab sulitnya akses tersebut. Sehingga penduduk
                lebih mengandalkan air sungai sebagai sumber air minum
                sehari-hari.
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack spacing={3}>
              <Stack>
                <h3 className="text-2xl font-bold">Papua</h3>
                <Flex className="mb-6" gap={16} align="center">
                  <Flex>
                    {iter.map((i) => (
                      <img
                        src={orang100}
                        alt="orang"
                        className="h-24"
                        key={i}
                      />
                    ))}
                    <img src={orang} alt="orang" className="h-24" />
                  </Flex>
                  <p className="text-xl">
                    <b className="text-5xl text-yellow">10</b> jiwa
                  </p>
                </Flex>
              </Stack>

              <Stack>
                <h3 className="text-2xl font-bold">Papua Barat</h3>
                <Flex gap={16} align="center">
                  <Flex>
                    {iter.map((i) => (
                      <img
                        src={orang100}
                        alt="orang"
                        key={i}
                        className="h-24"
                      />
                    ))}
                    <img src={orang30} alt="orang" className="h-24" />
                  </Flex>
                  <p className="text-xl">
                    <b className="text-5xl text-yellow">7</b> jiwa
                  </p>
                </Flex>
              </Stack>
              <Flex className="mt-2 " align="center" justify="end" gap={10}>
                <p className="text-right">
                  dari <b className="text-xl">100</b> jiwa <b>tidak</b> memiliki
                  akses minum yang layak
                </p>

                <Flex align="center" gap={8} justify="end">
                  <img src={orang} alt="orang" className="h-12" />
                  <p> = 10 orang </p>
                </Flex>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default Section8;
