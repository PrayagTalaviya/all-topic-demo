import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { user } from './user.entity';

@Controller('user')
export class GetUserController {
  constructor(private testService: TestService) {}

  //findAll user form dummy data in service
  @Get()
  findAllUser() {
    return this.testService.findAll();
  }

  //find user by id
  @Get('/:id')
  findUserById(@Param('id') id: number) {
    return this.testService.getUserById(id);
  }

  @Post('addUser')
  addUser(@Body() body: user) {
    return this.testService.addUser(body);
  }

  @Patch('update/:id')
  updateUser(@Param('id') id: number, @Body() body) {
    return this.testService.updateRecode(id, body);
  }
}
