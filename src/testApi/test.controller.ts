import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('test')
export class TestController {
  //root end point
  @Get()
  rootFunctionCall() {
    return 'this is call perfect';
  }

  // now we tack prefix path and add path
  @Get('newPath')
  extractPath() {
    return 'extract path working perfect';
  }

  // we take params from url
  @Get('takeParam/:id')
  takeParams(@Param('id') id: string) {
    return `${id} this is params what is you add in url`;
  }

  // we take body from api
  @Post('/getBody')
  getBodyObj(@Body() body) {
    return body;
  }

  //error handler decorators @HttpCode()
  //by default get request give 200 status code we change,
  @Get('checkError')
  @HttpCode(HttpStatus.ACCEPTED)
  checkError() {
    return 'check the status code';
  }

  //update api using put and patch
  //put change entire resource
  //patch change only what filed you want to change
  @Patch('update1/:id')
  updateUser(@Param('id') id: string, @Body() body) {
    return `this is ${id} and this is ${body.name} using patch`;
  }

  @Put('update2/:id')
  updatePutUser(@Param('id') id: string, @Body() body) {
    return `this is ${id} and this is ${body.name} using put`;
  }

  //delete recodes
  @Delete('remove/:id')
  deleteUser(@Param() params) {
    return `remove this ${params.id} from db successfully`;
  }

  //now we get query parameter in api
  @Get('getQuery')
  getQuery(@Query() queryParameter) {
    const { limit, start } = queryParameter;
    return `this is limit   ${limit}  this is start  ${start}`;
  }
}
