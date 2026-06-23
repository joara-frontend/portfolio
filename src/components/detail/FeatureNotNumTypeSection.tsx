import type { ProjectFeatureNotNumType } from "@/data/projectDetails";

// ─── Sub-section: 주요 기여 / 성과 / 결과 ───────────────────────────────

function SubList({
  dotColor,
  label,
  items,
}: {
  dotColor: string;
  label: string;
  items: string[];
}) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "11px",
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: dotColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--ink)",
            fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          }}
        >
          {label}
        </span>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          paddingLeft: "17px",
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <span
              style={{
                flexShrink: 0,
                marginTop: "8px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c2b8e8",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--ink-2)",
                wordBreak: "keep-all",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
