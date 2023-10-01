import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name:string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email:string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password:string;
}
