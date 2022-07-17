import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, CreateUserInput, UpdateUserInput } from 'src/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  users(): User[] {
    return this.userService.getUsers();
  }

  @Query()
  user(@Args('id') id: string): User {
    return this.userService.getUserById(id);
  }

  @Mutation()
  createUser(@Args('createUserData') createUserInput: CreateUserInput): User {
    return this.userService.createUser(createUserInput);
  }
  @Mutation()
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation()
  deleteUser(@Args('deleteUserData') id: string): User {
    return this.userService.deleteUser(id);
  }
}
