---
title: 'Expérimentation: Serveur local de cartes OpenStreetMap'
date: 2018-05-16T22:07:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Petit récapitulatif de mes expérimentations avec OpenStreetMap et OpenMapTiles.

<!-- more -->

## Introduction

Le but de la manœuvre est de pouvoir consulter hors ligne des cartes issues du
projet [OpenStreetMap][1] sur mon ordinateur portable. J'ai jeté mon dévolu sur
les outils mis en place par [OpenMapTiles (en)][2], ceux-ci étant libres et
plutôt performants, tout du moins dans une certaine mesure. [OmsAnd][3] et
[Maps.me (en)][4] me faisant de l’œil mais leur utilisation en tant que logiciel
bureau n'est pas du tout aboutie.

**Cette mise en œuvre a une principale limitation, ne servir que des tuiles et
ne pas fournir de service de planification d'itinéraire ou de recherche de
lieu.**

## Obtenir les cartes

Les cartes se présentent sous le format `mbtiles`, deux méthodes existent pour
les obtenir:

1. **Recommandée (inscription requise)**: télécharger des [cartes (en)][5] sur
   le site d'OpenMapTiles

2. En les générant depuis des fichiers `osm.pbf` téléchargés depuis
   [Geofabrik (en)][6]. La encore deux solutions existent:

3. La méthode recommandée par **OpenMapTiles**, non testée car très lourde par
   contre offrant des cartes totalement compatibles avec le serveur :
   [Générer ses propres cartes (en)][7]

4. En utilisant un petit outil en ligne de commande d'un développeur
   indépendant au projet. Cependant obtenir une carte aussi complète que les
   précédentes semble compliqué: [tilemaker (en)][8]

## Configuration du serveur

Le serveur peut être directement lancé sans nécessiter de configuration dès
maintenant, cependant sans définir quel style utiliser, les données des cartes
apparaîtront en brut. Il faut alors **créer un dossier** ayant cette
architecture, en prenant soin de placer les cartes `mbtiles` dans le dossier
portant le même nom:

```text
.
├── config.json
├── styles
│   └── osm-bright
├── fonts
└── mbtiles
```

Le fichier `config.json` se définit comme ceci:

```json
{
  "options": {
    "paths": {
      "styles": "styles",
      "fonts": "fonts",
      "mbtiles": "mbtiles"
    }
  },
  "styles": {
    "osm-bright": {
      "style": "osm-bright/style-local.json",
      "tilejson": {
        "type": "overlay",
        "bounds": [1.686256, 42.32197, 4.847979, 44.97821],
        "center": [3.47855, 43.29512, 12]
      }
    }
  },
  "data": {
    "2017-07-03_france_languedoc-roussillon": {
      "mbtiles": "2017-07-03_france_languedoc-roussillon.mbtiles"
    }
  }
}
```

La valeur de `bounds` peut être choisie en utilisant l'outil
[BoundingBox (en)][9].

Ensuite il faut télécharger le style [osm-bright (en)][10] et le placer dans le
dossier `styles/osm-bright`, puis renseigner la carte à utiliser au sein du
fichier `styles/osm-bright/style-local.json`.

```json
{"...",

  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "mbtiles://2017-07-03_france_languedoc-roussillon.mbtiles"
    }
  },

"..."}
```

Et enfin installer les polices de caractères [OpenMapTiles fonts (en)][11] dans
le dossier `fonts`.

## Lancement du serveur

Pour lancer le serveur, depuis le dossier préalablement construit, il suffit
d'utiliser la commande qui suit, détaillée sur la page d'accueil du dépôt de
[tileserver-gl (en)][12]. Les cartes sont alors servies aussi bien au format
[vector tiles (en)][13] que [PNG][14] à l'adresse suivante :
`http://localhost:8080`.

```shell
$ docker run --rm -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl
```

**Si [SELinux][15] est présent sur votre système, penser à le désactiver en
lançant ceci :**

```shell
$ sudo setenforce 0

# Et Pour réactiver SELinux:
$ sudo setenforce 1
```

<!-- links -->

[1]: https://fr.wikipedia.org/wiki/OpenStreetMap
[2]: https://openmaptiles.org/
[3]: https://fr.wikipedia.org/wiki/OsmAnd
[4]: https://en.wikipedia.org/wiki/Maps.me
[5]: https://openmaptiles.com/downloads/
[6]: https://download.geofabrik.de/
[7]: https://openmaptiles.org/docs/generate/generate-openmaptiles/
[8]: https://github.com/systemed/tilemaker
[9]: http://boundingbox.klokantech.com/
[10]: https://github.com/openmaptiles/osm-bright-gl-style/releases/tag/v1.6
[11]: https://github.com/openmaptiles/fonts/releases/tag/v2.0
[12]: https://github.com/klokantech/tileserver-gl
[13]: https://en.wikipedia.org/wiki/Vector_tiles
[14]: https://fr.wikipedia.org/wiki/Portable_Network_Graphics
[15]: https://fr.wikipedia.org/wiki/SELinux
