import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
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
      {children}
    </h2>
  );
}
