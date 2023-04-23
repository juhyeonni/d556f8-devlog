---
title: 'DOM 객체'
date: '2023-03-30 08:15:00'
author: 'Juhyeon Lee'
tags: jykim
categories: 'Javascript Learning'
---

# DOM 객체


## 프로그램 절차 작성시 원칙

1. 프로그램의 절차의 갯수는 정해져 있어야 함
2. 각 절차는 항상 같은 내용이어야 한다
3. 모든 가능성을 고려해야 한다
4. 예시는 절차를 검증하는데 사용(가능한 다양한 예시 준비)

## DOM (Document Object Model)

- html을 객체로 처리하기 위한 방법중 하나, tree형식으로 html의 계층구조를 표현
- JS에서 DOM 사용
	1. HTML DOM 객체의 선택
		- `document.querySelector()`
			- Element type으로 변환: 선택된 html dom 객체 하나
			- Element = 시작태크+내용+종료태그
		- `document.querySelectorAll()`
		- `document.getElementById()`
		- `document.getElementsByTagName()`
		- `document.getElementsByClassName()`
		- 선택자: CSS선택자 유사
			- #아이디명
			- .클래스명
			- 태그명
			- Parent > Child
			- P C
			- C1 ~ C2
	2. 조작 / 이벤트
		- `태그 엘리먼트.addEventListener(e, 리스너함수)`
			- 리스너함수
			- `const 리스너함수 = (e) ⇒ { … }`
				- event.target: 이벤트가 발생한 엘리먼트
				- event.target.value: 이벤트가 발생한 엘리먼트가 가지고 있는 값
					- `<input>`, `<textarea>`, `<select>`
			- `const 리스너함수 = e ⇒ { … }`
	3. 반영

### window 객체

- 생략가능
- document 객체
- navigation 객체
- location 객체
- history 객체
- methods
	- 사용자로부터 입력받기
	- alert(’내용’)
		- 확인 버튼: 반환값은 `undefined`
	- prompt(’내용’)
		- 확인 / 취소 버튼
		- 반환값: 사용자 입력값 또는 `null`
	- confirm(’내용)
		- 확인 / 취소
		- 반환값: 확인 → `true`, 취소 → `false`
