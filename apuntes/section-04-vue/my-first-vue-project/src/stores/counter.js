import { defineStore } from "pinia";

export const usePiniaStore = defineStore("tasks", {
  state: () => ({
    count: 0,
  }),
  actions: {
    changeCount(num) {
      return (this.count += num);
    },
  },
});
