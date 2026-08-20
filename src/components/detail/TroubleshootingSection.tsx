import Image from "next/image";
import type { ProjectTroubleshooting } from "@/data/projectDetails";
import PrBadge from "./PrBadge";
import SubList from "./SubList";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";

// ─── Single troubleshooting card ───────────────────────────────────────────

function TroubleshootingCard({ trouble }: { trouble: ProjectTroubleshooting }) {
  return (
    <GlassCard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "18px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Quicksand', 'Pretendard', sans-serif",
            fontSize: "21px",
            fontWeight: 700,
            color: "var(--ink)",
            margin: 0,
            lineHeight: 1.4,
            wordBreak: "keep-all",
          }}
        >
          {trouble.title}
        </h3>
        {trouble.pr && <PrBadge href={trouble.pr} />}
      </div>

      {trouble.image && (
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "22px",
            background: "var(--track-bg)",
          }}
        >
          <Image
            src={trouble.image.src}
            width={1440}
            height={720}
            alt={trouble.image.alt}
            className="detail-feat-img"
          />
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <SubList dotColor="#ff9a76" label="문제 발견" items={trouble.found} />
        <SubList dotColor="#6c7cf0" label="해결 과정" items={trouble.process} />

        {trouble.code && (
          <pre
            style={{
              margin: "2px 0",
              padding: "18px 20px",
              borderRadius: "16px",
              background: "#2b2d42",
              color: "#e7eaff",
              fontFamily: "'SFMono-Regular', ui-monospace, monospace",
              fontSize: "13px",
              lineHeight: 1.7,
              overflowX: "auto",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.08)",
              whiteSpace: "pre",
            }}
          >
            <code>{trouble.code.code}</code>
          </pre>
        )}

        <SubList dotColor="#3cc7b4" label="결과" items={trouble.result} />

        <div
          style={{
            borderRadius: "16px",
            padding: "16px 18px",
            background: "rgba(108,124,240,.07)",
            border: "1px solid rgba(108,124,240,.14)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "9px",
            }}
          >
            <span style={{ fontSize: "14px" }}>💡</span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#5566e0",
                fontFamily: "'Quicksand', 'Pretendard', sans-serif",
              }}
            >
              배운 점
            </span>
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {trouble.lesson.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "8px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#6c7cf0",
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
      </div>
    </GlassCard>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

interface TroubleshootingSectionProps {
  troubleshooting: ProjectTroubleshooting[];
}

export default function TroubleshootingSection({
  troubleshooting,
}: TroubleshootingSectionProps) {
  if (troubleshooting.length === 0) return null;

  return (
    <section style={{ marginTop: "56px" }}>
      <SectionHeading>트러블슈팅 경험</SectionHeading>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {troubleshooting.map((t, i) => (
          <TroubleshootingCard key={i} trouble={t} />
        ))}
      </div>
    </section>
  );
}
