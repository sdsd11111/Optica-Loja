import { site } from "@/lib/site";

export type Faq = { q: string; a: string };
export type VisualKey = "exam" | "retina" | "lens" | "align" | "alert" | "lab" | "products";

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
    name: "Examen visual completo",
    metaTitle: "Examen Visual Computarizado en Loja | Óptica Loja",
    metaDescription:
      "Examen visual computarizado en Loja: refracción digital, agudeza visual, miopía, astigmatismo y presbicia. Atención profesional y entrega de receta médica clara.",
    h1: "Examen visual computarizado y optometría en Loja",
    lead: "Evaluación refractiva completa con equipos digitales de precisión. Medimos tu graduación exacta, evaluamos tu salud visual preventiva y te entregamos una receta clara con asesoría personalizada.",
    visual: "exam",
    signalsTitle: "Agenda tu examen visual si notas que",
    signals: [
      "Ves borroso de lejos, de cerca o te cuesta enfocar al cambiar de distancia.",
      "Sufres dolores de cabeza, pesadez ocular o fatiga tras usar pantallas o leer.",
      "Entrecierras los ojos para enfocar letreros, la televisión o la pizarra.",
      "Ha pasado más de un año desde tu último control visual o tus lentes actuales ya no te dan nitidez.",
      "Tu hijo presenta bajo rendimiento escolar, se acerca mucho a los cuadernos o desvía un ojo.",
    ],
    blocksTitle: "Qué incluye tu examen visual completo",
    blocks: [
      {
        title: "Medición computarizada (Autorrefractómetro)",
        text: "Lectura digital preliminar y objetiva de la refracción del ojo, detectando los niveles base de miopía, hipermetropía y astigmatismo en cuestión de segundos.",
      },
      {
        title: "Refracción subjetiva y afinamiento optométrico",
        text: "Ajuste fino y personalizado con foróptero y cartilla optométrica para determinar la corrección exacta con la que tus ojos se sienten cómodos y sin esfuerzo.",
      },
      {
        title: "Evaluación de agudeza visual y visión binocular",
        text: "Comprobamos cómo trabajan y coordinan ambos ojos en conjunto, descartando problemas de acomodación, visión doble o signos tempranos de ojo vago (ambliopía).",
      },
      {
        title: "Detección preventiva y derivación médica",
        text: "Inspección básica de medios oculares. Si detectamos sospecha de queratocono, glaucoma, cataratas o alteraciones en retina, te derivamos directamente a nuestro centro de diagnóstico oftalmológico.",
      },
      {
        title: "Entrega de receta médica clara y detallada",
        text: "Te explicamos cada valor de tu prescripción sin tecnicismos y te orientamos sobre el tipo de lunas o tratamientos recomendados para tu estilo de vida.",
      },
    ],
    stepsTitle: "Paso a paso de tu consulta optométrica",
    steps: [
      { title: "1. Anamnesis y motivo de consulta", text: "Conversamos sobre tus actividades diarias, uso de computadoras, molestias visuales y antecedentes familiares." },
      { title: "2. Medición digital computarizada", text: "Examen rápido e indoloro con tecnología óptica computarizada de alta precisión." },
      { title: "3. Prueba de lentes y afinación", text: "Evaluamos tu agudeza visual de lejos y cerca con diferentes lentes de prueba para encontrar tu máxima nitidez." },
      { title: "4. Explicación de tu diagnóstico visual", text: "Te detallamos tu graduación y te recomendamos las opciones ideales en lunas, filtros de luz azul o tratamientos antirreflejo." },
      { title: "5. Entrega de receta y seguimiento", text: "Recibes tu prescripción visual completa y quedas registrado en nuestra base para tus próximos controles periódicos." },
    ],
    faqs: [
      {
        q: "¿Qué incluye exactamente el examen visual completo?",
        a: "Incluye medición computarizada de la refracción, prueba de agudeza visual de lejos y cerca, evaluación de motilidad y coordinación binocular, despistaje preventivo y entrega de la receta explicada.",
      },
      {
        q: "¿Cuánto tiempo toma el examen visual?",
        a: "Aproximadamente entre 20 y 30 minutos. Nos tomamos el tiempo necesario para afinar tu graduación de forma personalizada y sin apuros.",
      },
      {
        q: "¿Necesito cita previa para examinarme?",
        a: "Puedes acudir directamente a nuestra óptica, pero te recomendamos agendar tu cita por WhatsApp para garantizar tu turno sin tiempos de espera.",
      },
      {
        q: "¿A partir de qué edad pueden realizarse el examen visual los niños?",
        a: "Desde los 3 a 4 años es ideal realizar un control optométrico para detectar a tiempo problemas refractivos, ojo vago o estrabismo que puedan afectar su desarrollo escolar.",
      },
      {
        q: "¿Qué pasa si durante el examen se detecta una enfermedad en mis ojos?",
        a: "En Óptica Loja contamos con centro de diagnóstico oftalmológico propio. Si el optometrista nota signos de glaucoma, queratocono, catarata o retina, te canaliza de inmediato con nuestros especialistas oftalmólogos.",
      },
    ],
    related: [
      { href: "/laboratorio-optico-loja", label: "Lentes y laboratorio óptico" },
      { href: "/centro-oftalmologico-loja", label: "Diagnóstico oftalmológico" },
      { href: "/lentes-de-contacto-loja", label: "Lentes de contacto" },
    ],
    cta: {
      title: "¿Listo para revisar tu visión?",
      text: "Agenda tu examen visual computarizado en Óptica Loja. Escríbenos por WhatsApp para reservar tu horario.",
      service: "Examen visual",
    },
  },

  centro: {
    path: "/centro-oftalmologico-loja",
    name: "Diagnóstico oftalmológico",
    metaTitle: "Centro de Diagnóstico Oftalmológico en Loja | Óptica Loja",
    metaDescription:
      "Centro oftalmológico en Loja: exámenes especializados OCT, Pentacam, topografía corneal y diagnóstico de glaucoma, queratocono, cataratas y retina.",
    h1: "Diagnóstico y atención oftalmológica especializada en Loja",
    lead: "Tecnología médica diagnóstica de vanguardia y especialistas oftalmólogos para la detección temprana, evaluación clínica y tratamiento de enfermedades oculares complejas.",
    visual: "retina",
    signalsTitle: "Cuándo acudir a una consulta diagnóstica oftalmológica",
    signals: [
      "Visión borrosa repentina o progresiva que no mejora al cambiar de graduación.",
      "Destellos de luz, moscas volantes (puntos negros flotantes) o sombras oscuras en tu campo visual.",
      "Antecedentes familiares de glaucoma, ceguera o pérdida visual sin causa aparente.",
      "Pacientes diagnosticados con diabetes o hipertensión arterial (control de retina y fondo de ojo).",
      "Molestia o dolor ocular persistente, visión de halos de colores alrededor de las luces o fotofobia.",
      "Sospecha de queratocono, ojo rojo crónico o lagrimeo excesivo sin causa aparente.",
    ],
    blocksTitle: "Exámenes diagnósticos y patologías tratadas",
    blocks: [
      {
        title: "OCT (Tomografía de Coherencia Óptica)",
        text: "Estudio de alta resolución sin contacto que obtiene cortes micrométricos de la retina, la mácula y las fibras del nervio óptico, vital para el seguimiento del glaucoma y retinopatías.",
      },
      {
        title: "Pentacam y Topografía Corneal",
        text: "Mapeo tridimensional de la curvatura, elevación y grosor de la córnea. Estudio indispensable para el diagnóstico temprano, estadiaje y seguimiento del queratocono.",
      },
      {
        title: "Diagnóstico y control del Queratocono",
        text: "Detección precoz de ectasias corneales, evaluación de progresión y asesoramiento en tratamientos especializados, crosslinking o adaptación de lentes de contacto corneales y esclerales.",
      },
      {
        title: "Manejo del Glaucoma y Presión Intraocular",
        text: "Evaluación integral de la presión del ojo, paquimetría, gonioscopía y campo visual computarizado para frenar el daño progresivo del nervio óptico.",
      },
      {
        title: "Evaluación de Cataratas y Retina",
        text: "Examen de la opacidad del cristalino, determinación de viabilidad quirúrgica y fondo de ojo para la detección de retinopatía diabética, desprendimientos y degeneración macular.",
      },
      {
        title: "Consulta clínica y valoración oftalmológica",
        text: "Atención médica integral por parte de médicos oftalmólogos, evaluación prequirúrgica y seguimiento continuo de patologías oculares crónicas.",
      },
    ],
    stepsTitle: "Protocolo de tu consulta diagnóstica",
    steps: [
      { title: "1. Valoración clínica inicial", text: "El oftalmólogo evalúa tus síntomas, antecedentes médicos y la agudeza visual general." },
      { title: "2. Exámenes de imagen especializada", text: "Se realizan estudios complementarios como Pentacam, OCT o fondo de ojo según la necesidad clínica." },
      { title: "3. Análisis e informe diagnóstico", text: "El especialista te explica los hallazgos en pantalla y te entrega el reporte de las imágenes obtenidas." },
      { title: "4. Plan terapéutico y seguimiento", text: "Definición del tratamiento médico (gotas, medicamentos), indicación quirúrgica o controles periódicos de control." },
    ],
    note: "Óptica Loja combina la óptica clínica con un centro de diagnóstico oftalmológico de primer nivel. Los procedimientos y diagnósticos médicos son realizados por médicos oftalmólogos especialistas.",
    faqs: [
      {
        q: "¿Qué estudios de diagnóstico oftalmológico realizan?",
        a: "Contamos con Tomografía de Coherencia Óptica (OCT), Pentacam, Topografía corneal, biomicroscopía con lámpara de hendidura, tonometría (presión ocular) y fondo de ojo.",
      },
      {
        q: "¿Los exámenes como el OCT o Pentacam causan dolor?",
        a: "No, en absoluto. Son estudios indoloros y no invasivos basados en haces de luz digital. No tocan tu ojo y se completan en pocos minutos.",
      },
      {
        q: "¿Tratan el queratocono en Óptica Loja?",
        a: "Sí. Realizamos el diagnóstico corneal de precisión con Pentacam y topografía, controlando la progresión de la enfermedad y adaptando soluciones ópticas especializadas.",
      },
      {
        q: "¿Quién realiza la consulta oftalmológica?",
        a: "La consulta médica y la interpretación de los estudios por imagen son realizadas por médicos oftalmólogos especialistas.",
      },
      {
        q: "¿Cada cuánto debe revisarse la retina un paciente con diabetes?",
        a: "Se recomienda una evaluación oftalmológica completa con fondo de ojo al menos una vez al año, o con mayor frecuencia si el médico detecta retinopatía incipiente.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual computarizado" },
      { href: "/terapia-visual-estrabismo-loja", label: "Terapia visual y estrabismo" },
      { href: "/laboratorio-optico-loja", label: "Lentes y laboratorio óptico" },
    ],
    cta: {
      title: "¿Necesitas una consulta o examen oftalmológico?",
      text: "Agenda tu cita con nuestros especialistas oftalmólogos en Óptica Loja directamente por WhatsApp.",
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
    name: "Terapia visual y estrabismo",
    metaTitle: "Terapia Visual en Loja | Estrabismo y Ambliopía (Ojo Vago)",
    metaDescription:
      "Terapia visual en Loja: rehabilitación binocular para estrabismo (ojos desviados) y ambliopía (ojo vago) en niños y adultos. Evaluación optométrica y seguimiento médico.",
    h1: "Terapia visual en Loja: estrabismo y ambliopía (ojo vago)",
    lead: "Tratamiento y rehabilitación neurofuncional de la visión. Diseñamos programas de ejercicios personalizados para alinear los ojos, mejorar el trabajo en equipo binocular y reactivar la visión en casos de ojo vago (ambliopía) tanto en niños como en adultos.",
    visual: "align",
    signalsTitle: "Señales de alerta para consultar en terapia visual",
    signals: [
      "Uno o ambos ojos se desvían hacia adentro, hacia afuera, arriba o abajo (estrabismo constante o intermitente).",
      "Diagnóstico o sospecha de ojo vago (ambliopía): un ojo ve significativamente menos aun con lentes.",
      "Tu hijo inclina la cabeza, entrecierra un ojo bajo el sol o se frota los ojos con frecuencia al leer.",
      "Visión doble (diplopía), mareos o saltos de renglón constantes durante la lectura o estudio.",
      "Dificultad para calcular distancias, torpeza motriz al atrapar objetos o fatiga visual severa con pantallas.",
      "Falta de concentración o bajo rendimiento escolar atribuible a esfuerzo visual excesivo.",
    ],
    blocksTitle: "Nuestras dos líneas principales de tratamiento",
    blocks: [
      {
        title: "1. Estrabismo (Alineación y coordinación ocular)",
        text: "Tratamos ojos desviados mediante entrenamiento neuromuscular para mejorar el control motor ocular, la fusión y la percepción de profundidad (estereopsis), evitando que el cerebro suprima la imagen de un ojo.",
      },
      {
        title: "2. Ambliopía (Tratamiento del Ojo Vago)",
        text: "Estimulación visual dirigida para rehabilitar las conexiones neuronales entre el ojo y la corteza visual cerebral. Se trabaja con terapias de oclusión controlada, filtros ópticos y ejercicios dinámicos de agudeza visual.",
      },
      {
        title: "Rehabilitación para niños y adolescentes",
        text: "Abordaje lúdico y adaptado a cada etapa de crecimiento, fundamental antes de los 8 a 10 años para aprovechar la plasticidad cerebral, mejorando su desempeño escolar y deportivo.",
      },
      {
        title: "Terapia visual para adultos",
        text: "La plasticidad cerebral persiste en la adultez. Trabajamos insuficiencia de convergencia, problemas de enfoque prolongado en pantallas y secuelas de estrabismos no tratados.",
      },
      {
        title: "Coordinación con Oftalmología y Cirugía Ocular",
        text: "En casos de estrabismos de ángulo amplio o refractarios a terapia, coordinamos de forma interdisciplinaria con los oftalmólogos cirujanos de nuestro equipo para valoración quirúrgica.",
      },
    ],
    stepsTitle: "Cómo desarrollamos el programa de terapia visual",
    steps: [
      { title: "1. Examen sensoriomotor inicial", text: "Evaluación exhaustiva de alineación, motilidad, acomodación, convergencia y grado de visión tridimensional." },
      { title: "2. Diseño del plan terapéutico", text: "Establecemos metas concretas de agudeza visual y alineación con un cronograma semanal estimado de sesiones." },
      { title: "3. Sesiones guiadas en consultorio", text: "Ejercicios con equipos optométricos especializados (vectogramas, prismas, software visual interactivo)." },
      { title: "4. Pautas de refuerzo en casa", text: "Actividades diarias breves (10 a 15 minutos) que refuerzan los logros alcanzados en cada sesión." },
      { title: "5. Evaluaciones periódicas de evolución", text: "Mediciones objetivas cada 4 a 6 semanas para ajustar la dificultad y consolidar la visión binocular permanente." },
    ],
    note: "Óptica Loja es uno de los centros especializados pioneros en ofrecer terapia visual en la provincia de Loja. Contamos con tecnología y profesionales dedicados a la rehabilitación binocular integral.",
    faqs: [
      {
        q: "¿Qué es exactamente la ambliopía u \"ojo vago\"?",
        a: "Es la falta de desarrollo visual en uno de los ojos durante la infancia debido a una graduación desigual no corregida o a un estrabismo. El cerebro ignora la imagen de ese ojo. Con terapia visual oportuna se reactiva y mejora la agudeza visual.",
      },
      {
        q: "¿A partir de qué edad puede iniciar un niño la terapia?",
        a: "Apenas se detecte un desvío o falta de visión, incluso desde los 3 o 4 años. Cuanto más temprano se inicie el tratamiento, más rápidos y estables son los resultados gracias a la plasticidad cerebral infantil.",
      },
      {
        q: "¿La terapia visual reemplaza a los lentes o a la cirugía?",
        a: "Depende del origen del estrabismo. Muchos casos se resuelven o estabilizan combinando lentes y terapia; en otros casos donde se requiere cirugía, la terapia pre y postquirúrgica asegura que los ojos no vuelvan a desviarse.",
      },
      {
        q: "¿Los adultos con ojo vago pueden mejorar su visión?",
        a: "Sí. Aunque el proceso requiere constancia, estudios clínicos demuestran que el cerebro adulto mantiene plasticidad para recuperar agudeza y confort binocular mediante estimulación visual activa.",
      },
      {
        q: "¿Las sesiones de terapia causan dolor?",
        a: "No causan dolor en absoluto. Son ejercicios visuales dinámicos e interactivos que exigen concentración y esfuerzo muscular ocular, pero son completamente seguros y libres de molestias.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual computarizado" },
      { href: "/centro-oftalmologico-loja", label: "Diagnóstico oftalmológico" },
      { href: "/laboratorio-optico-loja", label: "Lentes y laboratorio óptico" },
    ],
    cta: {
      title: "¿Sospechas de estrabismo u ojo vago?",
      text: "Agenda una evaluación sensoriomotora en Óptica Loja. Escríbenos por WhatsApp y te orientamos de inmediato.",
      service: "Terapia visual y estrabismo",
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
    metaTitle: "Lentes de Contacto en Loja | Graduados, Tóricos y Color",
    metaDescription:
      "Adaptación profesional de lentes de contacto en Loja: lentes blandos, tóricos para astigmatismo, multifocales, rígidos para queratocono y lentes cosméticos de color.",
    h1: "Adaptación profesional de lentes de contacto en Loja",
    lead: "Cada ojo tiene una curvatura y lágrima única. Evaluamos tu superficie corneal, seleccionamos el lente ideal para tu estilo de vida y te enseñamos su manipulación, higiene y cuidado seguro.",
    visual: "exam",
    signalsTitle: "Los lentes de contacto son ideales para ti si",
    signals: [
      "Buscas mayor libertad y campo visual completo sin la montura de los anteojos.",
      "Practicas deportes o actividades al aire libre donde los anteojos se empañan o incomodan.",
      "Tienes astigmatismo y buscas nitidez estable (adaptamos lentes tóricos avanzados).",
      "Tienes más de 40 años y deseas ver nítido de lejos y de cerca con lentes multifocales.",
      "Quieres cambiar o resaltar el color de tus ojos con lentes estéticos certificados y seguros.",
      "Tienes queratocono o córneas irregulares y requieres lentes rígidos permeables al gas o esclerales.",
    ],
    blocksTitle: "Tipos de lentes de contacto que adaptamos",
    blocks: [
      {
        title: "Lentes blandos esféricos (Diarios y Mensuales)",
        text: "Los más cómodos para iniciar, elaborados con hidrogel de silicona de alta oxigenación que mantiene los ojos frescos e hidratados durante toda la jornada.",
      },
      {
        title: "Lentes tóricos para Astigmatismo",
        text: "Diseñados con sistemas de estabilización gravitacional para evitar la rotación en el ojo, garantizando visión nítida y sin oscilaciones para cualquier graduación.",
      },
      {
        title: "Lentes multifocales para Presbicia",
        text: "Permiten una transición suave entre la visión de lejos, intermedia (computadora) y de lectura cercana sin tener que usar gafas adicionales.",
      },
      {
        title: "Lentes de contacto cosméticos y de color",
        text: "Con o sin graduación óptica. Trabajamos con marcas aprobadas con pigmentos encapsulados para no alterar la oxigenación ni irritar la superficie corneal.",
      },
      {
        title: "Lentes rígidos y especiales para Queratocono",
        text: "Lentes permeables al gas (RGP) y diseños corneales para pacientes con ectasias o queratocono donde los lentes blandos convencionales no logran agudeza visual suficiente.",
      },
      {
        title: "Soluciones de mantenimiento y lubricantes",
        text: "Disponemos de líquidos multipropósito, soluciones salinas y gotas humectantes indicadas por optometristas para una higiene segura y libre de infecciones.",
      },
    ],
    stepsTitle: "Protocolo de adaptación y seguimiento",
    steps: [
      { title: "1. Evaluación corneal y lagrimal", text: "Analizamos la curvatura de tu córnea, calidad de lágrima y refracción para determinar la compatibilidad." },
      { title: "2. Prueba diagnóstica en consultorio", text: "Colocamos un lente de prueba y comprobamos movimiento, centrado y agudeza visual." },
      { title: "3. Entrenamiento de colocación y retiro", text: "Te guiamos pacientemente paso a paso hasta que domines el ponerte y quitarte los lentes por ti mismo." },
      { title: "4. Educación en higiene y soluciones", text: "Instrucciones claras sobre lavado de manos, limpieza del estuche y tiempos máximos de uso diario." },
      { title: "5. Control de tolerancia", text: "Revisión de seguimiento posterior para asegurar que tus ojos se mantienen saludables y con total confort." },
    ],
    note: "Los lentes de contacto son dispositivos médicos en contacto directo con tu córnea. Adquirirlos sin valoración optométrica previa o comprarlos en lugares no autorizados puede ocasionar úlceras e infecciones graves. Consulta siempre a profesionales de la salud visual.",
    faqs: [
      {
        q: "¿Puedo usar lentes de contacto si tengo astigmatismo alto?",
        a: "¡Sí, totalmente! Los lentes tóricos modernos corrigen el astigmatismo combinado con miopía o hipermetropía con excelente estabilidad y nitidez.",
      },
      {
        q: "¿Cuántas horas al día es recomendable usarlos?",
        a: "Se recomienda un promedio de 8 a 12 horas diarias, según el material del lente y la oxigenación corneal. No se debe dormir con lentes de contacto convencionales.",
      },
      {
        q: "¿A partir de qué edad se pueden usar lentes de contacto?",
        a: "Adolescentes y jóvenes desde los 12 a 14 años pueden usarlos con éxito siempre que demuestren madurez y responsabilidad en la higiene y cuidado diario.",
      },
      {
        q: "¿Los lentes de contacto de color necesitan receta médica?",
        a: "Aunque no tengan aumento graduado, requieren una evaluación previa de curvatura y tolerancia para evitar lesiones o queratitis en la córnea.",
      },
      {
        q: "¿Qué debo hacer si siento ardor, ojo rojo o molestia?",
        a: "Retira el lente de inmediato, colócalo en su estuche con solución fresca y no vuelvas a ponértelo hasta consultar en la óptica para descartar una irritación o infección.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual computarizado" },
      { href: "/laboratorio-optico-loja", label: "Lentes y laboratorio óptico" },
      { href: "/productos-opticos-loja", label: "Líquidos y accesorios ópticos" },
    ],
    cta: {
      title: "¿Deseas probar lentes de contacto?",
      text: "Agenda tu cita de adaptación en Óptica Loja. Escríbenos por WhatsApp y te orientamos según tu caso.",
      service: "Lentes de contacto",
    },
  },
  laboratorio: {
    path: "/laboratorio-optico-loja",
    name: "Lentes y Laboratorio Óptico",
    metaTitle: "Lentes y Laboratorio Óptico en Loja | Lunas y Biselado",
    metaDescription:
      "Laboratorio óptico en Loja: calibración y corte computarizado de lunas, lentes ZEISS, lentes para control de miopía, adaptación de prótesis oculares y reparación.",
    h1: "Lentes oftálmicos, lunas y laboratorio óptico en Loja",
    lead: "Taller óptico propio con tecnología de biselado digital. Fabricamos, cortamos y adaptamos tus lunas con precisión milimétrica, trabajamos con marcas líderes como ZEISS y elaboramos soluciones especializadas como prótesis oculares y lentes para control de miopía.",
    visual: "lens",
    signalsTitle: "Servicios de nuestro laboratorio óptico si necesitas",
    signals: [
      "Cambiar o renovar las lunas en tu montura favorita sin necesidad de comprar un armazón nuevo.",
      "Lentes con tecnología de precisión alemana ZEISS para máxima nitidez y confort.",
      "Lentes especializados para el control y freno de la progresión de la miopía en niños y jóvenes.",
      "Adaptación y elaboración profesional de prótesis oculares personalizadas.",
      "Montaje computarizado de lunas monofocales, bifocales y progresivas digitales de alta gama.",
      "Ajuste anatómico de armazones, cambio de plaquetas, tornillos y reparación en taller.",
    ],
    blocksTitle: "Qué realizamos en nuestro taller y laboratorio",
    blocks: [
      {
        title: "Lunas oftálmicas y tecnología alemana ZEISS",
        text: "Manejamos lunas de alta gama con tratamientos antirreflejo multicapa, filtros para luz azul de pantallas (BlueProtect) y lunas fotocromáticas que se adaptan a la luz solar.",
      },
      {
        title: "Lentes para control de la miopía",
        text: "Diseños ópticos avanzados con desenfoque periférico diseñados clínicamente para frenar el avance acelerado de la miopía en niños y adolescentes.",
      },
      {
        title: "Adaptación de prótesis oculares",
        text: "Servicio especializado y humano para la adaptación estética y anatómica de prótesis oculares a medida, devolviendo simetría y bienestar visual.",
      },
      {
        title: "Biselado digital y calibración exacta",
        text: "Corte y biselado computarizado que garantiza que los centros ópticos y alturas de montaje coincidan exactamente con la posición de tus pupilas.",
      },
      {
        title: "Mantenimiento y calibración de monturas",
        text: "Ajuste de varillas, nivelación anatómica, limpieza profunda por ultrasonido y reemplazo de repuestos para que tus anteojos calcen siempre a la perfección.",
      },
    ],
    stepsTitle: "Proceso de elaboración de tus lentes",
    steps: [
      { title: "Verificación de receta", text: "Comprobamos tu graduación óptica o realizamos la medición si hace falta." },
      { title: "Toma de medidas y alturas pupilares", text: "Medimos distancia nasopupilar y altura de montaje para asegurar una visión nítida y sin mareos." },
      { title: "Selección de lunas y tratamientos", text: "Te asesoramos en el material ideal (policarbonato, resina de alto índice) y filtros específicos." },
      { title: "Corte y biselado computarizado", text: "Nuestros equipos de laboratorio tallan la forma exacta de tu montura con tolerancia milimétrica." },
      { title: "Control de calidad y ajuste final", text: "Verificamos graduación en lensómetro y ajustamos la montura cómodamente en tu rostro." },
    ],
    note: "Un mal centrado pupilar o un biselado forzado puede provocar fatiga visual y dolor de cabeza aun con la graduación correcta. En Óptica Loja garantizamos precisión técnica en cada luna.",
    faqs: [
      {
        q: "¿Puedo ponerle lunas nuevas a mi propio armazón?",
        a: "¡Sí, totalmente! Si tu armazón está en buen estado, tomamos las medidas de tus ojos y montamos las nuevas lunas en tu montura actual.",
      },
      {
        q: "¿Trabajan con lunas alemanas ZEISS?",
        a: "Sí, trabajamos directamente con tecnología ZEISS, ofreciendo lunas monofocales y progresivas con certificado de autenticidad y máxima claridad óptica.",
      },
      {
        q: "¿Qué son los lentes para control de miopía?",
        a: "Son lentes oftálmicos con tecnología óptica especial que corrigen la visión al mismo tiempo que reducen el estímulo de elongación del ojo en niños y jóvenes, ayudando a frenar el aumento continuo de dioptrías.",
      },
      {
        q: "¿Realizan prótesis oculares?",
        a: "Sí, contamos con servicio de adaptación y manejo de prótesis oculares con atención personalizada y materiales de grado médico.",
      },
      {
        q: "¿Cuánto demora la elaboración de los lentes?",
        a: "En lunas convencionales el montaje es muy ágil; en lunas de laboratorio especializadas o progresivas digitales personalizadas te informamos el tiempo exacto al momento de ordenar.",
      },
    ],
    related: [
      { href: "/examen-visual-loja", label: "Examen visual y graduación" },
      { href: "/productos-opticos-loja", label: "Catálogo de armazones y accesorios" },
      { href: "/lentes-de-contacto-loja", label: "Lentes de contacto y pupilentes" },
    ],
    cta: {
      title: "¿Necesitas cotizar lunas o reparar tus lentes?",
      text: "Envíanos tu receta o cuéntanos qué necesitas por WhatsApp. Te asesoramos de inmediato.",
      service: "Lentes y laboratorio óptico",
    },
  },
  productos: {
    path: "/productos-opticos-loja",
    name: "Productos Ópticos",
    metaTitle: "Armazones, Gafas de Sol y Productos Ópticos en Loja | Óptica Loja",
    metaDescription:
      "Catálogo de armazones oftálmicos, gafas de sol con protección UV400, lunas ZEISS, líquidos para lentes de contacto y accesorios en Óptica Loja.",
    h1: "Armazones, gafas de sol y catálogo óptico en Loja",
    lead: "Encuentra la montura perfecta para tu estilo y graduación: armazones de tendencia, gafas de sol con filtro UV400 certificado, lentes para niños y todos los productos para el cuidado de tu visión.",
    visual: "lens",
    signalsTitle: "Líneas de productos disponibles en Óptica Loja",
    signals: [
      "Armazones oftálmicos modernos: acetato de alta densidad, metal fino, titanio liviano y TR90 flexible.",
      "Gafas de sol para adultos y jóvenes con protección 100% contra rayos UVA y UVB (UV400 y polarizadas).",
      "Monturas infantiles ergonómicas y ultra resistentes a caídas y juegos para niños en edad escolar.",
      "Lunas especializadas para armazones: filtros de luz azul para pantallas (BlueBlock), antirreflejo y fotocromáticos.",
      "Líquidos, soluciones multipropósito, soluciones salinas y lágrimas artificiales para lentes de contacto.",
      "Accesorios esenciales: estuches rígidos, cordones de sujeción, gamuzas de microfibra y limpiadores antivaho.",
    ],
    blocksTitle: "Categorías de productos ópticos",
    blocks: [
      {
        title: "Armazones oftálmicos para todo estilo de vida",
        text: "Contamos con una amplia variedad de modelos clásicos, ejecutivos, minimalistas y vanguardistas. Asesoramos la elección según la morfología de tu rostro y tu fórmula oftálmica.",
      },
      {
        title: "Gafas de sol con protección UV400 y graduables",
        text: "Protege tu visión de la radiación solar en Loja. Disponibles en diseños de temporada y con la opción de colocarles tu propia prescripción visual con tintes solares y polarizados.",
      },
      {
        title: "Línea óptica infantil y juvenil",
        text: "Monturas flexibles sin partes metálicas punzantes, con bandas elásticas ajustables y materiales hipoalergénicos diseñados para resistir el ritmo activo de los niños.",
      },
      {
        title: "Soluciones y cuidado de lentes de contacto",
        text: "Líquidos de desinfección profunda y gotas lubricantes recomendadas por optometristas para garantizar la higiene corneal y evitar molestias o infecciones oculares.",
      },
      {
        title: "Mantenimiento, limpieza y repuestos",
        text: "Sprays antiempañamiento para anteojos, estuches de viaje de alta resistencia, plaquetas nasales anatómicas de silicona y microfibras de secado rápido.",
      },
    ],
    stepsTitle: "Cómo elegir tu armazón y producto ideal",
    steps: [
      { title: "1. Asesoría de visagismo", text: "Te ayudamos a elegir la forma de montura (redonda, cuadrada, cat-eye, aviador) que mejor armoniza con las facciones de tu rostro." },
      { title: "2. Verificación de compatibilidad con tu receta", text: "Corroboramos que el tamaño y profundidad del aro sean óptimos para el espesor de tus lunas graduadas." },
      { title: "3. Calce y ajuste anatómico", text: "Verificamos que el puente apoye cómodamente sobre tu nariz y que las varillas no generen presión tras las orejas." },
      { title: "4. Asesoría en accesorios y cuidado", text: "Te recomendamos los productos idóneos de limpieza para extender la durabilidad y nitidez de tus lentes." },
    ],
    note: "En nuestra sede central de la 10 de Agosto disponemos de probador físico con cientos de modelos. Próximamente podrás consultar y filtrar nuestro catálogo de productos en línea.",
    faqs: [
      {
        q: "¿Tienen armazones resistentes para niños?",
        a: "Sí, disponemos de líneas infantiles en silicona flexible y TR90 que no se deforman ni se quiebran con facilidad, ideales para la escuela y deportes.",
      },
      {
        q: "¿Puedo ponerle mi aumento a unas gafas de sol?",
        a: "¡Por supuesto! Graduamos tus gafas de sol con tu prescripción exacta, añadiendo filtro UV400 y tintes oscuros, espejados o polarizados.",
      },
      {
        q: "¿Venden líquidos para lentes de contacto por separado?",
        a: "Sí, contamos con soluciones multipropósito de marcas líderes para la limpieza diaria, desinfección y conservación de todo tipo de lentes de contacto.",
      },
      {
        q: "¿Qué garantía tienen los armazones?",
        a: "Todos nuestros armazones cuentan con garantía por defectos de fabricación y servicio de ajuste y calibración gratuito en nuestro laboratorio.",
      },
    ],
    related: [
      { href: "/laboratorio-optico-loja", label: "Lentes y laboratorio óptico" },
      { href: "/examen-visual-loja", label: "Examen visual computarizado" },
      { href: "/lentes-de-contacto-loja", label: "Lentes de contacto" },
    ],
    cta: {
      title: "¿Buscas un armazón o producto específico?",
      text: "Escríbenos por WhatsApp con el estilo que buscas o visítanos en nuestro local de la 10 de Agosto.",
      service: "Productos ópticos",
    },
  },
};

