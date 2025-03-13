import { Student } from "./student";
import { Advisor } from "./advisor";
import { Admin } from "./admin";
import { StatusAppointment } from "./statusAppointment";

export interface Appointment {
  id: number;
  topic: string;
  description: string;
  requestedDate: string;
  appointmentRequestDateTime: string;
  studentConfirmation: number;
  studentId: number;
  advisorId: number;
  statusAppointmentId: number;
  adminId: number;
  
  student: Student;
  advisor: Advisor;
  statusAppointment: StatusAppointment;
  admin: Admin;
}