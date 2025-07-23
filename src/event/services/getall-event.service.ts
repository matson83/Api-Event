import { Injectable } from "@nestjs/common";

import { IEventEntity } from "../interfaces/IEventEntity";
import { GetAllRepositorie } from "../repositories/getAll-event.repositorie";

@Injectable()
export class GetAllService{
    constructor(
        private readonly GetAllRepositorie:GetAllRepositorie
    ){}

    async getAll(): Promise <IEventEntity[]>{
        return this.GetAllRepositorie.list();
    }
}