import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class updateCarDto {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString() 
    @IsOptional()
    readonly model?: string;

}