import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { BooksController } from './Controllers/Books/books.controller';
import { BooksService } from './Services/books/books.service';
import { BookRepository } from './db/Repository/book.repository';
import { BookSchema } from './db/Schema/book.schema';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://api:api@123@cluster0-0dcp5.mongodb.net/crud-nestjs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }), 
    MongooseModule.forFeature([
      { name: 'book', schema: BookSchema}
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
