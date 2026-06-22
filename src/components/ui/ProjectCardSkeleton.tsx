import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardSkeletonProps {
  count?: number;
}

function CardSkeleton() {
  return (
    <div
      className="project-card"
      style={{ pointerEvents: "none", cursor: "default" }}
    >
      {/* 썸네일 영역 */}
      <div className="project-thumb">
        <Skeleton style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
      </div>

      {/* 바디 영역 */}
      <div className="project-body">
        {/* 제목 + 영문명 */}
        <div className="project-title-row" style={{ marginBottom: "14px" }}>
          <Skeleton style={{ width: "52%", height: "22px" }} />
          <Skeleton style={{ width: "26%", height: "14px", marginTop: "2px" }} />
        </div>

        {/* 설명 2줄 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
          <Skeleton style={{ width: "100%", height: "14px" }} />
          <Skeleton style={{ width: "78%", height: "14px" }} />
        </div>

        {/* 링크 버튼 2개 */}
        <div className="project-links">
          <Skeleton style={{ width: "80px", height: "36px", borderRadius: "12px" }} />
          <Skeleton style={{ width: "80px", height: "36px", borderRadius: "12px" }} />
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton({ count = 2 }: ProjectCardSkeletonProps) {
  return (
    <div className="projects-grid">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
