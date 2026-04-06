"use client";

import { useState } from "react";
import { sampleAnalysis } from "@/data/sample-analysis";
import type { AnalysisResult } from "@/types/record";

type Tab =
  | "overview"
  | "strengths"
  | "weaknesses"
  | "universities"
  | "majors"
  | "interview"
  | "strategy";

const tabs: { key: Tab; label: string }[] = [
  { key: "overview", label: "전체 진단" },
  { key: "universities", label: "대학 추천" },
  { key: "strengths", label: "강점 분석" },
  { key: "weaknesses", label: "보완 포인트" },
  { key: "majors", label: "학과 적합성" },
  { key: "interview", label: "면접 스토리" },
  { key: "strategy", label: "보강 전략" },
];

export default function DemoPage() {
  const data = sampleAnalysis;
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="hero-dark">
        <div className="mx-auto max-w-[1100px] px-6 py-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cta/20 px-3 py-1 text-[11px] font-bold text-cta">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cta" />
              DEMO
            </span>
            <span className="text-[13px] text-white/40">
              샘플 데이터 기반 분석 결과입니다
            </span>
          </div>
          <h1 className="text-[28px] font-extrabold text-white md:text-[36px]">
            {data.studentName} 학생 종합 컨설팅 리포트
          </h1>
          <p className="mt-2 text-[14px] text-white/40">
            {new Date(data.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            분석
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6">
        {/* Tabs */}
        <div className="sticky top-[52px] z-40 -mt-1 bg-paper pt-4 pb-2">
          <div className="flex gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-sm border border-line">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-[13px] font-bold transition ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate hover:bg-paper hover:text-ink"
                }`}
              >
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
      </div>
    </div>
  );
}

/* --- Shared Components --- */

function Card({
  title,
  children,
  badge,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-7 shadow-sm ${className}`}>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[17px] font-bold text-ink">{title}</h3>
        {badge && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/* --- Tab Components --- */

function OverviewTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "내신 평균", value: "2.1등급", sub: "자연계열 상위권", color: "text-primary", bg: "bg-primary/8" },
          { label: "추천 대학", value: "8개교", sub: "상향 2 / 적정 3 / 안정·안전 3", color: "text-green", bg: "bg-green/8" },
          { label: "강점 영역", value: "4개", sub: "진로일관성·수학·구현력·행특", color: "text-blue", bg: "bg-blue/8" },
          { label: "면접 스토리", value: "3개", sub: "핵심 스토리라인 추출", color: "text-amber", bg: "bg-amber/8" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <p className="text-[12px] font-medium text-slate">{stat.label}</p>
            <p className={`mt-1 text-[24px] font-extrabold ${stat.color}`}>{stat.value}</p>
            <p className="mt-1 text-[11px] text-slate">{stat.sub}</p>
          </div>
        ))}
      </div>

      <Card title="전체 진단">
        <p className="whitespace-pre-wrap text-[14px] leading-[1.8] text-ink/70">{data.overallDiagnosis}</p>
      </Card>

      {data.strategyPoints && (
        <Card title="전략 포인트 요약">
          <div
            className="whitespace-pre-wrap text-[14px] leading-[1.8] text-ink/70 [&>strong]:font-bold [&>strong]:text-ink"
            dangerouslySetInnerHTML={{
              __html: data.strategyPoints.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </Card>
      )}

      {data.finalAssessment && (
        <Card title="학부모님께 드리는 최종 판단">
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-6">
            <p className="whitespace-pre-wrap text-[14px] leading-[1.8] text-ink/80">{data.finalAssessment}</p>
          </div>
        </Card>
      )}
    </>
  );
}

