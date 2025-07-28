import { Body, Controller, Post } from '@nestjs/common';
import { CreatedAuthDto } from './dto/created-auth.dto';
import { IAuthEntity } from './interfaces/IAuthEntity';
import { CreateAuthService } from './services/create-auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly CreateAuthService:CreateAuthService
    ){}

    @Post('create')
    async createAuth(@Body() dto:CreatedAuthDto ):Promise<IAuthEntity>{
        return this.CreateAuthService.createAuth(dto)
    }
}
