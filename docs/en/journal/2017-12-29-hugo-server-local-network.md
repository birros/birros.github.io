---
title: "Hugo : server and local network"
date: 2017-12-29T00:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

In addition to the official documentation and its [quick start], I would like
to add the [command line] to launch Hugo in server mode on the [local network]
in order to consult the website from another device, such as a [smartphone].

<!-- Summary links -->

[quick start]: https://gohugo.io/getting-started/quick-start/
[command line]: https://en.wikipedia.org/wiki/Command_(computing)
[smartphone]: https://en.wikipedia.org/wiki/Smartphone
[local network]: https://en.wikipedia.org/wiki/Local_area_network

<!-- more -->

    hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL [BASEURL]

Explanation of the arguments :

- __`-D`__ : publish drafts
- __`--disableFastRender`__ : force the full rendering of the page, seems to
remove some rendering errors, to check it out
- __`--bind 0.0.0.0`__ : listen to requests regardless of their origin
- __`--baseURL [BASEURL]`__ : specify the address of the website, replace
`[BASEURL]` with a [URL] of the form `http://[IP]:1313`, where `[IP]`
corresponds to the [IP address] of the server on the local network. Example :
`http://192.168.1.14:1313`

The website is exposed on the local network at the above-mentioned address.

<!--External links and references-->

[IP address]: https://en.wikipedia.org/wiki/IP_address
[URL]: https://en.wikipedia.org/wiki/URL
