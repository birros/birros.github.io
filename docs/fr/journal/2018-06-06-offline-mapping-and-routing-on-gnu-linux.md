---
title: "Cartographie et navigation hors ligne sur GNU/Linux"
date: 2018-06-06T09:45:00+01:00
author: Julien Muret <contact@julienmuret.fr>
layout: Post
---

Appréciant l'usage d'applications de cartographie et de navigation hors ligne
sur Android, j'ai fais quelques recherches sur les technologies existantes
fonctionnant sur GNU/Linux. Le but étant à terme d'offrir une fonctionnalité
similaire au logiciel GNOME Cartes.

<!-- more -->

## État des lieux

Deux applications tirent leur épingle du jeu sur smartphone:

1. __[OsmAnd][1]__: Très complète, le couteau suisse de la cartographie sur
mobile, par contre les performances sont moins bonnes que la suivante
2. __[Maps.me (en)][2]__: Moins complète que la précédente, cependant
parfaitement utilisable au quotidien, ça vélocité la rend très agréable à
utiliser

Ma première idée fut d'essayer d'exploiter les technologies développées par ces
deux projets, mais l'absence de documentation et la non modularité des deux
applications rend leur utilisation bien difficile dans un projet tiers.

## Choix technologiques

Après avoir comparé les logicielles libres les plus performants dans le domaine
mon choix s'est posé sur les trois suivants:

- __[Mapsforge (en)][3]__: Permet de construire un petit serveur de tuiles
__PNG__, mais peut aussi être utilisé pour faire du rendu __3D__ au moyen de son
module [VTM (en)][6]
- __[Graphhopper (en)][4]__: Déjà utilisé par [GNOME Cartes][7] pour effectuer
le [routage][9] en ligne. Performances impressionnantes avec gestion de
plusieurs profils, comme voiture, marche, vélo...
- __[Photon (en)][5]__: Projet proche de [Nominatim (en)][10], qui lui est
utilisé par GNOME Cartes, permettant de faire du [géocodage][8], ainsi que
l'opération inverse — obtenir une adresse à partir de coordonnées __GPS__

Au delà des performances appréciables de ces trois projets, l'avantage vient
aussi des données utilisées. Tout les trois offrent la possibilité de construire
leurs données utiles en exploitant directement les fichiers [PBF][11] du projet
[OpenStreetMap][12]. Et ce sans la nécessité d'utiliser du matériel très
performant, tout du moins si l'on se base sur un fichier de taille raisonnable,
comme une ville ou une région, et non sur un pays entier.

## Avantages & limitations

Les trois projets sont écris en [Java][13], un bon point pour la portabilité,
par contre un gouffre en terme de consommation de mémoire vive. Il faut prévoir
au minimum 2Go de [RAM][14] pour une région comme le Languedoc-Roussillon.

Malheureusement __Mapsforge__ ne permet pas de générer des tuiles vectorielles
au format [Mapbox Vector Tile (en)][15], qui semble faire consensus dans le
milieu de la cartographie. De plus, __Photon__ a beau être très performant ses
résultats restent tout de même moins pertinents que ceux de __Nominatim__.

Voici la taille des données utilisées par chacun des trois projets en se basant
sur un fichier __PBF__ de 182.8Mo:

- __Mapsforge__: 123.1Mo
- __Graphhopper__: 141.6Mo
- __Photon__: 243.4Mo

L'ensemble des données, sans le fichier __PBF__ de départ, une fois compressé au
format [XZ][16] fait 245.8Mo.

## Expérimentation

Pour expérimenter l'utilisation en production d'un petit serveur de tuiles je me
suis basé sur un projet reposant sur Mapsforge: [MapsforgeWeb (en)][17].

Pour générer les données de __Photon__ il faut mettre en place une instance de
__Nominatim__, pour ce faire j'ai utilisé ce projet __Docker__:
[NominatimDocker (en)][18].

