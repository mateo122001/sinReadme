import { CreateIdiomaDto } from "./dto/idioma.dto";
import { IdiomaService } from "./idioma.service";
export declare class IdiomaController {
    private idiomaService;
    constructor(idiomaService: IdiomaService);
    createIdioma(res: any, createIdiomaDto: CreateIdiomaDto): Promise<any>;
    getIdiomas(res: any): Promise<any>;
    getIdioma(res: any, productId: any): Promise<any>;
}
