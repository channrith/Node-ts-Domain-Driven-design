export class EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    console.log('Email sent successfully');
  }
}
