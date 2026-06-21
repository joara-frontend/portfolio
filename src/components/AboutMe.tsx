"use client";

import { useState } from "react";
import { career, education } from "@/data/portfolio";
import type { TimelineItem } from "@/data/portfolio";

interface TimelineRowProps {
  item: TimelineItem;
  isOpen: boolean;
  onToggle: () => void;
  toggleBg: string;
  toggleColor: string;
}

function TimelineRow({
  item,
  isOpen,
  onToggle,
  toggleBg,
  toggleColor,
}: TimelineRowProps) {
  return (
    <div className="timeline-row-wrap">
      <div className="timeline-row" onClick={onToggle}>
        <span className="timeline-period">{item.period}</span>
        <div className="timeline-info">
          <span className="timeline-company">{item.company}</span>
          <span className="timeline-dept">{item.dept}</span>
        </div>
        <span
          className={`timeline-toggle-btn${isOpen ? " open" : ""}`}
          style={{ background: toggleBg, color: toggleColor }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9.5l6 6 6-6" />
          </svg>
        </span>
      </div>
      <div className={`timeline-detail${isOpen ? " open" : ""}`}>
        <div>
          {item.role && item.works ? (
            <div className="timeline-inner-box">
              <b>{item.role}</b>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
                {item.works?.map((work, i) => (
                  <li key={i} className="leading-relaxed pl-1 -indent-5 ml-5">
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="timeline-inner-box">{item.desc}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const [openRows, setOpenRows] = useState<Record<string, boolean>>({});

  const toggleRow = (id: string) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title">경력 &amp; 교육</h2>
          <p>행을 클릭하면 상세 내용이 펼쳐집니다</p>
        </div>

        {/* Career */}
        <div className="timeline-group">
          <div className="timeline-group-label">
            <div className="dot dot-acc" />
            <span>경력</span>
          </div>
          <div className="timeline-card">
            {career.map((item, i) => (
              <TimelineRow
                key={i}
                item={item}
                isOpen={!!openRows[`career-${i}`]}
                onToggle={() => toggleRow(`career-${i}`)}
                toggleBg="var(--acc-soft)"
                toggleColor="var(--acc2)"
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="timeline-group">
          <div className="timeline-group-label">
            <div className="dot dot-coral" />
            <span>교육</span>
          </div>
          <div className="timeline-card">
            {education.map((item, i) => (
              <TimelineRow
                key={i}
                item={item}
                isOpen={!!openRows[`edu-${i}`]}
                onToggle={() => toggleRow(`edu-${i}`)}
                toggleBg="var(--coral-soft)"
                toggleColor="var(--coral-deep)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
