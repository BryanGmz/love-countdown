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
    // SIN CAMBIOS — respetado tal cual
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
    photo: "/photos/photo-2.jpeg",
    photoType: "ella-pequeña",
    spotifyTrackId: "7qBT9qcbtkLqrfm9LiTNB4", // Piel Canela - Cuco
    title: "La niña que ya lo tenía todo",
    message:
      "Miro esta foto y me llena de ternura. Esa sonrisa al lado del padre, esa alegría tan pura, tan tuya. Ya desde entonces tenías algo especial que no se aprende ni se finge. Eras exactamente tú, y ya eras increíble.",
    emoji: "🌸",
    color: "hsl(330, 65%, 70%)",
  },
  {
    id: 3,
    photo: "/photos/photo-3.png",
    photoType: "ella-pequeña",
    spotifyTrackId: "6tu2FHuKL9C8pwNrityweQ", // Te Quiero - Hombres G
    title: "Tus ojos de siempre",
    message:
      "El uniforme de educación física, esa sonrisa que ya era tuya desde siempre. Me imagino cómo habrías sido en esos pasillos, y estoy seguro de que ya entonces iluminabas cualquier lugar en el que entrabas. Esos ojos no han cambiado nada.",
    emoji: "✨",
    color: "hsl(45, 90%, 65%)",
  },
  {
    id: 4,
    photo: "/photos/photo-4.jpg",
    photoType: "ella",
    spotifyTrackId: "5GkeaIeCEfB0LOqk7sIVHQ", // Tú - Elegantes de Jerez
    title: "Tú y tu mundo",
    message:
      "Diversificado, una amiga al lado, y esa felicidad que ya no podías ocultar. Me encanta imaginarme esa versión tuya, ya construyendo el mundo que hoy eres. Ya entonces eras la persona que me iba a cambiar la vida, aunque todavía no nos conocíamos.",
    emoji: "💫",
    color: "hsl(260, 65%, 70%)",
  },
  {
    id: 5,
    photo: "/photos/photo-5.png",
    photoType: "ella",
    spotifyTrackId: "7jtbRKtXtGtsJOBMaBo72W", // Me Gustas - Joan Sebastián
    title: "Quince años y ya eras así",
    message:
      "Esa blusa negra, esa sonrisa. Quince años (quizá) y ya tenías todo eso que me tiene enamorado. No sé cómo alguien puede ser tan hermosa sin siquiera intentarlo, pero tú siempre has sabido hacerlo. Ya desde entonces.",
    emoji: "🌙",
    color: "hsl(200, 80%, 70%)",
  },
  {
    id: 6,
    photo: "/photos/photo-6.png",
    photoType: "ella",
    spotifyTrackId: "5z4O1H0vFY0Nh4ZMtfgapP", // Solo Con Verte - Banda MS
    title: "Roja, como todo lo que sentí al verte",
    message:
      "Esa blusa roja, esos labios rojos. Hay fotos que no necesitan explicación porque lo dicen todo solas. Esta es una de ellas. Verte crecer así, convertirte en la mujer que eres, es algo que me deja sin palabras cada vez.",
    emoji: "🔥",
    color: "hsl(20, 90%, 62%)",
  },
  {
    id: 7,
    photo: "/photos/photo-7.png",
    photoType: "ella",
    spotifyTrackId: "6GTX6TGcHEWHoxHXPSVbJ2", // Hermosa Experiencia - Banda MS
    title: "La mujer que llegaste a ser",
    message:
      "Ya tendrías unos 18 años en esta foto. Y cada vez que la veo me pasa lo mismo: me detengo. Porque eres una mujer hermosa, sí, pero no solo por fuera. Es todo lo que hay detrás de esa mirada. Todo eso es lo que me encanta de ti.",
    emoji: "🌊",
    color: "hsl(190, 75%, 62%)",
  },
  {
    id: 8,
    photo: "/photos/photo-8.png",
    photoType: "nosotros",
    spotifyTrackId: "5VfkfKTTo5BRKqHwfENF0V", // Mírános Ahora - Calibre 50
    title: "Esa mirada y ese suéter de cuadros",
    message:
      "Hay cosas que me roban la atención sin avisar, y tu mirada es una de ellas. Te ves con ese suéter de cuadros y algo en mí se detiene. No sé cómo lo haces, pero cada foto tuya tiene algo que me atrapa. Creo que eso nunca va a cambiar.",
    emoji: "🌟",
    color: "hsl(45, 85%, 63%)",
  },
  {
    id: 9,
    photo: "/photos/photo-9.jpg",
    photoType: "nosotros",
    spotifyTrackId: "2318Aoqig6HS9YkHGlAm8T", // Te Regalo - Rels B
    title: "Tú, desde cualquier ángulo",
    message:
      "No importa la foto, no importa el momento. Siempre hay algo en ti que va más allá de lo físico. Se nota la persona noble que eres. Se nota que hay algo bueno dentro de ti que simplemente no puedes esconder. Eso es lo que más me enamora.",
    emoji: "🤝",
    color: "hsl(350, 70%, 68%)",
  },
  {
    id: 10,
    photo: "/photos/photo-10.jpg",
    photoType: "nosotros",
    spotifyTrackId: "1jBYN6IEVkExTE3R4O9trC", // Por Tu Amor - Alacranes Musicales
    title: "Lo que veo cuando te miro",
    message:
      "Belleza sí, pero sobre todo nobleza. Hay personas que tienen algo que no se compra ni se aprende, y tú lo tienes. Cada foto me lo recuerda. Eres de las personas más genuinas que he conocido en mi vida.",
    emoji: "🎭",
    color: "hsl(50, 90%, 60%)",
  },
  {
    id: 11,
    photo: "/photos/photo-11.jpg",
    photoType: "nosotros",
    spotifyTrackId: "5242jcrB2d6j37aPqQwrX9", // Almohada - José José
    title: "Tú en tu elemento",
    message:
      "Esa blusa de flores, el pantalón formal, la capacitación. Me encanta verte así. Me encanta verte en tu mundo, seria y enfocada, porque me recuerda que eres una mujer que va con todo. Y que verla crecer es uno de los privilegios más grandes que tengo.",
    emoji: "☁️",
    color: "hsl(210, 55%, 70%)",
  },
  {
    id: 12,
    photo: "/photos/photo-12.jpg",
    photoType: "nosotros",
    spotifyTrackId: "0aTMBEfPCCkKkneU6gLmDD", // El Triste - José José
    title: "Hasta en los días nublados",
    message:
      "El cielo gris de fondo y tú con esa sonrisa. Como si el clima no pudiera con lo que llevas dentro. Así eres. No importa lo que esté pasando afuera, hay algo en ti que siempre encuentra la manera de brillar. Eso me enamora todos los días.",
    emoji: "🍃",
    color: "hsl(150, 60%, 60%)",
  },
  {
    id: 13,
    photo: "/photos/photo-13.jpeg",
    photoType: "lugar",
    spotifyTrackId: "0GTmb9brdEmNQpJN1keNAZ", // Sabor a Mí - Los Panchos
    title: "Frente al espejo, y yo viéndote",
    message:
      "Esa chumpa, ese espejo, y tú siendo tú. No sé cómo estemos en este momento en que leas esto. Pero lo que sí sé es que te amo. Que lo que siento por ti es real. Y que cada vez que te veo, sin importar cómo estemos, lo primero que pienso es: qué afortunado soy.",
    emoji: "🗺️",
    color: "hsl(155, 60%, 58%)",
  },
  {
    id: 14,
    photo: "/photos/photo-14.jpg",
    photoType: "nosotros",
    spotifyTrackId: "4CYeId6mLAasOb6o0NCz4Y", // Yo Te Esperaré - Cuco
    title: "El día que te fuiste de viaje",
    message:
      "Recuerdo ese día. La extrañé desde el momento en que salió. Pero luego me llamó, y algo en mí se acomodó. Eso es lo que me pasa con ella: su voz tiene el poder de hacer que todo se sienta menos pesado. Cómo amo a esa mujer.",
    emoji: "🌺",
    color: "hsl(10, 75%, 65%)",
  },
  {
    id: 15,
    photo: "/photos/photo-15.jpg",
    photoType: "ella",
    spotifyTrackId: "7wUt1v2ddVqPayC8EKDp5P", // Cómo Te Hago Entender - José José
    title: "El cierre de práctica y esa versión tuya",
    message:
      "El pelo alisado, la playera de Spiderman, y tú radiando algo diferente ese día. Vi otra versión tuya que me encantó. Y me di cuenta de que siempre hay algo nuevo en ti que descubrir. Eso es lo que me pasa: cada día me enamoro de algo distinto.",
    emoji: "🌀",
    color: "hsl(170, 65%, 58%)",
  },
  {
    id: 16,
    photo: "/photos/photo-16.jpg",
    photoType: "familia",
    spotifyTrackId: "TU_CARCEL_LOS_BUKIS", // Tu Cárcel - Los Bukis
    title: "Ese suéter gris y esa sonrisa",
    message:
      "Siempre con esa sonrisa que te caracteriza. No importa lo que lleves puesto, no importa el momento. Hay algo en ti que siempre se ve bien. Pero sobre todo hay algo en ti que siempre se siente bien. Y eso no lo encuentro en ningún otro lado.",
    emoji: "🏡",
    color: "hsl(35, 75%, 63%)",
  },
  {
    id: 17,
    photo: "photo-17.jpeg",
    photoType: "ella",
    spotifyTrackId: "ME_VA_A_EXTRANIAR_ALEJANDRO", // Me Va a Extrañar - Alejandro Fernández
    title: "El vestido, el cierre, y ese día",
    message:
      "Aún recuerdo ese día. El vestido, esa versión tuya que me dejó sin palabras. Hay momentos que uno guarda no en fotos sino en algún lugar más adentro. Ese es uno de ellos. La amo mucho. Más de lo que a veces sé decirle.",
    emoji: "📖",
    color: "hsl(220, 60%, 68%)",
  },
  {
    id: 18,
    photo: "/photos/photo-18.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "BESAME_MUCHO_TITO_RODRIGUEZ", // Bésame Mucho - Tito Rodríguez
    title: "Nuestras llamadas de las noches",
    message:
      "Haciéndose la dormida, y yo sonriendo solo de verla. Nuestras llamadas nocturnas son una de las cosas más bonitas que hemos construido. No sé cómo estemos cuando leas esto, pero eso que creamos juntos, esa rutina, ese espacio, es algo que no se construye fácil con nadie. Lo atesoro con todo.",
    emoji: "🕊️",
    color: "hsl(180, 50%, 65%)",
  },
  {
    id: 19,
    photo: "/photos/photo-19.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "NOCHE_DE_BODAS_LOS_BUKIS", // Noche de Bodas - Los Bukis
    title: "El día de la llanta y tú",
    message:
      "Íbamos a Panajachel, nuestro primer viaje, y se averió la llanta. Ese día me sentí mal. Pero estabas tú. Y tú me entendiste sin que yo tuviera que explicar mucho. Tu compañía ese día me hizo sentir que todo estaba bien. Eso es lo que eres para mí: el lugar donde todo se siente menos pesado.",
    emoji: "💎",
    color: "hsl(195, 70%, 62%)",
  },
  {
    id: 20,
    photo: "/photos/photo-20.jpg",
    photoType: "lugar",
    spotifyTrackId: "SI_ME_DEJAS_JULIO_IGLESIAS", // Si Me Dejas No Vale - Julio Iglesias
    title: "Ese collar y esa sonrisa",
    message:
      "Verte con ese collar que te regalé me llena de algo que no sé nombrar bien. Orgullo, amor, gratitud. Todo junto. Cada momento contigo lo atesoro con todo mi corazón. Eres lo mejor que me ha pasado. Quiero que lo sepas y que nunca lo dudes.",
    emoji: "🌅",
    color: "hsl(40, 85%, 65%)",
  },
  {
    id: 21,
    photo: "/photos/photo-21.jpeg",
    photoType: "ella",
    spotifyTrackId: "LO_PASADO_PASADO_JOSE_JOSE", // Lo Pasado Pasado - José José
    title: "El cumpleaños y tu mundo",
    message:
      "Ese día del cumpleaños, viéndote feliz, me di cuenta de lo afortunado que soy de que me hayas dejado entrar a tu mundo. No sé cómo estemos ahora. Pero sí sé que todo el amor que te he dado es genuino. Que quiero que seas tú la persona que me acompañe. Te amo mucho.",
    emoji: "🌠",
    color: "hsl(270, 60%, 70%)",
  },
  {
    id: 22,
    photo: "/photos/photo-22.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "IDGAF_RELSB", // IDGAF - Rels B
    title: "Nuestro primer San Valentín",
    message:
      "Nuestro primer San Valentín juntos. Lo recuerdo y siento todo al mismo tiempo. Me arrepiento de ese día, de lo que pasó, de no haber cuidado lo que tenía en mis manos. Pero también sé que este año contigo ha sido el mejor de mi vida. Las rutinas, los hábitos, los detalles, las llamadas. Todo. No quiero que dudes el amor que te tengo. Es real. Siempre lo ha sido.",
    emoji: "🎁",
    color: "hsl(350, 75%, 66%)",
  },
  {
    id: 23,
    photo: "/photos/photo-23.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "TRACK_ID_AQUI",
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
