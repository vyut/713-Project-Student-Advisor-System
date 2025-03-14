import prisma from '../db/client';
import { Student } from '../models/student';

// ค้นหาข้อมูลนักศึกษาจากชื่อผู้ใช้
export const getStudentByUsername = async (username: string) => {
  return prisma.student.findUnique({
    where: { username }
  });
};

// ค้นหาข้อมูลนักศึกษาจากรหัสประจำตัวนักศึกษา
export const getStudentByStudentIdCard = async (studentIdCard: string) => {
  return prisma.student.findUnique({
    where: { studentIdCard }
  });
};

// ตรวจสอบรหัสผ่านของนักศึกษา
export const validateStudentPassword = async (student: any, password: string) => {
  return student.password === password;
};

// สร้างข้อมูลนักศึกษาใหม่
export const createStudent = async (studentData: Student) => {
  return prisma.student.create({
    data: {
      studentIdCard: studentData.studentIdCard,
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      picture: studentData.picture,
      username: studentData.username,
      password: studentData.password,
      departmentId: studentData.departmentId,
      degreeId: studentData.degreeId
    },
    include: {
      department: true,
      degree: true
    }
  });
};

// ค้นหาข้อมูลนักศึกษาจาก ID
export const getStudentById = async (id: number) => {
  return prisma.student.findUnique({
    where: { id },
    include: {
      department: true,
      degree: true
    }
  });
};

// แสดงข้อมูลนักศึกษาทั้งหมด
export const getAllStudents = async (
  page: number = 1, 
  pageSize: number = 10, 
  search?: string
) => {
  const skip = (page - 1) * pageSize;
  
  const whereCondition = search ? {
    OR: [
      { studentIdCard: { contains: search } },
      { firstName: { contains: search } },
      { lastName: { contains: search } }
    ]
  } : {};
  
  const [students, totalCount] = await Promise.all([
    prisma.student.findMany({
      where: whereCondition,
      skip,
      take: pageSize,
      include: {
        department: true,
        degree: true
      }
    }),
    prisma.student.count({ where: whereCondition })
  ]);
  
  return {
    data: students,
    meta: {
      total: totalCount,
      page,
      pageSize,
      pageCount: Math.ceil(totalCount / pageSize)
    }
  };
};