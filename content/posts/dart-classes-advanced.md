---
createdAt: "2020-12-08 10:24:00"
updatedAt: "2020-12-09"
title: (Dart) 9. Dart Classes Advanced
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

## Inheritance / Subclassing

```dart
class Animal {
  void sleep() => print('sleep');
}

class Dog extnds Animal {
  void bark() => print('bark');
}

void main() {
  final animal = Animal();
  final dog = Dog();
  dog.bark();
  dog.sleep();
}
```

- Subclassing is Is-A model.
- Subclassing is not always the right solution.

## The super constructor

```dart
class Animal {
  const Animal({requried this.age});
  final int age;

  void sleep() => print('sleep');
}

class Dog extends Animal {
  Dog({required int age}) : super(age: age);
  void bark() => print('bark');

  // The superclass 'Animal' doesn't have a zero argument constructor.
}
```

## Overriding methods

- When you override a method, add an @override annotaion

```dart
class Animal {
  const Animal({requried this.age});
  final int age;

  void sleep() => print('sleep');
}

class Dog extends Animal {
  Dog({required int age}) : super(age: age);
  void bark() => print('bark');
  @override
  void sleep() {
    super.sleep();
    print('sleep some more');
  }
}
```

## Abstract classes

- Swift Protocol 과 매우 비슷.

```dart
abstract class Shape {
  double get area;
}

class Square extends Shape {
  Square(this.side);
  final double side;
  @override
  double get area => side * side;
}

class Circle extends Shape {
  Circle(this.radius);
  final double radius;

  @override
  double get area => pi * radius * radius;
}

void printArea(Shape shape) {
  print(shape.area);
}

void main() {
  // Abstract classes can't be instantiated.
  final square = Square(10);
  printArea(square);
  final circle = Circle(5);
  printArea(circle);
  final shapes = [
    Square(2),
    Circle(3),
  ];
  shapes.forEach(printArea);
}
```

- We can use abstract classes to define an interface that can be implemented by subclasses
- Dependency Inversion Principle
- abstract interfaces vs concrete implementations.
- POP vs OOP.

## Interfaces and the difference between implements and extends

```dart
abstract class InterfaceA {
  void a();
}

abstract class InterfaceB {
  void b();
}

class AB implements InterfaceA, InterfaceB {
  @override
  void a() {};
  @override
  void b() {};
}
```

- if you want, you can implement a non-abstract class

## toString() method

```dart
class Point {
  const Point(this.x, this.y);
  final int x;
  final int y;

 @override
  String toString() => 'Point($x, $y)';
}

void main() {
  print(Point(1,1));
}
```

## The equality operator and the covariant keyword

```dart
class Point {
  const Point(this.x,this.y);
  final int x;
  final int y;

  @override
  bool operator ==(covariant Point other) {
  // Object type 사용시....
  //  if (other is Point) {
  //    return x == other.x && y == other.y;
  //  }
  //  return false;
    return x == other.x && y == other.y;
  }
}

void main() {
  print(Point(0,0) == 'abc');
}
```

- Use covariant to change the type of an argument when overriding a method

## Overriding hashCode and the Equatable

- Override Equatable means : override == , hashCode, toString()

```dart
import 'package:equatable/equatable.dart';

class Point extends Equatable {
  const Point(this.x, this.y);
  final int x;
  final int y;

  @override
  List<Object> get props => [x,y];

  @override
  bool get stringify => true;
}
```

- Only use Equatable with immutable classes!

## Classes with generics

```dart
class Stack<T> {
  final List<T> _items = [];

  void push(T item) => _items.add(item);
  T pop() => _items.removeLast();
}

```

## Composition vs Inheritance

- A Stack has-a List (Composition)
- A Square is-a Shape (inheritance)

```dart
abstract class Widget {}

class Text extends Widget {
  Text(this.text);
  final String text;
}

class Button extends Widget {
  Button({requried this.child, this.onPressed});
  final Widget child;
  final void Function()? onPressed;
}

void main() {
  final button = Button(
    child: Text('Hello'),
    onPressed
  )
}
```

## Factory Constructor

```dart
abstract class Shape {
  double get area;

  factory Shape.fromJson(Map<String, Objet> json) {
    final type = json['type'];
    switch (type) {
      case 'square';
        final side = json['side'];
        if (side is double) {
          return Square(side);
        }
        // factory constructor can't return null.
        throw UnsupportedError('invalid or missing side property');

      default:
        throw UnimplementedError('shape $type not recognized');
    }
  }
}
```

- Factory constructors can execute any arbitrary logic first, and then return an instance.

## Copying objects with copyWith

```dart
class Credentials {
  const Credentials({this.email = '', this.password = ''});
  final String email;
  final String password;

  Credentials copyWith({
    String? email,
    String? password,
  }) {
    return Credentials(
      email: email ?? this.email,
      password: password ?? this.password,
    );
  }

  @override
  String toString() => 'Credentials($email, $password)';
}
```

## Cascade operator

```dart
import 'dart:math';

class ClosedPath {
  List<Point> _points = [];

  void moveTo(Point point) {
    _points = [point];
  }

  void lineTo(Point point) {
    _points.add(point);
  }
}

void main() {
  final path = ClosedPath()
  ..moveTo(Point(0,0))
  ..lineTo(Point(2,0));

  //path.moveTo(Point(0,0));
  //path.lineTo(Point(2,0));
}
```
