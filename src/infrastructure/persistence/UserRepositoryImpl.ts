import { User } from '../../domain/entity/User';
import { User as UserObject } from '../../domain/value-object/User';
import { UserRepository } from '../../domain/repository/UserRepository';
import { Email } from '../../domain/value-object/Email';

// This is just a mock implementation.
// In a real application, you'd use a database or another storage solution.
const users: User[] = [
  new User('1', new UserObject(new Email('user1@example.com'), 'hashedPassword1')),
  new User('2', new UserObject(new Email('user2@example.com'), 'hashedPassword2')),
  new User('3', new UserObject(new Email('user3@example.com'), 'hashedPassword3')),
];

export class UserRepositoryImpl implements UserRepository {
  async findById(id: string): Promise<User | null> {
    return users.find((user) => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return users.find((user) => user.email === email) || null;
  }

  async save(user: User): Promise<void> {
    users.push(user);
  }
}
