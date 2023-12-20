// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import '@/assets/css/tailwind.css'
import '@/assets/css/shiki.css'

import 'uno.css'

import { createApp } from 'vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara' //import preset

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara, //apply preset
})
app.mount('#app')
