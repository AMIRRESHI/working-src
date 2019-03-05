import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, tap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  HeroActionTypes,
  GetHeroesSuccess,
  HeroError
} from '@appStore/actions/hero.actions';
import { HeroService } from '@appServices/hero.service';
 

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  @Effect()
  loadHeroes$ = this.actions$.pipe(
    ofType(HeroActionTypes.heroGetHeroes),
    switchMap(() =>
      this.heroService
        .getHeroes()
        .pipe(
          map(heroes => new GetHeroesSuccess(heroes)),
          catchError(error => of(new HeroError(error)))
        )
    )
  );
 
}
