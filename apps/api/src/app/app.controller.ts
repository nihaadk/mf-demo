import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Post()
  createdTodo(@Body() todoTitle: string) {
    this.appService.setTodo(todoTitle);
  }


}
