import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Hero } from '@appModels/hero';

import * as fromReducer from '@appStore/reducers';
import * as fromSelectors from '@appStore/selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<fromReducer.hero.State>) {}

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(fromSelectors.getHeroes));
  }

  

  
}
