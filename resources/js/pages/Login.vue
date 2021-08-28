<template>
  <div>
    <custom-form>
      <form-item :property="'username'" :v$="v$" @update="setUserName" />
      <form-item :property="'password'" :v$="v$" @update="setUserPassword" />
      <custom-button @click="loginUser" :disabled="v$.$invalid"
        >Login
      </custom-button>
      <div class="form-link">
        Don't have an account?
        <strong @click="$router.push('/registration')">Sing up</strong>
      </div>
    </custom-form>
  </div>
</template>
<script setup>
import useVuelidate from "@vuelidate/core";
import CustomForm from "../components/FormPartials/CustomForm";
import FormItem from "../components/FormPartials/FormItem";
import { required, maxLength } from "@vuelidate/validators";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.state.user.user);
const setUserName = (value) => store.commit("user/setUserName", value);
const setUserPassword = (value) => store.commit("user/setUserPassword", value);
const loginUser = () => store.dispatch("user/loginUser");

const v$ = useVuelidate(
  {
    username: { required, max: maxLength(30) },
    password: { required, max: maxLength(40) },
  },
  user
);

onMounted(() => {
  store.commit("user/clearUserData");
  store.commit("user/clearServerErrors");
});
</script>
<style>
</style>