import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';

import { Observable } from 'rxjs';

import { FavoritesResponse } from './interfaces/favorites-response.interface';
import { FavoritesService } from './services/favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  getFavorites(): Observable<FavoritesResponse> {
    return this.favoritesService.getFavorites();
  }

  @Post('track/:id')
  addTrackToFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<string> {
    return this.favoritesService.addTrackToFavorites(id);
  }

  @Delete('track/:id')
  @HttpCode(204)
  deleteTrackFromFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<void> {
    return this.favoritesService.deleteTrackFromFavorites(id);
  }

  @Post('album/:id')
  addAlbumToFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<string> {
    return this.favoritesService.addAlbumToFavorites(id);
  }

  @Delete('album/:id')
  @HttpCode(204)
  deleteAlbumFromFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<void> {
    return this.favoritesService.deleteAlbumFromFavorites(id);
  }

  @Post('artist/:id')
  addArtistToFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<string> {
    return this.favoritesService.addArtistToFavorites(id);
  }

  @Delete('artist/:id')
  @HttpCode(204)
  deleteArtistFromFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Observable<void> {
    return this.favoritesService.deleteArtistFromFavorites(id);
  }
}
