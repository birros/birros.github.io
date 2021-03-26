---
title: Ajout du style des tableaux
date: 2018-05-15T17:54:00+01:00
author: Birros <birros@protonmail.com>
layout: Post
---

Petit récapitulatif de ce que j'ai fais pour styliser les tableaux du site.

<!-- more -->

## Mise en place

Puisque le rendu des tableaux [Markdown] effectué par [Hugo] n'ajoute pas de
classe [CSS] utilisable par [Bootstrap] pour embellir l'affichage, j'ai ajouté
un petit bout de code __CSS__ inspiré directement des [tableaux rayés (en)] de
__Bootstrap__:

```css
.blog-post table {
  width: 100%;
  max-width: 100%;
}

.blog-post table th[align="center"] {
  text-align: center;
}

.blog-post table th[align="right"] {
  text-align: right;
}

.blog-post table td,
.blog-post table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.blog-post table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.blog-post table tbody tr:nth-of-type(2n+1) {
  background-color: rgba(0,0,0,.05);
}
```

## Exemple de rendu d'un tableau

|    Fichiers    |       S0     |       S1     |       S2     |       S3     |
|:--------------:|:------------:|:------------:|:------------:|:------------:|
|    __F0__      |       ✔      |       ✔      |       ✖      |       ✖      |
|    __F1__      |       ✔      |       ✖      |       ✔      |       ✖      |
|    __F2__      |       ✖      |       ✖      |       ✖      |       ✔      |
|    __F3__      |       ✖      |       ✖      |       ✖      |       ✔      |
|    __F4__      |       ✖      |       ✖      |       ✔      |       ✖      |
|    __F5__      |       ✖      |       ✔      |       ✖      |       ✖      |

<!-- Liens -->

[Markdown]: https://fr.wikipedia.org/wiki/Markdown
[Hugo]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[CSS]: https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade
[Bootstrap]: https://fr.wikipedia.org/wiki/Bootstrap_(framework)
[tableaux rayés (en)]: https://getbootstrap.com/docs/4.0/content/tables/#striped-rows
