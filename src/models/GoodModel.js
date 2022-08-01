import { useCurrency } from "@/composition/useCurrency";
const { current } = useCurrency();

export class GoodModel {
  constructor(obj = {}) {
    this.title = obj.title ?? null;
    this.groupID = obj.groupID ?? null;
    this.productID = obj.productID ?? null;
    this.priceUSD = obj.priceUSD ?? null;
    this.amount = obj.amount ?? null;
    this.currentValue = current;
    this.currentCurrency = obj.currentValue ?? null;
    this.quantity = obj.quantity ?? null;
  }

  get priceRU() {
    return this.priceUSD * this.currentValue;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set priceRU(val) {}
}
