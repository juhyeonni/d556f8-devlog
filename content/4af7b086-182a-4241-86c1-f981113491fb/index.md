---
title: '고차함수'
date: '2023-04-10 07:24:00'
author: 'Juhyeon Lee'
tags: jykim
categories: 'Javascript Learning'
---

# 함수


## 고차함수 (high order function)

- returns
	- `function`
- 정의

	```javascript
	const funcName = () ⇒ {
		console.log('외부 함수');
		return () => {
			console.log('내부 함수');
	x	}
	}
	```

- 사용

	```javascript
	const innerFunc = func();
	
	innerFunc();
	```

