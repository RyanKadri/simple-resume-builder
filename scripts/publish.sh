#!/bin/bash
rm ../ryankadri.github.io/*
cp dist/* ./README.md ../ryankadri.github.io
cd ../ryankadri.github.io
rm *ssr*
mv index.html resume.html
cp 404.html index.html

git status
read -p "Take a quick look and press enter to continue"
git add *
git commit -a -m "$1"
git push github master