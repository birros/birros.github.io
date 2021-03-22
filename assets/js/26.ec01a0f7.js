(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(e,r,t){"use strict";t.r(r);var n=t(45),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("État des lieux sur la synchronisation de mes contacts et de mon agenda entre mon\nordiphone et mon ordinateur portable.")]),e._v(" "),t("h2",{attrs:{id:"sur-l-ordinateur-portable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sur-l-ordinateur-portable"}},[e._v("#")]),e._v(" Sur l'ordinateur portable")]),e._v(" "),t("p",[e._v("Ne voulant pas m'encombrer d'un petit serveur pour faire de l'auto-hébergement\nj'ai opté pour "),t("a",{attrs:{href:"https://radicale.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Radicale (en)"),t("OutboundLink")],1),e._v(" qui a l'avantage d'être la solution la plus\nlégère et donc de ne pas gêner l'utilisation de mon ordinateur portable en\nparallèle. J'ai juste eu à ajouter un service utilisateur à "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Systemd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Systemd"),t("OutboundLink")],1),e._v(" au\ndémarrage de ma session "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/GNOME",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNOME"),t("OutboundLink")],1),e._v(" pour pouvoir le lancer automatiquement.")]),e._v(" "),t("p",[e._v("Je restreins cette solution au "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/R%C3%A9seau_local",target:"_blank",rel:"noopener noreferrer"}},[e._v("réseau local"),t("OutboundLink")],1),e._v(" car je n'utilise pas de\n"),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Nom_de_domaine",target:"_blank",rel:"noopener noreferrer"}},[e._v("nom de domaine"),t("OutboundLink")],1),e._v(" pour accéder à "),t("strong",[e._v("Radicale")]),e._v(". De plus j'utilise un "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Certificat_%C3%A9lectronique",target:"_blank",rel:"noopener noreferrer"}},[e._v("certificat"),t("OutboundLink")],1),e._v("\nauto-signé pour sécuriser les échanges entre l'ordiphone et l'ordinateur\nportable.")]),e._v(" "),t("h2",{attrs:{id:"sur-l-ordiphone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sur-l-ordiphone"}},[e._v("#")]),e._v(" Sur l'ordiphone")]),e._v(" "),t("p",[e._v("J'utilise "),t("a",{attrs:{href:"https://www.davdroid.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DAVDroid (en)"),t("OutboundLink")],1),e._v(" pour pouvoir synchroniser contacts et agenda avec le\nsystème "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Android",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android"),t("OutboundLink")],1),e._v(". Je renseigne pour cela, au moment de la configuration,\nl'"),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Uniform_Resource_Locator",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL"),t("OutboundLink")],1),e._v(" du serveur où se trouvent les contacts et le calendrier, en y adjoignant\nnom d'utilisateur et mot de passe.")]),e._v(" "),t("p",[e._v("Au moment de la première authentification sous "),t("strong",[e._v("DAVDroid")]),e._v(" j'accepte le\ncertificat auto-signé en prenant garde à ce que l'"),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique",target:"_blank",rel:"noopener noreferrer"}},[e._v("empreinte numérique"),t("OutboundLink")],1),e._v(" soit\nidentique.")]),e._v(" "),t("h2",{attrs:{id:"evolution-possible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evolution-possible"}},[e._v("#")]),e._v(" Évolution possible")]),e._v(" "),t("p",[e._v("Cette solution est loin d'être idéale mais me suffit pour le moment. Bien sûr\nutiliser "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Nextcloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nextcloud"),t("OutboundLink")],1),e._v(" faciliterait grandement la mise en place notamment grâce à\nl'usage de "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Let%27s_Encrypt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),t("OutboundLink")],1),e._v(", cependant tout ceci reste bien lourd pour seulement\nsynchroniser contacts et agenda sachant que j'utilise "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Syncthing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Syncthing"),t("OutboundLink")],1),e._v(" pour la\nsynchronisation de mes fichiers.")]),e._v(" "),t("p",[e._v("Je laisse ici les quelques liens qui m'ont permis de m'essayer à "),t("strong",[e._v("Nextcloud")]),e._v("\nen utilisant "),t("strong",[e._v("Let's Encrypt")]),e._v(" au travers de "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Docker_(logiciel)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),t("OutboundLink")],1),e._v(". Il faut avant tout\ndisposer d'un "),t("strong",[e._v("nom de domaine")]),e._v(" et faire une "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Redirection_de_port",target:"_blank",rel:"noopener noreferrer"}},[e._v("redirection des ports"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("80")]),e._v(" et\n"),t("code",[e._v("443")]),e._v(" vers la machine cible pour que la mise en place du certificat aboutisse.\nPenser à désactiver "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/SELinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("SELinux"),t("OutboundLink")],1),e._v(" dans le cas où l'écriture sur un "),t("code",[e._v("volume")]),e._v(" de\n"),t("strong",[e._v("Docker")]),e._v(" est refusée.")]),e._v(" "),t("h3",{attrs:{id:"liens-utiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liens-utiles"}},[e._v("#")]),e._v(" Liens utiles")]),e._v(" "),t("ul",[t("li",[e._v("Installer Nextcloud grâce à Docker sans HTTPS : "),t("a",{attrs:{href:"https://hub.docker.com/_/nextcloud/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub: Nextcloud (en)"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Installer Nextcould avec Let's Encrypt grâce à Docker Compose :\n"),t("a",{attrs:{href:"https://github.com/nextcloud/docker/tree/master/.examples#with-nginx-proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nextcloud/Docker: Examples (en)"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Pour activer ou désactiver SELinux : "),t("a",{attrs:{href:"https://doc.fedora-fr.org/wiki/SELinux#Les_modes",target:"_blank",rel:"noopener noreferrer"}},[e._v("SELinux : Les modes"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Nom de domaine gratuit, temporaire mais renouvelable : "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/No-IP",target:"_blank",rel:"noopener noreferrer"}},[e._v("No-IP (en)"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);