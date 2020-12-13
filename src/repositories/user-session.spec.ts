import { Test, TestingModule } from '@nestjs/testing'
import { ScyllaService } from '../utils/scylla/service'

import { ConfigService } from '@nestjs/config'
import GetConfigModule from '../config'

import { UserSession } from '../models'
import { UserSessionRepository } from './user-session'

import { scylla } from '../../test/test-env/src/index'

describe('UserSessionRepository', () => {
	let userSessionRepository: UserSessionRepository
	let mockedUserSession: UserSession
	let mockData: any

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

		mockData = scylla.mockData
	})

	describe('create', () => {
		it('should create user-session', async () => {
			await userSessionRepository.create(mockedUserSession)
		})
	})

	describe('findByUuid', () => {
		it('should return created user-session', async () => {
			await userSessionRepository.findByUuid(mockedUserSession.uuid)
		})

		it('should return exist user-session', async () => {
			await userSessionRepository.findByUuid(
				mockData.userSessions[0].uuid,
			)
		})
	})
})
