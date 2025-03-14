import prisma from '../db/client';
import { Advisor } from '../models/advisor';

// ค้นหาข้อมูลอาจารย์ที่ปรึกษาจากชื่อผู้ใช้
export const getAdvisorByUsername = async (username: string) => {
  return prisma.advisor.findUnique({
    where: { username }
  });
};

// ตรวจสอบรหัสผ่านของอาจารย์ที่ปรึกษา
export const validateAdvisorPassword = async (advisor: any, password: string) => {
  return advisor.password === password;
};

// สร้างข้อมูลอาจารย์ที่ปรึกษาใหม่
export const createAdvisor = async (advisorData: Advisor, adminId: number) => {
  return prisma.advisor.create({
    data: {
      firstName: advisorData.firstName,
      lastName: advisorData.lastName,
      picture: advisorData.picture,
      username: advisorData.username,
      password: advisorData.password,
      academicPositionId: advisorData.academicPositionId,
      departmentId: advisorData.departmentId,
      adminId: adminId
    },
    include: {
      academicPosition: true,
      department: true
    }
  });
};

// ค้นหาข้อมูลอาจารย์ที่ปรึกษาจาก ID
export const getAdvisorById = async (id: number) => {
  return prisma.advisor.findUnique({
    where: { id },
    include: {
      academicPosition: true,
      department: true
    }
  });
};

export const getAdvisorStudent = async (advisorId: number, studentId: number) => {
  return prisma.advisorStudent.findFirst({
    where: {
      advisorId,
      studentId
    }
  });
}

export const assignStudentToAdvisor = async (studentId: number, advisorId: number) => {
  return prisma.advisorStudent.create({
    data: {
      studentId,
      advisorId
    }
  });
};

// แสดงข้อมูลอาจารย์ที่ปรึกษาทั้งหมด
export const getAllAdvisors = async (page: number = 1, pageSize: number = 10) => {
  const skip = (page - 1) * pageSize;
  
  const [advisors, totalCount] = await Promise.all([
    prisma.advisor.findMany({
      skip,
      take: pageSize,
      include: {
        academicPosition: true,
        department: true
      }
    }),
    prisma.advisor.count()
  ]);
  
  return {
    data: advisors,
    meta: {
      total: totalCount,
      page,
      pageSize,
      pageCount: Math.ceil(totalCount / pageSize)
    }
  };
};