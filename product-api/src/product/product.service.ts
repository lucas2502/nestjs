import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Product } from './interfaces/product.interface'
import { CreateProductDTO } from './dto/product.dto' 
import { identity } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private productModel: Model<Product>
    ){}

    async getProducts(): Promise<Product[]>{
        const res = await this.productModel.find()
        return res
    }

    async getProduct(id: string): Promise<Product>{
        const res = await this.productModel.findById(id)
        return res;
    }

    async createProduct(createProduct: CreateProductDTO): Promise<Product>{
        const res = new this.productModel(createProduct)
        return await res.save()
    }

    async deleteProduct(id: string): Promise<Product>{
        const res =  await this.productModel.findByIdAndDelete(id)
        return res;
    }

    async updateProduct(id: string, updateProduct: CreateProductDTO): Promise<Product>{
        const res = await this.productModel.findByIdAndUpdate({_id: id}, updateProduct, { new: true})
        return res;
    }
}
