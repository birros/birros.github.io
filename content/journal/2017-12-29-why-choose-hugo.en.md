---
title: Why choose hugo for my static website
date: 2017-12-29T00:00:00+01:00
type: post
---

To inaugurate the journal I would like to explain the technical and
technological choices used to publish this website.

<!--more-->

No question of cluttering myself with a [dynamic website], meaning maintenance
and insecurity, or a [database] and worst yet a heavy [framework]. My first
choice was [Jekyll], fulfilling the first two criteria, until I discovered
[Hugo].

In addition to checking these same criteria, __Hugo__ is a simple [executable]
allowing a complete and fast development, for my needs, without requiring the
installation of a [plug-in] to have essential functionalities such as
__multilingualism__, __[RSS feeds]__, or the ability to organize my content in
__sections__.

Apart from [rewriting] a few [templates] of the [Ananke] theme to allow
navigation between English and French, the implementation consists of providing
some informations in the configuration file, such as the name of the website
and the languages used, and arranging its content, written in [Markdown], in
the `content` folder.

The __Ananke__ theme is the one given as example during the official
documentation tutorial. Although a little too *large* for my taste, this one
offers good looking effortlessly.

## Complements

No need to say that the use of [free software] was registered from the
beginning. Are there still some popular [proprietary software] in the world of
[blogging] ?

This solution largely satisfies my needs of the moment, in the future the
implementation of a __comment__ system will be done, my choice going to
[Staticman].

Hosting is provided by [GitHub Pages], the most judicious choice since the
sources are hosted on [GitHub] and do not want to bother me with the
maintenance of a [physical] or [virtual machine].

It is also the occasion to add a note, in the section of the website dedicated
to this purpose, concerning [Hugo's server mode and the local network].

<!--External links and references-->

[executable]: https://en.wikipedia.org/wiki/Executable
[dynamic website]: https://en.wikipedia.org/wiki/Dynamic_web_page
[database]: https://en.wikipedia.org/wiki/Database
[framework]: https://en.wikipedia.org/wiki/Software_framework
[Jekyll]: https://jekyllrb.com/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Hugo]: https://gohugo.io/
[plug-in]: https://en.wikipedia.org/wiki/Plug-in_(computing)
[RSS feeds]: https://en.wikipedia.org/wiki/RSS
[templates]: https://en.wikipedia.org/wiki/Web_template_system
[Ananke]: https://github.com/budparr/gohugo-theme-ananke
[rewriting]: https://en.wikipedia.org/wiki/Overwriting_(computer_science)
[free software]: https://en.wikipedia.org/wiki/Free_software
[proprietary software]: https://en.wikipedia.org/wiki/Proprietary_software
[blogging]: https://en.wikipedia.org/wiki/Blog
[Staticman]: https://staticman.net/
[GitHub Pages]: https://pages.github.com/
[GitHub]: https://github.com/
[physical]: https://en.wikipedia.org/wiki/Server_(computing)
[virtual machine]: https://en.wikipedia.org/wiki/Virtual_private_server
[Hugo's server mode and the local network]: ../../notes/hugo-server-local-network
