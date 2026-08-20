import type { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function GlassCard({ children, style }: GlassCardProps) {
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
        ...style,
      }}
    >
      {children}
    </div>
  );
}
