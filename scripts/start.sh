#!/bin/bash

LOCALIP=`hostname -I | cut -d' ' -f1`
BASEURL="http://$LOCALIP"

hugo server -D --disableFastRender --bind 0.0.0.0 --baseURL $BASEURL
