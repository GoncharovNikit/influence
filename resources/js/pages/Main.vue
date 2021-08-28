<template>
  <div class="main-wrapper" v-cloak>
    <div v-if="isAuthorized">
      <h1>HELLLO Dear USER</h1>
    </div>
    <div v-else>
      <h1>Firstly <u @click="$router.push('/login')">sing in</u></h1>
    </div>
    <div class="test-btns">
      <button @click="profile">My profile</button>
      <button @click="refresh">Test Refresh</button>
      <button @click="logout">Test Logout</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isAuthorized = computed(() => store.state.user.isAuthorized);
const profile = () => store.dispatch("user/profile");
const refresh = () => store.dispatch("user/refreshToken");
const logout = () => store.dispatch("user/logoutUser");

onMounted(() => {
  // console.log(store.state.user.);
});
</script>
<style>
[v-cloak] { display: none; }
</style>