import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";
import { CreatedEventDto } from "../dto/created-event.dto";

@Injectable()
export class CreateEventRepositorie{
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>
    ){}

    async execute(dto:CreatedEventDto): Promise<IEventEntity>{
        const createdEvent = new this.eventModel(dto);
        await createdEvent.save();
        return createdEvent.toObject(); 
    }
}