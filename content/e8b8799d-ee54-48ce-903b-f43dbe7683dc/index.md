---
title: 'Nullish coalescing / Optional chaining'
date: '2023-04-22 12:16:00'
author: 'Juhyeon Lee'
tags: 
categories: 'Javascript Syntax'
---

ES2020에서 추가된 `??` (널 병합) 연산자와 `?.` (옵셔널 체이닝)


**널 병합 연산자**는 주로 || 연산자 대용으로 사용되며, falsy 값(`0`, `‘’`, `false`, `NaN`, `null`, `undefined`) 중 `null`과 `undefined`만 따로 구분합니다.


```javascript
const a = 0;
const b = a || 3;
console.log(b); // 3

const c = 0;
const d = c ?? 3;
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f); // 3

const g = undefined;
const h = g ?? 3;
console.log(h); // 3
```


`null`, `undefined` 만 따로 구분하므로, falsy중에서 의도를 가지고 있는 값을 제외하고 처리를 할 수 있다.


```javascript
let count = 0;
count = count || <div>123</div>
// 일때 0을 예상하지만,
// 실제로는 <div>123</div>이다.
```


**옵셔널 체이닝**은 `null`이나 `undefined`의 속성을 조회하는 경우 에러가 발생하는 것을 막습니다.


```javascript
const a = {}
a.b;

const c = null;
try {
	c.d; // null...
} catch(e) {
	console.error(e); // cannot read properties of null
}
```


```javascript
try {
	c?.d;  // 문제없음
} catch(e) {
	console.error(e);
}
```

