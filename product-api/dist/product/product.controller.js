"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_dto_1 = require("./dto/product.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async creteProduct(res, createProduct) {
        const data = await this.productService.createProduct(createProduct);
        return res.status(common_1.HttpStatus.OK).json({
            data
        });
    }
    async getAllproducts(res) {
        const data = await this.productService.getProducts();
        if (!data) {
            throw new common_1.NotFoundException('Does not existem intens');
        }
        return res.status(common_1.HttpStatus.OK).json({
            data
        });
    }
    async getProductById(res, id) {
        const data = await this.productService.getProduct(id);
        if (!data) {
            throw new common_1.NotFoundException('This item does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            data
        });
    }
    async updateProduct(res, id, product) {
        const data = await this.productService.updateProduct(id, product);
        if (!data) {
            throw new common_1.NotFoundException('This item does not exist');
        }
        return res.status(200).json({
            data
        });
    }
    async deleteProduct(res, id) {
        const data = await this.productService.deleteProduct(id);
        if (!data) {
            throw new common_1.NotFoundException('This item does not exist');
        }
        return res.status(200).json({
            data
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "creteProduct", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllproducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    common_1.Put('update/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map