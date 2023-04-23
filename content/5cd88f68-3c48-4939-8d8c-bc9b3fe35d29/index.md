---
title: 'props'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

React에서 " props"는 " properties"의 줄임말이다.


상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 방식. 
하위 컴포넌트는 프로퍼티로 전달된 데이터에 접근하여 동적으로 렌더링하는 데 사용할 수 있다.

1. **예시**

	---


	```typescript
	import React from 'react';
	
	// Parent component
	function Welcome(props: { name: string }) {
		const { name } = props;
	  return <h1>Hello, {name}</h1>;
	}
	
	// Child component
	function App() {
	  return (
	    <div>
	      <Welcome name="Sara" />
	      <Welcome name="Cahal" />
	      <Welcome name="Edite" />
	    </div>
	  );
	}
	
	export default App;
	```


	이 예시에서 `Welcome` 컴포넌트는 상위 컴포넌트인 `App`에서 `prop`을 받습니다.


	이제 `Welcome` 컴포넌트는 받은 `props`의 `name`을 사용하여 인사말을 렌더링한다.


	`App` 컴포넌트는 각각 다른 이름 `prop` 를 사용하여 `Welcome` 컴포넌트 인스턴스를 각각 3개 렌더링한다.

