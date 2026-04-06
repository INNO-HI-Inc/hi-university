"use client";

import Link from "next/link";

const products = [
  {
    id: "basic",
    name: "생기부ON",
    desc: "생활기록부 종합 분석 리포트",
    price: 19900,
    originalPrice: 39900,
    features: ["전체 진단 + 강점·약점 분석", "대학 추천 8개교+", "세특·행특 보강 전략", "추천 활동 리스트", "30페이지+ 리포트"],
    badge: null,
  },
  {
    id: "pro",
    name: "학종ON",
    desc: "학종 합격 예측 + 전략 리포트",
    price: 29900,
    originalPrice: 49900,
    features: ["생기부ON 전체 포함", "130개 대학 합격 가능성 진단", "최적화 대학 추천", "전형별 맞춤 전략", "실시간 등급 시뮬레이터"],
    badge: "인기",
  },
  {
    id: "premium",
    name: "올인원",
    desc: "전체 분석 + 면접 + 세특 작성",
    price: 39900,
    originalPrice: 99900,
    features: ["학종ON 전체 포함", "면접 핵심 스토리 3개", "AI 모의면접 시뮬레이션", "AI 세특 작성 가이드", "월별 3학년 전략 타임라인", "1:1 AI 컨설팅 채팅"],
    badge: "추천",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[12px] font-bold tracking-[0.08em] uppercase text-primary">PRICING</p>
          <h1 className="mb-3 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-ink">
            합리적인 가격으로 입시 준비
          </h1>
          <p className="text-[15px] text-slate">패키지 구매 시 최대 60% 할인. 분석 결과에 만족하지 않으면 전액 환불.</p>
        </div>

        {/* Price Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p, i) => {
            const isPro = i === 2;
            return (
              <div key={p.id}
                className={`relative overflow-hidden rounded-2xl border-2 p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${
                  isPro ? "border-primary bg-white shadow-[0_8px_32px_rgba(68,140,255,0.1)]" : "border-line bg-white"
                }`}
              >
                {p.badge && (
                  <span className={`absolute right-4 top-4 rounded-md px-2.5 py-1 text-[10px] font-bold text-white ${
                    p.badge === "추천" ? "bg-primary" : "bg-cta-dark text-ink"
                  }`}>{p.badge}</span>
                )}

                <h3 className="mb-1 text-[18px] font-extrabold text-ink">{p.name}</h3>
                <p className="mb-5 text-[13px] text-slate">{p.desc}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="num text-[32px] font-extrabold text-ink">{p.price.toLocaleString()}</span>
                    <span className="text-[14px] text-slate">원</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="num text-[13px] text-slate line-through">{p.originalPrice.toLocaleString()}원</span>
                    <span className="rounded bg-red/10 px-1.5 py-0.5 text-[11px] font-bold text-red">
                      {Math.round((1 - p.price / p.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                <button className={`mb-6 w-full rounded-xl py-3.5 text-[14px] font-bold transition-all duration-200 active:scale-[0.98] ${
                  isPro
                    ? "bg-primary text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] hover:bg-primary-dark"
                    : "bg-ink text-white hover:bg-ink-light"
                }`}>
                  시작하기
                </button>

                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-ink">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* 차별화 포인트 */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-[20px] font-extrabold text-ink">타사 대비 차별점</h2>
          <div className="overflow-hidden rounded-xl border border-line bg-white">
            <div className="grid grid-cols-[1fr_80px_80px] items-center border-b border-line bg-paper px-5 py-3 text-[11px] font-bold text-slate">
              <span>기능</span><span className="text-center">HiUni</span><span className="text-center">타사</span>
            </div>
            {[
              { feature: "생기부 종합 분석 리포트", us: true, them: true },
              { feature: "대학 합격 예측", us: true, them: true },
              { feature: "면접 예상 질문", us: true, them: true },
              { feature: "실시간 등급 시뮬레이터", us: true, them: false },
              { feature: "AI 세특 작성 가이드", us: true, them: false },
              { feature: "AI 모의면접 시뮬레이션", us: true, them: false },
              { feature: "월별 3학년 전략 타임라인", us: true, them: false },
              { feature: "1:1 AI 컨설팅 채팅", us: true, them: false },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-[1fr_80px_80px] items-center border-b border-line/50 px-5 py-3 text-[13px]">
                <span className="text-ink">{row.feature}</span>
                <span className="text-center">
                  {row.us ? (
                    <svg className="mx-auto h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  ) : <span className="text-line">—</span>}
                </span>
                <span className="text-center">
                  {row.them ? (
                    <svg className="mx-auto h-5 w-5 text-line" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  ) : <span className="text-line">—</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-[20px] font-extrabold text-ink">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              { q: "분석은 얼마나 걸리나요?", a: "생기부 업로드 후 약 3분 이내에 분석이 완료됩니다. 30페이지 이상의 상세 리포트를 즉시 확인할 수 있습니다." },
              { q: "환불이 가능한가요?", a: "분석 결과에 만족하지 않으시면 구매 후 7일 이내 전액 환불이 가능합니다." },
              { q: "데이터는 안전한가요?", a: "업로드된 생활기록부는 분석 완료 즉시 서버에서 삭제됩니다. 개인정보는 철저히 보호됩니다." },
              { q: "무료로 체험할 수 있나요?", a: "내신 성적 입력 후 기본 대학 추천은 무료로 이용 가능합니다. 상세 분석은 이용권 구매 후 확인하실 수 있습니다." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-line bg-white p-5">
                <h3 className="mb-2 text-[14px] font-bold text-ink">{faq.q}</h3>
                <p className="text-[13px] leading-[1.7] text-slate">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl hero-dark p-10 text-center">
          <h2 className="mb-2 text-[22px] font-extrabold text-white">지금 시작하세요</h2>
          <p className="mb-6 text-[14px] text-white/40">신규 가입 시 생기부 진단 1회 무료 체험</p>
          <Link href="/input" className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 text-[15px] font-bold text-ink transition-all duration-200 hover:bg-cta-dark active:scale-[0.97]">
            무료 진단 시작하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
