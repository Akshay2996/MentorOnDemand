import { Technology } from "./technology.model";
import { Payment } from "./payment.model";
import { Skill } from "./skill.model";
import { User } from "./user.model";
import { Mentor } from "./mentor.model";

export class Training{
    id: number;
    status: string;
    progress: number;
    fees: string;
    commissionPercent: number;
    rating: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    amountReceived: number;
    role: string;
    userId: number;
    mentorId: number;
    skillId: number;
    amounttoMentor: number;
    technology: Technology = new Technology();
    payment: Payment[];
    skills: Skill[];
    mentor: Mentor = new Mentor();
    users: User[];

}