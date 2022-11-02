import { Model } from "mongoose";
import { Idioma } from "./interface/idioma.interface";
import { CreateIdiomaDto } from "./dto/idioma.dto";
export declare class IdiomaService {
    private readonly idiomaModel;
    constructor(idiomaModel: Model<Idioma>);
    getIdiomas(): Promise<Idioma[]>;
    getIdioma(idiomaId: string): Promise<Idioma>;
    createIdioma(createIdiomaDto: CreateIdiomaDto): Promise<Idioma>;
    deleteIdioma(idiomaId: string): Promise<Idioma>;
    updateIdioma(idiomaId: string, createIdiomaDto: CreateIdiomaDto): Promise<Idioma>;
}
