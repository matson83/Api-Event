import { Injectable } from "@nestjs/common";
import { DeleteEventRepositorie } from "../repositories/delete-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExistIdEVentService } from "./idExists-event.service";

@Injectable()
export class DeleteEventService{
    constructor(
        private readonly DeleteEventRepositorie:DeleteEventRepositorie,
        private readonly ExistIdEventService:ExistIdEVentService
    ){}

    async delete(id:string):Promise <IEventEntity>{
        await this.ExistIdEventService.checkExists(id)
        return this.DeleteEventRepositorie.delete(id)
    }
}