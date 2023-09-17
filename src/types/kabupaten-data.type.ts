import { FeatureCollection, Geometry } from "geojson";

export type PropertiesKabupaten = {
  prov_id: string;
  prov_name: string;
  name: string;
  alt_name: string;
  uuid: string;
  color: string;
  is_indonesia_timur: boolean;
  is_kabupaten: boolean;
  ikp_2018: number;
  index_ketersediaan_2018: number;
  index_pemanfaatan_2018: number;
  index_keterjangkauan_2018: number;
  kelompok_2018: number;
  ikp_2019: number;
  index_ketersediaan_2019: number;
  index_pemanfaatan_2019: number;
  index_keterjangkauan_2019: number;
  kelompok_2019: number;
  ikp_2020: number;
  index_ketersediaan_2020: number;
  index_pemanfaatan_2020: number;
  index_keterjangkauan_2020: number;
  kelompok_2020: number;
  ikp_2021: number;
  index_ketersediaan_2021: number;
  index_pemanfaatan_2021: number;
  index_keterjangkauan_2021: number;
  kelompok_2021: number;
  ikp_2022: number;
  index_ketersediaan_2022: number;
  index_pemanfaatan_2022: number;
  index_keterjangkauan_2022: number;
  kelompok_2022: number;
};

export interface FeatureCollectionKab
  extends FeatureCollection<Geometry, PropertiesKabupaten> {}
