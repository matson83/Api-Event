import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Auth, AuthDocument } from "../schema/auth.schema";
import { IAuthEntity } from "../interfaces/IAuthEntity";

@Injectable()
export class GetAllAuthRepositorie{
    constructor(
        @InjectModel(Auth.name) private authModel:Model<AuthDocument>
    ){}

    async execute():Promise<IAuthEntity[]>{
        const auths = await this.authModel.find().lean().exec()
        return auths.map((auth)=>({
            id:auth._id,
            email:auth.email,
            password:auth.password
        }))
    }
}