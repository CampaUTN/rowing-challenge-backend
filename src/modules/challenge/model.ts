import {
  Table,
  Column,
  Model,
  Unique,
  AutoIncrement,
  PrimaryKey
} from 'sequelize-typescript';

@Table({ tableName: 'Challenge' })
export class Challenge extends Model<Challenge> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' })
  id: number;  

  @Unique
  @Column({ field: 'name' })
  name: string;

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @Column({ field: 'deleted_at' })
  deletedAt: Date;
}
