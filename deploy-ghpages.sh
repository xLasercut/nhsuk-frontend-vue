#!/bin/bash

#build
npm run deploy

cd distghpages

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:xlasercut/nhsuk-frontend-vue.git master:gh-pages

cd -