import { Type } from '@angular/core';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import * as fromReducers from './reducers';

import { HeroEffects } from '@appStore/effects/hero.effects'; 

//import { RouterStateUrl } from '@appStore/router';

export interface State {
  hero: fromReducers.hero.State;
}

export const reducers: ActionReducerMap<State> = {
  hero: fromReducers.hero.reducer
};

export const effects = [HeroEffects];


