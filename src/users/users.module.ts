import { Module } from '@nestjs/common'
import { DB } from '../DB/db.sevice'
import { UsersController } from './users.controller'

@Module({
	providers: [DB],
	controllers: [UsersController],
})
export class UsersModule {}
