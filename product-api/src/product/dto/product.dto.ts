/**
 * Recebe/enviar
 * 
 */
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly description: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly imageURL: string;
    
    @IsNotEmpty()
    @IsNumber()
    @MinLength(1)
    @MaxLength(1000)
    readonly price: number;
    
    readonly createAt: Date;
}