import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path      : '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
