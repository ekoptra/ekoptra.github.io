import { create } from "zustand";
import { FeatureCollectionKab } from "../types/kabupaten-data.type";
import { FeatureCollectionProv } from "../types/provinsi-data.type";
import { DataIKP } from "../types/ikp-data.type";
import kabupaten from "../data/kab_with_index.json";
import provinsi from "../data/provinsi.json";
import ikp from "../data/ikp.json";
import elektrifikasi from "../data/elektrifikasi.json";
import { DataElektrifikasi } from "../types/elektrifikasi-data.type";

interface DataState {
  kabupaten: FeatureCollectionKab;
  provinsi: FeatureCollectionProv;
  ikp: DataIKP[];
  elektrifikasi: DataElektrifikasi[];
}

const useDataStore = create<DataState>()((set) => ({
  kabupaten: kabupaten as FeatureCollectionKab,
  provinsi: provinsi as FeatureCollectionProv,
  ikp: ikp as DataIKP[],
  elektrifikasi: elektrifikasi as unknown as DataElektrifikasi[],
}));

export default useDataStore;
