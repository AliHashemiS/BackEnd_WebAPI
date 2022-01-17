import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import {
  User,
  Category,
  Method
} from '../../models';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory{

  constructor(private _configService: ConfigService){}

  createSequelizeOptions(): SequelizeModuleOptions | Promise<SequelizeModuleOptions> {
    return {
      dialect: 'postgres',
      host: this._configService.get<string>('DB_HOST'),
      port: this._configService.get<number>('DB_PORT'),
      username: this._configService.get<string>('DB_USERNAME'),
      password: this._configService.get<string>('DB_PASSWORD'),
      database: this._configService.get<string>('DB_NAME'),
      synchronize:true,
      autoLoadModels:true,
      sync:{
        alter:true
      },
      models:[
        User,
        Category,
        Method
      ]
    };
  }



}
