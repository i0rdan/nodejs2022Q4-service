import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Artist } from './entities/artist.entity';
import { ArtistController } from './artist.controller';
import { ArtistService } from './services/artist.service';
import { ArtistDbService } from './services/artist.db.service';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistController],
  providers: [ArtistService, ArtistDbService],
  exports: [ArtistService],
})
export class ArtistModule {}
