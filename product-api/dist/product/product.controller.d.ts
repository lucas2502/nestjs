import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    creteProduct(res: any, createProduct: CreateProductDTO): Promise<any>;
    getAllproducts(res: any): Promise<Product[]>;
    getProductById(res: any, id: string): Promise<Product>;
    updateProduct(res: any, id: string, product: CreateProductDTO): Promise<Product>;
    deleteProduct(res: any, id: string): Promise<Product>;
}
