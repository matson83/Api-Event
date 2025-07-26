import { IsString, IsNotEmpty, IsNumber, IsDate , Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatedEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'hour must be in HH:mm format (24h)',
  })
  hour: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
