import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey
} from 'sequelize-typescript';

@Table({ tableName: 'Challenge' })
export class Challenge extends Model<Challenge> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' })
  id: number;  

  @Column({ field: 'title' })
  title: string;

  @Column({ field: 'description' })
  description: string;

  @Column({ field: 'date' })
  date: string;

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @Column({ field: 'deleted_at' })
  deletedAt: Date;
}
