import { Department } from "./department";
import { Degree } from "./degree";
import { AdminLog } from "./adminLog";
import { Appointment } from "./appointment";
import { Feedback } from "./feedback";

export interface Student {
  id: number;
  studentIdCard: string;
  firstName: string;
  lastName: string;
  picture: string;
  username: string;
  password: string;
  departmentId: number;
  degreeId: number;
  
  department: Department;
  degree: Degree;
  adminLogs: AdminLog[];
  appointments: Appointment[];
  feedbacks: Feedback[];
}