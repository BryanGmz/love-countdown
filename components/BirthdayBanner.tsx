"use client"

export default function BirthdayBanner() {
  return (
    <div style={{
      textAlign: "center",
      padding: "24px",
      animation: "fadeInUp 1s 0.2s ease both",
      opacity: 0,
    }}>
      <div style={{
        display: "inline-block",
        background: "linear-gradient(135deg, rgba(245,200,66,0.12), rgba(240,112,112,0.08))",
        border: "1px solid rgba(245,200,66,0.3)",
        borderRadius: "100px",
        padding: "12px 32px",
        boxShadow: "0 0 40px rgba(245,200,66,0.1)",
      }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(16px, 4vw, 24px)",
          fontStyle: "italic",
          color: "var(--gold)",
          letterSpacing: "0.05em",
          animation: "celebrate 3s ease-in-out infinite",
        }}>
          🎂 ¡Hoy es tu día! ¡Feliz cumpleaños! 🎂
        </p>
      </div>
    </div>
  )
}
