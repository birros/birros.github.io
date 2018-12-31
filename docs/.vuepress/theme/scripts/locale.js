function parseLocales(locales) {
    return Object.keys(locales).map(key => {
        return {
            prefix: key,
            locale: locales[key].lang,
        }
    })
}

function getLocale(pagePath, locales) {
    // clone locales
    const pLocales = locales.map(obj => {
        return Object.assign({}, obj)
    })
    
    // sort locales
    pLocales.sort((a, b) => {
        return b.prefix.length - a.prefix.length;
    })

    // return locale
    for(let i = 0; i < pLocales.length; i++) {
        if (pagePath.startsWith(pLocales[i].prefix)) {
        return pLocales[i].locale;
        }
    }
    return 'en-US';
}

export {
    parseLocales,
    getLocale,
}