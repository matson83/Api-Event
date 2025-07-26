import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";
import { NotFoundException } from '@nestjs/common';
import { UpdateEventDto } from "../dto/update-event.dto";

@Injectable()
export class UpdateEventRepositorie{
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>
    ){}

    async execute(id:string,data:Partial<UpdateEventDto>): Promise<IEventEntity>{
        const updateEvent = await this.eventModel.findByIdAndUpdate(
            id,
            {$set:data},
            {new:true}
        );

        if (!updateEvent) {
            throw new NotFoundException(`Evento com ID ${id} não encontrado`);
        }

        return updateEvent.toObject();
    }
}