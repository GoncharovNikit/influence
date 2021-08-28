<template>
  <div>
    <custom-form>
      <form-item :property="'email'" :v$="v$" @update="setUserEmail" />
      <form-item :property="'username'" :v$="v$" @update="setUserName" />
      <form-item :property="'password'" :v$="v$" @update="setUserPassword" />
      <form-item
        :property="'password_confirmation'"
        :v$="v$"
        @update="setUserPasswordConfirmation"
      />
      <custom-button @click="registerUser" :disabled="v$.$invalid"
        >Submit</custom-button
      >
      <div class="form-link">
        Already have an account?
        <strong @click="$router.push('/login')">Sign in</strong>
      </div>
    </custom-form>
  </div>
</template>
<script setup>
import CustomForm from "../components/FormPartials/CustomForm";
import FormItem from "../components/FormPartials/FormItem";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";

const store = useStore();
const user = computed(() => store.state.user.user);
const setUserEmail = (value) => store.commit("user/setUserEmail", value);
const setUserName = (value) => store.commit("user/setUserName", value);
const setUserPassword = (value) => store.commit("user/setUserPassword", value);
const setUserPasswordConfirmation = (value) =>
  store.commit("user/setUserPasswordConfirmation", value);
const registerUser = () => store.dispatch("user/registerUser");

const rules = computed(() => ({
  email: { required, email, max: maxLength(50) },
  username: {
    required,
    min: minLength(3),
    max: maxLength(30),
    username_validation: {
      $validator: (username) => {
        return !!username.match("^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{0,30}$")
          .length;
      },
      $message: "Enter correct username",
    },
  },
  password: {
    required,
    min: minLength(6),
    max: maxLength(40),
    password_validation: {
      $validator: (pass) => {
        return !!pass.match("^[^\\s\"'`]{0,40}$");
      },
      $message: "Enter correct password",
    },
  },
  password_confirmation: {
    required,
    max: maxLength(40),
    sameAsPassword: sameAs(computed(() => store.state.user.user.password)),
  },
}));

const v$ = useVuelidate(rules, user);

onMounted(() => {
  store.commit("user/clearUserData");
  store.commit("user/clearServerErrors");
});
</script>
<style>
</style>