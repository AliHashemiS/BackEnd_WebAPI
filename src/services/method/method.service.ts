import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Method } from '../../models';

@Injectable()
export class MethodService {
    private userModel:Repository<Method>;

    constructor(private sequelize: Sequelize){
        this.userModel = this.sequelize.getRepository(Method)
    }

    async test(){
        const newMethod = await this.userModel.create<Method>({
            id_user:"1",
            id_category:"1",
            name:"sumar",
            description:"In this function you can add two numbers",
            code:"function sumar(a,b){return a+b}"
        });

        return newMethod;
    }
}
