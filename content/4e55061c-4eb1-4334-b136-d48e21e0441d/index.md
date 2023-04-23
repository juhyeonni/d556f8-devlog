---
title: 'useRef'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---
- javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
- 특정 DOM에 접근할 때 사용한다.
- 외부 라ㅣ브러리 사용할때 유용하다.
- 원하는 위치에 ref={} 의 형태로 작성하면 된다.
- 포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.

```javascript
const nameInput = useRef();

const onClick = () => {
    nameInput.current.focus();
}

return(
    <input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)
```

