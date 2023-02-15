import { Module } from '@nestjs/common';

import { StoreModule } from 'src/store/store.module';

import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [StoreModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
