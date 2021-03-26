const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
})
