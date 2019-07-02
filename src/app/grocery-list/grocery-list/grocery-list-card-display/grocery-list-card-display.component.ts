import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroceryList } from '../../model/grocery-list';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PurchaseItem } from '../../model/purchase-item';

@Component({
  selector: 'app-grocery-list-card-display',
  templateUrl: './grocery-list-card-display.component.html',
  styleUrls: ['./grocery-list-card-display.component.scss']
})
export class GroceryListCardDisplayComponent implements OnInit {
  @Input() groceryList: GroceryList;
  @Input() connectedLists: string[];
  @Output() groceryListChange = new EventEmitter<GroceryList>();

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<PurchaseItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.groceryList.shoppingCart, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
