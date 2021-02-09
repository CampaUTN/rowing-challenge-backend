import {
  Table,
  Column,
  Model,
  Unique,
  AutoIncrement,
  PrimaryKey, HasMany
} from 'sequelize-typescript';
import { UserFavoriteHero } from '../userFavoriteHero/model';

@Table({ tableName: 'User' })
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id' })
    id: number;

    @Column({ field: 'name' })
    name: string;

    @Column({ field: 'lastName' })
    lastName: string;

    @Unique
    @Column({ field: 'email' })
    email: string;
    
    @Column({ field: 'password' })
    password: string;
  
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

    getFullName() {
      return `${this.name} ${this.lastName}`;
    }
}
