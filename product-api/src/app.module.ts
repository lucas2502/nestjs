import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://api:api@123@cluster0-0dcp5.mongodb.net/crud-nestjs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
