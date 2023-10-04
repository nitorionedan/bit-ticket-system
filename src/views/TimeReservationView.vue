<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from "vue-toastification";

const route = useRoute();
const sheetIdRef = ref(route.params.id);
const toast = useToast();

// create options for start time and end time
const startTimeOptions = createStartTimeOptions();
const selectedStartTimeRef = ref(startTimeOptions[0]);

const endTimeOptions = createEndTimeOptions();
const selectedEndTimeRef = ref(endTimeOptions[0]);

function zeroPad(num: number, places: number): String {
  // console.log(zeroPad(5, 2)); // "05"
  return String(num).padStart(places, '0');
}

function createStartTimeOptions(): String[] {
  const today = new Date();
  let startTime = new Date(today.getFullYear(), today.getMonth(), today.getDay(), 9, 0);
  const startTimeOptions = Array(25).fill('').map(() => {
    startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDay(), startTime.getHours(), startTime.getMinutes() + 30);
    return `${startTime.getHours()}:${zeroPad(startTime.getMinutes(), 2)}`;
  });

  return startTimeOptions;
}

function createEndTimeOptions(): String[] {
  const today = new Date();
  let endTime = new Date(today.getFullYear(), today.getMonth(), today.getDay(), 9, 30);
  const endTimeOptions = Array(25).fill('').map(() => {
    endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDay(), endTime.getHours(), endTime.getMinutes() + 30);
    return `${endTime.getHours()}:${zeroPad(endTime.getMinutes(), 2)}`;
  });

  return endTimeOptions;
}

function onClickReserveButton(): void {
  // const parsedStartTime = String(selectedStartTimeRef.value).match(/^(?<minutes>\d+):(?<seconds>\d+)$/);
  // let min = 0;
  // let sec = 0;
  // if (parsedStartTime !== null) {
  //   min = parseInt(parsedStartTime.groups!.minutes, 10);
  //   sec = parseInt(parsedStartTime.groups!.seconds, 10);
  // }

  const reservationTime = `${selectedStartTimeRef.value}-${selectedEndTimeRef.value}`;
  console.log(reservationTime);
  localStorage.setItem(sheetIdRef.value as string, reservationTime);
  toast.success(`${route.params.id}を${selectedStartTimeRef.value}-${selectedEndTimeRef.value}で予約しました。`)
}

function isReserved(): boolean {
  const item = localStorage.getItem(sheetIdRef.value as string);
  return item !== null;
}
</script>

<template>
  <div v-if="isReserved()">
    {{ sheetIdRef }}は予約済みです～
    <RouterLink to="/sheet-reservation">
      <button id="prev">席を選択する</button>
    </RouterLink>
  </div>
  <div v-else>
    <h1>{{ sheetIdRef }}席の予約時間</h1>
    <div class="time-select">
      <select v-model="selectedStartTimeRef">
        <option v-for="(option, index) in startTimeOptions" :key="`${option}_${index}`" :value="option">
          {{ option }}
        </option>
      </select>
      <p>~</p>
      <select v-model="selectedEndTimeRef">
        <option v-for="(option, index) in endTimeOptions" :key="`${option}_${index}`" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <RouterLink to="/">
      <button id="reserve" @click="onClickReserveButton">予約する</button>
    </RouterLink>
    <RouterLink to="/sheet-reservation">
      <button id="prev">席を選択する</button>
    </RouterLink>
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