import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { StoreService } from 'src/store/services/store.service';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { UserWithoutPassword } from '../interfaces/user-without-password.interface';

@Injectable()
export class UserService {
  constructor(private storeService: StoreService) {}

  getUsers(): Observable<UserWithoutPassword[]> {
    return this.storeService.getUsers();
  }

  getUser(id: string): Observable<UserWithoutPassword> {
    return this.storeService.getUser(id).pipe(
      map((user) => {
        if (!Object.keys(user).length) {
          throw new HttpException('User is not with us', 404);
        }
        return user;
      }),
    );
  }

  createUser(data: CreateUserDto): Observable<UserWithoutPassword> {
    return this.storeService.createUser(data);
  }

  updateUserPassword(
    id: string,
    data: UpdatePasswordDto,
  ): Observable<UserWithoutPassword> {
    return this.storeService.updateUserPassword(id, data).pipe(
      map((user) => {
        if (!user) {
          throw new HttpException('User is not with us', 404);
        }
        return user;
      }),
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.storeService.deleteUser(id);
  }
}
