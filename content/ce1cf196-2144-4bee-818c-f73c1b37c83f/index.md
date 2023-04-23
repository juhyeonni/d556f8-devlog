---
title: 'React.createElement()'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# `React.createElement()`


React 요소를 생성하는 함수이다. (React Element)


일반적으로 `JSX`를 사용하여 **React 요소**를 작성하는 것과 동일한 결과를 낸다.

- **첫번째 인자**는 해당 요소의 _**타입**_(컴포넌트의 이름, HTML 요소 태그 등)이다.
- **두번째 인자**는 해당 요소에 전달한 _**속성**_(props)이다.
- **세번째 인자**는 해당 요소의 _**자식 요소들**_(children)입니다.
1. **예시코드**

	---


	```javascript
	React.createElement('p', null, 'Hello, World');
	```


	해당 코드는 `<p>Hello, World</p>` 와 같은 코드이다.

2. **예시코드**

	---


	```javascript
	React.createElement('div', null,
	  React.createElement('p', null, 'Hello'),
	  React.createElement('p', null, 'world'),
	);
	```


	**위 코드**는 **아래 코드와 같다.**


	```html
	<div>
		<p>Hello</p>
		<p>World</p>
	</div>
	```

