import prisma from '../db/client';
import { Announcement } from '../models/announcement';

// สร้างข้อมูลประกาศ
export const createAnnouncement = async (data: Announcement, advisorId: number) => {
  return prisma.announcement.create({
    data: {
      topic: data.topic,
      description: data.description,
      file: data.file,
      postedDate: new Date(),
      advisorId: advisorId
    },
    include: {
      advisor: true
    }
  });
};

// แสดงข้อมูลประกาศตาม ID
export const getAnnouncementsByAdvisorId = async (advisorId: number) => {
  return prisma.announcement.findMany({
    where: { advisorId },
    include: {
      advisor: true
    },
    orderBy: { postedDate: 'desc' }
  });
};

// แสดงข้อมูลประกาศทั้งหมด
export const getAllAnnouncements = async () => {
  return prisma.announcement.findMany({
    include: {
      advisor: true
    },
    orderBy: { postedDate: 'desc' }
  });
};