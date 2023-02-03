import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FavoriteModule } from './favorites/favorite.module'
import { TracksModule } from './tracks/tracks.module'
import { UsersModule } from './users/users.module'

@Module({
	imports: [UsersModule, TracksModule, FavoriteModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
