import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Hero } from '../hero/model';
import { User } from '../user/model';
import { UserFavoriteHero } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class UserFavoriteHeroService {
  
  async addHeroToFavs(user: User, hero: Hero) {
    let userFavHero;
    try {
      userFavHero = await UserFavoriteHero.create({  heroId: hero.id, userId: user.id });
    } catch (err) {
      console.log(err);
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, 'the hero already exist in the list of favorites')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return userFavHero;
  }

  getUserWithHeros(user: User) {
    return User.findByPk(user.id, { include: [{ model: UserFavoriteHero, include: [{ model: Hero }] }] });
  }

  removeFavHero(user: User, id: number) {
    return UserFavoriteHero.destroy({ where: { userId: user.id, heroId: id } });
  }

}
