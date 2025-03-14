import prisma from '../db/client';
import { Feedback } from '../models/feedback';

// สร้างข้อมูลข้อเสนอแนะใหม่
export const createFeedback = async (data: Feedback, adminId: number) => {
  return prisma.feedback.create({
    data: {
      feedback: data.feedback,
      timestamp: new Date(),
      studentId: data.studentId,
      advisorId: data.advisorId,
      responderId: data.responderId,
      adminId: adminId
    },
    include: {
      student: true,
      advisor: true,
      responder: true
    }
  });
};

// แสดงข้อมูลข้อเสนอแนะตาม ID ของอาจารย์ที่ปรึกษา
export const getFeedbacksByAdvisorId = async (advisorId: number) => {
  return prisma.feedback.findMany({
    where: { advisorId },
    include: {
      student: true,
      responder: true
    },
    orderBy: { timestamp: 'desc' }
  });
};

// แสดงข้อมูลข้อเสนอแนะตาม ID ของนักศึกษา
export const getFeedbacksByStudentId = async (studentId: number) => {
  return prisma.feedback.findMany({
    where: { studentId },
    include: {
      advisor: true,
      responder: true
    },
    orderBy: { timestamp: 'desc' }
  });
};