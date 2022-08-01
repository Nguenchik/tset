export class ProductMapper {
  constructor(obj = {}) {
    this.id = obj.id || null;
    this.title = obj.N ?? null;
  }
}
