---
title: 'Java Basic'
date: '2023-03-03 08:51:00'
author: 'Juhyeon Lee'
tags: primitive type reference type
categories: 'Java learning pages'
---

## 기본형 (Primitive Type)


`int`, `float`, `double`, `char`, `boolean` 등 과 같은 것이 있다.

- 8가지 기본형 타입을 미리 정의하여 제공한다.
- 실제 값을 저장하는 공간으로 Stack 메모리에 저장
- 기본값이 존재하기 때문에 Null이 존재하지 안흔다.
- 기본형 타입에 Null을 넣고 싶다면 Reference 클래스를 활용한다.
- 정의할 떄 소문자를 사용한다.

## 참조형 (Reference Type)


`Integer`, `Float`, `String`, `Scanner` 등 과 같은 것이 있다.

- 기본형을 제외한 나머지 형이다.
- Null이 존재한다.
- Class는 대문자로 시작한다.

## 변수이름 지정

- `camelType`
- `snake_type`

## 클래스 소스파일


일반적으로 1개의 클래스가 존재한다.


```text
- package
	- Student.java
	- Lecture.java
```


각각 하나의 클래스를 갖는다.


물론 하나의 자바소스코드에 여러개의 클래스가 정의 될 수 있다.


## 컴파일


소스파일을 `바이트 코드`로 변경해준다.


CPU가 아닌 가상머신(JVM)에서 이해할 수 있는 코드이다.


이와 다르게 `바이너리 코드`란.


바이너리 파일은 <u>실행가능한</u> 코드, 컴퓨터가 인식할 수 있는 0과 1로 구성된 이진코드를 의미한다.

