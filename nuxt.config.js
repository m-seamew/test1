export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon'
      , type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  database: {
    emulatorPort: process.env.NODE_ENV === 'development' ? 9000 : undefined,
    emulatorHost: 'localhost',
  },*/


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/normalize.css',
    {src: '@/assets/scss/main.scss', lang: 'scss'}
  ],



  database: {
    emulatorPort: process.env.NODE_ENV === 'development' ? 9000 : undefined,
    emulatorHost: 'localhost',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/app-components.js', 
    '~plugins/vue-carousel.js',
    { src: '~plugins/vueLottie.js', mode: 'client'},
    { src: '~plugins/preloader-typer.js', mode: 'client'},
    { src: './plugins/flickity.js', ssr: false},
    { src: './plugins/videoplayer.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ["nuxt-compress",
    {
      gzip: {
        cache: true
      },
      brotli: {
        threshold: 10240
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-scrollto/nuxt',
    ['vue-wait/nuxt', { useVuex: true }],
    ['nuxt-font-loader-strategy', { 
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font
        {
          fileExtensions: ['woff'],
          fontFamily: 'Proxima Nova',
          fontFaces: [
            {
              preload: true,
              localSrc: ['Proxima Nova', 'ProximaNova-Regular'],
              src: '@/static/fonts/ProximaNova-Regular',
              fontWeight: 400,
              fontStyle: 'normal'
            },
            {
              preload: true,
              localSrc: ['Proxima Nova', 'ProximaNova-Bold'],
              src: '@/static/fonts/ProximaNova-Bold',
              fontWeight: 700,
              fontStyle: 'normal'
            }
          ]
        },
      ]
    }],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAyYdVfObDjuNmetodr18ncoXInS912qvA",
          authDomain: "bitbonexpert.firebaseapp.com",
          databaseURL: "https://bitbonexpert-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "bitbonexpert",
          storageBucket: "bitbonexpert.appspot.com",
          messagingSenderId: "963964787367",
          appId: "1:963964787367:web:375f5d7eb84dc35650d982"
        },
        services: {
          database: true,
        },
        lazy: true,
      }
    ],
    'nuxt-i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    vueI18nLoader: true,
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  
    },
    locales: [
      {
        code: 'ru',
        name: 'Русский',  
        iso: 'ru-Ru',
        file: 'ru.js',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js',
      }
    ],
    defaultLocale: 'ru',
    langDir:'assets/lang/',
    lazy:true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  //router: { middleware: ['cusstomroutes'] },
}
