<script setup lang="ts">
</script>

<template>
  <div>
    <h1>学習スペース提供サイト</h1>
    <RouterLink to="/sheet-reservation">
      <button class="reservation-button">座席を予約する</button>
    </RouterLink>
    <RouterLink to="/choosing-leaving-sheet">
      <button class="leaving-button">退席する</button>
    </RouterLink>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  font-size: 20px;
  padding: 50px;
}

button {
  font-size: 45px;
  color: black;
  width: 420px;
  height: 150px;
  margin: 60px;
  margin-top: 180px;
  border-radius: 20px;
  border: none;
}

button.reservation-button {
  background-color: aqua;
}

button.leaving-button {
  background-color: red;
}
</style>