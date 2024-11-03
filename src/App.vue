<template>
  <header class="w-100per">
    <NarBar />
  </header>
  <body>
    <RouterView />
  </body>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NarBar from './views/nav/navBar.vue'
export default {
  components: {
    RouterLink,
    RouterView,
    NarBar,
  },
}
</script>

<style scoped></style>
