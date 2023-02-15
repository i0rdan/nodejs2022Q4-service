import { Injectable, HttpException } from '@nestjs/common';

import { Observable, map } from 'rxjs';

import { StoreService } from 'src/store/services/store.service';

import { Track } from '../interfaces/track.interface';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';

@Injectable()
export class TrackService {
  constructor(private storeService: StoreService) {}

  getTracks(): Observable<Track[]> {
    return this.storeService.getTracks();
  }

  getTrack(id: string): Observable<Track> {
    return this.storeService.getTrack(id).pipe(
      map((track) => {
        if (!track) {
          throw new HttpException('Track is not with us', 404);
        }
        return track;
      }),
    );
  }

  createTrack(data: CreateTrackDto): Observable<Track> {
    return this.storeService.createTrack(data);
  }

  updateTrack(id: string, data: UpdateTrackDto): Observable<Track> {
    return this.storeService.updateTrack(id, data).pipe(
      map((track) => {
        if (!track) {
          throw new HttpException('Track is not with us', 404);
        }
        return track;
      }),
    );
  }

  deleteTrack(id: string): Observable<void> {
    return this.storeService.deleteTrack(id);
  }
}
