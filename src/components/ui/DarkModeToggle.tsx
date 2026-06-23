"use client";

import { useTheme } from "@/lib/ThemeContext";

export function DarkModeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="theme-btn-wrap">
      <button
        className="sky-toggle"
        data-on={isDark ? "1" : "0"}
        onClick={toggle}
        aria-label="다크모드 전환"
      >
        {/* 낮 레이어 */}
        <div className="toggle-layer day">
          <div className="sky-d" />
          <div className="sun" />
          <div
            className="ray"
            style={{
              top: 5,
              right: 33,
              width: 8,
              height: 3,
              transform: "rotate(-32deg)",
            }}
          />
          <div
            className="ray"
            style={{
              top: 21,
              right: 7,
              width: 8,
              height: 3,
              transform: "rotate(58deg)",
            }}
          />
          <div
            className="hill"
            style={{
              background: "linear-gradient(180deg,#8ed3ff,#62b6f5)",
              opacity: 0.75,
            }}
          />
        </div>

        {/* 밤 레이어 */}
        <div className="toggle-layer night">
          <div className="sky-n" />
          <div className="moon" />
          <div
            className="star"
            style={{ top: 6, right: 30, width: 5, height: 5 }}
          />
          <div
            className="star"
            style={{ top: 18, right: 24, width: 7, height: 7 }}
          />
          <div
            className="star"
            style={{
              top: 22,
              right: 39,
              width: 3,
              height: 3,
              clipPath: "none",
            }}
          />
          <div
            className="hill"
            style={{
              background: "linear-gradient(180deg,#2f3a64,#222a4c)",
              opacity: 0.85,
            }}
          />
        </div>

        <div className="knob" />
      </button>
    </div>
  );
}
