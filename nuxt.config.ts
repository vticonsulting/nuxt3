import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    vite: true,
    // css: [
    //     // windi preflight
    //     'virtual:windi-base.css',
    //     // your stylesheets which overrides the preflight
    //     // '@/css/main.css', 
    //     // windi extras
    //     'virtual:windi-components.css',
    //     'virtual:windi-utilities.css',
    // ],
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true }],
        '@vueuse/core/nuxt',
        'nuxt-windicss',
    ],
    windicss: {
        analyze: {
            analysis: {
                interpretUtilities: false,
            },
            // see https://github.com/unjs/listhen#options
            server: {
                port: 4444,
                open: false,
            }
        }
    }
})
