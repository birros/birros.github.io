module.exports = {
    head: [
        // Katex
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css',
            integrity: 'sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei',
            crossorigin: 'anonymous',
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js',
            integrity: 'sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq',
            crossorigin: 'anonymous',
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/contrib/auto-render.min.js',
            integrity: 'sha384-IiI65aU9ZYub2MY9zhtKd1H2ps7xxf+eb2YFG9lX6uRqpXCvBTOidPRCXCrQ++Uc',
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
            src: 'https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.2/viz-lite.js',
            integrity: 'sha384-7I9CqnucKexw7RtAdviz5UzxKS2JQk7Ntdwol3AhvZ+eOPeR3mRmNPkETnm2HWy/',
            crossorigin: 'anonymous',
            async: true,
            onload: '_viz_onload()',
        }]
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