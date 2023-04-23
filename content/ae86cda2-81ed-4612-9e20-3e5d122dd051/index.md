---
title: 'react-router-dom'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

React Router DOM은 React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하는 데 사용됩니다.

1. 다음으로, Router 컴포넌트를 불러와서 애플리케이션의 최상위 라우터를 설정합니다. 예를 들어, BrowserRouter를 사용하려면 다음과 같이 작성할 수 있습니다.

	```javascript
	import { BrowserRouter as Router } from 'react-router-dom';
	
	function App() {
	  return (
	    <Router>
	      {/* 내부 컴포넌트들 */}
	    </Router>
	  );
	}
	
	```

2. 이제 Route 컴포넌트를 사용하여 경로와 관련된 컴포넌트를 불러옵니다. 예를 들어, `/about` 경로에서 About 컴포넌트를 렌더링하려면 다음과 같이 작성합니다.

	```javascript
	import { Route } from 'react-router-dom';
	
	function App() {
	  return (
	    <Router>
	      <Route path="/about">
	        <About />
	      </Route>
	    </Router>
	  );
	}
	
	```

3. Switch 컴포넌트를 추가하여 가장 먼저 매칭되는 경로만 렌더링하도록 설정합니다.

	```javascript
	import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
	
	function App() {
	  return (
	    <Router>
	      <Switch>
	        <Route exact path="/">
	          <Home />
	        </Route>
	        <Route path="/about">
	          <About />
	        </Route>
	        <Route path="/users">
	          <Users />
	        </Route>
	        <Route path="*">
	          <NotFound />
	        </Route>
	      </Switch>
	    </Router>
	  );
	}
	
	```


	위 예시에서, `exact` 키워드는 정확히 `/` 경로와 일치할 때만 Home 컴포넌트를 렌더링하게 됩니다.

