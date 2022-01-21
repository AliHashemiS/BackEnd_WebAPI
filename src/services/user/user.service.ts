import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { User } from '../../models';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Injectable()
export class UserService {
  private userModel:Repository<User>;

  constructor(private sequelize: Sequelize){
    this.userModel = this.sequelize.getRepository(User)
  }

  async createUser(user:User){ 
    return { obj:await this.userModel.create(user,{returning:true}) };
  } 

  async findUser(data){
    return { obj:await this.userModel.findOne({
      where : {
        email: data.user_email, 
        password: data.user_password
      }
    }) };
  }
}
