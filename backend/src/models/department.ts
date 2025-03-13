import { Advisor } from "./advisor";
import { Student } from "./student";

export interface Department {
  id: number;
  initials: string;
  departmentName: string;
  advisors: Advisor[];
  students: Student[];
}