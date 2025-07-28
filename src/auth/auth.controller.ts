import { Body, Controller, Post , Get} from '@nestjs/common';
import { CreatedAuthDto } from './dto/created-auth.dto';
import { IAuthEntity } from './interfaces/IAuthEntity';
import { CreateAuthService } from './services/create-auth.service';
import { GetAllAuthService } from './services/getAll-auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly CreateAuthService:CreateAuthService,
        private readonly GetAllAuthService:GetAllAuthService
    ){}

    @Post('create')
    async createAuth(@Body() dto:CreatedAuthDto ):Promise<IAuthEntity>{
        return this.CreateAuthService.createAuth(dto)
    }

    @Get('list')
    async getAll():Promise<IAuthEntity[]>{
        return this.GetAllAuthService.getAll()
    }
}
