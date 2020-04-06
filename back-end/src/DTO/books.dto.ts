import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumber, IsPositive, ArrayMinSize, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'
import { AuthorDTO } from './author.dto'


export class BookDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @Type(() => AuthorDTO)
    @ArrayMinSize(1)
    @IsNotEmptyObject({ each: true }) //Objeto não pdoer vazio
    @ValidateNested({ each: true}) //Também valide AuthorDTO
    readonly author: AuthorDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly language: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number;
}