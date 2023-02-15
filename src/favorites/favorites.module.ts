import { Module } from '@nestjs/common';

import { StoreModule } from 'src/store/store.module';

import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './services/favorites.service';

@Module({
  imports: [StoreModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
