import { Advisor } from "./advisor";
import { AdminLog } from "./adminLog";
import { Appointment } from "./appointment";
import { Feedback } from "./feedback"

export interface Admin {
  id: number;
  username: string;
  password: string;
  advisors: Advisor[];
  adminLogs: AdminLog[];
  appointments: Appointment[];
  feedbacks: Feedback[];
}