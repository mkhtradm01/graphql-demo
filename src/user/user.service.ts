import { Injectable } from '@nestjs/common';
import { CreateUserInput, User, UpdateUserInput } from 'src/graphql';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(createUserInput: CreateUserInput): User {
    try {
      const newUser: User = {
        id: uuidv4(),
        ...createUserInput,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.users.push(newUser);
      return newUser;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  getUsers(): User[] {
    try {
      return this.users;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }

  getUserById(id: string): User {
    try {
      return this.users.find((u) => u.id === id);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  deleteUser(id: string): User {
    try {
      const index = this.users.findIndex((u) => u.id === id);
      const user = this.users[index];
      this.users.splice(index);
      return user;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  updateUser(updateUserData: UpdateUserInput): User {
    try {
      const foundUser = this.users.find((u) => u.id === updateUserData.id);
      Object.assign(foundUser, updateUserData);
      return foundUser;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
