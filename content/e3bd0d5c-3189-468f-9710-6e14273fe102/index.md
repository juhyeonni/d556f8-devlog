---
title: '자바스크립트 기본문법'
date: '2023-03-27 07:56:00'
author: 'Juhyeon Lee'
tags: jykim
categories: 'Javascript Learning'
---

# 목차


# 자바스크립트 기본문법


이 문서는 자바스크립트의 기본문법에 대해서 설명합니다.


다른 프로그래밍 언어와 문법이 다를 수 있습니다.


## 코드 작성 규칙


### 세미콜론


_semi-quote_


세미콜론은 한 문장의 끝을 나타낸다. 

- 붙여도 되고 안 붙여도 됨
- 예기치 않은 결과가 발생할 수 있기 때문에, 세미콜론을 붙이는 것이 좋다.

### 주석


_comment_


코드에 대한 설명을 작성하거나, 코드 실행을 무효화하기 위해서 사용된다. 


주석을 사용하면 코드를 작성한 사람 외에도 다른 사람들이 코드를 이해하기 쉬워지며, 코드 유지보수가 용이해진다.

- 한줄 주석
	- `Ctrl` + `/`
	- `//`
- 여러줄 주석
	- `Alt` + `Shift` + `A`
	- `/*` ~~~ `*/`

### 들여쓰기


_indent_


코드의 가독성을 높이기 위해 사용되었다.


코드 블럭이나 함수, 조건문 등이 시작될 때 들여쓰기를 해주면 코드의 구조가 명확해져서 이해하기 쉬워진다.


## 자바스크립트 자료형


### 기본 자료형 


**Primitive Types**

- `undefined` : 값이 할당되지 않은 상태
- `null` : 값이 없음을 나타냄
- `boolean` : `true` 또는 `false`
- `number` : 숫자
- `string` : 문자열

### 참조 자료형


**Reference Types** or **Objects**

- `object` : 여러 개의 값을 하나의 변수에 저장할 수 있는 참조형 자료형

### 특수 자료형


**Specialized Data Types**

- `symbol` : 인스턴스가 고유하고 수정 불가능한 데이터형
- `BigInt` : 큰 정수 값을 표현할 수 있는 데이터형

## **문자열**

- 문자열 출력 : 문자열을 출력하려면 작은 따옴표('') 또는 큰 따옴표("")를 사용합니다.

```javascript
console.log('Hello, world!'); // 작은 따옴표 사용
console.log("Hello, world!"); // 큰 따옴표 사용
```

- 문자열 연산자 사용 : 문자열 연산자로 **`+`**를 사용하면 두 문자열을 이어붙일 수 있습니다.

```javascript
const str1 = 'Hello';
const str2 = 'World';
const str3 = str1 + ' ' + str2;
console.log(str3); // 'Hello World'
```

- 문자열 값 타입 확인 : **`typeof`** 연산자로 변수에 할당된 값의 데이터 타입을 확인할 수 있습니다. 문자열의 데이터 타입은 **`string`**입니다.

```javascript
const str = 'Hello, world!';
console.log(typeof str); // 'string'
```

- 문자열 안에서 따옴표 : 문자열 안에 따옴표를 포함시키려면 반대 종류의 따옴표를 사용하거나, 역슬래시()를 사용하여 따옴표를 이스케이프합니다.

```javascript
const str1 = "He said, 'I'm a programmer.'";
const str2 = 'She said, "I love JavaScript."';
console.log(str1); // "He said, 'I'm a programmer.'"
console.log(str2); // 'She said, "I love JavaScript."'
```

- 문자열 이스케이프 문자 : 문자열 안에서 특수한 문자를 출력하려면 이스케이프 문자를 사용합니다. 이스케이프 문자는 **`\`**로 시작합니다.
	- **`\n`** : 줄바꿈 문자
	- **`\'`** : 작은 따옴표
	- **`\"`** : 큰 따옴표
	- **`\\`** : 역슬래시

```javascript
console.log('Hello,\nworld!'); // 줄바꿈 문자 사용
console.log('He said, \'I\'m a programmer.\''); // 작은 따옴표 사용
console.log("She said, \"I love JavaScript.\""); // 큰 따옴표 사용
console.log('C:\\Users\\'); // 역슬래시 사
```

- 템플릿 리터럴 사용 : 템플릿 리터럴은 역따옴표(``)를 사용하여 문자열 안에 변수나 표현식을 삽입할 수 있는 문자열입니다. **`${}`** 안에 변수나 표현식을 넣어 사용합니다.

