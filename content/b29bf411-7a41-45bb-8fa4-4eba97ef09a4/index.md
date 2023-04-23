---
title: 'Hoisting'
date: '2023-04-22 12:16:00'
author: 'Juhyeon Lee'
tags: 
categories: 'Javascript Syntax'
---

# 호이스팅이란?


코드가 실행되기 전, 컴파일 단계에서 변수 및 함수 선언을 각 범위의 맨 위로 이동하는 동작을 의미한다.


이게 무슨 말이냐면,
변수와 함수가 동일한 범위 내에 선언되어 있다면 선언되기 전에 사용할 수 있다는 것이다.

1. **함수 선언식 1**

	---


	```javascript
	hello(); // Output: "Hello, World!"
	function hello() {
	  console.log("Hello, World!");
	}
	```

	- 위 코드에서는 함수가 선언되기 전, 코드가 실행되었다.
	- 호이스팅의 발생이 이 코드가 실행가능하게 하는 것이다.
2. **함수 표현식 1**

	---


	```javascript
	var obj = {
	  foo: function() {
	    console.log("Hello, World!");
	  }
	};
	```

	- 이 경우에도 함수가 호이스팅되어 객체가 선언되기 이전에 함수를 호출할 수 있다.
3. **함수 표현식 2**

	---


	```javascript
	console.log(myFunction); // Output: undefined
	
	var myFunction = function() {
	  console.log("Hello, World!");
	};
	```

	- `var myFunction`은 호이스팅되어 코드 상단으로 이동하지만 할당단 함수 `function()`는 호이스팅되지 않으므로 `myFunction`을 호출하면 `undefined`가 출력됩니다.
