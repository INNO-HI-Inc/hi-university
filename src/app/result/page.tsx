"use client";

import { useEffect, useState } from "react";
import { matchUniversities, type University } from "@/data/universities";

interface InputData {
  field: string;
  gradeLevel: string;
  grades: Record<string, Record<string, number>>;
  interest: string[];
  avg: number;
}

export default function ResultPage() {
  const [data, setData] = useState<InputData | null>(null);
  const [unis, setUnis] = useState<University[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("inputData");
    if (!raw) return;
    const parsed: InputData = JSON.parse(raw);
    setData(parsed);
    setUnis(matchUniversities(parsed.avg, parsed.field));
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-[15px] text-slate">성적 데이터가 없습니다.</p>
        <a href="/input" className="rounded-xl bg-primary px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-primary-dark">성적 입력하기</a>
      </div>
    );
  }

  const tierCount = { "상향": 0, "적정": 0, "안정": 0, "안전": 0 };
  unis.forEach((u) => tierCount[u.tier]++);

  const tc: Record<string, { text: string; bg: string; border: string }> = {
    "상향": { text: "text-red", bg: "bg-red/8", border: "border-red/20" },
    "적정": { text: "text-amber", bg: "bg-amber/8", border: "border-amber/20" },
    "안정": { text: "text-green", bg: "bg-green/8", border: "border-green/20" },
    "안전": { text: "text-blue", bg: "bg-blue/8", border: "border-blue/20" },
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-[1100px] px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-[12px] font-bold tracking-[0.08em] uppercase text-primary">ANALYSIS RESULT</p>
          <h1 className="mb-1 text-[28px] font-extrabold tracking-tight text-ink">대학 추천 결과</h1>
          <p className="text-[15px] text-slate">내신 평균 <span className="font-bold text-primary">{data.avg}등급</span> 기준 · {data.field} · {data.interest.join(", ")}</p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          <div className="rounded-xl border border-line bg-white p-4 text-center">
            <div className="text-[11px] text-slate">내신 평균</div>
            <div className="num mt-1 text-[24px] font-extrabold text-primary">{data.avg}</div>
            <div className="text-[10px] text-slate">등급</div>
          </div>
          {(["상향", "적정", "안정", "안전"] as const).map((t) => (
            <div key={t} className={`rounded-xl border ${tc[t].border} ${tc[t].bg} p-4 text-center`}>
              <div className={`text-[11px] ${tc[t].text} font-bold`}>{t}</div>
              <div className={`num mt-1 text-[24px] font-extrabold ${tc[t].text}`}>{tierCount[t]}</div>
              <div className="text-[10px] text-slate">개교</div>
            </div>
          ))}
        </div>

        {/* 대학 리스트 */}
        <div className="mb-6 overflow-hidden rounded-xl border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3">
            <span className="text-[13px] font-bold text-ink">추천 대학 목록</span>
            <span className="text-[11px] text-slate">총 {unis.length}개교</span>
          </div>

          <div className="hidden md:grid grid-cols-[60px_1fr_1fr_80px_1fr] items-center border-b border-line bg-paper px-5 py-2.5 text-[11px] font-bold text-slate">
            <span>구분</span><span>대학</span><span>학과</span><span>내신</span><span>전형</span>
          </div>

          {unis.map((u, i) => (
            <div key={i} className="grid md:grid-cols-[60px_1fr_1fr_80px_1fr] items-center border-b border-line/50 px-5 py-3 text-[13px] transition-colors hover:bg-paper/50 gap-1 md:gap-0">
              <span className={`inline-block w-fit rounded px-2 py-0.5 text-[10px] font-bold ${tc[u.tier].text} ${tc[u.tier].bg}`}>{u.tier}</span>
              <span className="font-semibold text-ink">{u.name}</span>
              <span className="text-slate">{u.major}</span>
              <span className="num text-slate">{u.minGrade}~{u.maxGrade}</span>
              <span className="text-slate">{u.type}</span>
            </div>
          ))}
        </div>

        <p className="mb-10 text-center text-[12px] text-slate">
          * 내신 등급 기준 추정치이며, 실제 합격 여부는 세특·활동 등 정성평가에 따라 달라질 수 있습니다.
        </p>

        {/* 유료 콘텐츠 미리보기 */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-line" />
            <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-cta-dark">PREMIUM ANALYSIS</span>
            <div className="h-px flex-1 bg-line" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "강점 & 약점 심층 분석", desc: "진로 일관성, 수학적 사고력, 구현 경험 등 6개 영역 정량 평가", icon: "01" },
            { title: "면접 핵심 스토리 3개", desc: "학생부 기반 면접 스토리라인 추출 + 예상 질문", icon: "02" },
            { title: "세특·행특 보강 전략", desc: "과목별 3학년 세특 방향 + 추천 문장 예시 제공", icon: "03" },
            { title: "AI 모의면접 시뮬레이션", desc: "대학·전형·전공별 맞춤 면접 연습 (실시간 피드백)", icon: "04" },
            { title: "월별 3학년 전략 타임라인", desc: "4월~12월까지 월별 활동·시험·준비 가이드", icon: "05" },
            { title: "AI 세특 작성 가이드", desc: "분석 뿐 아니라 세특 문장을 직접 작성하는 AI 도우미", icon: "06" },
          ].map((item) => (
            <div key={item.icon} className="group relative overflow-hidden rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[11px] font-bold text-white">{item.icon}</span>
                  <h3 className="text-[14px] font-bold text-ink">{item.title}</h3>
                </div>
                <p className="mb-4 text-[13px] text-slate">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-primary">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1v6m0 0v6m0-6h6m-6 0H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  상세 분석 잠금
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl hero-dark p-10 text-center">
          <h2 className="mb-2 text-[22px] font-extrabold text-white">전체 분석 리포트 받기</h2>
          <p className="mb-6 text-[14px] text-white/40">강점 분석, 면접 전략, 세특 보강, AI 모의면접까지 한번에</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/pricing" className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 text-[15px] font-bold text-ink shadow-[0_6px_28px_rgba(168,232,71,0.3)] transition-all duration-200 hover:bg-cta-dark active:scale-[0.97]">
              이용권 보기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/demo" className="text-[14px] font-medium text-white/40 transition hover:text-white">
              데모 리포트 먼저 보기
            </a>
          </div>
        </div>
      </div>

      {/* Paywall Modal */}
      {showPaywall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm" onClick={() => setShowPaywall(false)}>
          <div className="mx-4 max-w-md rounded-2xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-2 text-[20px] font-extrabold text-ink">상세 분석을 확인하려면</h3>
            <p className="mb-6 text-[14px] text-slate">이용권을 구매하시면 30페이지 이상의 상세 리포트를 즉시 확인할 수 있습니다.</p>
            <a href="/pricing" className="block w-full rounded-xl bg-primary py-3 text-center text-[15px] font-bold text-white transition hover:bg-primary-dark">이용권 보기</a>
            <button onClick={() => setShowPaywall(false)} className="mt-3 w-full py-2 text-center text-[13px] text-slate">닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}
