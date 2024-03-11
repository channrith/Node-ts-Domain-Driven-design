import { User as UserObject } from '../value-object/User';

export class User {
  constructor(public id: string, private _user: UserObject) {}

  get user(): UserObject {
    return this._user;
  }

  get email(): string {
    return this._user.email.value;
  }

  get passwordHash(): string {
    return this._user.passwordHash;
  }
}

