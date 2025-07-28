import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Auth, AuthDocument } from "../schema/auth.schema";
import { Model } from "mongoose";
import { CreatedAuthDto } from "../dto/created-auth.dto";
import { IAuthEntity } from "../interfaces/IAuthEntity";

@Injectable()
export class CreateAuthRepositorie{
    constructor(
        @InjectModel(Auth.name) private readonly authModel:Model<AuthDocument>
    ){}

    async execute(dto:CreatedAuthDto): Promise<IAuthEntity>{
        const createdAuth = new this.authModel(dto);
        await createdAuth.save();
        return createdAuth.toObject();
    }
}