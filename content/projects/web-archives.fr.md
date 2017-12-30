---
title: "Archives Web"
---

Un **lecteur d'archives Web** offrant la possibilité de parcourir **hors ligne**
des millions d'articles provenant de grands projets communautaires tels que
[Wikipédia] ou [Wikisource].

<!--more-->

## Captures d'écran

[![Capture d'écran de la page d'accueil de l'application](/projects/web-archives/home.png)](/projects/web-archives/home.png)
*Page d'accueil de l'application*

[![Capture d'écran de la page Wikipédia contenue dans l'archive Wikipédia](/projects/web-archives/web-wikipedia.png)](/projects/web-archives/web-wikipedia.png)
*Page Wikipédia contenue dans l'archive Wikipédia*

## Fonctionnalités

- Liste des archives Web récemment ouvertes
- Liste des archives Web locales disponibles
- Liste des archives Web à télécharger
- Imprimer une page
- Mode nuit (Support basique)
- Commandes de zoom
- Chercher dans la page
- Historique
- Signets
- Chercher une page
- Raccourcis clavier
- Multi-fenêtres
- Multi-onglets
- Page au hasard
- Pages en bac à sable (les pages sont isolées du Web)
- Demander confirmation lors de l'ouverture d'un lien externe

## Installation et sources

Si vous lisez ces lignes depuis un système [GNU/Linux] et que [Flatpak (en)] est
installé, le lien qui suit vous permettra d'installer l'application sans
effort : **[WebArchives]**. Autrement, vous devez exécuter la commande qui suit
depuis un [terminal] :

```
flatpak install https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
```

Aucune méthode n'est fournie pour installer cette application sur d'autres
plateformes, telles que **Windows** ou **macOS**. S’agissant d'une application
bureau celle-ci n'est pas compatible avec les plateformes mobiles comme
**Android** ou **iOS**.

Les sources de l'application sont hébergées sur GitHub : [web-archives (en)].
Pour l'installer depuis les sources veuillez consulter le fichier [HACKING.md
(en)] présent sur le dépôt du logiciel.

## Alternatives

Cette application est directement inspirée de l’application [Kiwix]. Ainsi
WebArchives tout comme Kiwix peut lire les archives Web au [format ZIM]. Kiwix
est disponible pour **Windows**, **GNU/Linux**, **iOS** et **Android**.

<!-- Liens externes et références -->

[Wikipédia]: https://fr.wikipedia.org/wiki/Wikip%C3%A9dia
[Wikisource]: https://fr.wikipedia.org/wiki/Wikisource
[GNU/Linux]: https://fr.wikipedia.org/wiki/Linux
[Flatpak (en)]: https://flatpak.org/
[WebArchives]: https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
[terminal]: https://fr.wikipedia.org/wiki/%C3%89mulateur_de_terminal
[web-archives (en)]: https://github.com/birros/web-archives
[HACKING.md (en)]: https://github.com/birros/web-archives/blob/master/HACKING.md
[Kiwix]: http://www.kiwix.org/fr/
[format ZIM]: https://fr.wikipedia.org/wiki/ZIM_(format_de_fichier_informatique)
