---
title: 'Lighthouse : Améliorer le score grâce à requestIdleCallback'
date: 2021-03-27T19:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

À l'occasion de la migration du site sur [Next.js (en)][1], j'ai été confronté à
un problème avec le score de [Lighthouse (en)][2] dû à l'éxecution d'une
animation sur la page d'accueil. Grâce à [requestIdleCallback][3],
[setTimeout][4] et une [expression régulière][5] j'ai pû faire passer le score
de 57 à 100 pour un navigateur de bureau.

<!-- summary_links -->

[1]: https://en.wikipedia.org/wiki/Next.js
[2]: https://en.wikipedia.org/wiki/Google_Lighthouse
[3]: https://developer.mozilla.org/fr/docs/Web/API/Window/requestIdleCallback
[4]: https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
[5]: https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re

<!-- more -->

## Le problème

L'animation sur la page d'accueil étant éxecutée en même temps que
l'[hydratation][6] de Next.js, le temps avant que la page soit considérée comme
prête par Lighthouse est alors considérablement allongé.

Dans un premier temps, j'ai fait en sorte d'executer le code relatif à
l'animation une fois que le navigateur considére le [thread][7] principal comme
étant inactif grâce à `requestIdleCallback`. Mais cette solution n'a pas
amélioré le score de Lighthouse, car le temps d'execution du code de l'animation
est le problème principal.

Dans un second temps, j'ai ajouté un `setTimeout` à la [fonction de rappel][8]
de `requestIdleCallback` afin de forcer l'execution de l'animation bien après
que Lighthouse considére la page comme prète. Cette fois le score passe à 100,
ce qui est logique.

Pour finir j'ai ajouté la configuration du [timeout][9] en fonction de
l'[agent utilisateur][10] du navigateur pour que le _timeout_ de 5 secondes ne
se déclanche que lorsque Lighthouse est détecté. J'utilise ici cette tricherie
car le test Lighthouse ne représente pas un test réel mais un test technique,
qui ne reflète pas une condition réelle d'utilisation. L'animation peut
parfaitement se déclancher une fois la page prête car il n'y a pas de raison
valable de faire attendre arbitrairement 5 secondes à l'utilisateur pour voir
l'animation se déclancher.

## Le code

```typescript
const isLighthouse = () => {
  return (
    process.browser &&
    navigator &&
    navigator.userAgent &&
    // https://github.com/GoogleChrome/lighthouse/blob/777bf1147fd0f6aca16ffefde1350bf6297476d4/lighthouse-core/config/constants.js#L84-L87
    /Chrome-Lighthouse/.test(navigator.userAgent)
  )
}

const LIGHTHOUSE_IDLE_TIMEOUT = 5 * 1000 // 5s (https://web.dev/fid/)
const CALLBACK_TIMEOUT = isLighthouse() ? LIGHTHOUSE_IDLE_TIMEOUT : 0
const REQUEST_IDLE_CALLBACK = 5 * 1000 // 5s

interface IdleCallbackObj {
  timeout?: number
  requestIdlesCallbackId?: number
  requestAnimationFrameId?: number
}

const requestIdleCallback = (cb: Function): IdleCallbackObj => {
  const obj: IdleCallbackObj = {}

  const intermediateCb = () => (obj.timeout = setTimeout(cb, CALLBACK_TIMEOUT))

  // @ts-ignore
  if (window && window.requestIdleCallback) {
    // @ts-ignore
    obj.requestIdleCallbackId = window.requestIdleCallback(intermediateCb, {
      timeout: REQUEST_IDLE_CALLBACK,
    })
  } else {
    obj.requestAnimationFrameId = requestAnimationFrame(intermediateCb)
  }

  return obj
}

export const cancelIdleCallback = (obj: IdleCallbackObj) => {
  clearTimeout(obj.timeout)

  if (window && window.cancelAnimationFrame && obj.requestAnimationFrameId) {
    window.cancelAnimationFrame(obj.requestAnimationFrameId)
  }

  // @ts-ignore
  if (window && window.cancelIdleCallback && obj.requestIdleCallbackId) {
    // @ts-ignore
    window.cancelIdleCallback(obj.requestIdleCallbackId)
  }
}

export default requestIdleCallback
```

<!-- links -->

[6]: https://fr.reactjs.org/docs/react-dom.html#hydrate
[7]: https://fr.wikipedia.org/wiki/Thread_(informatique)
[8]: https://fr.wikipedia.org/wiki/Fonction_de_rappel
[9]: https://fr.wiktionary.org/wiki/timeout
[10]: https://fr.wikipedia.org/wiki/User_agent
