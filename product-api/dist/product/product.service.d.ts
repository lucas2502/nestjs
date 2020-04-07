import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    createProduct(createProduct: CreateProductDTO): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    updateProduct(id: string, updateProduct: CreateProductDTO): Promise<Product>;
}
