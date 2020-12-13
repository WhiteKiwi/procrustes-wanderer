import { Injectable, OnModuleInit } from '@nestjs/common'
import { mapping } from 'cassandra-driver'
import { UserSession } from '../models'
import { ScyllaService } from '../utils/scylla/service'

@Injectable()
export class UserSessionRepository implements OnModuleInit {
	constructor(private scyllaService: ScyllaService) {}

	userSessionMapper: mapping.ModelMapper<UserSession>

	onModuleInit() {
		const mappingOptions: mapping.MappingOptions = {
			models: {
				UserSession: {
					tables: ['user_sessions'],
					mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
				},
			},
		}

		this.userSessionMapper = this.scyllaService
			.createMapper(mappingOptions)
			.forModel('UserSession')
	}

	async findByUuid(uuid: string): Promise<UserSession> {
		return (await this.userSessionMapper.find({ uuid })).first()
	}

	async create(userSession: UserSession): Promise<UserSession> {
		return (await this.userSessionMapper.insert(userSession)).first()
	}
}
