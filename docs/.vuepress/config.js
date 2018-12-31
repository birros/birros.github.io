module.exports = {
    head: [
        // Katex
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css',
            integrity: 'sha256-BZ71u1P7NUocEN9mKkcAovn3q5JPm/r9xVyjWh/Kqrc=',
            crossorigin: 'anonymous',
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.js',
            integrity: 'sha256-q01RVaHUJiYq9aq0FwkI6GAmMtOmRgToK8aEHHm4Xl8=',
            crossorigin: 'anonymous',
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/contrib/auto-render.min.js',
            integrity: 'sha256-CiPSQ9n316ms9u5yYJ092wI+FeybXvesfbnOUvSRvYA=',
            crossorigin: 'anonymous',
        }],
        // Viz
        ['script', {}, `
            var _viz_loaded = false;
            var _viz_listeners = [];
            function _viz_onload () {
                _viz_loaded = true;
                _viz_listeners.forEach(function(callback) {
                    callback();
                })
                _viz_listeners = [];
            }
            function _viz_call_when_loaded(callback) {
                if (_viz_loaded) {
                    callback();
                } else {
                    _viz_listeners.push(callback);
                }
            }
        `],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/viz.js/2.1.2/viz.js',
            integrity: 'sha256-8RHyK+AFzq9iXwbFo2unqidwPbwHU5FFWe3RwkcVtuU=',
            crossorigin: 'anonymous',
            defer: true,
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/viz.js/2.1.2/full.render.js',
            integrity: 'sha256-Ogqs510LFnekr9o7OLdpelaaAmNss9egQRTyzCqV2NQ=',
            crossorigin: 'anonymous',
            defer: true,
            onload: '_viz_onload()',
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