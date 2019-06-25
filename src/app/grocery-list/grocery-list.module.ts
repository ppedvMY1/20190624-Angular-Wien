import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryListRoutingModule } from './grocery-list-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [GroceryListComponent],
  imports: [
    CommonModule,
    GroceryListRoutingModule
  ]
})
export class GroceryListModule { }
