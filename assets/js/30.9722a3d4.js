(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{406:function(e,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Billet résumant la mise en place du rendu côté serveur des graphes utilisés sur\nce site.")]),e._v(" "),a("h2",{attrs:{id:"avantage-et-limitation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avantage-et-limitation"}},[e._v("#")]),e._v(" Avantage et limitation")]),e._v(" "),a("p",[e._v("Le "),a("a",{attrs:{href:"https://support.mozilla.org/fr/kb/retirer-tout-le-superflu-des-pages-web-grace-au-mode-lecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("mode lecture"),a("OutboundLink")],1),e._v(" des navigateurs Web ainsi que les "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/RSS",target:"_blank",rel:"noopener noreferrer"}},[e._v("flux RSS"),a("OutboundLink")],1),e._v(" ne supportant pas\nle JavaScript, effectuer le rendu côté client est inenvisageable dans ces cas\nlà. Comme "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Hugo_(logiciel)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hugo"),a("OutboundLink")],1),e._v(" n'est pas extensible, l'idée est alors d'utiliser un deuxième\noutil pour réaliser le rendu des graphes contenus dans les pages crées par\n"),a("strong",[e._v("Hugo")]),e._v(".")]),e._v(" "),a("p",[e._v("Cette solution augmente la durée de construction du site, néanmoins cela reste\nraisonnable pour le moment du fait que peu de graphes sont présents sur\ncelui-ci.")]),e._v(" "),a("h2",{attrs:{id:"vizpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vizpack"}},[e._v("#")]),e._v(" Vizpack")]),e._v(" "),a("p",[e._v("J'ai développé pour l'occasion un petit outil en ligne de commande, baptisé\n"),a("a",{attrs:{href:"https://github.com/birros/vizpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vizpack (en)"),a("OutboundLink")],1),e._v(", permettant de transformer tout les éléments "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Hypertext_Markup_Language",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML"),a("OutboundLink")],1),e._v(" contenant une\ndescription de graphe, écrite dans un langage reconnu par "),a("a",{attrs:{href:"https://github.com/mdaines/viz.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Viz.js (en)"),a("OutboundLink")],1),e._v(", en\néléments "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics",target:"_blank",rel:"noopener noreferrer"}},[e._v("SVG"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Cet outil s'appuie sur un "),a("em",[e._v("préfixe")]),e._v(" renseigné par l'utilisateur pour cibler les\néléments contenants les graphes. Le "),a("em",[e._v("préfixe")]),e._v(" choisi dans le cas présent est\n"),a("code",[e._v("language-viz-")]),e._v(".")]),e._v(" "),a("p",[e._v("La valeur de ce "),a("em",[e._v("préfixe")]),e._v(" vient du fonctionnement d'"),a("strong",[e._v("Hugo")]),e._v(" et de la manière de\ndécrire un graphe au sein de mes page en "),a("strong",[e._v("Markdown")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token code"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("```")]),a("span",{pre:!0,attrs:{class:"token code-language"}},[e._v("viz-dot")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token code-block language-viz-dot"}},[e._v('graph graphname {\n  a [label="Foo"];\n  b [shape=box];\n  a -- b -- c [color=blue];\n  b -- d [style=dotted];\n}')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("```")])]),e._v("\n")])])]),a("p",[e._v("En écrivant le bloc précédent, "),a("strong",[e._v("Hugo")]),e._v(" incorporera le code du graphe au sein\nd'un élément HTML dont la classe "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS"),a("OutboundLink")],1),e._v(" sera "),a("code",[e._v("language-viz-dot")]),e._v(". Le langage\n"),a("code",[e._v("viz-dot")]),e._v(" indiqué ici n'existe pas, on ajoute le préfixe "),a("code",[e._v("viz-")]),e._v(" au langage de\ngraphe utilisé pour indiquer explicitement que le graphe doit être rendu.")]),e._v(" "),a("p",[e._v("Sachant qu'un graphe peut être écrit dans un autre langage que le "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/DOT_(langage)",target:"_blank",rel:"noopener noreferrer"}},[e._v("DOT"),a("OutboundLink")],1),e._v(", tout\nélément HTML dont la classe CSS commence par "),a("code",[e._v("language-viz-")]),e._v(" est un graphe dont\nle rendu doit être effectué.")]),e._v(" "),a("p",[e._v("Ainsi on effectue le rendu de l'ensemble des graphes incorporés dans une page\nHTML, crée par "),a("strong",[e._v("Hugo")]),e._v(", en utilisant la commande suivante:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ vizpack language-viz- input.html output.html\n")])])]),a("h2",{attrs:{id:"gabarit-hugo-variable-d-environnement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gabarit-hugo-variable-d-environnement"}},[e._v("#")]),e._v(" Gabarit Hugo & variable d’environnement")]),e._v(" "),a("p",[e._v("Ce rendu côté serveur est intéressant uniquement au moment du déploiement d'une\nnouvelle version du site. En effet durant le développement d'une nouvelle\nversion, notamment lors de la rédaction d'un nouvel article, le rendu côté\nclient prend tout son sens puisque apportant un aperçu en temps réel du résultat\nfinal.")]),e._v(" "),a("p",[e._v("Ainsi j'ai modifié le gabarit "),a("code",[e._v("layouts/_default/baseof.html")]),e._v(" pour désactiver\nl'inclusion du code "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),a("OutboundLink")],1),e._v(", permettant le rendu côté client, en\nrenseignant la variable d'environnement "),a("code",[e._v("USE_VIZPACK")]),e._v(" au moment d'appeler\n"),a("strong",[e._v("Hugo")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-go-template-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{{ $useVizpack := eq (getenv "USE_VIZPACK") "true" }}\n{{ if and .Params.viz (not $useVizpack) }}\n  {{ partial "graphviz_support.html" . }}\n{{ end }}\n')])])]),a("p",[e._v("Pour empêcher le rendu côté client il suffit alors d'appeler "),a("strong",[e._v("Hugo")]),e._v(" comme\nsuit:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USE_VIZPACK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true hugo\n")])])]),a("h2",{attrs:{id:"script-de-deploiement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-de-deploiement"}},[e._v("#")]),e._v(" Script de déploiement")]),e._v(" "),a("p",[e._v("Enfin j'ai créé un petit "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Langage_de_script",target:"_blank",rel:"noopener noreferrer"}},[e._v("script"),a("OutboundLink")],1),e._v(" pour effectuer le rendu des graphes sur\nl'ensemble des pages HTML crées par "),a("strong",[e._v("Hugo")]),e._v(", je l'ai appelé\n"),a("code",[e._v("scripts/hugo-vizpack.sh")]),e._v(".")]),e._v(" "),a("p",[e._v("Pour réduire au maximum le temps d'exécution de ce script, j'effectue un premier\ntri avec "),a("code",[e._v("find")]),e._v(" et "),a("code",[e._v("grep")]),e._v(" pour ne traiter que les pages HTML contenant la chaîne\nde caractères "),a("code",[e._v("language-viz-")]),e._v(", puis je parallélise les appels à "),a("code",[e._v("vizpack")]),e._v(" en\nconfigurant "),a("code",[e._v("xargs")]),e._v(" pour l'occasion:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REGEX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*\\.\\(html\\)"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"language-viz-"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VIZPACK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./node_modules/.bin/vizpack"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# vizpack each html files of the public folder containing $PREFIX string inside.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" public -type f -regex "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$REGEX")]),e._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -l "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$PREFIX")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -P "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -I "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$VIZPACK")]),e._v(" --quiet "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$PREFIX")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("J'ai juste eu à modifier "),a("code",[e._v("scripts/deploy.sh")]),e._v(" pour ajouter le rendu effectué par\n"),a("code",[e._v("hugo-vizpack.sh")]),e._v(" après un premier appel à "),a("strong",[e._v("Hugo")]),e._v(", en prenant soin de\ndésactiver le rendu côté client:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USE_VIZPACK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true hugo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ./scripts/hugo-vizpack.sh\n")])])]),a("h2",{attrs:{id:"et-katex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#et-katex"}},[e._v("#")]),e._v(" Et KaTeX ?")]),e._v(" "),a("p",[e._v("Satisfait de cette méthode j'envisage le même procédé pour le rendu des formules\nmathématiques, cependant "),a("a",{attrs:{href:"https://khan.github.io/KaTeX/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KaTeX (en)"),a("OutboundLink")],1),e._v(" n'offrant pas de rendu en "),a("strong",[e._v("SVG")]),e._v(", il\nfaudrait donc que je me rabatte sur "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/MathJax",target:"_blank",rel:"noopener noreferrer"}},[e._v("MathJax"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Je préfère patienter un peu histoire de voir comment évolue "),a("strong",[e._v("KaTeX")]),e._v(", ayant\nmoins besoin d'écrire des équations que de graphes pour l'instant, rien ne\npresse.")])])}),[],!1,null,null,null);t.default=r.exports}}]);