<script setup lang="ts">
import { ref, onMounted, computed, inject } from "vue";
import Pocketbase from "pocketbase";
const pb = inject("pb") as Pocketbase;
const transactions = ref<any[]>([]);
const manualEntryAmount = ref(0);
const manualEntryGroupId = ref(null);
const groups = ref<any[]>([]);
const loading = ref(true);
let transactionSub;
const transactionSum = computed(() => transactions.value.reduce((acc,curr) => { return acc + curr.amount}, 0));
async function postManualEntry() {
  try {
    await pb.collection("transactions").create({
      group: manualEntryGroupId.value,
      amount: manualEntryAmount.value
    })
    manualEntryAmount.value = 0;
  } catch(e) {
    console.error(e);
  }
}
async function deleteEntry(id: string) {
    try {
        await pb.collection("transactions").delete(id);
    } catch(e) {
        console.error(e);
    }
}
onMounted(async () => {
  try {
    await pb.collection("users").authWithPassword("jera", "password");
    transactions.value = (await pb.collection("transactions").getList(1, 30, { expand: "group" })).items;
    groups.value = await pb.collection("groups").getFullList();
    pb.collection("transactions").subscribe("*", (e) => {
      if(e.action === "create") transactions.value.push(e.record);
      if(e.action === "delete") transactions.value = transactions.value.filter(t => t.id !== e.record.id);
    }, {expand: "group"})
    loading.value = false;
  } catch(e) {
    console.error(e)
  }
})
</script>

<template>
  <div>
    <h1>
      Transactions
    </h1>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        <table style="border: 1px solid black; padding: 4px">
      <thead>
        <th>Created</th>
        <th>Company</th>
        <th>Amount</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions">
          <td>{{ new Date(transaction.created).toLocaleString("sv-se") }}</td>
          <td>{{ transaction.expand.group.name }}</td>
          <td>{{ transaction.amount }}</td>
          <td @click="deleteEntry(transaction.id)" style="cursor: pointer;">❌</td>
        </tr>
        <tr>
          <td></td>
          <td>Summa</td>
          <td>
            {{ transactionSum.toLocaleString("sv-se") }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="input">
      <select v-model="manualEntryGroupId">
        <option v-for="group in groups" :value="group.id">
          {{ group.name }}
        </option>
      </select>
      <input style="text-align: end;" type="number" v-model="manualEntryAmount"> 
      <button @click="postManualEntry">Create</button>
    </div>
    </div>
    
  </div>
</template>

<style scoped>
table {
  margin-bottom: 16px;
}
th:first-of-type {
  text-align: start;
}
tr > *:nth-child(3) {
  text-align: end;
  padding-right: 8px;
}
tr:last-of-type > td:last-of-type {
  font-weight: 600;
}
td:nth-child(2) {
  padding-inline:16px
}
.input {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 2rem;
}
.input > input {
 width: 20%
}
.input > select {
  width: 60%
}
.input > button {
  width: 20%;
}
</style>
