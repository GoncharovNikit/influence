<template>
  <button>
    <slot />
  </button>
</template>
<script>
export default {
  name: "custom-button",
};
</script>
<style>
button {
    padding: 7px 15px;
    background: rgb(114, 63, 114);
    color: wheat;
    cursor: pointer;
}
</style>