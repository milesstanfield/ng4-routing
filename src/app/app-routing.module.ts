import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'starwars', component: StarwarsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    StarwarsComponent
  ]
})
export class AppRoutingModule { }
