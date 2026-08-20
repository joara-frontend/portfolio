"use client";

import { useRef, useEffect } from "react";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";

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
      <SectionHeading>이벤트 페이지</SectionHeading>

      <GlassCard style={{ padding: 0, overflow: "hidden" }}>
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
      </GlassCard>
    </section>
  );
}
