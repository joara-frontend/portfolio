"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";

interface HeroSliderProps {
  images: string[];
  title: string;
}

interface ImageSize {
  w: number;
  h: number;
}

export default function HeroSlider({ images, title }: HeroSliderProps) {
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const [naturalSizes, setNaturalSizes] = useState<Record<number, ImageSize>>(
    {},
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const count = images.length;
  const isMulti = count > 1;

  const goPrev = useCallback(() => {
    setExpanded(false);
    setSlide((s) => (s - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setExpanded(false);
    setSlide((s) => (s + 1) % count);
  }, [count]);

  const goTo = useCallback((i: number) => {
    setExpanded(false);
    setSlide(i);
  }, []);

  const handleImgLoad = useCallback(
    (i: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      setNaturalSizes((prev) =>
        prev[i]
          ? prev
          : { ...prev, [i]: { w: img.naturalWidth, h: img.naturalHeight } },
      );
    },
    [],
  );

  if (count === 0) return null;

  const currentSize = naturalSizes[slide];
  const isPortrait = !!currentSize && currentSize.h > currentSize.w;

  const toggleExpand = () => {
    if (!expanded && currentSize && trackRef.current) {
      const width = trackRef.current.offsetWidth;
      setExpandedHeight(width * (currentSize.h / currentSize.w));
    }
    setExpanded((v) => !v);
  };

  return (
    <div
      style={{
        borderRadius: "32px",
        overflow: "hidden",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-bd)",
        boxShadow:
          "0 40px 72px -34px rgba(90,100,180,.6), inset 0 1px 0 rgba(255,255,255,.95)",
        padding: "12px",
      }}
    >
      {/* Track wrapper */}
      <div
        ref={trackRef}
        className={`hero-slider-track${expanded ? " expanded" : ""}`}
        style={
          expanded && expandedHeight ? { height: expandedHeight } : undefined
        }
      >
        {/* Sliding track */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transition: "transform .5s cubic-bezier(.4,0,.2,1)",
            transform: `translateX(-${slide * 100}%)`,
          }}
        >
          {images.map((src, i) => (
            <div key={src} className="hero-slider-slide">
              <Image
                src={src}
                fill
                alt={`${title} 스크린샷 ${i + 1}`}
                className="hero-slider-img"
                priority={i === 0}
                sizes="(max-width: 1040px) 100vw, 980px"
                onLoad={handleImgLoad(i)}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next — only when multiple images and not expanded */}
        {isMulti && !expanded && (
          <>
            {/* Wrapping div handles vertical centering so the button transform is free for scale */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "16px",
                transform: "translateY(-50%)",
                zIndex: 4,
              }}
            >
              <button
                className="detail-nav-btn"
                onClick={goPrev}
                aria-label="이전 이미지"
              >
                ‹
              </button>
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                zIndex: 4,
              }}
            >
              <button
                className="detail-nav-btn"
                onClick={goNext}
                aria-label="다음 이미지"
              >
                ›
              </button>
            </div>
          </>
        )}

        {/* Bottom gradient + expand toggle — only for portrait (tall) images */}
        {isPortrait && (
          <>
            {!expanded && <div className="hero-slider-gradient" />}
            <button
              type="button"
              className={`hero-slider-expand-btn${expanded ? " open" : ""}`}
              onClick={toggleExpand}
              aria-expanded={expanded}
              aria-label={expanded ? "이미지 접기" : "전체 이미지 보기"}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9.5l6 6 6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {isMulti && !expanded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
            padding: "14px 0 6px",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}번 이미지로 이동`}
              style={{
                width: i === slide ? "26px" : "9px",
                height: "9px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                padding: 0,
                background:
                  i === slide
                    ? "linear-gradient(135deg,#7c8bf5,#6c7cf0)"
                    : "rgba(108,124,240,.25)",
                transition:
                  "width .35s cubic-bezier(.2,.9,.3,1.3), background .3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
