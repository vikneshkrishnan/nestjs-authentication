import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {UserDto} from "./dto/create-user.dto";
import {ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  async createNewUser(@Body() data:UserDto) {
    return this.appService.createNewUser(data)
  }

  @Get('user')
  async getAllUsers(){
    return this.appService.getAllUsers()
  }
}
