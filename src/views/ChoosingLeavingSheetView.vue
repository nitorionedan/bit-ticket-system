<script setup lang="ts">
const sheetListA = Array(6).fill(0).map((_, i) => `A${i + 1}`);
const sheetListB = Array(6).fill(0).map((_, i) => `B${i + 1}`);
const sheetListC = Array(6).fill(0).map((_, i) => `C${i + 1}`);
const sheetListD = Array(6).fill(0).map((_, i) => `D${i + 1}`);
const redirectName = 'leaving-confirmation';

// collect all reserved sheet id.
let reservedSheetIds: String[] = [];
sheetListA.forEach(id => {
  const reservedInfo = localStorage.getItem(id);
  if (reservedInfo !== null) {
    reservedSheetIds.push(id);
  }  
});
sheetListB.forEach(id => {
  const reservedInfo = localStorage.getItem(id);
  if (reservedInfo !== null) {
    reservedSheetIds.push(id);
  }  
});
sheetListC.forEach(id => {
  const reservedInfo = localStorage.getItem(id);
  if (reservedInfo !== null) {
    reservedSheetIds.push(id);
  }  
});
sheetListD.forEach(id => {
  const reservedInfo = localStorage.getItem(id);
  if (reservedInfo !== null) {
    reservedSheetIds.push(id);
  }  
});

function isAvairable(sheetId: String): boolean {
  return !reservedSheetIds.includes(sheetId);
}
</script>

<template>
  <div>
    <h1>退席する座席を選択してください</h1>
    <table>
      <tr>
        <td v-for="(sheetId, index) in sheetListA" :key="index">
          <RouterLink :to="{name: redirectName, params: { id: sheetId }}">
            <button v-if="isAvairable(sheetId)" class="avairable-sheet" :id="sheetId">{{ sheetId }}</button>
            <button v-else :id="sheetId">{{ sheetId }}</button>
          </RouterLink>
        </td>
      </tr>
      <tr>
        <td v-for="(sheetId, index) in sheetListB" :key="index">
          <RouterLink :to="{name: redirectName, params: { id: sheetId }}">
            <button v-if="isAvairable(sheetId)" class="avairable-sheet" :id="sheetId">{{ sheetId }}</button>
            <button v-else :id="sheetId">{{ sheetId }}</button>
          </RouterLink>
        </td>
      </tr>
      <tr>
        <td v-for="(sheetId, index) in sheetListC" :key="index">
          <RouterLink :to="{name: redirectName, params: { id: sheetId }}">
            <button v-if="isAvairable(sheetId)" class="avairable-sheet" :id="sheetId">{{ sheetId }}</button>
            <button v-else :id="sheetId">{{ sheetId }}</button>
          </RouterLink>
        </td>
      </tr>
      <tr>
        <td v-for="(sheetId, index) in sheetListD" :key="index">
          <RouterLink :to="{name: redirectName, params: { id: sheetId }}">
            <button v-if="isAvairable(sheetId)" class="avairable-sheet" :id="sheetId">{{ sheetId }}</button>
            <button v-else :id="sheetId">{{ sheetId }}</button>
          </RouterLink>
        </td>
      </tr>
    </table>
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

#prevlink {
  margin: auto;
}

#prev {
    width: 80px;
    height: 35px;
}

.avairable-sheet {
  background-color: darkgrey;
}
</style>