```javascript
const name = 'John';
const age = 30;
const str = `My name is ${name}. I'm ${age} years old.`;
console.log(str); // "My name is John. I'm 30 years old."
```


## 숫자


### **정수 출력**


```javascript
let num = 10;
console.log(num); // 10
```


### **실수 출력**


```javascript
let floatNum = 3.14;
console.log(floatNum); // 3.14
```


### **진법 표기 숫자 출력**


```javascript
let binaryNum = 0b1001; // 2진수 9
console.log(binaryNum); // 9

let octalNum = 0o15; // 8진수 13
console.log(octalNum); // 13

let hexNum = 0xA; // 16진수 10
console.log(hexNum); // 10
```


### **문자열 → 숫자 변경**


```javascript
let str = "123";
let num = parseInt(str);
console.log(num); // 123

let floatStr = "3.14";
let floatNum = parseFloat(floatStr);
console.log(floatNum); // 3.14
```


### **NaN**


```javascript
let notANumber = parseInt("hello");
console.log(notANumber); // NaN

console.log(typeof notANumber); // "number"
console.log(Number.isNaN(notANumber)); // true
```


### **산술 연산자**


```javascript
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2
console.log(num1 % num2); // 0
console.log(num1 ** num2); // 100000
```


### **Infinity**


```javascript
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
```


### 오해하기 쉬운 연산자

- +
	- 산술 더하기: 피연사자 숫자인 경우
	- 문자열 연결하기: 피연산자가 하나라도 문자열이면 문자열로 변경처리
	- 부호: 단항(피연산자가 하나) 연산 +1, +200
- -
	- 산술 빼기
		- 문자열 - 숫자, 숫자 - 숫자,
		- 부호: 단항
- *, /

### 연산자 우선순위 (Operator Priority)

- (): 괄호 안에 있는 내용이 가장 먼저 실행된다.
- , /: 곱하기와 나누기는 더하기와 빼기보다 높은 우선순위를 가진다.
- +, -: 더하기와 빼기는 같은 우선순위를 가지며, 왼쪽에서 오른쪽으로 계산된다.
- 대입 연산자(=): 오른쪽에 있는 연산자를 계산한 결과를 왼쪽의 변수에 할당한다.

### 불값 (Boolean)

- true / false: 불 값은 기본적으로 true 또는 false 둘 중 하나의 값을 가진다.
- 숫자로 취급하면: 불 값은 true면 1, false면 0으로 취급된다.
- 비교 연산의 결과/논리 연산의 결과: 비교 연산(>, >=, <, <=, ===, !== 등)이나 논리 연산(&&, ||, ! 등)의 결과는 불 값(true 또는 false)이다.
- false로 처리되는 경우
	- 0: 숫자 0은 불 값으로 false로 처리된다.
	- undefined: 변수에 값을 할당하지 않은 경우 undefined가 반환되며, 이는 불 값으로 false로 처리된다.
	- null: 값이 없음을 나타내는 null은 불 값으로 false로 처리된다.
	- NaN: 숫자가 아님을 나타내는 NaN(Not-a-Number)은 불 값으로 false로 처리된다.
	- ‘’: 빈 문자열('')은 불 값으로 false로 처리된다.
- true로 처리되는 경우
	- 상기 false의 경우 제외한 경우: false로 처리되는 경우를 제외하면, 모든 값은 불 값으로 true로 처리된다.

```javascript
var a = 10;
var b = null;
var c = '';
var d = 'hello';

