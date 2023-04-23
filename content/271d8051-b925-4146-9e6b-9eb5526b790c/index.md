---
title: 'Access Modifier'
date: '2023-03-16 02:16:00'
author: 'Juhyeon Lee'
tags: access modifier scpark
categories: 'Java Learning'
---

자바에서 접근 제어자(**Access Modifier**)란 클래스, 메서드, 변수 등의 멤버에 대한 외부에서의 <u>**접근 가능 여부를 결정하는 키워드**</u>다.


자바에서는 **4개의 제어자**가 있다.

1. `public`
	- 해당 멤버는 어디서든 접근 가능합니다.
	- 다른 패키지에서도 접근이 가능합니다.
2. `protected`
	- 해당 멤버는 동일한 패키지 내에서는 어디서든 접근 가능합니다.
	- 다른 패키지에서는 해당 멤버를 상속받은 자식 클래스에서만 접근이 가능합니다.
	- 모든 클래스가 상속 관계를 갖지 않는다는 점에서, protected 제어자를 전혀 사용하지 않아도 무방합니다. 다만 상속을 고려한 클래스 디자인을 할 때, 이를 이해하고 사용하면 코드의 가독성과 유지보수성이 향상될 수 있습니다. 따라서 protected 접근 제어자는 상황에 따라서 적절하게 사용되어야 합니다.
3. `default` (아무 제어자도 붙이지 않은 경우)
	- 해당 멤버는 동일한 패키지 내에서만 접근 가능합니다.
	- 다른 패키지에서는 접근이 불가능합니다.
4. `private`
	- 해당 멤버는 선언된 클래스 내에서만 접근 가능합니다.
	- 다른 클래스에서는 접근이 불가능합니다.
1. **실습코드**

	---


	```javascript
	class Person {
	    private String name;
	    private int age;
	    private String dept;
	
	    public String getDept() {
	        return dept;
	    }
	
	    public void setDept(String dept) {
	        this.dept = dept;
	    }
	
	    public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public int getAge() {
	        return age;
	    }
	
	    public void setAge(int age) {
	        this.age = age;
	    }
	
	}
	class Test {
	    public static void main(String[] args) {
	        Person obj1 = new Person();
	        obj1.setAge(21);
	        obj1.setName("juhyeon");
	        obj1.setDept("wdj");
	
	//        System.out.println(obj1.age);   // not accessible
	//        System.out.println(obj1.name);   // not accessible
	//        System.out.println(obj1.dept);   // not accessible
	        System.out.println(obj1.getName());
	        System.out.println(obj1.getAge());
	        System.out.println(obj1.getDept());
	    }
	}
	```


	## 접근 제어자를 설정하는 이유

	1. 정보 은닉

		객체 내부의 데이터를 보호할 수 있다.

	2. 코드 유연성

		객체 간의 상호작용을 제한할 수 있다.


		객체 간의 의존성을 낮추고 유연성을 높일 수 있다.

	3. 코드 유지보수성

		객체 간의 상호작용을 명확하게 구분할 수 있다.


		객체의 역할과 책임을 더 잘 파악할 수 있다.

	4. 코드의 재사용성

		재사용 가능한 코드를 작성할 수 있다.


		객체 간의 상호작용이 잘 정의되면, 다른 프로그램에서도 같은 객체를 재사용할 수 있다.


	### private

	1. 잘못된 값을 설정하는 것을 막아줄 필요가 있다.
	2. 읽기전용 멤버 변수로 만들 수 있다.
	3. 클래스 소스코드를 업그레이드할 경우, 그 클래스를 사용하는 다른 코드에 미치는 영향을 최소화할 수 있다.

	**`protected`** **시험에 나올 수도?**

