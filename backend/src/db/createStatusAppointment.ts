import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลสถานะการนัดหมาย
// สถานะการนัดหมายมี 4 สถานะ ได้แก่ อนุมัติ, รอการอนุมัติ, ไม่อนุมัติ, การขอไม่สำเร็จ
export async function createStatusAppointment() {
  const statuses = [
    { status: "approved" },
    { status: "pending" },
    { status: "rejected" },
    { status: "request is not successful" }
  ];

  console.log("เริ่มสร้างข้อมูลสถานะการนัดหมาย...");
  
  for (const status of statuses) {
    await prisma.statusAppointment.create({
      data: {
        status: status.status
      }
    });
  }
  
  console.log("สร้างข้อมูลสถานะการนัดหมายเสร็จสิ้น");
}