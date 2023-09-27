<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const paramId = route.params.id;

localStorage.setItem('A1', 'reserved');
</script>

<template>
  {{ paramId }}で予約完了しましたー
  <RouterLink to="/">トップへ戻る</RouterLink>
</template>