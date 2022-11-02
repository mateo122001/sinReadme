"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaModule = void 0;
const common_1 = require("@nestjs/common");
const idioma_controller_1 = require("./idioma.controller");
const idioma_service_1 = require("./idioma.service");
const mongoose_1 = require("@nestjs/mongoose");
const idioma_schema_1 = require("./schema/idioma.schema");
let IdiomaModule = class IdiomaModule {
};
IdiomaModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: "Idioma", schema: idioma_schema_1.IdiomaSchema }
            ])],
        controllers: [idioma_controller_1.IdiomaController],
        providers: [idioma_service_1.IdiomaService]
    })
], IdiomaModule);
exports.IdiomaModule = IdiomaModule;
//# sourceMappingURL=idioma.module.js.map