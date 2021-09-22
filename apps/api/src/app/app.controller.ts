import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('games')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllDatas() {
    return this.appService.getAllDatas();
  }

  @Get('/:id')
  getData(@Param('id') id: string) {
    return this.appService.getData(id);
  }


  @Get()
  getAllData1() {
    return this.appService.getAllData1();
  }

  @Get('/:id')
  getData1(@Param('id') id: string) {
    return this.appService.getData1(id);
  }
}
