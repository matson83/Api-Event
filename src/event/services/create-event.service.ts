import { Injectable } from "@nestjs/common";
import { CreateEventRepositorie } from "../repositories/create-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { CreatedEventDto } from "../dto/created-event.dto";

@Injectable()
export class CreateEventService{
    constructor(
        private readonly CreateEventRepository:CreateEventRepositorie
    ){}

    async criarEvento(dto: CreatedEventDto): Promise<IEventEntity>{

        const newEvent = await this.CreateEventRepository.execute(dto);
        return newEvent

    }
}