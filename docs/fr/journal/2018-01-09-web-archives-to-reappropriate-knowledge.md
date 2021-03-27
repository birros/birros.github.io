---
title: 'WebArchives : Se réapproprier les connaissances'
date: 2018-01-09T23:30:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Le [web][1] nous offre un accès facilité à la connaissance. Cependant cette
évolution s'accompagne d'**effets pervers**. De nombreux **intermédiaires**
venant se loger entre nous et la connaissance, nous sacrifions certains de
nos **droits fondamentaux** au profit du confort. Ainsi il est important de
se protéger face aux **risques** soulevés.

<!-- summary_links -->

[1]: https://fr.wikipedia.org/wiki/World_Wide_Web

<!-- more -->

Tout d'abord il convient de différencier l'[information][2] du
[support de l'information][3], chaque support ayant des qualités et des
inconvénients, les deux principaux étant :

- **[Support papier][4]** :
  - **Pour** : ne nécessite aucun outil pour accéder à son contenu
  - **Contre** : espace de stockage conséquent
- **[Support numérique][5]** :
  - **Pour** : tient dans un plus petit volume que la version papier
  - **Contre** : dépend d'un outil pour en consulter le contenu

L'existence d'un troisième support conciliant le meilleur de ces deux mondes
semble difficilement envisageable, il convient donc d'accorder son usage en
fonction des circonstances tout en gardant à l'esprit que **le support papier
reste le choix privilégié pour un accès sans contraintes à la connaissance**.

Cet article s'attarde uniquement sur les questions que soulève l'accès à du
[contenu libre][6], tel que celui fournit par [Wikipédia][7], au moyen d'un
[ordinateur][8].

## S'émanciper des faiblesses intrinsèques d'Internet

**Wikipédia**, comme tous les [services][9] sur Internet, dispose d'au moins
**deux faiblesses conceptuelles** :

1. **Accessibilité** : une connexion Internet est requise pour accéder au
   contenu, qui plus est Wikipédia peut très bien être bloqué sur ordre d'un
   gouvernement

2. **Confidentialité** : l'utilisateur n'a aucune garantie formelle sur
   l'anonymisation de l'usage qu'il fait du contenu aussi bien sur le réseau
   que sur le serveur de Wikipédia

Pour résoudre ces deux problèmes l'idée consiste à **supprimer les
intermédiaires**, en disposant directement sur son périphérique du contenu et
d'un moyen de lecture.

## Kiwix et son format d'archive web

![Capture d'écran de la page Wikipédia, contenue dans l’archive Wikipédia, affichée dans Kiwix](../../../public/assets/journal/2018-01-09-web-archives-to-reappropriate-knowledge/kiwix-wikipedia_1050x674.png)
_Page Wikipédia, contenue dans l’archive Wikipédia, affichée dans Kiwix_

Suite à cette prise de conscience mon premier réflexe fut de rechercher si
**une solution existait déjà**. Bingo ! **[Kiwix][10]** et son format d'archive
web **[ZIM][11]** ont tout de suite répondu à mes exigences. Même si les raisons
qui ont mené à leur développement sont d'une tout autre nature, ces derniers
apportent une solution technique au problème cité précédemment.

Qui plus est il s'agit d'un [logiciel libre][12] et d'un [format ouvert][13], ce
qui garanti [confidentialité][14] et **pérennité** des données consultées.

## Les raisons d'exister de WebArchives

Sachant cela **pourquoi développer WebArchives ?**

Au moment où je me suis intéressé à cette question la version bureau de
l'application **Kiwix périssait**, une de ses dépendances n'étant plus
maintenue.

Étant un utilisateur quotidien de l'environnement de bureau [GNOME][15], me vint
à l'esprit d'implémenter le support du format de fichier **ZIM** au sein de
l'application dédiée à la consultation de documents numérique :
[GNOME Documents (en)][16].

Mais très vite cette idée me parut limitée :

1. **Format ZIM** : étant **non reconnu nativement** par la plupart des
   distributions [GNU/Linux][17], lister les archives présentent sur le disque
   dur devenait compliqué

2. **Serveur interne** : afin d'afficher le contenu d'une archive, notamment
   les vidéos embarquées, son implémentation devint **une nécessité**

3. **Contenu téléchargeable** : aucun mécanisme de découverte de nouveau
   contenu étant proposé, sa réalisation devenait **difficilement intégrale** au
   sein de l'application

D'où la naissance de l'application WebArchives.

## Le développement de WebArchives

Toujours pour éviter de réinventer la roue, j'ai très tôt décidé de me servir
de la [bibliothèque logicielle][18] développée par l'équipe de **Kiwix**,
permettant l'utilisation des fichiers **ZIM**.

Étant donné que [libzim (en)][19] est développée en [C++][20], mon choix de
langage de programmation se tourna vers celui-là même. Malheureusement je me
suis retrouvé à devoir jongler entre des bibliothèques codées en **C++** et
d'autres en [C][21].

Le résultat donnant un code difficilement lisible et donc maintenable, j'ai
pris la décision de réaliser un [binding][22] de cette bibliothèque grâce à la
capacité d'[introspection][23] de la bibliothèque [GObject][24] de
l'environnement GNOME.

Vu que **GNOME** a pour bibliothèque graphique [GTK+][25], le choix du langage
de programmation [Vala][26] sembla pertinent, ce dernier offrant un
[paradigme orienté objet][27] et étant un [langage compilé][28].

Graphiquement un mélange de règles de conception issues aussi bien de
**GNOME** que d'[Android][29] m'ont guidé dans la conception de l'interface,
celle-ci devant être la plus simple possible.

## L'avenir de WebArchives

![Capture d'écran de la page Wikipédia, contenue dans l’archive Wikipédia, affichée dans WebArchives](../../../public/assets/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-wikipedia_850x500.png)
_Page Wikipédia, contenue dans l’archive Wikipédia, affichée dans WebArchives_

Idéalement **WebArchives ne devrait pas exister**, les archives web étant des
documents presque comme les autres celles-ci devraient être prises en charge
nativement par GNOME Documents. C'est la **vision à très long terme** de ce
projet, sa disparition. Inutile de créer une application par format de fichier.

En attendant je compte effectuer des améliorations internes, invisibles de
l'utilisateur, afin de **rendre l'expérience plus fluide**. Il s'agit dans les
grandes lignes de rendre le code asynchrone notamment en utilisant des
[threads][30].

Graphiquement l'application est loin de mon idéal. Voulant la rendre
utilisable aussi bien sur des écrans larges comme plus petits, ainsi que
compatible avec des contrôles tactiles, j'attends de voir le résultat du
partenariat entre **GNOME** et [Purism (en)][31] à propos du smartphone
[Librem 5 (en)][32] tournant sous **GNU/Linux**.

Ne voulant pas m'embêter avec les systèmes de paquet pour distribuer
l'application j'ai donc choisi de la publier uniquement au travers du système
[Flatpak][33] et du dépôt [Flathub (en)][34]. À l'avenir sa présence dans les
dépôts de [Debian][35] est envisageable vu que ses dépendances sont quasiment
toutes présentent dans ses dépôts.

Aujourd'hui WebArchives s'articule uniquement autour du format de fichier
**ZIM**, celui-ci étant à mon goût le plus performant. Néanmoins il n'est pas
exclu, lorsque l'application aura atteint une certaine maturité, de prendre en
charge d'autres formats de fichier, tel que le format [WARC (en)][36] accompagné
de **CDX**.

D'autres **fonctionnalités** sont envisageables sur le **long terme** :

- **Table des matières de la page affichée**
- **La navigation entre archives** : pouvoir ouvrir un lien externe d'une
  archive directement dans l'archive correspondant au nom de domaine
- **Gérer une requête depuis une autre application** : par exemple depuis
  GNOME Maps vers Wikipédia, pour rediriger sur l'archive correspondante
- et bien d'autres...

## Au-delà de WebArchives

Durant le développement de WebArchives j'ai constaté l'**absence d'un certain
nombre de composants logiciels** pour faciliter la vie à la fois des
utilisateurs ainsi que celle des développeurs. Ces sujets seront développés
dans de futurs articles :

- L'existence d'une sorte de **GNOME Market**, reprenant le fonctionnement de
  [GNOME Software][37] mais pour gérer le téléchargement et la mise à jour de
  contenu comme par exemple : cartes géographiques, encyclopédies, manuels
  d'application, cours, tutoriels, dictionnaires...
- La trop grande rigidité dans la conception d'interfaces, il faut rendre les
  **interfaces plus "_organiques_"**. Ainsi que l'absence de composants
  essentiels au sein de la [GLib][38] ou de **GTK+**, comme des [ORM][39] ou
  encore une **VirtualListBox**
- Repenser la manière de gérer les données utilisateurs :
  **un méta système de fichiers** orienté synchronisation, sauvegarde et
  confidentialité
- Mettre en place **plus de [production participative][40]** : savoir-faire,
  construction, entreprise, contenu scolaire...

## Conclusion

![Capture d'écran de la page d'accueil de WebArchives](../../../public/assets/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-home_850x500.png)
_Page d'accueil de WebArchives_

Au final cette application m'est surtout utile lorsque ma connexion Internet
fait des siennes. De plus j'ai beaucoup moins d'appréhension à chercher des
informations concernant des sujets dits sensibles car j'ai la certitude de ne
pas être espionné, là où sur le site de Wikipédia mon usage est bridé de peur
d'être surveillé.

Certains diront qu'un tel outil n'a **aucun intérêt** à l'heure où l'accès à
internet n'a jamais été aussi simple. Ils n'ont pas tout à fait tort,
cependant il faut voir cet outil comme **un extincteur**, vous en avez pas
besoin dans votre vie de tous les jours, mais il se peut qu'un jour il vous
soit indispensable. Rien ne nous dit que le monde de demain sera libre,
**mieux vaut prévenir que guérir**.

**Un autre avantage** d'un tel outil réside dans la grande facilité pour
partager la connaissance. En effet **copier un fichier numérique sera toujours
plus facile et rapide que de copier un livre papier**.

Ne voulant pas trop entrer dans les détails, cet article survol tout ce que la
réalisation de ce projet m'a appris, s'attardant essentiellement sur sa raison
d'exister. Ce texte a donc pour principale utilité de récapituler les grandes
étapes de ce projet.

## Liens utiles

- [Fiche sur le projet WebArchives][41]
- [Sources de WebArchives (en)][42]
- [Lien vers les applications Flathub dont WebArchives (en)][43]
- [Site internet de Kiwix][44]
- [Site internet de Debian][45]
- [Site internet de Flatpak (en)][46]
- [Site internet de Flathub (en)][47]
- [Site internet de GNOME (en)][48]
- [GObject introspection (en)][49]

<!-- links -->

[2]: https://fr.wikipedia.org/wiki/Information
[3]: https://fr.wikipedia.org/wiki/Information#Support_de_l'information
[4]: https://fr.wikipedia.org/wiki/Livre_(document)
[5]: https://fr.wikipedia.org/wiki/Livre_num%C3%A9rique
[6]: https://fr.wikipedia.org/wiki/%C5%92uvre_libre
[7]: https://fr.wikipedia.org/wiki/Wikip%C3%A9dia
[8]: https://fr.wikipedia.org/wiki/Ordinateur
[9]: https://fr.wikipedia.org/wiki/Serveur_informatique
[10]: https://fr.wikipedia.org/wiki/Kiwix
[11]: https://fr.wikipedia.org/wiki/ZIM_(format_de_fichier_informatique)
[12]: https://fr.wikipedia.org/wiki/Logiciel_libre
[13]: https://fr.wikipedia.org/wiki/Format_ouvert
[14]: https://fr.wikipedia.org/wiki/Confidentialit%C3%A9
[15]: https://fr.wikipedia.org/wiki/GNOME
[16]: https://wiki.gnome.org/Apps/Documents
[17]: https://fr.wikipedia.org/wiki/Linux
[18]: https://fr.wikipedia.org/wiki/Biblioth%C3%A8que_logicielle
[19]: https://github.com/openzim/libzim
[20]: https://fr.wikipedia.org/wiki/C%2B%2B
[21]: https://fr.wikipedia.org/wiki/C_(langage)
[22]: https://fr.wikipedia.org/wiki/Binding
[23]: https://fr.wikipedia.org/wiki/R%C3%A9flexion_(informatique)
[24]: https://fr.wikipedia.org/wiki/GObject
[25]: https://fr.wikipedia.org/wiki/GTK%2B
[26]: https://fr.wikipedia.org/wiki/Vala_(langage)
[27]: https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet
[28]: https://fr.wikipedia.org/wiki/Fichier_binaire
[29]: https://fr.wikipedia.org/wiki/Android
[30]: https://fr.wikipedia.org/wiki/Thread_(informatique)
[31]: https://puri.sm/
[32]: https://puri.sm/shop/librem-5/
[33]: https://fr.wikipedia.org/wiki/Flatpak
[34]: https://flathub.org/
[35]: https://fr.wikipedia.org/wiki/Debian
[36]: https://en.wikipedia.org/wiki/Web_ARChive
[37]: https://fr.wikipedia.org/wiki/GNOME_Logiciels
[38]: https://fr.wikipedia.org/wiki/GLib
[39]: https://fr.wikipedia.org/wiki/Mapping_objet-relationnel
[40]: https://fr.wikipedia.org/wiki/Production_participative
[41]: ../projects/web-archives
[42]: https://github.com/birros/web-archives
[43]: https://flathub.org/apps.html
[44]: https://www.kiwix.org/fr/
[45]: https://www.debian.org/index.fr.html
[46]: https://www.flatpak.org/
[47]: https://flathub.org/
[48]: https://www.gnome.org/
[49]: https://wiki.gnome.org/Projects/GObjectIntrospection
