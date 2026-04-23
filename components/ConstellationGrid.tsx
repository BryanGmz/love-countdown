"use client"

import { useMemo } from "react"
import StarNode from "./StarNode"

interface Box {
  id: number
  unlocked: boolean
  title: string
  emoji: string
  color: string
  photo?: string | null
  message?: string
}

// Fixed constellation positions (% of container) — feels organic, not grid
const POSITIONS = [
  { x: 15, y: 10 },  // 1
  { x: 38, y: 5 },   // 2
  { x: 62, y: 12 },  // 3
  { x: 82, y: 6 },   // 4
  { x: 25, y: 22 },  // 5
  { x: 50, y: 20 },  // 6
  { x: 72, y: 24 },  // 7
  { x: 8,  y: 35 },  // 8
  { x: 35, y: 38 },  // 9
  { x: 58, y: 34 },  // 10
  { x: 85, y: 38 },  // 11
  { x: 18, y: 50 },  // 12
  { x: 44, y: 52 },  // 13
  { x: 68, y: 50 },  // 14
  { x: 5,  y: 62 },  // 15
  { x: 30, y: 64 },  // 16
  { x: 55, y: 66 },  // 17
  { x: 78, y: 60 },  // 18
  { x: 15, y: 76 },  // 19
  { x: 42, y: 78 },  // 20
  { x: 65, y: 80 },  // 21
  { x: 85, y: 74 },  // 22
  { x: 50, y: 90 },  // 23 — the birthday star, centered at the bottom
]

// Constellation lines connecting stars
const LINES = [
  [1, 2], [2, 3], [3, 4],
  [1, 5], [2, 6], [3, 7], [4, 7],
  [5, 6], [6, 7],
  [5, 8], [6, 9], [7, 10], [7, 11],
  [8, 12], [9, 13], [10, 14], [11, 14],
  [12, 13], [13, 14],
  [12, 15], [13, 16], [14, 17], [14, 18],
  [15, 19], [16, 20], [17, 21], [18, 22],
  [19, 20], [20, 21], [21, 22],
  [20, 23], [21, 23],
]

export default function ConstellationGrid({
  boxes,
  onBoxClick,
}: {
  boxes: Box[]
  onBoxClick: (box: Box) => void
}) {
  const unlockedIds = useMemo(() => new Set(boxes.filter(b => b.unlocked).map(b => b.id)), [boxes])

  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px 0 40px",
    }}>
      {/* SVG Lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {LINES.map(([a, b], i) => {
          const pa = POSITIONS[a - 1]
          const pb = POSITIONS[b - 1]
          const bothUnlocked = unlockedIds.has(a) && unlockedIds.has(b)
          return (
            <line
              key={i}
              x1={pa.x} y1={pa.y}
              x2={pb.x} y2={pb.y}
              stroke={bothUnlocked ? "rgba(245,200,66,0.2)" : "rgba(255,255,255,0.04)"}
              strokeWidth={bothUnlocked ? "0.2" : "0.12"}
              filter={bothUnlocked ? "url(#glow)" : undefined}
              style={{ transition: "stroke 1s ease, strokeWidth 1s ease" }}
            />
          )
        })}
      </svg>

      {/* Stars */}
      <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
        {boxes.map((box, i) => {
          const pos = POSITIONS[i]
          return (
            <div
              key={box.id}
              style={{
                position: "absolute",
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: box.id === 23 ? 5 : 1,
                animationDelay: `${i * 0.04}s`,
              }}
            >
              <StarNode box={box} onClick={() => onBoxClick(box)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
