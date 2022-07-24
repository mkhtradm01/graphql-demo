import { CreateUserInput, User, UpdateUserInput } from '../../graphql';

export const USER_SERVICE = Symbol('USER_SERVCE');

export interface IUserService {
  createUser(createUserInput: CreateUserInput): User;

  getUsers(): User[];

  getUserById(id: string): User;

  deleteUser(id: string): User;

  updateUser(updateUserData: UpdateUserInput): User;
}
