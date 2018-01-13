---
title: "WebArchives"
---

Un __lecteur d'archives web__ offrant la possibilité de parcourir __hors
ligne__ des millions d'articles provenant de grands projets communautaires tels
que [Wikipédia], [Wiktionnaire] ou [Wikisource].

<!--more-->

## Captures d'écran

[![Capture d'écran de la page d'accueil de l'application](/projects/web-archives/home.png)](/projects/web-archives/home.png)
*Page d'accueil de l'application*

[![Capture d'écran de la page Wikipédia contenue dans l'archive Wikipédia](/projects/web-archives/web-wikipedia.png)](/projects/web-archives/web-wikipedia.png)
*Page Wikipédia contenue dans l'archive Wikipédia*

## Fonctionnalités

- Liste des archives web récemment ouvertes
- Liste des archives web locales disponibles
- Liste des archives web à télécharger
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
- Pages en bac à sable (les pages sont isolées du web)
- Demander confirmation lors de l'ouverture d'un lien externe

## Installation

WebArchives a été développée et testée sous [GNU/Linux], avec [GNOME] en ligne
de mire. Cependant celle-ci peut être utilisée sous d'autres environnements de
bureau.

Aucune méthode n’est fournie pour installer cette application sur d’autres
plateformes, telles que __Windows__ ou __macOS__. S’agissant d’une application
bureau celle-ci n’est pas compatible avec les plateformes mobiles comme
__Android__ ou __iOS__.

### WebArchives au format Flatpak

L'installation de [Flatpak] est requise : [Obtenir Flatpak (en)].

Il faut ensuite ajouter le dépôt [Flathub (en)] et installer WebArchives depuis
un [terminal] :

    flatpak remote-add flathub https://flathub.org/repo/flathub.flatpakrepo
    flatpak install flathub com.github.birros.WebArchives

Si il s'agit de votre premier Flatpak, le redémarrage de votre session est
nécessaire pour que l'application apparaisse dans votre lanceur. En outre il
est possible de l'exécuter depuis un terminal :

    flatpak run com.github.birros.WebArchives

Il se peut que certains __problèmes__ apparaissent lors de l'exécution de
l'application, notamment si votre environnement de bureau n'utilise pas [Gtk+],
comme c'est le cas de __[Kde]__.

L'installation de __deux services supplémentaires__ est alors requise du côté
système pour résoudre ces problèmes, nécessitant l'exécution de l'une de ces
commandes en fonction de votre distribution :

__Debian & Ubuntu__ :

    apt install tracker gvfs-backends

__Fedora__ :

    dnf install tracker gvfs

### Autres méthodes d'installation

La mise en place d'une méthode d'installation usuelle pour les grandes
distributions existantes est en préparation, avec pour priorité __Debian__ et
__Ubuntu__.

## Alternatives

Cette application est directement inspirée de l’application [Kiwix]. Ainsi
WebArchives tout comme Kiwix peut lire les archives Web au [format ZIM]. Kiwix
est disponible pour __Windows__, __GNU/Linux__, __iOS__ et __Android__.

## Liens utiles

- [Code source de WebArchives (en)]
- [Flatpakref de WebArchives (application externe)]
- [Site internet de Kiwix]
- [Liste des applications hébérgées sur Flathub (en)]

<!-- Liens externes et références -->

[Wikipédia]: https://fr.wikipedia.org/wiki/Wikip%C3%A9dia
[Wiktionnaire]: https://fr.wikipedia.org/wiki/Wiktionnaire
[Wikisource]: https://fr.wikipedia.org/wiki/Wikisource
[GNU/Linux]: https://fr.wikipedia.org/wiki/Linux
[GNOME]: https://fr.wikipedia.org/wiki/GNOME
[Flatpak]: https://fr.wikipedia.org/wiki/Flatpak
[Obtenir flatpak (en)]: https://flatpak.org/getting.html
[Flathub (en)]: https://flathub.org/
[terminal]: https://fr.wikipedia.org/wiki/%C3%89mulateur_de_terminal
[GTK+]: https://fr.wikipedia.org/wiki/GTK%2B
[KDE]: https://fr.wikipedia.org/wiki/KDE
[Kiwix]: https://fr.wikipedia.org/wiki/Kiwix
[format ZIM]: https://fr.wikipedia.org/wiki/ZIM_(format_de_fichier_informatique)
[Code source de WebArchives (en)]: https://github.com/birros/web-archives
[Flatpakref de WebArchives (application externe)]: https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
[Site internet de Kiwix]: https://www.kiwix.org/fr/
[Liste des applications hébérgées sur Flathub (en)]: https://flathub.org/apps.html
