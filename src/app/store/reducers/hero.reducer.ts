import { Action } from '@ngrx/store';
import {
  EntityAdapter,
  createEntityAdapter,
  EntityState,
  Update
} from '@ngrx/entity';

import { Hero } from '@appModels/hero';
import { HeroActions, HeroActionTypes } from '@appStore/actions/hero.actions';

export interface State extends EntityState<Hero> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null, 
});

export function reducer(state = initialState, action: HeroActions): State {
  switch (action.type) {
    case HeroActionTypes.heroGetHeroes:
    case HeroActionTypes.heroAddHero:
      return {
        ...state,
        loading: true
      };

    case HeroActionTypes.heroGetHeroesSuccess:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    

    case HeroActionTypes.heroAddHeroSuccess:
      return adapter.addOne(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    default:
      return state;
  }
}

export const heroEntitySelectors = adapter.getSelectors();
