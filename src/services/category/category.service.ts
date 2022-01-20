import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Category } from '../../models';

@Injectable()
export class CategoryService {
    private categoryModel:Repository<Category>;

    constructor(private sequelize: Sequelize){
        this.categoryModel = this.sequelize.getRepository(Category)
    }

    async findAll(){
      return this.categoryModel.findAll();
    }
}
