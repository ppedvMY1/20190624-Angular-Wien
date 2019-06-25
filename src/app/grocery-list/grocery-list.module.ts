import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryListRoutingModule } from './grocery-list-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { DemoMaterialModule } from '../material-module';
import { GroceryListCardDisplayComponent } from './grocery-list/grocery-list-card-display/grocery-list-card-display.component';

@NgModule({
  declarations: [GroceryListComponent, GroceryListCardDisplayComponent],
  imports: [
    CommonModule,
    GroceryListRoutingModule,
    DemoMaterialModule
  ]
})
export class GroceryListModule { }
