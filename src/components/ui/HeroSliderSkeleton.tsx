import { Skeleton } from "@/components/ui/Skeleton";

export function HeroSliderSkeleton() {
  return (
    <div
      style={{
        borderRadius: "32px",
        overflow: "hidden",
        background: "rgba(255,255,255,.5)",
        border: "1px solid rgba(255,255,255,.85)",
        boxShadow:
          "0 40px 72px -34px rgba(90,100,180,.6), inset 0 1px 0 rgba(255,255,255,.95)",
        padding: "12px",
      }}
    >
      {/* 이미지 슬라이드 영역 */}
      <Skeleton
        style={{
          borderRadius: "22px",
          height: "460px",
          width: "100%",
          background: "rgba(170,182,230,.2)",
        }}
      />

      {/* 도트 인디케이터 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "9px",
          padding: "14px 0 6px",
        }}
      >
        {[26, 9, 9].map((w, i) => (
          <Skeleton
            key={i}
            style={{
              width: `${w}px`,
              height: "9px",
              borderRadius: "6px",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