Enfin j'ai mis en place une micro page Web afin de tester tout ça:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="leaflet-1.3.1/leaflet.css" />
    <script src="leaflet-1.3.1/leaflet.js"></script>

    <link rel="stylesheet" href="leaflet-control-geocoder-1.5.8/dist/Control.Geocoder.css" />
    <script src="leaflet-control-geocoder-1.5.8/dist/Control.Geocoder.js"></script>

    <link rel="stylesheet" href="leaflet-routing-machine-3.2.7/dist/leaflet-routing-machine.css" />
    <script src="leaflet-routing-machine-3.2.7/dist/leaflet-routing-machine.js"></script>

    <script src="lrm-graphhopper-1.2.0/dist/lrm-graphhopper.js"></script>
    <style>
      html, body, #mapid {
        margin: 0;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="mapid"></div>
    <script>
      var BBOX   = L.latLngBounds([42.221970,1.586256], [45.078210,4.947979]);
      var center = [43.2870381, 3.4709867];
      var zoom   = 13;
      var layer = L.tileLayer('http://localhost:20480/{style}/{z}/{x}/{y}', {
        maxZoom: 18,
        minZoom: 7,
        style: 'default'
      });

      var photonGeocoder = L.Control.Geocoder.photon({
        serviceUrl: 'http://localhost:2322/api',
        reverseUrl: 'http://localhost:2322/reverse',
        reverseQueryParams: {
          distance_sort: true
        }
      });
      var geocoder = L.Control.geocoder({
        geocoder: photonGeocoder
      });
      var router = L.Routing.control({
        router: L.Routing.graphHopper(undefined, {
          serviceUrl: 'http://localhost:8989/route'
        }),
        waypoints: [
          L.latLng(43.279049,3.469491),
          L.latLng(43.289077,3.447046)
        ],
        geocoder: photonGeocoder
      });

      var map = L.map('mapid');
      map.setMaxBounds(BBOX);
      map.setView(center, zoom);
      map.addLayer(layer);
      map.addControl(geocoder);
      map.addControl(router);
    </script>
  </body>
</html>
```

## Liens utiles

- [PocketMaps (en)][19]
- [Getting-Started-Map-Writer.md (en)][20]
- [MapCreation.md (en)][21]
- [Ticket Photon(en)][22]
- [Leaflet (en)][23]
- [leaflet-control-geocoder (en)][24]
- [leaflet-routing-machine(en)][25]
- [lrm-graphhopper (en)][26]
- [geofabrik (en)][27]

<!-- Liens -->

[1]: https://fr.wikipedia.org/wiki/OsmAnd
[2]: https://en.wikipedia.org/wiki/Maps.me
[3]: https://github.com/mapsforge/mapsforge
[4]: https://github.com/graphhopper/graphhopper
[5]: https://github.com/komoot/photon
[6]: https://github.com/mapsforge/vtm
[7]: https://fr.wikipedia.org/wiki/GNOME_Cartes
[8]: https://fr.wikipedia.org/wiki/G%C3%A9ocodage
[9]: https://fr.wikipedia.org/wiki/Routage
[10]: https://github.com/openstreetmap/Nominatim
[11]: https://fr.wikipedia.org/wiki/Protocol_Buffers
[12]: https://fr.wikipedia.org/wiki/OpenStreetMap
[13]: https://fr.wikipedia.org/wiki/Java_(langage)
[14]: https://fr.wikipedia.org/wiki/M%C3%A9moire_vive
[15]: https://www.mapbox.com/vector-tiles/specification/
[16]: https://fr.wikipedia.org/wiki/XZ_(format_de_fichier)
[17]: https://github.com/virus-warnning/mapsforge-web
[18]: https://github.com/mediagis/nominatim-docker
[19]: https://github.com/junjunguo/PocketMaps
[20]: https://github.com/mapsforge/mapsforge/blob/master/docs/Getting-Started-Map-Writer.md
[21]: https://github.com/mapsforge/mapsforge/blob/master/docs/MapCreation.md
[22]: https://github.com/komoot/photon/issues/328
[23]: https://github.com/Leaflet/Leaflet
[24]: https://github.com/perliedman/leaflet-control-geocoder
[25]: https://github.com/perliedman/leaflet-routing-machine
[26]: https://github.com/perliedman/lrm-graphhopper
[27]: https://download.geofabrik.de/
