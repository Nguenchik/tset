export class ProductModel {
  constructor(obj = {}) {
    this.id = obj.id ?? null;
    this.value = obj.value ?? null;
    this.title = obj.title ?? null;
  }
}
