module.exports = {
    head: [
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/viz.js/2.1.2/viz.js',
            integrity: 'sha256-8RHyK+AFzq9iXwbFo2unqidwPbwHU5FFWe3RwkcVtuU=',
            crossorigin: 'anonymous',
            async: true,
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/viz.js/2.1.2/full.render.js',
            integrity: 'sha256-Ogqs510LFnekr9o7OLdpelaaAmNss9egQRTyzCqV2NQ=',
            crossorigin: 'anonymous',
            async: true,
        }],
    ],
    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'Birros',
            description: 'Site internet regroupant projets et pensées personnels'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Birros',
            description: 'Website with projects and personal thoughts'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Langues',
                label: 'Français',
                serviceWorker: {
                    updatePopup: {
                        message: "Nouveau contenu disponible.",
                        buttonText: "Rafraîchir"
                    }
                },
                nav: [
                    { text: 'Journal', link: '/journal/' },
                    { text: 'Projets', link: '/projects/' },
                    { text: 'Notes', link: '/notes/' },
                    { text: 'À propos', link: '/about' },
                ],
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Journal', link: '/en/journal/' },
                    { text: 'Projects', link: '/en/projects/' },
                    { text: 'Notes', link: '/en/notes/' },
                    { text: 'About', link: '/en/about' },
                ]
            }
        }
    },
    plugins: [
        ['vuepress-plugin-rss', {
            base_url: '/', // required
            site_url: 'https://birros.github.io', // required
            count: 20
        }]
    ]
}