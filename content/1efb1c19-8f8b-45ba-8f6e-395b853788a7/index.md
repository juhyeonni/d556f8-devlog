---
title: 'react-router-dom'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

```javascript
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```


위 코드는 React Router를 사용하여 구현된 웹 애플리케이션의 라우팅을 담당하는 부분입니다. 

1. `<BrowserRouter>` 컴포넌트를 사용하여 애플리케이션에 브라우저 히스토리 API를 추가.
2. `<Routes>` 컴포넌트 안에 `<Route>` 컴포넌트들을 작성하여 경로별로 어떤 요소를 보여줄지 정의.

⇒ 모든 페이지는 `<Header>` 요소를 포함하며, 
라우팅 경로에 따라 `Main` , `Products` , 또는 `NotFound` 컴포넌트가 렌더링하게 된다.

