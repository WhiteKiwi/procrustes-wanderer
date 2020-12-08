import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WandererModule } from './users/module'

import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import configuration from './config';
import { ENVIRONMENT } from './utils/constants'

@Module({
	imports: [
		WandererModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
			load: [configuration],
			validationSchema: Joi.object({
				ENVIRONMENT: Joi.string()
					.valid(...Object.keys(ENVIRONMENT))
					.default(ENVIRONMENT.DEVELOPMENT),
				PORT: Joi.number().default(3002),
			}),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
