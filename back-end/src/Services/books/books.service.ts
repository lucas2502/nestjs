import { Injectable, BadRequestException } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/db/Repository/book.repository';
import { Book } from 'src/db/Interface/books.interface';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ){}
    
    async getAllBooks(): Promise<Book[]>{
        const allBooks = await this.bookRepository.getAllBooks()
        
        if(!allBooks){
            throw new BadRequestException('There are no books registred yet')
        }

        return allBooks
    }

    async getBookById(id: string): Promise<Book>{
        try {
            return await this.bookRepository.getBookById(id) 
        } catch (erro) {
            throw new BadRequestException('There are no exist')
        }
    }

    async getBookByAuthorName(authorName: string): Promise<Book[]>{
        try {
            const splitedAuthorName = authorName.split(' ')
            return await this.bookRepository.getBookByAuthorName(splitedAuthorName)
        } catch (err) {
            throw new BadRequestException('Erro, is not exist result witch this search')
        }
    }

    async getBookName(bookName: string): Promise<Book[]>{
        try{
            return await this.bookRepository.getBookName(bookName)
        } catch (err) {
            throw new BadRequestException('Erro, is not exist result witch this search')
        }
    }

    async saveBook(newBook: BookDTO): Promise<Book>{
        return await this.bookRepository.saveBook(newBook)
    }
    async updateBookById(id: string, updateBook: BookDTO): Promise<Book>{
        try {
            const book =  await this.bookRepository.getBookById(id)
            
            if(!book){
                throw new BadRequestException('Erro is not exist result witch this id')    
            } else {
                return await this.bookRepository.updateBookById(id, updateBook)
            }
        } catch (err) {
            throw new BadRequestException('Erro to update')
        }

    }

    async deleteBook(id: string): Promise<Book>{
        try {
            const book =  await this.bookRepository.getBookById(id)
            
            if(!book){
                throw new BadRequestException('Erro is not exist result witch this id')
            } else {
                return await this.bookRepository.deleteBook(id)
            } 
        } catch (erro) {
            throw new BadRequestException('Erro try delete');
            
        }
    }
}
