---
title: '데이터 조회의 기본'
date: '2023-04-07 02:40:00'
author: 'Juhyeon Lee'
tags: 
categories: 'SQL Learning'
---

# 데이터 조   회의 기본


## SELECT 문의 기본 문법


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/85a087ee-9c9c-4db2-ac06-6d936125aba5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130626Z&X-Amz-Expires=3600&X-Amz-Signature=877fed9c621bc1dca7a3d2c9465ac9b24b0770e4b8143bc1828d431bba38db2b&X-Amz-SignedHeaders=host&x-id=GetObject)

- 각 항목에 대해 정리하면 다음과 같음
1. **굵은 글자**로 표현된 부분은 필수로 입력해야 하는 항목
2. 굵은 글자에 <u>밑줄이 그어진 항목</u>은 시스템에서 명령문을 실행하기 위해 미리 정해 놓은 예약어라는 표시이다.
**예약어(keyword)**는 시스템이 미리 지정해놓은 것이므로 테이블을 만들 때도 이름으로 사용할 수 없습니다.
3. 대괄호`[]` 안에 들어간 항목은 선택 사항으로 생략할 수 있다.
4. 문장이 끝났다는 의미로 세미콜론 `;` 을 입력한다.

### SQL 문 작성 규칙

- 권장이 표시된 규칙은 강제는 아니지만 실무에서 지키면 좋은 내용
	- 결국은 반드시 알아야 하는 내용
1. 대 소문자는 구별하지 않는다.
2. 한 줄 또는 여러 줄로 작성할 수 있다. (줄로 처리가 바뀌진 않는다.)
	- 가독성과 편집의 용이성을 위해 내용이 달라지면 줄을 나눈다. **`권장`**
3. 코드 수준에 따른 들여쓰기는 SQL문장을 좀 더 읽기 쉽게한다. **`권장`**
4. 명령어는 대문자, 나머지는 소문자로 작성하면 가독성에 도움이 된다. **`권장`**

### 예시문제

1. **한 테이블의 전체 데이터 조회하기**
	1. **코드**

		---


		```sql
		SELECT *
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a612a30f-b7d8-4464-a13e-fea54ba7659b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130630Z&X-Amz-Expires=3600&X-Amz-Signature=d675b199a32c82938a15adaf0d655e5ca44d6c1a955ead037c3267e6f66f622b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. **활용한 코드**
	1. **코드**

		---


		```sql
		/**
		* 모든 employees_b의 데이터들 (alias A)과 , 
		* 모든 departments_b의 데이터들 중 (department_id == 20)인 데이터와 비교하는 SQL문이다.
		* A의 department_id 와 B.department_id 같은 데이터를 조회한다.
		*/
		SELECT * 
		FROM employees_b A,
		    (
		        SELECT *
		        FROM departments_b
		        WHERE department_id = 20
		    ) B
		WHERE A.department_id = B.department_id;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2bde620-527c-4976-b277-d40bfa281cdb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130631Z&X-Amz-Expires=3600&X-Amz-Signature=9808265845880588512019329b682fd58fb3d94146032dfe8490290b5497ffbb&X-Amz-SignedHeaders=host&x-id=GetObject)

2. **원하는 열만 조회하고 정렬하기**
	1. **코드**

		---


		```sql
		/**
		* employees_b의 모든 데이터 중 employee_id, first_name, last_name 열만 조회한다.
		*/
		SELECT employee_id, first_name, last_name
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/954e60c3-9e1c-4410-919b-14f9c7bfb6fd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130635Z&X-Amz-Expires=3600&X-Amz-Signature=4b21dd4a175743aabc6c9372fc66beccfa652acdfd985fdce239c33d26a70841&X-Amz-SignedHeaders=host&x-id=GetObject)

3. **원하는 열만 조회하고 정렬하기**
	1. **코드**

		---


		```sql
		/** 
		* ORDER BY 출력 순서를 정하는 명령어이다.
		* ASC 오름차순
		* DESC 내림차순
		*/
		SELECT employee_id, first_name, last_name
		FROM employees_b
		ORDER BY employee_id DESC;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7602bdb-29d0-4947-b25a-254304137e99/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130636Z&X-Amz-Expires=3600&X-Amz-Signature=93b9d45d4d87c739aebd8083a44ccf78b7627c3d69a9ae3bc6213b512e836813&X-Amz-SignedHeaders=host&x-id=GetObject)

