import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	UseInterceptors,
} from '@nestjs/common'
import { DB } from '../DB/db.sevice'
import { CreateUserDTO, UserEntity } from './dto/user.dto'

//nest g controller users

@Controller('users')
export class UsersController {
	constructor(private readonly db: DB) {}

	@Get()
	async getAll(): Promise<UserEntity[]> {
		return await this.db.users.findMany()
	}

	@Get(':id')
	async getOne(@Param('id') id: string): Promise<UserEntity> {
		return await this.db.users.findOne({ key: 'id', equals: id })
	}

	@UseInterceptors(ClassSerializerInterceptor)
	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() CreateUserDTO: CreateUserDTO) {
		const user = await this.db.users.create(CreateUserDTO)

		return user
	}
}
