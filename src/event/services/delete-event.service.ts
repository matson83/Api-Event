import { Injectable } from "@nestjs/common";
import { DeleteEventRepositorie } from "../repositories/delete-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class DeleteEventService{
    constructor(
        private readonly DeleteEventRepositorie:DeleteEventRepositorie
    ){}

    async delete(id:string):Promise <IEventEntity>{
        return this.DeleteEventRepositorie.delete(id)
    }
}