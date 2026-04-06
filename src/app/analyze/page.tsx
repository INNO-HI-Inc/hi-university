"use client";

import { useState } from "react";
import Link from "next/link";
import { analyzeRecord } from "@/lib/analyze";
import type { AnalysisResult } from "@/types/record";

const PLACEHOLDER = `여기에 생활기록부 텍스트를 붙여넣으세요.

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
프로그래밍 동아리에서 후배 교육을 자발적으로 담당하며...`;

export default function AnalyzePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (text.trim().length < 50) {
      setError("생활기록부 텍스트를 50자 이상 입력해주세요.");
      return;
    }
    setError("");
    setLoading(true);
    setProgress("AI가 생기부를 분석하고 있습니다...");

    const steps = [
      "교과 성적 패턴 분석 중...",
      "세특 키워드 추출 중...",
      "대학별 합격 가능성 계산 중...",
      "맞춤형 전략 수립 중...",
      "리포트 생성 중...",
    ];
    let stepIdx = 0;
    const timer = setInterval(() => {
      stepIdx = Math.min(stepIdx + 1, steps.length - 1);
      setProgress(steps[stepIdx]);
    }, 3000);

    try {
      const data = await analyzeRecord(text);
      setResult(data);
      // 결과를 localStorage에 저장하여 리포트 페이지에서 활용
      localStorage.setItem("analysisResult", JSON.stringify(data));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "분석 중 오류가 발생했습니다.");
    } finally {
      clearInterval(timer);
      setLoading(false);
      setProgress("");
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-paper">
        <div className="mx-auto max-w-[800px] px-4 md:px-6 py-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green/10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1DAA6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <h1 className="text-[28px] font-extrabold text-ink mb-2">분석 완료!</h1>
          <p className="text-[15px] text-slate mb-2">{result.studentName} 학생의 종합 컨설팅 리포트가 생성되었습니다.</p>
          <p className="text-[13px] text-slate/60 mb-8">대학 {result.universityRecommendations.length}개교 추천 · 강점 {result.strengths.length}개 · 면접 스토리 {result.interviewStories.length}개</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/report"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] transition hover:bg-primary-dark"
            >
              리포트 확인하기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <button
              onClick={() => { setResult(null); setText(""); }}
              className="text-[14px] font-medium text-slate hover:text-ink transition"
            >
              다시 분석하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-[800px] px-4 md:px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-[12px] font-bold tracking-[0.08em] uppercase text-primary">AI ANALYSIS</p>
          <h1 className="mb-2 text-[28px] font-extrabold tracking-tight text-ink">생기부 AI 분석</h1>
          <p className="text-[15px] text-slate">생활기록부 텍스트를 붙여넣으면 AI가 종합 컨설팅 리포트를 생성합니다.</p>
        </div>

        {/* How it works */}
        <div className="mb-8 grid grid-cols-3 gap-3">
          {[
            { n: "01", t: "생기부 붙여넣기", d: "교과성적, 세특, 행특 등" },
            { n: "02", t: "AI 분석", d: "GPT-4o가 정밀 분석" },
            { n: "03", t: "리포트 확인", d: "30페이지+ 맞춤 전략" },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-line bg-white p-4 text-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[11px] font-bold text-white mb-2">{s.n}</span>
              <p className="text-[13px] font-bold text-ink">{s.t}</p>
              <p className="text-[11px] text-slate mt-0.5">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Textarea */}
        <div className="mb-4">
          <label className="mb-2 block text-[13px] font-bold text-ink">생활기록부 텍스트</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={PLACEHOLDER}
            rows={16}
            disabled={loading}
            className="w-full rounded-xl border border-line bg-white px-5 py-4 text-[14px] leading-[1.8] text-ink placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition disabled:opacity-50 resize-y"
          />
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[11px] text-slate">{text.length.toLocaleString()}자 입력됨</p>
            <p className="text-[11px] text-slate">최소 50자 이상</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red/5 border border-red/15 px-4 py-3 text-[13px] text-red">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleAnalyze}
          disabled={loading || text.trim().length < 50}
          className="w-full rounded-xl bg-primary py-4 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(68,140,255,0.3)] transition hover:bg-primary-dark active:scale-[0.99] disabled:opacity-40 disabled:shadow-none"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
              </svg>
              {progress}
            </span>
          ) : (
            "AI 분석 시작"
          )}
        </button>

        <p className="mt-4 text-center text-[11px] text-slate">
          분석에 약 30초~1분 소요됩니다. 입력된 데이터는 서버에 저장되지 않습니다.
        </p>
      </div>
    </div>
  );
}
