import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './schema/auth.schema';
import { EventModule } from 'src/event/event.module';
import { CreateAuthRepositorie } from './repositories/create-auth.repositories';
import { CreateAuthService } from './services/create-auth.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Auth.name,schema:AuthSchema}]),EventModule],
  controllers: [AuthController],
  providers:[
    CreateAuthRepositorie,
    CreateAuthService
  ]
})
export class AuthModule {}
