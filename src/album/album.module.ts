import { Module } from '@nestjs/common';

import { StoreModule } from 'src/store/store.module';

import { AlbumController } from './album.controller';
import { AlbumService } from './services/album.service';

@Module({
  imports: [StoreModule],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
