
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    email: string;
    name: string;
    setting: JSON;
}

export interface UpdateUserInput {
    id: string;
    name: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    setting: JSON;
    createdAt: Date;
    updatedAt?: Nullable<Date>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(createUserData: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(updateUserData?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export type JSON = any;
type Nullable<T> = T | null;
