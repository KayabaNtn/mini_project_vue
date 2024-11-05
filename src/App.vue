<template>
  <Toast />
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
import Toast from 'primevue/toast'
export default {
  components: {
    RouterLink,
    RouterView,
    NarBar,
    Toast,
  },
}
</script>

<style scoped></style>
