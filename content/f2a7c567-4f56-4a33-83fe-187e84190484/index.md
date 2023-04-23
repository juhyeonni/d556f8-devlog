---
title: '배열 메소드'
date: '2023-04-03 22:48:00'
author: 'Juhyeon Lee'
tags: 과제
categories: 'Javascript Learning'
---

# 배열명.pop()

- 배열의 마지막 요소를 제거하고 그 값을 반환합니다. (배열에서 가장 마지막 요소를 제거할 때 사용합니다.)
- parameter: none
- return: 제거된 마지막 요소의 값
- 예시

	```javascript
	let fruits = ['apple', 'banana', 'orange'];
	let lastFruit = fruits.pop();
	console.log(lastFruit);  // "orange"
	console.log(fruits);     // ["apple", "banana"]
	```


# 배열명.push(element1[, ...[, elementN]])

- 배열의 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다. (배열의 끝에 새로운 요소를 추가할 때 사용합니다.)
- parameter: 추가할 하나 이상의 요소 (여러개의 요소)
- return: 새로운 길이 (배열.length)
- 예시

	```javascript
	let numbers = [1, 2, 3];
	numbers.push(4);
	console.log(numbers);  // [1, 2, 3, 4]
	```


# 배열명.shift()

- 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. (배열에서 가장 첫 번째 요소를 제거할 때 사용합니다.)
- parameter: 없음
- return: 제거된 첫 번째 요소의 값 (shift 메서드 실행 전 배열[0])
- 예시

	```javascript
	let fruits = ['banana', 'apple', 'orange'];
	let firstFruit = fruits.shift();
	console.log(firstFruit);  // "banana"
	console.log(fruits);      // ["apple", "orange"]
	```


# 배열명.unshift([...elementN])

- 배열의 시작 부분에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다. (배열의 시작 부분에 새로운 요소를 추가할 때 사용합니다.)
- parameter: 추가할 하나 이상의 요소
- return: 새로운 길이 (배열.length)
- 예시

	```javascript
	let fruits = ['banana', 'apple', 'orange'];
	fruits.unshift('grape');
	console.log(fruits);  // ["grape", "banana", "apple", "orange"]
	```


# 배열명.splice(start[, deleteCount[, item1[, item2[, ...]]]])

- 배열에서 요소를 추가하거나 제거하고, 제거된 요소를 반환합니다. (배열에서 요소를 추가하거나 제거할 때 사용합니다.)
- parameters
	- start: 추가 또는 제거를 시작할 인덱스 위치 (index: number)
	- deleteCount: 제거할 요소의 수. 생략하면 start부터 끝까지 모든 요소가 제거됩니다.
	- item1, item2, ...: 추가할 요소들
- return 제거된 요소들의 배열
- 예시

	```javascript
	let fruits = ['banana', 'apple', 'orange'];
	fruits.splice(1, 1, 'grape', 'pear');
	console.log(fruits);  // ["banana", "grape", "pear", "orange"]
	
	fruits.splice(0, 1);
	console.log(fruits);  // ["grape", "pear", "orange"]
	
	fruits.splice(1, 2);
	console.log(fruits);  // ["grape"]
	```


# 배열명.slice([begin[, end]])

- 배열의 일부분을 추출하여 새로운 배열을 반환합니다. (배열의 일부분을 추출할 때 사용합니다.)
- parameters
	- begin: 추출을 시작할 인덱스 위치. 생략하면 0번 인덱스부터 추출합니다.
	- end: 추출을 종료할 인덱스 위치. 생략하면 배열의 끝까지 추출합니다.
- return 추출된 일부분으로 이루어진 새로운 배열
- 예시

	```javascript
	let fruits = ['banana', 'apple', 'orange', 'grape', 'pear'];
	let citrus = fruits.slice(2, 4);
	console.log(citrus);  // ["orange", "grape"]
	
	let favorites = fruits.slice(0, 2);
	console.log(favorites);  // ["banana", "apple"]
	
	let beginning = fruits.slice(0, 3);
	console.log(beginning);  // ["banana", "apple", "orange"]
	
	let end = fruits.slice(-2);
	console.log(end);  // ["grape", "pear"]
	```


