import { Module } from '@nestjs/common';

import { StoreModule } from 'src/store/store.module';

import { TrackService } from './services/track.service';
import { TrackController } from './track.controller';

@Module({
  imports: [StoreModule],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
