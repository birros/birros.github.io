---
title: 'WebArchives'
---

A **web archives reader** offering the ability to browse **offline** millions of
articles from large community projects such as [Wikipedia][1], [Wiktionary][2]
or [Wikisource][3].

<!-- summary_links -->

[1]: https://en.wikipedia.org/wiki/Wikipedia
[2]: https://en.wikipedia.org/wiki/Wiktionary
[3]: https://en.wikipedia.org/wiki/Wikisource

<!-- more -->

## Screenshots

![Screenshot of the application home page](../../../public/assets/projects/web-archives/home_850x500.png)
_Application home page_

![Screenshot of the Wikipedia page contained in the Wikipedia archive](../../../public/assets/projects/web-archives/web-wikipedia_850x500.png)
_Wikipedia page contained in the Wikipedia archive_

## Features

- List recently opened web archives
- List available local web archives
- List of web archives available to download
- Print a page
- Night mode (Basic support)
- Zoom controls
- Search in page
- History
- Bookmarks
- Search a page
- Keyboard shortcuts
- Multi-windows
- Multi-tabs
- Random page
- Sandboxed pages (Pages are isolated from the web)
- Ask for confirmation when opening an external link

## Installation

WebArchives was developed and tested under [GNU/Linux][4], with [GNOME][5] in
sight. However, it can be used under other desktop environments.

No method is provided to install this application on other platforms, such as
**Windows** or **macOS**. This is a desktop application so it's not compatible
with mobile platforms such as **Android** or **iOS**.

### WebArchives in Flatpak format

[Flatpak][6] installation is required : [Getting Flatpak][7].

Then add the [Flathub][8] repository and install WebArchives from a
[terminal][9] :

```shell
$ flatpak remote-add flathub https://flathub.org/repo/flathub.flatpakrepo
$ flatpak install flathub com.github.birros.WebArchives
```

If this is your first Flatpak, restarting your session is necessary to make the
application appear in your launcher. It can also be executed from a terminal :

```shell
$ flatpak run com.github.birros.WebArchives
```

Some **problems** may occur when running the application, especially if your
desktop environment does not use [GTK+][10], such as **[Kde][11]**.

The installation of **two additional services** is then required on the system
side to solve these problems, requiring the execution of one of these commands
depending on your distribution :

**Debian & Ubuntu** :

```shell
$ sudo apt install tracker gvfs-backends
```

**Fedora** :

```shell
$ sudo dnf install tracker gvfs
```

### Other installation methods

The implementation of a common installation method for existing distributions
is in preparation, with **Debian** and **Ubuntu** as priorities.

## Alternatives

This application is directly inspired by the [Kiwix][12] application. In this
way WebArchives as well as Kiwix can read the Web archives in [ZIM format][13].
Kiwix is available for **Windows**, **GNU/Linux**, **iOS** and **Android**.

## Useful links

- [Source code of WebArchives][14]
- [Flatpakref of WebArchives (external application)][15]
- [Kiwix website][16]
- [List of applications hosted on Flathub][17]

<!-- links -->

[4]: https://en.wikipedia.org/wiki/Linux
[5]: https://en.wikipedia.org/wiki/GNOME
[6]: https://en.wikipedia.org/wiki/Flatpak
[7]: https://flatpak.org/getting.html
[8]: https://flathub.org/
[9]: https://en.wikipedia.org/wiki/Terminal_emulator
[10]: https://en.wikipedia.org/wiki/GTK+
[11]: https://en.wikipedia.org/wiki/KDE
[12]: https://en.wikipedia.org/wiki/Kiwix
[13]: https://en.wikipedia.org/wiki/ZIM_(file_format)
[14]: https://github.com/birros/web-archives
[15]: https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
[16]: https://www.kiwix.org/
[17]: https://flathub.org/apps.html
