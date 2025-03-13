import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลตำแหน่งทางวิชาการ
export async function createAcademicPosition() {
  const academicPositions = [
    { academicPositionName: "อาจารย์" },
    { academicPositionName: "ผู้ช่วยศาสตราจารย์" },
    { academicPositionName: "รองศาสตราจารย์" },
    { academicPositionName: "ศาสตราจารย์" }
  ];

  console.log("เริ่มสร้างข้อมูลตำแหน่งทางวิชาการ...");
  
  for (const position of academicPositions) {
    await prisma.academicPosition.create({
      data: {
        academicPositionName: position.academicPositionName
      }
    });
  }
  
  console.log("สร้างข้อมูลตำแหน่งทางวิชาการเสร็จสิ้น");
}