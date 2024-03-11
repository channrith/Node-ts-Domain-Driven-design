export class Email {
  constructor(public value: string) {
    if (!this.isValidEmail(value)) {
      throw new Error('Invalid email address');
    }
  }

  private isValidEmail(email: string): boolean {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
