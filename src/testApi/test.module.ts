import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { GetUserController } from './get-user.controller';

@Module({
  controllers: [TestController, GetUserController],
  providers: [TestService],
})
export class TestModule {}
