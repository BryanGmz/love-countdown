"use client"

import { useEffect, useState, useCallback } from "react"
import StarField from "@/components/StarField"
import ConstellationGrid from "@/components/ConstellationGrid"
import BoxModal from "@/components/BoxModal"
import BirthdayBanner from "@/components/BirthdayBanner"

type PhotoType = "ella-pequeña" | "ella" | "nosotros" | "familia" | "lugar" | null

interface Box {
  id: number
  unlocked: boolean
  title: string
  emoji: string
  color: string
  photo?: string | null 
  photoType?: PhotoType
  spotifyTrackId?: string | null
  message?: string
}

interface ApiResponse {
  boxes: Box[]
  daysUntilBirthday: number
  isBirthday: boolean
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [selectedBox, setSelectedBox] = useState<Box | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/boxes")
      .then((r) => r.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
  }, [])

  const handleBoxClick = useCallback((box: Box) => {
    if (box.unlocked) setSelectedBox(box)
  }, [])

  const closeModal = useCallback(() => setSelectedBox(null), [])

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTop: "2px solid var(--gold)",
          animation: "twinkle 1.2s ease-in-out infinite",
          fontSize: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>💛</div>
        <p style={{ color: "var(--text-dim)", fontFamily: "var(--font-ui)", fontSize: "13px", letterSpacing: "0.2em" }}>
          CARGANDO TU REGALO...
        </p>
      </div>
    )
  }

  if (!data) return null

  return (
    <>
      <StarField />

      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {/* Header */}
        <header style={{
          textAlign: "center",
          padding: "60px 24px 20px",
          animation: "fadeInUp 1s ease both",
        }}>
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            letterSpacing: "0.4em",
            color: "var(--text-dim)",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}>
            Una constelación para ti
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 7vw, 68px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-bright)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}>
            23 razones
          </h1>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 3vw, 22px)",
            color: "var(--gold)",
            marginTop: "8px",
            fontStyle: "italic",
            opacity: 0.85,
          }}>
            por las que te quiero
          </p>
        </header>

        {/* Birthday Banner */}
        {data.isBirthday && <BirthdayBanner />}

        {/* Countdown */}
        {!data.isBirthday && data.daysUntilBirthday > 0 && (
          <div style={{
            textAlign: "center",
            padding: "12px 24px",
            animation: "fadeInUp 1s 0.3s ease both",
            opacity: 0,
          }}>
            <p style={{
              fontFamily: "var(--font-ui)",
              fontSize: "12px",
              letterSpacing: "0.25em",
              color: "var(--text-dim)",
            }}>
              {data.daysUntilBirthday === 1
                ? "¡MAÑANA ES TU CUMPLEAÑOS! 🌟"
                : `${data.daysUntilBirthday} días para tu cumpleaños ✨`}
            </p>
          </div>
        )}

        {/* Progress */}
        <div style={{
          textAlign: "center",
          padding: "8px 24px 0",
          animation: "fadeInUp 1s 0.4s ease both",
          opacity: 0,
        }}>
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "var(--text-dim)",
          }}>
            {data.boxes.filter(b => b.unlocked).length} de 23 abiertas
          </p>
        </div>

        {/* Constellation */}
        <ConstellationGrid boxes={data.boxes} onBoxClick={handleBoxClick} />

        {/* Footer */}
        <footer style={{
          textAlign: "center",
          padding: "40px 24px 60px",
          animation: "fadeInUp 1s 0.8s ease both",
          opacity: 0,
        }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontStyle: "italic",
            color: "var(--text-dim)",
          }}>
            Toca cada estrella cuando brille ✦
          </p>
        </footer>
      </main>

      {/* Modal */}
      {selectedBox && (
        <BoxModal box={selectedBox} onClose={closeModal} />
      )}
    </>
  )
}
