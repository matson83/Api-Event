import { Injectable, NotFoundException } from "@nestjs/common";
import { ExistIdEventRepository } from "../repositories/idExists-event.repositore";

@Injectable()

export class ExistIdEVentService{
    constructor(
        private readonly ExistIdEventRepository:ExistIdEventRepository
    ){}

    async checkExists(id: string): Promise<void> {
        const exists = await this.ExistIdEventRepository.existsById(id)

        if (!exists) {
        throw new NotFoundException(`Evento com o ID ${id} não encontrado`);
        }
  }
}