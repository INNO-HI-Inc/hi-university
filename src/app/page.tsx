"use client";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[1280px] px-6 py-6 bg-white">
      {/* 2-COLUMN LAYOUT (starts from hero) */}
      <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
        {/* LEFT COLUMN */}
        <div>
          <Hero />
          <ServiceCards />
        </div>
        {/* RIGHT SIDEBAR */}
        <Sidebar />
      </div>
      {/* Floating Chat Button */}
      <FloatingChat />
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO — dark rounded card inside left column
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <div className="overflow-hidden rounded-2xl hero-dark">
      <div className="grid items-center gap-4 px-[40px] py-[52px] lg:grid-cols-[340px_1fr]">
        {/* LEFT TEXT */}
        <div>
          <p className="mb-2 text-[14px] font-medium text-primary-light/70">나만의 입시 컨설턴트</p>
          <h1 className="mb-3 text-[40px] lg:text-[48px] font-extrabold leading-[1.18] text-white">
            나만의 입시 컨설턴트
            <br />바이브온
          </h1>
          <p className="mb-6 text-[13px] leading-[1.7] text-white/45">
            데이터를 바탕으로 수시에 대한 답을 찾아드립니다.
            <br />지금 무료로 시작해보세요.
          </p>
          <a
            href="/input"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-primary-dark active:scale-[0.97]"
          >
            무료 진단 시작
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8.5 7l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* RIGHT — white app screens stacked */}
        <div className="relative hidden h-[340px] lg:block">
          {/* Screen A: 뒤 왼쪽 — 대학 리스트 */}
          <div className="absolute left-0 top-3 z-10 w-[195px] rounded-xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <div className="mb-2 flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[8px] font-bold text-primary">합격 예측</span>
            </div>
            <div className="space-y-[3px]">
              {["서울대 컴공", "연세대 AI", "고려대 컴퓨터", "성균관대 SW"].map((u, i) => (
                <div key={u} className="flex items-center justify-between rounded bg-paper px-2 py-[4px]">
                  <span className="text-[8px] text-ink/50">{u}</span>
                  <span
                    className={`text-[8px] font-bold ${
                      ["text-red", "text-red", "text-amber", "text-green"][i]
                    }`}
                  >
                    {["도전", "도전", "적정", "안정"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Screen B: 메인 — 경쟁력 분석 (가장 큼) */}
          <div className="absolute left-[145px] top-0 z-20 w-[250px] rounded-xl bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="mb-1 text-[8px] font-bold text-primary">경쟁력 분석</div>
            <div className="mb-2 flex items-center gap-3">
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="42" fill="none" stroke="#EAECF0" strokeWidth="6" />
                <circle
                  cx="55"
                  cy="55"
                  r="42"
                  fill="none"
                  stroke="url(#pg)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42}
                  strokeDashoffset={2 * Math.PI * 42 * 0.18}
                  transform="rotate(-90 55 55)"
                />
                <defs>
                  <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#448CFF" />
                    <stop offset="100%" stopColor="#A8E847" />
                  </linearGradient>
                </defs>
                <text
                  x="55"
                  y="51"
                  textAnchor="middle"
                  className="fill-ink text-[17px] font-extrabold"
                  style={{ fontFamily: "inherit" }}
                >
                  258.02
                </text>
                <text
                  x="55"
                  y="65"
                  textAnchor="middle"
                  className="fill-slate text-[7px]"
                  style={{ fontFamily: "inherit" }}
                >
                  종합 점수
                </text>
              </svg>
              <div>
                <div className="text-[8px] text-slate">전체 상위</div>
                <div className="text-[16px] font-extrabold text-primary">
                  54<span className="text-[10px]">%</span>
                </div>
                <div className="mt-1 text-[7px] text-slate">동일대학전형 탐구</div>
              </div>
            </div>
            <div className="mb-1 text-[7px] font-bold text-ink/30">생기부 전형별 점수</div>
            <div className="flex items-end gap-[3px]" style={{ height: 36 }}>
              {[
                { n: "학업", v: 95.2, h: 34, c: "#448CFF" },
                { n: "진로", v: 70.0, h: 24, c: "#A8E847" },
                { n: "공동체", v: 93.0, h: 32, c: "#448CFF" },
              ].map((b) => (
                <div key={b.n} className="flex flex-1 flex-col items-center gap-[1px]">
                  <div
                    className="w-full rounded-t"
                    style={{ height: b.h, background: b.c, opacity: 0.6 }}
                  />
                  <span className="text-[6px] text-ink/35">{b.n}</span>
                  <span className="text-[6px] font-bold text-ink/50">{b.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screen C: 오른쪽 상단 — 추천대학 + 등급 */}
          <div className="absolute right-0 top-2 z-10 w-[175px] rounded-xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <div className="mb-1 text-[8px] font-bold text-ink/40">추천 대학</div>
            <div className="mb-1.5 flex items-baseline gap-1">
              <span className="text-[22px] font-extrabold leading-none text-primary">253</span>
              <span className="text-[10px] font-bold text-ink/30">27명</span>
            </div>
            <div className="flex gap-1">
              <span className="rounded bg-red/10 px-1 py-0.5 text-[7px] font-bold text-red">
                상향 2
              </span>
              <span className="rounded bg-amber/10 px-1 py-0.5 text-[7px] font-bold text-amber">
                적정 3
              </span>
              <span className="rounded bg-green/10 px-1 py-0.5 text-[7px] font-bold text-green">
                안정 3
              </span>
            </div>
          </div>

          {/* Screen D: 하단 — 과목 등급 바차트 */}
          <div className="absolute bottom-0 left-[70px] z-30 w-[230px] rounded-xl bg-white p-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.13)]">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[7px] font-bold text-ink/35">생기부 영역별 점수</span>
              <span className="rounded bg-primary/10 px-1 py-0.5 text-[7px] font-bold text-primary">
                평균 2.1
              </span>
            </div>
            <div className="flex items-end gap-[3px]" style={{ height: 36 }}>
              {[
                { n: "학업", g: 1, h: 34 },
                { n: "진로", g: 1, h: 34 },
                { n: "공동체", g: 2, h: 26 },
                { n: "인성", g: 2, h: 26 },
                { n: "발전", g: 3, h: 18 },
              ].map((s, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-[1px]">
                  <span className="text-[6px] font-bold text-ink/40">{s.g}</span>
                  <div
                    className="w-full rounded-t"
                    style={{
                      height: s.h,
                      background: s.g === 1 ? "#448CFF" : s.g === 2 ? "#A8E847" : "#E8A817",
                      opacity: 0.65,
                    }}
                  />
                  <span className="text-[5px] text-ink/25">{s.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SERVICE CARDS — 3x2 grid with 3D hover
   ═══════════════════════════════════════════ */
function ServiceCards() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Card href="/demo" name="생기부ON" desc="생기부 종합 분석 리포트, 강점·약점 진단 + 보강 전략">
        <IllustSaenggibu />
      </Card>
      <Card href="/result" name="학종ON" desc="130개 대학 합격 가능성 진단, 최적화 대학 추천">
        <IllustHakjong />
      </Card>
      <Card href="/input" name="교과ON" desc="교과전형 AI 예측, 내신 기반 지원 대학 추천">
        <IllustGygwa />
      </Card>
      <Card href="/pricing" name="면접ON" desc="AI 모의면접 시뮬레이션, 대학별 맞춤 예상 질문">
        <IllustInterview />
      </Card>
      <Card href="/input" name="내신 진단" desc="내 등급은 어느 수준? 타 학생 대비 비교" badge="무료">
        <IllustNaesin />
      </Card>
      <Card href="/pricing" name="전학상담" desc="1:1 AI 맞춤 입시 전략 상담, 실시간 채팅">
        <IllustConsult />
      </Card>
    </div>
  );
}

/* Card — top text + bottom illustration */
function Card({
  href,
  name,
  desc,
  badge,
  children,
}: {
  href: string;
  name: string;
  desc: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="card-3d group relative">
      <div className="card-3d-inner svc-card flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
        {badge && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-cta px-2 py-0.5 text-[9px] font-bold text-ink">
            {badge}
          </span>
        )}
        <div className="flex min-h-[140px] flex-1 items-center justify-center bg-white px-5 py-6">
          {children}
        </div>
        <div className="px-4 py-3">
          <h3 className="text-[14px] font-bold text-ink">{name}</h3>
          <p className="mt-0.5 text-[11px] leading-[1.5] text-slate">{desc}</p>
        </div>
      </div>
    </a>
  );
}

/* ═══ Card Illustrations (large, screenshot-matched) ═══ */

/* 생기부ON — two overlapping document cards */
function IllustSaenggibu() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 160, height: 100 }}>
      {/* back doc */}
      <div className="absolute left-2 top-0 w-[100px] rounded-lg bg-white p-2.5 shadow-md ring-1 ring-line">
        <div className="mb-2 h-1.5 w-10 rounded bg-primary/30" />
        <div className="space-y-[3px]">
          <div className="h-[3px] w-full rounded bg-line" />
          <div className="h-[3px] w-14 rounded bg-line/70" />
          <div className="h-[3px] w-10 rounded bg-line/50" />
        </div>
        <div className="mt-3 flex gap-[3px]">
          <div className="h-7 w-[8px] rounded-t-sm bg-primary/30" />
          <div className="h-10 w-[8px] rounded-t-sm bg-primary/50" />
          <div className="h-5 w-[8px] rounded-t-sm bg-primary/25" />
          <div className="h-8 w-[8px] rounded-t-sm bg-cta/40" />
        </div>
      </div>
      {/* front doc */}
      <div className="absolute right-2 top-3 w-[95px] rounded-lg bg-white p-2.5 shadow-lg ring-1 ring-line">
        <div className="mb-2 h-1.5 w-8 rounded bg-primary/25" />
        <div className="flex items-center gap-1.5">
          <div className="h-10 w-10 rounded bg-primary/8" />
          <div className="flex-1 space-y-[3px]">
            <div className="h-[3px] rounded bg-line" />
            <div className="h-[3px] w-3/4 rounded bg-line/60" />
            <div className="h-[3px] w-1/2 rounded bg-line/40" />
          </div>
        </div>
        <div className="mt-2 h-2 w-full rounded bg-primary/10" />
      </div>
    </div>
  );
}

/* 학종ON — donut gauge + stats */
function IllustHakjong() {
  return (
    <div className="flex items-center gap-4">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r="27" fill="none" stroke="#EAECF0" strokeWidth="5" />
        <circle
          cx="36"
          cy="36"
          r="27"
          fill="none"
          stroke="#448CFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 27}
          strokeDashoffset={2 * Math.PI * 27 * 0.18}
          transform="rotate(-90 36 36)"
        />
        <text x="36" y="33" textAnchor="middle" className="text-[13px] font-extrabold fill-ink" style={{ fontFamily: "inherit" }}>82</text>
        <text x="36" y="44" textAnchor="middle" className="text-[8px] fill-slate" style={{ fontFamily: "inherit" }}>종합</text>
      </svg>
      <div className="space-y-1.5">
        <div className="h-1.5 w-14 rounded bg-primary/25" />
        <div className="h-1.5 w-10 rounded bg-primary/15" />
        <div className="h-1.5 w-12 rounded bg-cta/25" />
      </div>
    </div>
  );
}

/* 교과ON — line chart with avatar */
function IllustGygwa() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="150" height="70" viewBox="0 0 150 70">
        <polyline points="5,55 30,42 55,48 80,22 105,28 130,15 145,10" fill="none" stroke="#448CFF" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="5,58 30,52 55,55 80,42 105,45 130,36 145,30" fill="none" stroke="#A8E847" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="80" cy="22" r="5" fill="#448CFF" />
        <circle cx="80" cy="22" r="2.5" fill="white" />
        {/* grid lines */}
        <line x1="5" y1="68" x2="145" y2="68" stroke="#EAECF0" strokeWidth="0.5" />
        <line x1="5" y1="45" x2="145" y2="45" stroke="#EAECF0" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="5" y1="22" x2="145" y2="22" stroke="#EAECF0" strokeWidth="0.5" strokeDasharray="3,3" />
      </svg>
    </div>
  );
}

/* 면접ON — chat bubble + avatar */
function IllustInterview() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#448CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <div className="flex-1 space-y-1.5">
        <div className="rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-line">
          <div className="h-[3px] w-full rounded bg-line" />
          <div className="mt-1 h-[3px] w-3/4 rounded bg-line/60" />
        </div>
        <div className="rounded-lg bg-primary/8 px-3 py-1.5">
          <div className="h-[3px] w-4/5 rounded bg-primary/20" />
          <div className="mt-1 h-[3px] w-1/2 rounded bg-primary/15" />
        </div>
      </div>
    </div>
  );
}

