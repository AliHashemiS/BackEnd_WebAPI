import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { User } from './user.model';

@Table({
  schema:'public',
  updatedAt:false,
  underscored:true
})
export class Method extends Model {

  @ForeignKey(() => User)
  @Column({allowNull:false})
  id_user: number;

  @ForeignKey(() => Category)
  @Column({allowNull:false})
  id_category: number;
  
  @Column({allowNull:false, type:DataType.STRING(250)})
  name: string;

  @Column({allowNull:false,type:DataType.STRING(500)})
  description: string;

  @Column({allowNull:false,type:DataType.STRING(1000)})
  code: string;

}