"use client";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[1400px] px-6 py-6">
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

        {/* RIGHT — white app screens */}
        <div className="relative hidden h-[300px] lg:block overflow-hidden">
          {/* Screen A: 왼쪽 — 합격 예측 */}
          <div className="absolute left-0 top-0 z-10 w-[160px] rounded-xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <div className="mb-2 flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[8px] font-bold text-primary">합격 예측</span>
            </div>
            <div className="space-y-[3px]">
              {["서울대 컴공", "연세대 AI", "고려대 컴퓨터", "성균관대 SW"].map((u, i) => (
                <div key={u} className="flex items-center justify-between rounded bg-paper px-2 py-[4px]">
                  <span className="text-[7px] text-ink/50">{u}</span>
                  <span className={`text-[7px] font-bold ${["text-red", "text-red", "text-amber", "text-green"][i]}`}>
                    {["도전", "도전", "적정", "안정"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Screen B: 중앙 — 경쟁력 분석 */}
          <div className="absolute left-[120px] top-[10px] z-20 w-[200px] rounded-xl bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="mb-1 text-[8px] font-bold text-primary">경쟁력 분석</div>
            <div className="mb-2 flex items-center gap-2">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" fill="none" stroke="#EAECF0" strokeWidth="5" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="url(#pg)" strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 30} strokeDashoffset={2 * Math.PI * 30 * 0.18} transform="rotate(-90 40 40)" />
                <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#448CFF" /><stop offset="100%" stopColor="#A8E847" /></linearGradient></defs>
                <text x="40" y="38" textAnchor="middle" className="fill-ink text-[14px] font-extrabold" style={{ fontFamily: "inherit" }}>258</text>
                <text x="40" y="50" textAnchor="middle" className="fill-slate text-[6px]" style={{ fontFamily: "inherit" }}>종합 점수</text>
              </svg>
              <div>
                <div className="text-[7px] text-slate">전체 상위</div>
                <div className="text-[14px] font-extrabold text-primary">54<span className="text-[9px]">%</span></div>
              </div>
            </div>
            <div className="mb-1 text-[6px] font-bold text-ink/30">생기부 전형별 점수</div>
            <div className="flex items-end gap-[3px]" style={{ height: 28 }}>
              {[{ n: "학업", h: 26, c: "#448CFF" }, { n: "진로", h: 18, c: "#A8E847" }, { n: "공동체", h: 24, c: "#448CFF" }].map((b) => (
                <div key={b.n} className="flex flex-1 flex-col items-center gap-[1px]">
                  <div className="w-full rounded-t" style={{ height: b.h, background: b.c, opacity: 0.6 }} />
                  <span className="text-[5px] text-ink/35">{b.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screen C: 오른쪽 상단 — 추천대학 */}
          <div className="absolute right-0 top-0 z-10 w-[140px] rounded-xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <div className="mb-1 text-[7px] font-bold text-ink/40">추천 대학</div>
            <div className="mb-1.5 flex items-baseline gap-1">
              <span className="text-[18px] font-extrabold leading-none text-primary">253</span>
              <span className="text-[8px] font-bold text-ink/30">27명</span>
            </div>
            <div className="flex gap-1">
              <span className="rounded bg-red/10 px-1 py-0.5 text-[6px] font-bold text-red">상향 2</span>
              <span className="rounded bg-amber/10 px-1 py-0.5 text-[6px] font-bold text-amber">적정 3</span>
              <span className="rounded bg-green/10 px-1 py-0.5 text-[6px] font-bold text-green">안정 3</span>
            </div>
          </div>

          {/* Screen D: 하단 — 바차트 */}
          <div className="absolute bottom-0 left-[50px] z-30 w-[190px] rounded-xl bg-white p-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.13)]">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[6px] font-bold text-ink/35">생기부 영역별 점수</span>
              <span className="rounded bg-primary/10 px-1 py-0.5 text-[6px] font-bold text-primary">평균 2.1</span>
            </div>
            <div className="flex items-end gap-[2px]" style={{ height: 28 }}>
              {[{ n: "학업", g: 1, h: 26 }, { n: "진로", g: 1, h: 26 }, { n: "공동체", g: 2, h: 20 }, { n: "인성", g: 2, h: 20 }, { n: "발전", g: 3, h: 14 }].map((s, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-[1px]">
                  <span className="text-[5px] font-bold text-ink/40">{s.g}</span>
                  <div className="w-full rounded-t" style={{ height: s.h, background: s.g === 1 ? "#448CFF" : s.g === 2 ? "#A8E847" : "#E8A817", opacity: 0.65 }} />
                  <span className="text-[4px] text-ink/25">{s.n}</span>
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

/* Card — left: title+desc / right: icon */
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
      <div className="card-3d-inner svc-card flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-white px-5 py-5">
        {badge && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-cta px-2 py-0.5 text-[9px] font-bold text-ink">
            {badge}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-[18px] font-extrabold text-ink">{name}</h3>
          <p className="mt-1 text-[12px] leading-[1.6] text-slate">{desc}</p>
        </div>
        <div className="shrink-0 flex h-[56px] w-[56px] items-center justify-center rounded-2xl" style={{ background: "linear-gradient(135deg, #5DA0FF 0%, #3070E0 100%)", boxShadow: "0 6px 16px rgba(68,140,255,0.35)" }}>
          {children}
        </div>
      </div>
    </a>
  );
}

/* ═══ Card Icons (compact SVG) ═══ */

function IllustSaenggibu() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IllustHakjong() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IllustGygwa() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IllustInterview() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IllustNaesin() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IllustConsult() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
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
