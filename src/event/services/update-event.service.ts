import { Injectable } from "@nestjs/common";
import { UpdateEventRepositorie } from "../repositories/update-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class UpdateEventService{
    constructor(
        private readonly UpdateEventRepositorie:UpdateEventRepositorie
    ){}

    async updateEvent(id:string,updateData:Partial<IEventEntity>){
        return await this.UpdateEventRepositorie.execute(id,updateData)
    }
}