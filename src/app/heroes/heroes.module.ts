import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { AppHeroesListComponent } from './components/list/app-heroes-list.component';


@NgModule({
  declarations: [
    HeroComponent,
    AppHeroesListComponent
  ],
  exports: [
    HeroComponent,
    AppHeroesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

 }
