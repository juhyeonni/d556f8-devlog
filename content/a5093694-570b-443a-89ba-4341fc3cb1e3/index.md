---
title: 'Inheritance'
date: '2023-04-22 08:24:00'
author: 'Juhyeon Lee'
tags: ycjung inheritance
categories: 'Java Learning'
---

# 상속(Inheritance)


상속은 기존에 정의된 클래스의 _속성(properties)_과 _기능(methods)_을 새로운 클래스에 <u>재사용</u>하는 것.


상속을 통해 코드의 **재사용성**을 높이고, **유지보수**를 용이하게 하도록 함.


`extends`라는 키워드를 사용하여 상속을 구현한다.


**WHAT**

	- 상속은 기존에 정의된 클래스의 속성(properties)과 기능(methods)을 새로운 클래스에 재사용하는 것.

**WHY**

	- 상속을 통해 코드의 **재사용성**을 높이고, **유지보수**를 용이하게 하도록 함.
	- 기존에 정의된 클래스 기반으로 새로운 클래스를 만들어 코드를 재사용함으로 개발시간을 줄인다.

**FEATURE**

	- ‘is-a’ 관계이다. <u>예시) 거미는 동물이다. 리트리버는 개과이다. 등…</u>
	- 하나의 클래스만 상속받을 수 있다.
		- 인터페이스를 사용하면 다중 상속을 구현할 수 있다. (단순히 말하면)

## 자바프로그래밍에서의 상속

1. **코드 1**

	---


	```javascript
	class A {
		int a_x = 10;
		
		int getAx() {
			return a_x;
		}
	}
	
	class B extends A {
		...
	}
	
	class C1 extends B {
		...
	}
	
	class C2 extends B {
		...
	}
	
	public class Main {
		public static void main(String arg[]) {
			B b1 = new B();
			System.out.println(b1.getAx());
		}
	}
	```

	- B는 A를 상속하는 클래스이다.
	- C1, C2는 B를 상속하는 클래스이다.

	**메인메소드**


	---

	1. `B`의 인스턴스를 만들고 `b1` (참조변수)에 할당했다.
	2. `b1`의 멤버메소드인 `getAx()` 호출했다.
		1. `B` 클래스는 `A`를 상속하므로 `A`의 _멤버 변수_와 _멤버 메소드_를 호출할 수 있다.
1. **코드 2**

	---


	```java
	class Player {
	}
	
	class Center extends Player {
	}
	
	
	class Forward extends Player {
	}
	
	class SF extends Forward {
	}
	
	class PF extends Forward {
	}
	
	
	class Guard extends Player {
	}
	
	class PG extends Guard {
	}
	
	class SG extends Guard {
	}
	```

	- 모든 포지션은 Player이다.
	- SF, PF는 Forward이다.
	- PG, SG는 Guard이다.
1. **코드 3**

	---


	```java
	public class Inheritance {
			public static void main(String args[]) {
		      Player p1 = new SG("", 1);
	        Player p2 = new PF("", 1);
					p1.shoot();
					p2.shoot();
			}
	}
	
	class Player {
	    String name;
	    int num;
	
	    void shoot() {
	        System.out.println("Player 슛");
	    }
	}
	
	class SG extends Player {
	    SG(String argName, int argNum) {
	        name = argName;
	        num = argNum;
	    }
	    void shoot() {
	        System.out.println("SG슛");
	    }
	}
	
	class PF extends Player {
	    PF(String argName, int argNum) {
	        name = argName;
	        num = argNum;
	    }
	}
	```

	- SG, PF는 Player이다.

	**메인메소드**


	---

	1. `SG`의 새로운 인스턴스가 `p1`에 참조되었다.
	2. `PF`의 새로운 인스턴스가 `p2`에 참조되었다.
	3. `p1.shoot()` 호출
		1. `SG`의 `shoot()` _멤버 메소드_를 호출하였다.
	4. `p2.shoot()` 호출
		1. `Player`의 `shoot()` _멤버 메소드_를 호출하였다.
1. **코드 주현4**

	---


	```java
	class A {
		int x = 3;
	
	}
		
	class B extends A {
		void prtK() {
			System.out.println(x);
		]
	}
	
	class C extends B {
		int x = 5;
		void prtX() {
			prtK();
		}
	}
	
	
	public class Main {
		public static void main(String arg[]) {
			C obj = new C();
			obj.prtX();
		}
	
	}
	```


	main 메소드에서 실행되는 `obj.prtX()` 의 실행결과는


	`3`


[image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/843a3e28-0b41-4069-8179-99966a9abb82/Polymorphism.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130642Z&X-Amz-Expires=3600&X-Amz-Signature=b0f1c9f79b0ad2d0f9f0fa97180f2c3df7a0be413c96725f8c0db55a2a65d714&X-Amz-SignedHeaders=host&x-id=GetObject)

