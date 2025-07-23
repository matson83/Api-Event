import { Injectable } from "@nestjs/common";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class GetAllRepositorie{
    constructor(
        @InjectModel(Event.name) private readonly eventModel:Model<EventDocument>
    ){}

    async list():Promise <IEventEntity[]>{
        const events = await this.eventModel.find().lean().exec();
        return events.map((event) => ({
            name: event.name,
            date: new Date(event.date),       
            hour: event.hour,
            description: event.description,
            value: event.value,
        }));

    }
}
