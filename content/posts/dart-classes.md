---
createdAt: "2020-12-07 16:38:00"
updatedAt: "2020-12-07"
title: (Dart) 8. Dart Classes
description: Declartive 프로그래밍 시리즈 - Dart 언어 강좌입니다.
tags:
  - dart
---

- Classes used to define new types

- Built in Types
- bool, int, double, String
- List, Set, Map

- Classes : Containers that hold some data functionality for manipulating that data basis of object-oriented programming they can encapsulate the state of our programs.

## 1. instance methods

```dart
class BankAccount {
    double balance = 0;

    void deposit(double amount) {
        balance += amount;
    }

    bool withdraw(double amount) {
        if (balance > amount) {
            balance -= amount;
            return true;
        } else {
            return false;
        }
    }
}

void main() {
    final bankAccount = BankAccount();
    bankAccount.deposit(100);
    bankAccount.deposit(50);
    final success1 = bankAccount.withdraw(100);
}
```

## 2. Class constructors and the this keyword

```
BankAccount(double balance) {
    this.balance = balance;
}
```

## 3. Initializer list

- parameter 값은 default 값을 주던가 required 로 만들어야 함.

```dart
class BankAccount {
    // Initializer list........
    BankAccount({required String accountHolder, double balance = 0,}) : accountHolder = accountHolder, balance = balance;

    String accountHolder;
    double balance;
}
```

```dart
class BankAccount {
    // shorthand syntax...............
    BankAccount({required this.accountHolder, this.balance = 0,});
    String accountHolder;
    double balance;
}
```

## 4. Const constructors

```dart
class Complex {
    const Complex(this.re, this.im);
    final double re;
    final double im;
}

void main() {
    const complex = Complex(1,2);
    const x = 10;
    const list = [
        Complex(1,2),
        Complex(3,4),
    ]
}
```

- Have a class where all variables are final?
- Use a const constructor

## 5. Named Constructors.

```dart
class Complex {
    const Complex(this.re, this.im);
    const Complex.zero() : re = 0, im = 0;
    const Complex.identity() : re =1, im =0;
    const Complex.real(this.re) : im = 0;
    final double re;
    final double im;
}
```

## 6. Getters and setters

```dart
class Temperature {
    Temperature.celsius(this.celsius);
    Temperature.farenheit(double farenheit) : celsius = (farenheit -32) / 1.8;

    // Stored variable...
    double celsius;
    // This is a computed variable...
    double get farenheit => celsius * 1.8 + 32;
    set farenheit(double farenheit) => celsius = (farenheit -32) / 1.8;
}
```

## 7. Static methods and Variables

```dart
class Strings {
    static const welcome = 'Welcome';
    static const signIn = 'Sign in';
    static String greet(String name) => 'Hi, $name';
}

void main() {
    final s = Strings();
    print(Strings.welcome);
    print(Strings.signIn);
}
```

- static class variables belong to the class itself.
- Use static const to define a global constant that belongs to a class.
