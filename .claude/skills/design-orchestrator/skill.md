---
name: design-orchestrator
description: "웹디자인 구현 + QA 검증 사이클을 조율하는 오케스트레이터. '디자인 해줘', '이거랑 똑같이', '스크린샷 보고 만들어', '레이아웃 카피', '디자인 수정', '웹디자인' 요청 시 반드시 이 스킬을 사용. 디자이너와 QA 리뷰어를 순차 실행하여 참고 디자인과 동일한 결과물을 만든다."
---

# Design Orchestrator

웹디자이너 에이전트와 UX 리뷰어 에이전트를 조율하여, 참고 디자인을 정밀하게 재현하는 오케스트레이터.

## 실행 모드: 서브 에이전트

디자이너가 구현 → QA가 검증 → 피드백 반영의 **순차 파이프라인**이므로 서브 에이전트 모드가 적합하다. 에이전트 간 실시간 토론보다 순차적 검증-수정 루프가 핵심.

## 에이전트 구성

| 에이전트 | 타입 | 역할 | 스킬 |
|---------|------|------|------|
| web-designer | general-purpose | 참고 스크린샷 분석 → 코드 구현 | web-design-implement |
| ux-reviewer | general-purpose | 구현 결과 캡처 → 참고와 비교 → 피드백 | ux-visual-qa |

## 워크플로우

### Phase 1: 준비

1. 사용자 요청에서 파악:
   - 참고 스크린샷 경로
   - 수정할 페이지 (기본: src/app/page.tsx)
   - 특별 요구사항 (특정 섹션만, 특정 스타일 등)
2. `_workspace/` 디렉토리 생성
3. dev 서버가 떠 있는지 확인 (없으면 시작)

### Phase 2: 디자인 구현 (web-designer)

디자이너 에이전트를 호출한다:

```
Agent(
  subagent_type: "general-purpose",
  prompt: """
  당신은 web-designer 에이전트입니다.
  .claude/agents/web-designer.md의 역할과 원칙을 따르세요.
  .claude/skills/web-design-implement/skill.md의 워크플로우를 실행하세요.

  ## 작업
  참고 스크린샷: {screenshot_path}
  수정할 파일: {target_file}
  특별 요구: {requirements}

  반드시 Step 1(스크린샷 분석 결과 정리)을 먼저 수행한 후 코드를 작성하세요.
  빌드 성공까지 확인하세요.
  """
)
```

### Phase 3: QA 검증 (ux-reviewer)

디자이너 완료 후 QA 에이전트를 호출한다:

```
Agent(
  subagent_type: "general-purpose",
  prompt: """
  당신은 ux-reviewer 에이전트입니다.
  .claude/agents/ux-reviewer.md의 역할과 원칙을 따르세요.
  .claude/skills/ux-visual-qa/skill.md의 워크플로우를 실행하세요.

  ## 작업
  참고 스크린샷: {screenshot_path}
  구현 페이지: http://localhost:4000{page_path}

  체크리스트를 빠짐없이 확인하고 피드백을 _workspace/qa_feedback_1.md에 저장하세요.
  """
)
```

### Phase 4: 피드백 반영 (반복)

QA 결과를 확인한다:
- **PASS** → 완료. 사용자에게 결과 보고.
- **FAIL** → 피드백을 디자이너에게 전달하여 수정 (Phase 2 재실행)

**최대 반복 횟수: 2회** — 2회 수정 후에도 FAIL이면 남은 이슈를 사용자에게 보고하고 판단을 구한다.

```
# 수정 루프
for round in [1, 2]:
  if qa_result == "FAIL":
    Agent(web-designer, prompt="QA 피드백 반영: {feedback}")
    Agent(ux-reviewer, prompt="재검증: round {round+1}")
  else:
    break
```

### Phase 5: 결과 보고

사용자에게 보고:
- 수정된 파일 목록
- QA 최종 판정 (PASS/FAIL/CONDITIONAL)
- 남은 이슈 (있으면)
- localhost URL

## 에러 핸들링

| 에러 | 전략 |
|------|------|
| 빌드 실패 | 디자이너가 즉시 수정, 재빌드 |
| 스크린샷 캡처 실패 | 수동 확인 요청 |
| dev 서버 다운 | 재시작 시도 1회 |
| 2회 수정 후에도 FAIL | 사용자에게 판단 요청 |

## 테스트 시나리오

### 정상 흐름
1. 사용자: "이 스크린샷이랑 똑같이 만들어줘" + 파일경로
2. 오케스트레이터: 디자이너 호출 → QA 호출 → PASS → 완료

### 수정 흐름
1. 사용자: "이 스크린샷 보고 카피해줘"
2. 오케스트레이터: 디자이너 호출 → QA 호출 → FAIL (P1: 카드 크기 다름)
3. 오케스트레이터: 피드백으로 디자이너 재호출 → QA 재호출 → PASS → 완료
