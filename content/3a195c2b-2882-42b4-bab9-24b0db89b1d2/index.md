---
title: 'Object & Class'
date: '2023-04-22 08:24:00'
author: 'Juhyeon Lee'
tags: ycjung object class
categories: 'Java Learning'
---
- [Class의 요소](/3a195c2b288242b4bab924b0db89b1d2)
	- [Quiz](/3a195c2b288242b4bab924b0db89b1d2)
- [멤버 변수의 초기화](/3a195c2b288242b4bab924b0db89b1d2)
- [정적 변수의 사용](/3a195c2b288242b4bab924b0db89b1d2)
- [Overloading](/3a195c2b288242b4bab924b0db89b1d2)
- Function

## Class의 요소 


```java
// Student Class
class Student {    
	// Member Variable    
	String stdName;    
	int subKorean;    
	int subMath;    
	int sum;    

	// Constructor    
	Student(String argName, int argKorean, int argMath) {        
		stdName = argName;        
		stdKorean = argKorean;        
		stdMath = argMath;    
	}

	// Member Method    
	int getSum() {        
		return subKorean + subMath;    
	}
}
```


```java
// App
public static void main(String[] args) {
    Student std1 = new Student(); // err
    Student std2 = new Student(); // err
    Student std3 = new Student(); // err
}
```


`subName`, `subKorean`, `subMath`… => Member Variable 
`getSum()` => Member Method 
`Student(String argName, int argKorean, int argMath)` => Constructer


`new` 키워드를 사용하여 새로운 객체를 만들어 낼 때, 
해당 클래스에 생성자를 호출해야 되어서 
=> 생성자에서 요구하는 arguments를 입력하지 않아서, 위 App 소스에서 에러가 걸렸다.


올바르게 객체를 생성 하려면 아래와 같이 짠다.


```java
// App
public static void main(String[] args) {
	Student std1 = new Student("김상수", 100, 60); 
	Student std2 = new Student("이주현", 80, 20); 
	Student std3 = new Student("박지현", 70, 30); 
}
```


### Quiz


Q1) 클래스와 오브젝트간의 **관계**는?

- 클래스는 같은 속성을 가진 것을 찍어내는 것.
- 오브젝트는 클래스에서 찍어나오는 것.

Q2) Java에서 클래스를 정의하는 방법은?


```java
class <클래스명> {
  // Member variableG
	int <변수명>;
	String <변수명>; 	

  // Constructor
	<클래스명>(int <변수명>.., Stirng<>.. など…) {
		"""객체가 생성될 때 실행되는 구역"""  
	} 

}
```


Q3) 클래스 내 구성요소는 

- 변수 - _생명주기: 현재 위치하는 스코프 내_
	- Member Variable (멤버 변수) - _위치하는 객체 내_
- 메소드
	- Member Method (멤버 메소드)
	- constructor (생성자) - 객체를 초기화 하기 위한 메소드(함수)

Q4) 객체 생성 방법은?


```java
new <클래스명>(); 
```


Q5) 생성된 객체에 접근하는 방법은?


Q6) OOP에서 프로그램의 작성 단위는?

- Object 객체

---


```java
// ObjectAndClass.java
package exam;

class Foo {

}

class Bar {
	
}

class Pos {

}
public class ObjectAndClass {
	public ObjectAndClass() {
		new Foo();
		// new exam.Foo();    <- it can possible also
		new Bar();
		new Pos();
	}
}
```


```java
// Main.java
import exam.ObjectAndClass;

public class Main {
	public static void main(String arg[]) {
		new ObjectAndClass();
	}
}
```


Class 밖에는 코드 작성 (변수 선언 등) 을 할 수 없다.


## 멤버 변수의 초기화


```java
class Foo {
	int k;

	Foo() {       
		k = 10;
	}
}
```


```java
class Foo {
	final int k;

	Foo() {       
		k = 10;    //  상수도 생성자 안에서 초기화 할 수 있다.
	}
}
```


상수 `k`도 `Foo()` 생성자에서 초기화 할 수 있다.


## 정적 변수의 사용


```java
class Scv {
	static int myId;

	Scv() {
		myId=myId+ 1;
	}	
}

public class ObjectAndClass {
  public ObjectAndClass() {
		System.out.println((new Scv()).myId);    // => 1
    System.out.println((new Scv()).myId);    // => 2
    System.out.println((new Scv()).myId);    // => 3
    System.out.println((new Scv()).myId);    // => 4
    System.out.println((new Scv()).myId);    // => 5
	}
}
```


## Overloading


구조적 언어로부터 시작 된 개념


적용 대상

	- 생성자
	- 메서드

