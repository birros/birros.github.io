---
title: 'Hugo: rendu KaTex & Graphviz côté client'
date: 2018-05-14T22:05:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Petit billet pour expliquer l'ajout du support des équations et des graphes au
sein des pages du site grâce aux bibliothèques logicielles KaTex et Graphviz.

<!-- more -->

## Mise en place

Je voulais une solution simple et performante, idéalement avec le rendu effectué
côté serveur, mais malheureusement [Hugo][1] ne supportant pas l'ajout de
[plugins][2] pour étendre le rendu du contenu mon choix s'est porté sur le rendu
côté client.

Pour cela j'ai fais le choix de [KaTex (en)][3] et [Viz.js (en)][4], le premier
pour sa vitesse de rendu comparativement à [MathJax][5], et le second pour son
support du langage [DOT][6].

Pour limiter l'inclusion des bibliothèques logicielles uniquement aux pages les
nécessitant, j'ai fais le choix d'ajouter deux paramètres au
[front matter (en)][7] de la page:

```yaml
# Activation du rendu KaTex & Graphviz
math: true
viz: true
```

Ainsi je peux contrôler l'inclusion des fichiers `partials` au moyen de ce bout
de [template][8] placé dans le fichier `layouts/_default/baseof.html`:

```go-html-template
<!-- head -->
{{ if .Params.math }}
  {{ partial "katex_support_style.html" . }}
{{ end }}

<!-- body -->
{{ if .Params.math }}
  {{ partial "katex_support_script.html" . }}
{{ end }}
{{ if .Params.viz }}
  {{ partial "graphviz_support.html" . }}
{{ end }}
```

**Remarque**: ne surtout pas oublier d'[échapper][9] le [tiret bas][10]
(_undescore_ en anglais) présent au sein des équations mathématiques, ceci est
dû à une confusion dans la syntaxe du [Markdown][11], le tiret bas étant utilisé
pour marquer l'emphase d'un mot.

## Exemples de rendus

Le code source des exemples suivants se trouve dans les fichiers `partials`
situés à la fin de cette page.

- **Rendu d'une équation en ligne `(inline)`**:

  Lorem ipsum dolor $\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$ sit amet,
  consectetur.

- **Rendu d'une équation isolée `(display)`**:

  $$\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$$

- **Rendu d'un graphe isolé `(graphviz)`**:

  ```dot
  graph graphname {
    a [label="Foo"];
    b [shape=box];
    a -- b -- c [color=blue];
    b -- d [style=dotted];
  }
  ```

## Fichiers de configuration

Contenu du fichier `layouts/partials/katex_support_style.html`:

```html
<!-- See `katex_support_script.html` for more informations -->

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
  integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei"
  crossorigin="anonymous"
/>
```

Contenu du fichier `layouts/partials/katex_support_script.html`:

```html
<!--

  Don't forget to escape each undescore in math equation.
  See: https://gohugo.io/content-management/formats/#issues-with-markdown

  Example inline:

    Foo $\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$ bar.

  Example diplay:

    $$\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$$

-->

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js"
  integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/contrib/auto-render.min.js"
  integrity="sha384-IiI65aU9ZYub2MY9zhtKd1H2ps7xxf+eb2YFG9lX6uRqpXCvBTOidPRCXCrQ++Uc"
  crossorigin="anonymous"
></script>
<script>
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
  })
</script>
```

Contenu du fichier `layouts/partials/graphviz_support.html`:

````html
<!--

  CSS:

    .viz-svg {
      margin: auto;
      display: block;
      max-width: 100%;
    }

  Example:

    ```viz-dot
    graph graphname {
      a [label="Foo"];
      b [shape=box];
      a -- b -- c [color=blue];
      b -- d [style=dotted];
    }
    ```

-->

<script type="text/javascript">
  function _viz_onload() {
    var vizPrefix = 'language-viz-'
    var nodes = document.querySelectorAll('[class^=' + vizPrefix + ']')

    Array.prototype.forEach.call(nodes, function (x) {
      var engine
      x.getAttribute('class')
        .split(' ')
        .forEach(function (cls) {
          if (cls.startsWith(vizPrefix)) {
            engine = cls.substr(vizPrefix.length)
          }
        })

      var svg = Viz(x.innerText, { format: 'svg', engine: engine })
      var image = new DOMParser().parseFromString(svg, 'image/svg+xml')
      image.documentElement.classList.add('viz-svg')

      x.parentNode.insertBefore(image.documentElement, x)
      x.style.display = 'none'
      x.parentNode.style.backgroundColor = 'white'
    })
  }
</script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.2/viz-lite.js"
  integrity="sha384-7I9CqnucKexw7RtAdviz5UzxKS2JQk7Ntdwol3AhvZ+eOPeR3mRmNPkETnm2HWy/"
  crossorigin="anonymous"
  async
  onload="_viz_onload()"
></script>
````

## Liens utiles

- [Using MathJax and Graphviz with Hugo (en)][12]
- [Hugo meets kramdown + KaTeX #gohugo (en)][13]
- [Math: Issues with Markdown (en)][14]
- [Tools for generating SRI hashes (en)][15]

<!-- links -->

[1]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[2]: https://fr.wikipedia.org/wiki/Plugin
[3]: https://khan.github.io/KaTeX/
[4]: https://github.com/mdaines/viz.js/
[5]: https://fr.wikipedia.org/wiki/MathJax
[6]: https://fr.wikipedia.org/wiki/DOT_(langage)
[7]: https://gohugo.io/content-management/front-matter/
[8]: https://fr.wikipedia.org/wiki/Gabarit_(mise_en_page)
[9]: https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement
[10]: https://fr.wikipedia.org/wiki/Tiret_bas
[11]: https://fr.wikipedia.org/wiki/Markdown
[12]: https://zhoumingjun.github.io/2017/03/10/using-mathjax-and-graphviz-with-hugo/
[13]: https://takuti.me/note/hugo-kramdown-and-katex/
[14]: https://gohugo.io/content-management/formats/#issues-with-markdown
[15]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#Tools_for_generating_SRI_hashes
