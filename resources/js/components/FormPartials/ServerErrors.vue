<template>
  <div class="errors-wrapper">
    <div v-for="(error, key) in errors" :key="key" class="error-msg">
      {{ error[0] }}
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "server-errors",
  setup(props) {
    const store = useStore();
    const errors = computed(() => store.getters["user/errors"]);
    return {
      errors,
    };
  },
};
</script>
<style scoped>
.error-msg {
  color: rgb(177, 0, 0);
  margin-top: 10px;
  padding-left: 10px;
}
</style>