import { ProductMapper } from "@/mapper/ProductMapper";
import { mergeId } from "@/utils";

export class NameMapper {
  constructor(obj = {}) {
    this.groupID = obj.groupId ?? null;
    this.title = obj.G ?? null;
    this.list = obj.B ? mergeId(obj.B, ProductMapper, "id") : null;
  }
}
