---
title: travis CI gitHub 세팅시 주의할 점
description: Nuxt-Content 로 Deploy 자동화시 이것을 놓치면 큰일납니다.
tags:
  - nuxtjs
  - travis
---

## Travis 설정시 Node 버젼 주의하세요.

> stable

이렇게 설정안하면 삽질하게 됩니다.

```
<article class="prose lg:prose-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
```