# 배열명.concat([value1[, value2[, ...[, valueN]]]])

- 배열에 하나 이상의 값을 추가하여 새로운 배열을 반환합니다. (여러 배열을 하나로 합칠 때 사용합니다.)
- parameter: value1, value2, ..., valueN: 추가할 값들
- return 합쳐진 새로운 배열
- 예시

	```javascript
	let fruits1 = ['apple', 'banana'];
	let fruits2 = ['orange', 'pear'];
	let allFruits = fruits1.concat(fruits2, 'grape');
	
	console.log(allFruits);
	// ["apple", "banana", "orange", "pear", "grape"]
	```


## 배열명.every(callbackFn, thisArg)

- 배열의 모든 요소가 주어진 함수의 테스트를 통과하는지 확인합니다.
- parameters
	- callbackFn: 각 요소를 검사할 함수
	- thisArg: callbackFn 내부에서 this로 사용될 객체
- return 모든 요소가 함수를 통과하면 true 그렇지 않는다면 false
- 예시

	```javascript
	const array = [2, 4, 6, 8];
	
	const result = array.every(element => element % 2 === 0);
	
	console.log(result); // true
	```


## 배열명.some(callbackFn, thisArg)

- 배열의 일부 요소가 주어진 함수의 테스트를 통과하는지 확인합니다.
- parameters
	- callback: 각 요소를 검사할 함수
	- thisArg: callback 내부에서 this로 사용될 객체
- return 1개 이상의 요소가 함수를 통과하면 true 그렇지 않는다면 false
- 예시

	```javascript
	const array = [2, 3, 6, 8];  // 3 is odd
	
	const result = array.some(element => element % 2 === 1);
	
	console.log(result); // true
	```


## 배열명.forEach(callbackFn(currentvalue[, index[, array]])[, thisArg)

- 배열의 각 요소마다 주어진 함수를 실행합니다.
- parameters
	- callback: 각 요소에 대해 실행할 함수
		- currentValue: 현재 처리 중인 요소의 값
		- index: 현재 처리 중인 요소의 인덱스
		- array: forEach()가 적용되는 배열 객체
	- thisArg: callback 내부에서 this로 사용될 객체
- return 없음
- 예시

	```javascript
	const array = ['apple', 'banana', 'pear'];
	
	array.forEach(element => {
	  console.log(element);
	});
	```


## 배열명.map(callbackFn(currentValue[, index[, array]])[, thisArg])

- 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
forEach와 비슷하지만 **새로운 배열을 반환한다**는 것에 다르다.
- parameters
	- callback: 각 요소에 대해 실행할 함수
		- currentValue: 현재 처리 중인 요소의 값
		- index: 현재 처리 중인 요소의 인덱스
		- array: map()이 적용되는 배열 객체
	- thisArg: callback 내부에서 this로 사용될 객체
- return 함수의 호출한 결과를 모은 새로운 배열
- 예시

	```javascript
	const array = [1, 2, 3];
	
	const newArray = array.map(element => element * 2);
	
	console.log(newArray); // [2, 4, 6]
	```


## 배열명.filter(callbackFn(currentValue[, index[, array]])[, thisArg])

- 주어진 함수의 테스트를 통과하는 요소로 이루어진 새로운 배열을 반환합니다.
map과 비슷하지만 **주어진 condition에 따라 필터된 요소**의 배열을 반환한다는 것에 다르다.
- parameters
	- callback: 각 요소에 대해 실행할 함수
		- element: 현재 처리 중인 요소의 값
		- index: 현재 처리 중인 요소의 인덱스
		- array: filter()가 적용되는 배열 객체
	- thisArg: callback 내부에서 this로 사용될 객체
- return 필터링된 요소의 배열
- 예시

	```javascript
	const array = [1, 2, 3, 4, 5];
	
	const newArray = array.filter(element => element > 2);
	
	console.log(newArray); // [3, 4, 5]
	```


