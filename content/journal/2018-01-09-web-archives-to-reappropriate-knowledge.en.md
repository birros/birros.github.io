---
title: "WebArchives : To reappropriate knowledge"
date: 2018-01-09T23:30:00+01:00
type: post
---

The [web] gives us easy access to knowledge. However, this progress is
accompanied by **perverse effects**. As many **intermediaries** separate us
from knowledge, we sacrifice some of our **fundamental rights** in exchange
for comfort. It is therefore important to protect oneself against the
**risks** raised.

<!--more-->

First of all, it is necessary to differentiate [information] from the
[information medium], each medium having its own qualities and disadvantages,
the two main ones being :

- **[Paper medium]** :
  - **Pro** : requires no tool to access its content
  - **Con** : large storage space
- **[Digital medium]** :
  - **Pro** : fits in a smaller volume than the paper version
  - **Con** : depends on a tool to view its content

The existence of a third medium reconciling the best of these two worlds seems
hardly conceivable, it is therefore necessary to make a choise according to
circumstances while keeping in mind that **the paper medium remains the
preferred choice for unrestricted access to knowledge**.

This article focuses solely on the issues raised by access to [free content],
such as that provided by [Wikipedia], through a [computer].

## Escaping the intrinsic weaknesses of the Internet

**Wikipedia**, like all other Internet [services], has at least **two
conceptual weaknesses** :

1. **Accessibility** : an Internet connection is required to access the
content, and Wikipedia may be blocked by government order.
2. **Confidentiality** : the user has no formal guarantee on the anonymization
of its use of the content both on the network and on the Wikipedia server.

To solve these two problems, the idea is to **remove intermediaries**, by
placing content and a reading system directly on the device.

## Kiwix and its web archive format

[![Screenshot of the Wikipedia page, contained in the Wikipedia archive, displayed in Kiwix](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/kiwix-wikipedia.png)](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/kiwix-wikipedia.png)
*Wikipedia page, contained in the Wikipedia archive, displayed in Kiwix*

After this awerness my first reflex was to find out if **a solution already
existed**. Bingo ! **[Kiwix]** and its **[ZIM]** web archive format
immediately met my requirements. Even if the reasons that led to their
development are of a completely different nature, they provide a technical
solution to the above-mentioned problem.

Also, it is a [free software] and an [open format], which guarantees
[confidentiality] and **durability** of the data used.

## Why WebArchives exists

Knowing this **why develop WebArchives ?**

When I was thinking about this problem, the desktop version **Kiwix was
dying**, one of its dependencies no longer being maintained.

Because I'am a daily user of the [GNOME] desktop environment, I came up with
the idea of implementing **ZIM** file format support within the application
dedicated to consulting digital documents : [GNOME Documents].

But very quickly this idea seemed limited to me :

1. **ZIM format** : being **not recognized natively** by most [GNU/Linux]
distributions, listing the archives on the hard disk became complicated
2. **Internal server** : in order to display the content of an archive,
including embedded videos, its implementation became **a necessity**
3. **Downloadable content** : since no mechanism for discovering new content
was proposed, its creation was **difficult to include** within the application

Hence the birth of the WebArchives application.

## WebArchives development

Still to avoid reinventing the wheel, I decided very early on to use the
[software library] developed by the **Kiwix** team, allowing the use of
**ZIM** files.

Since [libzim] is developed in [C++], my choice of programming language turned
to this one. Unfortunately I was forced to juggle between libraries coded in
**C++** and others in [C].

The result giving a code that is difficult to read and therefore maintainable,
I made the decision to build a [binding] of this library thanks to the
[introspection] capacity of the [GObject] library of the GNOME environment.

As **GNOME** uses [GTK+] graphics library, the choice of the [Vala]
programming language seemed relevant, because this one offers an
[object-oriented paradigm] and is a [compiled language].

Graphically a mix of design rules from both **GNOME** and [Android] have
guided me in designing the interface, which should be as simple as possible.

## The future of WebArchives

[![Screenshot of the Wikipedia page, contained in the Wikipedia archive, displayed in WebArchives](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-wikipedia.png)](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-wikipedia.png)
*Wikipedia page, contained in the Wikipedia archive, displayed in WebArchives*

Ideally **WebArchives should not exist**, as web archives are documents almost
like other documents, they should be supported natively by GNOME Documents.
This is the **very long-term vision** of this project, its death. No need to
create one application per file format.

In the meantime I plan to make internal improvements, invisible to the user,
in order to **make the experience more fluid**. It is basically a question of
making the code asynchronous by using [threads].

Graphically the application is far from my ideal. Wanting to make it usable on
both large and small screens, as well as compatible with touch controls, I'm
waiting to see the result of the **GNOME** and [Purism] partnership about the
[Librem 5] smartphone running on **GNU/Linux**.

Not wanting to bother with package systems to distribute the application, I
chose to publish it only through the [Flatpak] system and the [Flathub]
repository. In the future, its presence in [Debian] repositories is possible
since its dependencies are almost all present in its repositories.

Today, WebArchives is based on the **ZIM** file format, which is for my
opinion the best performing one. However, once the application has reached a
certain maturity, it is not excluded to support other file formats, such as
[WARC] paired with **CDX**.

Other **functionalities** are possible in the **long term**:

- **Table of contents of the page displayed**
- **Navigation between archives** : to be able to open an external link of an
archive directly in the archive corresponding to the domain name
- **Manage a query from another application** : for example from GNOME Maps to
Wikipedia, to redirect to the corresponding archive.
- and many others...

