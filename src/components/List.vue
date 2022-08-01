<template>
  <div class="example">
    <div class="example__list">
      <div class="example__item" :key="index" v-for="(item, index) of list">
        <div class="example__title">{{ item.category }}</div>
        <div class="example__row">
          <div class="example__col" :key="i" v-for="(elem, i) of item.products">
            <Item :product="elem" />
          </div>
        </div>
      </div>
    </div>
    <Bin />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Bin from "@/components/Bin.vue";
import { useMapper } from "@/composition/useMapper";

export default {
  name: "List",
  components: {
    Item,
    Bin,
  },
  setup() {
    const { list } = useMapper();
    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.example {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__item {
    border-radius: 5px;
    width: calc(50% - 10px);
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
  }
  &__col {
    width: 50%;
  }
  &__title {
    margin: 20px 0;
  }
  &__item {
    padding: 30px 0;
    border: 2px solid #2c3e50;
  }
}
</style>
