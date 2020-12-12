import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WandererModule } from './users/module'

import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import validationSchema from './config/validation-schema'

describe('AppController', () => {
	let appController: AppController
	let appService: AppService

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [
				WandererModule,
				ConfigModule.forRoot({
					isGlobal: true,
					envFilePath: 'test/.env',
					load: [configuration],
					validationSchema,
				}),
			],
			controllers: [AppController],
			providers: [AppService],
		}).compile()

		appController = app.get<AppController>(AppController)
		appService = new AppService()
	})

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(appController.getVersion().version).toBe(
				appService.getVersion(),
			)
		})
	})
})
