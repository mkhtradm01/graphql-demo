
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    email: string;
    name: string;
    setting: JSON;
}

export class UpdateUserInput {
    id: string;
    name: string;
}

export class User {
    id: string;
    email: string;
    name: string;
    setting: JSON;
    createdAt: Date;
    updatedAt?: Nullable<Date>;
}

export abstract class IQuery {
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(updateUserData?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract createUser(createUserData: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export type JSON = any;
type Nullable<T> = T | null;
