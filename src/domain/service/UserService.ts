import { User } from '../entity/User';
import { UserRepository } from '../repository/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}
