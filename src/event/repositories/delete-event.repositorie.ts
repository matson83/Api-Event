import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventDocument } from "../Schema/events.schema";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class DeleteEventRepositorie{
    constructor(
        @InjectModel(Event.name) private readonly eventModel:Model<EventDocument>
    ){}

    async delete(id:string):Promise<IEventEntity>{
        const deleteEvent = await this.eventModel.findByIdAndDelete(id)

        if(!deleteEvent){
            throw new NotFoundException('Evento com o id ${id} não foi encontrado para a deletar')
        }
        return deleteEvent;
    }
}