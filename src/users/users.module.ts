import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';


@Module({
  imports: [
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1d' }
    }),
    UsersModule
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, JwtStrategy]
})
export class UsersModule {}
