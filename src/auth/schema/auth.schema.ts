import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document , HydratedDocument } from "mongoose";


export type AuthDocument = HydratedDocument<Auth>

@Schema()
export class Auth extends Document{

    @Prop({required:true})
    email:string

    @Prop({required:true})
    password:string

}

export const AuthSchema = SchemaFactory.createForClass(Auth);