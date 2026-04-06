"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SUBJECTS_NATURAL = ["국어", "수학", "영어", "물리학", "화학", "생명과학", "정보"];
const SUBJECTS_HUMANITIES = ["국어", "수학", "영어", "사회", "한국사", "경제", "정치와법"];
const SEMESTERS = ["1-1", "1-2", "2-1", "2-2"];
const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function InputPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [field, setField] = useState<"자연계" | "인문계">("자연계");
  const [gradeLevel, setGradeLevel] = useState<"2학년" | "3학년">("2학년");
  const [grades, setGrades] = useState<Record<string, Record<string, number>>>({});
  const [interest, setInterest] = useState<string[]>([]);

  const subjects = field === "자연계" ? SUBJECTS_NATURAL : SUBJECTS_HUMANITIES;
  const semesters = gradeLevel === "2학년" ? SEMESTERS.slice(0, 4) : SEMESTERS;

  const interests_natural = ["컴퓨터공학", "인공지능", "데이터사이언스", "소프트웨어공학", "전자공학", "기계공학", "생명공학", "수학과", "물리학과", "화학공학"];
  const interests_humanities = ["경영학", "경제학", "심리학", "미디어커뮤니케이션", "국제학", "행정학", "사회학", "법학", "정치외교", "교육학"];
  const interestList = field === "자연계" ? interests_natural : interests_humanities;

  const setGrade = (subj: string, sem: string, val: number) => {
    setGrades((prev) => ({ ...prev, [subj]: { ...(prev[subj] || {}), [sem]: val } }));
  };

  const getAvg = () => {
    const all: number[] = [];
    Object.values(grades).forEach((sems) => Object.values(sems).forEach((g) => { if (g) all.push(g); }));
    if (all.length === 0) return 0;
    return Math.round((all.reduce((a, b) => a + b, 0) / all.length) * 10) / 10;
  };

  const filledCount = () => {
    let c = 0;
    Object.values(grades).forEach((sems) => Object.values(sems).forEach((g) => { if (g) c++; }));
    return c;
  };

  const totalCells = subjects.length * semesters.length;

  const handleSubmit = () => {
    const avg = getAvg();
    if (avg === 0) return;
    const data = { field, gradeLevel, grades, interest, avg };
    localStorage.setItem("inputData", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-[900px] px-6 py-16">
        {/* Progress */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-slate">STEP {step} / 3</span>
          </div>
          <div className="h-1 rounded-full bg-line">
            <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        </div>

        {/* Step 1: 기본 정보 */}
        {step === 1 && (
          <div>
            <h1 className="mb-2 text-[28px] font-extrabold tracking-tight text-ink">기본 정보를 선택해주세요</h1>
            <p className="mb-10 text-[15px] text-slate">계열과 학년을 선택하면 맞춤형 성적 입력표가 생성됩니다.</p>

            <div className="mb-8">
              <label className="mb-3 block text-[13px] font-bold text-ink">계열</label>
              <div className="flex gap-3">
                {(["자연계", "인문계"] as const).map((f) => (
                  <button key={f} onClick={() => setField(f)}
                    className={`flex-1 rounded-xl border-2 px-6 py-4 text-[15px] font-bold transition-all duration-200 ${
                      field === f ? "border-primary bg-primary/5 text-primary" : "border-line bg-white text-slate hover:border-primary/30"
                    }`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="mb-3 block text-[13px] font-bold text-ink">현재 학년</label>
              <div className="flex gap-3">
                {(["2학년", "3학년"] as const).map((g) => (
                  <button key={g} onClick={() => setGradeLevel(g)}
                    className={`flex-1 rounded-xl border-2 px-6 py-4 text-[15px] font-bold transition-all duration-200 ${
                      gradeLevel === g ? "border-primary bg-primary/5 text-primary" : "border-line bg-white text-slate hover:border-primary/30"
                    }`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setStep(2)}
              className="w-full rounded-xl bg-primary py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.99]">
              다음으로
            </button>
          </div>
        )}

        {/* Step 2: 성적 입력 */}
        {step === 2 && (
          <div>
            <h1 className="mb-2 text-[28px] font-extrabold tracking-tight text-ink">교과 성적을 입력해주세요</h1>
            <p className="mb-2 text-[15px] text-slate">각 과목별 학기 등급(1~9)을 선택해주세요. 미이수 과목은 비워두세요.</p>
            <p className="mb-8 text-[13px] text-primary font-semibold">
              입력된 과목: {filledCount()} / {totalCells} &middot; 현재 평균: {getAvg() || "—"}등급
            </p>

            <div className="overflow-x-auto rounded-xl border border-line bg-white">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-line bg-paper">
                    <th className="px-4 py-3 text-left font-bold text-ink">과목</th>
                    {semesters.map((s) => (
                      <th key={s} className="px-3 py-3 text-center font-bold text-slate">{s.replace("-", "학년 ")}학기</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subj) => (
                    <tr key={subj} className="border-b border-line/50 transition-colors hover:bg-paper/50">
                      <td className="px-4 py-2.5 font-semibold text-ink">{subj}</td>
                      {semesters.map((sem) => (
                        <td key={sem} className="px-2 py-2">
                          <select
                            value={grades[subj]?.[sem] || ""}
                            onChange={(e) => setGrade(subj, sem, Number(e.target.value))}
                            className={`w-full rounded-lg border px-2 py-2 text-center text-[13px] font-bold transition-all duration-200 ${
                              grades[subj]?.[sem]
                                ? grades[subj][sem] <= 2 ? "border-primary/30 bg-primary/5 text-primary"
                                  : grades[subj][sem] <= 4 ? "border-green/30 bg-green/5 text-green"
                                  : "border-amber/30 bg-amber/5 text-amber"
                                : "border-line bg-white text-slate"
                            }`}
                          >
                            <option value="">—</option>
                            {GRADES.map((g) => <option key={g} value={g}>{g}등급</option>)}
                          </select>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex gap-3">
              <button onClick={() => setStep(1)} className="rounded-xl border-2 border-line px-6 py-4 text-[14px] font-bold text-slate transition hover:border-ink hover:text-ink">
                이전
              </button>
              <button onClick={() => { if (filledCount() > 0) setStep(3); }}
                disabled={filledCount() === 0}
                className="flex-1 rounded-xl bg-primary py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.99] disabled:opacity-40">
                다음으로
              </button>
            </div>
          </div>
        )}

        {/* Step 3: 관심 전공 */}
        {step === 3 && (
          <div>
            <h1 className="mb-2 text-[28px] font-extrabold tracking-tight text-ink">관심 전공을 선택해주세요</h1>
            <p className="mb-8 text-[15px] text-slate">최대 3개까지 선택할 수 있습니다. 선택한 전공 기준으로 대학을 추천합니다.</p>

            <div className="mb-10 flex flex-wrap gap-3">
              {interestList.map((i) => {
                const selected = interest.includes(i);
                return (
                  <button key={i}
                    onClick={() => {
                      if (selected) setInterest(interest.filter((x) => x !== i));
                      else if (interest.length < 3) setInterest([...interest, i]);
                    }}
                    className={`rounded-xl border-2 px-5 py-3 text-[14px] font-semibold transition-all duration-200 ${
                      selected ? "border-primary bg-primary/5 text-primary" : "border-line bg-white text-slate hover:border-primary/30"
                    }`}>
                    {i}
                  </button>
                );
              })}
            </div>

            {/* 요약 카드 */}
            <div className="mb-8 rounded-xl border border-line bg-white p-6">
              <h3 className="mb-4 text-[14px] font-bold text-ink">입력 요약</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div><div className="text-[11px] text-slate">계열</div><div className="mt-0.5 text-[15px] font-bold text-ink">{field}</div></div>
                <div><div className="text-[11px] text-slate">학년</div><div className="mt-0.5 text-[15px] font-bold text-ink">{gradeLevel}</div></div>
                <div><div className="text-[11px] text-slate">내신 평균</div><div className="mt-0.5 text-[15px] font-bold text-primary">{getAvg()}등급</div></div>
                <div><div className="text-[11px] text-slate">관심 전공</div><div className="mt-0.5 text-[15px] font-bold text-ink">{interest.length}개</div></div>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="rounded-xl border-2 border-line px-6 py-4 text-[14px] font-bold text-slate transition hover:border-ink hover:text-ink">
                이전
              </button>
              <button onClick={handleSubmit}
                disabled={interest.length === 0}
                className="flex-1 rounded-xl bg-cta py-4 text-[15px] font-bold text-ink shadow-[0_4px_20px_rgba(168,232,71,0.3)] transition-all duration-200 hover:bg-cta-dark active:scale-[0.99] disabled:opacity-40">
                무료 대학 조회하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
