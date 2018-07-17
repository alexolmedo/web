import * as Joi from 'joi';

export const AUTO_SCHEMA = Joi
    .object()
    .keys({
        idAuto: Joi
            .number()
            .required()
            .integer(),
        nombreMarca: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorUno: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorDos: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        nombreModelo: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        anio: Joi
            .number()
            .required()
            .integer()
            .min(1900)
            .max(2030),
        conductor: Joi
            .number()
            .required()
            .integer(),
    });