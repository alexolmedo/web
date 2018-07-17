import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';
@Injectable()
export class AutoPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(valorAutoRequest: any,
              metadata: ArgumentMetadata){
        const {error} = Joi.
        validate(valorAutoRequest,
            this._schema)
        if(error){
            throw  new PeticionInvalidaException(
                {
                    erorr: error,
                    mensaje: 'Datos Incorrectos Auto',
                },
                10
            )
        } else{
            return valorAutoRequest;
        }
    }
}