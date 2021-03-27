---
title: 'Hugo : server and local network'
date: 2017-12-29T00:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

In addition to the official documentation and its [quick start][1], I would like
to add the [command line][2] to launch Hugo in server mode on the
[local network][3] in order to consult the website from another device, such as
a [smartphone][4].

<!-- summary_links -->

[1]: https://gohugo.io/getting-started/quick-start/
[2]: https://en.wikipedia.org/wiki/Command_(computing)
[3]: https://en.wikipedia.org/wiki/Smartphone
[4]: https://en.wikipedia.org/wiki/Local_area_network

<!-- more -->

```shell
$ hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL [BASEURL]
```

Explanation of the arguments :

- **`-D`** : publish drafts
- **`--disableFastRender`** : force the full rendering of the page, seems to
  remove some rendering errors, to check it out
- **`--bind 0.0.0.0`** : listen to requests regardless of their origin
- **`--baseURL [BASEURL]`** : specify the address of the website, replace
  `[BASEURL]` with a [URL][5] of the form `http://[IP]:1313`, where `[IP]`
  corresponds to the [IP address][6] of the server on the local network.
  Example: `http://192.168.1.14:1313`

The website is exposed on the local network at the above-mentioned address.

<!-- links -->

[5]: https://en.wikipedia.org/wiki/URL
[6]: https://en.wikipedia.org/wiki/IP_address
