---
title: Why choose hugo for my static website
date: 2017-12-29T00:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

To inaugurate the journal I would like to explain the technical and
technological choices used to publish this website.

<!-- more -->

No question of cluttering myself with a [dynamic website][1], meaning
maintenance and insecurity, or a [database][2] and worst yet a heavy
[framework][3]. My first choice was [Jekyll][4], fulfilling the first two
criteria, until I discovered [Hugo][5].

In addition to checking these same criteria, **Hugo** is a simple
[executable][6] allowing a complete and fast development, for my needs, without
requiring the installation of a [plug-in][7] to have essential functionalities
such as **multilingualism**, **[RSS feeds][8]**, or the ability to organize my
content in **sections**.

Apart from [rewriting][9] a few [templates][10] of the [Ananke][11] theme to
allow navigation between English and French, the implementation consists of
providing some informations in the configuration file, such as the name of the
website and the languages used, and arranging its content, written in
[Markdown][12], in the `content` folder.

The **Ananke** theme is the one given as example during the official
documentation tutorial. Although a little too _large_ for my taste, this one
offers good looking effortlessly.

## Complements

No need to say that the use of [free software][13] was registered from the
beginning. Are there still some popular [proprietary software][14] in the world
of [blogging][15] ?

This solution largely satisfies my needs of the moment, in the future the
implementation of a **comment** system will be done, my choice going to
[Staticman][16].

Hosting is provided by [GitHub Pages][17], the most judicious choice since the
sources are hosted on [GitHub][18] and do not want to bother me with the
maintenance of a [physical][19] or [virtual machine][20].

It is also the occasion to add a note, in the section of the website dedicated
to this purpose, concerning [Hugo's server mode and the local network][21].

<!-- links -->

[1]: https://en.wikipedia.org/wiki/Dynamic_web_page
[2]: https://en.wikipedia.org/wiki/Database
[3]: https://en.wikipedia.org/wiki/Software_framework
[4]: https://jekyllrb.com/
[5]: https://gohugo.io/
[6]: https://en.wikipedia.org/wiki/Executable
[7]: https://en.wikipedia.org/wiki/Plug-in_(computing)
[8]: https://en.wikipedia.org/wiki/RSS
[9]: https://en.wikipedia.org/wiki/Overwriting_(computer_science)
[10]: https://en.wikipedia.org/wiki/Web_template_system
[11]: https://github.com/budparr/gohugo-theme-ananke
[12]: https://en.wikipedia.org/wiki/Markdown
[13]: https://en.wikipedia.org/wiki/Free_software
[14]: https://en.wikipedia.org/wiki/Proprietary_software
[15]: https://en.wikipedia.org/wiki/Blog
[16]: https://staticman.net/
[17]: https://pages.github.com/
[18]: https://github.com/
[19]: https://en.wikipedia.org/wiki/Server_(computing)
[20]: https://en.wikipedia.org/wiki/Virtual_private_server
[21]: ./2017-12-29-hugo-server-local-network
