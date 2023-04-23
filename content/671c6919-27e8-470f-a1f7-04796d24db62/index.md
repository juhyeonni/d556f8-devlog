---
title: '추상화'
date: '2023-04-22 08:24:00'
author: 'Juhyeon Lee'
tags: ycjung abstraction
categories: 'Java Learning'
---

**상속**을 위해 필요함.


그 객체에 대표하는 속성을 정의 (공통적인 부분을 위로 올리기 위해서)


클래스를 설계하기 위해서 


Abstract 


강제성


상속을 받는 클래스 또는 메서드를 반드시 구현하도록 하는 것.


abstract 키워드가 위치하는 곳

- 클래스
- 메서드

추상화 클래스는


미완성된 클래스라서


An abstract class cannot be instantiated because it is meant to be a base class for other classes and cannot be used on its own. It is used to define a common interface or set of methods that must be implemented by its subclasses. An object cannot be created from an abstract class, but it can be used as a reference variable to hold an object of one of its concrete subclasses.


추상 클래스는 다른 클래스의 기저 클래스가 되도록 의도하므로 인스턴스화할 수 없으며 단독으로 사용할 수 없습니다.


추상 클래스는 해당 하위 클래스가 구현해야 하는 공통 인터페이스 및 메서드 세트를 정의하는 데 사용됩니다.


추상 클래스에서 객체를 생성할 수는 없지만, 그 구상 서브 클래스의 객체를 유지하기 위한 **참조 변수**로 사용할 수는 있습니다.


```java
class Player {
    int number;
    String name;

    void shoot() {
        System.out.println("기본 슈팅");
    }

    void pass() {

    }

}

class Center extends Player {
    @Override
    void shoot() {
        System.out.println("센터 슈팅");
    }

}
class SJHoon extends Center {
    @Override
    void shoot() {
        System.out.println("서장훈 슈팅");
    }
}

class Scratch {
    public static void main(String[] args) {
        Player p1 = new Player();
        p1.shoot();

        Player p2 = new Center();
        p2.shoot();

    }
}
```


```java
abstract class Player {
    int number;
    String name;

    void shoot() {
        System.out.println("기본 슈팅");
    }

    void pass() {

    }

}

class Center extends Player {
    @Override
    void shoot() {
        System.out.println("센터 슈팅");
    }

}
class SJHoon extends Center {
    @Override
    void shoot() {
        System.out.println("서장훈 슈팅");
    }
}

class Scratch {
    public static void main(String[] args) {
//        Player p1 = new Player(); <-- cannot be instantiated
//        p1.shoot();

        Player p2 = new Center();
        p2.shoot();

    }
}
```






```java
abstract class Player {
    int number;
    String name;

    abstract void shoot() {
        System.out.println("기본 슈팅");
    }

    void pass() {

    }

}

class Center extends Player {
    @Override
    void shoot() {
        System.out.println("센터 슈팅");
    }

}

// class Forward extends Player { <-- abstract methods cannot have a body, must be implementated
    @Override
    void pass() {
        super.pass();
    }
}

class SJHoon extends Center {
    @Override
    void shoot() {
        System.out.println("서장훈 슈팅");
    }
}

class Scratch {
    public static void main(String[] args) {
//        Player p1 = new Player(); <-- cannot be instantiated
//        p1.shoot();

        Player p2 = new Center();
        p2.shoot();

    }
}
```


```java
abstract class Player {
    int number;
    String name;

    abstract void shoot() {
        System.out.println("기본 슈팅");
    }

    void pass() {

    }

}

class Center extends Player {
    @Override
    void shoot() {
        System.out.println("센터 슈팅");
    }

}

class Forward extends Player {
    @Override
    void shoot() { // like this!
        System.out.println("포워드 슈팅");
    }

    @Override
    void pass() {
        super.pass();
    }
}

class SJHoon extends Center {
    @Override
    void shoot() {
        System.out.println("서장훈 슈팅");
    }
}

class Scratch {
    public static void main(String[] args) {
//        Player p1 = new Player(); <-- cannot be instantiated
//        p1.shoot();

        Player p2 = new Center();
        p2.shoot();

    }
}
```


# Reminding


다형성: 자식의 객체가 부모의 클래스를 가르키는 것


추상화: 강제적으로 자손이 속성이나 메소드를 가지게 하기 위해서.


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9e0f81ed-1914-4a0c-af97-9026a1c0cbd8/D77CE854-3768-45EE-BB6A-A53D9B68DD59_1_105_c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130641Z&X-Amz-Expires=3600&X-Amz-Signature=c459c273adb9cde602679035b92b60ad17c97cabb7947a11017bddd8a7196a87&X-Amz-SignedHeaders=host&x-id=GetObject)


# Detail


자바관점의

- 상속
- 다형성
- 추상화

파이썬으로 파입저글링


왜 오버로딩, 


## 상속


