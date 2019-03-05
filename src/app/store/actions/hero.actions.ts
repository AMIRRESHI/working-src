import { Action } from '@ngrx/store';

import { Hero } from '@appModels/hero';

export enum HeroActionTypes {
  heroGetHeroes = '[Hero] get',
  heroGetHeroesSuccess = '[Hero] get heroes success',
  heroAddHero = '[Hero] add hero',
  heroAddHeroSuccess = '[Hero] add hero success',
  //heroDeleteHero = '[Hero] delete hero',
  //heroDeleteHeroSuccess = '[Hero] delete hero success',
  //heroGetHeroById = '[Hero] get hero by id',
  //heroGetHeroByIdSuccess = '[Hero] get hero by id success',
  //heroUpdateHero = '[Hero] update hero',
  //heroUpdateHeroSuccess = '[Hero] update hero success',
  //heroSearchHeroes = '[Hero] search heroes',
  //heroSearchHeroesSuccess = '[Hero] search heroes success',
  //heroSearchHeroesReset = '[Hero] search heroes reset',
  heroError = '[Hero] error'
}

export class GetHeroes implements Action {
  readonly type = HeroActionTypes.heroGetHeroes;
}

export class GetHeroesSuccess implements Action {
  readonly type = HeroActionTypes.heroGetHeroesSuccess;
  constructor(public payload: Hero[]) {}
}

export class AddHero implements Action {
  readonly type = HeroActionTypes.heroAddHero;
  constructor(public payload: Hero) {}
}

export class AddHeroSuccess implements Action {
  readonly type = HeroActionTypes.heroAddHeroSuccess;
  constructor(public payload: Hero) {}
}


export class HeroError implements Action {
  readonly type = HeroActionTypes.heroError;
  constructor(public payload: any) {}
}

export type HeroActions =
  | GetHeroes
  | GetHeroesSuccess
  | AddHero
  | AddHeroSuccess
  | HeroError;
