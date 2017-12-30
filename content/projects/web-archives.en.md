---
title: "Web archives"
---

A **Web archives reader** offering the ability to browse **offline** millions of
articles from large community projects such as [Wikipedia] or [Wikisource].

<!--more-->

## Screenshots

[![Screenshot of the application home page](/projects/web-archives/home.png)](/projects/web-archives/home.png)
*Application home page*

[![Screenshot of the Wikipedia page contained in the Wikipedia archive](/projects/web-archives/web-wikipedia.png)](/projects/web-archives/web-wikipedia.png)
*Wikipedia page contained in the Wikipedia archive*

## Features

- List recently opened Web archives
- List available local Web archives
- List of Web archives available to download
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
- Sandboxed pages (Pages are isolated from the Web)
- Ask for confirmation when opening an external link

## Installation and sources

If you are reading these lines from a [GNU/Linux] system and [Flatpak] is
installed, the following link will allow you to install the application
effortlessly : **[WebArchives]**. Otherwise, you must execute the following
command from a [terminal] :

```
flatpak install https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
```

No method is provided to install this application on other platforms, such as
**Windows** or **macOS**. This is a desktop application so it's not compatible
with mobile platforms such as **Android** or **iOS**.

The sources of the application are hosted on GitHub : [web-archives]. To install
it from sources, please refer to the [HACKING.md] file on the repository.

## Alternatives

This application is directly inspired by the [Kiwix] application. In this way
WebArchives as well as Kiwix can read the Web archives in [ZIM format]. Kiwix is
available for **Windows**, **GNU/Linux**, **iOS** and **Android**.

<!-- Liens externes et références -->

[Wikipedia]: https://en.wikipedia.org/wiki/Wikipedia
[Wikisource]: https://en.wikipedia.org/wiki/Wikisource
[GNU/Linux]: https://en.wikipedia.org/wiki/Linux
[Flatpak]: https://flatpak.org/
[WebArchives]: https://flathub.org/repo/appstream/com.github.birros.WebArchives.flatpakref
[terminal]: https://en.wikipedia.org/wiki/Terminal_emulator
[web-archives]: https://github.com/birros/web-archives
[HACKING.md]: https://github.com/birros/web-archives/blob/master/HACKING.md
[Kiwix]: http://www.kiwix.org/
[ZIM format]: https://en.wikipedia.org/wiki/ZIM_(file_format)
