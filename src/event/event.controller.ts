import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEventService } from './services/create-event.service';
import { IEventEntity } from './interfaces/IEventEntity';
import { UpdateEventService } from './services/update-event.service';
import { GetAllService } from './services/getall-event.service';
import { GetIdService } from './services/getid-event.service';
import { DeleteEventService } from './services/delete-event.service';
import { CreatedEventDto } from './dto/created-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

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
    async create(@Body() dto: CreatedEventDto): Promise<IEventEntity>{
        return this.createEventService.criarEvento(
            dto
        );
    }

    @Patch(':id')
    async update(@Param('id') id: string,@Body() dto:UpdateEventDto): Promise<IEventEntity>{
        return this.updateEventService.updateEvent(
            id,
            dto
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
