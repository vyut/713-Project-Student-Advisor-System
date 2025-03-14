import prisma from '../db/client';
import { Admin } from '../models/admin';

// ค้นหาข้อมูลผู้ดูแลระบบจากชื่อผู้ใช้
export const getAdminByUsername = async (username: string) => {
  return prisma.admin.findUnique({
    where: { username }
  });
};

// ตรวจสอบรหัสผ่านของผู้ดูแลระบบ
export const validateAdminPassword = async (admin: any, password: string) => {
  return admin.password === password;
};

// ค้นหาข้อมูลผู้ดูแลระบบจาก ID
export const getAdminById = async (id: number) => {
  return prisma.admin.findUnique({
    where: { id }
  });
};

// บันทึกแอ็คชั่นของผู้ดูแลระบบ
export const logAdminAction = async (adminId: number, advisorId: number, studentId: number, action: string) => {
  return prisma.adminLog.create({
    data: {
      action,
      adminId,
      advisorId, 
      studentId
    }
  });
};