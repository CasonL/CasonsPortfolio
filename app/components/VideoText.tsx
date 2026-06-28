"use client";

import { useEffect, useId, useRef } from "react";

interface VideoTextProps {
  text: string;
  src: string;
  className?: string;
  playing?: boolean;
  playbackRate?: number;
  textClassName?: string;
  align?: "left" | "center" | "right";
  preload?: "none" | "metadata" | "auto";
}

export function VideoText({
  text,
  src,
  className = "",
  playing = false,
  playbackRate = 2,
  textClassName = "text-6xl font-semibold tracking-tight md:text-8xl lg:text-9xl",
  align = "center",
  preload = "metadata",
}: VideoTextProps) {
  const id = useId();
  const maskId = `mask-${id}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const lines = text.split("\n");

  const textAnchor: "start" | "end" | "middle" =
    align === "left" ? "start" : align === "right" ? "end" : "middle";
  const x = align === "left" ? "0%" : align === "right" ? "100%" : "50%";

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    video.playbackRate = playbackRate;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && playing) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [playing]);

  return (
    <span ref={wrapperRef} className={`relative inline-block ${className}`}>
      <div className="absolute inset-[3px] overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload={preload}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/20" />
      </div>
      <svg
        className="absolute inset-0 h-full w-full text-forest-900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="white" />
            <text
              x={x}
              y="50%"
              textAnchor={textAnchor}
              dominantBaseline="middle"
              fill="black"
              className={textClassName}
              style={{ fontFamily: "inherit" }}
            >
              {lines.map((line, i) => (
                <tspan key={i} x={x} dy={i === 0 ? `${-(lines.length - 1) * 0.5}em` : "1em"}>
                  {line}
                </tspan>
              ))}
            </text>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />
      </svg>
      <span className={`invisible ${textClassName}`}>
        {lines.map((line, i) => (
          <span key={i} className="block leading-[1.2em]">
            {line}
          </span>
        ))}
      </span>
    </span>
  );
}
