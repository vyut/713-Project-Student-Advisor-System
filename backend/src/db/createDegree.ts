import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลระดับการศึกษา
export async function createDegree() {
  const degrees = [
    { degreeName: "ปริญญาตรี" },
    { degreeName: "ปริญญาโท" },
    { degreeName: "ปริญญาเอก" }
  ];

  console.log("เริ่มสร้างข้อมูลระดับการศึกษา...");
  
  for (const degree of degrees) {
    await prisma.degree.create({
      data: {
        degreeName: degree.degreeName
      }
    });
  }
  
  console.log("สร้างข้อมูลระดับการศึกษาเสร็จสิ้น");
}