```java
class A {
    static {
        System.out.println("static initialization of A");
    }
    {
        System.out.println("initialization of A");
    }
    A() {
        System.out.println("constructor of A");
    }
}

class B extends A {
    static int x = 3;
    static {
        System.out.println("static initialization of B");
    }
    {
        System.out.println("initialization of B");
    }
    B() {
        System.out.println("constructor of B");
    }


}

class C extends B {
    static int y = 3;
    static {
        System.out.println("static initialization of C");
    }
    {
        System.out.println("initialization of C");
    }
    C() {
        System.out.println("constructor of C");
    }

}

class Scratch {
    public static void main(String[] args) {
        System.out.println(C.y); // A를 상속하는 B를 상속하는 C의 y를 호출
        // 그래서 먼저 static method가 먼저 출력이 되고 /* static initialization of <class> */
        // 호출한 C.y가 찍힌다.
        /* 그이유는,
         * code area상 처음으로 클래스가 사용될 때,
         *  먼저 A, B, C가 찍히게 되고 그다음 호출한 static 변수인 C.y를 가져오게 되는 것.
         * */
        System.out.println("-------------------");

        new C();
    }
}

~~~ result
static initialization of A
static initialization of B
static initialization of C
3
-------------------
initialization of A
constructor of A
initialization of B
constructor of B
initialization of C
constructor of C
~~~
```


부모를 가르키는 super 


```java
class A {
    A() {
//        super();
        System.out.println("constructor of A");
    }
}

class B extends A {
    B() {
//        super();
        System.out.println("constructor of B");
    }

}

class C extends B {
    C() {
//        super(); Java에서는 자동으로 부모 생성자를 호출하게 해준다. (컴파일 전 전처리기가)
        System.out.println("constructor of C");
    }

}

class Scratch {
    public static void main(String[] args) {
        new C();
    }
}


~~~result
constructor of A
constructor of B
constructor of C
~~~
```


자식개체에서 부모에 


```java
class A {
    A() {
//        super();
        System.out.println("constructor of A");
    }
}

class B extends A {
    B(int arg) {
//        super();
        System.out.println("constructor of B");
    }

}

class C extends B {
    C() {
//        super(); <-- err! default 생성자를 호출할 떄 B에는 default생성자가 없어서,
// 그리고 경우에 따라서 super의 인자값을 넣어서 사용한다.
        System.out.println("constructor of C");
    }

}

class Scratch {
    public static void main(String[] args) {
        new C();
    }
}
```


Modifier(수식어)


대상: 클래스와 클래스의 구성요소를 꾸며준다.

1. Access Modifier(접근 제어자)
2. others..(그외)

구성요소

- 생성자
- 소멸자
- 멤버메소드
- 멤버변수

Access modifier


참조 변수 관점


상속 관계


내부에서 접근하거나 외부에서 접근할 수 있게 제어할 수 있는 역할 (접근하는 정도를 지정해줄 수 있음)


```java
class Car {
    int velocity = 0;
    void incAcel() { ++velocity; }
    void decAcel() { --velocity; }

    int getVelocity() { return velocity;}
}

class Scratch {
    public static void main(String[] args) {
        Car obj = new Car();
        obj.incAcel();
        obj.incAcel();

        System.out.println(obj.getVelocity());

        obj.decAcel();
        System.out.println(obj.getVelocity());

        obj.velocity = 100;
        System.out.println((obj.getVelocity()));
    }
}
```


# Modifier 


> class와 class의 구성 요소를 꾸며준다 

1. Access Modifier ( 접근 제어자)
2. 그 외 ( 다른 언어에 있는 것도 있고 , 없는 것도 있다 )

> ❓ Access Modifier ( 접근 제어자) 는 언제 사용되나?  
>   
> 1. 참조 변수 관점에서 사용된다 (외부 접근)  
> 2. 상속 관계에서 사용된다


## 제어자가 필요하다!


```java
package test;

// 상속 
class Car {
	int velocity = 0;
	void IncAcel() {++velocity;}
	void DecAcel() {--velocity;}
	
	int getVelocity () {return velocity;}
}


public class TEST7 {
	public static void main(String[] args) {

		Car obj = new Car();
		obj.IncAcel();
		obj.IncAcel();
		System.out.println(obj.getVelocity());
		
		obj.DecAcel();
		System.out.println(obj.getVelocity());
		
		obj.velocity = 100;   // 갑자기 지멋대로 100을 치노?  접근 제어자 필요!!! 
		System.out.println(obj.getVelocity());
	}
}
```


|    |           친절 ( 다 됨)  |             ←  |            ←  |         엄격( 다 안됨)      |   |
| -- | -------------------- | -------------- | ------------- | ---------------------- | - |
|    |           **public** |      protected |       default |           **private**  |   |
| 외부 | O                    | △              | △             | X                      |   |
| 상속 | O                    | ~△~            | △             | X                      |   |
|    |                      |                |               |                        |   |


protected는 default와 비슷하다.


protected 다른패키지에서 상속은 허용된다.


상속을 하는데 , 자식에게 빛을 물려주고 싶지 않다… 어떤 멤버를 자식에게 물려주고 싶지 않을 때 접근 제어자를 사용한다! 


