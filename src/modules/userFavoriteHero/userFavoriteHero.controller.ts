import { Controller, Post, UseGuards, Request, Get, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Hero } from '../hero/model';
import { User } from '../user/model';
import { UserFavoriteHeroService } from './userFavoriteHero.service';

@Controller('api/fav-heroes')
@UseGuards(JwtAuthGuard)
export class UserFavoriteHeroController {
  
  constructor(private readonly userfavHero: UserFavoriteHeroService) {}  

  @Post()
  addFavHero(@Request() req) {
    const { user, body: hero }: {user: User, body: Hero} = req;
    return this.userfavHero.addHeroToFavs(user, hero);
  }

  @Get()
  async getHeroes(@Request() req) {
    const { user }: {user: User} = req;
    const userFind = await this.userfavHero.getUserWithHeros(user);
  
    return !userFind.favHero ? [] : userFind.favHero.map(fav => fav.favHero);
  }

  @Delete(':id')
  deleteFromFav(@Request() req,@Param('id') id) {
    return this.userfavHero.removeFavHero(req.user,id);
  }

}
