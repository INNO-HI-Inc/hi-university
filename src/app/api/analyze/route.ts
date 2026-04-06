import { NextRequest, NextResponse } from "next/server";
import { analyzeRecordServer } from "@/lib/analyze";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string" || text.trim().length < 50) {
      return NextResponse.json({ error: "생활기록부 텍스트를 50자 이상 입력해주세요." }, { status: 400 });
    }

    const result = await analyzeRecordServer(text);
    return NextResponse.json(result);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "분석 중 오류가 발생했습니다.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
