import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name:string


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email:string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password:string
}
