import { Advisor } from "./advisor";

export interface AcademicPosition {
  id: number;
  academicPositionName: string;
  advisors: Advisor[];
}