동일한 이름의 생성자/메서드가 존재하고,
매개 변수의 **자료형**과 **개수**에 따라 적합한 생성자/메서드를 호출하는 방법


```java
class Person {
    void prt() {
        System.out.println("hello: ");
    }
    void prt(int a) {
        System.out.println("hello: " + a);
    }
    void prt(float a) {
        System.out.println("hello: " + a);
    }
    void prt(char a) {
        System.out.println("hello: " + a);
    }
    void prt(int a, float b) {
        System.out.println("hello: " + a + ": " + b);
    }
}

public class Overloading {
    public Overloading() {
        (new Person()).prt();
        (new Person()).prt(10);
        (new Person()).prt(10.1f);
        (new Person()).prt('a');
        (new Person()).prt(10, 10.0f);
    }
}
```


## Function


Input  → somthing acting → output

- Parameter (매개 변수)
- Argument (인자값)

## Default Constructor


```java
class Scv {
	String name;
	int    hp;	

	// default constructor
	Scv() { }

	// overloading constructor
	Scv(String argName) {
		name = argName;
	}
	Scv(String argName, int argHp) {
		name = argName;
		hp = argHp
	}

}
```


작성한 코드중 constructor가 하나도 없을 때,
Java에서 default constructor를 생성하지 않아도 생성해준다.


```java
class Scv {
	String name;
	int    hp;	

	// default constructor
	// Scv() { }

	// overloading constructor
	Scv(String argName) {
		name = argName;
	}

}


public class Main {
	public static void main(String args[]) {
		Scv s1 = new Scv();    // err!
		Scv s2 = new Scv("Scv2");   
	}
}
```


만약 위와 같이 인수값을 받는 constructor를 만들어 놓고, 
default constructor를 사용하려고 하면 에러가 생긴다.


## 변수


> 💡 중요! 접근범위(Scope), 생명주기(Life cycle)

1. 멤버변수: 클래스 내 선언된 변수 (메소드/생성자 내 선언된 변수는 제외)
	1. 인스턴스 멤버변수
	2. 클래스 멤버변수
2. 지역변수: 메소드/생성자 내 선언된 변수
3. 매개변수: 메소드/생성자의 인자 값을 받는 변수

```java
class Scv {
	int hp;	/*멤버 변수*/
	
	Scv() { hp = 30; }
	
	void actSomthing(int argA /*매개 변수*/) {
		int sum /*지역 변수*/ = argA + hp;
	}
	
	void foo() {
		int bar = hp + 2;
	}

}
```


자바는 소멸자가 없습니다.


```java
class Bar {
	int x = 3;
	void p1() {
		int y = 3;
		p2(y);
	}
	void p2(int argA) {
		int z = 4;
		p3(argA, z);
	}
	void p3(int argB, int argC) {
		System.out.println(argB+argC);	
	}
}


public class Foo {
	public static void main(String arg[]) {
		(new Bar()).p1();
	}
}
```


## Stack and Heap


메서드를 호출할때 생성되는 변수를 저장하는 곳 


new 연산자를 이용하여 동적으로 할당한 메모리 ⇒ 객체


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0e0110d2-ed1d-45a6-9ebf-e43e8b00c9b5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130702Z&X-Amz-Expires=3600&X-Amz-Signature=cd67880143d1ee56d07d585f68628776e0bca66b0831bba7d0e15b24172b1e8e&X-Amz-SignedHeaders=host&x-id=GetObject)


```java
class Bar {
	int x = 3;
	Foo f1;
	
	void bf1(int argA) {
		f1 = new Foo(argA);
	}
}

class Foo {
	int y;
	Foo(int argA) {
		ff1();
		y = argA;
	}
	void ff1() { System.out.println(y); }
}

public class Main {
	public static void main(String args[]) {
		(new Bar()).bf1(2);
	}
}
```


### Lifecyle and Scope


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1ab1f74-a14a-459f-b15c-ef7a5b41145c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130702Z&X-Amz-Expires=3600&X-Amz-Signature=4b20b807dfa320d16488ee3a2f33acf97fc70597cc42f8e6ea113d9710a8984d&X-Amz-SignedHeaders=host&x-id=GetObject)


인스턴스 멤버 변수 (**객체**에서의 변수)


클래스 멤버 변수 (**클래스**에서의 변수) static

1. 프로그램의 종료
2. GC의 의한 삭제

return 값도 Stack에 쌓인다.


왜 클래스, 인스턴스로 정의 했을까?


```java
class Bar {
	static int x = 3;
	static void prtSomething() { 
		System.out.println("hello");
	}
}

public class MyProject {
	public static void main(String args[]) {
		System.out.println( Bar.x );
		Bar.prtSomething();
	}
}
```


