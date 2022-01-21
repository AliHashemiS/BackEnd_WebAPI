import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Category, Method, User } from '../../models';

@Injectable()
export class MethodService {
    private methodModel:Repository<Method>;

    constructor(private sequelize: Sequelize){
        this.methodModel = this.sequelize.getRepository(Method)
    }

    async createMethod(method: Method) {
        return { obj:await this.methodModel.create(method, { returning: true }) };
    }

    async findAll(){
        return { obj:await this.methodModel.findAll({
            include: [
                {
                    model:User,
                    attributes:['email']
                },
                {
                    model:Category,
                    attributes:['name']
                }
            ]
        }) };
    }

    async findWithFilter(data) {
        return { obj:await this.methodModel.findAll({
            where: {
            [Op.or]: [
                { '$user.email$': { [Op.iLike]: `%${data.filter || "" }%`} },
                { '$category.name$': { [Op.iLike]: `%${data.filter || "" }%`} },
                { name: { [Op.iLike]: `%${data.filter || "" }%`} },
            ],
            },
            include: [
                {
                    model:User,
                    attributes:['email']
                },
                {
                    model:Category,
                    attributes:['name']
                }
            ]
        }) };
    }

    async findOne(id){
        const method = await this.methodModel.findOne({where:{id:id},attributes:["code"]});
        return method.code;
    }
}
