<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/sheetselecting">Sheet Selecting</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
