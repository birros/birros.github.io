---
title: Synchronisation des contacts et de l'agenda
date: 2018-05-12T17:15:00+01:00
author: Birros <birros@protonmail.com>
layout: Post
---

État des lieux sur la synchronisation de mes contacts et de mon agenda entre mon
ordiphone et mon ordinateur portable.

<!-- more -->

## Sur l'ordinateur portable

Ne voulant pas m'encombrer d'un petit serveur pour faire de l'auto-hébergement
j'ai opté pour [Radicale (en)] qui a l'avantage d'être la solution la plus
légère et donc de ne pas gêner l'utilisation de mon ordinateur portable en
parallèle. J'ai juste eu à ajouter un service utilisateur à [Systemd] au
démarrage de ma session [GNOME] pour pouvoir le lancer automatiquement.

Je restreins cette solution au [réseau local] car je n'utilise pas de
[nom de domaine] pour accéder à __Radicale__. De plus j'utilise un [certificat]
auto-signé pour sécuriser les échanges entre l'ordiphone et l'ordinateur
portable.

## Sur l'ordiphone

J'utilise [DAVDroid (en)] pour pouvoir synchroniser contacts et agenda avec le
système [Android]. Je renseigne pour cela, au moment de la configuration,
l'[URL] du serveur où se trouvent les contacts et le calendrier, en y adjoignant
nom d'utilisateur et mot de passe.

Au moment de la première authentification sous __DAVDroid__ j'accepte le
certificat auto-signé en prenant garde à ce que l'[empreinte numérique] soit
identique.

## Évolution possible

Cette solution est loin d'être idéale mais me suffit pour le moment. Bien sûr
utiliser [Nextcloud] faciliterait grandement la mise en place notamment grâce à
l'usage de [Let's Encrypt], cependant tout ceci reste bien lourd pour seulement
synchroniser contacts et agenda sachant que j'utilise [Syncthing] pour la
synchronisation de mes fichiers.

Je laisse ici les quelques liens qui m'ont permis de m'essayer à __Nextcloud__
en utilisant __Let's Encrypt__ au travers de [Docker]. Il faut avant tout
disposer d'un __nom de domaine__ et faire une [redirection des ports] `80` et
`443` vers la machine cible pour que la mise en place du certificat aboutisse.
Penser à désactiver [SELinux] dans le cas où l'écriture sur un `volume` de
__Docker__ est refusée.

### Liens utiles

- Installer Nextcloud grâce à Docker sans HTTPS : [Docker Hub: Nextcloud (en)]
- Installer Nextcould avec Let's Encrypt grâce à Docker Compose :
    [Nextcloud/Docker: Examples (en)]
- Pour activer ou désactiver SELinux : [SELinux : Les modes]
- Nom de domaine gratuit, temporaire mais renouvelable : [No-IP (en)]

<!-- Liens -->

[DAVDroid (en)]: https://www.davdroid.com/
[Android]: https://fr.wikipedia.org/wiki/Android
[URL]: https://fr.wikipedia.org/wiki/Uniform_Resource_Locator
[Radicale (en)]: https://radicale.org/
[Systemd]: https://fr.wikipedia.org/wiki/Systemd
[GNOME]: https://fr.wikipedia.org/wiki/GNOME
[réseau local]: https://fr.wikipedia.org/wiki/R%C3%A9seau_local
[nom de domaine]: https://fr.wikipedia.org/wiki/Nom_de_domaine
[certificat]: https://fr.wikipedia.org/wiki/Certificat_%C3%A9lectronique
[empreinte numérique]: https://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique
[Nextcloud]: https://fr.wikipedia.org/wiki/Nextcloud
[Let's Encrypt]: https://fr.wikipedia.org/wiki/Let%27s_Encrypt
[Syncthing]: https://fr.wikipedia.org/wiki/Syncthing
[Docker]: https://fr.wikipedia.org/wiki/Docker_(logiciel)
[redirection des ports]: https://fr.wikipedia.org/wiki/Redirection_de_port
[SELinux]: https://fr.wikipedia.org/wiki/SELinux
[Docker Hub: Nextcloud (en)]: https://hub.docker.com/_/nextcloud/
[Nextcloud/Docker: Examples (en)]: https://github.com/nextcloud/docker/tree/master/.examples#with-nginx-proxy
[SELinux : Les modes]: https://doc.fedora-fr.org/wiki/SELinux#Les_modes
[No-IP (en)]: https://en.wikipedia.org/wiki/No-IP
