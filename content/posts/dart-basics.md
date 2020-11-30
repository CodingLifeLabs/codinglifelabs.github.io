---
createdAt: "2020-11-28"
updatedAt: "2020-11-29"
title: (Dart) 1. Dart Basics
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## 1.entry point

```dart[first.dart]
void main() {

}
```

main 함수는 프로그램의 entry point로 필수적이다.

## 2.Variable declaration and initialization

> Variable declaration | Variable initialization
>
> > String name = 'Jerry' ;
>
> type Variable-Name assignment String literal terminator

VariableName 은 항상 camelCase 를 따른다.

## 3. Basic types

```dart[main.dart]
void main() {
    String name = 'jerry'; // String literal
    int age = 36; // integer up to 64 bit precision
    double height = 1.84; // double 64bit floating point
    bool likesDart = true; // Bool
}
```

- BuiltIn Type : String, int, double, bool.

- You don't need to declare variables with an explicit type.
- type inference.

## 4.String concatenation & interpolation

- concatenation

  - `print("My name is" + firstName + " " + lastName);`

- interpolation

  - `print("My name is $firstName $lastName");`
  - `print("Next year I will be ${age + 1} years old.");`

## 5. String escaping

    - `print("Today I'm felling great")`
    - `print('Today I\'m felling great')`
    - raw String `print(r'C:\Windows\system32')`

## 6. Multi-line strings

```
void main() {
    String s = """
    This is a short sentence.
    This is a longer sentence, with some more things in it.
    """
}
```

## 7. function , method

```
void main() {
    String title = 'Dart course';
    print(title.toUpperCase());
    // print - this is a function
    // toUpperCase - this is a method
}
```

## 8. Initialization vs Assignment

```
void main() {
    // Initialization
    String title = 'Dart course';
    // Assignment
    title = title.toLowerCase();
}
```

- expressions can be assigned to variables
- or passed to functions as arguments

## 9. Finding and replacing strings

```
void main() {
    String lovePizza = 'I love pizza';
    print(lovePizza.contains('pizza'));
    String lovePasta = lovePizza.replaceAll('pizza','pasta');
    print(lovePasta);
}
```

## 10. type conversions

- Dart is a strongly-typed language

```
void main() {
    int age = 36;
    String ageString = age.toString();
    String ratingString = '4.5';
    double rating = double.parse(ratingString);
    String helloString = 'hello';
    // exception occurred and aborted...
    print(double.parse(helloString));
}
```

## 11. Expressions & statements

- expressions : hold a value at runtime. (return value)

- statements : do not hold a value.
