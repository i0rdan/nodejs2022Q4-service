import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map, of } from 'rxjs';

import { v4 } from 'uuid';

import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdatePasswordDto } from 'src/user/dto/update-password.dto';
import { UserWithoutPassword } from 'src/user/interfaces/user-without-password.interface';

import { StoreInterface } from '../interfaces/store.interface';

@Injectable()
export class StoreService {
  private storeData$: Observable<StoreInterface> = of({
    favorites: {
      albums: [],
      tracks: [],
      artists: [],
    },
    users: {},
    tracks: {},
    albums: {},
    artists: {},
  });

  getUsers(): Observable<UserWithoutPassword[]> {
    return this.storeData$.pipe(
      map(({ users }) =>
        Object.values(users).map(({ password, ...user }) => user),
      ),
    );
  }

  getUser(id: string): Observable<UserWithoutPassword> {
    return this.storeData$.pipe(
      map(({ users }) => {
        const { password, ...user } = users[id] || {};
        return user as UserWithoutPassword;
      }),
    );
  }

  createUser({
    login,
    password,
  }: CreateUserDto): Observable<UserWithoutPassword> {
    const id = v4();
    const createdUserWithoutPassword: UserWithoutPassword = {
      id,
      login,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    return this.storeData$.pipe(
      map((store) => {
        store.users[id] = {
          password,
          ...createdUserWithoutPassword,
        };

        this.storeData$ = of(store);

        return createdUserWithoutPassword;
      }),
    );
  }

  updateUserPassword(
    id: string,
    { oldPassword, newPassword }: UpdatePasswordDto,
  ): Observable<UserWithoutPassword> {
    return this.storeData$.pipe(
      map((store) => {
        if (!store.users[id]) {
          return null;
        }

        const { password, ...user } = store.users[id];
        if (password !== oldPassword) {
          throw new HttpException('Old password is incorect', 403);
        }

        const updatedUser: UserWithoutPassword = {
          ...user,
          updatedAt: Date.now(),
          version: user.version + 1,
        };

        store.users[id] = {
          ...updatedUser,
          password: newPassword,
        };

        this.storeData$ = of(store);

        return updatedUser;
      }),
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.storeData$.pipe(
      map((store) => {
        if (!store.users[id]) {
          throw new HttpException('User is not with us', 404);
        }

        delete store.users[id];

        this.storeData$ = of(store);
      }),
    );
  }
}