클래스 멤버변수는 Static(Code) Area에 찍히게 됨.


 


```java
class ScvA {
    static int id;

    ScvA() { id++; }


}

public class Member {
    public Member() {

        ScvA s1 = new ScvA();
        ScvA s2 = new ScvA();
        ScvA s3 = new ScvA();
        ScvA s4 = new ScvA();
        ScvA s5 = new ScvA();

        System.out.println(ScvA.id);
    }

}
```


```java
class Bar {
	static int getRandNum10() {
		return (int)(Math.random() * 11);
	}
}

public class MyProject {
	public satic void main(String arg[] ) {
		System.out.println(Bar.getRandNum10());
	}
}
```


```java
class Bar {
	int x = 3;
	static 
	static int getRandNum10() {
		return (int)(Math.random() * 11);
	}
}

public class MyProject {
	public satic void main(String arg[] ) {
		System.out.println(Bar.getRandNum10());
	}
}
```


```java
package test;

class Bar {
	
	int x = 3;
	
	static int y =3;
	
	static void prtSomething1() {
		prtSomething2();    // 클래스 멤버 메소드에서 인스턴스 멤버 메소드 호출 X
	}
	
	static void prtSomething3() {
		System.out.println(x);    // 클래스 ㅁ
	}
	
	void prtSomething2() {
		System.out.println("hello");
	}
	
}

public class test4 {

	public static void main(String[] args) {
		
		System.out.println(Bar.getRandNum10());

	}

}
```


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48dc980e-090d-49ef-8f8e-0749200d6ed8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130703Z&X-Amz-Expires=3600&X-Amz-Signature=fca77036e47634f26f035898ca3a881f8a8de07648950dac0b8c7f56e22d954b&X-Amz-SignedHeaders=host&x-id=GetObject)


클래스 → 인스턴스 멤버 [변수, 메소드]를 호출 할 수 없는 이유: 
태어나는 때가 다르기 때문.


## 클래스 멤버와 인스턴스 멤버


차이점


	생성

	- 클래스 멤버: 는 클래스가 처음 사용될 때 생성됨.
	- 인스턴스: 특정 클래스를 이용하여 객체를 생성 될 때, 생성됨

	메모리영역

	- 인스턴스 → heap
	- 클래스 → code area

	생명주기 (Life Cycle)

	- 클래스 멤버 변수, 메소드는 한번 올라가면 프로그램이 종료 될 때까지
1. 객체 생성(I, C) → 참조변수 이용 멤버 접근
2. 클래스 이름 (C)

자주 사용되는 기능을 사용하기 위해서 클래스 멤버 메소드를 정의한다.


```java
class Bar {
	int x = 3;
	void prt1() { System.out.println("hello"); }
	
	static int y = 4;
	static void prt2() { System.out.println("hello"); }
}

public class MyProject {
	int x = 3;

	public static void main(String args[]) {
		System.out.println(x); // 클래스 -> 인스턴스 [멤버 변수]
		prt1(); // 클래스 -> 인스턴스 [멤버 메소드]
	}

	void prt1() {}
}
```


## Method


클래스는 변수와 함수로 구성


```java
class Bar {
	// 반환형 메소드이름 (매개변수) { }
	Foo getFooObj() {
		return new Foo()
	}
}

class Foo {
	int x = 3;
}

public class MyProject {
	public static void main(String arg[]) {
		Foo f1 = (new Bar()).getFooObj();
	}
}
```


```java
class Bar {
	static StdInfo doSomething() {
		return new StdInfo(2, "hello");
	}
}

class StdInfo {
	int id;
	String name;

	StdInfo(int argId, String argName) {
		id = argId;
		name = argName;
	}
}
```

1. 메소드에서 반환갯수는 1개.
2. 같은 반환형에 여러가지의 반환을 하려면 배열같은 것을 사용하면 됨
3. 서로 반환형이나 여러 반환값을 하려면 클래스를 사용하면 됨 위 코드와 같이

CS에서는 값이 없는 경우에는 0을 쓰지 않고 `null` 이라는 것을 쓴다.


```java
void method() {
	if (3 > 2) 
		return;
}
```


메소드에서 중간에 빠져나오고 싶을 때 codition을 설정하여 `return;` 을 이용하면 좋다. (void)


```java
class ErrorCode {
	static final int UNKNOWN_ERROR = 1;
}

class Bar {
	static int doSomething() {
			if(3 > 2)
			return ErrorCode.UNKNOWN_ERROR;
		return 0;
	}
}
```


