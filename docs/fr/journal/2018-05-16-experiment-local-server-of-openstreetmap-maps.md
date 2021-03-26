---
title: "Expérimentation: Serveur local de cartes OpenStreetMap"
date: 2018-05-16T22:07:00+01:00
author: Julien Muret <contact@julienmuret.fr>
layout: Post
---

Petit récapitulatif de mes expérimentations avec OpenStreetMap et OpenMapTiles.

<!-- more -->

## Introduction

Le but de la manœuvre est de pouvoir consulter hors ligne des cartes issues du
projet [OpenStreetMap] sur mon ordinateur portable. J'ai jeté mon dévolu sur les
outils mis en place par [OpenMapTiles (en)], ceux-ci étant libres et plutôt
performants, tout du moins dans une certaine mesure. [OmsAnd] et [Maps.me (en)]
me faisant de l’œil mais leur utilisation en tant que logiciel bureau n'est pas
du tout aboutie.

__Cette mise en œuvre a une principale limitation, ne servir que des tuiles et
ne pas fournir de service de planification d'itinéraire ou de recherche de
lieu.__

## Obtenir les cartes

Les cartes se présentent sous le format `mbtiles`, deux méthodes existent pour
les obtenir:

1. __Recommandée (inscription requise)__: télécharger des [cartes (en)] sur le
site d'OpenMapTiles
2. En les générant depuis des fichiers `osm.pbf` téléchargés depuis [Geofabrik
(en)]. La encore deux solutions existent:
  1. La méthode recommandée par __OpenMapTiles__, non testée car très lourde par
  contre offrant des cartes totalement compatibles avec le serveur: [Générer ses
  propres cartes (en)]
  2. En utilisant un petit outil en ligne de commande d'un développeur
  indépendant au projet. Cependant obtenir une carte aussi complète que les
  précédentes semble compliqué: [tilemaker (en)]

## Configuration du serveur

Le serveur peut être directement lancé sans nécessiter de configuration dès
maintenant, cependant sans définir quel style utiliser, les données des cartes
apparaîtront en brut. Il faut alors __créer un dossier__ ayant cette
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
        "bounds": [1.686256,42.32197,4.847979,44.97821],
        "center": [3.47855,43.29512,12]
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

La valeur de `bounds` peut être choisie en utilisant l'outil [BoundingBox (en)].

Ensuite il faut télécharger le style [osm-bright (en)] et le placer dans le
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

Et enfin installer les polices de caractères [OpenMapTiles fonts (en)] dans le
dossier `fonts`.

## Lancement du serveur

Pour lancer le serveur, depuis le dossier préalablement construit, il suffit
d'utiliser la commande qui suit, détaillée sur la page d'accueil du dépôt de
[tileserver-gl (en)]. Les cartes sont alors servies aussi bien au format [vector
tiles (en)] que [PNG] à l'adresse suivante: `http://localhost:8080`.

```shell
docker run --rm -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl
```

__Si [SELinux] est présent sur votre système, penser à le désactiver en lançant
ceci:__

```shell
setenforce 0

# Et Pour réactiver SELinux:
setenforce 1
```

<!-- Liens -->

[OpenStreetMap]: https://fr.wikipedia.org/wiki/OpenStreetMap
[OpenMapTiles (en)]: https://openmaptiles.org/
[OmsAnd]: https://fr.wikipedia.org/wiki/OsmAnd
[Maps.me (en)]: https://en.wikipedia.org/wiki/Maps.me
[cartes (en)]: https://openmaptiles.com/downloads/
[Geofabrik (en)]: https://download.geofabrik.de/
[Générer ses propres cartes (en)]: https://openmaptiles.org/docs/generate/generate-openmaptiles/
[tilemaker (en)]: https://github.com/systemed/tilemaker
[BoundingBox (en)]: http://boundingbox.klokantech.com/
[osm-bright (en)]: https://github.com/openmaptiles/osm-bright-gl-style/releases/tag/v1.6
[OpenMapTiles fonts (en)]: https://github.com/openmaptiles/fonts/releases/tag/v2.0
[tileserver-gl (en)]: https://github.com/klokantech/tileserver-gl
[vector tiles (en)]: https://en.wikipedia.org/wiki/Vector_tiles
[PNG]: https://fr.wikipedia.org/wiki/Portable_Network_Graphics
[SELinux]: https://fr.wikipedia.org/wiki/SELinux
