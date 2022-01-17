import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Method } from './method.model';
//import { DataTypes } from 'sequelize';

@Table({
  schema:'public',
  updatedAt:false,
  underscored:true
})
export class User extends Model {
  
  @Column({allowNull:false})
  email: string;

  @Column({allowNull:false})
  password: string;

  @HasMany(() => Method)
  methods: Method[];

}