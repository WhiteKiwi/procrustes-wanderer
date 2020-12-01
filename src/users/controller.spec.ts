import { Test, TestingModule } from '@nestjs/testing'
import { WandererController } from './controller'
import { WandererService } from './service'

describe('WandererController', () => {
	let wandererController: WandererController

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [WandererController],
			providers: [WandererService],
		}).compile()

		wandererController = app.get<WandererController>(WandererController)
	})

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(wandererController.getHello()).toBe('Hello World!')
		})
	})
})
