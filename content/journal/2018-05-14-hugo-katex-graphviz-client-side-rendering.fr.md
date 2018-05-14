---
title: "Hugo: rendu KaTex & Graphviz côté client"
date: 2018-05-14T22:05:00+01:00
type: post

# Activation du rendu KaTex & Graphviz
math: true
viz: true
---

Petit billet pour expliquer l'ajout du support des équations et des graphes au
sein des pages du site grâce aux bibliothèques logicielles KaTex et Graphviz.

<!--more-->

## Mise en place

Je voulais une solution simple et performante, idéalement avec le rendu effectué
côté serveur, mais malheureusement [Hugo] ne supportant pas l'ajout de [plugins]
pour étendre le rendu du contenu mon choix s'est porté sur le rendu côté client.

Pour cela j'ai fais le choix de [KaTex (en)] et [Viz.js (en)], le premier pour
sa vitesse de rendu comparativement à [MathJax], et le second pour son support
du langage [DOT].

Pour limiter l'inclusion des bibliothèques logicielles uniquement aux pages les
nécessitant, j'ai fais le choix d'ajouter deux paramètres au [front matter (en)]
de la page:

{{< highlight yaml >}}
# Activation du rendu KaTex & Graphviz
math: true
viz: true
{{< / highlight >}}

Ainsi je peux contrôler l'inclusion des fichiers `partials` au moyen de ce bout
de [template] placé dans le fichier `layouts/_default/baseof.html`:

{{< highlight go-html-template >}}
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
{{< / highlight >}}

__Remarque__: ne surtout pas oublier d'[échapper] le [tiret bas] (_undescore_
en anglais) présent au sein des équations mathématiques, ceci est dû à une
confusion dans la syntaxe du [Markdown], le tiret bas étant utilisé pour marquer
l'emphase d'un mot.

## Exemples de rendus

Le code source des exemples suivants se trouve dans les fichiers `partials`
situés à la fin de cette page.

- __Rendu d'une équation en ligne `(inline)`__:

    Lorem ipsum dolor $\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$ sit amet,
    consectetur.

- __Rendu d'une équation isolée `(display)`__:

    $$\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$$

- __Rendu d'un graphe isolé `(graphviz)`__:

    ```viz-dot
    graph graphname {
      a [label="Foo"];
      b [shape=box];
      a -- b -- c [color=blue];
      b -- d [style=dotted];
    }
    ```

## Fichiers de configuration

Contenu du fichier `layouts/partials/katex_support_style.html`:

{{< highlight html >}}
<!-- See `katex_support_script.html` for more informations -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
{{< / highlight >}}

Contenu du fichier `layouts/partials/katex_support_script.html`:

{{< highlight html >}}
<!--

  Don't forget to escape each undescore in math equation.
  See: https://gohugo.io/content-management/formats/#issues-with-markdown

  Example inline:

    Foo $\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$ bar.

  Example diplay:

    $$\sum\_{k=1}^{n} k = \frac {n(n+1)}{2}$$

-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js" integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/contrib/auto-render.min.js" integrity="sha384-IiI65aU9ZYub2MY9zhtKd1H2ps7xxf+eb2YFG9lX6uRqpXCvBTOidPRCXCrQ++Uc" crossorigin="anonymous"></script>
<script>
  renderMathInElement(document.body, {
    delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ]
    }
  );
</script>
{{< / highlight >}}

Contenu du fichier `layouts/partials/graphviz_support.html`:

{{< highlight html >}}
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
  function _viz_onload () {
    var vizPrefix = "language-viz-";
    var nodes = document.querySelectorAll("[class^=" + vizPrefix + "]");

    Array.prototype.forEach.call(nodes, function(x) {
      var engine;
      x.getAttribute("class").split(" ").forEach(function(cls) {
        if (cls.startsWith(vizPrefix)) {
          engine = cls.substr(vizPrefix.length);
        }
      });

      var svg = Viz(x.innerText, {format: "svg", engine: engine});
      var image = new DOMParser().parseFromString(svg, "image/svg+xml");
      image.documentElement.classList.add ("viz-svg");

      x.parentNode.insertBefore(image.documentElement, x);
      x.style.display = 'none';
      x.parentNode.style.backgroundColor = "white";
    });
  }
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.2/viz-lite.js" integrity="sha384-7I9CqnucKexw7RtAdviz5UzxKS2JQk7Ntdwol3AhvZ+eOPeR3mRmNPkETnm2HWy/" crossorigin="anonymous" async onload="_viz_onload()"></script>
{{< / highlight >}}

## Liens utiles

- [Using MathJax and Graphviz with Hugo (en)]
- [Hugo meets kramdown + KaTeX #gohugo (en)]
- [Math: Issues with Markdown (en)]
- [Tools for generating SRI hashes (en)]

<!-- Liens -->

[Hugo]: https://fr.wikipedia.org/wiki/Hugo_(logiciel)
[plugins]: https://fr.wikipedia.org/wiki/Plugin
[KaTex (en)]: https://khan.github.io/KaTeX/
[Viz.js (en)]: https://github.com/mdaines/viz.js/
[MathJax]: https://fr.wikipedia.org/wiki/MathJax
[DOT]: https://fr.wikipedia.org/wiki/DOT_(langage)
[front matter (en)]: https://gohugo.io/content-management/front-matter/
[template]: https://fr.wikipedia.org/wiki/Gabarit_(mise_en_page)
[échapper]: https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement
[tiret bas]: https://fr.wikipedia.org/wiki/Tiret_bas
[Markdown]: https://fr.wikipedia.org/wiki/Markdown
[Using MathJax and Graphviz with Hugo (en)]: https://zhoumingjun.github.io/2017/03/10/using-mathjax-and-graphviz-with-hugo/
[Hugo meets kramdown + KaTeX #gohugo (en)]: https://takuti.me/note/hugo-kramdown-and-katex/
[Math: Issues with Markdown (en)]: https://gohugo.io/content-management/formats/#issues-with-markdown
[Tools for generating SRI hashes (en)]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#Tools_for_generating_SRI_hashes
