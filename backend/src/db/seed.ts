import { PrismaClient } from '@prisma/client';
import { createAcademicPosition } from './createAcademicPosition';
import { createDepartment } from './createDepartment';
import { createDegree } from './createDegree';
import { createStatusAppointment } from './createStatusAppointment';
import { createResponder } from './createResponder';
import { createAdmin } from './createAdmin';
import { createAdvisor } from './createAdvisor';
import { createStudent } from './createStudent';
import { createAdminLog } from './createAdminLog';
import { createAnnouncement } from './createAnnouncement';
import { createAppointment } from './createAppointment';
import { createFeedback } from './createFeedback';

const prisma = new PrismaClient();

export async function initDatabase() {
  try {
    console.log('เริ่มต้นการสร้างข้อมูลเริ่มต้น...');
    
    // สร้างข้อมูลพื้นฐาน (ตารางอ้างอิง)
    await createAcademicPosition();
    await createDepartment();
    await createDegree();
    await createStatusAppointment();
    await createResponder();
    
    // สร้างข้อมูลผู้ใช้
    await createAdmin();
    await createAdvisor();
    await createStudent();
    
    // สร้างข้อมูลการดำเนินการและการทำงาน
    await createAdminLog();
    await createAnnouncement();
    await createAppointment();
    await createFeedback();
    
    console.log('การสร้างข้อมูลเริ่มต้นเสร็จสมบูรณ์');
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการสร้างข้อมูลเริ่มต้น:', error);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  initDatabase()
    .then(() => console.log('สคริปต์ทำงานเสร็จสิ้น'))
    .catch((error) => console.error('เกิดข้อผิดพลาด:', error));
}

async function main() {
  console.log('Running database seeding...');
  
  try {
    await initDatabase();
    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error during database seeding:', error);
    process.exit(1);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});