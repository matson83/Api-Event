import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UpdateEventRepositorie{
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>
    ){}

    async execute(id:string,data:Partial<IEventEntity>): Promise<IEventEntity>{
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