function UniversitiesTab({ data }: { data: AnalysisResult }) {
  const tierConfig: Record<string, { bg: string; text: string; border: string }> = {
    "상향": { bg: "bg-red/5", text: "text-red", border: "border-red/15" },
    "적정": { bg: "bg-amber/5", text: "text-amber", border: "border-amber/15" },
    "안정": { bg: "bg-green/5", text: "text-green", border: "border-green/15" },
    "안전": { bg: "bg-blue/5", text: "text-blue", border: "border-blue/15" },
  };

  const grouped = data.universityRecommendations.reduce(
    (acc, rec) => {
      if (!acc[rec.tier]) acc[rec.tier] = [];
      acc[rec.tier].push(rec);
      return acc;
    },
    {} as Record<string, typeof data.universityRecommendations>
  );

  const tierOrder = ["상향", "적정", "안정", "안전"];

  return (
    <>
      {tierOrder.map((tier) => {
        const recs = grouped[tier];
        if (!recs) return null;
        const config = tierConfig[tier] ?? { bg: "bg-paper", text: "text-ink", border: "border-line" };
        return (
          <Card key={tier} title={`${tier} 지원`} badge={`${recs.length}개교`}>
            <div className="space-y-4">
              {recs.map((rec, i) => (
                <div key={i} className={`rounded-xl border p-5 ${config.bg} ${config.border}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-[16px] font-bold text-ink">
                        {rec.university}{" "}
                        <span className="font-normal text-slate">{rec.major}</span>
                      </h4>
                      <p className="mt-1 text-[12px] text-slate">{rec.features}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold ${config.bg} ${config.text}`}>
                      {rec.averageRank}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.7] text-ink/60">
                    <span className="font-semibold text-ink/80">전략:</span> {rec.strategy}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
}

function StrengthsTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.strengths.map((s, i) => (
        <Card key={i} title={s.title}>
          <p className="mb-5 text-[14px] leading-[1.8] text-ink/70">{s.description}</p>
          {s.evidence.length > 0 && (
            <div className="rounded-xl bg-green/5 border border-green/15 p-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-green">근거</p>
              <ul className="space-y-2">
                {s.evidence.map((e, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-ink/70">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {e}
                  </li>
                ))}
              </ul>
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
        <Card key={i} title={w.title}>
          <p className="mb-5 text-[14px] leading-[1.8] text-ink/70">{w.description}</p>
          {w.suggestions.length > 0 && (
            <div className="rounded-xl bg-amber/5 border border-amber/15 p-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-amber">보완 제안</p>
              <ul className="space-y-2">
                {w.suggestions.map((s, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-ink/70">
                    <span className="mt-0.5 shrink-0 font-bold text-amber">&#8594;</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      ))}
    </>
  );
}

function MajorsTab({ data }: { data: AnalysisResult }) {
  const rankColors = [
    "bg-cta text-ink",
    "bg-primary/15 text-primary",
    "bg-amber/15 text-amber",
    "bg-line text-slate",
  ];

  return (
    <>
      {data.majorRecommendations.map((m, i) => (
        <Card key={i} title={m.major}>
          <div className="mb-4 flex items-center gap-3">
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-extrabold ${rankColors[i] ?? "bg-line text-slate"}`}>
              {m.rank}
            </span>
            <span className="text-[13px] font-semibold text-slate">
              {i === 0 ? "최우선 추천" : i === 1 ? "강력 추천" : "추천"}
            </span>
          </div>
          <p className="mb-5 text-[14px] leading-[1.8] text-ink/70">{m.fitReason}</p>
          <div className="flex flex-wrap gap-2">
            {m.strengths.map((s, j) => (
              <span key={j} className="rounded-full bg-primary/8 px-3.5 py-1.5 text-[12px] font-semibold text-primary">
                {s}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </>
  );
}

function InterviewTab({ data }: { data: AnalysisResult }) {
  return (
    <>
      {data.interviewStories.map((s, i) => (
        <Card key={i} title={`스토리 ${i + 1}. ${s.title}`}>
          <p className="mb-5 text-[14px] leading-[1.8] text-ink/70">{s.description}</p>
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-primary">면접 핵심 포인트</p>
            <ul className="space-y-2.5">
              {s.keyPoints.map((p, j) => (
                <li key={j} className="flex items-start gap-2.5 text-[13px] text-ink/70">
                  <span className="mt-0.5 shrink-0 text-primary">&#10022;</span>
                  {p}
                </li>
              ))}
            </ul>
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
        <Card title="3학년 보강 방향">
          <p className="whitespace-pre-wrap text-[14px] leading-[1.8] text-ink/70">{data.improvementPlan}</p>
        </Card>
      )}

      {data.subjectStrategies.length > 0 && (
        <Card title="과목별 세특 보강 전략">
          <div className="space-y-6">
            {data.subjectStrategies.map((s, i) => (
              <div key={i} className="rounded-xl bg-paper border border-line p-6">
                <h4 className="mb-3 text-[15px] font-bold text-ink">{s.subject}</h4>
                <p className="mb-4 text-[13px] leading-[1.7] text-ink/60">{s.direction}</p>
                {s.goodPhrases.length > 0 && (
                  <div className="space-y-2 border-l-2 border-primary/30 pl-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary/60">추천 문장 방향</p>
                    {s.goodPhrases.map((p, j) => (
                      <p key={j} className="text-[13px] italic leading-[1.7] text-primary/80">
                        &ldquo;{p}&rdquo;
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {data.behaviorStrategy && (
        <Card title="행동특성 및 종합의견 보강 전략">
          <div
            className="whitespace-pre-wrap text-[14px] leading-[1.8] text-ink/70 [&>strong]:font-bold [&>strong]:text-ink"
            dangerouslySetInnerHTML={{
              __html: data.behaviorStrategy.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </Card>
      )}

      {data.recommendedActivities.length > 0 && (
        <Card title="3학년 추천 활동">
          <div className="space-y-3">
            {data.recommendedActivities.map((a, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl bg-green/5 border border-green/15 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-[13px] leading-[1.7] text-ink/70">{a}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
