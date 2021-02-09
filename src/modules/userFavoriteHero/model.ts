import {
  Table,
  Column,
  Model,
  ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Hero } from '../hero/model';
import { User } from '../user/model';
  
@Table({ tableName: 'UserFavoriteHero' })
export class UserFavoriteHero extends Model<UserFavoriteHero> {
  
    @ForeignKey(() => User)
    @Column({ field: 'user_id' })
    userId: number;
   
    @ForeignKey(() => Hero)
    @Column({ field: 'hero_id' })
    heroId: number;

    @BelongsTo(() => Hero)
    favHero: Hero;

    @BelongsTo(() => User)
    user: User;
    
    @Column({ field: 'created_at' })
    createdAt: Date;
    
    @Column({ field: 'updated_at' })
    updatedAt: Date;
    
    @Column({ field: 'deleted_at' })
    deletedAt: Date;
  
}
  
