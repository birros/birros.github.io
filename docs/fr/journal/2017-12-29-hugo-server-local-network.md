---
title: 'Hugo : serveur et réseau local'
date: 2017-12-29T00:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Parallèlement à la documentation officielle et son [tutoriel d'accueil (en)][1],
je tiens à ajouter la [ligne de commande][2] permettant de lancer Hugo en mode
serveur sur le [réseau local][3] afin de consulter le site depuis un autre
périphérique, comme par exemple un [ordiphone][4].

<!-- summary_links -->

[1]: https://gohugo.io/getting-started/quick-start/
[2]: https://fr.wikipedia.org/wiki/Commande_informatique
[3]: https://fr.wikipedia.org/wiki/R%C3%A9seau_local
[4]: https://fr.wikipedia.org/wiki/Smartphone

<!-- more -->

```shell
$ hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL [BASEURL]
```

Explication des arguments :

- **`-D`** : publier les brouillons
- **`--disableFastRender`** : forcer le rendu complet de la page, semble
  supprimer certaines erreurs de rendu, à vérifier
- **`--bind 0.0.0.0`** : écouter les requêtes quelque soit leur origine
- **`--baseURL [BASEURL]`** : spécifier quelle est l'adresse du site, pour cela
  il faut remplacer `[BASEURL]` par une [URL][5] de la forme `http://[IP]:1313`,
  où `[IP]` correspond l'[adresse IP][6] du serveur sur le réseau local.
  Exemple : `http://192.168.1.14:1313`

Le site se retrouvant exposé sur le réseau local à l'adresse susmentionnée.

<!-- links -->

[5]: https://fr.wikipedia.org/wiki/Uniform_Resource_Locator
[6]: https://fr.wikipedia.org/wiki/Adresse_IP
