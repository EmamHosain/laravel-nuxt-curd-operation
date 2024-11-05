// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'NUXT 3 crud application',
      meta : [
        {charset: 'utf-8'},
        {name : 'viewport', content : 'width=device-width, initial-scale=1'},
       { name: 'description', content: 'NUXT 3 crud application.'}
      ],
      link: [
        {
          rel: 'icon',
          type : 'image/x-icon',
          href: 'favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        }
      ],

      script:[

      ],
      
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})