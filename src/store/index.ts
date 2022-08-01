import { createStore } from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { general } from "@/store/general";

export default createStore({
  modules: {
    general,
  },
});
