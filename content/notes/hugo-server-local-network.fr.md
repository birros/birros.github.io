---
title: "Hugo : serveur et réseau local"
date: 2017-12-29T00:00:00+01:00
type: post
---

Parallèlement à la documentation officielle et son [tutoriel d'accueil (en)],
je tiens à ajouter la [ligne de commande] permettant de lancer Hugo en mode
serveur sur le [réseau local] afin de consulter le site depuis un autre
périphérique, comme par exemple un [ordiphone].

<!--more-->

```
hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL [BASEURL]
```

Explication des arguments :

- **`-D`** : publier les brouillons
- **`--disableFastRender`** : forcer le rendu complet de la page, semble
supprimer certaines erreurs de rendu, à vérifier
- **`--bind 0.0.0.0`** : écouter les requêtes quelque soit leur origine
- **`--baseURL [BASEURL]`** : spécifier quelle est l'adresse du site, pour cela
il faut remplacer `[BASEURL]` par une [URL] de la forme `http://[IP]:1313`, où
`[IP]` correspond l'[adresse IP] du serveur sur le réseau local. Exemple :
`http://192.168.1.14:1313`

Le site se retrouvant exposé sur le réseau local à l'adresse susmentionnée.

<!--Liens externes et références-->

[adresse IP]: https://fr.wikipedia.org/wiki/Adresse_IP
[tutoriel d'accueil (en)]: https://gohugo.io/getting-started/quick-start/
[ligne de commande]: https://fr.wikipedia.org/wiki/Commande_informatique
[ordiphone]: https://fr.wikipedia.org/wiki/Smartphone
[réseau local]: https://fr.wikipedia.org/wiki/R%C3%A9seau_local
[URL]: https://fr.wikipedia.org/wiki/Uniform_Resource_Locator
