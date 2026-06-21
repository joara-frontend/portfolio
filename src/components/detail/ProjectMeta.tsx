import type { ProjectDetailData, ProjectDetailLink } from "@/data/projectDetails";

interface ProjectMetaProps {
  project: ProjectDetailData;
}

function MetaRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "blue" | "coral";
}) {
  const chipStyle: React.CSSProperties =
    accent === "coral"
      ? {
          background: "rgba(255,154,118,.14)",
          color: "#ef6c2d",
        }
      : {
          background: "rgba(108,124,240,.1)",
          color: "#5566e0",
        };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
      <span
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "68px",
          padding: "6px 12px",
          borderRadius: "9px",
          fontSize: "12.5px",
          fontWeight: 700,
          fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          ...chipStyle,
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: "15px", color: "#52566f", fontVariantNumeric: "tabular-nums" }}>
        {value}
      </span>
    </div>
  );
}

function LinkChip({ link }: { link: ProjectDetailLink }) {
  const isGitHub = link.label.toLowerCase().includes("github");
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`detail-link-chip ${isGitHub ? "github" : "live"}`}
    >
      {link.label}
    </a>
  );
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div style={{ marginTop: "34px" }}>
      {/* Title */}
      <h1
        style={{
          fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          letterSpacing: "-1px",
          color: "#2b2d42",
          marginBottom: "20px",
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </h1>

      {/* Meta rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          marginBottom: "20px",
        }}
      >
        <MetaRow label="기간" value={project.period} accent="blue" />
        <MetaRow label="인원" value={project.members} accent="blue" />
        {project.role && (
          <MetaRow label="담당 역할" value={project.role} accent="coral" />
        )}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "17px",
          lineHeight: 1.75,
          color: "#5a5e80",
          maxWidth: "680px",
          marginBottom: "22px",
          wordBreak: "keep-all",
        }}
      >
        {project.description}
      </p>

      {/* Tech stack chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "9px",
          marginBottom: "22px",
        }}
      >
        {project.stacks.map((stack) => (
          <span
            key={stack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 15px",
              borderRadius: "12px",
              background: "rgba(255,255,255,.62)",
              border: "1px solid rgba(255,255,255,.85)",
              boxShadow: "0 10px 22px -16px rgba(90,100,180,.5)",
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#4a4d6b",
              fontFamily: "'Quicksand', 'Pretendard', sans-serif",
            }}
          >
            {stack}
          </span>
        ))}
      </div>

      {/* Link chips — flex-wrap, up to 8 without breaking */}
      {project.links.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {project.links.map((link) => (
            <LinkChip key={link.label} link={link} />
          ))}
        </div>
      )}
    </div>
  );
}
