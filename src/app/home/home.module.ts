import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class HomeModule { }
