"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface HeroSliderProps {
  images: string[];
  title: string;
}

export default function HeroSlider({ images, title }: HeroSliderProps) {
  const [slide, setSlide] = useState(0);
  const count = images.length;
  const isMulti = count > 1;

  const goPrev = useCallback(() => {
    setSlide((s) => (s - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setSlide((s) => (s + 1) % count);
  }, [count]);

  if (count === 0) return null;

  return (
    <div
      style={{
        borderRadius: "32px",
        overflow: "hidden",
        background: "rgba(255,255,255,.5)",
        border: "1px solid rgba(255,255,255,.85)",
        boxShadow:
          "0 40px 72px -34px rgba(90,100,180,.6), inset 0 1px 0 rgba(255,255,255,.95)",
        padding: "12px",
      }}
    >
      {/* Track wrapper */}
      <div
        style={{
          position: "relative",
          borderRadius: "22px",
          overflow: "hidden",
          height: "460px",
          background: "#eef1fb",
        }}
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
            <div
              key={src}
              style={{ flex: "0 0 100%", height: "460px", position: "relative" }}
            >
              <Image
                src={src}
                fill
                alt={`${title} 스크린샷 ${i + 1}`}
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority={i === 0}
                sizes="(max-width: 1040px) 100vw, 980px"
              />
            </div>
          ))}
        </div>

        {/* Prev / Next — only when multiple images */}
        {isMulti && (
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
              <button className="detail-nav-btn" onClick={goPrev} aria-label="이전 이미지">
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
              <button className="detail-nav-btn" onClick={goNext} aria-label="다음 이미지">
                ›
              </button>
            </div>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {isMulti && (
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
              onClick={() => setSlide(i)}
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
