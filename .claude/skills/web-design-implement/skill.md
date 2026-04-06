---
name: web-design-implement
description: "참고 스크린샷을 보고 Next.js + Tailwind CSS로 웹페이지를 정밀 구현하는 스킬. '이거랑 똑같이', '디자인 카피', '레이아웃 맞춰줘', '스크린샷 보고 만들어' 등의 요청 시 반드시 사용. 픽셀 수준 정밀도로 레이아웃, 비율, 크기, 여백, 타이포를 재현한다."
---

# Web Design Implementation

참고 스크린샷을 분석하여 Next.js + Tailwind CSS로 정밀 구현하는 스킬.

## 워크플로우

### Step 1: 스크린샷 정밀 분석

참고 스크린샷을 Read로 열고, **반드시 아래 순서로 수치를 추출**한다.
추출 결과를 코드 작성 전에 텍스트로 정리한다.

```
## 레이아웃 분석 결과

전체 max-width: ____px
그리드: __단 레이아웃, 비율 __:__

### 히어로
- 위치: 풀 width / 컬럼 안 contained
- 높이: ____px
- 배경: ____
- 내부 그리드: __:__ (텍스트:비주얼)
- padding: ____px

### 카드 그리드
- 컬럼 수: __
- 카드 크기: __x__px
- gap: __px
- 카드 내부: 텍스트 ___% / 일러스트 ___%

### 사이드바
- 폭: ____px
- 요소: ____

### 타이포
- H1: __px / font-weight __
- 본문: __px / line-height __
- 캡션: __px

### 컬러
- primary: ____
- bg: ____
- border: ____
- shadow: ____
```

### Step 2: 코드 구현

분석 결과를 기반으로 코드를 작성한다.

**필수 규칙:**
- Tailwind arbitrary value로 정확한 수치 사용: `w-[310px]`, `py-[28px]`, `text-[13px]`
- 레이아웃은 `grid-cols-[비율]`로 정확한 비율 지정
- 컴포넌트를 함수로 분리하되 한 파일에 유지 (page.tsx)
- 빌드 에러 없이 완성

### Step 3: 빌드 검증

```bash
npx next build
```

빌드 실패 시 즉시 수정.

### Step 4: 로컬 확인

dev 서버를 띄우고 브라우저에서 확인:
```bash
nohup npx next dev -p 4000 > /tmp/next-dev.log 2>&1 &
open http://localhost:4000
```

## 프로젝트 컨텍스트

- 경로: /Users/flareon078/admission-consulting
- 프레임워크: Next.js 16 + Tailwind CSS v4
- 폰트: 에이투지체(A2G) — public/fonts/에 woff2 파일, globals.css에 @font-face 등록됨
- 컬러 시스템: globals.css @theme 블록에 정의됨
- 주요 파일: src/app/page.tsx, src/app/globals.css, src/app/layout.tsx
- 데모 데이터: src/data/sample-analysis.ts
- 페이지: /, /input, /result, /pricing, /demo

## 한국 에듀테크 디자인 패턴

참고할 공통 패턴 (vibeon.ai 등):
- 네비바: 좌 로고 → 메뉴 나열(일부 ▾) → 우 로그인/가입
- 히어로: 다크 배경 라운드 카드, 좌 텍스트 + 우 앱 스크린 목업
- 서비스 카드: 상단 텍스트 + 하단 절반 일러스트, 3열 그리드
- 사이드바: 프로모 배너 + 통계 카운터 + 쿠폰
- 앱 스크린 목업: **흰색 배경** 카드가 겹침 (다크 배경 위)
- CTA: rounded-full, 눈에 띄는 컬러 (라임/오렌지)
