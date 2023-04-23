---
title: 'Temporal Dead Zone'
date: '2023-04-22 12:16:00'
author: 'Juhyeon Lee'
tags: 
categories: 'Javascript Syntax'
---

우선 코드를 먼저 보고 시작합시다.


```javascript
console.log(myName);

var myName;
```


라는 코드를 보면 어떤 결과가 나올 것 같은가?


결과는 `undefined` 가 나왔다.


그럼 이 코드는 어떤 결과가 나올 것 같은가?


```javascript
console.log(myName);
```


결과는 error가 발생하고,
`myName is not defined` 라는 에러메세지를 반환했다.


왜 결과가 다른 건가?


var는 hoisting이라는 것을 하는데,


변수를 먼저 프로그램이 실행되기 전에, 변수를 선언을 먼저한다.


그 다음 초기화하는 문장이 나오고 결과가 나오게 되는 것이다.


첫번째 코드 같은 경우는

1. `var myName` 이 먼저 선언이 됨.
2. `console.log(myName)`을 함, 그러나 초기화 값은 없음.
3. 결과는 `undefined`

두번째 코드의 경우


선언이 되어있는 않은 `myName`을 `console.log()` 한 것이다.