4. **중복된 출력 값 제거하기**
	1. **코드**

		---


		```sql
		/**
		* employees_b의 테이블에서 job_id 열
		*/
		SELECT job_id
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bd34aa1-3780-48bd-99ba-9d3b5bdc7599/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130638Z&X-Amz-Expires=3600&X-Amz-Signature=811b33b777a308f3170de55e6974f3d30103f25700ee4a32360681e73d9b30d8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. **SQL 문을 효율적으로 작성하기 위해 별칭 사용하기**

	`AS` 

	- 열 이름을 변경하려면 AS 접속사를 사용한다.
	- `AS` 는 생략할 수 있음
	- 별치에 공백, 특수문자, 대소문자 등을 사용하려면 `“”` (따옴표)를 사용해야 한다.
	- 길어지거나 복잡해질 때 논리오류를 피하기 위해 사용할 수도 있다.
	1. **코드**

		---


		```sql
		SELECT employee_id AS 사원번호, first_name AS 이름, last_name AS 성
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3663be6d-069f-4e58-9f7d-07825a9859d0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130639Z&X-Amz-Expires=3600&X-Amz-Signature=331e37e07d1ebe9c84db16e5c5e5254140036c315479aba8c65b93e8b95d4395&X-Amz-SignedHeaders=host&x-id=GetObject)

6. **데이터 값 연결하기**
	1. **코드**

		---


		```sql
		SELECT employee_id, first_name || last_name
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/906051ef-4cd3-4524-b1ad-b793f2eb08b6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130640Z&X-Amz-Expires=3600&X-Amz-Signature=c66e560e4f9d5a7ad498274ddec3348bd5fe5b8d0423f46905db4c652e15d395&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		SELECT employee_id, first_name || ' ' || last_name
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/42967cd8-7d6b-46d7-a61c-92820c25e6b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130640Z&X-Amz-Expires=3600&X-Amz-Signature=524c9ec4aef4e61f038c923b86ed3996fbdf76cc552d422841137e8abeac85ef&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* employees 테이블에서 employee_id를 출력,
		* first_name + ' ' + last_name을 출력
		* email + '@' + 'company.com'을 출력
		*/
		SELECT employee_id,
		    first_name || ' ' || last_name,
		    email || '@' || 'company.com'
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f3e4b9e-01ad-4f36-b46a-cf350dc88f17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130640Z&X-Amz-Expires=3600&X-Amz-Signature=9447be97e888cb0fc0e99d6da86c8a17cea13ea349b183614206231360d49484&X-Amz-SignedHeaders=host&x-id=GetObject)

7. **산술 처리하기 : 데이터 값끼리 계산**
	1. **코드**

		---


		```sql
		SELECT employee_id, salary, salary+500, salary-100, (salary*1.1)/2
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c9e2ba0-f9fb-422e-95e7-229edbc73103/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130641Z&X-Amz-Expires=3600&X-Amz-Signature=c15382e4940a5365d366138e9264e0c7b24b8551a7181ba1474895796aa74fe5&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/** 
		* employees에서 employee_id를 ‘사원번호’,
		* salary를 ‘급여’,
		* salary+500을 ‘추가급여’,
		* salary-100을 ‘인하급여’,
		* (salary*1.1)/2를 ‘조정급여’로 출력
		*/
		SELECT employee_id AS 사원번호,
		    salary AS 급여,
		    salary+500 AS 추가급여,
		    salary-100 AS 인하급여,
		    (salary*1.1)/2 AS 조정급여
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8162efd6-ca87-4356-89b8-5323babf9cd4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130641Z&X-Amz-Expires=3600&X-Amz-Signature=cc3a4c4044040979b2ec1aacc0ca33614f90e006df3d4a6e4b8b0bcb200a8e41&X-Amz-SignedHeaders=host&x-id=GetObject)

8. **WHERE 조건 절을 활용한 데이터 검색**
	- where 절을 사용하여 조회하려는 조건을 지정할 수 있음
	- where 절은 FROM 절 다음에 위치함
	- 수행될 조건 절에는 비교 연산자, SQL 연산자, 논리 연산자, 열 이름, 표현식, 숫자, 문자 등을 쓸 수 있음.
	- **연산자의 종류x**

		| 연산자 종류  | 설명        | 예시            |
		| ------- | --------- | ------------- |
		| 비교 연산자  | 조건을 비교    | =, <, > 등     |
		| SQL 연산자 | 조건 비교를 확장 | BETWEEN, IN 등 |
		| 논리 연산자  | 조건 논리를 연결 | AND, OR 등     |

	1. **코드**

		---


		```sql
		/**
		* employees 테이블에서 first_name이 'David'인 직원 정보를 출력
		*/
		SELECT * 
		FROM employees_b
		WHERE first_name = 'David';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed1fd0e9-0306-469e-ba23-31cb6045b067/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130645Z&X-Amz-Expires=3600&X-Amz-Signature=89bb5455f51a21ead188c064c55c82db6ccfadab1c1738bbb8c3151b3cc5a7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

9. **비교 연산자 : 비교 조회 조건 주기**
	1. **코드**

		---


		```sql
		/**
		* employees 테이블에서 employee_id를 출력하고,
		* first_name과 last_name을 붙여서 출력
		*/
		SELECT *
		FROM employees_b
		WHERE employee_id >= 105;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f9374c8-3e43-4e20-8fa9-72a0bd05e6de/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130646Z&X-Amz-Expires=3600&X-Amz-Signature=eff86486ca3f7346da25a01172bf605b943268615d53b429ec8d313c08fb6155&X-Amz-SignedHeaders=host&x-id=GetObject)

