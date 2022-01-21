import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { User } from './user.model';

@Table({
  schema:'public',
  updatedAt:false,
  underscored:true
})
export class Method extends Model {
  
  @Column({allowNull:false, type:DataType.STRING(250)})
  name: string;

  @Column({allowNull:false,type:DataType.STRING(500)})
  description: string;

  @Column({allowNull:false,type:DataType.STRING(1000)})
  code: string;

  @ForeignKey(() => User)
  @Column
  id_user: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Category)
  @Column
  id_category: number;

  @BelongsTo(() => Category)
  category: User;
}