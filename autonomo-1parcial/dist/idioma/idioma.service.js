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
exports.IdiomaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let IdiomaService = class IdiomaService {
    constructor(idiomaModel) {
        this.idiomaModel = idiomaModel;
    }
    async getIdiomas() {
        const idiomas = await this.idiomaModel.find();
        return idiomas;
    }
    async getIdioma(idiomaId) {
        const idioma = await this.idiomaModel.findById(idiomaId);
        return idioma;
    }
    async createIdioma(createIdiomaDto) {
        const idioma = new this.idiomaModel(createIdiomaDto);
        return await idioma.save();
    }
    async deleteIdioma(idiomaId) {
        const deletedIdioma = await this.idiomaModel.findByIdAndDelete(idiomaId);
        return deletedIdioma;
    }
    async updateIdioma(idiomaId, createIdiomaDto) {
        const updatedIdioma = await this.idiomaModel.findByIdAndUpdate(idiomaId, createIdiomaDto, { new: true });
        return updatedIdioma;
    }
};
IdiomaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Idioma")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], IdiomaService);
exports.IdiomaService = IdiomaService;
//# sourceMappingURL=idioma.service.js.map