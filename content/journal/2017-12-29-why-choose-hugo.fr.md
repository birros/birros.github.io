---
title: Pourquoi choisir Hugo pour mon site statique
date: 2017-12-29T00:00:00+01:00
type: post
---

Pour inaugurer le journal je souhaite expliquer les choix techniques et
technologiques employés pour publier ce site.

<!--more-->

Hors de question de m'encombrer d'un [site dynamique], synonyme de maintenance
et d'insécurité, ni d'une [base de donnée] et encore moins d'un [cadriciel]
lourd. Mon choix s'est d'abord porté vers [Jekyll (en)], remplissant les deux
premiers critères, jusqu'à ma découverte de [Hugo (en)].

En plus de cocher ces mêmes critères, __Hugo__ se contente d'un simple
[exécutable] permettant un développement complet et rapide, pour mes besoins,
sans nécessiter l'installation de [module supplémentaire] pour disposer de
fonctionnalités essentielles comme le __multilinguisme__, les __[flux RSS]__,
ou encore l'agencement de mon contenu en __sections__.

Hormis la [réécriture (en)] de quelques [gabarits] du thème [Ananke (en)] pour
permettre la navigation entre l'anglais et le français, la mise en place
consiste à renseigner de rares informations dans le fichier de configuration,
comme le nom du site ainsi que les langues employées, et à disposer son
contenu, écrit en [Markdown], dans le dossier `content`.

Le thème __Ananke__ n'est autre que celui donné en exemple durant le tutoriel
de la documentation officielle. Bien qu'un peu trop *espacé* à mon goût
celui-ci offre une esthétique appréciable à moindre frais.

## Compléments

Il va sans dire que l'usage de [logiciels libres] était inscrit dès le départ.
Existe-t-il encore des [logiciels propriétaires] populaires dans le monde de la
[publication personnelle] ?

Cette solution comble largement mes besoins du moment, à l'avenir la mise en
place d'un système de __commentaires__ verra sûrement le jour, mon choix se
portant à l'heure actuelle vers [Staticman (en)].

L'hébergement est assuré par [GitHub Pages (en)], choix le plus judicieux dans
la mesure où les sources sont elles mêmes hébergées sur [GitHub (en)] et ne
voulant pas m'embêter avec la maintenance d'une [machine physique] comme
[virtuelle].

C'est aussi l'occasion d'ajouter une note, dans la section du site dédié à cet
effet, concernant le [mode serveur d'Hugo et le réseau local].

<!--Liens externes et références-->

[exécutable]: https://fr.wikipedia.org/wiki/Fichier_ex%C3%A9cutable
[site dynamique]: https://fr.wikipedia.org/wiki/Page_web_dynamique
[base de donnée]: https://fr.wikipedia.org/wiki/Base_de_donn%C3%A9es
[cadriciel]: https://fr.wikipedia.org/wiki/Framework
[Jekyll (en)]: https://jekyllrb.com/
[Markdown]: https://fr.wikipedia.org/wiki/Markdown
[Hugo (en)]: https://gohugo.io/
[module supplémentaire]: https://fr.wikipedia.org/wiki/Plugin
[flux RSS]: https://fr.wikipedia.org/wiki/RSS
[gabarits]: https://fr.wikipedia.org/wiki/Gabarit_(mise_en_page)
[Ananke (en)]: https://github.com/budparr/gohugo-theme-ananke
[réécriture (en)]: https://en.wikipedia.org/wiki/Overwriting_(computer_science)
[logiciels libres]: https://fr.wikipedia.org/wiki/Logiciel_libre
[logiciels propriétaires]: https://fr.wikipedia.org/wiki/Logiciel_propri%C3%A9taire
[publication personnelle]: https://fr.wikipedia.org/wiki/Blog
[Staticman (en)]: https://staticman.net/
[GitHub Pages (en)]: https://pages.github.com/
[GitHub (en)]: https://github.com/
[machine physique]: https://fr.wikipedia.org/wiki/Serveur_informatique
[virtuelle]: https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel
[mode serveur d'Hugo et le réseau local]: ../../notes/hugo-server-local-network
