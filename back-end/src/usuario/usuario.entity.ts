import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ConductorEntity} from "../conductor/conductor.entity";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({ length: 500 })
    user: string;

    @Column({ length: 500 })
    password: string;

    @Column({ length: 500 })
    nombreUsuario: string;

    @Column({ length: 500 })
    apellidoUsuario: string;

    @OneToMany(
        type => ConductorEntity,
        autor => autor.usuarios
    )

    autores: number;
}