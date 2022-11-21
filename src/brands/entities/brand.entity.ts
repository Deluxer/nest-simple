import { IsString, IsUUID } from "class-validator";

export class Brand {

    @IsUUID()
    @IsString()
    id: string;
    name: string;

    createAt: number;
    updateAt?: number;

}
