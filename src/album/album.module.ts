import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from './entities/album.entity';
import { AlbumController } from './album.controller';
import { AlbumService } from './services/album.service';
import { AlbumDbService } from './services/album.db.service';

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumDbService],
})
export class AlbumModule {}
