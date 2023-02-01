import DBEntity from './DBEntity';

export type ArtistEntity = {
  id: string;
  name: string;
  grammy: boolean;
};
export type CreateArtistDTO = Omit<ArtistEntity, 'id'>;
export type ChangeArtistDTO = Partial<Omit<ArtistEntity, 'id'>>;

export default class DBArtists extends DBEntity<
    ArtistEntity,
    CreateArtistDTO,
    ChangeArtistDTO
> {
  async create(dto: CreateArtistDTO) {
    const created: ArtistEntity = {
      ...dto,
      id: crypto.randomUUID(),
    };
    this.entities.push(created);
    return created;
  }
}
