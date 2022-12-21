import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  job: string;

  @Column
  salary: number;

  @Column
  type: string;
}