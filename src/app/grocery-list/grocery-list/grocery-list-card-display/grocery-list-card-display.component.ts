import { Component, OnInit, Input } from '@angular/core';
import { GroceryList } from '../../model/grocery-list';

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

}
