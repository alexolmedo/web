import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {AutoService} from "./auto.service";
import {AutoEntity} from "./auto.entity";

@Controller('Auto')
export class AutoController {

    constructor(private _autoService: AutoService){

    }

    @Post()
    crearAutos() {
        return this._autoService.crearAutos();
    }

    @Get()
    async listarTodos(@Res () response,
                      @Req () request) {
        const libros = await this._autoService.listarTodos();
        if(Object.keys(libros).length === 0){
            return response.send({
                mensaje:'No existe ningun Auto',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(libros);
        }
    }

    @Get('/:nombreBuscar')
    async buscarAutos(
        @Param() paramParams,
        @Res() response
    ) {
        const libros = await this._autoService.buscarAutos(paramParams.nombreBuscar);
        return response.status(202).send(libros);
    }

}