<template>
  <div>
    <preloader />
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("user/profile");
  },
};
</script>
<style>
.form-link strong {
  cursor: pointer;
}
</style>