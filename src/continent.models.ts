import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContinentDocument = Continent & Document;

@Schema()
export class Continent{
    @Prop()
    code: string ;

    @Prop()
    name: string ;
}

export const ContinentSchema = SchemaFactory.createForClass(Continent);