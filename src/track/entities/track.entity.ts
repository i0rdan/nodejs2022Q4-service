import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @Column({ nullable: true })
  albumId: string;

  @Column({ nullable: true })
  artistId: string;
}
