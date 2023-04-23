---
title: 'React Hook'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# Hook이란

- 컴포넌트에 기능을 추가할 때 사용하는 함수
- useState: 상탯값 추가
- useEffect: 부수효과 처리
	- 서버 API 호출, 이벤트 핸들러 등록 등

## 훅 사용 시 지켜야 할 규칙

1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야한다.
2. 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.

### 알게 된점

1. 예시코드

	```javascript
	const App = () => {
	  const [count, setCount] = useState(0);
	  function onClick() {
	    setCount(count + 1);
	  }
	  return (
	    <div>
	      <span>{count}</span>
	      <button onClick={onClick}>countup</button>
	    </div>
	  );
	}
	```


	이 코드를 밑의 코드 처럼 바꿀 수 있다.


	```javascript
	const App = () => {
	  const [count, setCount] = useState(0);
	  function onClick() {
	    setCount(v => v + 1);
	  }
	  return (
	    <div>
	      <span>{count}</span>
	      <button onClick={onClick}>countup</button>
	    </div>
	  );
	}
	```

	- 처리되기 전의 변수 값을 매개변수로 받는다.
