import { NextResponse } from "next/server"
import { boxes } from "@/data/boxes"

export const dynamic = "force-dynamic"

export async function GET() {
  const startDateStr = "2026-04-23"
  const birthdayStr = "2026-05-15"
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Guatemala" })
  )
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const start = new Date(startDateStr + "T00:00:00")
  const birthday = new Date(birthdayStr + "T00:00:00")
  const diffMs = today.getTime() - start.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const isBirthday = today.getTime() === birthday.getTime()
  const result = boxes.map((box) => {
    let unlocked = false

    if (box.id === 23) {
      unlocked = isBirthday || today > birthday
    } else {
      unlocked = diffDays >= box.id - 1
    }

    return {
      id: box.id,
      unlocked,
      title: box.title,
      emoji: box.emoji,
      color: box.color,
      ...(unlocked
        ? { photo: box.photo, photoType: box.photoType, spotifyTrackId: box.spotifyTrackId, message: box.message }
        : {}),
    }
  })

  const daysUntilBirthday = Math.ceil(
    (birthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )

  return NextResponse.json({
    boxes: result,
    daysUntilBirthday: Math.max(0, daysUntilBirthday),
    isBirthday,
    debug: {
      today: today.toISOString().split("T")[0],
      diffDays,
    },
  })
}
