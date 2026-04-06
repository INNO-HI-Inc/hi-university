import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 입시컨설팅 | 생활기록부 AI 분석",
  description: "생활기록부를 AI가 분석하여 맞춤형 대학 추천, 강점·약점 분석, 면접 전략을 제공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-paper text-ink antialiased">
        {/* ═══ NAV ═══ */}
        <nav className="sticky top-0 z-50 border-b border-line bg-white">
          <div className="mx-auto flex h-[52px] max-w-[1400px] items-center px-6">
            <Link href="/" className="mr-8 shrink-0 text-[22px] font-black tracking-tight text-primary">
              HiUni
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link href="/input" className="text-[14px] font-medium text-ink/80 transition hover:text-primary">AI 입시컨설팅</Link>
              <Link href="/input" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                AI분석
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/pricing" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                프로모션
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/demo" className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition hover:text-primary">
                입시정보
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4L5 6.5 7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/pricing" className="text-[14px] font-medium text-ink/80 transition hover:text-primary">이용가이드</Link>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Link href="#" className="text-[13px] font-medium text-ink/60 transition hover:text-ink">
                로그인
              </Link>
              <Link href="#" className="rounded-full bg-primary px-4 py-[6px] text-[13px] font-bold text-white transition hover:bg-primary-dark">
                회원가입
              </Link>
              <Link href="/input" className="rounded-full bg-primary px-4 py-[6px] text-[13px] font-bold text-white transition hover:bg-primary-dark">
                바로진단
              </Link>
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
                  <li><Link href="/input" className="hover:text-ink">내신 2등급대 추천 대학은?</Link></li>
                  <li><Link href="/input" className="hover:text-ink">학종 vs 교과, 유리한 전형은?</Link></li>
                  <li><Link href="/input" className="hover:text-ink">3학년 세특 보강 전략</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[13px] font-bold text-ink">새소식</h4>
                <ul className="space-y-2 text-[12px] text-slate">
                  <li><Link href="#" className="hover:text-ink">2027학년도 수시 일정 안내</Link></li>
                  <li><Link href="#" className="hover:text-ink">AI 분석 엔진 업데이트</Link></li>
                  <li><Link href="#" className="hover:text-ink">패키지 할인 이벤트</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-[13px] font-bold text-ink">고객센터</h4>
                <ul className="space-y-2 text-[12px] text-slate">
                  <li>자주하는 질문</li>
                  <li><Link href="/pricing" className="hover:text-ink">이용권 안내</Link></li>
                  <li>학교생활기록부 다운로드 안내</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-line py-4 text-[11px] text-slate">
              <div className="flex items-center gap-4">
                <span className="font-black text-primary">HiUni</span>
                <Link href="#" className="hover:text-ink">이용약관</Link>
                <Link href="#" className="font-bold hover:text-ink">개인정보처리방침</Link>
              </div>
              <div className="flex items-center gap-3">
                <span>&copy; 2026 HiUni</span>
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
