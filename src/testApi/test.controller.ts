import { Controller, Get, Req } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('checkReq')
  checkReq(@Req() request) {
    console.log(request);
    console.log('call');
  }
}
