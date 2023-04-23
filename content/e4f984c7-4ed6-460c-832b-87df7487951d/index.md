---
title: 'Destructing assignment'
date: '2023-04-22 12:16:00'
author: 'Juhyeon Lee'
tags: 
categories: 'Javascript Syntax'
---

```javascript
function getNumber(){
    let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
    return {first,third,forth}
}
console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }
```


변환 및 구현


```javascript
function getNumber() {
  let array = [1, 2, 3, 4, 5];
  const [first, , third, forth] = array
  return { first, third, forth };
}

console.log(getNumber());
```


```javascript
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 1];

  return Math.min(...a, ...b);
}

console.log(getMinimum());
```

