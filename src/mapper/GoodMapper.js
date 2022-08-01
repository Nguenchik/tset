import { useCurrency } from "@/composition/useCurrency";
const { current } = useCurrency();
export class GoodMapper {
  constructor(obj = {}) {
    this.groupID = obj.G ?? null;
    this.productID = obj.T ?? null;
    this.priceUSD = obj.C ?? null;
    this.amount = obj.P ?? null;
    this.currentValue = current;
  }

  get priceRU() {
    return this.priceUSD * this.currentValue;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set priceRU(val) {}
}
