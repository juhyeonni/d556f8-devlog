---
title: 'Interface'
date: '2023-04-22 08:22:00'
author: 'Juhyeon Lee'
tags: ycjung interface
categories: 'Java Learning'
---

# 인터페이스란?


접점, 창구, 접속기
정보를 주고받을 수 있는 창구
Bracket
서로 다른 객체와 객체가 붙여야 할 때 인터페이스를 감싸서 사용.


## 특징


생성자가 없다.
인터페이스에서는 추상 메서드를 주로 사용한다.
클래스와 다르게 다중상속이 가능하다.
클래스에 매달려서 사용이 된다.
구현 메서드는 절대 가질 수 없다.


**인터페이스의 선언법**

interface `인터페이스명` (extends `interface` )


## 인터페이스의 요소


(extends interface)는 생략가능

1. 클래스 상수가 올수 있다.

	```java
	interface OOO (extends interface) {
		public static final 자료형 상수명 = 초기값; // 클래스 상수가 올 수 있다.
	}
	
	```

2. 추상 메서드가 올수 있다.

	```java
	interface OOO (extends interface) {
		public abstract 반환형 메서드명(매개변수); // 추상 메사드를 가져 올 수 있다.
	}
	
	```

3. default 메서드가 올수 있다. (Java 8이상)

	```java
	interface OOO (extends interface) {
		public default 반환형 메서드명(매개변수) { }
	}
	
	```

4. 클래스 메서드가 올수 있다. (Java 8이상)

	```java
	interface OOO (extends interface) {
		public static 반환형 메서드명(매개변수) { }
	}
	
	```


추상 클래스와 인터페이스는 존재 목적이 다르다.


추상 클래스의 목적은,
상속을 받아 기능을 이용하고, 확장시키는 데 있다.


## 예문

1. 예문 1

	```java
	package level.level_1;
	
	interface Engine {
	    void startEngine();
	    void stopEngine();
	
	}
	
	class Car implements Engine {
	    public void startEngine() {
	        System.out.println("Car start");
	    }
	    public void stopEngine() {
	        System.out.println("Car stop");
	    }
	}
	
	class Bike implements Engine {
	    public void startEngine() {
	        System.out.println("Bike start");
	    }
	    public void stopEngine() {
	        System.out.println("Bike stop");
	    }
	}
	
	public class A {
	    public static void main(String[] args) {
	        Car obj1 = new Car();
	        Bike obj2 = new Bike();
	
	        obj1.startEngine();
	        obj1.stopEngine();
	
	        obj2.startEngine();
	        obj2.stopEngine();
	
	    }
	}
	
	```

2. 예문 2

	```text
	package level.level_1;
	
	interface EngineBracket {
	    public abstract void startEngine();
	    public abstract void stopEngine();
	
	}
	
	class BenzEngine implements EngineBracket {
	    public void startEngine() {
	        System.out.println("benz engine start");
	    }
	    public void stopEngine() {
	        System.out.println("benz engine stop");
	    }
	}
	
	class G90 {
	    EngineBracket myEngine;
	    G90(EngineBracket argEngine) {
	        myEngine = argEngine;
	    }
	
	    void start() {
	        myEngine.startEngine();
	    }
	    void stop() {
	        myEngine.stopEngine();
	    }
	}
	
	public class Mafoo {
	    public static void main(String[] args) {
	        G90 car1 = new G90(new BenzEngine());
	
	        car1.start();
	        car1.stop();
	    }
	
	}
	
	```


인터페이스는 브라켓이다.


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0adcb5c8-629f-4edf-ab3b-6629e37ce51e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130645Z&X-Amz-Expires=3600&X-Amz-Signature=02bfc365eb41ec0310d12236150c892308fa4ff4123e8e055bfaa7312341ba12&X-Amz-SignedHeaders=host&x-id=GetObject)


모듈화된 클래스를 가져다가 쓸 수 있다.
클래스는 모듈 (Engine)
인터페이스는 브라켓 (Adaptor)


클래스끼리 상속하다 보면 프로그램은 반드시 해당 클래스를 사용해야 되는 종속관계가 생김


이를 해결하기 위해서 인터페이스를 사용함.

