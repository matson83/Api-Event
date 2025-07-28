import { Injectable } from "@nestjs/common";
import { GetAllAuthRepositorie } from "../repositories/getAll-auth.repositorie";
import { IAuthEntity } from "../interfaces/IAuthEntity";

@Injectable()
export class GetAllAuthService{
    constructor(
        private readonly GetAllAuthRepositorie:GetAllAuthRepositorie
    ){}

    async getAll():Promise<IAuthEntity[]>{
        return this.GetAllAuthRepositorie.execute()
    }
}