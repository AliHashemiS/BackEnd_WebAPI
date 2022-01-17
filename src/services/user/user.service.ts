import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { User } from '../../models';

@Injectable()
export class UserService {
  private userModel:Repository<User>;

  constructor(private sequelize: Sequelize){
    this.userModel = this.sequelize.getRepository(User)
  }

  async test(){
    const newUser = await this.userModel.create<User>({
      email:"correo@prueba.com",
      password:"prueba"
    });

    return newUser;
  }

}
