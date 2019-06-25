import { CurrencyValue } from 'src/app/common/model/currency-value';

export class PurchaseItem {
    id: string;
    name: string;
    count: number;
    purchased: boolean;
    maximumPrice: CurrencyValue;
}
