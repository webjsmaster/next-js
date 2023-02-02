import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
} from '@nestjs/common'
import { ArtistService } from './artist/artist.service'
import { FavoritesService } from './favorites.service'

@Controller('favs')
export class FavoritesController {
	constructor(private readonly favoriteService: FavoritesService) {}

	@Get()
	async getAll() {
		return this.favoriteService.getAll()
	}

	// @Post()
	// @HttpCode(HttpStatus.CREATED)
	// addTracks(@Body() addTracks: TrackEvent) {
	// 	return this.favoriteService.create(addTracks)
	// }
}
