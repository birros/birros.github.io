---
title: Ajout du style des tableaux
date: 2018-05-15T17:54:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Petit récapitulatif de ce que j'ai fais pour styliser les tableaux du site.

<!-- more -->

## Mise en place

Puisque le rendu des tableaux [Markdown][1] effectué par [Hugo][2] n'ajoute pas
de classe [CSS][3] utilisable par [Bootstrap][4] pour embellir l'affichage, j'ai
ajouté un petit bout de code **CSS** inspiré directement des
[tableaux rayés (en)][5] de **Bootstrap** :

```css
.blog-post table {
  width: 100%;
  max-width: 100%;
}

.blog-post table th[align='center'] {
  text-align: center;
}

.blog-post table th[align='right'] {
  text-align: right;
}

.blog-post table td,
.blog-post table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.blog-post table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.blog-post table tbody tr:nth-of-type(2n + 1) {
  background-color: rgba(0, 0, 0, 0.05);
}
```

## Exemple de rendu d'un tableau

| Fichiers | S0  | S1  | S2  | S3  |
| :------: | :-: | :-: | :-: | :-: |
|  **F0**  |  ✔  |  ✔  |  ✖  |  ✖  |
|  **F1**  |  ✔  |  ✖  |  ✔  |  ✖  |
|  **F2**  |  ✖  |  ✖  |  ✖  |  ✔  |
|  **F3**  |  ✖  |  ✖  |  ✖  |  ✔  |
|  **F4**  |  ✖  |  ✖  |  ✔  |  ✖  |
|  **F5**  |  ✖  |  ✔  |  ✖  |  ✖  |

<!-- links -->

[1]: https://fr.wikipedia.org/wiki/Markdown
[2]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[3]: https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade
[4]: https://fr.wikipedia.org/wiki/Bootstrap_(framework)
[5]: https://getbootstrap.com/docs/4.0/content/tables/#striped-rows
