import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลภาควิชา
export async function createDepartment() {
  const departments = [
    { initials: "SE(International Program)", departmentName: "วิศวกรรมซอฟแวร์(หลักสูตรนานาชาติ)" },
    { initials: "SE(Bilingual Program)", departmentName: "วิศวกรรมซอฟแวร์" },
    { initials: "MMIT", departmentName: "การจัดการสมัยใหม่และเทคโนโลยีสารสนเทศ" },
    { initials: "ANI", departmentName: "แอนนิเมชั่นและวิชวลเอฟเฟกต์" },
    { initials: "DG", departmentName: "ดิจิทัลเกมส์" },
    { initials: "DII", departmentName: "นวัตกรรมดิจิทัล" },
    { initials: "KIM(Bilingual Program)", departmentName: "สื่อศิลปะและการออกแบบสื่อ(หลักสูตรสองภาษา)" },
    { initials: "KIM(International Program)", departmentName: "สื่อศิลปะและการออกแบบสื่อ(หลักสูตรนานาชาติ)" },
    { initials: "DTM", departmentName: "การจัดการธุรกิจดิจิทัล" }
  ];

  console.log("เริ่มสร้างข้อมูลภาควิชา...");
  
  for (const department of departments) {
    await prisma.department.create({
      data: {
        initials: department.initials,
        departmentName: department.departmentName
      }
    });
  }
  
  console.log("สร้างข้อมูลภาควิชาเสร็จสิ้น");
}