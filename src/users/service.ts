import { Injectable } from '@nestjs/common'

@Injectable()
export class WandererService {
	getHello(): string {
		return 'Hello World!'
	}
}
