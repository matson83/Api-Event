import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEventService } from './services/create-event.service';
import { IEventEntity } from './interfaces/IEventEntity';
import { UpdateEventService } from './services/update-event.service';
import { GetAllService } from './services/getall-event.service';
import { GetIdService } from './services/getid-event.service';
import { DeleteEventService } from './services/delete-event.service';

@Controller('event')
export class EventController {
    constructor(
        private readonly createEventService:CreateEventService,
        private readonly updateEventService:UpdateEventService,
        private readonly getAllService:GetAllService,
        private readonly getIdService:GetIdService,
        private readonly deleteEventService:DeleteEventService
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

    @Get('list')
    async list():Promise<IEventEntity[]>{
        return this.getAllService.getAll();
    }

    @Get('list/:id')
    async listId(@Param('id') id:string):Promise<IEventEntity>{
        return this.getIdService.listId(id);
    }

    @Delete(':id')
    async delete(@Param('id') id:string):Promise<IEventEntity>{
        return this.deleteEventService.delete(id);
    }


}
