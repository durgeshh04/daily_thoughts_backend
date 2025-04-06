import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/modules/tag/tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  findAllTags(): { id: number; name: string }[] {
    return this.tagService.findAllTags();
  }
}
