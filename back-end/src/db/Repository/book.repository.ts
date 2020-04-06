import { Injectable } from "@nestjs/common";
import { BookDTO } from "src/DTO/books.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Book } from "../Interface/books.interface";


@Injectable()
export class BookRepository {

    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ){}


    async saveBook(newBook: BookDTO): Promise<Book>{
        const saveBook = new this.bookModel(newBook)
        return await saveBook.save()
    }

    async getBookById(id: string): Promise<Book>{
        return await this.bookModel.findById(id, { __v: false })    
    }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookModel.find({}, {__v: false }).sort({ name: +1 }).exec() 
    }
    async updateBook(id: string, updateBook: BookDTO): Promise<Book>{
        return await this.bookModel.findByIdAndUpdate({ _id: id}, updateBook)
    }

    async deleteBook(id: string): Promise<Book>{
        return await this.bookModel.findByIdAndDelete({ _id: id })
    }
}