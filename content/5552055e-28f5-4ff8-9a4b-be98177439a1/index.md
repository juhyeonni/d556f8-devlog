---
title: 'create-react-app'
date: '2023-04-22 12:18:00'
author: 'Juhyeon Lee'
tags: 
categories: 'React Learning'
---

# create-react-app이란


페이스북에서 지원하는 node package이고,
리액트 개발 환경을 구축해주는 툴이다.


## 사용되는 이유는?


직접 리액트 개발 환경을 구축하려면 많은 지식과 노력이 필요하다.

- webpack
- babel
- jest
- eslint
- polyfill
- HMR
- CSS 후처리

## 빌드를 하는 이유

- 성능 최적화
	- 빌드는 소스 코드를 번들링하고 최적화 하는 과정. 이 과정을 거치면서, 불필요한 코드를 제거하고 최종적으로 배포할 수 있는 번들 파일이 생성된다.
- 호환성
	- 최신 자바스크립트 문법을 사용하더라도 구 버전의 브라우저에서 동작하도록 변환해주는 기능을 포함
- 배포 용이성
	- CDN이나 웹서버에 업로드되어 웹앱을 이용하는 사용자에게 서비스하게 된다.

serviceworker


PWA 기능을 쓰기 위해서

