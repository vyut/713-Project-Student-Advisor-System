import { Admin } from "./admin";
import { AcademicPosition } from "./academicPosition";
import { Department } from "./department";
import { AdminLog } from "./adminLog";
import { Announcement } from "./announcement";
import { Appointment } from "./appointment";
import { Feedback } from "./feedback";

export interface Advisor {
  id: number;
  firstName: string;
  lastName: string;
  picture: string;
  username: string;
  password: string;
  academicPositionId: number;
  departmentId: number;
  adminId: number;
  
  academicPosition: AcademicPosition;
  department: Department;
  admin: Admin;
  adminLogs: AdminLog[];
  announcements: Announcement[];
  appointments: Appointment[];
  feedbacks: Feedback[];
}