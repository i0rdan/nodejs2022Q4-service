import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { StoreService } from 'src/store/services/store.service';

import { Artist } from '../interfaces/artist.interface';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(private storeService: StoreService) {}

  getArtists(): Observable<Artist[]> {
    return this.storeService.getArtists();
  }

  getArtist(id: string): Observable<Artist> {
    return this.storeService.getArtist(id).pipe(
      map((artist) => {
        if (!artist) {
          throw new HttpException('Artist is not with us', 404);
        }
        return artist;
      }),
    );
  }

  createArtist(data: CreateArtistDto): Observable<Artist> {
    return this.storeService.createArtist(data);
  }

  updateArtist(id: string, data: UpdateArtistDto): Observable<Artist> {
    return this.storeService.updateArtist(id, data).pipe(
      map((artist) => {
        if (!artist) {
          throw new HttpException('Artist is not with us', 404);
        }
        return artist;
      }),
    );
  }

  deleteArtist(id: string): Observable<void> {
    return this.storeService.deleteArtist(id);
  }
}
