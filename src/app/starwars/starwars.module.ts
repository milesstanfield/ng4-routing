import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule, routableComponents } from './starwars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ],
  declarations: [routableComponents]
})
export class StarwarsModule { }
