import { Component, OnInit, Input } from '@angular/core';
import { GroceryList } from '../../model/grocery-list';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PurchaseItem } from '../../model/purchase-item';

@Component({
  selector: 'app-grocery-list-card-display',
  templateUrl: './grocery-list-card-display.component.html',
  styleUrls: ['./grocery-list-card-display.component.scss']
})
export class GroceryListCardDisplayComponent implements OnInit {
  @Input() groceryList: GroceryList;
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<PurchaseItem[]>) {
    console.log("test");
    moveItemInArray(this.groceryList.shoppingCart, event.previousIndex, event.currentIndex);
  }
}
