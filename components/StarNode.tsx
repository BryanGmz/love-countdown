"use client"

import { useState } from "react"

interface Box {
  id: number
  unlocked: boolean
  title: string
  emoji: string
  color: string
}

export default function StarNode({ box, onClick }: { box: Box; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const isBirthday = box.id === 23

  const size = isBirthday ? 56 : box.unlocked ? 44 : 32

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Pulse ring for unlocked stars */}
      {box.unlocked && !isBirthday && (
        <div
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1px solid ${box.color}`,
            animation: "pulse-ring 2.5s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Birthday special outer ring */}
      {isBirthday && box.unlocked && (
        <>
          <div style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "1px solid rgba(245,200,66,0.4)",
            animation: "pulse-ring 2s ease-out infinite",
          }} />
          <div style={{
            position: "absolute",
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid rgba(245,200,66,0.2)",
            animation: "pulse-ring 2s 0.7s ease-out infinite",
          }} />
        </>
      )}

      {/* The star itself */}
      <button
        onClick={box.unlocked ? onClick : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={box.unlocked ? `Abrir: ${box.title}` : `Casilla ${box.id} — bloqueada`}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: "none",
          cursor: box.unlocked ? "pointer" : "default",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isBirthday ? "28px" : box.unlocked ? "20px" : "14px",
          background: box.unlocked
            ? `radial-gradient(circle at 40% 40%, ${box.color}, ${box.color}88 60%, transparent)`
            : "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08), transparent)",
          boxShadow: box.unlocked
            ? `0 0 ${hovered ? 24 : 14}px ${box.color}88, 0 0 ${hovered ? 50 : 30}px ${box.color}33`
            : "0 0 6px rgba(255,255,255,0.06)",
          transform: `scale(${hovered && box.unlocked ? 1.15 : 1}) ${isBirthday && box.unlocked ? "" : ""}`,
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          animation: box.unlocked
            ? isBirthday
              ? "celebrate 3s ease-in-out infinite, burst 0.6s ease both"
              : `float ${3 + box.id * 0.3}s ease-in-out infinite`
            : `twinkle ${2.5 + box.id * 0.2}s ease-in-out infinite`,
          animationDelay: `${box.id * 0.1}s`,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {box.emoji}

        {/* Number badge */}
        <span style={{
          position: "absolute",
          bottom: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-ui)",
          fontSize: "9px",
          letterSpacing: "0.1em",
          color: box.unlocked ? box.color : "var(--text-dim)",
          opacity: 0.8,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}>
          {box.unlocked ? (isBirthday ? "🎂" : `✦ ${box.id}`) : box.id}
        </span>
      </button>

      {/* Tooltip on hover */}
      {hovered && box.unlocked && (
        <div style={{
          position: "absolute",
          bottom: "calc(100% + 24px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10, 8, 24, 0.95)",
          border: `1px solid ${box.color}44`,
          borderRadius: "8px",
          padding: "8px 14px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 100,
          backdropFilter: "blur(12px)",
          animation: "fadeInUp 0.2s ease",
          boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 12px ${box.color}22`,
        }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontStyle: "italic",
            color: box.color,
          }}>{box.title}</p>
        </div>
      )}
    </div>
  )
}
