---
title: 'Webpack'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# Webpack이란?

- 다양한 기능 제공
	- 파일 내용을 기반으로 파일 이름에 해시값 추가 ⇒ 효율적으로 브라우저 캐싱 이용
	- 사용되지 않는 코드 제거
	- 자바스크립트 압축
	- JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기
	- 환경 변수 주입
- 웹팩을 사용하는 가장 큰 이유 ⇒ 모듈 시스템(ESM, commonJS)를 사용하고 싶기 때문.
- 요즘 브라우저는  ESM을 지원하지만,
	- 오래된 브라우저에서 동작하지 않는다.
	- 많은 오픈 소스가 commonJS로 작성되어있다.

	⇒ 결국에는 호환성을 위해서는 변환하는 것이 필요하다.


```bash
npm i webpack webpack-cli react react-dom
```

