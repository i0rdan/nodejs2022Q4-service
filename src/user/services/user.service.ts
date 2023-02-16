import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { UserWithoutPassword } from '../interfaces/user-without-password.interface';
import { UserDbService } from './user.db.service';

@Injectable()
export class UserService {
  constructor(private userDbService: UserDbService) {}

  getUsers(): Observable<UserWithoutPassword[]> {
    return this.userDbService.getUsers();
  }

  getUser(id: string): Observable<UserWithoutPassword> {
    return this.userDbService.getUser(id).pipe(
      map((user) => {
        if (!user) {
          throw new HttpException('User is not with us', 404);
        }
        return user;
      }),
    );
  }

  createUser(data: CreateUserDto): Observable<UserWithoutPassword> {
    return this.userDbService.createUser(data);
  }

  updateUserPassword(
    id: string,
    data: UpdatePasswordDto,
  ): Observable<UserWithoutPassword> {
    return this.userDbService.updateUserPassword(id, data).pipe(
      map((user) => {
        if (!user) {
          throw new HttpException('User is not with us', 404);
        }
        return user;
      }),
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.userDbService.deleteUser(id);
  }
}
