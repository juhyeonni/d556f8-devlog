---
title: '함수'
date: '2023-04-22 12:09:00'
author: 'Juhyeon Lee'
tags: 
categories: 'SQL Learning'
---

# 함수


<details>
  <summary>목차</summary>



  </details>


DB 시스템에서 제공하는 함수는 미리 정의된 기능을 통해 데이터를 좀 더 편리하게 조작할 수 있도록 조와준다.

- 데이터 값을 계산하거나 조작 (단일 행 함수)
- 행의 그룹에 대해 계산하거나 요약 (그룹 함수)
- 열의 데이터 타입을 변환한다. 즉, 날씨와 숫자 등 데이터 타입을 상호 변환합니다.

## 단일 행 함수


| 저장 데이터 | 데이터 타입       | 설명                                   |
| ------ | ------------ | ------------------------------------ |
| 문자     | CHAR(n)      | n 크기 만큼 고정 길이의 문자 타입을 저장
최대 2,000바이트 |
| 문자     | VARCHAR(n)   | n 크기 만큼 가변 길이의 문자 타입을 저장
최대 4,000바이트 |
| 숫자     | NUMBER(p, s) | 숫자 타입을 저장한다 (p: 정수 자릿수, s: 소수 자릿수)   |
| 날짜     | DATE         | 날씨 타입을 저장한다.                         |


LOWER
UPPER
INITCAP
SUBSTR
REPLACE
CONCAT
LENGTH
INSTR
LPAD
RPAD
LTRIM
RTRIM


### 문자 함수


| 함수 | 설명 | 예 | 결과 |
| -- | -- | - | -- |
|    |    |   |    |
|    |    |   |    |

1. **데이터 값을 대소문자로 변환하기**
	1. **코드**

		---


		```sql
		/* LOWER, UPPER, INITCAP */
		SELECT last_name,
		    LOWER(last_name),
		    UPPER(last_name),
		    email,
		    INITCAP(email)
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0e67a210-829d-435b-b929-c5d1b7975e11/Screenshot_2023-04-05_at_3.44.25_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130635Z&X-Amz-Expires=3600&X-Amz-Signature=0a3889d9a84a9465e6cfddb3cb090587c4af1312c9f32e9e3116af1b35067524&X-Amz-SignedHeaders=host&x-id=GetObject)

2. **지정한 길이만큼 문자열 추출하기**
	1. **코드**

		---


		```sql
		/* SUBSTR */
		SELECT job_id, SUBSTR(job_id, 1, 2)
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d75d73d-9952-486a-97a3-c92d046e8889/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130637Z&X-Amz-Expires=3600&X-Amz-Signature=8ba2247027a9282c66c4fece9319df4d597fc52d3e544dfa4d56180d03e74cce&X-Amz-SignedHeaders=host&x-id=GetObject)

3. **특정 문자를 찾아 바꾸기**
	1. **코드**

		---


		```sql
		/* REPLACE */
		SELECT job_id, REPLACE(job_id, 'ACCOUNT', 'ACCNT')
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/99bfc480-5a29-4b3f-bb63-eaa8677fa101/Screenshot_2023-04-05_at_3.59.09_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130646Z&X-Amz-Expires=3600&X-Amz-Signature=d205ddd5b9fcdbc71baea44b7fcabcf7b114a0687192c5d481643ccbf8c44e37&X-Amz-SignedHeaders=host&x-id=GetObject)

4. **특정 문자로 자릿수 채우기**
	1. **코드**

		---


		```sql
		/* LPAD */
		SELECT first_name, LPAD(first_name, 12, '*')
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a6ad646-09a3-4c24-b3ce-d076fde26338/Screenshot_2023-04-05_at_4.02.56_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130650Z&X-Amz-Expires=3600&X-Amz-Signature=8b328af7798ca768cb6a5b06b9a0b4209883a1561f53b9b04bc94c693120fde9&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/* RPAD */
		SELECT first_name, RPAD(first_name, 12, '*') 
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f61be10b-0a10-488c-9463-be0f806997b1/Screenshot_2023-04-05_at_4.06.51_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130650Z&X-Amz-Expires=3600&X-Amz-Signature=14cd4d68ca739b2001d790210f6a2d7f514702ea58fa9d3d98e87f1199b4359d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. **데이터 값을 하나씩 계산하고 조작하기**
	1. **코드**

		---


		```sql
		/* LTRIM, RTRIM */
		SELECT job_id,
		    LTRIM(job_id, 'F'),
		    RTRIM(job_id, 'T')
		FROM employees_b;xxx
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff7e4491-e9be-49e1-b64f-46d95155446d/Screenshot_2023-04-05_at_4.08.58_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130651Z&X-Amz-Expires=3600&X-Amz-Signature=456ef864265137c6dcee181f70de7853dfa9fea62fc83011df037122759269aa&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/* dual */
		SELECT 'start' || TRIM('  - space -  ') || 'end'
		FROM dual;
		```


