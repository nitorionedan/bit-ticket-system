<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
setTimeout(() => router.push('/'), 5000);
</script>

<template>
  <div>
    <h1>退席しますか？</h1>
    <RouterLink to="/complete-leaving"><button class="yes-button">はい</button></RouterLink>
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