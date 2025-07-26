import { Injectable } from "@nestjs/common";
import { DeleteEventRepositorie } from "../repositories/delete-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExistIdEventRepository } from "../repositories/idExists-event.repositore";

@Injectable()
export class DeleteEventService{
    constructor(
        private readonly DeleteEventRepositorie:DeleteEventRepositorie,
        private readonly ExistIdEventRepository:ExistIdEventRepository
    ){}

    async delete(id:string):Promise <IEventEntity>{
        await this.ExistIdEventRepository.existsById(id)
        return this.DeleteEventRepositorie.delete(id)
    }
}