### 숫자 함수


ROUND
TRUNC
MOD
CEIL
FLOOR
SIGN
POWER
SQRT

1. **숫자 반올림하기**
	1. **코드**

		---


		```sql
		/* ROUND */
		SELECT salary,
		    salary/30 일급,
		    ROUND(salary/30, 0) 적용결과0,
		    ROUND(salary/30, 1) 적용결과1,
		    ROUND(salary/30, -1) 적용결과MINUS1
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a66ac045-aeae-4e73-9833-51ff57b8c897/Screenshot_2023-04-05_at_4.46.00_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130652Z&X-Amz-Expires=3600&X-Amz-Signature=534e5a968b2edf0d79192545ada4ec32784c1125877dfa21e932c98552495cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

2. **숫자 절삭하기**
	1. **코드**

		---


		```sql
		/* TRUNC */
		SELECT salary,
		    salary/30 일급,
		    TRUNC(salary/30, 0) 적용결과0,
		    TRUNC(salary/30, 1) 적용결과1,
		    TRUNC(salary/30, -1) 적용결과MINUS1
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3d4eb502-d20f-4d00-9c98-daec8db38dcd/Screenshot_2023-04-05_at_4.49.41_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=ed3a6a7b62ffbb74caa86a7532cc7e0dbbdaa723c5b3d3d5ff2167dd5220eea5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 날짜 함수

1. **날짜** **연산하기**
	1. **코드**

		---


		```sql
		SELECT TO_CHAR (SYSDATE, 'YY/MM/DD/HH24:MI') 오늘날짜,
		    SYSDATE + 1 더하기1,
		    SYSDATE - 1 빼기1,
		    TO_DATE('20171202')-TO_DATE('20171201') 날짜빼기,
		    SYSDATE + 13/24 시간더하기
		FROM DUAL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18de5f8a-3756-41b1-885d-93b8e75861e4/Screenshot_2023-04-05_at_5.00.10_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130654Z&X-Amz-Expires=3600&X-Amz-Signature=83f18ab678bc4b339d6f9fc9fc29a2f63c78b2733f21284f8326c30a9fcf996d&X-Amz-SignedHeaders=host&x-id=GetObject)

2. **두 날짜 사이의 개월 수 계산하기**
	1. **코드**

		---


		```sql
		/* MONTHS_BETWEEN */
		SELECT SYSDATE, 
		    hire_date, 
		    TRUNC(MONTHS_BETWEEN(SYSDATE, hire_date)) 개월수,
		    TRUNC(MONTHS_BETWEEN(SYSDATE, hire_date) / 12) 연수
		FROM employees_b
		WHERE department_id = 100;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cdbfb8ac-fb79-4f02-9e47-f3245c360caf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130655Z&X-Amz-Expires=3600&X-Amz-Signature=a93981d7f95ec330f78a1391eea6f0d74934bd8a3db0b03885a44f798cd2ee15&X-Amz-SignedHeaders=host&x-id=GetObject)

