import { Injectable } from "@nestjs/common";
import { UpdateEventRepositorie } from "../repositories/update-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExistIdEVentService } from "./idExists-event.service";

@Injectable()
export class UpdateEventService{
    constructor(
        private readonly UpdateEventRepositorie:UpdateEventRepositorie,
        private readonly ExistIdEVentService:ExistIdEVentService
    ){}

    async updateEvent(id:string,updateData:Partial<IEventEntity>){
        await this.ExistIdEVentService.checkExists(id);
        return await this.UpdateEventRepositorie.execute(id,updateData)
    }
}