```java
class A {
    A() {
    }

    private int x = 3;
    private void prtX() {
        System.out.println();
    }
}

class B extends A {

    void test() {
//        this.prtX(); //
    }
}

class Scratch {
    public static void main(String[] args) {
//        A obj = new A();

        B obj = new B();

//        System.out.println(obj.x); // x has private access in A

//        obj.prtX();  // cannot find symbol
        /*
        symbol: method prtX()
        location: variable obj of type B
         */

    }
}
```


```java
class A {
    private int x = 3;

    public void prtX() {
        System.out.println(this.x);
    }
}

class B extends A {

}

class Scratch {
    public static void main(String[] args) {
        B obj = new B();
        obj.prtX();


    }
}
```


```java
class Car {
    private int velocity;

    void incVelocity() {
        velocity++;
    }
    void decVelocity() {
        velocity--;
    }

    void prtVelocity() {
        System.out.println(velocity);
    }
}

class Scratch {
    public static void main(String[] args) {
        Car c1 = new Car();

//        c1.velocity = 1000;  // cannot access velocity

//        variable velocity only can be change with incVelocity or decVelocity
        c1.incVelocity(); // 1
        c1.incVelocity(); // 2
        c1.incVelocity(); // 3
        c1.incVelocity(); // 4

        c1.prtVelocity(); // sout(velocity) -> 4

        c1.decVelocity(); // 3
        c1.decVelocity(); // 2
        c1.decVelocity(); // 1
        c1.decVelocity(); // 0

        c1.prtVelocity(); // sout(velocity) -> 0

    }
}
```


```java
class A {
    private A() {

    }
}

class Scratch {
    public static void main(String[] args) {
//        A obj = new A();  // private으로 외부에서 접근하지 못아게 하였다. (A() has private access in A)
        

    }
}
```


Singleton Pattern


생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 호출한다.


```java
class A {
    static A myObj;

    private A() {
        System.out.println("A constructor method");
    }
    static A getObject() {
        if (myObj == null) {
            return myObj = new A();
        }
        return myObj;
    }
}

class Scratch {
    public static void main(String[] args) {
        A obj1 = A.getObject();
        A obj2 = A.getObject();

        // obj1, ojb2 pointing same Object
        System.out.println(System.identityHashCode(obj1));
        System.out.println(System.identityHashCode(obj2));
    }
}

```


---


1월 17일


Pacakge == Directory

- l_1 - A
	- l_2 - B
		- l_3 - C

```java
package l_1;  // 현재 클래스가 어느 패키지에 위치하는지 명시 해놓아야 한다.

public class A {
    public static void main(String[] args) {
        // 클래스 이름 두 가지
        // Full name, short name
        l_1.l_2.l_3.C obj = new l_1.l_2.l_3.C();  // <-- full name으로 호출 되었다.
    }
}
```


```java
package l_1;  // 현재 클래스가 어느 패키지에 위치하는지 명시 해놓아야 한다.
import l_1.l_2.l_3.*; // l_1.l_2.l_3 패키지 안 모든 클래스, 인터페이스를 import 한다.

public class A {
    public static void main(String[] args) {
        // 클래스 이름 두 가지
        // Full name, short name
        l_1.l_2.l_3.C obj = new l_1.l_2.l_3.C();  // <-- full name으로 호출 되었다.

        C obj2 = new C();  // import 된 클래스들 중 C를 불러왔음.
    }
}
```


```java
package l_1;  // 현재 클래스가 어느 패키지에 위치하는지 명시 해놓아야 한다.
import l_1.l_2.l_3.*; // l_1.l_2.l_3 패키지 안 모든 클래스, 인터페이스를 import 한다.

import java.util.Scanner;

public class A {
    public static void main(String[] args) {
        // 클래스 이름 두 가지
        // Full name, short name

        // fullname의 예시
        l_1.A a1 = new l_1.A();
        l_1.l_2.B b1  = new l_1.l_2.B();
        l_1.l_2.l_3.C c1 = new l_1.l_2.l_3.C();
        java.util.Scanner sc2 = new java.util.Scanner(System.in); // <-- full name으로 호출 되었다.

        // shortname의 예시
        C obj2 = new C();  // import 된 클래스들 중 C를 불러왔음.
        Scanner sc = new Scanner(System.in);    // java.util이라는 패키지에서 Scanner을 불러왔으므로 short name으로 호출할 수 있다.

        // fullname으로 호출하였는지 shortname으로 호출했는지의 차이이다.
    }
}
```


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b6e70ab7-37c1-46dd-a041-ca12225e19f4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130642Z&X-Amz-Expires=3600&X-Amz-Signature=965360cdcde696c563a0c70f951c5ac0a46c0706e8fb993ee82aa949d5d7ca2d&X-Amz-SignedHeaders=host&x-id=GetObject)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf7e3a0d-ecc6-4a39-810f-8e1b7007ed06/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130642Z&X-Amz-Expires=3600&X-Amz-Signature=f7f4bedde985e3b1bb5ce3174e123896ae978a930bcd4b88eeaba08db9c2d62f&X-Amz-SignedHeaders=host&x-id=GetObject)


## 다형성


## 추상화

