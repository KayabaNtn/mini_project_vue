<template>
  <div class="card w-100per d-flex align-items-center justify-content-center">
    <Menubar :model="items" class="w-100per">
      <template #start>
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8"
        >
          <path
            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
            fill="var(--p-primary-color)"
          />
          <path
            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
            fill="var(--p-text-color)"
          />
        </svg>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root },
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="d-flex">
          <Select
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            :placeholder="this.$t('nar_bar.language')"
            class="w-full md:w-56 mr-10p w-158p"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="d-flex items-center">
                <img
                  :alt="slotProps.value.label"
                  :src="slotProps.value.image"
                  :class="`mr-10p mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                  style="width: 25px"
                />
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="d-flex items-center">
                <img
                  :alt="slotProps.option.label"
                  :src="slotProps.option.image"
                  :class="`mr-10p mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                  style="width: 25px"
                />
                <div>
                  {{ slotProps.option.name }}
                </div>
              </div>
            </template>
          </Select>
          <div class="card d-flex justify-content-center">
            <Button
              type="button"
              icon="pi pi-user"
              @click="toggle"
              aria-haspopup="true"
              aria-controls="overlay_menu"
            />
            <Menu
              ref="menu"
              id="overlay_menu"
              :model="itemsLogin"
              :popup="true"
            />
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Select from 'primevue/select'
import VueCookies from 'vue-cookies'

export default {
  components: {
    Menubar,
    Badge,
    Avatar,
    Button,
    Menu,
    Select,
  },
  data() {
    return {}
  },
  computed: {
    items() {
      return [
        {
          label: this.$t('nar_bar.home'),
          icon: 'pi pi-home',
          command: () => {
            this.$router.push('/')
          },
        },
        {
          label: this.$t('nar_bar.about_us'),
          icon: 'pi pi-info-circle',
        },
      ]
    },
    itemsLogin() {
      return [
        {
          label: this.$t('nar_bar.login'),
          icon: 'pi pi-sign-in',
          command: () => this.onMenuItemClick('login'),
        },
        {
          label: this.$t('nar_bar.logout'),
          icon: 'pi pi-sign-out',
          command: () => this.onMenuItemClick('logout'),
        },
      ]
    },

    selectedCountry: {
      get() {
        return this.countries.find(item => item.locale == this.$i18n.locale)
      },
      set(country) {
        VueCookies.set('locale', country.locale)
        this.$i18n.locale = country.locale
      },
    },
    countries() {
      return [
        {
          name: this.$t('nar_bar.english'),
          code: 'UK',
          image: '/src/assets/images/english_flag.png',
          locale: 'en',
        },
        {
          name: this.$t('nar_bar.vietnam'),
          code: 'VN',
          image: '/src/assets/images/vietnam_flag.png',
          locale: 'vi',
        },
      ]
    },
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event)
    },
    onMenuItemClick(action) {
      this.$router.push(action)
    },
  },
}
</script>
