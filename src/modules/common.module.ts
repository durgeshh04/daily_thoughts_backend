import { Module } from '@nestjs/common';
import { TagModule } from '@app/modules/tag/tag.module';

@Module({
    imports: [
        TagModule,
    ]
})
export class CommonModule {}