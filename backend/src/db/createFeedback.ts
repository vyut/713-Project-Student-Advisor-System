import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ข้อมูลฟีดแบค
export async function createFeedback() {
  const feedbacks = [
    {
      feedback: "ส่งคำขอใหม่นัดหมายใหม่ เป็นวันที่ 28/7/2025 10.00 A.M.ครับ",
      timestamp: new Date("2025-07-15T13:35:00.000Z"), // 15/7/2025 1.35 P.M.
      studentId: 5,
      advisorId: 5,
      responderId: 2, // Advisor
      adminId: 1
    },
    {
      feedback: "สวัสดีครับอาจารย์ ผมส่งขอนัดหมายวันที่ 30/7/2025 เวลา 15.00 น. หากอาจารย์สะดวก รบกวน Approve การนัดหมายให้หน่อยครับ ผมสงสัยเกี่ยวกับคะแนนสอบครับ",
      timestamp: new Date("2025-07-20T11:00:00.000Z"), // 20/7/2025 11 A.M.
      studentId: 7,
      advisorId: 9,
      responderId: 1, // Student
      adminId: 1
    },
    {
      feedback: "สวัสดีค่ะอาจารย์ การนัดหมายของนักศึกษารหัส 662131005 ถูก reject อาจารย์พอจะสะดวกวันไหนบ้างคะ พอดีอยากปรึกษาเรื่อง Carrer Path ค่ะ",
      timestamp: new Date("2025-07-25T13:35:00.000Z"), // 25/7/2025 1.35 P.M.
      studentId: 11,
      advisorId: 4,
      responderId: 1, // Student
      adminId: 1
    }
  ];

  console.log("เริ่มสร้างข้อมูลฟีดแบค...");
  
  for (const feedback of feedbacks) {
    await prisma.feedback.create({
      data: {
        feedback: feedback.feedback,
        timestamp: feedback.timestamp,
        studentId: feedback.studentId,
        advisorId: feedback.advisorId,
        responderId: feedback.responderId,
        adminId: feedback.adminId
      }
    });
  }
  
  console.log(`สร้างข้อมูลฟีดแบคเสร็จสิ้น: ${feedbacks.length} รายการ`);
}