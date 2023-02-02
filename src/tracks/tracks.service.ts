import * as crypto from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { CreateTrackDto, TracksDto } from './dto/create-track.dto'
import { DB } from 'src/DB/db.service'
import { TracksEntity } from 'src/DB/entities/DBTracks'

@Injectable()
export class TracksService {
	constructor(private db: DB) {}

	private tracks: CreateTrackDto[] = []
	// getAll(): CreateTrackDto[] {
	// 	console.log('🎶 [tracks]', this.tracks)
	// 	return this.tracks
	// }

	async getAll() {
		const tracksAll = await this.db.tracks.findMany()
		const arr: CreateTrackDto[] = []
		tracksAll.forEach((track) => {
			arr.push(new CreateTrackDto(track))
		})
		return arr
	}

	// getById(id: string) {
	// 	return this.tracks.find((t) => t.id === id)
	// }
	create(tracks: CreateTrackDto) {
		const track = new CreateTrackDto({
			...tracks,
			id: crypto.randomUUID(),
		})
		this.db.tracks.create(track as TracksEntity)
		return track
	}
}
