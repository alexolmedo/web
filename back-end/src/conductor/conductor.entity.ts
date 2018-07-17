import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {AutoEntity} from "../auto/auto.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('conductor')
export class ConductorEntity {
    @PrimaryGeneratedColumn()
    idConductor: number;

    @Column({ length: 500 })
    nombres: string;

    @Column({ length: 500 })
    apellidos: string;

    @Column({ length: 10 })
    fechaNacimiento: string;

    @Column('int')
    numeroAutos: number;

    @Column()
    licenciaValida: boolean;

    @OneToMany(
        type => AutoEntity,
        auto => auto.conductor
    )
    autos: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.autores
    )
    usuarios: number;
}