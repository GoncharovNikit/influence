<template>
  <div class="wrapper">
    <div class="inner-text">404 | not found</div>
    <div @click="$router.go(-1)">Back</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  background: rgb(224, 224, 224);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-text {
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-size: 20pt;
  color: rgb(101, 116, 116);
}
</style>