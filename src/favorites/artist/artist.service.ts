import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { DB } from 'src/DB/db.service'
import { FavoritesService } from '../favorites.service'

@Injectable()
export class ArtistService {
	constructor(private db: DB, private moduleRef: ModuleRef) {}

	// async getAll() {
	// 	const { artists } = await this.db.favorites.getFavorites()

	// 	return fav
	// }

	async create(id: string) {
		const favoriteService = this.moduleRef.get(FavoritesService)
		return favoriteService.addArtist(id)
	}
}
