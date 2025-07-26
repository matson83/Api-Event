import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { EventDocument } from "../Schema/events.schema";

@Injectable()
export class ExistIdEventRepository{
    constructor(
        @InjectModel(Event.name) private readonly eventModel:Model<EventDocument>
    ){}

    async existsById(id: string): Promise<boolean> {

      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('ID inválido');
      }

    const event = await this.eventModel.findById(id);
    return event !== null;
  }
}