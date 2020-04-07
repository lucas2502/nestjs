import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/crud-nestjs?authSource=admin', 
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    )
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
