import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { StoreService } from 'src/store/services/store.service';

import { Album } from '../interfaces/album.interface';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';

@Injectable()
export class AlbumService {
  constructor(private storeService: StoreService) {}

  getAlbums(): Observable<Album[]> {
    return this.storeService.getAlbums();
  }

  getAlbum(id: string): Observable<Album> {
    return this.storeService.getAlbum(id).pipe(
      map((album) => {
        if (!album) {
          throw new HttpException('Album is not with us', 404);
        }
        return album;
      }),
    );
  }

  createAlbum(data: CreateAlbumDto): Observable<Album> {
    return this.storeService.createAlbum(data);
  }

  updateAlbum(id: string, data: UpdateAlbumDto): Observable<Album> {
    return this.storeService.updateAlbum(id, data).pipe(
      map((album) => {
        if (!album) {
          throw new HttpException('Album is not with us', 404);
        }
        return album;
      }),
    );
  }

  deleteAlbum(id: string): Observable<void> {
    return this.storeService.deleteAlbum(id);
  }
}
