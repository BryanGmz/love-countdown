export type PhotoType =
  | "ella-pequeña" // fotos de su infancia / niñez
  | "ella" // fotos de ella sola, de grande
  | "nosotros" // fotos de los dos juntos
  | "familia" // con familia o amigos
  | "lugar" // lugares especiales para los dos
  | null;

export interface BoxData {
  id: number;
  photo: string | null;
  photoType: PhotoType;
  spotifyTrackId: string | null;
  title: string;
  message: string;
  emoji: string;
  color: string;
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
    title: "Roja, como todo lo que siento al verte",
    message:
      "Esa blusa roja, esos labios rojos y esa hermosa mirada. Hay fotos que no necesitan explicación porque lo dicen todo solas. Esta es una de ellas. Verte así, y saber que te convertiste en la mujer que eres hoy, es algo que me deja sin palabras cada vez. Te amo mucho mi niña ❤️",
    emoji: "🔥",
    color: "hsl(20, 90%, 62%)",
  },
  {
    id: 7,
    photo: "/photos/photo-7.png",
    photoType: "ella",
    spotifyTrackId: "6GTX6TGcHEWHoxHXPSVbJ2", // Hermosa Experiencia - Banda MS
    title: "La mujer que hoy eres",
    message:
      "Quizá tendrías unos 18 años en esta foto. Como con todas las fotos, cada vez que las veo me pasa lo mismo: me detengo. Porque eres una mujer hermosa, sí, pero no solo por fuera. Es todo lo que hay detrás de esa mirada, tus sentimientos, tu forma de ser conmigo, tu cariño, tu amor. Todo eso y más es lo que me encanta de ti.\n\n Te amo mucho ❤️",
    emoji: "🌊",
    color: "hsl(190, 75%, 62%)",
  },
  {
    id: 8,
    photo: "/photos/photo-8.png",
    photoType: "nosotros",
    // spotifyTrackId: "5VfkfKTTo5BRKqHwfENF0V", // Mírános Ahora - Calibre 50
    spotifyTrackId: "2nejvFyJeTDtMRP2nUMt0J",
    title: "Esa mirada y esa sonrisa encantadora",
    message:
      "Ya solo quedan 15 días para una fecha muy especial... \n\nHay cosas que me roban la atención sin avisar, tu mirada y tu sonrisa son unas de ellas. Cada que te veo algo en mí se detiene y te lo he dicho siempre. No sé cómo lo haces, pero cada foto y mirada tuya tiene algo que me atrapa. Eso nunca va a cambiar. \n\nEstoy muy agradecido por haberme elegido, quiero que sepas que te amo mucho ❤️",
    emoji: "🌟",
    color: "hsl(45, 85%, 63%)",
  },
  {
    id: 9,
    photo: "/photos/photo-9.jpg",
    photoType: "nosotros",
    // spotifyTrackId: "2318Aoqig6HS9YkHGlAm8T", // Te Regalo - Rels B
    spotifyTrackId: "5NbFWZiEj9WATXs6F1HxGZ",
    title: "Tú, desde cualquier ángulo",
    message:
      "1 de mayo, un día muy especial... ❤️ \n\nComo me pasa con todas tus fotos, y esta no es la excepción, me encata verte. No importa el momento, me llenas el corazón de emociones muy hermosas y me recuerda lo aforntunado que soy. \n\nTu belleza física es notable..., tienes una luz interior que simplemente no puedes esconder. Se nota a simple vista lo buena y noble que eres. Esa escencia tuya es una de las cosas que me enamoran de ti. \n\nTe amo muchísimo ❤️",
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
      "Eres bella mi amor..." +
      "\n\nEres un regalo, y cada día doy gracias por tenerte en mi vida. \n\nHay personas que tienen algo que no se compra ni se aprende, y tú lo tienes mi amor. Cada vez que te veo me lo recuerda. Eres de las personas más genuinas que he conocido en mi vida y te lo he dicho, estoy muy agradecido de que llegaras a mi vida y por haberme dado la oportunidad de amarte." +
      "\n\n Te amo muchísimo mi amor ❤️",
    emoji: "🌻",
    color: "hsl(50, 90%, 60%)",
  },
  {
    id: 11,
    photo: "/photos/photo-11.jpg",
    photoType: "nosotros",
    spotifyTrackId: "0EjIBpgI4rbJjFnQ1kX8xd", // Jamas Eddie Santiago
    title: "Tú en tu mundo",
    message:
      "Creo que ya te lo he dicho, pero esta es una de mis fotos favoritas tuyas...\n\n" +
      "Esa blusa de flores, el pantalón formal y esa sonrisa tan tuya. Recuerdo perfectamente cuando me la enviaste después de aquella actividad en Los Altos. Como siempre me pasa con cada foto tuya, me detuve un momento solo para admirarte y para apreciar lo hermosa que eres mi amor.\n\n" +
      "Hay algo especial en verte crecer, en poder ver cada etapa, de cada logro y de la persona increíble en la que te sigues convirtiendo. Para mí, eso es uno de los privilegios más grandes que tengo.\n\n" +
      "Y sí, quiero seguir siendo tu compañero, caminar a tu lado, acompañarte en cada paso, apoyarte en los días buenos y en los no tan buenos, y recordarte siempre lo valiosa que eres mi amor.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "👩🏻‍🏫",
    color: "hsl(210, 55%, 70%)",
  },
  {
    id: 12,
    photo: "/photos/photo-12.jpg",
    photoType: "nosotros",
    spotifyTrackId: "5fF0fb0VFihGDHFshDLi2Z", // Que bendición Juan Luis Guerra
    title: "Hasta en los días nublados",
    message:
      "Día 12… qué rápido pasa el tiempo mi amor ❤️. \n\nY hoy también es un día especial: 4 del mes, un mes más a tu lado. Solo pensarlo me hace profundamente feliz.\n\n" +
      "Otra foto tuya, otra vez tú con esa sonrisa tan tuya… esa que me enamora siempre. Así eres tú: no importa lo que esté pasando alrededor, siempre hay algo en ti que encuentra la forma de brillar. Y eso… eso me enamora todos los días.\n\n" +
      "Gracias por este tiempo, por cada momento, por cada risa y por todo lo que seguimos construyendo juntos. Me emociona pensar en todo lo que aún nos queda por vivir.\n\n" +
      "Te amo muchísimo, y de verdad espero con muchas ansias seguir compartiendo la vida contigo, acompañándote en cada paso ❤️",
    emoji: "🍃",
    color: "hsl(150, 60%, 60%)",
  },
  {
    id: 13,
    photo: "/photos/photo-13.jpeg",
    photoType: "lugar",
    spotifyTrackId: "2tqkLfkNBp6wFdizAnBYgd", // Conitigo Los Panchos
    title: "Frente al espejo...",
    message:
      "Otra foto tuya… y no puedo evitar volver a ese momento en el que comenzaste a enviarme fotos de dónde estabas, de cómo ibas, de tu día. Desde el inicio eso me hizo sentir muy especial. Y aunque ahora se haya vuelto algo más cotidiano entre nosotros, créeme… sigo sintiendo exactamente la misma emoción cada vez que recibo una foto tuya, sobre todo cuando es inesperada. Sigo sintiéndome igual de especial.\n\n" +
      "Te amo. Lo que siento por ti es real y cada día es más fuerte. Y cada vez que te veo, sin importar cómo estemos o cómo haya sido el día, lo primero que pasa por mi mente es: qué afortunado soy de tenerte a mi lado.\n\n" +
      "Siempre hay algo en ti que me da calma, que me hace sentir que estoy en el lugar correcto. Que estoy en casa. Y eso, mi amor… eso no tiene precio.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "🪞",
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
];
