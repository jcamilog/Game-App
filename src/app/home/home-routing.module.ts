import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

// TODO: This file have 2 spaces should there is only unique way. (use editorconfig and prettier)
const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: ':id',
      component: GameDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
