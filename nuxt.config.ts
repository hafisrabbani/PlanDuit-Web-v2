// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    css: [
        '~/assets/css/style.min.css',
        '~/assets/css/custom.css',
    ],
    app:{
        head: {
            title: 'Planduit',
            titleTemplate: '%s - Planduit',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Planduit' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script:[
                { src: '/js/bootstrap.min.js', async: true },
                { src: '/js/popper.min.js', async: true },
                { src: '/js/wow.min.js', async: true },
                { src: '/js/main.js', async: true },
                { src: 'https://kit.fontawesome.com/1d954ea888.js', async: true },
                { src: '/js/loader.js', async: true },
                { src: '/js/jquery.min.js', async: true }
            ]
        }
    },
    runtimeConfig: {
        public: {
            APIBASEV1: 'https://backoffice.planduit.my.id/api/v1/',
        }
    }
})
