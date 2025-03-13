import { Advisor } from "./advisor";

export interface Announcement {
  id: number;
  topic: string;
  description: string;
  file?: string;
  postedDate: string;
  advisorId: number;
  
  advisor: Advisor;
}