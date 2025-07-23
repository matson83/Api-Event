import { Injectable } from "@nestjs/common";
import { GetIdRepositorie } from "../repositories/getId-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class GetIdService{
    constructor(
        private readonly GetIdRepositorie:GetIdRepositorie
    ){}

    async listId(id): Promise<IEventEntity>{
        return this.GetIdRepositorie.listById(id)
    }
}