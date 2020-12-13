import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SCYLLA } from '../../config/constants'
import { Client, mapping, auth } from 'cassandra-driver'

@Injectable()
export class ScyllaService {
	constructor(private readonly configService: ConfigService) {}

	client: Client
	mapper: mapping.Mapper
	private createClient() {
		this.client = new Client({
			contactPoints: this.configService
				.get<string>(SCYLLA.END_POINTS)
				.split(','),
			keyspace: this.configService.get<string>(SCYLLA.KEY_SPACE),
			localDataCenter: this.configService.get<string>(SCYLLA.DATA_CENTER),
			authProvider: new auth.PlainTextAuthProvider(
				this.configService.get<string>(SCYLLA.USER_NAME),
				this.configService.get<string>(SCYLLA.PASSWORD),
			),
		})
	}

	createMapper(mappingOptions: mapping.MappingOptions) {
		if (this.client == undefined) {
			this.createClient()
		}
		return new mapping.Mapper(this.client, mappingOptions)
	}
}
