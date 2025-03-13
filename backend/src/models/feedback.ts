import { Student } from "./student";
import { Advisor } from "./advisor";
import { Responder } from "./responder";
import { Admin } from "./admin";

export interface Feedback {
  id: number;
  feedback?: string;
  timestamp?: string;
  studentId: number;
  advisorId: number;
  responderId: number;
  adminId: number;
  
  student: Student;
  advisor: Advisor;
  responder: Responder;
  admin: Admin;
}