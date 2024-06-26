// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@nuxtjs/stylelint-module'],
  runtimeConfig: {
    public: {
      mock: false,
    },
  },
});
