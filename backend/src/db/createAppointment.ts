import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลการนัดหมาย
export async function createAppointment() {
  const appointments = [
    {
      topic: "appointment 1",
      description: "Final Project",
      requestedDate: new Date("2025-07-12T16:59:56.000Z"),
      appointmentRequestDateTime: "28/7/2025 1.00 P.M.",
      studentConfirmation: 1, // 1 = true, 0 = false
      studentId: 5,
      advisorId: 5,
      statusAppointmentId: 1, // approved
      adminId: 1
    },
    {
      topic: "appointment 2",
      description: "Withdraw Subject",
      requestedDate: new Date("2025-07-13T16:59:56.000Z"),
      appointmentRequestDateTime: "29/7/2025 2.00 P.M.",
      studentConfirmation: 1,
      studentId: 6,
      advisorId: 6,
      statusAppointmentId: 2, // pending
      adminId: 1
    },
    {
      topic: "appointment 3",
      description: "Score Review",
      requestedDate: new Date("2025-07-14T16:59:56.000Z"),
      appointmentRequestDateTime: "30/7/2025_3.00 P.M.",
      studentConfirmation: 0,
      studentId: 7,
      advisorId: 9,
      statusAppointmentId: 4, // request is not successful
      adminId: 1
    },
    {
      topic: "appointment 4",
      description: "Internship Placement",
      requestedDate: new Date("2025-07-15T16:59:56.000Z"),
      appointmentRequestDateTime: "31/7/2025 4.00 P.M.",
      studentConfirmation: 1,
      studentId: 8,
      advisorId: 1,
      statusAppointmentId: 1, // approved
      adminId: 1
    },
    {
      topic: "appointment 5",
      description: "Research Topic Discussion",
      requestedDate: new Date("2025-07-16T16:59:56.000Z"),
      appointmentRequestDateTime: "1/8/2025 8.00 A.M.",
      studentConfirmation: 1,
      studentId: 9,
      advisorId: 2,
      statusAppointmentId: 2, // pending
      adminId: 1
    },
    {
      topic: "appointment 6",
      description: "Project Progress Review",
      requestedDate: new Date("2025-07-17T16:59:56.000Z"),
      appointmentRequestDateTime: "2/8/2025 9.00 A.M.",
      studentConfirmation: 1,
      studentId: 10,
      advisorId: 3,
      statusAppointmentId: 3, // rejected
      adminId: 1
    }
  ];

  console.log("เริ่มสร้างข้อมูลการนัดหมาย...");
  
  for (const appointment of appointments) {
    await prisma.appointment.create({
      data: {
        topic: appointment.topic,
        description: appointment.description,
        requestedDate: appointment.requestedDate,
        appointmentRequestDateTime: appointment.appointmentRequestDateTime,
        studentConfirmation: appointment.studentConfirmation,
        studentId: appointment.studentId,
        advisorId: appointment.advisorId,
        statusAppointmentId: appointment.statusAppointmentId,
        adminId: appointment.adminId
      }
    });
  }
  
  console.log(`สร้างข้อมูลการนัดหมายเสร็จสิ้น: ${appointments.length} รายการ`);
}