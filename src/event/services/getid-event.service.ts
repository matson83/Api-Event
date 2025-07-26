import { Injectable } from "@nestjs/common";
import { GetIdRepositorie } from "../repositories/getId-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExistIdEventRepository } from "../repositories/idExists-event.repositore";

@Injectable()
export class GetIdService{
    constructor(
        private readonly GetIdRepositorie:GetIdRepositorie,
        private readonly ExistIdEventRepository:ExistIdEventRepository
    ){}

    async listId(id): Promise<IEventEntity>{
        await this.ExistIdEventRepository.existsById(id)
        return this.GetIdRepositorie.listById(id)
    }
}