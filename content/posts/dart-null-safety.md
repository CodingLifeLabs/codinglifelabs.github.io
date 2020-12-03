---
createdAt: "2020-12-03 18:02:00"
updatedAt: "2020-12-03"
title: (Dart) 5. Dart Null Safety
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## 1. Null Safety (Ver. 2.8.4)

- Types are non-nullable by default over Dart Ver.2.8.4

## 2. Nullable and non-Nullable variables

```dart
void main() {
    // swift의 optional 과 비슷.
    int? a;
    int b = 2;
    // Dart 2.9 with Null Safety -> Compile-time error.
    print(a+b);
}
```

## 3. Flow Analysis: Promotion and Definite Assignment

- Flow Analysis: Promotion

```dart
void main() {
    // swift의 optional 과 비슷.
    int? a;
    int b = 2;
    // Dart 2.9 with Null Safety -> Compile-time error.
    if (a == null) {
        print('a is null');
    } else {
        print(a+b);
    }
}
```

- Flow Analysis: Definite Assignmnet

```dart
void main() {
    int x = 10;
    int sign;
    if (x >= 0) {
        sign = 1;
    } else {
        sign = -1;
    }
    print(sign);
}
```

You can declare a non-nullable variable and initialize it later.

## 4. The assertion operator

```dart
void main() {
    int x = 42;
    int? maybeValue;
    if (x > 0) {
        maybeValue = x;
    }
    // swift force unwrapped 와 비슷.
    int value = maybeValue!;
    print(value);
}
```

if you're sure that a nullable variable will always have a non-nullable value,
it's fae to assign it to a non-nullable variable with the ! operator.

## 5. if-null operator

```dart
void main() {
    int x = -1;
    int? maybeValue;
    if (x > 0) {
        maybeValue = x;
    }
    // Augmented assignment if-null
    // maybeValue ??= 0;
    int value = maybeValue ?? 0;
    print(value;)
}
```

## 6. Null safety with collections

```dart
void main() {
    const cities = <String?>['London','Paris',null];
    for (var city in cities) {
        if (city != null) {
            print(city.toUpperCase());
        }
    }
}
```

## 7. The conditional access operator

```dart
void main() {
    const cities = <String?>['London','Paris',null];
    for (var city in cities) {
        // Conditional access operator
        print(city?.toUpperCase());
    }
}
```

Every time you declare a variable,
think about whether it should be nullable or not.
