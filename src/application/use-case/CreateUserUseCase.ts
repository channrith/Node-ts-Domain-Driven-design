import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { User } from '../../domain/entity/User';
import { Email } from '../../domain/value-object/Email';
import { User as UserObject } from '../../domain/value-object/User';
import { UserRepository } from '../../domain/repository/UserRepository';

const SALT_ROUNDS = 10;

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<void> {
    const userEmail = new Email(email); // Validate the email
    const existingUser = await this.userRepository.findByEmail(userEmail.value);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // generate id
    const userId = uuidv4();

    // hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create a UserObject
    const userObject = new UserObject(userEmail, hashedPassword);

    // Pass UserObject to User entity
    const newUser = new User(userId, userObject);
    await this.userRepository.save(newUser);
  }
}
