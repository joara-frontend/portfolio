"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col" style={{ minHeight: "calc(100vh - 88px)", overflow: "hidden" }}>
      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-10 text-center">
        {/* 404 display */}
        <div className="mb-[18px] flex items-center justify-center gap-[6px]">
          <span
            className="font-main font-bold"
            style={{
              fontSize: "clamp(72px, 16vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "-6px",
              background: "linear-gradient(150deg,#6c7cf0,#9b8bff 52%,#ff9a76)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 22px 34px rgba(108,124,240,.32))",
            }}
          >
            4
          </span>

          {/* Animated orb (the "0") */}
          <div
            className="relative mx-[-6px]"
            style={{
              width: "clamp(72px, 14vw, 162px)",
              height: "clamp(72px, 14vw, 162px)",
              animation: "joOrb 7s ease-in-out infinite",
            }}
          >
            {/* Orb body */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 28%, #ffffff, #d3ddff 46%, #8ea2ff 100%)",
                boxShadow:
                  "0 34px 54px -22px rgba(100,118,235,.6), inset -12px -16px 30px rgba(95,115,220,.42), inset 10px 12px 24px rgba(255,255,255,.95)",
              }}
            />
            {/* Glossy spec */}
            <div
              className="absolute"
              style={{
                top: "20px",
                left: "30px",
                width: "46px",
                height: "30px",
                borderRadius: "50%",
                background: "rgba(255,255,255,.7)",
                filter: "blur(3px)",
                transform: "rotate(-24deg)",
              }}
            />
            {/* Eyes */}
            <div
              className="absolute left-1/2 top-1/2 flex items-center gap-5"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "7px",
                  borderRadius: "0 0 12px 12px",
                  background: "#5a63a8",
                  animation: "joBlink 5.5s ease-in-out infinite",
                  transformOrigin: "center",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "7px",
                  borderRadius: "0 0 12px 12px",
                  background: "#5a63a8",
                  animation: "joBlink 5.5s ease-in-out infinite",
                  transformOrigin: "center",
                }}
              />
            </div>
            {/* Mouth */}
            <div
              className="absolute left-1/2"
              style={{
                top: "62%",
                transform: "translateX(-50%)",
                width: "14px",
                height: "9px",
                borderRadius: "0 0 14px 14px",
                background: "#7a83c8",
                opacity: 0.75,
              }}
            />
            {/* Blush left */}
            <div
              className="absolute"
              style={{
                top: "58%",
                left: "24px",
                width: "18px",
                height: "11px",
                borderRadius: "50%",
                background: "rgba(255,150,118,.4)",
                filter: "blur(2px)",
              }}
            />
            {/* Blush right */}
            <div
              className="absolute"
              style={{
                top: "58%",
                right: "24px",
                width: "18px",
                height: "11px",
                borderRadius: "50%",
                background: "rgba(255,150,118,.4)",
                filter: "blur(2px)",
              }}
            />
          </div>

          <span
            className="font-main font-bold"
            style={{
              fontSize: "clamp(72px, 16vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "-6px",
              background: "linear-gradient(150deg,#6c7cf0,#9b8bff 52%,#ff9a76)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 22px 34px rgba(108,124,240,.32))",
            }}
          >
            4
          </span>
        </div>

        <h1
          className="font-main mb-[14px] font-bold"
          style={{
            fontSize: "38px",
            letterSpacing: "-1px",
            color: "var(--ink)",
          }}
        >
          페이지를 찾을 수 없어요
        </h1>
        <p
          className="max-w-[440px] leading-[1.7]"
          style={{ fontSize: "17px", color: "var(--ink-2)", marginBottom: "26px" }}
        >
          요청하신 페이지가 삭제되었거나, 주소가 잘못 입력되었어요.
          <br />
          아래 버튼으로 메인 페이지로 돌아가 주세요.
        </p>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            className="jo-btn"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "16px 28px",
              borderRadius: "18px",
              background: "linear-gradient(135deg,#7c8bf5,#6c7cf0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow:
                "0 18px 32px -12px rgba(108,124,240,.8),inset 0 1px 0 rgba(255,255,255,.5)",
            }}
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flex: "none" }}
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
            </svg>
            홈으로 돌아가기
          </Link>
          <button
            onClick={() => router.back()}
            className="jo-btn"
            style={{
              cursor: "pointer",
              fontFamily: "inherit",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "16px 28px",
              borderRadius: "18px",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-bd)",
              color: "var(--ink)",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow:
                "0 12px 24px -14px rgba(90,100,180,.5),inset 0 1px 0 rgba(255,255,255,.6)",
            }}
          >
            ← 이전 페이지로
          </button>
        </div>
      </main>
    </div>
  );
}
