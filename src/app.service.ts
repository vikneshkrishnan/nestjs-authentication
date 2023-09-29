import { Injectable } from '@nestjs/common';
import {PrismaService} from "@app/shared/prisma/prisma.service";
import {UserDto} from "./dto/create-user.dto";

@Injectable()
export class AppService {

  constructor(private prisma:PrismaService) {
  }

  async createNewUser(data:UserDto){
     return this.prisma.user.create({
        data
     })
  }

  async getAllUsers(){
    return this.prisma.user.findMany()
  }
}
