import { Injectable } from "@nestjs/common";
import { CreateAuthRepositorie } from "../repositories/create-auth.repositories";
import { CreatedAuthDto } from "../dto/created-auth.dto";
import { IAuthEntity } from "../interfaces/IAuthEntity";

@Injectable()
export class CreateAuthService{
    constructor(
        private readonly CreateAuthRepositorie:CreateAuthRepositorie
    ){}

    async createAuth(dto:CreatedAuthDto):Promise<IAuthEntity>{
        const newAuth = this.CreateAuthRepositorie.execute(dto);
        return newAuth;
    }
}