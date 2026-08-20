import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Content, Part } from "@google/generative-ai";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { systemPrompt } from "@/lib/prompts/systemPrompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function isTextPart(value: unknown): value is Part {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { text?: unknown }).text === "string"
  );
}

function isContentList(value: unknown): value is Content[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as { role?: unknown }).role === "string" &&
        Array.isArray((item as { parts?: unknown }).parts) &&
        (item as { parts: unknown[] }).parts.every(isTextPart),
    )
  );
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const messages =
      typeof body === "object" && body !== null
        ? (body as { messages?: unknown }).messages
        : undefined;

    if (!isContentList(messages)) {
      return NextResponse.json(
        { error: "잘못된 요청 형식입니다." },
        { status: 400 },
      );
    }

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
        {
          error:
            "죄송해요, 현재 무료 API 사용량 한도에 도달해 답변이 어려운 상태예요. 서버에 문제가 생긴 건 아니니 안심하셔도 돼요 😊\n\n궁금한 점이 있으시면 whdkfk110@naver.com으로 편하게 연락 부탁드려요!",
        },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
