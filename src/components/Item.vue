<template>
  <div class="item" @click="addItem">
    <div class="item__title">{{ product.title }}({{ product.amount }})</div>
    <div class="item__value">{{ changePriceToRub(product.priceUSD) }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { changePriceToRub } from "@/utils";

export default {
  name: "Item",
  props: {
    product: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {},
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    const addItem = () => {
      store.dispatch("general/addItem", props.product);
    };
    return {
      addItem,
      changePriceToRub,
    };
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  text-align: left;
  font-size: 11px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.12);
    transform: scale(1.015);
  }
  &:active {
    transform: scale(1);
  }
  &_up {
  }
  &_down {
  }
  &__title {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__value {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    background-color: rgba(128, 128, 128, 0.45);
    color: black;
  }
}
</style>
