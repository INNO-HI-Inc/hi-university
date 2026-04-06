(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46498,e=>{"use strict";var t=e.i(40329),s=e.i(66528),r=e.i(92121);let a=`당신은 대한민국 최고의 입시 컨설턴트입니다. 15년 경력의 학생부종합전형(학종) 전문가로, 수천 건의 생활기록부를 분석하고 합격 전략을 수립해왔습니다.

## 역할
학생의 생활기록부(생기부) 텍스트를 분석하여 종합 컨설팅 리포트를 JSON 형식으로 생성합니다.

## 분석 원칙
1. **현실적 진단**: 내신 등급에 맞는 현실적인 대학을 추천합니다. 허황된 상향 지원은 금물입니다.
   - 1.0~1.5: SKY(서울대/연세대/고려대) 도전 가능
   - 1.5~2.0: 성균관대/한양대/서강대 적정
   - 2.0~2.5: 중앙대/경희대/이화여대 적정
   - 2.5~3.0: 건국대/동국대/숭실대 적정
   - 3.0~3.5: 세종대/광운대/단국대 적정
   - 3.5 이상: 지방거점국립대 또는 수도권 중위권 대학
2. **구체적 근거**: 모든 분석은 생기부 텍스트에서 직접 인용하거나 근거를 제시합니다.
3. **실행 가능한 전략**: 추상적 조언이 아닌 "이번 학기에 무엇을 하라"는 구체적 행동 지침을 제공합니다.
4. **학부모 관점**: 학부모가 읽어도 이해할 수 있는 명확한 언어를 사용합니다.

## 대학 추천 규칙 (수시 6장 기준)
- 상향 2장: 학생 내신보다 0.3~0.5 높은 커트라인의 대학
- 적정 2장: 학생 내신과 비슷한 커트라인의 대학
- 안정 1장: 학생 내신보다 0.5~1.0 낮은 커트라인의 대학
- 안전 1장: 학생 내신보다 1.0 이상 낮은 커트라인의 대학

## 출력 JSON 구조
반드시 아래 구조의 순수 JSON만 출력하세요. 마크다운 코드블록이나 설명 없이 JSON만 출력합니다.

{
  "overallDiagnosis": "전체 진단 (300~500자, 학생의 강점\xb7약점\xb7포지션을 종합 서술)",
  "universityRecommendations": [
    {
      "tier": "상향|적정|안정|안전",
      "university": "대학명",
      "major": "학과명",
      "averageRank": "N.N~N.N",
      "features": "전형명, 전형 특징",
      "strategy": "이 대학에 합격하기 위한 구체적 전략 (100자 이상)"
    }
  ],
  "strengths": [
    {
      "title": "강점 제목 (예: 진로 일관성 — 1학년부터 확고한 방향)",
      "description": "강점 설명 (200자 이상, 왜 이것이 강점인지 구체적으로)",
      "evidence": ["생기부에서 직접 인용한 근거 1", "근거 2", "근거 3"]
    }
  ],
  "weaknesses": [
    {
      "title": "약점 제목",
      "description": "약점 설명 (200자 이상)",
      "suggestions": ["구체적 보완 방안 1", "보완 방안 2", "보완 방안 3"]
    }
  ],
  "majorRecommendations": [
    {
      "rank": 1,
      "major": "추천 학과명",
      "fitReason": "왜 이 학과가 적합한지 (200자 이상)",
      "strengths": ["적합 근거1", "적합 근거2", "적합 근거3"]
    }
  ],
  "interviewStories": [
    {
      "title": "면접 스토리 제목",
      "description": "스토리 설명 (200자 이상, 면접에서 어떻게 활용할지)",
      "keyPoints": ["핵심 포인트 1", "핵심 포인트 2", "핵심 포인트 3"]
    }
  ],
  "improvementPlan": "3학년 보강 방향 전체 서술 (300자 이상)",
  "subjectStrategies": [
    {
      "subject": "과목명 (예: 수학/국어/영어/탐구과목)",
      "direction": "이 과목의 세특 보강 방향 (150자 이상)",
      "goodPhrases": ["추천 세특 문장 예시 1", "추천 세특 문장 예시 2"]
    }
  ],
  "behaviorStrategy": "행동특성 및 종합의견 보강 전략 (300자 이상, **볼드** 표시 가능)",
  "recommendedActivities": ["추천 활동 1 (구체적으로)", "추천 활동 2", "추천 활동 3"],
  "finalAssessment": "학부모님께 드리는 최종 판단 (300자 이상, 솔직하고 현실적인 조언)",
  "strategyPoints": "전략 포인트 요약 (각 항목 **볼드** 제목 + 설명, 4개 항목)"
}

## 주의사항
- universityRecommendations는 반드시 6~8개 제공 (상향2, 적정2~3, 안정1~2, 안전1)
- strengths는 3~5개, weaknesses는 2~4개
- majorRecommendations는 3~4개 (rank 1~4)
- interviewStories는 2~3개
- subjectStrategies는 3~5개 (주요 과목별)
- recommendedActivities는 4~6개
- 모든 텍스트는 한국어로 작성
- 내신 등급을 정확히 파악하고 그에 맞는 현실적 대학을 추천할 것`;async function i(e,t){let s,r=t||localStorage.getItem("openai_api_key");if(!r)throw Error("OpenAI API 키를 입력해주세요.");let i=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:"gpt-4o",messages:[{role:"system",content:a},{role:"user",content:`아래는 학생의 생활기록부 텍스트입니다. 이를 분석하여 종합 컨설팅 리포트를 JSON으로 생성해주세요.

---

${e}`}],temperature:.7,max_tokens:8e3})});if(!i.ok){let e=await i.text();throw Error(`OpenAI API 오류: ${i.status} ${e}`)}let n=await i.json(),l=n.choices?.[0]?.message?.content;if(!l)throw Error("AI 응답이 비어있습니다.");let o=JSON.parse(l.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());return{id:crypto.randomUUID(),studentName:(s=e.match(/(?:성명|이름|학생)\s*[:\s]\s*([가-힣]{2,4})/),s?.[1]??"학생"),createdAt:new Date().toISOString(),status:"completed",...o}}let n=`여기에 생활기록부 텍스트를 붙여넣으세요.

예시:
성명: 김민준  |  학년: 2학년  |  계열: 자연계

[교과 성적]
1학년 1학기: 국어 2, 수학 1, 영어 2, 물리학 1, 화학 2
1학년 2학기: 국어 3, 수학 1, 영어 2, 물리학 2, 화학 2
2학년 1학기: 국어 2, 수학 1, 영어 3, 물리학 1, 정보 1
2학년 2학기: 국어 4, 수학 2, 영어 2, 물리학 2, 정보 1

[세부능력 및 특기사항]
수학: 행렬 연산과 딥러닝 가중치 업데이트의 관계를 탐구...
정보: CNN 기반 교내 쓰레기 분류 모델을 구현하여 정확도 92% 달성...

[창의적 체험활동]
동아리: 프로그래밍 동아리에서 머신러닝 스터디 참여...
진로활동: Python 기초 학습 및 챗봇 프로그램 제작...

[행동특성 및 종합의견]
프로그래밍 동아리에서 후배 교육을 자발적으로 담당하며...`;e.s(["default",0,function(){let[e,a]=(0,s.useState)(""),[l,o]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),[x,m]=(0,s.useState)(""),[p,h]=(0,s.useState)(null),[u,g]=(0,s.useState)("");(0,s.useState)(()=>{{let e=localStorage.getItem("openai_api_key");e&&o(e)}});let b=async()=>{if(!l.startsWith("sk-"))return void g("올바른 OpenAI API 키를 입력해주세요.");if(e.trim().length<50)return void g("생활기록부 텍스트를 50자 이상 입력해주세요.");localStorage.setItem("openai_api_key",l),g(""),d(!0),m("AI가 생기부를 분석하고 있습니다...");let t=["교과 성적 패턴 분석 중...","세특 키워드 추출 중...","대학별 합격 가능성 계산 중...","맞춤형 전략 수립 중...","리포트 생성 중..."],s=0,r=setInterval(()=>{s=Math.min(s+1,t.length-1),m(t[s])},3e3);try{let t=await i(e,l);h(t),localStorage.setItem("analysisResult",JSON.stringify(t))}catch(e){g(e instanceof Error?e.message:"분석 중 오류가 발생했습니다.")}finally{clearInterval(r),d(!1),m("")}};return p?(0,t.jsx)("div",{className:"min-h-screen bg-paper",children:(0,t.jsxs)("div",{className:"mx-auto max-w-[800px] px-4 md:px-6 py-16 text-center",children:[(0,t.jsx)("div",{className:"mb-6 flex justify-center",children:(0,t.jsx)("div",{className:"flex h-20 w-20 items-center justify-center rounded-full bg-green/10",children:(0,t.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#1DAA6B",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})})}),(0,t.jsx)("h1",{className:"text-[28px] font-extrabold text-ink mb-2",children:"분석 완료!"}),(0,t.jsxs)("p",{className:"text-[15px] text-slate mb-2",children:[p.studentName," 학생의 종합 컨설팅 리포트가 생성되었습니다."]}),(0,t.jsxs)("p",{className:"text-[13px] text-slate/60 mb-8",children:["대학 ",p.universityRecommendations.length,"개교 추천 · 강점 ",p.strengths.length,"개 · 면접 스토리 ",p.interviewStories.length,"개"]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[(0,t.jsxs)(r.default,{href:"/report",className:"inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] transition hover:bg-primary-dark",children:["리포트 확인하기",(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,t.jsx)("path",{d:"M3 8h10m0 0L9 4m4 4L9 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,t.jsx)("button",{onClick:()=>{h(null),a("")},className:"text-[14px] font-medium text-slate hover:text-ink transition",children:"다시 분석하기"})]})]})}):(0,t.jsx)("div",{className:"min-h-screen bg-paper",children:(0,t.jsxs)("div",{className:"mx-auto max-w-[800px] px-4 md:px-6 py-16",children:[(0,t.jsxs)("div",{className:"mb-10",children:[(0,t.jsx)("p",{className:"mb-2 text-[12px] font-bold tracking-[0.08em] uppercase text-primary",children:"AI ANALYSIS"}),(0,t.jsx)("h1",{className:"mb-2 text-[28px] font-extrabold tracking-tight text-ink",children:"생기부 AI 분석"}),(0,t.jsx)("p",{className:"text-[15px] text-slate",children:"생활기록부 텍스트를 붙여넣으면 AI가 종합 컨설팅 리포트를 생성합니다."})]}),(0,t.jsx)("div",{className:"mb-8 grid grid-cols-3 gap-3",children:[{n:"01",t:"생기부 붙여넣기",d:"교과성적, 세특, 행특 등"},{n:"02",t:"AI 분석",d:"GPT-4o가 정밀 분석"},{n:"03",t:"리포트 확인",d:"30페이지+ 맞춤 전략"}].map(e=>(0,t.jsxs)("div",{className:"rounded-xl border border-line bg-white p-4 text-center",children:[(0,t.jsx)("span",{className:"inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[11px] font-bold text-white mb-2",children:e.n}),(0,t.jsx)("p",{className:"text-[13px] font-bold text-ink",children:e.t}),(0,t.jsx)("p",{className:"text-[11px] text-slate mt-0.5",children:e.d})]},e.n))}),(0,t.jsxs)("div",{className:"mb-5",children:[(0,t.jsx)("label",{className:"mb-2 block text-[13px] font-bold text-ink",children:"OpenAI API 키"}),(0,t.jsx)("input",{type:"password",value:l,onChange:e=>o(e.target.value),placeholder:"sk-proj-...",disabled:c,className:"w-full rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition disabled:opacity-50"}),(0,t.jsx)("p",{className:"mt-1.5 text-[11px] text-slate",children:"키는 브라우저에만 저장되며 외부로 전송되지 않습니다 (OpenAI API 직접 호출)"})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"mb-2 block text-[13px] font-bold text-ink",children:"생활기록부 텍스트"}),(0,t.jsx)("textarea",{value:e,onChange:e=>a(e.target.value),placeholder:n,rows:16,disabled:c,className:"w-full rounded-xl border border-line bg-white px-5 py-4 text-[14px] leading-[1.8] text-ink placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition disabled:opacity-50 resize-y"}),(0,t.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,t.jsxs)("p",{className:"text-[11px] text-slate",children:[e.length.toLocaleString(),"자 입력됨"]}),(0,t.jsx)("p",{className:"text-[11px] text-slate",children:"최소 50자 이상"})]})]}),u&&(0,t.jsx)("div",{className:"mb-4 rounded-xl bg-red/5 border border-red/15 px-4 py-3 text-[13px] text-red",children:u}),(0,t.jsx)("button",{onClick:b,disabled:c||e.trim().length<50||!l.startsWith("sk-"),className:"w-full rounded-xl bg-primary py-4 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] transition hover:bg-primary-dark active:scale-[0.99] disabled:opacity-40 disabled:shadow-none",children:c?(0,t.jsxs)("span",{className:"flex items-center justify-center gap-2",children:[(0,t.jsxs)("svg",{className:"h-5 w-5 animate-spin",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",className:"opacity-25"}),(0,t.jsx)("path",{d:"M4 12a8 8 0 018-8",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",className:"opacity-75"})]}),x]}):"AI 분석 시작"}),(0,t.jsx)("p",{className:"mt-4 text-center text-[11px] text-slate",children:"분석에 약 30초~1분 소요됩니다. 입력된 데이터는 서버에 저장되지 않습니다."})]})})}],46498)}]);