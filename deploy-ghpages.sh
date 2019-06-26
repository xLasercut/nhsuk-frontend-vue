#!/bin/bash

#build
npm run deploy:gh

cd dist_docs

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:xlasercut/nhsuk-frontend-vue.git master:gh-pages

cd -