---
title: Nuxt-Content 배포자동화시 주의할 점
description: Nuxt-Content 모듈사용시 Travis로 Deploy 자동화시 이것을 놓치면 큰일납니다.
tags:
  - nuxtjs
  - travis
---

## 1. Travis .travis.yml 설정시 주의 할점

Nuxt-Content 배포자동화시 .travis.yml 설정에 주의해서 generate 하시기 바랍니다.

### 1.1 Node 버젼 설정

> stable

Node 8에서는 nuxt generate 가 어떤 이유에서 인지 실행이 되지 않습니다. 반드시 stable 로 설정해주세요.
( version 설정시 ' ' String 표시 금지)

### 1.2 Travis timezone 설정

> before_install:
>
> export TZ=Asia/Seoul
> date

Nuxt-Content 로 markdown 작성시 Local time과 Travis 서버 Timezone이 달라서 created date 가 달라지게 됩니다. 이를 해결하려면 timezone 설정을 반드시 해주세요.

## 결론

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

before_install:
  - export TZ=Asia/Seoul
  - date
install:
  - npm install
  - npm run generate

script:
  - echo "Skipping tests"

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_ACCESS_TOKEN # Set in travis-ci.org dashboard, marked secure https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target_branch: gh-pages
  local_dir: dist
  keep_history: true
  on:
    branch: main
```

이렇게 설정안하면 삽질하게 됩니다.
