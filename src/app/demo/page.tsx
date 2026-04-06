"use client";

import { useState } from "react";
import Link from "next/link";
import { sampleAnalysis } from "@/data/sample-analysis";
import type { AnalysisResult } from "@/types/record";

type Tab = "overview" | "strengths" | "weaknesses" | "universities" | "majors" | "interview" | "strategy";

const tabs: { key: Tab; label: string; icon: string }[] = [
  { key: "overview", label: "전체 진단", icon: "01" },
  { key: "universities", label: "대학 추천", icon: "02" },
  { key: "strengths", label: "강점 분석", icon: "03" },
  { key: "weaknesses", label: "보완 포인트", icon: "04" },
  { key: "majors", label: "학과 적합성", icon: "05" },
  { key: "interview", label: "면접 스토리", icon: "06" },
  { key: "strategy", label: "보강 전략", icon: "07" },
];

export default function DemoPage() {
  const data = sampleAnalysis;
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Header */}
      <div className="hero-dark relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #448CFF 0%, transparent 70%)" }} />
        <div className="absolute -left-10 bottom-0 h-[200px] w-[200px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A8E847 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-[1100px] px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-cta border border-white/10">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                  DEMO REPORT
                </span>
              </div>
              <h1 className="text-[26px] font-extrabold text-white md:text-[36px]">
                {data.studentName} 학생
              </h1>
              <p className="mt-1 text-[18px] md:text-[22px] font-bold text-white/60">종합 컨설팅 리포트</p>
              <p className="mt-3 text-[13px] text-white/35">
                {new Date(data.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })} 분석 &middot; 샘플 데이터 기반
              </p>
            </div>
            {/* Quick stats in header */}
            <div className="flex gap-3">
              {[
                { v: "2.1", l: "내신 평균", u: "등급" },
                { v: "8", l: "추천 대학", u: "개교" },
                { v: "4", l: "강점 영역", u: "개" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 text-center min-w-[80px]">
                  <div className="text-[22px] font-extrabold text-white">{s.v}<span className="text-[11px] font-bold text-white/50 ml-0.5">{s.u}</span></div>
                  <div className="text-[10px] text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        {/* Tabs */}
        <div className="sticky top-[52px] z-40 -mt-5 pb-2">
          <div className="flex gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-line">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-[13px] font-bold transition ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate hover:bg-paper hover:text-ink"
                }`}
              >
                <span className={`text-[10px] font-bold ${activeTab === tab.key ? "text-white/60" : "text-slate/40"}`}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="py-8 space-y-6">
          {activeTab === "overview" && <OverviewTab data={data} />}
          {activeTab === "universities" && <UniversitiesTab data={data} />}
          {activeTab === "strengths" && <StrengthsTab data={data} />}
          {activeTab === "weaknesses" && <WeaknessesTab data={data} />}
          {activeTab === "majors" && <MajorsTab data={data} />}
          {activeTab === "interview" && <InterviewTab data={data} />}
          {activeTab === "strategy" && <StrategyTab data={data} />}
        </div>

        {/* Bottom CTA */}
        <div className="mb-10 rounded-2xl p-8 md:p-10 text-center border-2 border-dashed border-primary/20 bg-primary/3">
          <p className="text-[13px] font-bold text-primary mb-2">이 리포트는 샘플입니다</p>
          <h3 className="text-[20px] md:text-[24px] font-extrabold text-ink mb-3">내 생기부로 직접 분석 받아보세요</h3>
          <p className="text-[14px] text-slate mb-6">성적 입력만으로 무료 대학 추천 + 유료 리포트 30페이지 제공</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/input" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] transition hover:bg-primary-dark active:scale-[0.97]">
              무료 진단 시작
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/pricing" className="text-[14px] font-medium text-slate hover:text-ink transition">이용권 보기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Shared --- */

function Card({ title, icon, children, badge, accent }: {
  title: string; icon?: string; children: React.ReactNode; badge?: string; accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-line/50">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[12px] font-bold text-white" style={{ background: accent || "#448CFF" }}>
              {icon}
            </span>
          )}
          <h3 className="text-[17px] font-bold text-ink">{title}</h3>
        </div>
        {badge && <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">{badge}</span>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function StatBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[12px] text-slate w-[60px] shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-line overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
      <span className="text-[12px] font-bold text-ink w-[36px] text-right">{value}</span>
    </div>
  );
}

/* --- Tabs --- */

function OverviewTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {/* Visual Score */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <h4 className="text-[13px] font-bold text-slate mb-4">역량 점수</h4>
          <div className="space-y-3">
            <StatBar label="학업역량" value={95} max={100} color="#448CFF" />
            <StatBar label="진로역량" value={70} max={100} color="#A8E847" />
            <StatBar label="공동체" value={93} max={100} color="#448CFF" />
            <StatBar label="리더십" value={45} max={100} color="#E8A817" />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <h4 className="text-[13px] font-bold text-slate mb-4">대학 지원 전략</h4>
          <div className="space-y-2">
            {[
              { t: "상향", n: 2, c: "#E8453C", w: "25%" },
              { t: "적정", n: 3, c: "#E8A817", w: "37.5%" },
              { t: "안정", n: 2, c: "#1DAA6B", w: "25%" },
              { t: "안전", n: 1, c: "#448CFF", w: "12.5%" },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-3">
                <span className="text-[12px] font-bold w-[32px]" style={{ color: r.c }}>{r.t}</span>
                <div className="flex-1 h-6 rounded-lg bg-paper overflow-hidden">
                  <div className="h-full rounded-lg flex items-center px-2" style={{ width: r.w, background: r.c + "18" }}>
                    <span className="text-[11px] font-bold" style={{ color: r.c }}>{r.n}개교</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card title="전체 진단" icon="AI">
        <p className="whitespace-pre-wrap text-[14px] leading-[1.9] text-ink/70">{data.overallDiagnosis}</p>
      </Card>

      {data.strategyPoints && (
        <Card title="전략 포인트 요약" icon="SP" accent="#1DAA6B">
          <div className="whitespace-pre-wrap text-[14px] leading-[1.9] text-ink/70 [&>strong]:font-bold [&>strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: data.strategyPoints.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
          />
        </Card>
      )}

      {data.finalAssessment && (
        <Card title="학부모님께 드리는 최종 판단" icon="FN" accent="#E8A817">
          <div className="rounded-xl p-5" style={{ background: "linear-gradient(135deg, #FFF8E8 0%, #FFF3D6 100%)" }}>
            <p className="whitespace-pre-wrap text-[14px] leading-[1.9] text-ink/80">{data.finalAssessment}</p>
          </div>
        </Card>
      )}
    </>
  );
}

function UniversitiesTab({ data }: { data: AnalysisResult }) {
  const tc: Record<string, { color: string; bg: string }> = {
    "상향": { color: "#E8453C", bg: "#FEF2F2" },
    "적정": { color: "#E8A817", bg: "#FFFBEB" },
    "안정": { color: "#1DAA6B", bg: "#F0FDF4" },
    "안전": { color: "#448CFF", bg: "#EFF6FF" },
  };

  return (
    <div className="space-y-4">
      {data.universityRecommendations.map((rec, i) => {
        const c = tc[rec.tier] ?? { color: "#666", bg: "#f5f5f5" };
        return (
          <div key={i} className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className="w-1.5 shrink-0" style={{ background: c.color }} />
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-md px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: c.color }}>{rec.tier}</span>
                      <h4 className="text-[16px] font-bold text-ink">{rec.university}</h4>
                    </div>
                    <p className="text-[13px] text-slate">{rec.major} &middot; {rec.features}</p>
                  </div>
                  <span className="shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-extrabold" style={{ background: c.bg, color: c.color }}>
                    {rec.averageRank}
                  </span>
                </div>
                <div className="rounded-lg p-3 mt-2" style={{ background: c.bg }}>
                  <p className="text-[13px] leading-[1.7] text-ink/70">
                    <span className="font-bold" style={{ color: c.color }}>전략</span> &mdash; {rec.strategy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StrengthsTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.strengths.map((s, i) => (
        <Card key={i} title={s.title} icon={`S${i + 1}`} accent="#1DAA6B">
          <p className="mb-5 text-[14px] leading-[1.9] text-ink/70">{s.description}</p>
          {s.evidence.length > 0 && (
            <div className="space-y-2">
              {s.evidence.map((e, j) => (
                <div key={j} className="flex items-start gap-3 rounded-lg bg-green/5 border border-green/10 p-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[13px] leading-[1.6] text-ink/70">{e}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}
    </>
  );
}

function WeaknessesTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.weaknesses.map((w, i) => (
        <Card key={i} title={w.title} icon={`W${i + 1}`} accent="#E8A817">
          <p className="mb-5 text-[14px] leading-[1.9] text-ink/70">{w.description}</p>
          {w.suggestions.length > 0 && (
            <div className="space-y-2">
              {w.suggestions.map((s, j) => (
                <div key={j} className="flex items-start gap-3 rounded-lg bg-amber/5 border border-amber/10 p-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-[10px] font-bold text-white">{j + 1}</span>
                  <p className="text-[13px] leading-[1.6] text-ink/70">{s}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}
    </>
  );
}

function MajorsTab({ data }: { data: AnalysisResult }) {
  const medals = ["#FFD700", "#C0C0C0", "#CD7F32", "#94A3B8"];
  return (
    <div className="space-y-4">
      {data.majorRecommendations.map((m, i) => (
        <div key={i} className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-1.5 shrink-0" style={{ background: medals[i] }} />
            <div className="flex-1 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-extrabold text-white" style={{ background: medals[i] }}>
                  {m.rank}
                </span>
                <div>
                  <h4 className="text-[17px] font-bold text-ink">{m.major}</h4>
                  <p className="text-[11px] font-semibold text-slate">{i === 0 ? "최우선 추천" : i === 1 ? "강력 추천" : "추천"}</p>
                </div>
              </div>
              <p className="mb-4 text-[14px] leading-[1.8] text-ink/70">{m.fitReason}</p>
              <div className="flex flex-wrap gap-2">
                {m.strengths.map((s, j) => (
                  <span key={j} className="rounded-full bg-primary/8 px-3.5 py-1.5 text-[12px] font-semibold text-primary">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InterviewTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.interviewStories.map((s, i) => (
        <Card key={i} title={s.title} icon={`Q${i + 1}`} accent="#448CFF">
          <p className="mb-5 text-[14px] leading-[1.9] text-ink/70">{s.description}</p>
          <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg, #EDF4FF 0%, #E8F0FE 100%)" }}>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-primary">면접 핵심 포인트</p>
            <div className="space-y-2.5">
              {s.keyPoints.map((p, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">{j + 1}</span>
                  <p className="text-[13px] leading-[1.6] text-ink/70">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

function StrategyTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.improvementPlan && (
        <Card title="3학년 보강 방향" icon="PL" accent="#1DAA6B">
          <p className="whitespace-pre-wrap text-[14px] leading-[1.9] text-ink/70">{data.improvementPlan}</p>
        </Card>
      )}

      {data.subjectStrategies.length > 0 && (
        <Card title="과목별 세특 보강 전략" icon="SB">
          <div className="space-y-4">
            {data.subjectStrategies.map((s, i) => (
              <div key={i} className="rounded-xl bg-paper border border-line p-5">
                <h4 className="mb-2 text-[15px] font-bold text-ink">{s.subject}</h4>
                <p className="mb-4 text-[13px] leading-[1.7] text-ink/60">{s.direction}</p>
                {s.goodPhrases.length > 0 && (
                  <div className="space-y-2 border-l-3 border-primary/30 pl-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary/50">추천 문장</p>
                    {s.goodPhrases.map((p, j) => (
                      <p key={j} className="text-[13px] italic leading-[1.7] text-primary/80">&ldquo;{p}&rdquo;</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {data.behaviorStrategy && (
        <Card title="행동특성 보강 전략" icon="BH" accent="#E8A817">
          <div className="whitespace-pre-wrap text-[14px] leading-[1.9] text-ink/70 [&>strong]:font-bold [&>strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: data.behaviorStrategy.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
          />
        </Card>
      )}

      {data.recommendedActivities.length > 0 && (
        <Card title="3학년 추천 활동" icon="AC" accent="#1DAA6B">
          <div className="grid gap-3 md:grid-cols-2">
            {data.recommendedActivities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-green/5 border border-green/10 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-[11px] font-bold text-white">{i + 1}</span>
                <p className="text-[13px] leading-[1.6] text-ink/70">{a}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
