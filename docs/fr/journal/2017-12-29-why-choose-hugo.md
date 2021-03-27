---
title: Pourquoi choisir Hugo pour mon site statique
date: 2017-12-29T00:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Pour inaugurer le journal je souhaite expliquer les choix techniques et
technologiques employés pour publier ce site.

<!-- more -->

Hors de question de m'encombrer d'un [site dynamique][1], synonyme de
maintenance et d'insécurité, ni d'une [base de donnée][2] et encore moins d'un
[cadriciel][3] lourd. Mon choix s'est d'abord porté vers [Jekyll (en)][4],
remplissant les deux premiers critères, jusqu'à ma découverte de [Hugo (en)][5].

En plus de cocher ces mêmes critères, **Hugo** se contente d'un simple
[exécutable][6] permettant un développement complet et rapide, pour mes besoins,
sans nécessiter l'installation de [module supplémentaire][7] pour disposer de
fonctionnalités essentielles comme le **multilinguisme**, les **[flux RSS][8]**,
ou encore l'agencement de mon contenu en **sections**.

Hormis la [réécriture (en)][9] de quelques [gabarits][10] du thème
[Ananke (en)][11] pour permettre la navigation entre l'anglais et le français,
la mise en place consiste à renseigner de rares informations dans le fichier de
configuration, comme le nom du site ainsi que les langues employées, et à
disposer son contenu, écrit en [Markdown][12], dans le dossier `content`.

Le thème **Ananke** n'est autre que celui donné en exemple durant le tutoriel
de la documentation officielle. Bien qu'un peu trop _espacé_ à mon goût
celui-ci offre une esthétique appréciable à moindre frais.

## Compléments

Il va sans dire que l'usage de [logiciels libres][13] était inscrit dès le
départ. Existe-t-il encore des [logiciels propriétaires][14] populaires dans le
monde de la [publication personnelle][15] ?

Cette solution comble largement mes besoins du moment, à l'avenir la mise en
place d'un système de **commentaires** verra sûrement le jour, mon choix se
portant à l'heure actuelle vers [Staticman (en)][16].

L'hébergement est assuré par [GitHub Pages (en)][17], choix le plus judicieux
dans la mesure où les sources sont elles mêmes hébergées sur [GitHub (en)][18]
et ne voulant pas m'embêter avec la maintenance d'une [machine physique][19]
comme [virtuelle][20].

C'est aussi l'occasion d'ajouter une note, dans la section du site dédié à cet
effet, concernant le [mode serveur d'Hugo et le réseau local][21].

<!-- links -->

[1]: https://fr.wikipedia.org/wiki/Page_web_dynamique
[2]: https://fr.wikipedia.org/wiki/Base_de_donn%C3%A9es
[3]: https://fr.wikipedia.org/wiki/Framework
[4]: https://jekyllrb.com/
[5]: https://gohugo.io/
[6]: https://fr.wikipedia.org/wiki/Fichier_ex%C3%A9cutable
[7]: https://fr.wikipedia.org/wiki/Plugin
[8]: https://fr.wikipedia.org/wiki/RSS
[9]: https://en.wikipedia.org/wiki/Overwriting_(computer_science)
[10]: https://fr.wikipedia.org/wiki/Gabarit_(mise_en_page)
[11]: https://github.com/budparr/gohugo-theme-ananke
[12]: https://fr.wikipedia.org/wiki/Markdown
[13]: https://fr.wikipedia.org/wiki/Logiciel_libre
[14]: https://fr.wikipedia.org/wiki/Logiciel_propri%C3%A9taire
[15]: https://fr.wikipedia.org/wiki/Blog
[16]: https://staticman.net/
[17]: https://pages.github.com/
[18]: https://github.com/
[19]: https://fr.wikipedia.org/wiki/Serveur_informatique
[20]: https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel
[21]: ./2017-12-29-hugo-server-local-network
