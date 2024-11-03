<template>
  <div
    class="login-form w-100per d-flex align-items-center justify-content-center"
  >
    <div class="d-inline-grid">
      <h1 class="mb-20p text-center">{{ $t('login_page.title.login') }}</h1>
      <FloatLabel variant="on">
        <InputText class="w-230p" id="on_label" v-model="email" />
        <label for="on_label">{{ $t('login_page.title.email') }}</label>
      </FloatLabel>

      <FloatLabel class="mt-20p" variant="on">
        <Password
          class="w-230p"
          v-model="password"
          inputId="on_label"
          :feedback="false"
          toggleMask
        />
        <label for="on_label">{{ $t('login_page.title.password') }}</label>
      </FloatLabel>
      <Button class="mt-20p" @click="login">{{
        $t('login_page.title.login')
      }}</Button>
      <router-link to="/" class="mt-20p text-center">{{
        $t('login_page.title.forget_password')
      }}</router-link>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  components: {
    InputText,
    Password,
    FloatLabel,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      API_URL: import.meta.env.VITE_APP_RAILS_API,
    }
  },
  computed: {
    ...mapGetters('CurrentUser', ['user']),
  },
  methods: {
    login() {
      const user = {
        email: 'test@nal.com',
        password: 'password123',
      }
      axios
        .post(`${this.API_URL}/api/v1/users/sign_in`, {
          user: user,
        })
        .then(res => {
          console.log('res: ', res)
        })
    },
  },
  mounted() {
    console.log('user: ', import.meta.env.VITE_APP_TEST)
  },
}
</script>

<style scoped>
.login-form {
  height: calc(100vh - 58px);
}
</style>
