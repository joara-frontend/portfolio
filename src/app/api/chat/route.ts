import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/prompts/systemPrompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemPrompt,
    });

    const result = await model.generateContent({ contents: messages });
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
    console.error("Gemini API error:", error);

    const status = (error as { status?: number })?.status;
    if (status === 429) {
      return NextResponse.json(
        { error: "현재 AI 서비스 이용량이 초과되었습니다. 잠시 후 다시 시도해 주세요." },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
