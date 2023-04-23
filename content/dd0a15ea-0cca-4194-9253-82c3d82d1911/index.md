---
title: 'Access Modifier'
date: '2023-04-22 08:23:00'
author: 'Juhyeon Lee'
tags: public private protected default ycjung access modifier
categories: 'Java Learning'
---

# 접근 제어자 종류


접근 지정자에는 4가지가 있다.

- public: 모든 접근을 허용합니다. 어떠한 클래스가 접근을 하든 모두 허용됩니다.
- protected: 상속받은 클래스 또는 같은 패키지에서만 접근이 가능합니다.
- default: 기본 제헌자로써 아무것도 붙지 않고, 자신 클래스 내부와 같은 패키지에서만 접근이 가능하다.
- private: 외부에서 접근이 불가능하다. 즉 같은 클래스 내에서만 접근이 가능하다.

## 접근 제한의 정도


| 한정자       | 클래스 내부 | 동일 패키지 | 하위 클래스(상속) | 그 외의 영역 |
| --------- | ------ | ------ | ---------- | ------- |
| public    | O      | O      | O          | O       |
| protected | O      | O      | O          | X       |
| default   | O      | O      | X          | X       |
| private   | O      | X      | X          | X       |


## private


private 지시자를 사용하여 그 멤버에 접근하는 예제


```text
class Simple {
    public static void main(String[] args) {
        A obj = new A();

		// System.out.println(obj.data);  // private 변수인 data 호출 <-- 실패! |
        /** err!: data has private access in A */

		// obj.msg();  // private 메소드인 msg() 호출 <-- 실패!
        /** err!: msg() has private access in A */
    }
}

```


> 🙋‍♂️해설: private 지시자를 사용하면 해당 멤버는 외부에서 접근이 불가능하기 때문이다.  
> 오로지 해당 클래스 내에서만 접근이 가능하다.  
> 그래서 에러가 발생하였다.


## default


default 지시자를 사용한 예제
기본적으로 default은 아무것도 적지 않아야 한다.


```text
class A {
    int data = 40;

    void msg() {
        System.out.println("Hello Java");
    }
}

class Simple {
    public static void main(String[] args) {
        A obj = new A();

        System.out.println(obj.data);

        obj.msg();
    }
    /** 결과:
     * 40
     * Hello java
     * */
}

```


다른 패키지에서의 접근의 예제


```text
// A.java
package scratch;  // ./scratch라는 디렉토리 안에 위치하고 있다.

public class A {
    void msg() {
        System.out.println("Hello its A");
    }
}

```


```text
// B.java
import scratch.A;  // ./scratch/ 디렉토리 안에 있는 class A를 가져왔다.

public class B {
    public static void main(String[] args) {
        A obj = new A();

        obj.msg();  // default인 method인 msg()를 호출하였다.
        /** err!: java: msg() is not public in scratch.A; cannot be accessed from outside package */
    }
}

```


## protected


```java
// A.java
package group1.group_1;
import group2.group2_1.*;

public class A extends B {
	void prt() {
		// System.out.println(x);  // <-- cant access! x must be protected modifier
	}
}
```


```java
// B.java
package group2.group2_1;

public class B {
	int x = 3;
}
```


```java
// overriding 의 사용 이유?
// 1) 부모로부터 물려 받은 메서드에 대한 재정의
//  a) 완전 재정의
//  b) 추가 정의
// 2) 동적 바인딩을 적용하기 위해
//
// 3) 접근 제어자
// 4) 예외 처리

class B {
    public void prt() {
        System.out.println("B");
    }
    /** err!: prt() in C cannot override prt() in B
     attempting to assign weaker access privileges; was public */
}

class C extends B {
    void prt() {
        System.out.println("C");
    }

}

class D extends C {
    void prt() {
        super.prt();
        System.out.println("D");
    }

}

class Scratch {
    public static void main(String[] args) {
        D obj1 = new D();
        obj1.prt();
        
    }
}
```


```java
class B {
    void prt() {
        System.out.println("B");
    }
}

class C extends B {
    protected void prt() {
        System.out.println("C");
    }

}

class D extends C {
    protected void prt() {
        System.out.println("D");
    }
		
/* Object 클래스에서 오버라이딩 받은 메소드 public으로 선언되어 있으므로, 
가져올 때도 public을 사용해야한다.*/
    @Override　
    public String toString() {. 
        return super.toString();
    }
}

class Scratch {
    public static void main(String[] args) {
        D obj1 = new D();
        obj1.prt();
        
    }
}
```


```java
package test;

//오버라이딩 사용
abstract class B{
	abstract void prt()	;
}

class C extends B{
	void prt() {
		
	}
}

public class TEST_3 {

	public static void main(String[] args) {

	}
}
```


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68b6fed5-f8bc-4cdd-9802-372219cd76d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130700Z&X-Amz-Expires=3600&X-Amz-Signature=6a16b61b8f06504291d4b8a4ee377058ae76e81d2743605a2038a1590bfac74a&X-Amz-SignedHeaders=host&x-id=GetObject)

