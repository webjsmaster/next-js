import * as crypto from 'node:crypto'
import DBEntity from './DBEntity'
import {
	ChangeUserDTO,
	CreateUserDTO,
	UserEntity,
} from '../../users/dto/user.dto'

export default class DBUsers extends DBEntity<
	UserEntity,
	ChangeUserDTO,
	CreateUserDTO
> {
	async create(dto: CreateUserDTO) {
		const date = +new Date()

		const created: UserEntity = {
			...dto,
			id: crypto.randomUUID(),
			version: 1,
			createdAt: date,
			updatedAt: date,
		}
		this.entities.push(created)
		return created
	}
}
