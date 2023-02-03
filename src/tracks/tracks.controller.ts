import * as crypto from 'node:crypto'
import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Get,
	Post,
	UseInterceptors,
} from '@nestjs/common'
import { CreateTrackDto } from './dto/create-track.dto'
import { TracksService } from './tracks.service'

@Controller('tracks')
export class TracksController {
	constructor(private readonly trackService: TracksService) {}

	// @Get()
	// getAll(): CreateTrackDto[] {
	// 	return this.trackService.getAll()
	// }

	// @UseInterceptors(ClassSerializerInterceptor)
	// @Post()
	// create(@Body() CreateTrackDto: CreateTrackDto) {
	// 	//return this.trackService.create(CreateTrackDto)
	// 	return new CreateTrackDto({
	// 		...CreateTrackDto,
	// 		id: crypto.randomUUID(),
	// 	})
	// }

	@UseInterceptors(ClassSerializerInterceptor)
	@Get()
	async getAll() {
		// return new CreateTrackDto({
		// 	id: '1',
		// 	name: 'Kamil',
		// 	artistId: 'Mysliwiec',
		// 	duration: 4556,
		// })
		return await this.trackService.getAll()
	}

	@UseInterceptors(ClassSerializerInterceptor)
	@Post()
	create(@Body() CreateTrackDto: CreateTrackDto) {
		return this.trackService.create(CreateTrackDto)
	}
}
