import { FeatureCollection, Geometry } from "geojson";

export type PropertiesProvinsi = {
  prov_id: string;
  name: string;
  is_indonesia_timur: boolean;
};

export interface FeatureCollectionProv
  extends FeatureCollection<Geometry, PropertiesProvinsi> {}
