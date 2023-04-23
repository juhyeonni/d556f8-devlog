---
title: 'Exception Handling'
date: '2023-04-22 08:23:00'
author: 'Juhyeon Lee'
tags: ycjung exception error
categories: 'Java Learning'
---

# 예외 처리(Exception Handling)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b50d85cd-8af2-411b-a09e-a96926bbf052/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130703Z&X-Amz-Expires=3600&X-Amz-Signature=2649bf42f59242138e53f39e2875cbb2875d7d83c3fbded85caa4c1c8b6e5d87&X-Amz-SignedHeaders=host&x-id=GetObject)


Happy Scenario에서 벗어나는 경우 (비정상적인 종료 또는 데이터처리에 문제가 생기는 경우),
예외 처리를 해주어야 한다.


기존 구조적언어에서는 flow control를 사용하여 예외를 처리하였다.
예측되는 예외들을 모두 흐름제어문으로 처리하면, Happy Scenraio에서 코드가 훨씬 늘어나게 되었다.
Happy Scenario와 예외처리하는 구문이 서로 섞여 있었다. → 가독성이 구리다.


이를 해결하는 것이 `try`-`catch`


**WHAT**

	- 

**WHY**

	- 

**FEATURE**

	- Happy Scenario의 `try`
	- 예외처리하는 `catch`

Exception, Error


예외 클래스는 크게 두 그룹으로 나뉜다.

- Unchecked
- Checked
	- 반드시 예외처리 구문이 필요하다.

호출한 부분에서 예외 객체를 받으려면 예외를 선언하는 부분에서 throw를 해줘야 한다. (throws)
메서드 옆에 throws를 붙여 사용한다.


## 기존 구조적 언어에서의 예외처리

1. **코드 1**

	---


	```java
	import java.util.Scanner;
	class Scratch {
	    public static void main(String[] args) {
	        int base = 0;
	        int height = 0;
	        float area = 0;
	
	        Scanner sc = new Scanner(System.in);
	
	        while (true) {
	            // input base
	            base = sc.nextInt();
	            **if** (base < 0) {
	                System.out.println("0 이상 값을 입력하세요.");
	            } else break;
	        }
	
	        // input height
	        height = sc.nextInt();
	
	        // print area
	        area = base * height / 2;
	        System.out.println(area);
	    }
	}
	```


## JAVA프로그래밍에서 예외처리

1. **코드 1**

	---


	```java
	import java.util.Scanner;
	class Scratch {
	    public static void main(String[] args) {
	        int base = 0;
	        int height = 0;
	        float area = 0;
	
	        Scanner sc = new Scanner(System.in);
	
	        try {
	            // input base
	            base = sc.nextInt();
	            if (base <= 0) throw new Exception("밑변 0 이하");
	
	            // input height
	            height = sc.nextInt();
	            if (height <= 0) throw new Exception("높이 0 이하");
	        } catch(Exception e) {
	            System.out.println("예외 발생, msg: " + e.getMessage());
	        }
	
	        // print area
	        area = base * height / 2;
	        System.out.println(area);
	    }
	}
	```

2. **코드 2**

	---


	```java
	import java.util.Scanner;
	class Scratch {
	    public static int getPositiveNum() throws Exception {
	        Scanner sc = new Scanner(System.in);
	        int base = sc.nextInt();
	
	        if (base <= 0) {
	            throw new Exception("0 이하의 값");
	        }
	
	        return base;
	
	    }
	    public static void main(String[] args) {
	        int base = 0;
	        int height = 0;
	        float area = 0;
	
	        Scanner sc = new Scanner(System.in);
	
	        try {
	            // input base
	            base = Scratch.getPositiveNum();
	
	            // input height
	            height = Scratch.getPositiveNum();
	        } catch(Exception e) {
	            System.out.println("예외 발생, msg: " + e.getMessage());
	        }
	
	        // print area
	        area = base * height / 2;
	        System.out.println(area);
	    }
	}
	```

