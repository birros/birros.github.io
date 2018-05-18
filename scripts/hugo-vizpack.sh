#!/bin/bash

REGEX=".*\.\(html\)"
PREFIX="language-viz-"
VIZPACK="./node_modules/.bin/vizpack"

# vizpack each html files of the public folder containing $PREFIX string inside.
find public -type f -regex $REGEX -exec grep -l $PREFIX {} \;\
| xargs -n 1 -P 0 -I {} $VIZPACK --quiet $PREFIX {} {}
