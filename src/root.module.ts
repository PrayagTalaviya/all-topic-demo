import { Module } from '@nestjs/common';
import { TestModule } from './testApi/test.module';
@Module({
  imports: [TestModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
