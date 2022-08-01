import { computed, ref } from "vue";

const prev = ref(0);
const current = ref(0);
export const useCurrency = () => {
  const refreshCurrency = (val) => {
    prev.value = current.value;
    current.value = val;
  };

  const isMore = computed(() => {
    if (prev.value !== 0 && prev.value < current.value) {
      return 1;
    } else if (prev.value !== 0 && prev.value > current.value) {
      return -1;
    } else {
      return 0;
    }
  });

  return {
    prev,
    current,
    refreshCurrency,
    isMore,
  };
};
