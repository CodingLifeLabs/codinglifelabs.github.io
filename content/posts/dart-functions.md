---
createdAt: "2020-12-04 14:29:00"
updatedAt: "2020-12-04"
title: (Dart) 6. Dart Functions
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## 1. Functions

- Variables : store values and reference them multiple times.
- Functions : encapsulate some code and reuse it multiple times.

## 2. Functions Arguments

```dart
void main() {
    const name = 'Jerry';
    describe(name,age);
}

void describe(String name, int age) {
    print("My name is $name and I'm $age years old");
}
```

- Function arguments can be variables, expressions or literals

## 3. Return values

```dart
void main() {
    final person = describe('Jerry', 38);
    print(person);
}

String describe(String name, int age) {
    return "My name is $name. I'm $age years old";
}
```

## 4. Named and positional arguments

- Named arguments is not required default.

```dart
void main() {
    final person = describe(name: 'Jerry', age: 38);
    print(person);
}

String describe({String name, int age}) {
    return "My name is $name. I'm $age years old";
}
```

## 5. Required and default values

Null Safety + Named Arguments : 3possible options

1.  Declare nullable types
    `{String? name, int? age}`
2.  Use default values
    `{String name = '', int age = 0}`
3.  Mark argumnets as required
    `{required String name, required int age}`

## 6. Default positional arguments

```dart
void main() {
    foo(1,3);
}

void foo(int a, [int b = 2]) {
    print('a: $a, b: $b`);
}
```

## 7. Fat arrow notation( => )

- just return one statement line

- `int sum(int x, int y) => x + y;`
- `void printSum(int x, int y) => print(x + y);`

## 8. Global and lexical scope

- lexical scope

```dart
void main() {
    const a = 10;
    print(a);
    if (a > 5) {
        const a = 5;
        print(a);
    }
}
```

- global scope

```dart
const global = 15;

void main() {
    const a = 10;
    print(global);
    print(a);
    if (a > 5) {
        const a = 5;
        print(a);
    }
}
```

## 9. Inner Functions

```dart
const global = 15;

void main() {
    const a = 10;
    print(global);
    print(a);
    void foo(int b) {
        print(global);
        print(b);
        print(a);
    }
    foo(5);
}
```

## 10. Global mutable state & functions with side effects

- pure function : always produces the same result when called with the same arguments

- doesn't mutate any variables outside its own scope

- Adding mutable global state is one of the worse thins you can do.
  - `var counter = 1;`
