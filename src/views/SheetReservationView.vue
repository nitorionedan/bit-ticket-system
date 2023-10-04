<script setup lang="ts">
const sheetListA = Array(6).fill(0).map((_, i) => `A${i + 1}`);
const sheetListB = Array(6).fill(0).map((_, i) => `B${i + 1}`);
const sheetListC = Array(6).fill(0).map((_, i) => `C${i + 1}`);
const sheetListD = Array(6).fill(0).map((_, i) => `D${i + 1}`);
</script>

<template>
  <div>
    <h1>予約する座席を選択してください</h1>
    <form action="時間予約.html" method="post">
      <table>
        <tr>
          <td v-for="(sheetId, index) in sheetListA" :key="index">
            <RouterLink :to="{name: 'time-reservation', params: { id: sheetId }}">
              <button :id="sheetId">{{ sheetId }}</button>
            </RouterLink>
          </td>
        </tr>
        <tr>
          <td v-for="(sheetId, index) in sheetListB" :key="index">
            <RouterLink :to="{name: 'time-reservation', params: { id: sheetId }}">
              <button :id="sheetId">{{ sheetId }}</button>
            </RouterLink>
          </td>
        </tr>
        <tr>
          <td v-for="(sheetId, index) in sheetListC" :key="index">
            <RouterLink :to="{name: 'time-reservation', params: { id: sheetId }}">
              <button :id="sheetId">{{ sheetId }}</button>
            </RouterLink>
          </td>
        </tr>
        <tr>
          <td v-for="(sheetId, index) in sheetListD" :key="index">
            <RouterLink :to="{name: 'time-reservation', params: { id: sheetId }}">
              <button :id="sheetId">{{ sheetId }}</button>
            </RouterLink>
          </td>
        </tr>
      </table>
    </form>
  </div>
  <div id="prevlink">
    <RouterLink to="/"><button id="prev">戻る</button></RouterLink>
  </div>
</template>

<style scoped>
div {
    text-align: center;
    font-size: 20px;
    padding: 20px;
}

table {
    margin: auto;
}

td button {
  width: 75px;
    height: 50px;
    margin: 20px;
}

input {
    width: 75px;
    height: 50px;
    margin: 20px;
}

#prevlink {
  margin: auto;
}

#prev {
    width: 80px;
    height: 35px;
}
</style>