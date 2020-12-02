---
createdAt: "2020-12-02 08:54:00"
updatedAt: "2020-12-02"
title: (Dart) 4. Dart Collections
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## Lists (also known as Arrays)

```dart
void main() {
    // List Literal...
    var cities = ['London', 'Paris', 'Moscow'];
    // [] is called subscript operator...
    print(cities[1]);
    // for-in loop iterate collections....
    for(var city in cities) {
        print(city);
    }
}
```

## List methods

```dart
void main() {
    // List Literal...
    var cities = ['London', 'Paris', 'Moscow'];
    print(cities.length);
    print(cities.isEmpty);
    cities.add('Seoul');
    cities.insert(1,'Busan')
    cities.removeAt(2);
    cities.clear();
    cities.contains('Moscow');
    cities.indexOf('Moscow');
}
```

## type annotations with lists

```dart
void main() {
    // List Type Annotation Literal...
    var cities = <String>['London', 'Paris', 'Moscow'];
    List<String> cities_2 = ['London', 'Paris', 'Moscow'];
}
```

## Using var, final, const with lists

```dart
void main() {
    // List Type Annotation Literal...
    final cities = <String>['London', 'Paris', 'Moscow'];
    // final variables can't be re-assigned
    // error
    cities = ['Venice'];
    // but you can still modify their contents.
    cities[1] = 'Venice';

    // do not allow both.
    const cities_2 = [];
}
```

## Set

- Sets are collections of unique values
- Lists can contain duplicate values

```dart
void main() {
    // Set literal...
    var countries = {'Italy', 'UK', 'Russia'};
    // No Subscript Operator...
    countries.elementAt(0);
    countries.add('Iceland');
    countries.remove('Italy');

    var euCountries = {'Italy', 'UK', 'Russia'};
    var asianCountries = {'India','China','Russia'};
    euCountries.union(asianCountries);
    euCountries.intersection(asianCountries);
    euCountries.difference(asianCountries);
}
```

## Maps (dictionaries)

- collection of key-value pairs.

```dart
void main() {
    // var/final/const or explicitly declare the type....
    Map<String,dynamic> person = {
        'name': 'Jerry',
        'age': 36,
    }
}
```
