import { Flex } from "@mantine/core";
import { FC } from "react";
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
    text: "Rasio jumlah penduduk per tenaga kesehatan terhadap tingkat kepadatan penduduk",
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

const Indikator: FC = ({}) => {
  return (
    <div>
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
    </div>
  );
};

export default Indikator;
