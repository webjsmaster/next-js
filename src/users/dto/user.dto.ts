export type UserEntity = {
	id: string // uuid v4
	login: string
	password: string
	version: number // integer number, increments on update
	createdAt: number // timestamp of creation
	updatedAt: number // timestamp of last update
};
export type CreateUserDTO = Pick<UserEntity, 'login' | 'password'>;
export type ChangeUserDTO = Partial<Pick<UserEntity, 'login' | 'password'>>;