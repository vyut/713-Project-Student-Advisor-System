import { Student } from "./student";
import { Advisor } from "./advisor";
import { Admin } from "./admin";

export interface AdminLog {
  id: number;
  action: string;
  studentId: number;
  advisorId: number;
  adminId: number;
  
  student: Student;
  advisor: Advisor;
  admin: Admin;
}