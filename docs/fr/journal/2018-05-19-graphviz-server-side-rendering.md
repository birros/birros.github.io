---
title: 'Graphviz: Rendu côté serveur'
date: 2018-05-19T23:07:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Billet résumant la mise en place du rendu côté serveur des graphes utilisés sur
ce site.

<!-- more -->

## Avantage et limitation

Le [mode lecture][1] des navigateurs Web ainsi que les [flux RSS][2] ne
supportant pas le JavaScript, effectuer le rendu côté client est inenvisageable
dans ces cas là. Comme [Hugo][3] n'est pas extensible, l'idée est alors
d'utiliser un deuxième outil pour réaliser le rendu des graphes contenus dans
les pages crées par **Hugo**.

Cette solution augmente la durée de construction du site, néanmoins cela reste
raisonnable pour le moment du fait que peu de graphes sont présents sur
celui-ci.

## Vizpack

J'ai développé pour l'occasion un petit outil en ligne de commande, baptisé
[Vizpack (en)][4], permettant de transformer tout les éléments [HTML][5]
contenant une description de graphe, écrite dans un langage reconnu par
[Viz.js (en)][6], en éléments [SVG][7].

Cet outil s'appuie sur un _préfixe_ renseigné par l'utilisateur pour cibler les
éléments contenants les graphes. Le _préfixe_ choisi dans le cas présent est
`language-viz-`.

La valeur de ce _préfixe_ vient du fonctionnement d'**Hugo** et de la manière de
décrire un graphe au sein de mes page en **Markdown**:

````markdown
```viz-dot
graph graphname {
  a [label="Foo"];
  b [shape=box];
  a -- b -- c [color=blue];
  b -- d [style=dotted];
}
```
````

En écrivant le bloc précédent, **Hugo** incorporera le code du graphe au sein
d'un élément HTML dont la classe [CSS][8] sera `language-viz-dot`. Le langage
`viz-dot` indiqué ici n'existe pas, on ajoute le préfixe `viz-` au langage de
graphe utilisé pour indiquer explicitement que le graphe doit être rendu.

Sachant qu'un graphe peut être écrit dans un autre langage que le [DOT][9], tout
élément HTML dont la classe CSS commence par `language-viz-` est un graphe dont
le rendu doit être effectué.

Ainsi on effectue le rendu de l'ensemble des graphes incorporés dans une page
HTML, crée par **Hugo**, en utilisant la commande suivante:

```shell
$ vizpack language-viz- input.html output.html
```

## Gabarit Hugo & variable d’environnement

Ce rendu côté serveur est intéressant uniquement au moment du déploiement d'une
nouvelle version du site. En effet durant le développement d'une nouvelle
version, notamment lors de la rédaction d'un nouvel article, le rendu côté
client prend tout son sens puisque apportant un aperçu en temps réel du résultat
final.

Ainsi j'ai modifié le gabarit `layouts/_default/baseof.html` pour désactiver
l'inclusion du code [JavaScript][10], permettant le rendu côté client, en
renseignant la variable d'environnement `USE_VIZPACK` au moment d'appeler
**Hugo**:

```go-template-html
{{ $useVizpack := eq (getenv "USE_VIZPACK") "true" }}
{{ if and .Params.viz (not $useVizpack) }}
  {{ partial "graphviz_support.html" . }}
{{ end }}
```

Pour empêcher le rendu côté client il suffit alors d'appeler **Hugo** comme
suit:

```shell
$ USE_VIZPACK=true hugo
```

## Script de déploiement

Enfin j'ai créé un petit [script][11] pour effectuer le rendu des graphes sur
l'ensemble des pages HTML crées par **Hugo**, je l'ai appelé
`scripts/hugo-vizpack.sh`.

Pour réduire au maximum le temps d'exécution de ce script, j'effectue un premier
tri avec `find` et `grep` pour ne traiter que les pages HTML contenant la chaîne
de caractères `language-viz-`, puis je parallélise les appels à `vizpack` en
configurant `xargs` pour l'occasion:

```shell
#!/bin/bash

REGEX=".*\.\(html\)"
PREFIX="language-viz-"
VIZPACK="./node_modules/.bin/vizpack"

# vizpack each html files of the public folder containing $PREFIX string inside.
find public -type f -regex $REGEX -exec grep -l $PREFIX {} \;\
| xargs -n 1 -P 0 -I {} $VIZPACK --quiet $PREFIX {} {}
```

J'ai juste eu à modifier `scripts/deploy.sh` pour ajouter le rendu effectué par
`hugo-vizpack.sh` après un premier appel à **Hugo**, en prenant soin de
désactiver le rendu côté client:

```shell
$ USE_VIZPACK=true hugo && ./scripts/hugo-vizpack.sh
```

## Et KaTeX ?

Satisfait de cette méthode j'envisage le même procédé pour le rendu des formules
mathématiques, cependant [KaTeX (en)][12] n'offrant pas de rendu en **SVG**, il
faudrait donc que je me rabatte sur [MathJax][13].

Je préfère patienter un peu histoire de voir comment évolue **KaTeX**, ayant
moins besoin d'écrire des équations que de graphes pour l'instant, rien ne
presse.

<!-- links -->

[1]: https://support.mozilla.org/fr/kb/retirer-tout-le-superflu-des-pages-web-grace-au-mode-lecture
[2]: https://fr.wikipedia.org/wiki/RSS
[3]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[4]: https://github.com/birros/vizpack
[5]: https://fr.wikipedia.org/wiki/Hypertext_Markup_Language
[6]: https://github.com/mdaines/viz.js
[7]: https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics
[8]: https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade
[9]: https://fr.wikipedia.org/wiki/DOT_(langage)
[10]: https://fr.wikipedia.org/wiki/JavaScript
[11]: https://fr.wikipedia.org/wiki/Langage_de_script
[12]: https://khan.github.io/KaTeX/
[13]: https://fr.wikipedia.org/wiki/MathJax
