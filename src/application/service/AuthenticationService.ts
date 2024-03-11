import bcrypt from 'bcrypt';
import { User } from '../../domain/entity/User';
import { UserRepository } from '../../domain/repository/UserRepository';

export class AuthenticationService {
  constructor(private userRepository: UserRepository) {}

  async authenticate(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    if (user && await bcrypt.compare(password, user.passwordHash)) {
      return user;
    }
    return null;
  }
}
