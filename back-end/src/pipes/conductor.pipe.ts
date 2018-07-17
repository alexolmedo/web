import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class ConductorPipe implements PipeTransform{
    constructor (private readonly _schema){
    }

    transform(valorConductorRequest: any,
              metadata: ArgumentMetadata){
        const  {error}= Joi.validate(
            valorConductorRequest,
            this._schema);
        if(error){
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos Conductor',
                },
                10
            )
        }else{
            return valorConductorRequest;
        }
    }
}