3. **월에 날짜 더하기**
	1. **코드**

		---


		```sql
		/* ADD_MONTHS */
		SELECT hire_date,
		    ADD_MONTHS(hire_date, 3) 더하기_적용결과,
		    ADD_MONTHS(hire_date, -3) 빼기_적용결과
		FROM employees_b
		WHERE employee_id BETWEEN 100 AND 106;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e65e02e6-0efa-4420-8b4a-6619c3388dbc/Screenshot_2023-04-05_at_5.14.15_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130658Z&X-Amz-Expires=3600&X-Amz-Signature=d650188e4ab726818caf790268d449a8335539f71ec4e1099c85c91f6a8d01e3&X-Amz-SignedHeaders=host&x-id=GetObject)

4. **돌아오는 요일의 날짜 계산하기**
	1. **코드**

		---


		```sql
		/* NEXT_DAY */
		SELECT hire_date,
		    NEXT_DAY(hire_date, 'FRIDAY') 적용결과_문자지정,
		    NEXT_DAY(hire_date, 6) 적용결과_숫자지정
		FROM employees_b
		WHERE employee_id BETWEEN 100 AND 106;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1add15d2-3705-4206-bd4c-b86efce6759e/Screenshot_2023-04-05_at_5.19.57_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130659Z&X-Amz-Expires=3600&X-Amz-Signature=f69e5b7b5014a6d7417b0903509fb72318e065b8bc2d0a2cba223e7097c1b84b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. **돌아오는 월의 마지막 날짜 계산하기**
	1. **코드**

		```sql
		/* LAST_DAY */
		SELECT hire_date,
		    LAST_DAY(hire_date) 적용결과
		FROM employees_b
		WHERE employee_id BETWEEN 100 AND 106;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79da2ede-0353-4128-99f7-15657815447b/Screenshot_2023-04-05_at_5.21.39_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130700Z&X-Amz-Expires=3600&X-Amz-Signature=90b62a9a8e21c6e48aa8ee0d199e02d27340f2924ba0df47fad21e1791b88d71&X-Amz-SignedHeaders=host&x-id=GetObject)

6. 날짜를 반올림하거나 절삭하기
	1. 코드

		---


		```sql
		/* ROUND, TRUNC */
		SELECT hire_date,
		    ROUND(hire_date, 'MONTH') 적용결과_ROUND_M,
		    ROUND(hire_date, 'YEAR') 적용결과_ROUND_Y,
		    TRUNC(hire_date, 'MONTH') 적용결과_TRUNC_M,
		    TRUNC(hire_date, 'YEAR') 적용결과_TRUNC_Y
		FROM employees_b
		WHERE employee_id BETWEEN 100 AND 106;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bad2b4cc-1c94-4bed-a7cd-a5495a4a834c/Screenshot_2023-04-12_at_2.49.18_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130701Z&X-Amz-Expires=3600&X-Amz-Signature=d34f1e18f20dd7a9cc64d3d07a5151eedad91a2625c8fdfed9f4ac58a6c7c8f3&X-Amz-SignedHeaders=host&x-id=GetObject)


### 변환 함수

1. 자동 데이터 타입 변환
	1. 코드

		---


		```sql
		SELECT 1 + '2'
		FROM DUAL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08828573-d570-4939-9e0e-318aa39ee21f/Screenshot_2023-04-12_at_3.04.50_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130703Z&X-Amz-Expires=3600&X-Amz-Signature=8ab204f8ff5e569ba8fa2824ab4e9758985ec87e961ede2a36f3b0b3b2a2ed96&X-Amz-SignedHeaders=host&x-id=GetObject)

2. 날짜 및 시간 형식 변환하기
	1. 코드

		---


		```sql
		SELECT TO_CHAR(SYSDATE, 'YY'),
		    TO_CHAR(SYSDATE, 'YYYY'),
		    TO_CHAR(SYSDATE, 'MM'),
		    TO_CHAR(SYSDATE, 'MON'),
		    TO_CHAR(SYSDATE, 'YYYYMMDD') 응용적용1,
		    TO_CHAR(TO_DATE('20171008'), 'YYYYMMDD') 응용적용2
		FROM DUAL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4ae44c90-742c-46b3-b000-cb3cc5cc07ab/Screenshot_2023-04-12_at_3.08.19_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130704Z&X-Amz-Expires=3600&X-Amz-Signature=b17a65f224aef38e8dafb1e1f2851d8ebb446ebe0ba3d57e5ccd5d5415daec74&X-Amz-SignedHeaders=host&x-id=GetObject)

