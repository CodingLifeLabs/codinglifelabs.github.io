/* eslint-disable */
import getRoutes from "./utils/getRoutes";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // router: {
  //   base: '/codinglifelabs.github.io/'
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [
      {
        "data-ad-client": "ca-pub-9541881212090927",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        async: true
      },
    ],
    title: 'CodingLifeLabs Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '코딩라이프연구소 - A technology blog covering everything' },
      { hid: 'og:title', property: 'og:title', content: 'CodingLifeLabs' },
      { hid: 'og:description', property: 'og:description', content: '코딩라이프연구소 - A technology blog covering everything' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL},
      { name: 'google-site-verification', content: 'pGPwUnb0GIMq5VumbT-UkwxbkFLRKpB4tFOVGh6ZPfk' },
      { name: 'naver-site-verification', content: '29fc46a35be5db2b5bec3c81f34b25e7f6c75582' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['nuxt-canonical', { baseUrl: 'https://codinglifelabs.github.io' }]
  ],

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://codinglifelabs.github.io/sitemap.xml'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    markdown: {
      prism: {
        theme: false,
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },

  sitemap: {
    hostname: 'https://codinglifelabs.github.io',
    gzip: true,
    routes() {
      return getRoutes();
    },
  }

}
