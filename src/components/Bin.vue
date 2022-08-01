<template>
  <div class="bin">
    <div
      class="bin__current-value"
      :class="{
        'bin__current-value_down': isMore === -1,
        'bin__current-value_up': isMore === 1,
      }"
    >
      Текущий курс доллара - {{ current }}₽
    </div>
    <div class="bin__row">
      <div class="bin__col bin__col_50">Наименование товара</div>
      <div class="bin__col bin__col_20">Количество</div>
      <div class="bin__col bin__col_20">Цена</div>
      <div class="bin__col bin__col_10"></div>
    </div>
    <div class="bin__row" :key="item" v-for="item of bucket">
      <div class="bin__col bin__col_50">{{ item.title }}</div>
      <div class="bin__col bin__col_20">
        <input
          type="text"
          :value="item.quantity"
          @input="inputHandler(item, $event)"
        />
        <span class="bin__error" v-if="item.amount < item.quantity">
          Количество ограничено!({{ item.amount }})
        </span>
      </div>
      <div class="bin__col bin__col_20">
        {{ changePriceToRub(item.totalPrice) }}
      </div>
      <div @click="removeItem(item)" class="bin__col bin__col_10 bin__remove">
        удалить
      </div>
    </div>
    <div class="bin__total">Итог: {{ resultPrice }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useCurrency } from "@/composition/useCurrency";
import { changePriceToRub } from "@/utils";

export default {
  name: "Bin",
  setup() {
    const store = useStore();
    const { prev, current, isMore } = useCurrency();
    const removeItem = (item) => {
      store.commit("general/removeItem", item);
    };

    const inputHandler = (item, e) => {
      const val = e.target.value;
      if (val !== "") store.commit("general/changeBucket", { item, val });
    };

    const resultPrice = computed(() => {
      return store.state.general.bucket
        .reduce((a, b) => a + b.totalPrice * current.value, 0)
        .toFixed(2);
    });

    return {
      inputHandler,
      removeItem,
      bucket: computed(() => store.state.general.bucket),
      currentCurrencyValue: computed(
        () => store.state.general.currentCurrencyValue
      ),
      resultPrice,
      prev,
      current,
      isMore,
      changePriceToRub,
    };
  },
};
</script>

<style lang="scss" scoped>
.bin {
  margin: 50px 0;
  &__error {
    color: red;
  }
  &__current-value {
    &_up {
      color: red;
    }
    &_down {
      color: green;
    }
  }
  &__total {
    margin: 20px 0;
  }
  &__row {
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: rgba(128, 128, 128, 0.3) 1px solid;
  }
  &__remove {
    cursor: pointer;
  }
  &__col {
    &_10 {
      width: 10%;
    }
    &_20 {
      width: 20%;
    }
    &_50 {
      width: 50%;
    }
  }
}
</style>
