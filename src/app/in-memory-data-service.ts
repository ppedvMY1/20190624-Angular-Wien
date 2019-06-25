import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GroceryList } from './grocery-list/model/grocery-list';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let groceryLists: GroceryList[] = [
            {
                shoppingCart: [{
                    id: '1',
                    name: 'Apfel',
                    count: 2,
                    purchased: false,
                    maximumPrice: { value: 100, symbol: 'EUR'}
                },
                {
                    id: '2',
                    name: 'Fahrrad',
                    count: 1,
                    purchased: false,
                    maximumPrice: { value: 30000, symbol: 'EUR'}
                }
            ],
                createdAt: '25-06-2019T11:00'
            },
            {
                shoppingCart: [{
                    id: '1',
                    name: 'Birne',
                    count: 3,
                    purchased: false,
                    maximumPrice: { value: 200, symbol: 'EUR'}
                },
                {
                    id: '2',
                    name: 'Nudeln',
                    count: 1,
                    purchased: false,
                    maximumPrice: { value: 200, symbol: 'EUR'}
                },
                {
                    id: '3',
                    name: 'Reis',
                    count: 1,
                    purchased: false,
                    maximumPrice: { value: 900, symbol: 'EUR'}
                }
            ],
                createdAt: '25-06-2019T11:00'
            }
        ];
        return {groceryLists};
    }
}
