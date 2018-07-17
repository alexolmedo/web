import {Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {ConductorEntity} from "./conductor.entity";
import {ConductorData} from "./conductor.data";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ConductorService {

    constructor(
        @InjectRepository(ConductorEntity)
        private readonly _autorRepository: Repository<ConductorEntity>) {

    }

    crearConductores(){
        for(var autores in ConductorData) {
            const conductor = new ConductorEntity();
            conductor.nombres = ConductorData[autores].nombres;
            conductor.apellidos = ConductorData[autores].apellidos;
            conductor.fechaNacimiento = ConductorData[autores].fechaNacimiento;
            conductor.numeroAutos = ConductorData[autores].numeroAutos;
            conductor.licenciaValida = ConductorData[autores].licenciaValida;
            conductor.usuarios = ConductorData[autores].usuariosIdUsuario;
            this._autorRepository.save(conductor);
        }
        return this._autorRepository.find();
    }

    async listarTodos(): Promise<ConductorEntity[]> {
        return await this._autorRepository.find();
    }

    async buscarConductores(nombresBuscar: string): Promise<ConductorEntity[]> {
        return await this._autorRepository.find({ nombres: Like('%' + nombresBuscar + '%') });
    }

    /*obtenerUno(id) {
        const autorEncontrado = this.arregloAutores.find(conductor => conductor.id === id);
        return autorEncontrado;
    }*/

    /*editarUno(id, nombres, apellidos, fechaNacimiento, numeroAutos, licenciaValida) {
        let index = this.arregloAutores.findIndex(conductor => conductor.id === id);
        let autorEditado = this.arregloAutores[index];
        autorEditado.nombres = nombres;
        autorEditado.apellidos = apellidos;
        autorEditado.fechaNacimiento = fechaNacimiento;
        autorEditado.numeroAutos = numeroAutos;
        autorEditado.licenciaValida = licenciaValida;

        return autorEditado;
    }*/
}