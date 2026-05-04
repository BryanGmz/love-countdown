"use client";

import { useEffect } from "react";
import Image from "next/image";

type PhotoType =
  | "ella-pequeña"
  | "ella"
  | "nosotros"
  | "familia"
  | "lugar"
  | null;

const PHOTO_LABELS: Record<
  NonNullable<PhotoType>,
  { label: string; icon: string }
> = {
  "ella-pequeña": { label: "Mi pequeña", icon: "👶🏻" },
  ella: { label: "Tú", icon: "🌟" },
  nosotros: { label: "Los dos", icon: "❤️" },
  familia: { label: "Tu gente", icon: "🏡" },
  lugar: { label: "Nuestro lugar", icon: "🗺️" },
};

interface Box {
  id: number;
  unlocked: boolean;
  title: string;
  emoji: string;
  color: string;
  photo?: string | null;
  photoType?: PhotoType;
  spotifyTrackId?: string | null;
  message?: string;
}

export default function BoxModal({
  box,
  onClose,
}: {
  box: Box;
  onClose: () => void;
}) {
  const isBirthday = box.id === 23;
  const hasSpotify = !!box.spotifyTrackId;
  const spotifyEmbedUrl = hasSpotify
    ? box.spotifyTrackId!.startsWith("http")
      ? box
          .spotifyTrackId!.replace(
            "open.spotify.com/",
            "open.spotify.com/embed/",
          )
          .split("?")[0] + "?utm_source=generator&theme=0"
      : `https://open.spotify.com/embed/track/${box.spotifyTrackId}?utm_source=generator&theme=0`
    : null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,1,10,0.9)",
        backdropFilter: "blur(18px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "backdrop-in 0.3s ease",
      }}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg, #0d0b1e, #120a1a)",
          border: `1px solid ${box.color}33`,
          borderRadius: "20px",
          maxWidth: "520px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: `0 0 60px ${box.color}22, 0 30px 80px rgba(0,0,0,0.7)`,
          animation: "modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
        }}
      >
        {/* Top color band */}
        <div
          style={{
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${box.color}, transparent)`,
            borderRadius: "20px 20px 0 0",
          }}
        />

        {isBirthday && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "200px",
              background: `radial-gradient(ellipse at 50% 0%, ${box.color}18, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
        )}

        <div style={{ padding: "28px 32px 36px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: isBirthday ? "44px" : "34px",
                lineHeight: 1,
                flexShrink: 0,
                animation: isBirthday
                  ? "celebrate 2s ease-in-out infinite"
                  : "float 3s ease-in-out infinite",
                display: "block",
              }}
            >
              {box.emoji}
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  color: box.color,
                  marginBottom: "5px",
                  opacity: 0.8,
                  textTransform: "uppercase",
                }}
              >
                {isBirthday ? "✦ El gran momento ✦" : `Razón ${box.id} de 23`}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isBirthday
                    ? "clamp(20px, 5vw, 30px)"
                    : "clamp(17px, 4vw, 24px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text-bright)",
                  lineHeight: 1.2,
                }}
              >
                {box.title}
              </h2>
            </div>
          </div>

          {/* FOTO */}
          {box.photo && (
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "15px",
                border: `1px solid ${box.color}22`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${box.color}15`,
                position: "relative",
              }}
            >
              <Image
                src={box.photo}
                alt={box.title}
                width={0}
                height={0}
                sizes="(max-width: 720px) 100vw, 520px"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "520px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(4,3,10,0.55))",
                }}
              />
              {box.photoType && PHOTO_LABELS[box.photoType] && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(4,3,10,0.65)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${box.color}33`,
                    borderRadius: "100px",
                    padding: "5px 12px",
                  }}
                >
                  <span style={{ fontSize: "11px" }}>
                    {PHOTO_LABELS[box.photoType].icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      color: box.color,
                      textTransform: "uppercase",
                    }}
                  >
                    {PHOTO_LABELS[box.photoType].label}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* SPOTIFY EMBED */}
          {spotifyEmbedUrl && (
            <div style={{ marginBottom: "24px" }}>
              {/* Separador con etiqueta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: `linear-gradient(to right, transparent, ${box.color}28)`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: box.color,
                    opacity: 0.65,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#1DB954"
                      opacity="0.9"
                    />
                    <path
                      d="M17.25 16.5c-.2 0-.35-.07-.5-.17-2.3-1.4-5.2-1.72-8.6-.94-.2.05-.4-.08-.45-.28-.05-.2.08-.4.28-.45 3.72-.85 6.9-.5 9.45 1.08.17.1.23.33.13.5-.08.17-.22.26-.31.26zM18.38 13.8c-.25 0-.42-.08-.57-.2-2.62-1.62-6.63-2.08-9.73-1.14-.23.07-.47-.06-.54-.29-.07-.23.06-.47.29-.54 3.55-1.07 7.96-.55 10.96 1.3.2.12.27.38.15.58-.1.17-.3.29-.56.29zM18.47 11.05c-3.15-1.87-8.35-2.04-11.36-1.13-.27.08-.56-.08-.64-.35-.08-.27.08-.56.35-.64 3.45-1.04 9.18-.84 12.8 1.3.24.15.32.46.17.7-.14.25-.46.32-.7.17l-.62.15z"
                      fill="white"
                    />
                  </svg>
                  Nuestra canción
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: `linear-gradient(to left, transparent, ${box.color}28)`,
                  }}
                />
              </div>

              {/* iframe Spotify */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: `1px solid ${box.color}20`,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 16px ${box.color}10`,
                }}
              >
                <iframe
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: "block", borderRadius: "14px" }}
                />
              </div>
            </div>
          )}

          {/* MENSAJE */}
          <div
            style={{
              position: "relative",
              paddingLeft: "18px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "4px",
                bottom: "4px",
                width: "2px",
                background: `linear-gradient(to bottom, ${box.color}, transparent)`,
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isBirthday
                  ? "clamp(15px, 3vw, 19px)"
                  : "clamp(14px, 2.5vw, 17px)",
                lineHeight: 1.8,
                color: "var(--text-main)",
                fontWeight: 300,
                whiteSpace: "pre-line",
              }}
            >
              {box.message}
            </p>
          </div>

          {/* CERRAR */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: `1px solid ${box.color}44`,
                borderRadius: "100px",
                padding: "10px 28px",
                fontFamily: "var(--font-ui)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: box.color,
                cursor: "pointer",
                transition: "all 0.2s ease",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${box.color}18`;
                e.currentTarget.style.boxShadow = `0 0 20px ${box.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Volver a las estrellas
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
