import type { ProjectFeatureNotNumType } from "@/data/projectDetails";
import SubList from "./SubList";

// ─── Single trouble card ──────────────────────────────────────────────────────

function TroubleCard({ trouble }: { trouble: ProjectFeatureNotNumType }) {
  return (
    <div
      style={{
        borderRadius: "26px",
        padding: "30px",
        background: "var(--glass-bg)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid var(--glass-bd)",
        boxShadow:
          "0 28px 54px -30px rgba(90,100,180,.55), inset 0 1px 0 rgba(255,255,255,.92)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {/* 주요 기여 */}
        <SubList
          dotColor="#ff9a76"
          label="주요 기여"
          items={trouble.contributions}
        />

        {/* 결과 */}
        <SubList dotColor="#3cc7b4" label="결과" items={trouble.result} />
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

interface FeatureNotNumTypeSectionProps {
  troubles: ProjectFeatureNotNumType[];
}

export default function FeatureNotNumTypeSection({
  troubles,
}: FeatureNotNumTypeSectionProps) {
  if (troubles.length === 0) return null;

  return (
    <section style={{ marginTop: "56px" }}>
      <h2
        style={{
          fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-.6px",
          color: "var(--ink)",
          marginBottom: "24px",
        }}
      >
        주요 기여 및 성과
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {troubles.map((t, i) => (
          <TroubleCard key={i} trouble={t} />
        ))}
      </div>
    </section>
  );
}
