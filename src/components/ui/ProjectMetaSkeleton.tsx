import { Skeleton } from "@/components/ui/Skeleton";

function MetaRowSkeleton() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
      {/* 라벨 chip */}
      <Skeleton
        style={{
          width: "68px",
          height: "32px",
          borderRadius: "9px",
          flexShrink: 0,
        }}
      />
      {/* 값 텍스트 */}
      <Skeleton style={{ width: "160px", height: "16px" }} />
    </div>
  );
}

export function ProjectMetaSkeleton() {
  return (
    <div style={{ marginTop: "34px" }}>
      {/* h1 제목 */}
      <Skeleton
        style={{
          width: "55%",
          height: "42px",
          marginBottom: "24px",
          borderRadius: "12px",
        }}
      />

      {/* 메타 rows: 기간 / 인원 / 담당 역할 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          marginBottom: "22px",
        }}
      >
        <MetaRowSkeleton />
        <MetaRowSkeleton />
        <MetaRowSkeleton />
      </div>

      {/* 프로젝트 설명 3줄 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          marginBottom: "24px",
        }}
      >
        <Skeleton style={{ width: "100%", height: "17px" }} />
        <Skeleton style={{ width: "92%", height: "17px" }} />
        <Skeleton style={{ width: "68%", height: "17px" }} />
      </div>

      {/* 기술 스택 chip 4개 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "9px",
          marginBottom: "24px",
        }}
      >
        {[72, 60, 88, 64].map((w, i) => (
          <Skeleton
            key={i}
            style={{ width: `${w}px`, height: "38px", borderRadius: "12px" }}
          />
        ))}
      </div>

      {/* 링크 chip 2개 */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Skeleton
          style={{ width: "110px", height: "38px", borderRadius: "12px" }}
        />
        <Skeleton
          style={{ width: "90px", height: "38px", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}
