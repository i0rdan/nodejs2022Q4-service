import { Module } from '@nestjs/common';

import { StoreModule } from 'src/store/store.module';

import { ArtistController } from './artist.controller';
import { ArtistService } from './services/artist.service';

@Module({
  imports: [StoreModule],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
