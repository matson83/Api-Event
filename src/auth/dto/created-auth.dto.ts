import { IsEmail, IsStrongPassword } from "class-validator";

export class CreatedAuthDto{
    @IsEmail()
    email:string

    @IsStrongPassword({
        minLength:6,
        minLowercase:0,
        minUppercase:0,
        minNumbers:0,
        minSymbols:0
    })
    password:string
}