3. 날짜 지정 형식을 시간 지정 형식으로 지정
	1. 코드

		---


		```sql
		SELECT TO_CHAR(SYSDATE, 'HH:MI:SS PM') 시간형식,
		    TO_CHAR(SYSDATE, 'YYYY/MM/DD HH:MI:SS PM') 날짜와시간조합
		FROM DUAL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bee23683-2c07-4558-8563-6f21facc7e0b/Screenshot_2023-04-12_at_3.13.35_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130704Z&X-Amz-Expires=3600&X-Amz-Signature=b1362b9c28b4be256bd9a103d664b7376a0136a32f36292bd47489f8d5f8bc1b&X-Amz-SignedHeaders=host&x-id=GetObject)

4. a
	1. 코드

		---


		```sql
		
		```

5. 날짜를 나타내는 문자열을 명시된 날짜로 변환하는 함수
	1. 코드

		---


		```sql
		SELECT TO_DATE('20171007', 'YYMMDD')
		FROM DUAL;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/87d910ff-663f-4f94-b2e2-80b125da891f/Screenshot_2023-04-12_at_3.39.27_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130706Z&X-Amz-Expires=3600&X-Amz-Signature=d338a92a0518068a6ca4dc5c68f9b9cbf4d4b23ae441f75551ef90ef1b0526d1&X-Amz-SignedHeaders=host&x-id=GetObject)


### 일반 함수

1. 데이터 값이 없는 null값을 가지지 않도록 지정
	1. 코드

		---


		```sql
		SELECT *
		FROM employees_b
		ORDER BY commission_pct;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/39025887-1f4e-486b-94b0-5b9ee113304f/Screenshot_2023-04-12_at_3.43.58_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130706Z&X-Amz-Expires=3600&X-Amz-Signature=8f46c4f247cb6a18e58bae18966b239aaeaaaec522940b38d5f715d67cd7e584&X-Amz-SignedHeaders=host&x-id=GetObject)


		```sql
		/* NVL */
		SELECT first_name, NVL(commission_pct, 1)
		FROM employees_b
		ORDER BY commission_pct;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/213fc708-2a66-4b1f-87a5-703b08f9ef75/Screenshot_2023-04-12_at_3.48.52_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130706Z&X-Amz-Expires=3600&X-Amz-Signature=d619288275c5d7509da3ed12fbdbb7c4f6feba4e89e247f33f2b94471e95b3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

2. 조건 논리 처리하기
	1. 코드

		---


		```sql
		/* DECODE */
		SELECT first_name,
		    last_name,
		    department_id,
		    salary 원래급여,
		    DECODE(department_id, 60, salary*1.1, salary) 조정된_급여,
		    DECODE(department_id, 60, '10% 인상', '미인상') 인상여부
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20f5e7cd-0f7e-43bd-80fa-1417d6f901bf/Screenshot_2023-04-12_at_3.54.59_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130708Z&X-Amz-Expires=3600&X-Amz-Signature=f702a36040b6e0e4575f7104fa44c1d07605ed1984e66235d9b2e3a5729faad5&X-Amz-SignedHeaders=host&x-id=GetObject)

3. 복잡한 조건 논리 처리하기
	1. 코드

		---


		```sql
		/* CASE */
		SELECT employee_id, first_name, last_name, salary,
		    CASE
		        WHEN salary >= 9000 
		            THEN '상위 급여'
		        WHEN salary BETWEEN 6000 AND 8999 
		            THEN '중위 급여'
		        ELSE '하위 급여'
		    END AS 급여등급
		FROM employees_b
		WHERE job_id = 'IT_PROG';
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/066d70c0-cc9f-4d0f-8114-11b12ce0848d/Screenshot_2023-04-12_at_4.11.01_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130709Z&X-Amz-Expires=3600&X-Amz-Signature=543d1aee836053fde4ae6dcf98cf3de2dd340aad6b28d0464faf021b00423e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 데이터 값에 순위 매기기
	1. 코드

		---


		```sql
		/* RANK, DENSE_RANK, ROW_NUMBER */
		SELECT employee_id,
		    salary,
		    RANK() OVER(ORDER BY salary DESC) RANK_급여,
		    DENSE_RANK() OVER(ORDER BY salary DESC) DENSE_RANK_급여,
		    ROW_NUMBER() OVER(ORDER BY salary DESC) ROW_NUMBER_급여
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ffb5d6fa-7999-4b6c-a783-d54e85193c27/Screenshot_2023-04-12_at_4.17.15_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130709Z&X-Amz-Expires=3600&X-Amz-Signature=3fef8607463c605e3ba6fa073d4a9227bea4ddf433647e8ed27610a5d8af1fd8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 그룹 함수

1. 그룹으로 요약하기
	1. 코드

		---


		```sql
		SELECT 그룹함수(열 이름)
		FROM 테이블 이름
		[WHERE 조건식]
		[ORDER BY 열 이름]
		```

2. 열의 행을 세는 함수
	1. 코드

		---


		```sql
		SELECT COUNT(salary) salary_행수
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2da86aaf-bff1-4b9f-b7a9-52a68a982738/Screenshot_2023-04-12_at_4.47.48_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130714Z&X-Amz-Expires=3600&X-Amz-Signature=db997c956a3926e6f29fe6b3fbc2ebad30d806cbe2c7784eef40647e811b119c&X-Amz-SignedHeaders=host&x-id=GetObject)

