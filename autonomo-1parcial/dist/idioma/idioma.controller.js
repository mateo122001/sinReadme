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
exports.IdiomaController = void 0;
const common_1 = require("@nestjs/common");
const idioma_dto_1 = require("./dto/idioma.dto");
const idioma_service_1 = require("./idioma.service");
let IdiomaController = class IdiomaController {
    constructor(idiomaService) {
        this.idiomaService = idiomaService;
    }
    async createIdioma(res, createIdiomaDto) {
        const idioma = await this.idiomaService.createIdioma(createIdiomaDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Received",
            Idioma: idioma
        });
    }
    async getIdiomas(res) {
        const idiomas = await this.idiomaService.getIdiomas();
        return res.status(common_1.HttpStatus.OK).json({
            idiomas
        });
    }
    async getIdioma(res, productId) {
        const idioma = await this.idiomaService.getIdioma(productId);
        if (!idioma)
            throw new common_1.NotFoundException("El idioma no existe");
        return res.status(common_1.HttpStatus.OK).json({
            idioma
        });
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, idioma_dto_1.CreateIdiomaDto]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "createIdioma", null);
__decorate([
    (0, common_1.Get)("/get"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "getIdiomas", null);
__decorate([
    (0, common_1.Get)("/get/:productId"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IdiomaController.prototype, "getIdioma", null);
IdiomaController = __decorate([
    (0, common_1.Controller)('idioma'),
    __metadata("design:paramtypes", [idioma_service_1.IdiomaService])
], IdiomaController);
exports.IdiomaController = IdiomaController;
//# sourceMappingURL=idioma.controller.js.map