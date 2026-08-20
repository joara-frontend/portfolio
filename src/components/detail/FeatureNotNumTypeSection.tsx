import type { ProjectFeatureNotNumType } from "@/data/projectDetails";
import SubList from "./SubList";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";

// ─── Single trouble card ──────────────────────────────────────────────────────

function TroubleCard({ trouble }: { trouble: ProjectFeatureNotNumType }) {
  return (
    <GlassCard>
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
    </GlassCard>
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
      <SectionHeading>주요 기여 및 성과</SectionHeading>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {troubles.map((t, i) => (
          <TroubleCard key={i} trouble={t} />
        ))}
      </div>
    </section>
  );
}
