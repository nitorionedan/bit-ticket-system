<script setup lang="ts">
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const sheetId = route.params.id;

function onClickYesButton() {
  localStorage.removeItem(sheetId as string);
  
  toast.success(`${sheetId}を退席しました。`);  
}

function isAvairableSheet(sheetId: string): boolean {
  let item = localStorage.getItem(sheetId);
  return item === null;
}
</script>

<template>
  <div v-if="isAvairableSheet(sheetId as string)">
    この時間に予約がされていない席です。
    <RouterLink to="/choosing-leaving-sheet"><button>退席する席を選ぶ</button></RouterLink>    
  </div>
  <div v-else>
    <h1>退席しますか？</h1>
    <RouterLink to="/">
      <button class="yes-button" @click="onClickYesButton">はい</button>
    </RouterLink>
    <RouterLink to="/"><button class="no-button">いいえ</button></RouterLink>
  </div>
</template>

<style scoped>
div {
    text-align: center;
    font-size: 20px;
    padding: 180px;
}

button {
    font-size: 45px;
    color: black;
    width: 420px;
    height: 150px;
    margin: 60px;
    border-radius: 20px;
    border: none;
}

button.yes-button {
  background-color: aqua;
}

button.no-button {
  background-color: red;
}
</style>