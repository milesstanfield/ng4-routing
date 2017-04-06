import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarwarsComponent } from './starwars.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [StarwarsComponent]
})
export class StarwarsRoutingModule { }
