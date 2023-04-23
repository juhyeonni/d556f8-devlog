---
title: '문자열을 간단하게 정수로 변환하기'
date: '2023-04-22 12:16:00'
author: 'Juhyeon Lee'
tags: 
categories: 'Javascript Syntax'
---

 이렇게 사용할 수 있다.

1. **예시 코드 1**

	---


	```typescript
	const a = '1'; // a type is 'string'
	
	const b = +a;  // b type is 'number'
	```


	`+` 연산자를 사용하면 아주 간단하게 처리가 가능하다.

2. **예시 코드 2**

	---


	```typescript
	const movie = {
		id: 1
	};
	const id = '1'; // form 또는 raw string
	
	if (typeof movie.id === +id) {
		console.log('movie.id는 id와 같다');
	}
	```

	- [movie.id](http://movie.id) is number
	- id is string (Raw input)
