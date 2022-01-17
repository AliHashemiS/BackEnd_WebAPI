import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Method } from './method.model';
//import { DataTypes } from 'sequelize';

@Table({
  schema:'public',
  updatedAt:false,
  underscored:true
})
export class Category extends Model {
  
  @Column({allowNull:false})
  name: string;

  @HasMany(() => Method)
  methods: Method[];

}