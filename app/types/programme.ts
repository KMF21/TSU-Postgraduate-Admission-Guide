// app/types/programme.ts
export type DegreeType =
  | "PGD"
  | "MSc"
  | "PhD"
  | "MBA"
  | "MPA"
  | "MPhil"
  | "MPH"
  | "M.A"
  | "M.Ed";

export interface Programme {
  id: string;
  faculty: string;
  department: string;
  programmeName: string;
  degreeType: DegreeType;
  shortDescription: string;
}
