---
title: '자바스크립트 기초'
date: '2023-04-22 08:07:00'
author: 'Juhyeon Lee'
tags: jykim
categories: 'Javascript Learning'
---

# 자바스크립트 기초


이 문서는 자바스크립트의 기본문법에 대해서 설명합니다.


이 문서에서는 자바스크립트의 특징, 자료, 개발자 도구, REPL, 프로그래밍에 대해 다루고 있으며, 순서도에 대해서도 설명하고 있습니다.


## 도움되는 자료

- [모던 자바스크립트 튜토리얼](https://ko.javascript.info)
- [MDN 웹 문서](http://developer.mozilla.org/ko/docs/Web/JavaScript)

## 각 브라우저가 사용하는 자바스크립트 엔진


| 브라우저        | 자바스크립트 엔진     |
| ----------- | ------------- |
| 크롬, 엣지, 오페라 | V8 (Chromium) |
| 파이어폭스       | 스파이더몽키        |


## 특성

- 인터프리터 언어
	- 런타임에서 코드를 해석한다.
- 프로그래밍 패러다임
	- 객체 지향 프로그래밍
	- 함수형 프로그래밍
	- 이벤트 기반 프로그래밍

> 컴파일언어로는 `C`, `C++`, `Java` 와 같은 것이 있다.  
> 원시코드(프로그래머가 작성한 소스코드)를 모두 기계어로 변환한 후에 기계에 주입하여 실행하는 과정을 거친다.


## 개발자 도구


대부분의 기기에서 단축키


`Console`이라는 탭을 누르면 아래 빈 공간에 `>` 모양이 모인다. 이를 **프롬프트(prompt)** 라고 한다.


## REPL


사용자가 입력한 명령어를 <u>_**읽어서**_</u> <u>_**해석하고 실행한 후**_</u> 결과를 <u>_**출력하는 것**_</u>을 <u>_**반복하는 것**_</u>을 의미한다. 


**REPL**은 프로그래밍 언어나 도구에 따라 상세한 구현 방식이 다를 수 있다.

- Read 읽기
- Evaluate 평가
- Print 출력
- Loop 반복

## 개발자 도구 사용해보기

- **콘솔에 문자열을 출력하기**

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f8789246-0fb0-405f-81b4-f17f62a382cb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130634Z&X-Amz-Expires=3600&X-Amz-Signature=4ef0d2b81535424c262b6631d325a0af83336b7f64e3a40183727a08427f4608&X-Amz-SignedHeaders=host&x-id=GetObject)

- **흔히 발생할 수 있는 에러**
	1. `Uncaught ReferenceError: ~~~ is not defined`

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82687c85-0884-47ca-807e-e599d9668b1c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130635Z&X-Amz-Expires=3600&X-Amz-Signature=39ad0f9bec209946197cb6a8a6ba5415516d95e9cb00238a7dba1b1a7f55211c&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 객체의 참조에 에러가 발생했을 때, 발견할 수 있습니다.
		- 위와 같은 경우는 `consol` 은 존재하지 않는 객체이기 때문에 참조할 수 없기에 해당 에러가 발생하였습니다.
	2. `Uncaught TypeError: ~~~ is not a function`

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d681c38e-7262-4754-8824-db5fa3c6de95/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130635Z&X-Amz-Expires=3600&X-Amz-Signature=3470f0bb2c64e7045d193241b45ebf11ae1f5889b5005d3caea30dd0e53fbea1&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 객체의 멤버를 접근하려고 했을 때, 발견할 수 있습니다.
		- 위와 같은 경우는 `lo()` 라는 함수를 접근하려고 했지만, 함수가 없습니다. 그렇기에 에러가 발생했습니다.
	3. `Uncaught SyntaxError: missing ) after argument list:`

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/24fef658-64f9-42f8-8649-2802a106fac7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130635Z&X-Amz-Expires=3600&X-Amz-Signature=a88a6f7c8797a82778025ddf667e321fe33ea6ff28813709c4ea2ac80e4fdac4&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 따옴표를 올바르게 사용하지 않으면, 발견할 수 있습니다.
		- 위와 같은 경우는 `console.log()` 의 파라미터로 들어온 인자값에 `test’` 로 입력하였기 때문에, 에러가 발생했습니다.
	4. `Uncaught SyntaxError: Invalid or unexpected token`

		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/857c56b0-e9fb-4a3b-b226-9a4c29453151/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130636Z&X-Amz-Expires=3600&X-Amz-Signature=ff6ebe07aa89f1a1a220845c3bb77374c65a39a74399b2641c2996967f82f9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 따옴표의 짝을 맞추지 않았을때 발견할 수 있습니다.
		- 위와 같은 경우는 파라미터로 들어온 인자값이 `“test’` 로 입력되었기 때문에, 에러가 발생했습니다.

갑자기 옆길로 새신다….


## 프로그래밍

- 알고리즘
	- 문제를 해결하기 위한 순서와 절차
- 명확한 절차와 순서를 결정하는 것
- 문법에 맞게

## 프로그래밍 사고력 기르기


행동의 순서와 절차를 명확하게 설명할 수 있게 된다.

- 순서도 (Flow chart)
- 의사코드 (Pseudocode)

## 사람과 컴퓨터

- 사람
	- 직관, 무의식
	- 복잡한 상황에도 유연하게 대처할 수 있다. (유도리)
- 컴퓨터
	- 직관, 무의식은 할 수 없다.
	- 명확한 명령어를 받지 않으면 처리할 수 없다.

## 순서도


프로그래밍 사고력을 기르는 훈련을 할 때 순서도를 많이 사용한다.


복잡한 문제를 단순화하고 명확한 절차와 순서를 결정할 수 있다. 


### 순서도를 그리는 방법

1. 먼저, 문제 해결을 위해 **필요한 절차**와 **순서**를 생각합니다.
2. 시작점에서 끝점까지 직선으로 **연결합니다.**
3. 각각의 도형에 해당하는 작업을 적습니다.
4. 작업들을 연결합니다.

### 순서도에서 사용하는 도형과 기호


- 시작점 : 타원
- 종료점 : 타원 내부에 세모
- 처리 : 사각형
- 판단 : 마름모
- 흐름선 : 직선
- 데이터 입력/출력 : 평행사변형



![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1489a989-2225-4020-854c-4665d39a450e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130651Z&X-Amz-Expires=3600&X-Amz-Signature=704eb793b68fcd8b5081d9d5fde2573db2f1d8cb358faf6eb8831e2795bc2e73&X-Amz-SignedHeaders=host&x-id=GetObject)



