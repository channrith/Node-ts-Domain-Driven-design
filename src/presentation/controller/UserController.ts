import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/use-case/CreateUserUseCase';
import { UserRepositoryImpl } from '../../infrastructure/persistence/UserRepositoryImpl';

const userRepository = new UserRepositoryImpl();
const createUserUseCase = new CreateUserUseCase(userRepository);

export async function createUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    await createUserUseCase.execute(email, password);
    res.status(201).send('User created successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
  }
}
