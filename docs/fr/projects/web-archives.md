---
title: 'WebArchives'
---

Un **lecteur d'archives web** offrant la possibilité de parcourir **hors
ligne** des millions d'articles provenant de grands projets communautaires tels
que [Wikipédia][1], [Wiktionnaire][2] ou [Wikisource][3].

<!-- summary_links -->

[1]: https://fr.wikipedia.org/wiki/Wikip%C3%A9dia
[2]: https://fr.wikipedia.org/wiki/Wiktionnaire
[3]: https://fr.wikipedia.org/wiki/Wikisource

<!-- more -->

## Captures d'écran

![Capture d'écran de la page d'accueil de l'application](../../../public/assets/projects/web-archives/home_850x500.png)
_Page d'accueil de l'application_

![Capture d'écran de la page Wikipédia contenue dans l'archive Wikipédia](../../../public/assets/projects/web-archives/web-wikipedia_850x500.png)
_Page Wikipédia contenue dans l'archive Wikipédia_

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

WebArchives a été développée et testée sous [GNU/Linux][4], avec [GNOME][5] en
ligne de mire. Cependant celle-ci peut être utilisée sous d'autres
environnements de bureau.

Aucune méthode n’est fournie pour installer cette application sur d’autres
plateformes, telles que **Windows** ou **macOS**. S’agissant d’une application
bureau celle-ci n’est pas compatible avec les plateformes mobiles comme
**Android** ou **iOS**.

### WebArchives au format Flatpak

L'installation de [Flatpak][6] est requise : [Obtenir Flatpak (en)][6].

Il faut ensuite ajouter le dépôt [Flathub (en)][7] et installer WebArchives
depuis un [terminal][8] :

```shell
$ flatpak remote-add flathub https://flathub.org/repo/flathub.flatpakrepo
$ flatpak install flathub com.github.birros.WebArchives
```

Si il s'agit de votre premier Flatpak, le redémarrage de votre session est
nécessaire pour que l'application apparaisse dans votre lanceur. En outre il
est possible de l'exécuter depuis un terminal :

```shell
$ flatpak run com.github.birros.WebArchives
```

Il se peut que certains **problèmes** apparaissent lors de l'exécution de
l'application, notamment si votre environnement de bureau n'utilise pas
[Gtk+][9], comme c'est le cas de **[Kde][10]**.

L'installation de **deux services supplémentaires** est alors requise du côté
système pour résoudre ces problèmes, nécessitant l'exécution de l'une de ces
commandes en fonction de votre distribution :

**Debian & Ubuntu** :

```shell
$ sudo apt install tracker gvfs-backends
```

**Fedora** :

```shell
$ sudo dnf install tracker gvfs
```

### Autres méthodes d'installation

La mise en place d'une méthode d'installation usuelle pour les grandes
distributions existantes est en préparation, avec pour priorité **Debian** et
**Ubuntu**.

## Alternatives

Cette application est directement inspirée de l’application [Kiwix][11]. Ainsi
WebArchives tout comme Kiwix peut lire les archives Web au [format ZIM][12].
Kiwix est disponible pour **Windows**, **GNU/Linux**, **iOS** et **Android**.

## Liens utiles

- [Code source de WebArchives (en)][13]
- [Flatpakref de WebArchives (application externe)][14]
- [Site internet de Kiwix][15]
- [Liste des applications hébérgées sur Flathub (en)][16]

<!-- links -->

[4]: https://fr.wikipedia.org/wiki/Linux
[5]: https://fr.wikipedia.org/wiki/GNOME
[6]: https://fr.wikipedia.org/wiki/Flatpak
[7]: https://flatpak.org/getting.html
[8]: https://flathub.org/
[9]: https://fr.wikipedia.org/wiki/%C3%89mulateur_de_terminal
[10]: https://fr.wikipedia.org/wiki/GTK%2B
[11]: https://fr.wikipedia.org/wiki/KDE
[12]: https://fr.wikipedia.org/wiki/Kiwix
[13]: https://fr.wikipedia.org/wiki/ZIM_(format_de_fichier_informatique)
[14]: https://github.com/birros/web-archives
[15]: https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
[16]: https://www.kiwix.org/fr/
[17]: https://flathub.org/apps.html
