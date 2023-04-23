---
title: 'map'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# Map을 이용한 렌더링

- arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다.

# Map에서 Key가 필요한 이유

- Map에 key 값이없다면 중간의 값이 바뀌었을때 그 하위 값들이 전부 변하기 때문인다. key값을 사용한다면 key를 이용해 중간의 값을 추가하게 된다.
1. **예시**

	---


	```typescript
	import React from 'react';
	
	function ListItem(props: { value: string }) {
	  const { value } = props;
	  return <li>{value}</li>;
	}
	
	function List(props: { items: string[] }) {
	  const { items } = props;
	  // eslint-disable-next-line react/no-array-index-key
	  const lists = items.map((item, index) => <ListItem key={index} value={item} />);
	  return (
	    <ul>
	      {lists}
	    </ul>
	  );
	}
	
	function App() {
	  const items = ['item 1', 'item 2', 'item 3'];
	  return <List items={items} />;
	}
	
	export default App;
	```

