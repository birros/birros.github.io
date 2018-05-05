# Personnal website

This website is made with the static website generator [Hugo]. It's deployed
using the [master branch method].

The build of this website is published in this repo : [birros.github.io (repo)].

## Build & deploy

To run a development server:

    hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL [BASEURL]

Where `[BASEURL]` corresponds to the IP address of the server on the local
network. Example : `http://192.168.1.20:1313`

To deploy this website on GitHub:

    ./deploy.sh

<!--External links and references-->

[Hugo]: https://gohugo.io/
[master branch method]: https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-from-your-master-branch
[birros.github.io (repo)]: https://github.com/birros/birros.github.io
