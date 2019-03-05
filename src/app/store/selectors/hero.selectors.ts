import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducers from '@appStore/reducers';

export const getHeroStore = createFeatureSelector('hero');

export const getHeroEntities = createSelector(
  getHeroStore,
  fromReducers.hero.heroEntitySelectors.selectAll
);

export const getHeroes = createSelector(getHeroEntities, entities => {
  return Object.values(entities);
});

 

export const getHeroesLoaded = createSelector(
  getHeroStore,
  (heroStore: fromReducers.hero.State) => heroStore.loaded
);

export const getHeroesLoading = createSelector(
  getHeroStore,
  (heroStore: fromReducers.hero.State) => heroStore.loading
);

 
 

 
 
