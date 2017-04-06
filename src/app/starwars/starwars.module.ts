import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
