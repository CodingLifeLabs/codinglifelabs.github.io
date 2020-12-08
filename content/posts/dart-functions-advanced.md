---
createdAt: "2020-12-06 09:20:00"
updatedAt: "2020-12-06"
title: (Dart) 7. Dart Functions Advanced
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

```dart
void main() {
    final sayHi = (name) => 'Hi, $name';
    print(sayHi('Jerry'));
}
```

- This variable is a reference to our anonymous function.
- Argument types are ofen omitted in anonymous functions (they tend to be small)

## 1. Functions as first class object

```dart
void main() {
    final sayHi = (String name) => 'Hi, $name';
    welcom(sayHi, 'Jerry');
}

void welcom(String Function(String) greet, String name) {
    print(greet(name));
    print('Welcome to this course')
}
```

- Functions as first-class objects.

## 2. Function types

```dart
// typedef Greet = String Function(String);
// short version....
typedef String Greet(String name);

void welcome(Greet greet, String name) {
    print(greet(name));
}
```

- This is a named function type ( or alias).
- Named function types used extensively in the dart. ( builder design patterns)

## 3. Closures

```dart
void main() {
    const multiplier = 10;
    const list = [1,2,3];
    final result = list.map((x)=> x * multiplier);
    print(result);
}
```

- Closure uses some variables that are defined parent scope.

## 4. The forEach method

```dart
void main() {
    const list = [1,2,3];
    // All types in Dart are Reference...
    // void print(object) = void (int)
    list.forEach(print);
    // list.forEach((value)=> print(value));
    for(var value in list) {
        print(value);
    }
}
```

## 5. The map method

- apply any transformation we want with very little code

```dart
void main() {
    const list = [1,2,3];
    final doubles = list.map((value) => value * 2);
    final doubles2 = [];
    for (var value in list) {
        doubles2.add(value * 2);
    }
}
```

## 6. Iterable and toList()

- Iterable : collection of elements that can be accessed sequentially
- List and Sets are both Iterable types.
- Lazy Iterable: The anonymous function is not evaluated until the result is used.

```dart
void main() {
    const list = [1,2,3];
    // map return iterable type so use toList()
    final doubles = list.map((value) => value * 2).toList();
}
```

## 7. Code reuse with anonymous functions and generics

- Generics are used to write type-safe code and reduce code duplication.

```dart
void main() {
    const list = [1,2,3];
    // map return iterable type so use toList()
    final doubles = list.map((value) => value * 2).toList();
    final doubles = transform<int>(list, (x) => x * 2);
}

List<R> transform<T,R>(List<T> items, R Function(T) f) {
    var result = <R>[];
    for (var x in items) {
        result.add(f(x));
    }
    return result;
}
```

## 8. The where and firstWhere methods

- filter items using where
- find an item using firstWhere

```dart
void main() {
    const list =  [1,2,3,4];
    // filtering
    final even = list.where((value) => value % 2 ==0);
    final value = list.firstWhere((x) => x == 5, orElse: () => -1 );
    print(even);
    print(value);
}
```

- Use Where and firstWhere to filter and find items inside a collection. (predicate)

## 9. The reduce method

```dart
void main() {
    const list = [1,2,3,4];
    final sum = list.reduce((value,element)=> value + element);
    print(sum);
    // value   : 1 3 6 10
    // element : 2 3 4
}
```

## 10. Combining functional operators

```dart
void main() {
    const emails = [
        'abc@abc.com',
        'me@example.co.uk',
        'john@gmail.com',
        'katy@yahoo.com',
    ];
    const knownDomains = ['gmail.com', 'yahoo.com'];
    final unknownDomains = getUnknownDomains(emails, knownDomains);
        print(unknownDomains);

    Iterable<String> getUnknownDomains(List<String> emails, List<String> knownDomains) => emails
        .map((email) => email.split('@').last)
        .where((domain) => !knownDomains.contains(domain));
}
```
