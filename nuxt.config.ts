// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'BBM_ADMIN',
      meta: [
        {
          name: 'description',
          content: 'Admin V2.0',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
      ],
    },
  },

  runtimeConfig: {
    
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-quasar-ui',
     'nuxt-security',
  ],
  security: {
    corsHandler: {
      origin: '*',
      methods: '*',
    },
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': [
          "'self'",
          'data:',
          'http:',
          'https:;',
          'blob:',
          '*.google.com',
          '*.imgur.com',
          '*.googleapis.com',
          '*.cloudfront.net',
        ],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', 'http:', "'unsafe-inline'"],
        'upgrade-insecure-requests': true,
      },
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  quasar: {
    plugins: ['Notify', 'Dialog'],
  },
  plugins: [
    { src: '~/plugins/useThreejs.js', mode: 'client' },
    { src: '~/plugins/useVuetify.js', mode: 'client' },
    { src: '~/plugins/useBus.js', mode: 'client' },
    // { src: '~/plugins/usemysql.server.js' },
  ],

  css: ['vuetify/lib/styles/main.sass'],
  build: {
   
    transpile: ['vuetify'],
    
  },
});
