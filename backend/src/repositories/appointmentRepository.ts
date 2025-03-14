import prisma from '../db/client';
import { Appointment } from '../models/appointment';

// สร้างข้อมูลนัดหมาย
export const createAppointment = async (data: Appointment, adminId: number) => {
  return prisma.appointment.create({
    data: {
      topic: data.topic,
      description: data.description,
      requestedDate: data.requestedDate,
      appointmentRequestDateTime: data.appointmentRequestDateTime,
      studentConfirmation: 0, // 0 = not confirmed
      studentId: data.studentId,
      advisorId: data.advisorId,
      statusAppointmentId: data.statusAppointmentId,
      adminId: adminId
    },
    include: {
      student: true,
      advisor: true,
      statusAppointment: true
    }
  });
};

// แสดงข้อมูลนัดหมายตาม ID ของอาจารย์ที่ปรึกษา
export const getAppointmentsByAdvisorId = async (advisorId: number) => {
  return prisma.appointment.findMany({
    where: { advisorId },
    include: {
      student: true,
      statusAppointment: true
    },
    orderBy: { requestedDate: 'desc' }
  });
};

// แสดงข้อมูลนัดหมายตาม ID ของนักศึกษา
export const getAppointmentsByStudentId = async (studentId: number) => {
  return prisma.appointment.findMany({
    where: { studentId },
    include: {
      advisor: true,
      statusAppointment: true
    },
    orderBy: { requestedDate: 'desc' }
  });
};

// แสดงข้อมูลนัดหมายตาม ID ของนักศึกษาและอาจารย์ที่ปรึกษา
export const getAppointmentSummary = async () => {
  const appointmentsByStatus = await prisma.$queryRaw`
    SELECT 
      sa.status, 
      COUNT(*) as count 
    FROM appointment a
    JOIN status_appointment sa ON a.Status_appointment_id = sa.id
    GROUP BY sa.status
  `;
  
  const appointments = await prisma.appointment.findMany({
    include: {
      student: {
        select: {
          firstName: true,
          lastName: true,
          studentIdCard: true
        }
      },
      advisor: {
        select: {
          firstName: true,
          lastName: true
        }
      },
      statusAppointment: true
    },
    orderBy: { requestedDate: 'desc' }
  });
  
  return {
    summary: appointmentsByStatus,
    appointments
  };
};

// อัพเดตข้อมูลนัดหมาย
export const updateAppointment = async (
  id: number, 
  advisorId: number, 
  studentId: number, 
  statusAppointmentId: number,
  data: Appointment
) => {
  return prisma.appointment.update({
    where: { 
      id_advisorId_studentId_statusAppointmentId: {
        id,
        advisorId,
        studentId,
        statusAppointmentId
      } 
    },
    data: {
      studentConfirmation: data.studentConfirmation,
      statusAppointmentId: data.statusAppointmentId ?? statusAppointmentId
    },
    include: {
      student: true,
      advisor: true,
      statusAppointment: true
    }
  });
};