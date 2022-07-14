import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Continent } from './continent.models';
import { ContinentUpdateDto } from './continentUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createContinent(@Body() continentDto: Continent){
    return this.appService.createContinent(continentDto)
  }

  @Get()
  readContinent(){
    return this.appService.readContinent()
  }

  @Put(':id')
  async updateContinent(
      @Param('id') id:string ,@Body() updateData:ContinentUpdateDto
    ):Promise<Continent>{
    return this.appService.updateContinent(id, updateData)
  }

  @Delete(':id')
  async deleteContinent(@Param('id') id:string){
    return this.appService.deleteContinent(id)
  }
}
