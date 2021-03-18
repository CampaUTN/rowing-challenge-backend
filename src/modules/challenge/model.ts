import {
  Table,
  Column,
  Model,
  Unique,
  AutoIncrement,
<<<<<<< HEAD:src/modules/challenge/model.ts
  PrimaryKey
=======
  PrimaryKey,
>>>>>>> e8955ae537419e79f828880967fd2988bf03c4c5:src/modules/hero/model.ts
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
  date: Date;

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @Column({ field: 'deleted_at' })
  deletedAt: Date;
<<<<<<< HEAD:src/modules/challenge/model.ts
=======

  // @HasMany(() => UserFavoriteHero, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  //   hooks:    true
  // })
  // favHero: UserFavoriteHero[];
  
>>>>>>> e8955ae537419e79f828880967fd2988bf03c4c5:src/modules/hero/model.ts
}
