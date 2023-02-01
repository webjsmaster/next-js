import * as crypto from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { CreateTrackDto } from './dto/create-track.dto'
import { DB } from 'src/DB/db.sevice'

@Injectable()
export class TracksService {
	constructor(private db: DB) {}

	private tracks: CreateTrackDto[] = []
	// getAll(): CreateTrackDto[] {
	// 	console.log('🎶 [tracks]', this.tracks)
	// 	return this.tracks
	// }

	async getAll() {
		console.log('📢 [tracks.service.ts:20]', await this.db.artist.findMany())
		return []
	}

	// getById(id: string) {
	// 	return this.tracks.find((t) => t.id === id)
	// }
	create(tracks: CreateTrackDto) {
		const track = new CreateTrackDto({
			...tracks,
			id: crypto.randomUUID(),
		})
		this.tracks.push(track)
		return track
	}
}
