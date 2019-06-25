import { Component, OnInit } from '@angular/core';
import { GroceryList } from '../model/grocery-list';
import { GroceryListService } from '../service/grocery-list.service';
import { LoggingService } from 'src/app/common/service/logging.service';
import { map, flatMap, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  groceryLists: GroceryList[];

  constructor(
    public groceryListService: GroceryListService,
    public loggingService: LoggingService
    ) { }

  ngOnInit() {
    this.groceryListService.getGroceryLists().pipe(
      map(result => {
        result.forEach(item => {
          for (const i of item.shoppingCart) {
            if (i.maximumPrice.symbol === 'EUR') {
              i.maximumPrice.value = i.maximumPrice.value / 100;
            }
          }
        });
        return result;
      })
    ).subscribe(result => {
      this.groceryLists = result;
    }, error => {
      this.loggingService.log('Error: Can\'t get grocery lists');
      this.loggingService.log(error);
    });
  }
}
