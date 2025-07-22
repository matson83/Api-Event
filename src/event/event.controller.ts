import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateEventService } from './services/create-event.service';
import { IEventEntity } from './interfaces/IEventEntity';
import { UpdateEventService } from './services/update-event.service';

@Controller('event')
export class EventController {
    constructor(
        private readonly createEventService:CreateEventService,
        private readonly updateEventService:UpdateEventService
    ){

    }

    @Post('create')
    async create(@Body() event:IEventEntity): Promise<IEventEntity>{
        return this.createEventService.criarEvento(
            event
        );
    }

    @Patch(':id')
    async update(@Param('id') id: string,@Body() data:IEventEntity): Promise<IEventEntity>{
        return this.updateEventService.updateEvent(
            id,
            data
        );
    }


}
