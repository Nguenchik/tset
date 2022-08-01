<template>
  <div class="home">
    <List />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { useCurrency } from "@/composition/useCurrency";
import { useMapper } from "@/composition/useMapper";
import { randomNum } from "@/utils";
import { ref, watch } from "vue";

export default {
  name: "Home",
  components: {
    List,
  },
  setup() {
    const refreshTime = ref(1500);

    const { refreshCurrency } = useCurrency();
    const { start } = useMapper();
    start();
    refreshCurrency(randomNum(20, 80));

    setInterval(() => {
      start();
      refreshCurrency(randomNum(20, 80));
    }, refreshTime.value);

    return {
      refreshTime,
    };
  },
};
</script>
