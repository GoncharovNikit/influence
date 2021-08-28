<template>
  <form @submit.prevent>
    <slot></slot>
    <server-errors class="server-errors" />
  </form>
</template>
<script>
import ServerErrors from "./ServerErrors";
export default {
  components: { ServerErrors },
  name: "custom-form",
};
</script>
<style>
form {
  width: 37%;
  margin: 0 auto;
  margin-top: 180px;
  background-color: whitesmoke;
  padding: 30px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
form button {
  align-self: center;
  margin-top: 20px;
  width: 40%;
}
.form-link {
  align-self: center;
  margin-top: 20px;
}
form label {
  font-family: Arial, Helvetica, sans-serif;
}
form input {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11pt;
}
.server-errors {
    margin-top: 20px;
    padding-left: 10%;
}
</style>