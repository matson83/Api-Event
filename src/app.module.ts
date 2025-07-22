import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventModule,
    MongooseModule.forRoot('mongodb+srv://matsonjunior194:n9AR8ZeClqavO1gG@teste1.hoe1gzs.mongodb.net/?retryWrites=true&w=majority&appName=Teste1')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
