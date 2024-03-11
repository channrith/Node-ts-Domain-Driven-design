import { Email } from './Email';

export class User {
  constructor(private _email: Email, private _passwordHash: string) {}

  get email(): Email {
    return this._email;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  // You can add more methods as needed
}