/* 내신 진단 — rainbow arc gauge */
function IllustNaesin() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80">
      <path d="M10 72 Q60 -10 110 72" fill="none" stroke="#448CFF" strokeWidth="4" opacity="0.35" />
      <path d="M18 72 Q60 2 102 72" fill="none" stroke="#A8E847" strokeWidth="4" opacity="0.35" />
      <path d="M26 72 Q60 16 94 72" fill="none" stroke="#E8A817" strokeWidth="4" opacity="0.35" />
      <circle cx="60" cy="34" r="9" fill="#448CFF" opacity="0.5" />
      <text x="60" y="38" textAnchor="middle" className="text-[9px] font-bold fill-white" style={{ fontFamily: "inherit" }}>나</text>
      {/* scale labels */}
      <text x="10" y="78" textAnchor="middle" className="text-[7px] fill-slate" style={{ fontFamily: "inherit" }}>1</text>
      <text x="60" y="8" textAnchor="middle" className="text-[7px] fill-slate" style={{ fontFamily: "inherit" }}>5</text>
      <text x="110" y="78" textAnchor="middle" className="text-[7px] fill-slate" style={{ fontFamily: "inherit" }}>9</text>
    </svg>
  );
}

/* 전학상담 — overlapping person avatars */
function IllustConsult() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/15 ring-2 ring-[#EDF4FF]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A817" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-green/15 ring-2 ring-[#EDF4FF]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1DAA6B" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-2 ring-[#EDF4FF]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#448CFF" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      <div className="ml-1 space-y-1.5">
        <div className="h-2 w-12 rounded bg-line" />
        <div className="h-2 w-16 rounded bg-line/50" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════ */
function Sidebar() {
  return (
    <div className="space-y-3">
      {/* Promo — light purple gradient with coupon visual */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E8F1FF] to-[#D0E2FF] p-8">
        <div className="relative z-10">
          <p className="text-[10px] font-bold text-primary/60">신규 회원 전용 혜택</p>
          <h3 className="mt-1 text-[22px] font-extrabold leading-tight text-primary-dark">
            지금 가입하면
            <br />생기부 진단 1회 무료!
          </h3>
          {/* Coupon visual in promo */}
          <div className="mt-3 flex items-center gap-2">
            {/* mini phone mockup */}
            <div className="h-[60px] w-[40px] rounded-lg bg-white/70 p-1 shadow-sm">
              <div className="h-1 w-5 rounded bg-primary/20" />
              <div className="mt-1 h-1 w-full rounded bg-primary/10" />
              <div className="mt-0.5 h-1 w-3/4 rounded bg-primary/10" />
              <div className="mt-2 h-3 w-full rounded bg-primary/15" />
            </div>
            {/* coupon badge */}
            <div className="flex h-[50px] w-[70px] -rotate-6 items-center justify-center rounded-lg border-2 border-dashed border-red/30 bg-white/80 shadow-sm">
              <div>
                <div className="text-center text-[6px] font-bold text-red/60">COUPON</div>
                <div className="text-center text-[10px] font-extrabold text-red">무료</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="rounded-2xl border border-line bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[13px] font-bold text-ink">숫자로 보는 바이브온</h3>
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-slate/60">2026/04/06 기준</span>
            <button className="flex h-5 w-5 items-center justify-center rounded border border-line text-[10px] text-slate">
              &lt;
            </button>
            <button className="flex h-5 w-5 items-center justify-center rounded border border-line text-[10px] text-slate">
              &gt;
            </button>
          </div>
        </div>
        <div className="text-[11px] text-slate">누적 생기부 분석 건수</div>
        <div className="num mt-1 flex items-baseline gap-1">
          <span className="text-[32px] font-extrabold tracking-tight text-ink">1,046,929</span>
          <span className="text-[13px] font-bold text-slate">건</span>
        </div>
      </div>

      {/* Coupon card */}
      <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-line bg-white p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#448CFF"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-ink">신규 가입 즉시</p>
          <p className="text-[11px] font-bold text-primary">생기부 진단 1회 무료!</p>
        </div>
        {/* Coupon badge */}
        <div className="flex h-[36px] w-[56px] shrink-0 items-center justify-center rounded-md border border-dashed border-primary/25 bg-primary/5">
          <span className="text-[8px] font-extrabold text-primary">COUPON</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   FLOATING CHAT BUTTON
   ═══════════════════════════════════════════ */
function FloatingChat() {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary shadow-[0_4px_16px_rgba(108,92,231,0.35)] transition hover:bg-primary-dark hover:shadow-[0_6px_24px_rgba(108,92,231,0.45)] active:scale-95"
      aria-label="채팅 상담"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
