---
title: 'Redux'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# Redux란?


React 어플리케이션에서 상태를 관리하는 JS 라이브러리.


Redux를 사용하면 **상태(state)**를 예측 가능하게 만들어 복잡한 애플리케이션에서 상태 관리를 용이하게 할 수 있다.


핵심은 “단일 소스의 진실”
⇒ <u>애플리케이션의 모든 상태를 단일 객체로 저장된다.</u>


Redux는 **세 가지의 주요 요소**로 이루어져 있다.

1. **액션 (Actions)**

	애플리케이션에서 어떤 이벤트를 나타내는 객체.

	- 보통 객체의 형태로 구성
	- `type`이라는 필드를 가지고 있다.
2. **리듀서 (Reducers)**

	현재 상태와 액션 객체를 받아서 새로운 상태를 반환하는 순수 함수.

	- 애플리케이션의 상태를 변화시키는 역할을 한다.
	- `switch`문을 사용하여 다양한 액션 타입에 따라 적절한 처리를 수행한다.
3. **스토어 (Store)**

	애플리케이션 **상태(state)**를 보유하고, 상태를 업데이트하고, 상태 변경을 구독(subscribe)할 수 있도록 해주는 객체.

	- 리듀서와 액션을 이용하여 상태를 업데이트, 상태 변경 시점을 구독하여 필요한 작업을 수행한다.

  


### 예시

1. 간단한 상태 관리 예제

	---


	```javascript
	// 액션 타입 정의
	const INCREMENT = 'INCREMENT';
	const DECREMENT = 'DECREMENT';
	
	// 액션 생성 함수
	function increment() {
	  return { type: INCREMENT };
	}
	
	function decrement() {
	  return { type: DECREMENT };
	}
	
	// 초기 상태 정의
	const initialState = {
	  count: 0
	};
	
	// 리듀서 함수
	function counter(state = initialState, action) {
	  switch (action.type) {
	    case INCREMENT:
	      return { ...state, count: state.count + 1 };
	    case DECREMENT:
	      return { ...state, count: state.count - 1 };
	    default:
	      return state;
	  }
	}
	
	// 스토어 생성
	const { createStore } = Redux;
	const store = createStore(counter);
	
	// 상태 변경 구독
	store.subscribe(() => console.log(store.getState()));
	
	// 액션 디스패치
	store.dispatch(increment());
	store.dispatch(increment());
	store.dispatch(decrement());
	```

