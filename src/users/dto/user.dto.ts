import { Exclude } from 'class-transformer'

// export type UserEntity = {
// 	id: string // uuid v4
// 	login: string
// 	password: string
// 	version: number // integer number, increments on update
// 	createdAt: number // timestamp of creation
// 	updatedAt: number // timestamp of last update
// }
// export type CreateUserDTO = Pick<UserEntity, 'login' | 'password'>
// export type ChangeUserDTO = Partial<Pick<UserEntity, 'login' | 'password'>>

export class UserDto {
	readonly id?: string // uuid v4
	readonly login: string
	readonly version: number // integer number, increments on update
	readonly createdAt: number // timestamp of creation
	readonly updatedAt: number // timestamp of last update

	@Exclude()
	readonly password: string

	constructor(partial: Partial<UserDto>) {
		Object.assign(this, partial)
	}
}
