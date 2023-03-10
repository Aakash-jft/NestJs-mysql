import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/detabase.module';
import { UserController } from './user.controller';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...userProviders]
})
export class UserModule {}
