export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "ul"; v: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  minutes: number;
  service: { href: string; label: string };
  body: Block[];
};

export const DISCLAIMER =
  "Este artículo es informativo y no reemplaza una consulta. Si tienes síntomas, agenda una revisión.";

export const posts: Post[] = [
  {
    slug: "fatiga-visual-pantallas-habitos",
    title: "Fatiga visual por pantallas: 6 hábitos que ayudan",
    description:
      "Ardor, visión borrosa y dolor de cabeza después de usar el celular o la computadora. Qué es la fatiga visual digital y qué hábitos ayudan a aliviarla.",
    date: "2026-10-10",
    category: "Pantallas",
    minutes: 4,
    service: { href: "/lentes-zeiss-loja", label: "Ver lentes para trabajo digital" },
    body: [
      { t: "p", v: "Si al final del día te arden los ojos, ves borroso o te duele la cabeza, es probable que estés pasando por fatiga visual digital. Es muy frecuente y casi siempre mejora con cambios simples." },
      { t: "h2", v: "Por qué ocurre" },
      { t: "p", v: "Cuando miras una pantalla parpadeas menos, enfocas de cerca durante horas y a veces con mala luz o poca distancia. Los ojos se secan y los músculos que enfocan se cansan." },
      { t: "h2", v: "Seis hábitos que ayudan" },
      { t: "ul", v: [
        "Aplica la regla 20-20-20: cada 20 minutos, mira algo a unos 6 metros durante 20 segundos.",
        "Parpadea de forma consciente. Al concentrarte, parpadeas mucho menos.",
        "Aleja la pantalla y colócala un poco por debajo de la altura de tus ojos.",
        "Usa buena iluminación y evita el celular en la oscuridad total.",
        "Haz pausas reales durante la jornada, no solo cambiar de pantalla.",
        "Revisa tu graduación: una receta desactualizada aumenta el cansancio.",
      ] },
      { t: "h2", v: "Cuándo consultar" },
      { t: "p", v: "Si las molestias persisten pese a los cambios, si ves doble o si notas que tu visión cambia, conviene un examen visual. A veces hay una graduación pequeña sin corregir, y existen lentes pensados para el trabajo digital." },
    ],
  },
  {
    slug: "astigmatismo-sintomas-y-cuando-consultar",
    title: "Astigmatismo: síntomas y cuándo consultar",
    description:
      "Qué es el astigmatismo, cómo se nota y cómo se corrige con lentes o lentes de contacto. Cuándo conviene un examen visual.",
    date: "2026-10-09",
    category: "Visión",
    minutes: 4,
    service: { href: "/examen-visual-loja", label: "Agendar examen visual" },
    body: [
      { t: "p", v: "El astigmatismo es un defecto de la visión muy común. Ocurre cuando la superficie del ojo, normalmente la córnea, no es perfectamente redonda y la luz no se enfoca en un solo punto." },
      { t: "h2", v: "Cómo se nota" },
      { t: "ul", v: [
        "Visión borrosa o distorsionada, de lejos y de cerca.",
        "Dificultad para ver de noche, con halos o destellos alrededor de las luces.",
        "Cansancio visual y dolor de cabeza.",
        "Necesidad de entrecerrar los ojos.",
      ] },
      { t: "h2", v: "Cómo se corrige" },
      { t: "p", v: "Con lentes, que compensan la forma del ojo, o con lentes de contacto adaptados. El examen visual mide el grado y el eje del astigmatismo y define la mejor opción." },
      { t: "h2", v: "Cuándo ir más allá del examen común" },
      { t: "p", v: "Si el astigmatismo cambia rápido de un control a otro o la visión no mejora bien con lentes, tu especialista puede pedir un estudio de la córnea para descartar otras condiciones." },
    ],
  },
  {
    slug: "ojos-rojos-causas-y-senales-de-alarma",
    title: "Ojos rojos: causas frecuentes y señales de alarma",
    description:
      "Por qué se ponen rojos los ojos: conjuntivitis, sequedad, alergia y otras causas. Qué señales indican que debes consultar el mismo día.",
    date: "2026-10-08",
    category: "Urgencias",
    minutes: 4,
    service: { href: "/urgencias-oculares-loja", label: "Ver atención de urgencias" },
    body: [
      { t: "p", v: "El ojo rojo es una de las consultas más frecuentes. Muchas veces es algo leve, pero en otras ocasiones señala un problema que necesita tratamiento pronto." },
      { t: "h2", v: "Causas frecuentes" },
      { t: "ul", v: [
        "Conjuntivitis viral, bacteriana o alérgica.",
        "Ojo seco o irritación por pantallas, viento o polvo.",
        "Uso prolongado de lentes de contacto.",
        "Un pequeño sangrado bajo la conjuntiva, que se ve como una mancha roja y casi siempre se reabsorbe.",
      ] },
      { t: "h2", v: "Señales de alarma" },
      { t: "ul", v: [
        "Dolor intenso.",
        "Disminución de la visión.",
        "Sensibilidad fuerte a la luz.",
        "Antecedente de golpe, corte o contacto con químicos.",
        "Ojo rojo con lentes de contacto puestos.",
      ] },
      { t: "p", v: "Si presentas alguna de estas señales, consulta el mismo día. Evita las gotas sin indicación: algunas pueden empeorar ciertas infecciones." },
    ],
  },
  {
    slug: "estrabismo-en-ninos-cuando-consultar",
    title: "Estrabismo en niños: señales y cuándo consultar",
    description:
      "Cómo reconocer el estrabismo en un niño, por qué no conviene esperar y en qué consiste la terapia visual.",
    date: "2026-10-07",
    category: "Niños",
    minutes: 4,
    service: { href: "/terapia-visual-estrabismo-loja", label: "Conocer la terapia visual" },
    body: [
      { t: "p", v: "El estrabismo es la desviación de uno o de ambos ojos: no miran al mismo punto a la vez. Puede ser constante o aparecer solo con el cansancio." },
      { t: "h2", v: "Señales a observar" },
      { t: "ul", v: [
        "Un ojo que se va hacia adentro, hacia afuera, arriba o abajo.",
        "Inclinar la cabeza o cerrar un ojo con la luz.",
        "Quejas de visión doble, cansancio al leer o dolor de cabeza.",
        "Torpeza al calcular distancias.",
      ] },
      { t: "p", v: "En los primeros meses de vida puede ser normal un desvío ocasional, pero si persiste o aparece después, conviene consultar." },
      { t: "h2", v: "Por qué no esperar" },
      { t: "p", v: "En los niños, el cerebro puede dejar de usar la información de un ojo para evitar ver doble, y eso puede afectar su visión. Mientras más pronto se evalúa, más opciones hay." },
      { t: "h2", v: "Qué es la terapia visual" },
      { t: "p", v: "Es un entrenamiento guiado de la coordinación de los ojos. Según el caso se combina con lentes o con la valoración del oftalmólogo, que decide si hace falta otro tratamiento." },
    ],
  },
  {
    slug: "regreso-a-clases-salud-visual-ninos",
    title: "Regreso a clases: cómo saber si tu hijo necesita lentes",
    description:
      "Señales de que un niño no ve bien en la escuela y por qué conviene un control visual antes de empezar el año escolar.",
    date: "2026-10-06",
    category: "Niños",
    minutes: 3,
    service: { href: "/examen-visual-loja", label: "Agendar examen visual para tu hijo" },
    body: [
      { t: "p", v: "Muchos niños no dicen que ven mal porque creen que todos ven así. Por eso a veces el problema aparece como bajo rendimiento o falta de atención." },
      { t: "h2", v: "Señales en casa y en la escuela" },
      { t: "ul", v: [
        "Se acerca demasiado al cuaderno, a la pantalla o a la pizarra.",
        "Entrecierra los ojos o se frota los ojos con frecuencia.",
        "Pierde el renglón al leer o evita leer.",
        "Se queja de dolor de cabeza al final de la jornada.",
        "Inclina la cabeza para mirar.",
      ] },
      { t: "h2", v: "Un buen hábito" },
      { t: "p", v: "Un control visual antes de iniciar las clases ayuda a detectar a tiempo la miopía y otros problemas. Si ya usa lentes, revisa que su receta siga vigente." },
    ],
  },
  {
    slug: "queratocono-que-es-y-como-se-detecta",
    title: "Queratocono: qué es y cómo se detecta",
    description:
      "El queratocono adelgaza y deforma la córnea. Síntomas, cómo se diagnostica con tomografía corneal y qué opciones existen.",
    date: "2026-10-05",
    category: "Córnea",
    minutes: 4,
    service: { href: "/centro-oftalmologico-loja", label: "Ver el centro de diagnóstico" },
    body: [
      { t: "p", v: "El queratocono es una condición en la que la córnea se adelgaza y toma una forma más cónica. Suele aparecer en la adolescencia o la juventud y puede avanzar con los años." },
      { t: "h2", v: "Síntomas frecuentes" },
      { t: "ul", v: [
        "Visión borrosa o distorsionada que no se corrige bien con lentes comunes.",
        "Astigmatismo que cambia rápido.",
        "Sensibilidad a la luz y halos.",
        "Frotarse los ojos con frecuencia.",
      ] },
      { t: "h2", v: "Cómo se detecta" },
      { t: "p", v: "Con estudios que mapean la forma y el grosor de la córnea, como la tomografía corneal (Pentacam). Detectarlo temprano permite controlarlo mejor." },
      { t: "h2", v: "Qué opciones existen" },
      { t: "p", v: "Según la etapa, se pueden usar lentes de contacto especiales o procedimientos que buscan frenar su avance. El oftalmólogo define el tratamiento adecuado en cada caso." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const fmtDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });
