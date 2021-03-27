---
title: Synchronisation des contacts et de l'agenda
date: 2018-05-12T17:15:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

État des lieux sur la synchronisation de mes contacts et de mon agenda entre mon
ordiphone et mon ordinateur portable.

<!-- more -->

## Sur l'ordinateur portable

Ne voulant pas m'encombrer d'un petit serveur pour faire de l'auto-hébergement
j'ai opté pour [Radicale (en)][1] qui a l'avantage d'être la solution la plus
légère et donc de ne pas gêner l'utilisation de mon ordinateur portable en
parallèle. J'ai juste eu à ajouter un service utilisateur à [Systemd][2] au
démarrage de ma session [GNOME][3] pour pouvoir le lancer automatiquement.

Je restreins cette solution au [réseau local][4] car je n'utilise pas de
[nom de domaine][5] pour accéder à **Radicale**. De plus j'utilise un
[certificat][6] auto-signé pour sécuriser les échanges entre l'ordiphone et
l'ordinateur portable.

## Sur l'ordiphone

J'utilise [DAVDroid (en)][7] pour pouvoir synchroniser contacts et agenda avec
le système [Android][8]. Je renseigne pour cela, au moment de la configuration,
l'[URL][9] du serveur où se trouvent les contacts et le calendrier, en y
adjoignant nom d'utilisateur et mot de passe.

Au moment de la première authentification sous **DAVDroid** j'accepte le
certificat auto-signé en prenant garde à ce que l'[empreinte numérique][10] soit
identique.

## Évolution possible

Cette solution est loin d'être idéale mais me suffit pour le moment. Bien sûr
utiliser [Nextcloud][11] faciliterait grandement la mise en place notamment
grâce à l'usage de [Let's Encrypt][12], cependant tout ceci reste bien lourd
pour seulement synchroniser contacts et agenda sachant que j'utilise
[Syncthing][13] pour la synchronisation de mes fichiers.

Je laisse ici les quelques liens qui m'ont permis de m'essayer à **Nextcloud**
en utilisant **Let's Encrypt** au travers de [Docker][14]. Il faut avant tout
disposer d'un **nom de domaine** et faire une [redirection des ports][15] `80`
et `443` vers la machine cible pour que la mise en place du certificat
aboutisse. Penser à désactiver [SELinux][16] dans le cas où l'écriture sur un
`volume` de **Docker** est refusée.

### Liens utiles

- Installer Nextcloud grâce à Docker sans HTTPS :
  [Docker Hub: Nextcloud (en)][17]
- Installer Nextcould avec Let's Encrypt grâce à Docker Compose :
  [Nextcloud/Docker: Examples (en)][18]
- Pour activer ou désactiver SELinux : [SELinux : Les modes][19]
- Nom de domaine gratuit, temporaire mais renouvelable : [No-IP (en)][20]

<!-- links -->

[1]: https://radicale.org/
[2]: https://fr.wikipedia.org/wiki/Systemd
[3]: https://fr.wikipedia.org/wiki/GNOME
[4]: https://fr.wikipedia.org/wiki/R%C3%A9seau_local
[5]: https://fr.wikipedia.org/wiki/Nom_de_domaine
[6]: https://fr.wikipedia.org/wiki/Certificat_%C3%A9lectronique
[7]: https://www.davdroid.com/
[8]: https://fr.wikipedia.org/wiki/Android
[9]: https://fr.wikipedia.org/wiki/Uniform_Resource_Locator
[10]: https://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique
[11]: https://fr.wikipedia.org/wiki/Nextcloud
[12]: https://fr.wikipedia.org/wiki/Let%27s_Encrypt
[13]: https://fr.wikipedia.org/wiki/Syncthing
[14]: https://fr.wikipedia.org/wiki/Docker_(logiciel)
[15]: https://fr.wikipedia.org/wiki/Redirection_de_port
[16]: https://fr.wikipedia.org/wiki/SELinux
[17]: https://hub.docker.com/_/nextcloud/
[18]: https://github.com/nextcloud/docker/tree/master/.examples#with-nginx-proxy
[19]: https://doc.fedora-fr.org/wiki/SELinux#Les_modes
[20]: https://en.wikipedia.org/wiki/No-IP
