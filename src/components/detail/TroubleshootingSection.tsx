import Image from "next/image";
import type { ProjectTroubleshooting } from "@/data/projectDetails";

// ─── Sub-section: 문제 발견 / 해결 과정 / 결과 / 배운 점 ───────────────────────

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

// ─── PR link badge ────────────────────────────────────────────────────────────

function PrBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 13px",
        borderRadius: "10px",
        background: "#2b2d42",
        color: "#fff",
        fontWeight: 700,
        fontSize: "12.5px",
        boxShadow: "0 8px 16px -8px rgba(43,45,66,.5)",
      }}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      PR 보기
    </a>
  );
}

// ─── Single troubleshooting card ───────────────────────────────────────────

function TroubleshootingCard({ trouble }: { trouble: ProjectTroubleshooting }) {
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
    </div>
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
        트러블슈팅 경험
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {troubleshooting.map((t, i) => (
          <TroubleshootingCard key={i} trouble={t} />
        ))}
      </div>
    </section>
  );
}
