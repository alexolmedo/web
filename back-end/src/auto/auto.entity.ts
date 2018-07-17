import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {ConductorEntity} from "../conductor/conductor.entity";

@Entity('auto')
export class AutoEntity {
    @PrimaryGeneratedColumn()
    idAuto: number;

    @Column({ length: 500 })
    nombreMarca: string;

    @Column({ length: 500 })
    colorUno: string;

    @Column({ length: 500 })
    colorDos: string;

    @Column({ length: 500 })
    nombreModelo: string;

    @Column('int')
    anio: number;

    @ManyToOne(
        type => ConductorEntity,
        conductor => conductor.autos
    )
    conductor: number;
}