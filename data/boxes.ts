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
      "Día 12... qué rápido pasa el tiempo mi amor ❤️. \n\nY hoy también es un día especial: 4 del mes, un mes más a tu lado. Solo pensarlo me hace profundamente feliz.\n\n" +
      "Otra foto tuya, otra vez tú con esa sonrisa tan tuya... esa que me enamora siempre. Así eres tú: no importa lo que esté pasando alrededor, siempre hay algo en ti que encuentra la forma de brillar. Y eso... eso me enamora todos los días.\n\n" +
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
      "Otra foto tuya... y no puedo evitar volver a ese momento en el que comenzaste a enviarme fotos de dónde estabas, de cómo ibas, de tu día. Desde el inicio eso me hizo sentir muy especial. Y aunque ahora se haya vuelto algo más cotidiano entre nosotros, créeme... sigo sintiendo exactamente la misma emoción cada vez que recibo una foto tuya, sobre todo cuando es inesperada. Sigo sintiéndome igual de especial.\n\n" +
      "Te amo. Lo que siento por ti es real y cada día es más fuerte. Y cada vez que te veo, sin importar cómo estemos o cómo haya sido el día, lo primero que pasa por mi mente es: qué afortunado soy de tenerte a mi lado.\n\n" +
      "Siempre hay algo en ti que me da calma, que me hace sentir que estoy en el lugar correcto. Que estoy en casa. Y eso, mi amor... eso no tiene precio.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "🪞",
    color: "hsl(155, 60%, 58%)",
  },
  {
    id: 14,
    photo: "/photos/photo-14.jpg",
    photoType: "nosotros",
    spotifyTrackId: "0xXhgLXfEHnWJHVgRvFvdn", // Creo en tí Reik
    title: "El día que te fuiste de viaje",
    message:
      "Recuerdo ese día mi amor... te fuiste de viaje.\n\n" +
      "Sabía que no nos veríamos ese fin de semana, pero había algo distinto... no esperaba extrañarte así, no era solo la distancia. Era saber que no estabas cerca, que no estábamos en el mismo lugar, y eso hizo que empezara a extrañarte más de lo normal.\n\n" +
      "Aun así, hablar contigo durante el día hizo que todo se sintiera más ligero. Y fue justo ahí donde me di cuenta de algo: ya no eras alguien más... ya eras alguien esencial para mí.\n\n" +
      "Recuerdo que te pedi una foto, casi insistiendo jejeje... y cuando me lo enviaste, no tienes idea de lo especial que me sentí. Es una foto tan natural, tan tuya... y eso es lo que más me encanta: tu belleza sin esfuerzo.\n\n" +
      "Y luego, tu llamada en la noche... no la esperaba, pero fue una sorpresa hermosa. Aunque hablamos poco, fue suficiente para hacerme muy feliz. Escuchar tu voz, saber cómo estabas, cómo la habías pasado... esos pequeños momentos tuyos significan muchísimo para mí.\n\n" +
      "Gracias por esos detalles mi amor.\n\n" +
      "Te amo muchísimo ❤️",
    emoji: "🌺",
    color: "hsl(10, 75%, 65%)",
  },
  {
    id: 15,
    photo: "/photos/photo-15.jpg",
    photoType: "ella",
    spotifyTrackId: "7HW5tUjaKxBUamSi7nnzPt", // Eso y más - Joan Sebastian
    title: "El cierre de práctica y esa versión tuya",
    message:
      "Después de ese día en el que entendí lo importante que ya eras para mí... empezaron a venir momentos que solo lo confirmaban.\n\n" +
      "Este día fue uno de esos.\n\n" +
      "Tu cierre de prácticas. Recuerdo que me contabas que no sabías si plancharte el pelo... y yo, con esa emoción de verte, creo que insistí un poquito más de la cuenta. Quería ver otra versión tuya.\n\n" +
      "Y cuando te vi... wow.\n\n" +
      "El pelo alisado, la playera de Spiderman... y tú. Diferente, pero siendo completamente tú al mismo tiempo. Hay algo en esa foto que siempre me hace detenerme.\n\n" +
      "Porque no importa cómo estés, cómo te arregles o cómo decidas verte... tu belleza no depende de nada de eso. Es tuya. Es natural. Y se nota.\n\n" +
      "Sé que esta es una de tus fotos favoritas, que la tienes en tus redes... y aunque suene un poco egoísta, hay una parte de mí que quisiera guardar esa versión tuya solo para mí. Pero al mismo tiempo, saber que esa mujer increíble me ama... es suficiente para hacerme sentir afortunado.\n\n" +
      "Te amo muchísimo.\n\n" +
      "Y créeme... ese día tiene más historia de la que parece.\n\n" +
      "Pero eso... lo sabrás luego... ❤️",
    emoji: "🌀",
    color: "hsl(170, 65%, 58%)",
  },
  {
    id: 16,
    photo: "/photos/photo-16.jpg",
    photoType: "familia",
    spotifyTrackId: "5z4O1H0vFY0Nh4ZMtfgapP", // Solo con verte - Banda MS
    title: "Esa sonrisa tuya...",
    message:
      "Creo que todavía no nos conocíamos cuando te tomaste esta foto… o quizá aún no existía esa confianza de compartirnos fotos así.\n\n" +
      "Pero cada vez que la veo pienso exactamente lo mismo: qué hermosa te veías.\n\n" +
      "Ese suéter gris, esa sonrisa tan natural y esa forma tan tuya de verte bonita sin siquiera intentarlo. Hay muchas fotos tuyas que me encantan… pero esta definitivamente es una de mis favoritas.\n\n" +
      "A veces me pongo a pensar en lo mucho que me habría gustado conocerte desde antes. Haber estado ahí, verte así en persona, acompañarte aunque fuera un rato.\n\n" +
      "Como te lo he dicho, compartir contigo siempre es algo que me nace hacerlo porque me importas muchísimo, porque te quiero y porque sinceramente disfruto cualquier momento contigo, sin importar el plan.\n\n" +
      "Y sí… no voy a negarlo. Hay una parte egoísta en mí que quisiera ser el único capaz de admirar esa belleza tuya. Como te he dicho antes, a veces quisiera poder guardarte solo para mí.\n\n" +
      "Pero al mismo tiempo, también me da tranquilidad y felicidad saber que, entre todas las personas del mundo… eres tú quien decidió amarme.\n\n" +
      "Quizá hoy esperabas la continuación de la historia jejeje… y sí, ya falta poco.\n\n" +
      "Porque créeme, todavía me quedan muchas cosas bonitas por contarte, mi amor ❤️",
    emoji: "🩶",
    color: "hsl(36, 16%, 67%)",
  },
  {
    id: 17,
    photo: "/photos/photo-17.jpeg",
    photoType: "ella",
    spotifyTrackId: "50WkRwFR0BAo6If7GtXnA8", // Disfruto - Carla Morrison
    title: "El vestido, el cierre, y ese día",
    message:
      "Como te lo he dicho antes… ese día significó mucho más de lo que quizá imaginabas.\n\n" +
      "Fue una de las primeras veces que realmente me dejaste entrar a tu mundo. Y aunque tal vez no lo notes, eso siempre ha sido algo muy importante para mí.\n\n" +
      "Me encanta conocerte en todos tus espacios: tus amigos, tus compañeros, tu familia, las personas que forman parte de tu vida. Porque conocer ese mundo tuyo me hace sentir más cerca de ti.\n\n" +
      "Recuerdo que me contaste que no habías invitado a nadie de tu familia a la presentación de tu cierre… y entre bromas salió que podrías invitarme. No te imaginas lo feliz que me puse por un momento. Después me dijiste que te daba pena y que mejor no… y lo entendí.\n\n" +
      "Luego quedamos en que solo pasaría por ti. Pero mientras esperaba, pero no me imaginé que me llamarías para preguntarme si quería acompañarte a almorzar.\n\n" +
      "Y no tienes idea de lo feliz que me hizo eso.\n\n" +
      "Recuerdo que incluso estaba nervioso. No sabía quiénes estarían ahí: amigos, compañeros, conocidos… pero todo eso se me olvidó cuando saliste a encontrarme.\n\n" +
      "De verdad… cuando te vi, me sorprendiste otra vez.\n\n" +
      "Ese vestido, el pelo liso, tu sonrisa… te veías increíblemente hermosa. Y en ese momento solo pude pensar en lo afortunado que soy de que una mujer así me ame.\n\n" +
      "Todavía recuerdo ese abrazo y ese beso cuando llegaste conmigo. Puede parecer algo pequeño, pero para mí fue un momento muy especial.\n\n" +
      "Y después… me presentaste a tus amigas/compañeras, me dejaste entrar un poquito más en tu vida. Y aunque quizá no lo notes, esos gestos significan muchísimo para mí.\n\n" +
      "No lo voy a negar jajaja… también me hubiera encantado verte exponer.\n\n" +
      "Gracias por compartir conmigo tus momentos, tus espacios y poco a poco tu mundo.\n\n" +
      "Quiero seguir siendo eso para ti: alguien que te acompañe, te apoye y esté a tu lado en cada etapa.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "📖",
    color: "hsl(220, 60%, 68%)",
  },
  {
    id: 18,
    photo: "/photos/photo-18.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "2JBs412fpVUuzIaIp3CyIs", // Bendiata tu luz - Maná
    title: "Nuestras llamadas de las noches...",
    message:
      "Creo que una de las cosas más bonitas que hemos creado son nuestras llamadas por las noches.\n\n" +
      "Esta foto siempre me da mucha ternura. Ahí estabas, haciéndote la dormida mientras hablábamos… y yo simplemente sonriendo al verte.\n\n" +
      "Creo que no te das cuenta de lo feliz que me hacían —y me siguen haciendo— nuestras llamadas nocturnas. Poco a poco se volvieron una rutina, pero una de esas rutinas bonitas que se sienten como hogar.\n\n" +
      "Hablar contigo al final del día, escucharte, quedarnos en silencio a veces, reírnos por tonterías o simplemente saber que estas ahí… son de las cosas más especiales que hemos construido juntos.\n\n" +
      "Y sinceramente, no creo que algo así se construya fácil con cualquiera.\n\n" +
      "Quizá te lo he dicho poco, pero para mí significan mucho, y los guardo con muchísimo cariño.\n\n" +
      "Porque contigo incluso lo más simple termina sintiéndose especial.\n\n" +
      "Te amo muchísimo ❤️",
    emoji: "💤",
    color: "hsl(216, 83%, 54%)",
  },
  {
    id: 19,
    photo: "/photos/photo-19.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "6m2zdtNuSoZSjN4FtNR1sJ", // Te Regalo - Carla Morrison
    title: "Nuestro primer viaje juntos...",
    message:
      "Esta foto siempre me recuerda algo muy importante de nosotros.\n\n" +
      "El intento de nuestro primer viaje.\n\n" +
      "Recuerdo perfectamente ese día. Habíamos planeado ir a Panajachel, desayunar juntos y pasar tiempo los dos. Yo fui por ti, y sinceramente estaba emocionado.\n\n" +
      "Y claro… tú te veías hermosísima. Esa chaqueta, tu sonrisa, tu forma de verte bonita sin esfuerzo como siempre.\n\n" +
      "Pero en el camino empecé a escuchar un ruido extraño en el carro. Recuerdo que te lo comenté intentando no preocuparme demasiado… aunque por dentro sí me estaba poniendo nervioso.\n\n" +
      "Había algo en mí que sabía que ese ruido no era normal.\n\n" +
      "Recuerdo que incluso hablamos sobre si seguir o regresar. Los dos estábamos indecisos, pero al final decidimos volver. Y aunque era algo que no podía controlar, la verdad es que me sentí mal.\n\n" +
      "Me sentí triste porque ya teníamos planes, porque quería que todo saliera bien y porque no sabía qué hacer.\n\n" +
      "Pero entonces pasó algo que nunca voy a olvidar.\n\n" +
      "Tú.\n\n" +
      "No me culpaste, no te molestaste, no hiciste que me sintiera peor. Todo lo contrario. Me abrazaste, me comprendiste y estuviste conmigo.\n\n" +
      "Y créeme… ese abrazo me reconfortó muchísimo.\n\n" +
      "Luego de pasar por el taller, fuimos a desayunar a Metroplaza, pasamos al supermercado, estuvimos esperando mientras revisaban el carro… y aunque el viaje no salió como lo planeamos, hubo algo que sí salió perfecto: tu compañía ❤️.\n\n" +
      "Aún tengo la foto de la pequeña llanta que le colocaron jajaja.\n\n" +
      "Pero lo que más guardo de ese día no es el problema del carro. Es cómo me hiciste sentir.\n\n" +
      "Porque en un momento donde yo me sentía frustrado y triste, tú hiciste que todo se sintiera menos pesado.\n\n" +
      "Y ahí entendí algo más sobre ti: eres paz incluso en los días que no salen bien.\n\n" +
      "Gracias por tu paciencia, por tu cariño y por la forma tan bonita en la que me has amado.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "💎",
    color: "hsl(195, 70%, 62%)",
  },
  {
    id: 20,
    photo: "/photos/photo-20.jpeg",
    photoType: "lugar",
    spotifyTrackId: "1p4rYrxjVkj6v2eMzRhLfA", // Arrulló de Estrellas - Zoé
    title: "Nuestros sábados...",
    message:
      "Esta vez sí salió bien... (nuestro viaje a Panajachel jajaja ❤️).\n\n" +
      "Y sinceramente… este día se quedó guardado en mí de una forma muy especial.\n\n" +
      "Recuerdo que ya te había contado que mi mamá quería que estuvieras presente en la celebración de mi cumpleaños. Quería que almorzaras con nosotros porque poco a poco también te has vuelto alguien importante para mi familia… y sobre todo para mí (lo han notado).\n\n" +
      "Y no sabes lo feliz que me hizo que estuvieras ahí.\n\n" +
      "Hay algo muy bonito en esta foto. Tal vez tú dices que no es de tus favoritas… pero para mí sí lo es.\n\n" +
      "Porque guarda muchas coasas, además de que te ves exactamente como más me gusta verte: natural, tranquila, sonriendo sin esfuerzo. Y una vez más confirmo algo que siempre te digo: tu belleza no depende de nada más, porque simplemente nace de ti.\n\n" +
      "Y mientras veo esta foto también pienso en todo lo que significaron nuestros sábados.\n\n" +
      "Nuestros desayunos, las salidas improvisadas, los planes que a veces salían y a veces no, terminar casi siempre en mi casa jajaja… todo eso se volvió una parte muy bonita de mi vida.\n\n" +
      "Quizá los planes nunca fueron extravagantes, pero contigo nunca hizo falta algo grande para que un día se sintiera especial.\n\n" +
      "Porque he entendí algo contigo: ningún plan es malo si estoy a tu lado.\n\n" +
      "El simple hecho de coincidir contigo, compartir tiempo contigo y sentirme acompañado por ti… ya hacía que todo valiera la pena.\n\n" +
      "Y nunca voy a olvidar cuando me dijiste que querías seguir pasando esos sábados conmigo, que querías acompañarme porque sabías que ya no nos veríamos tanto.\n\n" +
      "Tal vez no sabes cuánto significó eso para mí.\n\n" +
      "Ese día me sentí profundamente amado.\n\n" +
      "Aunque también, siendo sincero, con el tiempo empecé a tener miedo de que esos días terminaran algún día. Y creo que ambos sabíamos que las cosas cambiarían.\n\n" +
      "Pero aun así… gracias.\n\n" +
      "Gracias por regalarme tantos recuerdos bonitos.\n\n" +
      "Gracias por tu tiempo, tu cariño, tu paciencia y tu amor.\n\n" +
      "Y perdón si alguna vez alguna salida no fue lo que esperabas. Pero quiero que sepas algo: para mí, cada sábado contigo fue perfecto.\n\n" +
      "Porque estabas tú.\n\n" +
      "Y eso siempre fue suficiente para hacerme feliz.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "🌅",
    color: "hsl(40, 85%, 65%)",
  },
  {
    id: 21,
    photo: "/photos/photo-21.jpeg",
    photoType: "ella",
    spotifyTrackId: "3GSMdtJphymHEsR8K9jT5Q", // Locos - León Larregui
    title: "Parte de tu mundo...",
    message:
      "Creo que este fue uno de esos días donde entendí todavía más lo mucho que significas para mí.\n\n" +
      "Desde el momento en que me dijiste que querías que te acompañara al cumpleaños, me sentí especial. Aunque al inicio me decías que fuera solo por ti, sinceramente eso ya era suficiente para mí. Porque como siempre te he dicho: cualquier plan contigo se vuelve especial.\n\n" +
      "Pero luego me dijiste que sí podía acompañarte realmente… y no sabes la felicidad que me dio.\n\n" +
      "Ese día conocí otra parte de ti.\n\n" +
      "Recuerdo perfectamente ir por ti, llegar por primera vez a tu lugar de trabajo. Todo era nuevo para mí. Entrar ahí, lo acepto, un poco nervioso y apenado jajaja, conocer el lugar donde pasas tus mañanas, imaginarte conviviendo con tus niños, verte en tu ambiente… fue bonito.\n\n" +
      "Y luego comenzó todo...\n\n" +
      "Te veía activa desde el inicio, ayudando a adornar, organizando cosas, sirviendo comida, pendiente de todos. Y honestamente, eso también me enamora muchísimo de ti.\n\n" +
      "Porque ahí note que eres una persona servicial, atenta y entregada. Y créeme… eso habla muchísimo de quién eres.\n\n" +
      "Después vinieron los juegos y ahí conocí otra versión tuya.\n\n" +
      "Te vi segura, llena de energía, captando la atención de todos, sonriendo, dirigiendo… y aunque tú me hayas dicho que a veces te pones nerviosa en esas situaciones, ese día yo solo veía a una mujer increíble brillando.\n\n" +
      "Y mientras te veía, solo podía pensar en lo afortunado que soy de poder estar a tu lado.\n\n" +
      "También recuerdo cómo pasamos ese día. Entre abrazos, risas, pláticas… quizá sí nos veíamos un poco acaramelados jajaja, pero sinceramente contigo me pierdo.\n\n" +
      "Y luego el día todavía tenía más sorpresas.\n\n" +
      "Recuerdo que ibas a encontrarte con tu mamá y Shirley para ir a la misa y luego ver disfraces. Aunque ya no llegamos a la misa, solo me queda esperar contigo a su salida. Y sí… yo insistiendo como siempre jajaja, preguntándote si podía acompañarlas luego para ver disfraces.\n\n" +
      "La verdad no esperaba que aceptaran.\n\n" +
      "Pero cuando me dijiste que sí podía quedarme con ustedes, me sentí especial.\n\n" +
      "Convivir contigo y con tu familia fue algo nuevo para mí. Y aunque estaba nervioso, también estaba muy feliz.\n\n" +
      "Gracias por dejarme entrar poco a poco a tu mundo.\n\n" +
      "Porque créeme… eso me demuestra muchísimo tu amor.\n\n" +
      "Y quiero que sepas algo: yo también he querido poco a poco abrirte las puertas de mi vida, que conozcas a mi familia, a mis amigos, a mi mundo. Porque sí… yo también te imagino conmigo en todo.\n\n" +
      "Acompañándome, riendo conmigo, estando presente en cada etapa de mi vida.\n\n" +
      "Porque contigo me siento bien.\n\n" +
      "Me das paz, cariño y una sensación de hogar difícil de explicar.\n\n" +
      "Y aunque sé que no todos los días serán perfectos, quiero que sepas que siempre voy a intentar darte lo mejor de mí.\n\n" +
      "Porque te elijo.\n\n" +
      "Y porque mi amor por ti no ha dejado de crecer desde el día en que llegaste a mi vida.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "🌠",
    color: "hsl(270, 60%, 70%)",
  },
  {
    id: 22,
    photo: "/photos/photo-22.jpeg",
    photoType: "nosotros",
    spotifyTrackId: "3DDtJh2PeHXUQ90uSZOoyg", // Pideme la luna - Leo Dan
    title: "Nuestro primer San Valentín",
    message:
      "Nuestro primer San Valentín juntos… y sinceramente, es un recuerdo que llevo guardado con muchísimo cariño.\n\n" +
      "A veces pienso en todo lo que vivimos ese día y siento muchas cosas al mismo tiempo.\n\n" +
      "Porque sí… hubo cosas que quizá pude hacer mejor, momentos donde no supe expresarme o demostrarte todo como realmente quería.\n\n" +
      "Pero incluso con todo eso, ese día sigue siendo uno de los recuerdos más especiales que tengo contigo.\n\n" +
      "Porque para mí era mi primer San Valentín al lado de alguien que realmente amo.\n\n" +
      "Y quizá muchas de las cosas que hemos vivido para ti no son nuevas… pero para mí sí lo han sido. Y..., eso hace que cada detalle contigo tenga todavía más valor.\n\n" +
      "Por eso espero que cada gesto, cada salida, cada abrazo, cada regalo, cada recuerdo y cada muestra de cariño que te he dado… la guardes con el mismo amor con el que yo guardo todo lo nuestro.\n\n" +
      "Recuerdo ir por ti, salir juntos, almorzar (hacer nuestra pizza), estar contigo en ese ambiente tan bonito y romántico… y sinceramente, yo solo estaba perdido en ti.\n\n" +
      "Y aunque quizá a veces me cuesta demostrar algunas cosas o encontrar la forma correcta de hacerlo, quiero que sepas algo:\n\n" +
      "todo lo hago con muchísimo amor hacia ti.\n\n" +
      "También recuerdo cuando me diste tu regalo.\n\n" +
      "Aunque ya tenía la ilusión de recibir algo tuyo, cuando lo vi me sentí increíblemente especial. Porque te había contado que nunca había recibido ese tipo de detalles de alguien… y luego llegaste tú.\n\n" +
      "Y créeme, cada cosa que viene de ti la guardo como algo muy valioso.\n\n" +
      "Pero sobre todo… la carta... sinceramente fue una de las cosas más bonitas que alguien ha hecho por mí.\n\n" +
      "Porque sé que escribir no siempre es fácil para ti, me lo has dicho. Y aun así, te sentaste a escribir lo que sentías por mí.\n\n" +
      "Leer tus pensamientos, saber que tomaste tu tiempo para poner en palabras tus sentimientos y dejar una parte de ti en una hoja… eso me hizo sentir amado de una manera muy difícil de explicar.\n\n" +
      "Y sí… lo atesoro muchísimo.\n\n" +
      "Ese día también entendí algo:\n\n" +
      "ya no estaba celebrando una fecha cualquiera.\n\n" +
      "Ahora tenía a alguien especial con quien compartir esos momentos.\n\n" +
      "Y eso me hacía profundamente feliz.\n\n" +
      "Gracias por ese recuerdo.\n\n" +
      "Gracias por tu paciencia, por entenderme incluso cuando no sé expresarme bien, por escucharme, por acompañarme y por seguir aquí incluso con mis defectos.\n\n" +
      "Y perdón si a veces fallo, si tengo días difíciles, mal carácter o comentarios fuera de lugar.\n\n" +
      "Pero quiero que sepas que sí estoy intentando crecer, mejorar y encontrar mi mejor versión.\n\n" +
      "Porque te amo.\n\n" +
      "Y porque eres la persona con la que quiero estar.\n\n" +
      "Quiero hacerte sentir amada, especial y feliz, así como tú me haces sentir a mí todos los días.\n\n" +
      "Nuestro primer San Valentín siempre va a vivir dentro de mí.\n\n" +
      "Y tú también.\n\n" +
      "Te amo muchísimo mi amor ❤️",
    emoji: "🎁",
    color: "hsl(350, 75%, 66%)",
  },
  {
    id: 23,
    photo: "/photos/photo-23.jpg",
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
