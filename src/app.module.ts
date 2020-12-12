import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WandererModule } from './users/module'

import GetConfigModule from './config'

@Module({
	imports: [WandererModule, GetConfigModule()],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
