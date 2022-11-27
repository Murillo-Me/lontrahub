import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserController, UserService } from './user';
import { PostController, PostService } from './post';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostController],
  providers: [PrismaService, AppService, UserService, PostService],
})
export class AppModule {}
