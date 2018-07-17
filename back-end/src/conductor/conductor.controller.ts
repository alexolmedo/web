import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {ConductorService} from "./conductor.service";
import {ConductorEntity} from "./conductor.entity";


@Controller('Conductor')
export  class ConductorController {

    constructor(private _conductorService: ConductorService){

    }

    @Post()
    crearConductores() {
        return this._conductorService.crearConductores();
    }

    @Get()
    async listarTodos(@Res () response,
                      @Req () request) {
        const autores = await this._conductorService.listarTodos();
        if(Object.keys(autores).length === 0){
            return response.send({
                mensaje:'No existe ningun Conductor',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(autores);
        }
    }

    @Get('/:nombresBuscar')
    async buscarConductores(
        @Param() paramParams,
        @Res() response
    ) {
        const conductores = await this._conductorService.buscarAutores(paramParams.nombresBuscar);
        return response.status(202).send(conductores);
    }

}

