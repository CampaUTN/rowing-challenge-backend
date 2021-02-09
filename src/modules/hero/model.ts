import {
  Table,
  Column,
  Model,
  Unique,
  AutoIncrement,
  PrimaryKey, HasMany
} from 'sequelize-typescript';
import { UserFavoriteHero } from '../userFavoriteHero/model';

@Table({ tableName: 'Hero' })
export class Hero extends Model<Hero> {
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

  @HasMany(() => UserFavoriteHero, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks:    true
  })
  favHero: UserFavoriteHero[];
  
}
