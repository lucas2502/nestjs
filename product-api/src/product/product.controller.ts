import { Controller, Post, Res, Body, HttpStatus, Get, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto'
import { ProductService } from './product.service'
import { Product } from './interfaces/product.interface'


@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ){}

    @Post('/create')
    async creteProduct(@Res() res, @Body() createProduct: CreateProductDTO){
        const data = await this.productService.createProduct(createProduct)

        return res.status(HttpStatus.OK).json({
            data
        })
    }

    @Get()
    async getAllproducts(@Res() res): Promise<Product[]>{
        const data = await this.productService.getProducts()

        if(!data){
            throw new NotFoundException('Does not existem intens')
        }

        return res.status(HttpStatus.OK).json({
            data
        })
    }

    @Get(':id')
    async getProductById(@Res() res, @Param('id') id: string): Promise<Product>{
        const data = await this.productService.getProduct(id)
        
        if(!data){
            throw new NotFoundException('This item does not exist')
        }

        return res.status(HttpStatus.OK).json({
            data
        })
    }

    @Put('update/:id')
    async updateProduct(
        @Res() res, 
        @Param('id') id: string, 
        @Body() product: CreateProductDTO
        ): Promise<Product>{
        const data = await this.productService.updateProduct(id, product)

        if(!data){
            throw new NotFoundException('This item does not exist')
        }

        return res.status(200).json({
            data
        })
    }
    
    @Delete(':id')
    async deleteProduct(@Res() res, @Param('id') id: string): Promise<Product>{
        const data = await this.productService.deleteProduct(id)

        if(!data){
            throw new NotFoundException('This item does not exist')
        }
        
        return res.status(200).json({
            data
        })
    }
}
