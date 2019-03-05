import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '@appContainers/heroes/heroes.component';
import { HeroesGuard } from '@appGuards/heroes.guard';
  
const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },

  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate: [HeroesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroesGuard]
})
export class AppRoutingModule {}
