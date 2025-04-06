import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAllTags(): { id: number; name: string }[] {
    return [
      { id: 1, name: 'Tag-1' },
      { id: 2, name: 'Tag-2' },
      { id: 3, name: 'Tag-3' },
    ];
  }
}
