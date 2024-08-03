<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue';
import Transactions from './view/Transactions.vue';
import PocketBase from "pocketbase";
const URL = "http://127.0.0.1:8090"
const pb = new PocketBase(URL);
provide("pb", pb);
const authed = ref(false);
const username = ref("");
const password = ref("");
async function login() {
  await pb.collection("users").authWithPassword(username.value, password.value);
  authed.value = pb.authStore.isValid;
}
function logout() {
  pb.authStore.clear();
  authed.value = pb.authStore.isValid;
}
onMounted(() => {
  authed.value = pb.authStore.isValid;
})
</script>

<template>
  <div v-if="pb">
    <div v-if="authed">
      <button @click="logout">Exit</button>
      <Transactions />
    </div>
   <div v-else style="display: flex; flex-direction: column; gap: 8px;">
      Inte inloggad
      <input placeholder="username" v-model="username" />
      <input placeholder="password" v-model="password" type="password" @keyup.enter="login"/>
      <button @click="login">Log in</button>
   </div>
  </div>  
</template>