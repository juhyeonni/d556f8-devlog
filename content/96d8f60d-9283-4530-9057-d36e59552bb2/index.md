---
title: 'Polymorphism'
date: '2023-04-22 08:24:00'
author: 'Juhyeon Lee'
tags: ycjung polymorphism
categories: 'Java Learning'
---

# 다형성(Polymorphism)


다형성은 하나의 인터페이스로부터 상속받은 여러 클래스들이 같은 메서드를 가지고 있을 때 각 클래스마다 다르게 구현된 메서드를 호출하는 기능.


즉, 같은 인터페이스를 가지면서도 **각 클래스마다 다른 구현을 할 수 있도록 하는 기능**이다.


자바에서는 _오버라이딩(overriding)_과 _오버로딩(overloading)_을 통해 다형성을 구현합니다.


**WHAT**

	- 다형성은 하나의 타입이 여러 형태를 가질 수 있다는 것.
	- 객체가 상속받은 클래스나 인터페이스를 구현하는 경우, 객체는 해당 클래스나 인터페이스를 상속받은 객체처럼 동작할 수 있는 기능을 가짐.

**WHY**

	- 코드를 **재사용**할 수 있어서 코드를 작성할 때 유연하게 프로그램을 작성할 수 있다.
	- 코드의 **가독성**과 **유지보수성**을 높일 수 있다.

**FEATURE**

	- 같은 메서드명으로 여러 타입의 객체를 처리할 수 있다.
	- 상위 타입의 참조변수로 하위 타입의 객체를 참조할 수 있다.
	- 인터페이스를 구현하는 클래스는 인터페이스를 사용할 수 있다.
1. Visibility of a reference variable (참조변수의 가시성)
2. Dynamic binding for an overrided method (오버라이딩된 메소드의 동적 바인딩)

## 자바프로그래밍에서의 다형성

1. **코드 1**

	---


	```java
	class A {
		int x = 3;
		void prtX() {
			System.out.println(x);
		}
	}
	
	class B extends A {
		int x = 4;
		int y = 5;
	}
	
	public static void main(String arg[]) () {
		A obj = new B();
		System.out.println(obj.y); // <===== err, 가시성문제....
		System.out.println(((B)obj).y);  // <=== 참조변수의 자료형을 강제적으로 형변환
	}
	```

	- B는 A를 상속하는 클래스이다.

	**메인메소드**


	---

	1. `B`의 인스턴스를 만들고 `A`형의 `obj`(참조변수)에 참조되었다.
	2. `obj`의 멤버 변수인 `y`를 호출하려고 하지만, `A`형에는 `y`가 없어 <u>호출 할 수 없다.</u>
	**가시성** 문제로 `B`의 인스턴스이라도 `A`형인 `obj`에서는 `B`형의 멤버변수를 볼 수 없다.
	3. `A`형인 `obj`를 `B`형으로 **강제적 형변환**으로 통해 `y`를 호출하였다.

	**참고자료**


	---


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1222769-1220-4230-a89b-b470cbaafaac/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130644Z&X-Amz-Expires=3600&X-Amz-Signature=6b8f86660d1ca91fcfb48ea428c9d5c818e5e53e04d0fe9970816c353b9b7ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

1. **코드 2**

	---


	```java
	class Terran { int hp; }
	class Scv extends Terran { int mineral; }
	class Tank extends Terran { boolean sMode; }
	class Marine extends Terran { boolean sPack; }
	
	public class MyFoo {
	   static void prtStatusOfSMode(Terran argObj) {
	      // 각 클래스별 S mode값을 출력하라.
	      if(argObj instanceof Scv) {             // argObj는 Scv의 인스턴스면
	         System.out.println(((Scv)argObj).mineral);
	      } else if (argObj instanceof Tank) {    // argObj는 Tank의 인스턴스면
	         System.out.println(((Tank)argObj).sMode);
	      } else if (argObj instanceof Marine) {  // argObj는 Marine의 인스턴스면
	         System.out.println(((Marine)argObj).sPack);
	      }
	   }
	   public static void main(String[] args) {
	      Terran o1 = new Scv();
	      Terran o2 = new Marine();
	      Terran o3 = new Tank();
	
	      MyFoo.prtStatusOfSMode(o1);  // mineral 변수 호출
	      MyFoo.prtStatusOfSMode(o2);  // sPack 변수 호출
	      MyFoo.prtStatusOfSMode(o3);  // sMode 변수 호출
	   }
	}
	
	```

	- Scv, Tank, Marine은 Terran을 상속하는 클래스이다.
	- 각 클래스당 특별한 멤버 변수를 가지고 있다.

	**메인 메소드**


	---

	1. `Scv`, `Marine`, `Tank` 각각의 인스턴스를 만들고 `Terran`형의 참조변수에 참조되었다.
	2. `prtStatusOfSMode()`(정적 메소드)를 통하여 각 객체는 어떤 클래스의 인스턴스인지 확인한다.
		1. `argObj`가 `Scv`의 인스턴스면, `Scv`형으로 강제 형변환하고 `mineral`을 호출하였다.
		2. `argObj`가 `Tank`의 인스턴스면, `Tank`형으로 강제 형변환하고 `sMode`을 호출하였다.
		3. `argObj`가 `Marine`의 인스턴스면, `Marine`형으로 강제 형변환하고 `sPack`을 호출하였다.

