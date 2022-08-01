import { useStore } from "vuex";
import { ref } from "vue";
import { ResultModel } from "@/models/ResultModel";
import { createResult } from "@/utils";

const list = ref([]);

export const useMapper = () => {
  const store = useStore();

  const start = () => {
    const createList = () => {
      const result = [];
      const goods = store.state.general.goods;
      const names = store.state.general.names;
      const findTitle = (item) => {
        return names.find((el) => el.groupID === item.groupID).title;
      };
      const findProduct = (item) => {
        return names
          .map((el) => el.list.find((el) => el.id === item.productID))
          .find((el) => el !== undefined);
      };
      goods.forEach((item) => {
        const obj = {
          category: findTitle(item),
          product: findProduct(item),
        };
        result.push({ ...new ResultModel(obj), ...item });
      });
      return result;
    };

    store.dispatch("general/getProducts").then(() => {
      list.value = createResult(createList());
    });
  };
  return { list, start };
};
