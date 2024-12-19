import { BadRequestException, Injectable } from "@nestjs/common";
@Injectable()
export class NotificationService {
    sendEmail(to: string, subject: string, message: string): void {
        if (!to || to === '') throw new BadRequestException()
        console.log(`Email sent to ${to}: [${subject}] ${message}`)
    }
    sendSMS(to: string, message: string): void {
        if (!to || to === '') throw new BadRequestException()
        console.log(`SMS sent to ${to}: ${message}`)
    }
}
