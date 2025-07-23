import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventDocument } from "../Schema/events.schema";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class GetIdRepositorie{
    constructor(
         @InjectModel(Event.name) private readonly eventModel:Model<EventDocument>
    ){}

    async listById(id:string): Promise<IEventEntity>{
        const event = await this.eventModel.findById(id).lean();
        if(!event){
            throw new NotFoundException('Evento com o ID ${id} não encontrado')
        }
        return event;
    }
   
}