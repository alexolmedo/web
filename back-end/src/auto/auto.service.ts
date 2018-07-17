import {Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {AutoEntity} from "./auto.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {AutoData} from "./auto.data";

@Injectable()
export class AutoService {

    constructor(
        @InjectRepository(AutoEntity)
        private readonly _autoRepository: Repository<AutoEntity>) {

    }

    crearAutos(){
        for(var autos in AutoData) {
            const auto = new AutoEntity();
            auto.nombreMarca = AutoData[autos].nombreMarca;
            auto.colorUno = AutoData[autos].colorUno;
            auto.colorDos = AutoData[autos].colorDos;
            auto.nombreModelo = AutoData[autos].nombreModelo;
            auto.anio = AutoData[autos].anio;
            auto.conductor = AutoData[autos].conductor;
            this._autoRepository.save(auto);
        }
        return this._autoRepository.find();
    }

    async listarTodos(): Promise<AutoEntity[]> {
        return await this._autoRepository.find();
    }

    async buscarAutos(nombreBuscar: string): Promise<AutoEntity[]> {
        return await this._autoRepository.find({ nombreModelo: Like('%' + nombreBuscar + '%') });
    }
}