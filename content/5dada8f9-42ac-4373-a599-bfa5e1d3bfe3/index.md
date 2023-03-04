---
title: 'Class Object'
date: '2023-03-03 08:47:00'
author: 'Juhyeon Lee'
tags: class member method overloading type casting Access Modifier
categories: 'JavaLearningPages'
---

# OOP


| Object Oriented Programming |
| --------------------------- |
| ↕️                          |
| Procedural Programming      |


### features

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
- Information hiding

## 메소드


클래스(참조형)에서 특정한 기능을 수행하는 코드이다.


함수와 비슷한 역할을 하지만,
**메소드는 클래스 내의 멤버들의 값을 처리하기 위해 사용되는 함수이다.**


따라서, 메소드는 클래스에 속한 함수라고 생각할 수 있다.


함수는 독립적으로 존재할 수 있지만, 메소드는 반드시 클래스에 속해 있어야 한다.

1. **예시코드**

	---


	```java
	import java.util.Scanner;
	
	class Scratch {
	    public static void main(String[] args) {
	        Television tv1 = new Television();
	        tv1.cli();
	    }
	}
	
	aclass Television {
	    Scanner sc = new Scanner(System.in);
	    private int channel
	    private boolean power;
	
	    public Television() {
	    }
	
	    public void cli() {
	        while (true) {
	            prtMenu();
	            selectMenu();
	        }
	    }
	
	    public void prtMenu() {
	        String msg = String.format(
	            """
	            ----------------
	            Power: %b
	            Channel Num: %d
	            ----------------
	            1. toggle power\t 2. channel up\t 3. channel down\t 4. set channel
	            """, power, channel
	        );
	
	        System.out.println(msg);
	    }
	
	    public void selectMenu() {
	        int select = sc.nextInt();
	        switch (select) {
	            case 1:
	                togglePower();
	                return;
	            case 2:
	                upChannel();
	                return;
	            case 3:
	                downChannel();
	                return;
	            case 4:
	                setChannel(0);
	                return;
	            default:
	                return;
	        }
	
	    }
	    public void togglePower() {
	        power = !power;
	    }
	
	    public void setChannel(int chNum) {
	        channel = chNum;
	    }
	
	    public void upChannel() {
	        channel++;
	    }
	
	    public void downChannel() {
	        channel--;
	    }
	}
	```


## Type casting 


타입 형 변환 


### Widening Casting


**묵시적** 형변환


작은 유형을 큰 유형 크기로 변환하기


`btye` → `short` → `int` → `long` → `flaot` → `double`


`char` → `int` → …


```java
int d8 = 10;

long d16 = d8; // 묵시적 형 변환
```


### Narrowing Casting


**명시적** 형변환


큰 유형을 작은 유형으로 변환하기


 `double` → `float` → `long` → `int` → `char` → `short` → `byte`


```java
long d16 = 100;

int d8 = (int) d16; // 암시적 형 변환
```


## 메소드 오버로딩


같은 이름을 가지는 메소드를 중복하여 정의하는 것.


원래는 **불가능**하나,
매개변수의 개수나 타입을 다르게하면, 하나의 이름으로 메소드를 작성할 수 있다.


다음과 같은 조건이 있다.

1. 메소드의 이름이 같아야 한다.
2. 메소드의 시그니처, 즉 매개변수의 개수 또는 타입이 달라야 한다.

> 시그니처는 같은데? 반환 타입이 다른경우는 오버로딩이 성립하지 않는다.


## Access Modifier

1. **예시코드**

	---


	```java
	class Scatch {
	    public static void main(String[] args) {
	        JavaTest obj1 = new JavaTest();
	        // 'name'이(가) 'JavaTest'에서 private 액세스를 가집니다
	         /*
	        obj1.name = "trying to change name";
	        System.out.println(obj1.name);
	         */
	    }
	}
	
	class JavaTest {
	    private String name;
	    private int age;
	}
	```

	- Scratch 클래스의 `main()` 에서 `private`인 `name` (멤버변수)을 접근하려고 하자, 컴파일러에서 문제가 발생했다.
	`'name'이(가) 'JavaTest'에서 private 액세스를 가집니다`
	- `private`의 접근 제어자는 같은 클래스내에서만 변수 또는 메소드를 접근할 수 있다.
