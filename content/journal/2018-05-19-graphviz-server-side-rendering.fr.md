---
title: "Graphviz: Rendu côté serveur"
date: 2018-05-19T23:07:00+01:00
type: post
---

Billet résumant la mise en place du rendu côté serveur des graphes utilisés sur
ce site.

<!--more-->

## Avantage et limitation

Le [mode lecture] des navigateurs Web ainsi que les [flux RSS] ne supportant pas
le JavaScript, effectuer le rendu côté client est inenvisageable dans ces cas
là. Comme [Hugo] n'est pas extensible, l'idée est alors d'utiliser un deuxième
outil pour réaliser le rendu des graphes contenus dans les pages crées par
__Hugo__.

Cette solution augmente la durée de construction du site, néanmoins cela reste
raisonnable pour le moment du fait que peu de graphes sont présents sur
celui-ci.

## Vizpack

J'ai développé pour l'occasion un petit outil en ligne de commande, baptisé
[Vizpack (en)], permettant de transformer tout les éléments [HTML] contenant une
description de graphe, écrite dans un langage reconnu par [Viz.js (en)], en
éléments [SVG].

Cet outil s'appuie sur un _préfixe_ renseigné par l'utilisateur pour cibler les
éléments contenants les graphes. Le _préfixe_ choisi dans le cas présent est
`language-viz-`.

La valeur de ce _préfixe_ vient du fonctionnement d'__Hugo__ et de la manière de
décrire un graphe au sein de mes page en __Markdown__:

{{< highlight markdown >}}
```viz-dot
graph graphname {
  a [label="Foo"];
  b [shape=box];
  a -- b -- c [color=blue];
  b -- d [style=dotted];
}
```
{{< / highlight >}}

En écrivant le bloc précédent, __Hugo__ incorporera le code du graphe au sein
d'un élément HTML dont la classe [CSS] sera `language-viz-dot`. Le langage
`viz-dot` indiqué ici n'existe pas, on ajoute le préfixe `viz-` au langage de
graphe utilisé pour indiquer explicitement que le graphe doit être rendu.

Sachant qu'un graphe peut être écrit dans un autre langage que le [DOT], tout
élément HTML dont la classe CSS commence par `language-viz-` est un graphe dont
le rendu doit être effectué.

Ainsi on effectue le rendu de l'ensemble des graphes incorporés dans une page
HTML, crée par __Hugo__, en utilisant la commande suivante:

{{< highlight shell >}}
$ vizpack language-viz- input.html output.html
{{< / highlight >}}

## Gabarit Hugo & variable d’environnement

Ce rendu côté serveur est intéressant uniquement au moment du déploiement d'une
nouvelle version du site. En effet durant le développement d'une nouvelle
version, notamment lors de la rédaction d'un nouvel article, le rendu côté
client prend tout son sens puisque apportant un aperçu en temps réel du résultat
final.

Ainsi j'ai modifié le gabarit `layouts/_default/baseof.html` pour désactiver
l'inclusion du code [JavaScript], permettant le rendu côté client, en
renseignant la variable d'environnement `USE_VIZPACK` au moment d'appeler
__Hugo__:

{{< highlight go-template-html >}}
{{ $useVizpack := eq (getenv "USE_VIZPACK") "true" }}
{{ if and .Params.viz (not $useVizpack) }}
  {{ partial "graphviz_support.html" . }}
{{ end }}
{{< / highlight >}}

Pour empêcher le rendu côté client il suffit alors d'appeler __Hugo__ comme
suit:

{{< highlight shell >}}
$ USE_VIZPACK=true hugo
{{< / highlight >}}

## Script de déploiement

Enfin j'ai créé un petit [script] pour effectuer le rendu des graphes sur
l'ensemble des pages HTML crées par __Hugo__, je l'ai appelé
`scripts/hugo-vizpack.sh`.

Pour réduire au maximum le temps d'exécution de ce script, j'effectue un premier
tri avec `find` et `grep` pour ne traiter que les pages HTML contenant la chaîne
de caractères `language-viz-`, puis je parallélise les appels à `vizpack` en
configurant `xargs` pour l'occasion:

{{< highlight shell >}}
#!/bin/bash

REGEX=".*\.\(html\)"
PREFIX="language-viz-"
VIZPACK="./node_modules/.bin/vizpack"

# vizpack each html files of the public folder containing $PREFIX string inside.
find public -type f -regex $REGEX -exec grep -l $PREFIX {} \;\
| xargs -n 1 -P 0 -I {} $VIZPACK --quiet $PREFIX {} {}
{{< / highlight >}}

J'ai juste eu à modifier `scripts/deploy.sh` pour ajouter le rendu effectué par
`hugo-vizpack.sh` après un premier appel à __Hugo__, en prenant soin de
désactiver le rendu côté client:

{{< highlight shell >}}
$ USE_VIZPACK=true hugo && ./scripts/hugo-vizpack.sh
{{< / highlight >}}

## Et KaTeX ?

Satisfait de cette méthode j'envisage le même procédé pour le rendu des formules
mathématiques, cependant [KaTeX (en)] n'offrant pas de rendu en __SVG__, il
faudrait donc que je me rabatte sur [MathJax].

Je préfère patienter un peu histoire de voir comment évolue __KaTeX__, ayant
moins besoin d'écrire des équations que de graphes pour l'instant, rien ne
presse.

<!-- Liens -->

[mode lecture]: https://support.mozilla.org/fr/kb/retirer-tout-le-superflu-des-pages-web-grace-au-mode-lecture
[flux RSS]: https://fr.wikipedia.org/wiki/RSS
[Hugo]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[HTML]: https://fr.wikipedia.org/wiki/Hypertext_Markup_Language
[Viz.js (en)]: https://github.com/mdaines/viz.js
[SVG]: https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics
[CSS]: https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade
[DOT]: https://fr.wikipedia.org/wiki/DOT_(langage)
[JavaScript]: https://fr.wikipedia.org/wiki/JavaScript
[script]: https://fr.wikipedia.org/wiki/Langage_de_script
[KaTeX (en)]: https://khan.github.io/KaTeX/
[MathJax]: https://fr.wikipedia.org/wiki/MathJax
[Vizpack (en)]: https://github.com/birros/vizpack