console.log(Boolean(a)); // true
console.log(Boolean(b)); // false
console.log(Boolean(c)); // false
console.log(Boolean(d)); // true
```


### 타입 비교

- NaN과 NaN: 이것만 false
- null 과 null: true
- undefined 과 undefined: true
- 문자열의 비교
	- 문자에 대한 값: ASCII값(unicode)
	- `‘a’.charCodeAt()`
- ==, ===
	- 동일한 점
		- 값을 비교
	- 다른점
		- ===은 데이터 타입도 비교
- ≠, ≠=

### 비교 연산자

- >, <, ≥, ≤, ==, ===, ≠, ≠=

### 논리 연산자

- &&: AND
	- ~하고
	- a && b
		- a의 값과 b의 값이 true인 경우만 true 결과
- ||: OR
	- ~이거나
	- a || b
		- a의 값과 b의 값중 어느하나라도 true인 경우 true 결과
		- 두 변수의 값이 모두 false인 경우 false 결과
		- 
- !: NOT
	- ~이지 않다.
	- 변수의 불값 반전

## 단항 연산자는 오른쪽에서 왼쪽으로 실행,


### 빈값 사용하기

- null
- undefined

**공통점**

- falsy value 취급
- undefined == false
- null == false

**차이점**

- 타입
	- null: object
	- undefined: undefined
- JS: undefined를 기본값으로 취급, 빈값표현은 undefined권장

## 변수

- 변하는 수, 프로그램 실행시 임시로 저장하는 데이터 장소
- 관례: 변수는 선언 및 초기화 후 사용하는 것 권장
- 선언만 했다면, 변수의 값은 undefined이다.

### 선언

- const
	- 변하지 않는 수
	- const로 선언문을 사용할 경우 초기화 하지 않으면 에러
	- const로 선언한 상수에 값 쓰기 금지
- let
	- 변할 수 있는 수
	- 선언문
- var

### 변수명 / 상수명

- $, _, 문자(유니코드, 이모지, 등등)
- 숫자로는 시작할 수 없다.

### 중첩 if문

- 내포된 if문
- if문내에 if문을 작성하는 경우 바람직하지 않다.
	- 왜? `가독성` 들여쓰기도 깊어지고 무엇을 뜻하는 구문인지 이해하기 어렵기 때문

### switch

- 예시

	---


	```javascript
	switch(수식 or 변수) {
		case 값1:   // 수식의 결과값 == 값1 인 경우
		case 값2:
			...문장
	
		case 값3:
			...문장
		default:
			...문장
	}
	```


### break

- 반복문에서도 사용
	- block: `{ … }` 형태의 코드
- 실행 block 중단하는 문장
- 실행의 범위
	- break문이 속해 있는 block 하나만 중단
	- `for() { for() { break} }`

### continue

- 중단
- `continue`문이 실행되면 조건문 검사를 실행함

## 반복문

- `while`

	```javascript
	while( condition ) {
		...executable syntaxs
	}
	```

- `do while`

	```javascript
	do {
	
	} while( condition ) {
	
	}
	```

- `for`
	- `for in`
	- `for of`

## 객체

- JS 데이터타입의 일종
- 배열, 함수, 그외 정의해나가는 자료(객체)

### 배열

- 나열할 수 있는 데이터를 집합적을 관리할 수 있는 데이터 타입
	- 배열
	- 객체
	- 기본형
	- null
	- undefined
	- Infinity
	- NaN
- 요소: element, 배열에 저장되는 하나의 데이터
- 인덱스(index): 특정한 요소의 저장위치
1. **선언 / 정의**
	- 대괄호 사용 `[ item1, item2, item3, … ]`
	- Array() 사용: Array객체의 생성자
		- `new Array({number})` : 빈 배열에 요소를 number만큼의 길이로 만듬
		- `new Array( item1, item2, item3, …)` : 요소를 지정하여 배열을 만듬
	- 배열 내에 배열요소가 저장되도록 한 것: 다중배열, 이중배열..
		- `[ [1, 2, 3], [4, 5, 6] ]`
2. 사용
	- 배열의 길이: `arrayName.length`
		- 맨 마지막 요소의 인덱스: `arrayName.length - 1`
	- 읽기
		- `arrayName[idx]`
	- 쓰기
		- `arrayName[idx] = someValue`
	- 수정
		- `arrayName[idx] = someValue`
	- 삭제
		- `delete arrayName[idx]`
	- 추가
		- `arrayName[arrayName.length] = newValue`
		- `arrayName.push(newValue)`
	- 맨 앞에 추가
		- `arrayName.unshift(newValue)`
	- 삽입과 삭제
		- `arrayName.splice(startIdx, ?deleteLength, ?addItems)`
		- `arrayName.splice(startIdx)`
			- `startIdx` 부터 배열 끝까지 삭제
		- `arrayName.splice(startIdx, deleteLength)`
			- `startIdx` 부터 지정한 길이 만큼 삭제
	- 검색
		- `arrayName.includes(searchItem)`
			- `return {boolean}`
		- `arrayName.indexOf(searchItem)`
			- `return index값`
			- 맨처음부터 검색하여 검색성공한 최초의 인덱스
		- `arrayName.lastIndexOf(searchItem)`
			- `return index값`
			- 맨마지막부터 검색하여 검색성공한 최초의 인덱스

**변수의 나열과 배열을 이용한 나열** 

	1. 과일을 변수로 나열하고 출력하기

		---


		```javascript
		const apple = '사과';
		const orange = '오렌지';
		const pear = '배';
		
		console.log(apple, orange, pear);
		```

	2. 배열을 사용하여 나열하고 출력하기

		---


		```javascript
		const fruits = ['사과', '오렌지', '배'];
		
		fruits.map((fruit) => {
			console.log(fruit);
		});
		```


## 함수

1. 정의 및 선언
	- **선언문**
		- `function funcName() { … }`
	- **함수 표현식**
		- 이름없는 선언문
			- `const someVariable = function() { … }`
		- 화살표 함수
			- `const someVariable = () ⇒ { … }`
2. 호출
	- 함수명(argument list)
	- 상수명(argument list)
	- 호출하면 반드시 결과를 반환함
3. parameter 및 argument
	- parameter
		- 함수선언시 함수 시그니쳐에 나오는 인수
	- argument
		- 함수 호출시 사용하는 인수
4. return
	- return 데이터(변수, 리터널)
	- return을 명시하지 않은 경우 `return undefined;` 맨 마지막 실행
		- 함수 내부에서 return문을 실행하는 경우 함수 실행 중지(탈출)
		- 함수 호출한 곳으로 실행순서
5. 함수내의 사용 변수 scope
	- 전역변수: 함수내외부에서 사용가능
	- 지역변수: 함수내에서만 사용가능
	- 파라미터: 지역변수 취급
6. 순수 함수
	- 파라미터와 지역변수/상수만으로 구현한 함수

### 함수 선언과 화살표 함수 비교

- `function add1(x, y) { return x + y; }`
- `const add2 = function(x, y) { return x + y; }`
- `const add3 = (x, y) ⇒ { return x + y; };`
- `const add4 = (x, y) ⇒ x + y;`
	- 함수 실행문이 return만 존재하는 경우 중괄호와 return 을 생략가능하다.
- `const add4 = (x, y) ⇒ (x + y);`
- `const not = x ⇒ !x;`
	- 파라미터가 하나인 경우 소괄호 생략가능
- 주의사항: `this` 의 의미
	- 화살표 함수내에선 arguments를 사용 못함

### Object literal


원시 값을 제외한 나머지 값은 모두 객체이다.


객체는 0개 이상의 프로퍼티로 구성된 집합으로 ,프로퍼티는 `key`와 `value`로 구성된다.


> 💡 **객체 지향 프로그래밍** ↔ **객체 기반 프로그래밍**  
> - **객체 지향 프로그래밍 (OOP)**  
>   
> - **JavaScript**  
>   
> JavaScript는 prototype-based OOP(prototype 기반 객체지향언어)라고 부른다.  
>   
>   
>   
> ※ 물론 객체기반언어는 객체지향언어와 달리 암시적 상속이 일어나지 않고, 다형성을 지원하지 않는다. 그래서 자바스크립트를 프로토타입 기반 언어 또는 객체기반 언어라고 한다.  
>   
> **[출처]** [객체지향 vs 객체기반](https://blog.naver.com/newbongman/222329975426) | **작성자** [NewBongMan](https://blog.naver.com/newbongman)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fcd18cd9-424b-4bca-a9ac-44d3464fcf16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130632Z&X-Amz-Expires=3600&X-Amz-Signature=866edfc3932be8e8ebaae32a564221809330c18688b22e654e5fadaba2130dd6&X-Amz-SignedHeaders=host&x-id=GetObject)


property 값이 함수일 경우에는 `method` 라고 부른다.

1. **정의 / 선언 / 초기화**
	- key: value
2. **사용법**
	- `.` 연산자 이용법
		- property에 접근하는 연산자이다.
		- 접근: `obj.key`
		- 쓰기 / 수정: `obj.key = ~~~`
	- 연관배열이용법
		- Associated Array
		- 읽기: `obj['key']`
		- 쓰기 / 수정: `obj['key'] = ~~~`
	- 속성 삭제
		- `delete obj.key;`
		- `delete obj[’key’];`
3. 객체간 비교 / 참조 / 복사
	- 비교
		- {} == {}, {} === {}
	- 참조
		- 객체에 대한 변수는 해당 객체의 참조값을 저장
		- 참조값: 메모리(heap 메모리)에서의 주소값
		- primitive type의 변수: 리터럴 값 저장
			- let a = ‘jit’
			- 메모리(stack 메모리)에 값 저장시키고 변수로 별명처럼 사용
	- 복사
		- 단순 대입으로는 불가
		- const a = {}; const c = a;
			- 단순히 참조값을 복사하는 것이므로, 각 객체의 고유한 값을 가지고 있는 것이 아님
			- 이 개념은 deep copy, shallow copy에 있다.
			- clone() 이용 복사해야 함
