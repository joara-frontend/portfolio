"use client";

import { useRef, useEffect } from "react";

export default function LotteFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // modal.html이 로드된 뒤 custom.js가 postMessage로 최종 높이를 전달
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (
        e.data?.type === "lotteHeight" &&
        typeof e.data.height === "number" &&
        iframeRef.current
      ) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // lotte.html 자체 로드 시 초기 높이 설정 (modal 주입 전 최소값)
  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const height =
        iframe.contentWindow?.document.documentElement.scrollHeight ?? 0;
      if (height > 0) iframe.style.height = `${height}px`;
    } catch {
      // 예외 방어
    }
  };

  return (
    <section style={{ marginTop: "56px" }}>
      <h2
        style={{
          fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-.6px",
          color: "#2b2d42",
          marginBottom: "24px",
        }}
      >
        이벤트 페이지
      </h2>

      {/* glass card — same design as FeatureNotNumTypeSection TroubleCard */}
      <div
        style={{
          borderRadius: "26px",
          overflow: "hidden",
          background: "rgba(255,255,255,.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.82)",
          boxShadow:
            "0 28px 54px -30px rgba(90,100,180,.55), inset 0 1px 0 rgba(255,255,255,.92)",
        }}
      >
        <iframe
          ref={iframeRef}
          src="/lotte/lotte.html"
          title="롯데인터넷면세점 이벤트페이지"
          onLoad={handleLoad}
          style={{
            width: "100%",
            border: "none",
            display: "block",
            minHeight: "400px",
          }}
        />
      </div>
    </section>
  );
}
