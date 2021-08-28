<template>
  <div class="errors-wrapper">
    <transition-group name="list">
      <div v-for="(error, key) in errors" :key="error.$uid ?? key" class="error-msg">
        {{ error.$message }}
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "errors",
  props: {
    errors: {
      required: true,
    },
  },
};
</script>
<style scoped>
.error-msg {
  color: rgb(177, 0, 0);
  margin-top: 10px;
  padding-left: 10px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 200ms ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>