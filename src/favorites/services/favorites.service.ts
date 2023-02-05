import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { StoreService } from 'src/store/services/store.service';

import { FavoritesRepsonse } from '../interfaces/favorites-response.interface';

@Injectable()
export class FavoritesService {
  constructor(private storeService: StoreService) {}

  getFavorites(): Observable<FavoritesRepsonse> {
    return this.storeService.getFavorites();
  }

  addTrackToFavorites(id: string): Observable<string> {
    return this.storeService.addTrackToFavorites(id).pipe(
      map((message) => {
        if (!message) {
          throw new HttpException('Track is not with us', 422);
        }
        return message;
      }),
    );
  }

  deleteTrackFromFavorites(id: string): Observable<void> {
    return this.storeService.deleteTrackFromFavorites(id);
  }

  addAlbumToFavorites(id: string): Observable<string> {
    return this.storeService.addAlbumToFavorites(id).pipe(
      map((message) => {
        if (!message) {
          throw new HttpException('Album is not with us', 422);
        }
        return message;
      }),
    );
  }

  deleteAlbumFromFavorites(id: string): Observable<void> {
    return this.storeService.deleteAlbumFromFavorites(id);
  }

  addArtistToFavorites(id: string): Observable<string> {
    return this.storeService.addArtistToFavorites(id).pipe(
      map((message) => {
        if (!message) {
          throw new HttpException('Arrtist is not with us', 422);
        }
        return message;
      }),
    );
  }

  deleteArtistFromFavorites(id: string): Observable<void> {
    return this.storeService.deleteArtistFromFavorites(id);
  }
}
