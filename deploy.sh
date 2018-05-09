#!/bin/bash

#
# This script is inspired by:
#   https://gohugo.io/hosting-and-deployment/hosting-on-github/
#

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Clone the master branch to public if public doesn't exist
if [ ! -d public ] ; then
    git clone -b master git@github.com:birros/birros.github.io.git public
fi

# Cleanup & pull the master branch
cd public
git clean -xdf # remove untracked files
git checkout . # cleanup repo
git pull       # update repo
rm -r *        # remove all files to prevent publishing removed content
cd ..


# Build the website
hugo


# Go to public folder & add commits
cd public
git add .

# Commit changes
msg="rebuilding site `date`"
if [ $# -eq 1 ]
    then msg="$1"
fi
git commit -m "$msg"

# Push commits and go back to root
git push origin master
cd ..
