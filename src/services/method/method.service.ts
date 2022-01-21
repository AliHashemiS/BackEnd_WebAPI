import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Category, Method, User } from '../../models';

@Injectable()
export class MethodService {
  private userModel: Repository<Method>;
  private user: Repository<User>;

  constructor(private sequelize: Sequelize) {
    this.userModel = this.sequelize.getRepository(Method);
    this.user = this.sequelize.getRepository(User);
  }

  async createMethod(method: Method) {
    const methodCreated = await this.userModel.create(method, { returning: true });
    console.log(methodCreated);
    return methodCreated;
  }

  async findAll(query) {
    return await this.userModel.findAll({
      where: {
        [Op.or]: [
          { '$user.email$': { [Op.iLike]: `%${query.filter || "" }%`} },
          { '$category.name$': { [Op.iLike]: `%${query.filter || "" }%`} },
          { name: { [Op.iLike]: `%${query.filter || "" }%`} },
        ],
      },
      include: [User, Category]
    });
  }
}