## Beyond WebArchives

During the development of WebArchives I noticed the **absence of a number of
software components** to make life easier for both users and developers. These
topics will be developed in future articles :

- The existence of a kind of **GNOME Market**, looking like [GNOME Software]
but to manage the downloading and updating of content such as maps,
encyclopedias, application manuals, courses, tutorials, dictionaries...
- Too much rigidity in interface design, it is necessary to make the
**interfaces more "*organic*"**. As well as the absence of essential
components within [GLib] or **GTK+**, such as [ORM] or **VirtualListBox**.
- Rethinking the way user data is managed : **a meta file system** oriented
synchronization, backup and confidentiality
- Establish **more [crowdsourcing]** : know-how, construction, company, school
content...

## Conclusion

[![Screenshot of the WebArchives homepage](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-home.png)](/journal/2018-01-09-web-archives-to-reappropriate-knowledge/web-archives-home.png)
*WebArchives homepage*

In the end, this application is especially useful to me when my Internet
connection is down. In addition, I have less apprehension to search for
information concerning sensitive subjects because I am certain that I am not
being spy, whereas on the Wikipedia website I censor myself for fear of being
monitored.

Some will say that this tool has **no interest** today, because Internet
access has never been so simple. They're not entirely wrong, but you have to
think of this tool as a **fire extinguisher**, you don't need it in your
everyday life, but you may one day need it. Nothing tells us that tomorrow's
world will be free, **better safe than sorry**.

**Another advantage**, with such tool is very easy to share knowledge.
**Copying a digital file will always be easier and faster than copying a paper
book**.

Not wanting to go into too much detail, this article doesn't talk about all
that I learned by making this app, focusing essentially on why it exists. The
main purpose of this text is therefore to summarize the main stages of this
project.

## Useful Links

- [WebArchives project presentation sheet]
- [WebArchives sources]
- [Link to Flathub applications including WebArchives]
- [Kiwix website]
- [Debian Website]
- [Flatpak website]
- [Flathub website]
- [GNOME website]
- [GObject introspection]

<!--External links and references-->

[web]: https://en.wikipedia.org/wiki/World_Wide_Web
[Paper medium]: https://en.wikipedia.org/wiki/Book
[Digital medium]: https://en.wikipedia.org/wiki/E-book
[information]: https://en.wikipedia.org/wiki/Information
[information medium]: https://en.wikipedia.org/wiki/Data_storage
[free content]: https://en.wikipedia.org/wiki/Free_content
[Wikipedia]: https://en.wikipedia.org/wiki/Wikipedia
[computer]: https://en.wikipedia.org/wiki/Computer
[services]: https://en.wikipedia.org/wiki/Server_(computing)
[Kiwix]: https://en.wikipedia.org/wiki/Kiwix
[ZIM]: https://en.wikipedia.org/wiki/ZIM_(file_format)
[free software]: https://en.wikipedia.org/wiki/Free_software
[open format]: https://en.wikipedia.org/wiki/Open_format
[confidentiality]: https://en.wikipedia.org/wiki/Confidentiality
[GNOME]: https://en.wikipedia.org/wiki/GNOME
[GNOME Documents]: https://wiki.gnome.org/Apps/Documents
[GNU/Linux]: https://en.wikipedia.org/wiki/Linux
[software library]: https://en.wikipedia.org/wiki/Library_(computing)
[libzim]: https://github.com/openzim/libzim
[C++]: https://en.wikipedia.org/wiki/C%2B%2B
[C]: https://en.wikipedia.org/wiki/C_(programming_language)
[binding]: https://en.wikipedia.org/wiki/Language_binding
[GObject]: https://en.wikipedia.org/wiki/GObject
[Vala]: https://en.wikipedia.org/wiki/Vala_(programming_language)
[object-oriented paradigm]: https://en.wikipedia.org/wiki/Object-oriented_programming
[compiled language]: https://en.wikipedia.org/wiki/Binary_file
[GTK+]: https://en.wikipedia.org/wiki/GTK%2B
[Android]: https://en.wikipedia.org/wiki/Android_(operating_system)
[introspection]: https://en.wikipedia.org/wiki/Reflection_(computer_programming)
[Purism]: https://puri.sm/
[Librem 5]: https://puri.sm/shop/librem-5/
[Flatpak]: https://en.wikipedia.org/wiki/Flatpak
[Flathub]: https://flathub.org/
[Debian]: https://en.wikipedia.org/wiki/Debian
[WARC]: https://en.wikipedia.org/wiki/Web_ARChive
[GNOME Software]: https://en.wikipedia.org/wiki/GNOME_Software
[GLib]: https://en.wikipedia.org/wiki/GLib
[ORM]: https://en.wikipedia.org/wiki/Object-relational_mapping
[threads]: https://en.wikipedia.org/wiki/Thread_(computing)
[crowdsourcing]: https://en.wikipedia.org/wiki/Crowdsourcing
[WebArchives project presentation sheet]: ../../projects/web-archives
[WebArchives sources]: https://github.com/birros/web-archives
[Link to Flathub applications including WebArchives]: https://flathub.org/apps.html
[Kiwix website]: https://www.kiwix.org/
[Debian website]: https://www.debian.org/
[Flatpak website]: https://www.flatpak.org/
[Flathub website]: https://flathub.org/
[GNOME website]: https://www.gnome.org/
[GObject introspection]: https://wiki.gnome.org/Projects/GObjectIntrospection
