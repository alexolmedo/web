import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConductorController} from "./conductor/conductor.controller";
import {AutoController} from "./auto/auto.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {ConductorService} from "./conductor/conductor.service";
import {AutoService} from "./auto/auto.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {ConductorEntity} from "./conductor/conductor.entity";
import {AutoEntity} from "./auto/auto.entity";
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'web.mysql.database.azure.com',
          port: 3306,
          username: 'alex@web',
          password: 'qwerty12345-',
          database: 'prueba',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          ssl :true
      }),
      TypeOrmModule.forFeature([UsuarioEntity, ConductorEntity, AutoEntity])
  ],
  controllers: [AppController, ConductorController, AutoController, AutorizacionController, UsuarioController],
  providers: [AppService, ConductorService, AutoService, UsuarioService],
})
export class AppModule {}
