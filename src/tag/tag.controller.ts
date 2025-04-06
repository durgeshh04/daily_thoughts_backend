import { Controller, Get } from '@nestjs/common';

@Controller('tag')
export class TagController {
  @Get()
  findAllTags() {
    return [
      { id: 1, name: 'Tag1' },
      { id: 2, name: 'Tag2' },
    ];
  }
}
