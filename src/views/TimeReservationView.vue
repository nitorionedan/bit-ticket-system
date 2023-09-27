<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCookies } from 'vue3-cookies';
// Declare start and end time list
// const startTimeList = Array(13).map((_, i) => {
//   const today = new Date();
//   let date = new Date(today.getFullYear());

//   return `${i + 9}:00`;
// });
const route = useRoute();
console.log(`sheet id is ${route.params.id}`);
const sheetIdRef = ref(route.params.id);

const { cookies } = useCookies();
onMounted(() => {
  console.log('mounted');
  let my_cookie_value = cookies.get("myCoookie");
    console.log(my_cookie_value);
    cookies.set("myCoookie", "abcdefg");
});
</script>

<template>
  <div>
    <h1>{{ sheetIdRef }}席の予約時間</h1>
    <div class="time-select">
      <select>
        <option value="9:00">9:00</option>   <option value="9:30">9:30</option>
        <option value="10:00">10:00</option> <option value="10:30">10:30</option>
        <option value="11:00">11:00</option> <option value="11:30">11:30</option>
        <option value="12:00">12:00</option> <option value="12:30">12:30</option>
        <option value="13:00">13:00</option> <option value="13:30">13:30</option>
        <option value="14:00">14:00</option> <option value="14:30">14:30</option>
        <option value="15:00">15:00</option> <option value="15:30">15:30</option>
        <option value="16:00">16:00</option> <option value="16:30">16:30</option>
        <option value="17:00">17:00</option> <option value="17:30">17:30</option>
        <option value="18:00">18:00</option> <option value="18:30">18:30</option>
        <option value="19:00">19:00</option> <option value="19:30">19:30</option>
        <option value="20:00">20:00</option> <option value="20:30">20:30</option>
        <option value="21:00">21:00</option> <option value="21:30">21:30</option>
      </select>
      <p>~</p>
      <select>
        <option value="9:30">9:30</option>
        <option value="10:00">10:00</option> <option value="10:30">10:30</option>
        <option value="11:00">11:00</option> <option value="11:30">11:30</option>
        <option value="12:00">12:00</option> <option value="12:30">12:30</option>
        <option value="13:00">13:00</option> <option value="13:30">13:30</option>
        <option value="14:00">14:00</option> <option value="14:30">14:30</option>
        <option value="15:00">15:00</option> <option value="15:30">15:30</option>
        <option value="16:00">16:00</option> <option value="16:30">16:30</option>
        <option value="17:00">17:00</option> <option value="17:30">17:30</option>
        <option value="18:00">18:00</option> <option value="18:30">18:30</option>
        <option value="19:00">19:00</option> <option value="19:30">19:30</option>
        <option value="20:00">20:00</option> <option value="20:30">20:30</option>
        <option value="21:00">21:00</option> <option value="21:30">21:30</option>
        <option value="22:00">22:00</option>
      </select>
    </div>
    <RouterLink :to="{ name: 'reserve', params: { id: '9:00-9:30' } }">
      <button id="reserve">予約する</button>
    </RouterLink>
    <RouterLink to="sheet-reservation"><button id="prev">席を選択する</button></RouterLink>
  </div>
</template>

<style scoped>
div {
    text-align: center;
    font-size: 20px;
    padding: 20px;
}

div.time-select {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

select {
    width: 180px;
    height: 60px;
    font-size: 280%;
    text-align: center;
}

p {
    font-size: 40px;
    margin: 0;
}

button#reserve {
    width: 360px;
    height: 80px;
    margin-top: 180px;
    font-size: 25px;
}

button#prev {
    margin: 20px;
}
</style>