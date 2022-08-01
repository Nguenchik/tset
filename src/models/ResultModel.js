export class ResultModel {
  constructor(obj) {
    this.category = obj.category ?? null;
    this.product = obj.product ?? null;
  }
}
