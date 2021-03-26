---
title: "Site : Passage de Hugo à VuePress"
date: 2018-12-31T22:30:00+01:00
author: Julien Muret <contact@julienmuret.fr>
layout: Post
---

Cela faisait un moment que je voulais franchir le pas, aujourd'hui c'est chose
faite. En choisissant VuePress je m'ouvre la possibilité d'ajouter plus
facilement des embellissements au site, aussi l'utilisation de Travis CI permet
de déployer automatiquement le site à chaque changement.

<!-- more -->

## Le choix de VuePress

Je l'ai choisi car j'utilise [Vue.js][1] au quotidien dans mon nouveau travail,
et plus ça va plus je l'aime. C'est un excellent compromis entre [Angular][2] et
[React][3]. Sa réactivité et son moteur de transition en font un choix plus que
pertinent pour fabriquer un site de A à Z. [VuePress (en)][4] étant le framework
officiel pour réaliser un site web statique, je n'est donc pas hésité une
seconde lorsque l'abandon de [Hugo (en)][5] est devenu une évidence. En effet,
je préfère utiliser un [framework][6] reposant directement sur des technologies
web plutôt que sur un langage natif comme [Go][7].

L'autre avantage c'est la grande souplesse pour ajouter des composants Vue
directement au sein d'une page écrite en [Markdown][8], ça ouvre un champ de
possibilité incroyable. Pour le moment, je reste sur une surcharge du thème par
défaut, mais à terme m'en faire un sur mesure en choisissant judicieusement les
transitions entre chaque route est planifié.

## Déploiement continu

J'en ai aussi profité pour utiliser [Travis CI][9] afin de déployer
automatiquement le site sur [GitHub][10]. Ça m'enlève une barrière mentale qui
me réduisait considérablement l'envie d'écrire. Rien n'est gagné pour autant,
mais un grand pas est réalisé.

## KaTeX & Viz.js

J'ai renouvelé ma confiance dans [KaTeX (en)][11] et [Viz.js (en)][12] pour le
rendu des équations mathématiques et des graphes. Je n'ai pas eu grand-chose à
faire, juste reprendre ce que j'avais fait pour Hugo. J'en ai profité pour
directement inclure KaTeX dans le code du thème, Viz.js reste pour moment en
tant que dépendance externe, on verra par la suite.

<!-- Liens -->

[1]: https://fr.wikipedia.org/wiki/Vue.js
[2]: https://fr.wikipedia.org/wiki/Angular
[3]: https://fr.wikipedia.org/wiki/React_(JavaScript)
[4]: https://vuepress.vuejs.org/
[5]: https://gohugo.io/
[6]: https://fr.wikipedia.org/wiki/Framework
[7]: https://fr.wikipedia.org/wiki/Go_(langage)
[8]: https://fr.wikipedia.org/wiki/Markdown
[9]: https://fr.wikipedia.org/wiki/Travis_CI
[10]: https://fr.wikipedia.org/wiki/GitHub
[11]: https://katex.org/
[12]: https://github.com/mdaines/viz.js/