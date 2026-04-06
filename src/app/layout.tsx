import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 입시컨설팅 | 생활기록부 AI 분석",
  description: "생활기록부를 AI가 분석하여 맞춤형 대학 추천, 강점·약점 분석, 면접 전략을 제공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-paper text-ink antialiased">
        {/* ═══ NAV — vibeon 스타일 정확 복제 ═══ */}
        <nav className="sticky top-0 z-50 border-b border-line bg-white">
          <div className="mx-auto flex h-[52px] max-w-[1400px] items-center px-6">
            {/* 로고 */}
            <a href="/" className="mr-8 shrink-0 text-[22px] font-black tracking-tight text-primary">
              Vibeon
            </a>
            {/* 메뉴 — 로고 바로 옆에서 왼쪽 정렬로 흐름 */}
            <div className="hidden items-center gap-6 md:flex">
              <a href="/input" className="text-[14px] font-medium text-ink/80 transition hover:text-primary">AI 입시컨설팅</a>
              <a href="/input" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                AI분석
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/pricing" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                프로모션
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/demo" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                입시정보
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" className="text-[14px] font-medium text-ink/80 transition hover:text-primary">이용가이드</a>
            </div>
            {/* 우측: 아이콘 + 로그인 + 회원가입 + 바로진단 */}
            <div className="ml-auto flex items-center gap-3">
              <a href="#" className="text-[13px] font-medium text-ink/60 transition hover:text-ink">
                로그인
              </a>
              <a href="#" className="rounded-full bg-primary px-4 py-[6px] text-[13px] font-bold text-white transition hover:bg-primary-dark">
                회원가입
              </a>
              <a href="/input" className="rounded-full bg-primary px-4 py-[6px] text-[13px] font-bold text-white transition hover:bg-primary-dark">
                바로진단
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* ═══ FOOTER ═══ */}
        <footer className="border-t border-line">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-8 py-8 md:grid-cols-3">
              <div>
                <h4 className="mb-3 text-[13px] font-bold text-ink">진학상담</h4>
                <ul className="space-y-2 text-[12px] text-slate">
                  <li><a href="/input" className="hover:text-ink">내신 2등급대 추천 대학은?</a></li>
                  <li><a href="/input" className="hover:text-ink">학종 vs 교과, 유리한 전형은?</a></li>
                  <li><a href="/input" className="hover:text-ink">3학년 세특 보강 전략</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[13px] font-bold text-ink">새소식</h4>
                <ul className="space-y-2 text-[12px] text-slate">
                  <li><a href="#" className="hover:text-ink">2027학년도 수시 일정 안내</a></li>
                  <li><a href="#" className="hover:text-ink">AI 분석 엔진 업데이트</a></li>
                  <li><a href="#" className="hover:text-ink">패키지 할인 이벤트</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[13px] font-bold text-ink">고객센터</h4>
                <ul className="space-y-2 text-[12px] text-slate">
                  <li>자주하는 질문</li>
                  <li><a href="/pricing" className="hover:text-ink">이용권 안내</a></li>
                  <li>학교생활기록부 다운로드 안내</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-line py-4 text-[11px] text-slate">
              <div className="flex items-center gap-4">
                <span className="font-black text-primary">Vibeon</span>
                <a href="#" className="hover:text-ink">이용약관</a>
                <a href="#" className="font-bold hover:text-ink">개인정보처리방침</a>
              </div>
              <div className="flex items-center gap-3">
                <span>&copy; 2026 Vibeon</span>
                {[0,1,2].map(i=>(
                  <span key={i} className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-[10px] text-slate">
                    {["f","X","in"][i]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
