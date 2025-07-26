import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepositorie } from './repositories/create-event.repositorie';
import { CreateEventService } from './services/create-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './Schema/events.schema';
import { UpdateEventRepositorie } from './repositories/update-event.repositorie';
import { UpdateEventService } from './services/update-event.service';
import { GetAllRepositorie } from './repositories/getAll-event.repositorie';
import { GetAllService } from './services/getall-event.service';
import { GetIdRepositorie } from './repositories/getId-event.repositorie';
import { GetIdService } from './services/getid-event.service';
import { DeleteEventRepositorie } from './repositories/delete-event.repositorie';
import { DeleteEventService } from './services/delete-event.service';
import { ExistIdEventRepository } from './repositories/idExists-event.repositore';
import { ExistIdEVentService } from './services/idExists-event.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Event.name,schema:EventSchema}])],
  controllers: [EventController],
  providers:[
    CreateEventRepositorie,
    CreateEventService,
    UpdateEventRepositorie,
    UpdateEventService,
    GetAllRepositorie,
    GetAllService,
    GetIdRepositorie,
    GetIdService,
    DeleteEventRepositorie,
    DeleteEventService,
    ExistIdEventRepository,
    ExistIdEVentService
    ],
  exports:[EventModule]
})
export class EventModule {}
