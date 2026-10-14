import { site } from "@/lib/site";

export type Faq = { q: string; a: string };
export type VisualKey = "exam" | "retina" | "lens" | "align" | "alert";

export type ServicePage = {
  path: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  visual: VisualKey;
  signalsTitle: string;
  signals: string[];
  blocksTitle: string;
  blocks: { title: string; text: string }[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  note?: string;
  faqs: Faq[];
  related: { href: string; label: string }[];
  cta: { title: string; text: string; service: string };
  showPromo?: boolean;
};

export const services: Record<string, ServicePage> = {
  examen: {
    path: "/examen-visual-loja",
    name: "Examen visual",
    metaTitle: "Examen visual en Loja y lentes de contacto",
    metaDescription:
      "Examen visual computarizado en Loja con optometristas: miopía, astigmatismo, presbicia y adaptación de lentes de contacto. Agenda tu cita en Óptica Loja.",
    h1: "Examen visual en Loja: optometría computarizada y lentes de contacto",
    lead: "Medimos tu vista con equipos modernos, te explicamos el resultado sin tecnicismos y, si algo necesita un oftalmólogo, te derivamos dentro del mismo equipo.",
    visual: "exam",
    signalsTitle: "Agenda tu examen si notas que",
    signals: [
      "Ves borroso de lejos o de cerca, o te cuesta cambiar el enfoque.",
      "Te duele la cabeza después de leer o de usar pantallas.",
      "Entrecierras los ojos para ver la pizarra, un letrero o el celular.",
      "Hace más de un año que no te revisas, o tu hijo nunca se ha hecho un control.",
      "Quieres probar lentes de contacto y no sabes si son para ti.",
    ],
    blocksTitle: "Qué incluye tu visita",
    blocks: [
      {
        title: "Medición completa de tu graduación",
        text: "Agudeza visual, miopía, hipermetropía, astigmatismo y presbicia (vista cansada). Primero medimos con equipo computarizado y luego afinamos con el optometrista, porque la máquina da una base y la persona decide el resultado final.",
      },
      {
        title: "Lentes de contacto con seguimiento",
        text: "Evaluamos si son adecuados para ti, los adaptamos, te enseñamos a colocarlos y quitarlos, y revisamos cómo responden tus ojos. Si hay sospecha de una condición de la córnea, como el queratocono, coordinamos estudios en el centro de diagnóstico.",
      },
      {
        title: "Para toda la familia",
        text: "Niños que empiezan la escuela, adultos que trabajan frente a pantallas y personas mayores que notan cambios. Cada edad se examina distinto, y lo ajustamos.",
      },
      {
        title: "Una receta que entiendes",
        text: "Te explicamos qué significan los números, qué corrige cada lente y qué opciones tienes según tu rutina y tu presupuesto.",
      },
      {
        title: "Precio claro",
        text: `La consulta optométrica parte desde $${site.prices.optometry}. Si necesitas ver a un oftalmólogo, te lo decimos antes de que decidas.`,
      },
    ],
    stepsTitle: "Cómo es tu visita",
    steps: [
      { title: "Cuéntanos qué notas", text: "Hablamos de tus síntomas, tu trabajo y tus antecedentes familiares." },
      { title: "Medición computarizada", text: "Una primera lectura rápida de cada ojo, sin molestias." },
      { title: "Examen con el optometrista", text: "Afinamos la graduación y revisamos cómo trabajan tus dos ojos juntos." },
      { title: "Receta y asesoría", text: "Te explicamos el resultado y las opciones de lentes o de lentes de contacto." },
      { title: "Seguimiento", text: "Si algo requiere control o un especialista, lo agendamos contigo." },
    ],
    faqs: [
      {
        q: "¿Cuánto dura un examen visual?",
        a: "Por lo general entre 30 y 45 minutos, aunque depende de cada caso y de si incluye adaptación de lentes de contacto.",
      },
      {
        q: "¿Necesito cita?",
        a: "Te recomendamos agendar por WhatsApp para que tengas un horario asegurado y no esperes. También puedes pasar por la óptica.",
      },
      {
        q: "¿A qué edad debo llevar a mi hijo?",
        a: "Si notas síntomas, a cualquier edad. Antes de iniciar el año escolar es un buen momento para un primer control.",
      },
      {
        q: "¿Qué diferencia hay entre un optometrista y un oftalmólogo?",
        a: "El optometrista mide tu visión, receta y adapta lentes. El oftalmólogo es médico y diagnostica y trata enfermedades de los ojos, incluida la cirugía. En Óptica Loja trabajan ambos y se derivan entre sí.",
      },
      {
        q: "¿Adaptan lentes de contacto?",
        a: "Sí. Evaluamos tus ojos, elegimos el lente, te enseñamos a usarlo y hacemos el seguimiento.",
      },
    ],
    related: [
      { href: "/lentes-zeiss-loja", label: "Lentes ZEISS para tu receta" },
      { href: "/centro-oftalmologico-loja", label: "Centro de diagnóstico oftalmológico" },
      { href: "/blog/astigmatismo-sintomas-y-cuando-consultar", label: "Astigmatismo: síntomas y cuándo consultar" },
    ],
    cta: {
      title: "Reserva tu examen visual",
      text: "Cuéntanos qué día te acomoda y te confirmamos por WhatsApp.",
      service: "Examen visual",
    },
  },

  centro: {
    path: "/centro-oftalmologico-loja",
    name: "Centro de diagnóstico",
    metaTitle: "Centro de diagnóstico oftalmológico en Loja",
    metaDescription:
      "Pentacam, OCT y tomografía ocular en Loja para detectar glaucoma, catarata y problemas de retina a tiempo. Oftalmólogos y optometristas en un solo lugar.",
    h1: "Centro de diagnóstico oftalmológico en Loja: glaucoma, catarata y retina",
    lead: "Muchas enfermedades de los ojos avanzan sin dolor. Con estudios por imagen se ven los cambios antes de que afecten tu visión, y un oftalmólogo define el tratamiento.",
    visual: "retina",
    signalsTitle: "Conviene revisarte si",
    signals: [
      "Tienes más de 40 años y nunca te han medido la presión ocular.",
      "Alguien en tu familia tiene glaucoma.",
      "Tienes diabetes o hipertensión.",
      "Ves la visión nublada, con halos alrededor de las luces o con colores apagados.",
      "Notas manchas, destellos o una sombra que tapa parte de lo que ves: no esperes, consulta el mismo día.",
    ],
    blocksTitle: "Estudios y especialidades",
    blocks: [
      {
        title: "Pentacam: el mapa de tu córnea",
        text: "Toma imágenes de la parte frontal del ojo para medir la forma y el grosor de la córnea. Ayuda a detectar el queratocono y a planificar tratamientos.",
      },
      {
        title: "OCT: cortes de la retina",
        text: "La tomografía de coherencia óptica fotografía las capas de la retina y del nervio óptico sin tocar el ojo. Es clave para seguir el glaucoma y las enfermedades de la mácula.",
      },
      {
        title: "Glaucoma",
        text: "Se controla la presión del ojo, el nervio óptico y el campo visual. Detectarlo temprano permite frenar el daño. Atiende la Dra. Rosemary Guamán, oftalmóloga.",
      },
      {
        title: "Retina",
        text: "Retinografía (fotografía de la retina) y, cuando está indicado, tratamiento con láser. Atiende el Dr. Víctor Lomas, oftalmólogo cirujano.",
      },
      {
        title: "Catarata",
        text: "Evaluamos cuánto afecta tu visión y cuándo conviene operar. La cirugía la realizan los oftalmólogos del equipo.",
      },
    ],
    stepsTitle: "Del primer síntoma al plan de tratamiento",
    steps: [
      { title: "Consulta inicial", text: "Revisamos tus síntomas y antecedentes y decidimos qué estudios necesitas." },
      { title: "Estudios por imagen", text: "Pentacam, OCT o retinografía, el mismo día cuando es posible." },
      { title: "Diagnóstico del oftalmólogo", text: "Te explica lo encontrado con las imágenes a la vista." },
      { title: "Plan y seguimiento", text: "Controles, tratamiento o cirugía, según el caso." },
    ],
    note: "Óptica Loja es una óptica y centro de diagnóstico. Los diagnósticos médicos y las cirugías los realizan los médicos oftalmólogos del equipo; tu optometrista te orienta y te deriva cuando hace falta.",
    faqs: [
      {
        q: "¿Duele el OCT?",
        a: "No. Es un estudio sin contacto que toma imágenes con luz y dura pocos minutos.",
      },
      {
        q: "¿Cada cuánto debo revisar la presión ocular?",
        a: "Lo define tu oftalmólogo según tu edad y tus antecedentes. Después de los 40 años es un buen momento para empezar los controles.",
      },
      {
        q: "¿Operan cataratas?",
        a: "En la consulta se evalúa si la necesitas y cuándo. La cirugía la realizan los oftalmólogos del equipo.",
      },
      {
        q: "¿Cuánto cuesta la consulta oftalmológica?",
        a: `La consulta con oftalmólogo parte desde $${site.prices.ophthalmology}. Los estudios por imagen se cotizan según lo que necesites.`,
      },
    ],
    related: [
      { href: "/urgencias-oculares-loja", label: "Urgencias oculares" },
      { href: "/blog/queratocono-que-es-y-como-se-detecta", label: "Queratocono: qué es y cómo se detecta" },
      { href: "/dr-fernando-lomas", label: "Conoce al equipo" },
    ],
    cta: {
      title: "Agenda tu diagnóstico",
      text: "Indícanos qué te preocupa y te decimos qué estudio y qué especialista corresponden.",
      service: "Diagnóstico oftalmológico",
    },
  },

  zeiss: {
    path: "/lentes-zeiss-loja",
    name: "Lentes ZEISS",
    metaTitle: "Lentes ZEISS en Loja: progresivos",
    metaDescription:
      "Lentes ZEISS en Loja: progresivos, fotocromáticos y para pantallas. Medidas individuales y asesoría en Óptica Loja, ZEISS Vision Expert.",
    h1: "Lentes ZEISS en Loja: alta definición, protección y confort visual",
    lead: "Dos lentes pueden verse iguales y ver distinto. Con tecnología ZEISS ganas nitidez, menos reflejos y una adaptación más cómoda, sobre todo si usas pantallas o progresivos.",
    visual: "lens",
    showPromo: true,
    signalsTitle: "Considera ZEISS si",
    signals: [
      "Pasas muchas horas frente a la computadora o el celular.",
      "Usas progresivos o bifocales y quieres adaptarte mejor.",
      "Manejas de noche y los reflejos te molestan.",
      "Pasas del interior al sol varias veces al día.",
      "Tu graduación es alta y quieres lentes más finos y livianos.",
    ],
    blocksTitle: "Tipos de lentes",
    blocks: [
      {
        title: "Progresivos",
        text: "Ves de lejos, a distancia media y de cerca con un solo par. Se fabrican con tus medidas individuales para que el cambio sea más natural.",
      },
      {
        title: "Fotocromáticos",
        text: "Se oscurecen con la luz del sol y se aclaran en interiores. Un solo par para el día entero.",
      },
      {
        title: "Para trabajo digital",
        text: "Filtran parte de la luz azul-violeta de pantallas y luz artificial y ayudan a ver con más contraste. No reemplazan las pausas ni los buenos hábitos, pero suman comodidad.",
      },
      {
        title: "Antirreflejo y durabilidad",
        text: "Tratamientos que reducen los reflejos y facilitan la limpieza, para que veas mejor de noche y el lente dure.",
      },
      {
        title: "Armazones",
        text: "Líneas clásicas, deportivas y de sol. Escríbenos por WhatsApp y te mostramos disponibilidad.",
      },
    ],
    stepsTitle: "De la receta a tus lentes",
    steps: [
      { title: "Receta vigente", text: "Con tu examen reciente o haciéndolo con nosotros." },
      { title: "Elegimos según tu día a día", text: "Trabajo, deporte, manejo, pantallas. El lente se escoge para tu rutina." },
      { title: "Medidas individuales y armazón", text: "Medimos y probamos el armazón para que el lente quede bien centrado." },
      { title: "Fabricación y entrega", text: "Te avisamos cuando estén listos y los ajustamos en persona." },
    ],
    note: "También tenemos lentes desde $" + site.prices.lensesFrom + ". Lo importante es que sepas qué estás eligiendo y por qué.",
    faqs: [
      {
        q: "¿Qué es ZEISS Vision Expert?",
        a: "Es el programa de ZEISS para ópticas que integran su tecnología y su forma de trabajar en la consulta. Óptica Loja trabaja con lentes ZEISS.",
      },
      {
        q: "¿Puedo usar la receta de otro lugar?",
        a: "Sí, si está vigente. Si pasó más de un año, te recomendamos un control antes de fabricar los lentes.",
      },
      {
        q: "¿Cuánto cuestan?",
        a: `Tenemos opciones desde $${site.prices.lensesFrom}. Los lentes ZEISS dependen del tipo y de los tratamientos; te damos el precio exacto en la consulta.`,
      },
      {
        q: "¿Conviene tener más de un par?",
        a: "Sí. Uno para el trabajo, otro para deporte y otro de sol reparten el desgaste y se ajustan mejor a cada actividad.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual" },
      { href: "/blog/fatiga-visual-pantallas-habitos", label: "Fatiga visual por pantallas: hábitos que ayudan" },
      { href: "/dr-fernando-lomas", label: "Opt. Fernando Lomas" },
    ],
    cta: {
      title: "Cotiza tus lentes",
      text: "Cuéntanos tu receta y tu rutina y te recomendamos opciones.",
      service: "Lentes ZEISS",
    },
  },

  terapia: {
    path: "/terapia-visual-estrabismo-loja",
    name: "Terapia visual",
    metaTitle: "Terapia visual para estrabismo en Loja",
    metaDescription:
      "Terapia visual en Loja para estrabismo y ojos desviados: evaluación, ejercicios guiados y seguimiento con optometristas y oftalmólogos. Óptica Loja.",
    h1: "Terapia visual para estrabismo en Loja: tratamiento para ojos desviados",
    lead: "El estrabismo no siempre se resuelve con lentes. La terapia visual entrena la coordinación de los ojos y, según el caso, se combina con lentes o con la valoración de un oftalmólogo.",
    visual: "align",
    signalsTitle: "Señales para consultar",
    signals: [
      "Un ojo se desvía hacia adentro, hacia afuera, hacia arriba o hacia abajo.",
      "Tu hijo inclina la cabeza o cierra un ojo con la luz.",
      "Ve doble o se cansa rápido al leer.",
      "Se choca con objetos o calcula mal las distancias.",
      "Dolor de cabeza frecuente al leer o al usar pantallas.",
    ],
    blocksTitle: "Cómo trabajamos",
    blocks: [
      {
        title: "Evaluación completa",
        text: "Medimos agudeza visual, alineación de los ojos, movimiento y trabajo en equipo de ambos ojos. Con eso se decide si la terapia es el camino.",
      },
      {
        title: "Sesiones guiadas",
        text: "Ejercicios en el consultorio con un profesional y pautas sencillas para hacer en casa. Es un proceso gradual y constante.",
      },
      {
        title: "Niños y adultos",
        text: "Se puede trabajar a distintas edades. Los resultados dependen del tipo de estrabismo y de la constancia, y te explicamos qué esperar desde el inicio.",
      },
      {
        title: "Trabajo con oftalmólogos",
        text: "Si el caso necesita otro tratamiento, incluida la cirugía, lo coordinamos con los oftalmólogos del equipo.",
      },
    ],
    stepsTitle: "El proceso",
    steps: [
      { title: "Evaluación", text: "Una consulta para entender qué le pasa a los ojos y por qué." },
      { title: "Plan personalizado", text: "Objetivos claros y un número estimado de sesiones." },
      { title: "Sesiones", text: "Entrenamiento visual guiado, con tareas para casa." },
      { title: "Reevaluación", text: "Medimos el avance y ajustamos el plan." },
    ],
    note: "Somos uno de los pocos lugares de Loja que ofrece terapia visual. No reemplaza la valoración médica: algunos tipos de estrabismo requieren otros tratamientos y lo definimos en la evaluación.",
    faqs: [
      {
        q: "¿A partir de qué edad se puede empezar?",
        a: "Depende del caso. En la evaluación revisamos si es el momento. Si notas el desvío, no esperes a que \"se le pase\".",
      },
      {
        q: "¿Cuántas sesiones se necesitan?",
        a: "Varía según el tipo de estrabismo y la edad. En la evaluación te damos un estimado y lo revisamos en cada control.",
      },
      {
        q: "¿El estrabismo se corrige del todo?",
        a: "Depende de la causa y del caso. El objetivo es mejorar la coordinación y la comodidad visual; te explicamos expectativas realistas desde el inicio.",
      },
      {
        q: "¿La terapia duele?",
        a: "No. Son ejercicios visuales; a veces cansan, pero no duelen.",
      },
    ],
    related: [
      { href: "/blog/estrabismo-en-ninos-cuando-consultar", label: "Estrabismo en niños: señales y cuándo consultar" },
      { href: "/centro-oftalmologico-loja", label: "Centro de diagnóstico" },
      { href: "/examen-visual-loja", label: "Examen visual" },
    ],
    cta: {
      title: "Agenda una evaluación de terapia visual",
      text: "Escríbenos y te indicamos cómo es la primera consulta.",
      service: "Terapia visual / estrabismo",
    },
  },

  urgencias: {
    path: "/urgencias-oculares-loja",
    name: "Urgencias oculares",
    metaTitle: "Urgencias oculares en Loja: ojo rojo",
    metaDescription:
      "Atención de urgencias oculares en Loja: ojo rojo, conjuntivitis, herpes ocular y traumatismos. Evaluación por oftalmólogos del equipo de Óptica Loja.",
    h1: "Urgencias oculares en Loja: ojos rojos, infecciones y traumatismos",
    lead: "Un ojo rojo puede ser algo leve o algo que necesita atención el mismo día. Aquí aprendes a distinguir las señales y, si dudas, nos escribes o nos llamas.",
    visual: "alert",
    signalsTitle: "Consulta hoy si hay",
    signals: [
      "Dolor intenso en el ojo.",
      "Pérdida o disminución repentina de la visión.",
      "Un golpe, un corte o un cuerpo extraño en el ojo.",
      "Secreción abundante o párpados pegados al despertar.",
      "Sensibilidad intensa a la luz.",
      "Ojo rojo y doloroso después de usar lentes de contacto: retíralos y consulta.",
    ],
    blocksTitle: "Qué atendemos",
    blocks: [
      {
        title: "Conjuntivitis",
        text: "Puede ser viral, bacteriana o alérgica, y cada tipo se trata distinto. Por eso no conviene automedicarse con gotas.",
      },
      {
        title: "Herpes ocular",
        text: "Es una infección que, si no se trata a tiempo, puede dejar secuelas en la córnea. Se diagnostica con revisión especializada.",
      },
      {
        title: "Traumatismos y cuerpos extraños",
        text: "Golpes, cortes, partículas o químicos. Mientras más pronto se evalúa, mejor es el pronóstico.",
      },
      {
        title: "Cuando se necesita cirugía",
        text: "El equipo de oftalmólogos cuenta con quirófano propio para resolver los casos que lo requieren.",
      },
    ],
    stepsTitle: "Mientras llegas",
    steps: [
      { title: "Lávate las manos y no te frotes el ojo", text: "Frotar puede empeorar una lesión o contagiar la infección." },
      { title: "Retira los lentes de contacto", text: "Y no los uses hasta que te revisen." },
      { title: "No uses gotas sin indicación", text: "Algunas, como las que contienen corticoides, pueden empeorar ciertas infecciones." },
      { title: "Protege el ojo sin presionarlo", text: "Si hay un golpe o un corte, cúbrelo sin apretar." },
      { title: "Llámanos o escríbenos", text: "Te indicamos cómo atenderte lo antes posible." },
    ],
    note: "Si sufres un accidente grave o una salpicadura de químicos, lava el ojo con agua abundante y acude de inmediato a emergencias. En una emergencia, llama al 911.",
    faqs: [
      {
        q: "¿La conjuntivitis se contagia?",
        a: "Las de origen viral o bacteriano sí. Lávate las manos, no compartas toallas ni maquillaje y evita tocarte los ojos.",
      },
      {
        q: "¿Puedo ir sin cita?",
        a: "Para urgencias, llama o escribe por WhatsApp y te indicamos cómo atenderte lo antes posible.",
      },
      {
        q: "¿Cuánto cuesta la consulta?",
        a: `La consulta oftalmológica parte desde $${site.prices.ophthalmology}. Si necesitas estudios o tratamiento, te lo explicamos antes de continuar.`,
      },
    ],
    related: [
      { href: "/blog/ojos-rojos-causas-y-senales-de-alarma", label: "Ojos rojos: causas y señales de alarma" },
      { href: "/centro-oftalmologico-loja", label: "Centro de diagnóstico" },
      { href: "/examen-visual-loja", label: "Examen visual" },
    ],
    cta: {
      title: "¿Tienes una molestia en el ojo?",
      text: "Cuéntanos qué sientes y desde cuándo. Te respondemos por WhatsApp.",
      service: "Urgencia ocular",
    },
  },
  lentes: {
    path: "/lentes-de-contacto-loja",
    name: "Lentes de contacto",
    metaTitle: "Lentes de contacto en Loja: graduados, de color y tóricos",
    metaDescription:
      "Lentes de contacto en Loja: adaptación profesional de lentes graduados, tóricos para astigmatismo, descartables y de color. Seguimiento y asesoría en Óptica Loja.",
    h1: "Lentes de contacto en Loja: graduados, para astigmatismo y de color",
    lead: "No todo el mundo se adapta igual a los lentes de contacto, y no todos los lentes sirven para todos los ojos. Te hacemos la evaluación, te enseñamos a usarlos correctamente y hacemos el seguimiento.",
    visual: "exam",
    signalsTitle: "Los lentes de contacto pueden ser para ti si",
    signals: [
      "Quieres más libertad visual que con los lentes de armazón.",
      "Practicas deporte y los anteojos te incomodan.",
      "Tienes astigmatismo y te han dicho que no puedes usar contactos (sí existen lentes tóricos para eso).",
      "Quieres cambiar el color de tus ojos con lentes estéticos.",
      "Ya usas contactos pero tienes molestias o se te resecan los ojos.",
    ],
    blocksTitle: "Tipos de lentes que adaptamos",
    blocks: [
      {
        title: "Lentes blandos descartables",
        text: "Diarios, quincenales o mensuales. Los más cómodos para empezar. Se indican según tu graduación y el tiempo que los usarás.",
      },
      {
        title: "Lentes tóricos para astigmatismo",
        text: "Están diseñados para corregir el astigmatismo y estabilizarse en el ojo. La adaptación es más cuidadosa, pero hay muy buenas opciones para casi todas las graduaciones.",
      },
      {
        title: "Lentes multifocales",
        text: "Para personas con presbicia (vista cansada) que quieren ver de lejos y de cerca sin necesitar anteojos de lectura.",
      },
      {
        title: "Lentes de color",
        text: "Con o sin graduación. Te los adaptamos de forma profesional para que no afecten tu salud ocular.",
      },
      {
        title: "Lentes de contacto rígidos",
        text: "Para queratocono u otras condiciones de la córnea donde los lentes blandos no dan buena visión.",
      },
    ],
    stepsTitle: "Cómo es la adaptación",
    steps: [
      { title: "Evaluación de la córnea y la película lagrimal", text: "No todos los ojos toleran igual los lentes de contacto. Revisamos antes de elegir." },
      { title: "Selección del lente adecuado", text: "Según tu graduación, tu estilo de vida y el tipo de ojo." },
      { title: "Prueba y ajuste", text: "Los usas un momento en la óptica para ver cómo responden tus ojos." },
      { title: "Instrucción de uso e higiene", text: "Te enseñamos a colocarlos, quitarlos y cuidarlos correctamente." },
      { title: "Seguimiento", text: "Una revisión después del primer uso para confirmar que todo va bien." },
    ],
    note: "Los lentes de contacto son un dispositivo médico. Comprarlos sin evaluación previa puede generar infecciones, úlceras en la córnea y daño ocular permanente. Pide siempre asesoría profesional.",
    faqs: [
      {
        q: "¿Puedo usar lentes de contacto si tengo astigmatismo?",
        a: "Sí. Los lentes tóricos están diseñados para corregir el astigmatismo. Te hacemos la evaluación para encontrar la opción correcta.",
      },
      {
        q: "¿Cuántas horas puedo usarlos al día?",
        a: "La mayoría de los lentes blandos se pueden usar entre 8 y 12 horas. Te indicamos el límite según el tipo de lente que uses.",
      },
      {
        q: "¿Se pueden usar de noche?",
        a: "No se recomienda dormir con lentes de contacto convencionales. Existe una excepción para lentes de ortoqueratología (uso nocturno), que se evalúan caso a caso.",
      },
      {
        q: "¿Qué pasa si se me irrita el ojo?",
        a: "Retira el lente de inmediato y consulta. La irritación puede ser por sequedad, por un problema con el lente o por una infección que hay que diagnosticar.",
      },
      {
        q: "¿Tienen lentes de contacto de color con graduación?",
        a: "Sí. Te los adaptamos con evaluación previa para que sean seguros para tus ojos.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual y optometría" },
      { href: "/urgencias-oculares-loja", label: "Urgencias: ojo rojo con lentes de contacto" },
      { href: "/lentes-zeiss-loja", label: "Lentes ZEISS para armazón" },
    ],
    cta: {
      title: "Agenda tu evaluación de lentes de contacto",
      text: "Cuéntanos si ya los usas o si es tu primera vez. Te confirmamos por WhatsApp.",
      service: "Lentes de contacto",
    },
  },
};