`int` 와 같이 반환이 있는 형은 `ErrorCode` 처럼 정의하여 사용하면 좋다.


Thread → 코드를 실행해준다. <u>**(일꾼)**</u>


## Call by Value (primitive)


> 인자값의 value를 복사함 (인자값을 갖는 변수에는 변화가 생기지 않음)


```java
class Bar {

	static void doSomething(int argA) {
		argA = 5;
		System.out.println(argA);
	}
}
public class MyProject {
	public static void main(String args[) {
		int x = 3;
		
		Bar.doSomething(x);
		System.out.println(x);
	}
}

```


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4303eacb-2e40-45d4-80d2-36c4e9623e26/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130703Z&X-Amz-Expires=3600&X-Amz-Signature=7fcdbb0108223c214788834a912490b9591295534d7e875c956fc5b7b009680e&X-Amz-SignedHeaders=host&x-id=GetObject)


## Call by Reference


> 인자값의 메모리 주소를 복사함 (해당 메모리 주소에 있는 값에 변화가 생김)


```java
class Bar {
	static void doSomething(Foo argFooObj, int argY) {
		argY = 20;
		argFooObj.x = 10;
	}
}

class Foo {
	int x = 3;
}

public class MyProject {
	public static void main(String args[) {		
		Foo f1 = new Foo();
		int y = 10;
		Bar.doSomething(f1, y);
		System.out.println(f1.x + ":" + y);
	}
}

```


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1ecd86e-6548-4199-93c3-fe15f972efeb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130703Z&X-Amz-Expires=3600&X-Amz-Signature=8234cc4e6911cb502bf720fa92a8509b8684ed6ddbc137d523e0df5ef6826052&X-Amz-SignedHeaders=host&x-id=GetObject)


## Deep Copy & Shallow Copy


```java
class Bar {
	int x =3;
	Foo f1;
	int k[];
}

class Foo {

}

public class MyProject {
	public static void main(String arg[]) {
		Bar b1 = new Bar();
		b1.x = 10;
		Bar b2 = b1;    // Shallow copy

	
	}
}

```


## Overloading


```java
class Bar {
	void prt(String argName) {
		System.out.println("name: " + argName);
	}
	void prt(String argName, int argId) {
		System.out.println("name: " + argName + ", id: " + argId);
	}
}

public class MyProject {
	public static void main(string args[]) {
		Bar b1 = new Bar();
		b1.prt("LSY");
		b1.prt("LSY", 12);
	}
}

```


## Overriding

1. 초기 스케치 (머리있는 내용 가지고 정리)
2. 

## Initialization Block


```java
class Bar {
	static {
		System.out.printl("스태틱 초기화 블록 호출");
	}	

	{
		System.out.println("인스턴스 초기화 블록 호출");
	}

	Bar() {
		System.out.println("생성자 호출");
	}
}

public class MyProject {
	public static void main(string args[]) {
		// Bar b1 = new Bar();
	}
}

```

1. 스태틱 초기화가 뭔지 (해당 클래스가 처음으로 사용했을 때 실행되는 method - > 해당 클래스가 처음으로 값이 할당되었을 때)
2. 인스턴스 초기화 블록 호출이 뭔지
3. 왜 쓰는 건지

6~8장 3번 회독


|      | 초기화      | 생성자      |
| ---- | -------- | -------- |
| 형태   | 함수       | 함수       |
| 호출순서 | 생성자 호출 전 | 생성자 호출 때 |
|      |          |          |


중복되는 


오버로딩


매개변수 유형에 따라 호출한다.


```javascript
class Bar {
	// 공통으로 실행되는 코드를 초기화 블럭에 지정 (가장 먼저 실행되는 것이 확정일 때)
	// 반드시 객체가 생성될 때 초기화시킴 (강제성)
	{
		System.out.println("k"); 
	}
	
	Bar() {
		// System.out.println("k"); // 중복
	}

	Bar(int argA) {
		// System.out.println("k"); // 중복
		a = argA;
	}
	Bar(int argA, int argB) {
		// System.out.println("k"); // 중복
		a = argA;
		b = argB;
	}
}



public class MyProject {
	public static main(String args[]) {
		Bar b1 = new Bar();
	}
}

```


```javascript
class Bar {
	
	Bar() { // 이렇게 써도 된다. 
		System.out.println("k"); // 중복
	}

	Bar(int argA) {
		this();
		a = argA;
	}
	Bar(int argA, int argB) {
		this();
		a = argA;
		b = argB;
	}
}



public class MyProject {
	public static main(String args[]) {
		Bar b1 = new Bar();
	}
}

```


클래스 설계 관점

