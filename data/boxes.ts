export type PhotoType =
  | "ella-pequeña" // fotos de su infancia / niñez
  | "ella" // fotos de ella sola, de grande
  | "nosotros" // fotos de los dos juntos
  | "familia" // con familia o amigos
  | "lugar" // lugares especiales para los dos
  | null;

export interface BoxData {
  id: number
  photo: string | null
  photoType: PhotoType
  spotifyTrackId: string | null
  title: string
  message: string
  emoji: string
  color: string
}

export const boxes: BoxData[] = [
  {
    id: 1,
    photo: "/photos/photo-1.jpeg",
    photoType: "ella-pequeña",
    spotifyTrackId: "2UZoSuDO0D6y9bW9Z3Hkng",
    title: "Antes de que yo existiera para ti",
    message:
      "Hace casi 23 años el mundo se preparaba para recibir a alguien increíble. Miro esta foto y pienso en esa versión tuya que yo no conocí, pero que ya era increíble. Ya tenías esa mirada. Ya eras tú. Y el mundo todavía no sabía la suerte que le esperaba.",
    emoji: "🐣",
    color: "hsl(45, 90%, 65%)",
  },
  {
    id: 2,
    photo: "/photos/photo-2.jpg",
    photoType: "ella-pequeña",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "La niña que fuiste",
    message:
      "Hay algo en verte así de pequeña que me llena de ternura. Me pregunto cómo habrías sido de amiga, de compañera. Estoy seguro de que ya entonces hacías que todo fuera mejor.",
    emoji: "🌸",
    color: "hsl(330, 65%, 70%)",
  },
{
    id: 3,
    photo: "/photos/ella-pequeña-3.jpg",
    photoType: "ella-pequeña",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tus ojos de siempre",
    message: "Esos ojos son los mismos. El tiempo pasó, tú creciste, cambiaste, te convertiste en quien eres — pero esa chispa que tienes en la mirada es exactamente la misma. Siempre fue tuya.",
    emoji: "✨",
    color: "hsl(45, 90%, 65%)",
  },

  // ── BLOQUE 2: Ella hoy, su mundo, quien es ───────────────────────────────
  {
    id: 4,
    photo: "/photos/ella-1.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tú, simplemente tú",
    message: "Esta foto me gusta porque te captura exactamente como eres. Sin poses, sin filtros de actitud. Solo tú. Y tú eres suficiente. Más que suficiente.",
    emoji: "💫",
    color: "hsl(260, 65%, 70%)",
  },
  {
    id: 5,
    photo: "/photos/ella-2.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tu risa",
    message: "Si pudiera guardar un sonido para siempre, sería tu risa. Esa que no puedes controlar, la que te hace cerrar los ojos. Esa es la que me enamoró sin pedirme permiso.",
    emoji: "🌙",
    color: "hsl(200, 80%, 70%)",
  },
  {
    id: 6,
    photo: "/photos/ella-3.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tu fuerza",
    message: "Has cargado cosas que nadie debería cargar sola. Y aquí estás. Entera. Brillando. No sé si sabes lo valiente que eres, pero yo lo sé. Lo veo cada vez que te miro.",
    emoji: "🔥",
    color: "hsl(20, 90%, 62%)",
  },
  {
    id: 7,
    photo: "/photos/ella-4.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tu manera de ver el mundo",
    message: "Contigo aprendo que hay formas más suaves, más honestas, más bonitas de vivir. Eres la persona más real que conozco. Y en un mundo lleno de poses, eso vale oro.",
    emoji: "🌊",
    color: "hsl(190, 75%, 62%)",
  },

  // ── BLOQUE 3: Los dos juntos ──────────────────────────────────────────────
  {
    id: 8,
    photo: "/photos/nosotros-1.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "El día que todo empezó",
    message: "Todavía recuerdo exactamente cómo te veías ese día. El universo completo cabía en tu sonrisa y yo no lo sabía aún, pero algo dentro de mí ya lo supo.",
    emoji: "🌟",
    color: "hsl(45, 85%, 63%)",
  },
  {
    id: 9,
    photo: "/photos/nosotros-2.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "La primera vez que te tomé la mano",
    message: "Pequeño gesto. Enorme momento. Sentí que había encontrado el lugar más seguro del mundo, y que no quería soltarlo nunca.",
    emoji: "🤝",
    color: "hsl(350, 70%, 68%)",
  },
  {
    id: 10,
    photo: "/photos/nosotros-3.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Cuando reímos juntos",
    message: "Reír contigo es una de las mejores cosas que me han pasado. Ese código secreto de chistes que nadie más entiende, esas carcajadas que duelen. Solo nosotros.",
    emoji: "🎭",
    color: "hsl(50, 90%, 60%)",
  },
  {
    id: 11,
    photo: "/photos/nosotros-4.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Un día ordinario contigo",
    message: "Los días más ordinarios contigo se sienten extraordinarios. Tú conviertes lo mundano en algo que vale la pena recordar. No sé cómo lo haces.",
    emoji: "☁️",
    color: "hsl(210, 55%, 70%)",
  },
  {
    id: 12,
    photo: "/photos/nosotros-5.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Cómo me cuidas",
    message: "Noto todo. Los vasitos de agua sin pedir. Las cobijas que acomodas. Los \"¿ya comiste?\" sin falta. Ser cuidado por ti es uno de los privilegios más grandes de mi vida.",
    emoji: "🍃",
    color: "hsl(150, 60%, 60%)",
  },

  // ── BLOQUE 4: Momentos y lugares especiales ───────────────────────────────
  {
    id: 13,
    photo: "/photos/lugar-1.jpg",
    photoType: "lugar",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Este lugar ya es nuestro",
    message: "Hay lugares que existen antes de que los visites, y luego existen de verdad — cuando los vives con alguien. Este ya es nuestro. Ya tiene nuestra historia adentro.",
    emoji: "🗺️",
    color: "hsl(155, 60%, 58%)",
  },
  {
    id: 14,
    photo: "/photos/nosotros-6.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Mitad del camino",
    message: "Catorce razones y apenas empiezo. Podría escribir mil y seguir quedándome corto. Eres inagotable. Tú eres inagotable.",
    emoji: "🌺",
    color: "hsl(10, 75%, 65%)",
  },
  {
    id: 15,
    photo: "/photos/ella-5.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tu mente",
    message: "La forma en que piensas me fascina. Llegas a conclusiones que otros tardarían años. Eres la persona más inteligente que conozco, y no lo digo por decirlo.",
    emoji: "🌀",
    color: "hsl(170, 65%, 58%)",
  },

  // ── BLOQUE 5: Ella con su familia / sus personas ─────────────────────────
  {
    id: 16,
    photo: "/photos/familia-1.jpg",
    photoType: "familia",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "De dónde vienes",
    message: "Amo de dónde vienes. Amo las personas que te formaron, las historias que te hicieron, todo lo que cargaste y todo lo que elegiste soltar. Eres el resultado de mucho amor.",
    emoji: "🏡",
    color: "hsl(35, 75%, 63%)",
  },
  {
    id: 17,
    photo: "/photos/ella-6.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Lo que me has enseñado",
    message: "Desde que te conozco, soy mejor persona. No porque me hayas pedido que cambie, sino porque quererte me inspira a serlo. Gracias por eso.",
    emoji: "📖",
    color: "hsl(220, 60%, 68%)",
  },
  {
    id: 18,
    photo: "/photos/nosotros-7.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Tu paciencia conmigo",
    message: "Gracias por aguantarme en mis días difíciles. Por no rendirte cuando yo mismo no sé cómo estar. Tu paciencia me enseña cómo querer mejor.",
    emoji: "🕊️",
    color: "hsl(180, 50%, 65%)",
  },

  // ── BLOQUE 6: El presente y el futuro ────────────────────────────────────
  {
    id: 19,
    photo: "/photos/nosotros-8.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Lo que somos",
    message: "No tengo una palabra exacta para lo que somos. Sé que eres la persona con la que quiero hablar cuando algo bueno pasa, y también cuando algo malo pasa. Eso lo dice todo.",
    emoji: "💎",
    color: "hsl(195, 70%, 62%)",
  },
  {
    id: 20,
    photo: "/photos/lugar-2.jpg",
    photoType: "lugar",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Los lugares que nos quedan",
    message: "Hay tantos lugares que quiero conocer contigo. Tantas calles, tantas mesas de café, tantos atardeceres que todavía no tienen tu cara. Los estoy esperando.",
    emoji: "🌅",
    color: "hsl(40, 85%, 65%)",
  },
  {
    id: 21,
    photo: "/photos/ella-7.jpg",
    photoType: "ella",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Lo que sueñas",
    message: "Me encanta escucharte hablar de lo que quieres. Tus sueños son tan tuyos, tan genuinos. Quiero ser parte del mundo donde todos se cumplen.",
    emoji: "🌠",
    color: "hsl(270, 60%, 70%)",
  },
  {
    id: 22,
    photo: "/photos/nosotros-9.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
    title: "Mañana es tu día",
    message: "Mañana es tu día. Y aunque cada día me alegra tenerte, mañana merece algo especial. Algo que espero que te haga sonreír tanto como tú me haces sonreír a mí.",
    emoji: "🎁",
    color: "hsl(350, 75%, 66%)",
  },

  // ── CASILLA 23: El cumpleaños ─────────────────────────────────────────────
  {
    id: 23,
    photo: "/photos/nosotros-favorita.jpg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",   // ← pon aquí LA canción especial del cumpleaños
    title: "¡Feliz cumpleaños, mi amor!",
    message: `Hoy cumples años y yo siento que el privilegio es mío.

Gracias por existir exactamente como eres. Por tu risa, tu fuerza, tu ternura, tu honestidad. Por dejarme quererte y por quererme de vuelta.

Este año que viene lo quiero llenar de momentos contigo. De aventuras, de tardes tranquilas, de risas hasta que duela, de todo lo que seamos juntos.

🎁 Tu regalo te espera: [ESCRIBE AQUÍ EL REGALO O EL PLAN DEL DÍA]

Feliz cumpleaños. Te quiero más de lo que las palabras alcanzan.`,
    emoji: "🎂",
    color: "hsl(45, 95%, 62%)",
  },
]
