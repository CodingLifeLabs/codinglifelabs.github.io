---
createdAt: "2020-11-30"
updatedAt: "2020-11-30"
title: (Dart) 2. Dart Type System
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## 1. Static vs Dynamic

- Static : types are checked at compile time.
- Dynamic : types are checked on the fly, during execution.

```dart[exam1.dart]
void main() {
    String name = 'Jerry';
    // reassignment error.
    // sound type system.
    name = 10;
}
```

## 2. type inference with var

```dart[exam2.dart]
void main() {
    // infer type using var
    var name = 'Jerry';
    // also reassignment error.
    name = 10;
}
```

## 3. the final keyword

- final : declare and initialize variable. then Don't change (read only)
- prefer final to var whenever possible.

## 4. the const keyword

- const : a compile-time constant. ( very good for performance)

## 4. var, final and const

- var : can be set more than once.
- final : can be set only once.
- const : compile-time constants.

## 5. dynamic

```dart
void main() {
    var x =10;
    // error
    x = true;
    dynamic y = 10;
    y = true;
}
```
