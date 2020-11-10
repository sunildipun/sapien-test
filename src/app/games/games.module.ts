import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';


@NgModule({
  declarations: [GamesListComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
