---
title: Mise à jour du site
date: 2018-05-09T16:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
layout: Post
---

Petit billet pour parler des évolutions du site aussi bien en forme qu'en
contenu.

<!-- more -->

## Changement de thème

J'ai troqué le thème [Ananke (en)] pour le thème [Hugo Bootstrap (en)], ce
dernier étant multilingue, adaptatif et visuellement plus léger car reposant sur
[Bootstrap]. Je n'ai eu à corriger que quelques problèmes pour le rendre
fonctionnel, corrections que j'ai bien évidement proposées au développeur du
thème.

Ce thème m'est suffisant pour le moment, la coloration syntaxique étant
nativement prise en charge par [Hugo] par l’intermédiaire du moteur de rendu
[Chroma (en)]. Cependant si un jour me prend l'envie d'ajouter quelques formules
mathématiques je réfléchirai à l'intégration de la bibliothèque [KaTeX (en)] qui
a l'avantage d'être plus rapide que [MathJax].

## Langue française par défaut

Le site étant jeune et ne disposant pas d'une grande audience je me permet de
faire un changement radical d'orientation. Naïvement je croyais pouvoir
maintenir ce site à la fois en français et anglais, au final la simple idée de
devoir traduire chaque nouveau billet en anglais me coupe l'envie de rédiger
quoi que ce soit. N'étant pas nativement anglophone traduire un billet est un
enfer, alors dorénavant je me contente d'écrire en français, tout en gardant la
possibilité de traduire un billet seulement si quelqu'un en fait la demande, ou
si un aimable contributeur décide de mettre la main à la pâte.

## Restructuration des dépôts du site

J'avais opté pour une séparation en deux dépôts distincts, un pour les sources
du site et un pour le déploiement, j'avais simplement suivi la documentation
d'__Hugo__. Tout compte fait les deux peuvent cohabiter au sein d'un même dépôt,
la branche `master` servant au déploiement, et la branche `develop` hébergeant
les sources. Pour que la navigation au sein de [GitHub] renvoie directement sur
la branche `develop` plutôt que sur la branche `master`, j'ai mis la branche
`develop` en tant que branche par défaut. Aussi, un script de déploiement est
ajouté à la racine du dépôt afin de faciliter sa mise à jour.

## GitHub, push et vpn

Après avoir nettoyer en profondeur les sources du site, notamment pour supprimer
quelques commits de l'historique, j'ai eu la mauvaise surprise d'avoir des
difficultés pour pousser mon contenu sur __GitHub__. Après plusieurs
vérifications j'ai compris que le problème se situait au niveau du réseau, plus
particulièrement entre la box de mon [FAI] et les serveurs de __GitHub__. Le
débit étant si faible que la connexion s'arrêtait aussitôt que le contenu poussé
dépassait seulement quelques kilooctets. J'ai finis par utiliser un [VPN] dont
le point de sortie se situait aux États Unis, non sans attendre plusieurs heures
que l'ensemble des commits soient versés, le débit restant faible mais la
connexion stable. En espérant que la _"tuyauterie"_ s'améliore avec le temps.

<!-- Liens -->

[Ananke (en)]: https://github.com/budparr/gohugo-theme-ananke
[Hugo Bootstrap (en)]: https://github.com/Xzya/hugo-bootstrap
[Bootstrap]: https://fr.wikipedia.org/wiki/Bootstrap_(framework)
[Hugo]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[Chroma (en)]: https://gohugo.io/content-management/syntax-highlighting/
[KaTeX (en)]: https://khan.github.io/KaTeX/
[MathJax]: https://fr.wikipedia.org/wiki/MathJax
[GitHub]: https://fr.wikipedia.org/wiki/GitHub
[FAI]: https://fr.wikipedia.org/wiki/Fournisseur_d%27acc%C3%A8s_%C3%A0_Internet
[VPN]: https://fr.wikipedia.org/wiki/R%C3%A9seau_priv%C3%A9_virtuel
