import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WandererModule } from './users/module'

import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import validationSchema from './config/validation-schema';

@Module({
	imports: [
		WandererModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
			load: [configuration],
			validationSchema,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