## 배열명.fill(value, start, end)

- 배열의 시작 인덱스부터 끝 인덱스까지 정적인 값으로 채웁니다.
- parameters
	- value: 배열을 채울 값
	- start: 시작 인덱스
	- end: 끝 인덱스
- return 없음
- 예시

	```javascript
	const array = [1, 2, 3];
	
	const newArray = array.fill(0);
	
	console.log(newArray); // [0, 0, 0]
	```


## 배열명.includes(valueToFind, fromIndex)

- 배열이 특정 요소를 포함하고 있는지 확인합니다.
- parameters
	- valueToFind: 찾을 요소의 값
	- fromIndex: 검색을 시작할 인덱스 위치
- return 포함하고 있으면 true 아니면 false
- 예시

	```javascript
	const array = [1, 2, 3];
	
	const hasTwo = array.includes(2);
	
	console.log(hasTwo); // true
	```


## 배열명**.reduce(callback, initialValue)**

- 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환합니다.
- parameters
	- callback: 배열의 각 요소에 대해 실행할 함수
		- accumulator: 콜백의 반환값을 누적하는 데 사용할 변수
		- currentValue: 현재 처리 중인 요소의 값
		- currentIndex: 현재 처리 중인 요소의 인덱스
		- array: reduce()가 적용되는 배열 객체
	- initialValue: 누적값의 초기값
- return 없음
- 예시

	```javascript
	const numbers = [1, 2, 3, 4, 5];
	
	const sum = numbers.reduce((accumulator, currentValue) => {
	  return accumulator + currentValue;
	}, 0);
	
	console.log(sum); // 15
	```


## 배열명**.reverse()**

- 배열의 요소 순서를 반대로 변경합니다.
- return 순서가 변경된 해당 배열을 반환
- 예시

	```javascript
	let arr = [1, 2, 3, 4, 5];
	arr.reverse(); // [5, 4, 3, 2, 1]
	
	let names = ["Mary", "John", "Jane", "Mark"];
	names.reverse(); // ["Mark", "Jane", "John", "Mary"]
	```


## 배열명**.sort(compareFunction)**

- 배열의 요소를 정렬합니다.
- compareFunction: 정렬 순서를 정의하는 함수 (선택적)
기본적으로 문자열처럼 문자를 기준으로 sort해주고 (ASCII 문자 순서로 정렬),
compareFunction을 정의하여 사용할 때 숫자의 오름차순 내림차순 처럼 할 수도 있다
- return 정렬된 배열 반환
- 예시

	```javascript
	let arr = [3, 1, 4, 1, 5, 9, 2, 6];
	
	// 숫자의 오름차순 정렬
	arr.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 5, 6, 9]
	
	// 숫자의 내림차순 정렬
	arr.sort((a, b) => b - a); // [9, 6, 5, 4, 3, 2, 1, 1]
	```


## 배열명**.toString()**

- 배열의 모든 요소를 문자열로 변환합니다. 각 요소는 쉼표로 구분됩니다.
- return: 배열을 표현하는 문자열을 반환
- 예시

	```javascript
	let arr = [1, 2, 3];
	console.log("Array contents: " + arr); // "Array contents: 1,2,3"
	```


## 배열명**.toLocaleString([locales[, options]]);**

- 배열의 모든 요소를 지정된 로케일에 맞추어 문자열로 변환합니다.
- return: 서식에 맞춘 문자열을 반환
- 예시

	```javascript
	const myArray = [1234.56, -789.1, 0];
	const formattedArray = myArray.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	console.log(formattedArray); // "$1,234.56, -$789.10, $0.00"
	```


## 배열명**.join(separator)**

- 배열의 모든 요소를 하나의 문자열로 결합합니다.
- separator: 각 요소 사이에 삽입할 구분 기호 (선택적)
- return: “요소1<separator>요소2<separator>요소3<separator>요소4….”
- 예시

	```javascript
	const myArray = ['apple', 'banana', 'orange'];
	const result = myArray.join(', ');
	console.log(result); // "apple, banana, orange"
	```

