---
title: travis CI gitHub 세팅시 주의할 점
description: Nuxt-Content 로 Deploy 자동화시 이것을 놓치면 큰일납니다.
tags:
  - nuxtjs
  - travis
---

## Travis 설정시 Node 버젼 주의하세요.

> - stable

이렇게 설정안하면 삽질하게 됩니다.

```yml[.travis.yml]
language: node_js
node_js:
  - stable

cache:
  directories:
    - "node_modules"

branches:
  only:
    - main

install:
  - npm install
  - npm run generate

script:
  - echo "Skipping tests"

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_ACCESS_TOKEN # Set in travis-ci.org dashboard, marked secure https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: main
```
