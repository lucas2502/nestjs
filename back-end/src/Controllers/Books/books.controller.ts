import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';
import { Book } from 'src/db/Interface/books.interface';

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService: BooksService
    ){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return await this.bookService.getAllBooks()
    }
    @Get('id/:id')
    async getBookById(@Param('id') id: string): Promise<Book>{
        return this.bookService.getBookById(id)
    }
    @Get('author/:authorName')
    async getBookByAuthorName(@Param('authorName') authorName: string): Promise<Book[]>{
        return await this.bookService.getBookByAuthorName(authorName)
    }

    @Get('name/:bookName')
    async getBookName(@Param('bookName') bookName: string): Promise<Book[]>{
        return await this.bookService.getBookName(bookName)
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<Book>{
        return await this.bookService.saveBook(newBook)
    }

    @Put(':id')
    async updateBookById(@Param('id') id: string, @Body() updateBook: BookDTO): Promise<Book>{
        return await this.bookService.updateBookById(id, updateBook)
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string): Promise<Book>{
        return  await this.bookService.deleteBook(id)
    }


}
