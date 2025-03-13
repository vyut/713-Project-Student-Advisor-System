import { Student } from "./student";

export interface Degree {
  id: number;
  degreeName: string;
  students: Student[];
}