import { Injectable } from "@nestjs/common";
import { GetIdRepositorie } from "../repositories/getId-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExistIdEVentService } from "./idExists-event.service";


@Injectable()
export class GetIdService{
    constructor(
        private readonly GetIdRepositorie:GetIdRepositorie,
        private readonly ExistIdEventService:ExistIdEVentService
    ){}

    async listId(id): Promise<IEventEntity>{
        await this.ExistIdEventService.checkExists(id)
        return this.GetIdRepositorie.listById(id)
    }
}