10. **SQL 연산자: 조회 조건 확장하기**
	- SQL 연산자의 종류

		| 구분     | 연산자             | 의미 |
		| ------ | --------------- | -- |
		| SQL 연산 | BETWEEN a AND b |    |
		| SQL 연산 | IN (list)       |    |
		| SQL 연산 | LIKE ‘비교 문자’    |    |
		| SQL 연산 | IS NULL         |    |

	1. 코드

		---


		```sql
		/**
		* BETWEEN 연산자
		* employees 테이블에서 salary가 10,000 이상이고,
		* 20,000 이하인 직원 정보를 출력
		*/
		SELECT *
		FROM employees_b
		WHERE salary BETWEEN 10000 AND 20000;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f71c33cd-3c74-4b8e-b760-fd73b3510dbd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130653Z&X-Amz-Expires=3600&X-Amz-Signature=f14be2b1e2e8e1c28db68365e0ce013468909ac01c4e0dfce35a10f5e8c5d53f&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* IN 연산자
		* employees 테이블에서 salary가 10,000, 17,000, 24,000인 직원 정보 출력
		*/
		SELECT * 
		FROM employees_b
		WHERE salary IN (10000, 17000, 24000);
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5a1e4515-0610-4f5c-ad91-adb4fb81b202/Screenshot_2023-03-29_at_4.35.57_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130653Z&X-Amz-Expires=3600&X-Amz-Signature=8314d2900268c10d32825cac2f28ac7d9612c9acd28a20ac6c2a9d262b553391&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* LIKE 연산자
		* employees 테이블에서 job_id값이 AD를 포함하는 모든 데이터를 조회
		*/
		SELECT *
		FROM employees_b
		WHERE job_id LIKE 'AD%';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1e447f2-b324-4f90-808b-ba318586abfd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130653Z&X-Amz-Expires=3600&X-Amz-Signature=4896607bba0f9a5c53cc47ddc84c2661e0bbfb2362a02527e187fffa03e4d5cf&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* LIKE 연산자2
		* employees 테이블에서 AD를 포함하면서 AD 뒤에 따라오는 문자열이 
		* 3자리인 데이터 값을 갖는 직원 정보를 조회
		*/
		SELECT *
		FROM employees_b
		WHERE job_id LIKE 'AD___';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8634bcfa-01b1-4270-b432-4164a72f066f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130653Z&X-Amz-Expires=3600&X-Amz-Signature=66543f341f08098bc0dbf72fcc9c87c8d4c37632f082be44ac8cc15e9e85f554&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		SELECT *
		FROM employees_b
		WHERE manager_id IS NULL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/174c8250-0410-405c-98ac-4b65b960b3e1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130653Z&X-Amz-Expires=3600&X-Amz-Signature=bb504142153edcb4317e1b1d57f63085e942d331c7c6eb807613b7b31620e4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

11. **논리 연산자 : 조건 논리를 계속 연결하기**
	- 특정 조건을 모두 만족해야 할 때는 AND 연산자를 사용함
	- AND 연산자는 매우 중요한 연산자임
	- 여러 조건을 동시에 만족해야 하는 상황에서 사용한다.
	1. **코드**

		---


		```sql
		/**
		* AND 연산자
		* employees 테이블에서 salary가 4000을 초과하면서,
		* job_id가 'IT_PROG' 인 값을 조회
		*/
		SELECT *
		FROM employees_b
		WHERE salary > 4000
		AND job_id = 'IT_PROG';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/607ef4ff-a836-499f-b179-4fa0dd8811f6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=6c6ec1947ecf8cae46fea436be5e7fdc825ec6da2d63c8dd52938e3ff841031b&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* OR 연산자
		*/
		SELECT *
		FROM employees_b
		WHERE salary > 4000
		AND job_id = 'IT_PROG'
		OR job_id = 'FI_ACCOUNT';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2db8204f-b88b-48ff-b2ed-f579e3f90d9c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=148a81112a40286289841c40b05f5eb252dad07fd02f7c7c490744b1f74fe150&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* 부정 연산자
		*/
		SELECT * 
		FROM employees_b
		WHERE employee_id <> 105;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d13d5a0-b2c5-4d2d-b68b-9669e6689f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=15ef47ea6761a1f908e76002abe4e24ed62ae94fe65ff8fd8d01311dc9e1b496&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/**
		* IS NOT NULL 사용
		* employees 테이블에서 manager_id가 null 값이 아닌 직원을 조회
		*/
		SELECT *
		FROM employees_b
		WHERE manager_id IS NOT NULL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8feb4f4-0242-4b2c-b46e-d8e34c7d2405/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=03365d1d66efd76a05ca9687a9d3a306f483976f9b406a92531220fd22f1b9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

