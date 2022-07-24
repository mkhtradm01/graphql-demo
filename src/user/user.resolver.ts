import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, CreateUserInput, UpdateUserInput } from 'src/graphql';
import { IUserService, USER_SERVICE } from './interfaces/i.user.service';

@Resolver('User')
export class UserResolver {
  constructor(@Inject(USER_SERVICE) private iUserService: IUserService) {}

  @Query()
  users(): User[] {
    return this.iUserService.getUsers();
  }

  @Query()
  user(@Args('id') id: string): User {
    return this.iUserService.getUserById(id);
  }

  @Mutation()
  createUser(@Args('createUserData') createUserInput: CreateUserInput): User {
    return this.iUserService.createUser(createUserInput);
  }
  @Mutation()
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.iUserService.updateUser(updateUserData);
  }

  @Mutation()
  deleteUser(@Args('deleteUserData') id: string): User {
    return this.iUserService.deleteUser(id);
  }
}
