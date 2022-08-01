import { fetchProducts } from "@/api/services/generalAPI";
import { GoodMapper } from "@/mapper/GoodMapper";
import { NameMapper } from "@/mapper/NameMapper";
import { mergeId } from "@/utils";

export const general = {
  namespaced: true,
  state: () => ({
    goods: [],
    names: [],
    bucket: [],
    currentCurrencyValue: 0,
    prevCurrencyValue: 0,
  }),
  mutations: {
    setGoods(state, list) {
      state.goods = list;
    },
    setNames(state, list) {
      state.names = list;
    },
    addToBucket(state, item) {
      let found = state.bucket.find(
        (product) => product.productID === item.productID
      );

      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.priceUSD;
      } else {
        state.bucket.push(item);
        item.quantity = 1;
        item.totalPrice = item.priceUSD;
      }
    },
    changeBucket(state, { item, val }) {
      const index = state.bucket.indexOf(item);
      const currentProduct = state.bucket[index];
      currentProduct.quantity = parseInt(val);
      currentProduct.totalPrice =
        currentProduct.quantity * currentProduct.priceUSD;
    },
    removeItem(state, item) {
      let index = state.bucket.indexOf(item);
      if (index > -1) {
        state.bucket.splice(index, 1);
      }
    },
  },
  actions: {
    async getProducts({ commit }) {
      return fetchProducts().then((res) => {
        const [Goods, Names] = res;
        const goods = Goods.Value.Goods.map((item) => new GoodMapper(item));
        const names = mergeId(Names, NameMapper, "groupId");

        commit("setGoods", goods);
        commit("setNames", names);
        return res;
      });
    },
    async addItem({ commit }, item) {
      commit("addToBucket", item);
    },
  },
  getters: {},
};
