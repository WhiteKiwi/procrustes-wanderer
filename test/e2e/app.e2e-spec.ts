import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'

import { WandererModule } from '../../src/users/module'
import { AppService } from '../../src/app.service'
import { AppController } from '../../src/app.controller'

import { ConfigModule } from '@nestjs/config'
import configuration from '../../src/config/configuration'
import validationSchema from '../../src/config/validation-schema'

describe('AppController (e2e)', () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
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

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('/ (GET)', () => {
		return request(app.getHttpServer())
			.get('/')
			.expect(200)
			.expect({
				version: '0.0.1'
			})
	})
})
