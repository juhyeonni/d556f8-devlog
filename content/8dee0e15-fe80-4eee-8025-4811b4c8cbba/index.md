---
title: 'Babel'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# Babel이란?

- 자바스크립트 코드를 변환해 주는 컴파일러
- **최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법 사용 가능**
- 그 외에도 다양한 용도로 사용
	- 코드에서 주석을 제거하거나 코드를 압축…
- 리액트에서는 **JSX 문법을 사용하기 위해 바벨**을 사용

```bash
npm i @babel/core @babel/cli @babel/preset-react
```

1. **기존 코드 (React.createElement 함수 직접 작성)**

	---


	```javascript
	// index.js (React.createElement 직접 작성)
	function LikeButton() {
	  // useState는, 
	  // 컴포넌트의 상태값을 추가 할 때 사용한다.
	  const [liked, setLiked] = React.useState(false);
	  const text = liked ? '좋아요 취소' : '좋아요';
	
	  // createElement는 리액트의 요소를 추가해주는 메소드이다.
	  // 파라미터로 들어오는 값은,
	  // 1번째, 요소의 타입(형)
	  // 2번째, 속성값
	  // 3번째, children
	  return React.createElement('button',
	    { onClick: () => setLiked(!liked) },
	    text,
	  );
	}
	
	function Container() {
	  const [count, setCount] = React.useState(0);
	  return React.createElement('div', null,
	    React.createElement('span',
	      null,
	      'Count: ' + count,
	    ),
	    React.createElement('button',
	      { onClick: () => setCount(count + 1) },
	      '증가',
	    ),
	    React.createElement('button',
	      { onClick: () => setCount(count - 1) },
	      '감소',
	    ),
	  );
	}
	
	const domContainer = document.getElementById('root');
	ReactDOM.render(React.createElement(Container), domContainer);
	```

2. **JSX문법 사용**

	---

	- **변환하기 전(jsx)**

		```javascript
		function LikeButton() {
		  // useState는, 
		  // 컴포넌트의 상태값을 추가 할 때 사용한다.
		  const [liked, setLiked] = React.useState(false);
		  const text = liked ? '좋아요 취소' : '좋아요';
		
		  // createElement는 리액트의 요소를 추가해주는 메소드이다.
		  // 파라미터로 들어오는 값은,
		  // 1번째, 요소의 타입(형)
		  // 2번째, 속성값
		  // 3번째, children
		  return (
		    <button onClick={() => setLiked(!liked)}>
		      {text}
		    </button>
		  )
		}
		
		function Container() {
		  const [count, setCount] = React.useState(0);
		  return (
		    <div>
		      <LikeButton />
		      <span>현재 카운트</span>
		      <span style={{ marginRight: 10 }}>{count}</span>
		      <button onClick={() => { setCount(count + 1) }}>증가</button>
		      <button onClick={() => { setCount(count - 1) }}>감소</button>
		    </div>
		  )
		}
		
		const domContainer = document.getElementById('root');
		ReactDOM.render(React.createElement(Container), domContainer);
		```

	- **변환한 후 (js)**

		```javascript
		function LikeButton() {
		  // useState는, 
		  // 컴포넌트의 상태값을 추가 할 때 사용한다.
		  const [liked, setLiked] = React.useState(false);
		  const text = liked ? '좋아요 취소' : '좋아요';
		
		  // createElement는 리액트의 요소를 추가해주는 메소드이다.
		  // 파라미터로 들어오는 값은,
		  // 1번째, 요소의 타입(형)
		  // 2번째, 속성값
		  // 3번째, children
		  return /*#__PURE__*/React.createElement("button", {
		    onClick: () => setLiked(!liked)
		  }, text);
		}
		function Container() {
		  const [count, setCount] = React.useState(0);
		  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8"), /*#__PURE__*/React.createElement("span", {
		    style: {
		      marginRight: 10
		    }
		  }, count), /*#__PURE__*/React.createElement("button", {
		    onClick: () => {
		      setCount(count + 1);
		    }
		  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
		    onClick: () => {
		      setCount(count - 1);
		    }
		  }, "\uAC10\uC18C"));
		}
		const domContainer = document.getElementById('root');
		ReactDOM.render(React.createElement(Container), domContainer)
		```


JSX 코드는 Babel을 통해 변환과정을 거치게 된다.


