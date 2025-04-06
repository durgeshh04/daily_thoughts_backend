import { Module } from '@nestjs/common';
import { TagController } from '@app/modules/tag/tag.controller';
import { TagService } from '@app/modules/tag/tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
