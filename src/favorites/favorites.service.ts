import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { DB } from 'src/DB/db.service'
import { ArtistService } from './artist/artist.service'

@Injectable()
export class FavoritesService {
	constructor(private db: DB) {}

	async getAll() {
		const fav = await this.db.favorites.getFavorites()
		console.log('📢 [favorites.service.ts:11]', fav)
	}

	async addArtist(id: string) {
		const add = await this.db.favorites.addArtist(id)
		console.log('📢 [ADD]', add)
	}
}
