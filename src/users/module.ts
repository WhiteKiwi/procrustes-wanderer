import { Module } from '@nestjs/common'
import { WandererController } from './controller'
import { WandererService } from './service'

@Module({
	imports: [],
	controllers: [WandererController],
	providers: [WandererService],
})
export class WandererModule {}
