import Image from "next/image";
import type {
  ProjectFeatureNumType,
  DetailItem,
  DetailItemCode,
  DetailItemImage,
} from "@/data/projectDetails";

// ─── Code block (macOS terminal style) ───────────────────────────────────────

function CodeBlock({ item }: { item: DetailItemCode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <div
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow:
            "0 32px 60px -28px rgba(20,20,40,.55), 0 0 0 1px rgba(255,255,255,.06)",
        }}
      >
        {/* macOS header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 18px",
            background: "#141521",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginRight: "6px",
            }}
          >
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ff5f57",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ffbd2e",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#28c840",
                flexShrink: 0,
              }}
            />
          </span>
          <span
            style={{
              padding: "4px 14px",
              borderRadius: "7px",
              background: "rgba(255,255,255,.08)",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,.6)",
              fontFamily: "'SFMono-Regular', ui-monospace, monospace",
              letterSpacing: ".3px",
            }}
          >
            {item.language}
          </span>
        </div>

        {/* Code body */}
        <pre
          className="detail-feat-code"
          style={{
            margin: 0,
            padding: "22px 24px",
            background: "#1a1b2e",
            color: "#c8d3f5",
            fontFamily:
              "'SFMono-Regular', ui-monospace, 'Cascadia Code', monospace",
            fontSize: "13.5px",
            lineHeight: 1.75,
            whiteSpace: "pre",
            tabSize: 2,
          }}
        >
          <code>{item.code}</code>
        </pre>
      </div>

      {/* Description */}
      <div
        style={{
          marginTop: "12px",
          padding: "14px 16px",
          borderRadius: "12px",
          background: "rgba(108,124,240,.06)",
          borderLeft: "3px solid rgba(108,124,240,.3)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--ink-2)",
            wordBreak: "keep-all",
          }}
        >
          {item.alt}
        </p>
      </div>
    </div>
  );
}

// ─── Image block ──────────────────────────────────────────────────────────────

function ImageBlock({ item }: { item: DetailItemImage }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      {/* Glass frame */}
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid var(--glass-bd)",
          boxShadow:
            "0 24px 48px -24px rgba(90,100,180,.4), inset 0 1px 0 rgba(255,255,255,.9)",
          background: "var(--glass-bg)",
          padding: "6px",
        }}
      >
        <div
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            background: "var(--track-bg)",
          }}
        >
          <Image
            src={item.src}
            width={1440}
            height={900}
            alt={item.alt}
            className="detail-feat-img"
          />
        </div>
      </div>

      {/* Caption */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          padding: "0 4px",
        }}
      >
        <span
          style={{
            flexShrink: 0,
            marginTop: "5px",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(108,124,240,.45)",
            display: "inline-block",
          }}
        />
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.65,
            color: "var(--ink-3)",
            wordBreak: "keep-all",
          }}
        >
          {item.alt}
        </p>
      </div>
    </div>
  );
}

// ─── Details renderer (inside a feature card) ─────────────────────────────────

function FeatureNumTypeSection({ details }: { details: DetailItem[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        marginTop: "22px",
        paddingTop: "22px",
        borderTop: "1px solid rgba(108,124,240,.12)",
      }}
    >
      {details.map((item, i) =>
        item.type === "code" ? (
          <CodeBlock key={i} item={item} />
        ) : (
          <ImageBlock key={i} item={item} />
        ),
      )}
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

interface FeatureSectionProps {
  features: ProjectFeatureNumType[];
}

export default function FeatureSection({ features }: FeatureSectionProps) {
  if (features.length === 0) return null;

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
        주요 기능 개발
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              borderRadius: "24px",
              padding: "26px 28px",
              background: "var(--glass-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--glass-bd)",
              boxShadow:
                "0 24px 48px -30px rgba(90,100,180,.5), inset 0 1px 0 rgba(255,255,255,.9)",
            }}
          >
            {/* Number badge + title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "34px",
                  height: "34px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg,#7c8bf5,#6c7cf0)",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "'Quicksand', 'Pretendard', sans-serif",
                  boxShadow: "0 10px 20px -8px rgba(108,124,240,.7)",
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  fontFamily: "'Quicksand', 'Pretendard', sans-serif",
                  wordBreak: "keep-all",
                }}
              >
                {f.title}
              </span>
            </div>

            {/* Optional images / code snippets */}
            {f.details && f.details.length > 0 && (
              <FeatureNumTypeSection details={f.details} />
            )}

            {/* Bullet items */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              {f.items.map((item, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "11px",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "8px",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#6c7cf0",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "15.5px",
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
        ))}
      </div>
    </section>
  );
}
