import { Test, TestingModule } from '@nestjs/testing'
import { ScyllaService } from '../utils/scylla/service'

import { ConfigService } from '@nestjs/config'
import GetConfigModule from '../config'

import { UserSession } from '../models'
import { UserSessionRepository } from './user-session'

describe('UserSessionRepository', () => {
	let userSessionRepository: UserSessionRepository
	let mockedUserSession: UserSession

	beforeEach(async () => {
		const configModule: TestingModule = await Test.createTestingModule({
			imports: [GetConfigModule({ isTest: true })],
		}).compile()
		const configService = configModule.get<ConfigService>(ConfigService)
		userSessionRepository = new UserSessionRepository(
			new ScyllaService(configService),
		)
		userSessionRepository.onModuleInit()

		mockedUserSession = new UserSession()
		mockedUserSession.uuid = '30150097-d1ca-47a0-baed-5c39bde6fdd0'
		mockedUserSession.accessToken = 'abcd'
		mockedUserSession.refreshToken = 'efgh'
	})

	describe('create', () => {
		it('should create user-session', async () => {
			await userSessionRepository.create(mockedUserSession)
		})
	})

	describe('findByUuid', () => {
		it('should return user-session', async () => {
			await userSessionRepository.findByUuid(mockedUserSession.uuid)
		})
	})
})
