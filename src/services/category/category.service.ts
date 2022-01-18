import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Category } from '../../models';

@Injectable()
export class CategoryService {
    private userModel:Repository<Category>;

    constructor(private sequelize: Sequelize){
        this.userModel = this.sequelize.getRepository(Category)
    }

    async test(){
        const newCategory = await this.userModel.create<Category>({
            name:"Mathematics"
        });

        return newCategory;
    }
}
