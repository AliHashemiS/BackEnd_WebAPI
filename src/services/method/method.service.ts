import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Method } from '../../models';

@Injectable()
export class MethodService {
    private userModel:Repository<Method>;

    constructor(private sequelize: Sequelize){
      this.userModel = this.sequelize.getRepository(Method)
    }

    async createMethod(method:Method){ 
      const methodCreated = await this.userModel.create(method,{returning:true});
      console.log(methodCreated);
      return methodCreated;
    }
}
