import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from 'typeorm.config';

import { UserModule } from './user/user.module';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    UserModule,
    TrackModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