3. 열의 합계를 구하는 함수와 열의 평균을 구하는 함수
	1. 코드

		---


		```sql
		/* SUM, AVG */
		SELECT SUM(salary) 합계,
		    AVG(salary) 평균,
		    SUM(salary) / COUNT(salary) 계산한_평균
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86625fde-da2d-4808-8211-eeee497426ed/Screenshot_2023-04-12_at_4.55.20_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130716Z&X-Amz-Expires=3600&X-Amz-Signature=96e868b9a73dca56b29947583cbb0f835871d197a66ed98bf29e9c30bd095904&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 열의 최댓값과 열의 최솟값을 구하는 함수
	1. 코드

		---


		```sql
		/* MAX, MIN */
		/* 정수값, 문자열 */
		SELECT MAX(salary) 최댓값,
		    MIN(salary) 최솟값,
		    MAX(first_name) 최대문자값,
		    MIN(first_name) 최소문자값
		FROM employees_b;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/333bb403-90e8-4598-bbbc-49a10ab5b226/Screenshot_2023-04-12_at_4.49.48_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130718Z&X-Amz-Expires=3600&X-Amz-Signature=a9ed0ed67c7616fe2b3e6f0d4e431b05e3742aac85f189b5d5294491b0f00607&X-Amz-SignedHeaders=host&x-id=GetObject)

5. 그룹으로 묶는 키워드
	1. 코드

		---


		```sql
		/* GROUP BY */
		SELECT job_id 직무,
		    SUM(salary) 직무별_총급여,
		    AVG(salary) 직무별_평균급여
		FROM employees_b
		WHERE employee_id >= 10
		GROUP BY job_id
		ORDER BY 직무별_총급여 DESC, 직무별_평균급여;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21076334-8b29-40f3-b54d-b8419679d647/Screenshot_2023-04-12_at_5.05.51_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130719Z&X-Amz-Expires=3600&X-Amz-Signature=a04b311ae62de9af09233f46bbf61f309beb133fe199c919bdfe43f094b4d961&X-Amz-SignedHeaders=host&x-id=GetObject)

6. 
	1. 코드

		---


		```sql
		SELECT job_id job_id_대그룹,
		    manager_id manager_id_중그룹,
		    SUM(salary) 그룹핑_총급여,
		    AVG(salary) 그룹핑_평균급여
		FROM employees_b
		WHERE employee_id >= 10
		GROUP BY job_id, manager_id
		ORDER BY 그룹핑_총급여 DESC, 그룹핑_평균급여;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7ef7b85b-f151-4568-bdd0-0432fa313e4f/Screenshot_2023-04-12_at_5.13.20_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130720Z&X-Amz-Expires=3600&X-Amz-Signature=2b3cfd0ac005d3f8750197c3b864fa1840599b1c845803b99973238d3ee194d4&X-Amz-SignedHeaders=host&x-id=GetObject)

7. 연산된 그룹 함수 결과에 조건 적용하기
	1. 코드

		---


		```sql
		/* HAVING */
		SELECT job_id 직무,
		    SUM(salary) 직무별_총급여,
		    AVG(salary) 직무별_평균급여
		FROM employees_b
		WHERE employee_id >= 10
		GROUP BY job_id
		HAVING SUM(salary) > 30000
		ORDER BY 직무별_총급여 DESC, 직무별_평균급여;
		```


		![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2256d934-13e2-41aa-8b1e-685932f4860d/Screenshot_2023-04-12_at_5.16.24_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230422T130720Z&X-Amz-Expires=3600&X-Amz-Signature=d9fdbec5653f3272ba4ccf5b4c2b2c340e4ea9df22365074facf4c21770afd96&X-Amz-SignedHeaders=host&x-id=GetObject)

