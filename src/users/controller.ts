import { Controller, Get } from '@nestjs/common'
import { WandererService } from './service'

@Controller()
export class WandererController {
	constructor(private readonly wandererService: WandererService) {}

	@Get()
	getHello(): string {
		return this.wandererService.getHello()
	}
}
