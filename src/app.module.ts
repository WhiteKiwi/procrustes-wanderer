import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WandererModule } from './users/module'

@Module({
	imports: [WandererModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