### Overriding 


오버라이딩 (**덮어쓰다**, **재정의**)- 상속


오버라이딩은 <u>상속받은 클래스</u>에서 <u>부모의 클래스</u>의 <u>메서드를</u> <u>**재정의**</u>하는 것.


오버라이딩을하면 <u>하위 클래스</u>에서 <u>부모 클래스</u>의 메서드를 그대로 사용하는 대신, **재정의**한 메서드를 사용하게 된다.


오버라이딩을 할 때는 _메서드 이름_, _매개변수_, _리턴 타입_이 부모 클래스와 일치해야한다.


접근제어자는 부모와 같거나 좁은 범위로 설정해야 한다.

1. **코드 1**

	---


	```java
	class A {
		int x = 3;
		void prtX() {
			sout("prtX of A is invoked");
		}
	}
	
	class B extends A {
		 int x = 5;
	}
	
	public class Main {
		public static void main(String args[]) {
			new B().prtX();  // prtX of A is invoked
		}
	}
	```


	해당 코드 오버라이딩의 예 ⬇️


	```java
	class A {
		int x = 3;
		void prtX() {
			sout("prtX of A is invoked");
		}
	}
	
	class B extends A {
		int x = 5;
		void prtX() {
			sout("prtX of B is invoked");
		}
	}
	
	public class Main {
		public static void main(String args[]) {
			new B().prtX();  // prtX of B is invoked
		}
	}
	```


	`super` 키워드를 사용하여 부모를 객체를 호출


	```java
	class A {
		int x = 3;
		void prtX() {
			sout("prtX of A is invoked");
		}
	}
	
	class B extends A {
		int x = 5;
		void prtX() {
			super.prtX();  // 부모의 prtX() 메소드를 호출 
			sout("prtX of B is invoked");
		}
	}
	
	public class Main {
		public static void main(String args[]) {
			new B().prtX();  // prtX of A is invoked
		}                  // prtX of B is invoked
	}
	```


### 동적 바인딩


```java
class Terran {

}

class Scv extends Terran {
    int mineral;

}

class Marine extends Terran {
    boolean sPack;
}

public class Starcraft {
    public static void main(String[] args) {
        Terran[] unitList = new Terran[200];

				unitList[0] = new Scv();
				unitList[1] = new Marine();

//        unitList[0].mineral <-- 접근 불가능!
    }
}


```


동적 바인딩(오버라이딩 된 메서드 #)


```java
class Terran {
    void prtSMode() {}  // 동적바인딩을 하기 위해 선언해놓은 메소드
}

class Scv extends Terran {
    int mineral = 20;
		void prtSMode() {   // #
        System.out.println(mineral);
		}

}

class Marine extends Terran {
    boolean sPack = false;
		void prtSMode() {   // #
        System.out.println(sPack);
		}
}

public class Starcraft {
    public static void main(String[] args) {
        Terran[] unitList = new Terran[200];

				unitList[0] = new Scv();
				unitList[1] = new Marine();
				
				unitList[0].prtSMode();  
				unitList[1].prtSMode();
		}
}


```


내일은 추상화…


동적바인딩 dynamic binding for an  overriding method


⇒ 다형성을 위해  



overriding 

- 상속
- 메소드

오버라이딩된 메소드의 동적 바인딩은 다형성의 단점을 보완을 해준다. 

