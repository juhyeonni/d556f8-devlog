---
title: 'useRef'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# useRef란?


useRef는 저장 공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook이다. 여기서 Ref는 **reference**를 뜻한다.


React를 사용하는 프로젝트에서도 가끔 _**DOM을 직접 선택해야 하는 상황**_이 필요하다.
그럴 때 우리는 useRef라는 React Hook을 사용한다.


## 사용되는 곳

1. **useRef는 어떠한 특정 DOM 요소를 선택할 수 있게 해준다.**
2. Component 안에서 조회 및 수정이 가능한 변수를 관리하는 용도로도 사용된다.
_리렌더링이 필요없는 변수를 다룰 때 사용하는 것이 효율적이다._
