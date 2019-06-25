import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryList } from '../model/grocery-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  constructor(public http: HttpClient) { }
  groceryListUrl = 'api/groceryLists';

  getGroceryLists(): Observable<GroceryList[]> {
    const url = this.groceryListUrl;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Alternativ:
    // const httpOptions = {
    //  headers: new HttpHeaders({
    //  'Content-Type': 'application/json'
    //  });
    // }


    return this.http.get<GroceryList[]>(url, {headers});
    // bei gleichem Namen ist diese Schreibweise nicht mehr notwendig
    // return this.http.get<GroceryList[]>(url, {headers: headers});
  }

  getGroceryList(id: string) {

  }
}
