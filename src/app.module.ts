import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '@app/app.service';
import { CommonModule } from '@app/modules/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from '@app/config/typeorm.config';

@Module({
  imports: [CommonModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
