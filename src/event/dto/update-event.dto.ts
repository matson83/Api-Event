import { PartialType } from "@nestjs/mapped-types";
import { CreatedEventDto } from "./created-event.dto";

export class UpdateEventDto extends PartialType(CreatedEventDto){

}