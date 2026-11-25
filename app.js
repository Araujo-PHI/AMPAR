const EXERCISES = [
  {
    id: 'squat',
    number: '01',
    shortName: 'Sentadilla',
    name: 'Sentadilla con Peso Corporal',
    reps: '10 reps',
    rhythm: 'Ritmo controlado • Pecho alto',
    equipment: 'Peso corporal (opcional: 1 mancuerna de 1 kg al pecho)',
    animHeader: 'MOVIMIENTO CONTINUO • SENTADILLA',
    animFooter: 'Talones apoyados • Espalda recta • Brazos al frente',
    steps: [
      'Separa los pies al ancho de hombros con las puntas levemente hacia afuera.',
      'Lleva la cadera hacia atrás y abajo como sentándote en una silla baja.',
      'Sube empujando el suelo con toda la planta del pie sin despegar talones.'
    ],
    avoid: 'Que las rodillas se junten hacia adentro o levantar los talones.',
    modification: 'Toca suavemente el borde de una silla con los glúteos antes de subir.'
  },
  {
    id: 'pushup',
    number: '02',
    shortName: 'Flexiones',
    name: 'Flexiones de Brazos',
    reps: '6-8 reps',
    rhythm: 'Postura firme • Cuerpo recto',
    equipment: 'Peso corporal',
    animHeader: 'MOVIMIENTO CONTINUO • FLEXIONES',
    animFooter: 'Abdomen firme • Opción apoyando rodillas',
    steps: [
      'Apoya las manos un poco más abiertas que el ancho de los hombros.',
      'Aprieta el abdomen para formar una línea recta de cabeza a talones.',
      'Baja el pecho controlando los codos y empuja el suelo hasta extender.'
    ],
    avoid: 'Que la cintura se hunda hacia el suelo o abrir demasiado los codos.',
    modification: 'Apoya las rodillas en el piso manteniendo el tronco completamente recto.'
  },
  {
    id: 'russian_twist',
    number: '03',
    shortName: 'Giros Rusos',
    name: 'Giros Rusos con Pelota',
    reps: '12 giros (6 por lado)',
    rhythm: 'Giro controlado • Abdomen firme',
    equipment: '1 pelota de fútbol',
    animHeader: 'PASO 1 Y PASO 2 • GIROS RUSOS CON PELOTA',
    animFooter: 'Izquierda: Paso 1 • Derecha: Paso 2',
    steps: [
      'Siéntate en el suelo con las rodillas flexionadas, talones apoyados y el torso levemente inclinado hacia atrás.',
      'Sostén la pelota con ambas manos frente al pecho manteniendo la espalda recta y el abdomen firme.',
      'Gira el torso hacia un lado para acercar la pelota al suelo y luego gira hacia el lado contrario.'
    ],
    avoid: 'Encorvar la espalda o mover solo los brazos sin rotar los hombros y el torso.',
    modification: 'Mantén los talones bien apoyados en el piso para mayor estabilidad o eleva levemente los pies para más dificultad.'
  },
  {
    id: 'shoulder_press',
    number: '04',
    shortName: 'Hombros',
    name: 'Press de Hombros con Mancuernas',
    reps: '10 reps',
    rhythm: 'Costillas adentro • Sin apuro',
    equipment: '2 mancuernas de 1 kg',
    animHeader: 'MOVIMIENTO CONTINUO • PRESS CON 2 MANCUERNAS (1 KG)',
    animFooter: 'Abdomen activo • Empuje vertical controlado',
    steps: [
      'Párate firme con pies al ancho de hombros y una mancuerna de 1 kg en cada mano.',
      'Coloca las manos a la altura de los hombros con codos apuntando al frente.',
      'Empuja hacia arriba hasta extender los brazos y baja con control.'
    ],
    avoid: 'Inclinar el torso hacia atrás o arquear la zona lumbar al subir.',
    modification: 'Sube primero un brazo y luego el otro para mantener mejor el equilibrio.'
  },
  {
    id: 'bird_dog',
    number: '05',
    shortName: 'Equilibrio',
    name: 'Perro Pájaro',
    reps: '5 por lado',
    rhythm: 'Movimiento lento y estable',
    equipment: 'Peso corporal',
    animHeader: 'MOVIMIENTO ALTERNO • PERRO PÁJARO',
    animFooter: 'Brazo y pierna contraria • Cadera estable',
    steps: [
      'Apóyate en cuatro patas: manos bajo hombros y rodillas bajo caderas.',
      'Extiende al mismo tiempo un brazo al frente y la pierna contraria atrás.',
      'Vuelve despacio al centro sin rotar la cadera y cambia de lado.'
    ],
    avoid: 'Girar la cadera hacia un costado o levantar la pierna demasiado alto.',
    modification: 'Desliza la punta del pie y la mano rozando el piso hasta ganar equilibrio.'
  },
  {
    id: 'soccer_zigzag',
    number: '06',
    shortName: 'Fútbol',
    name: 'Conducción en Zigzag',
    reps: '4 reps',
    rhythm: 'Paso ágil • Control con ambos pies',
    equipment: '2 conos (a 1,5 m) + 1 pelota de fútbol',
    animHeader: '2 CONOS A 1,5 M • 1 PELOTA • 4 PASADAS',
    animFooter: 'Ida y vuelta controlando 1 pelota con ambos pies',
    steps: [
      'Coloca los 2 conos separados a 1,5 metros (1.5 m) entre sí.',
      'Conduce 1 pelota en zigzag rodeando ambos conos ida y vuelta con toques suaves.',
      'Completa 4 pasadas continuas usando borde interno y externo de ambos pies.'
    ],
    avoid: 'Patear la pelota lejos o mirar solo el suelo durante todo el recorrido.',
    modification: 'Haz las 4 pasadas caminando rápido hasta dominar el toque corto entre conos.'
  }
];

// Más de 60 ejercicios diarios diferentes con su animación de referencia
const DAILY_EXERCISES = [
  { anim: 'squat', title: 'Sentadilla con pausa abajo', target: '3 x 10 reps', desc: 'Bajá en 3 segundos, quedate 1 segundo abajo y subí firme.' },
  { anim: 'pushup', title: 'Flexiones cerradas', target: '3 x 6 reps', desc: 'Manos más juntas que los hombros y codos cerca del cuerpo.' },
  { anim: 'russian_twist', title: 'Toques de talón en suelo', target: '3 x 20 toques', desc: 'Acostado boca arriba con rodillas flexionadas, tocá un talón y el otro.' },
  { anim: 'shoulder_press', title: 'Press lento con 1 kg', target: '3 x 12 reps', desc: 'Subí las mancuernas en 2 segundos y bajalas en 3 segundos.' },
  { anim: 'pushup', title: 'Plancha frontal firme', target: '3 x 30 seg', desc: 'Apoyá antebrazos y puntas de pie con abdomen y glúteos apretados.' },
  { anim: 'soccer_zigzag', title: 'Slalom corto con pelota', target: '6 pasadas', desc: 'Toques cortos alternando borde interno y externo.' },
  { anim: 'squat', title: 'Zancadas alternas al frente', target: '3 x 8 por pierna', desc: 'Paso al frente, bajá controlado y volvé empujando.' },
  { anim: 'russian_twist', title: 'Puente de glúteos', target: '3 x 15 reps', desc: 'Boca arriba con pies apoyados, subí la cadera y apretá arriba.' },
  { anim: 'shoulder_press', title: 'Elevación lateral con 1 kg', target: '3 x 12 reps', desc: 'Subí los brazos hasta los hombros sin encoger el cuello.' },
  { anim: 'pushup', title: 'Escaladores controlados', target: '3 x 20 pasos', desc: 'En plancha alta, llevá una rodilla al pecho y luego la otra.' },
  { anim: 'squat', title: 'Zancada atrás alterna', target: '3 x 8 por lado', desc: 'Llevá un pie atrás y bajá vertical manteniendo el torso estable.' },
  { anim: 'pushup', title: 'Flexiones con rodillas apoyadas', target: '3 x 10 reps', desc: 'Cuerpo alineado de rodillas a cabeza, pecho cerca del piso.' },
  { anim: 'bird_dog', title: 'Bicho muerto (Dead Bug)', target: '3 x 8 por lado', desc: 'Boca arriba, extendé brazo y pierna contrarios sin arquear.' },
  { anim: 'soccer_zigzag', title: 'Pases rápidos entre pies', target: '3 x 30 seg', desc: 'Pasá la pelota de un pie al otro manteniendo el ritmo.' },
  { anim: 'squat', title: 'Sentadilla sumo abierta', target: '3 x 12 reps', desc: 'Pies bien separados con puntas afuera, bajá recto.' },
  { anim: 'pushup', title: 'Fondos en borde de silla', target: '3 x 8 reps', desc: 'Manos en el borde, bajá flexionando codos y empujá.' },
  { anim: 'bird_dog', title: 'Plancha lateral por lado', target: '3 x 20 seg/lado', desc: 'Cadera arriba formando una línea recta con el tronco.' },
  { anim: 'shoulder_press', title: 'Vuelos frontales con 1 kg', target: '3 x 12 reps', desc: 'Subí las mancuernas al frente hasta la altura de los hombros.' },
  { anim: 'squat', title: 'Saltos suaves en el lugar', target: '4 x 25 saltos', desc: 'Caé suave en punta de pie amortiguando con rodillas.' },
  { anim: 'soccer_zigzag', title: 'Pisa-pelota alterno', target: '3 x 20 toques', desc: 'Tocá arriba de la pelota alternando plantas de pie.' },
  { anim: 'squat', title: 'Sentadilla en pared', target: '3 x 35 seg', desc: 'Espalda apoyada en la pared y muslos paralelos al suelo.' },
  { anim: 'pushup', title: 'Flexiones con pausa abajo', target: '3 x 6 reps', desc: 'Sostené 1 segundo abajo antes de empujar arriba.' },
  { anim: 'russian_twist', title: 'Crunches cortos', target: '3 x 15 reps', desc: 'Despegá apenas los omóplatos sin tirar del cuello.' },
  { anim: 'shoulder_press', title: 'Press rotado con 1 kg', target: '3 x 10 reps', desc: 'Rotá las palmas al empujar arriba y volvé al inicio.' },
  { anim: 'bird_dog', title: 'Perro pájaro con pausa', target: '3 x 5 por lado', desc: 'Sostené 2 segundos brazo y pierna extendidos sin girar.' },
  { anim: 'soccer_zigzag', title: 'Conducción pie izquierdo', target: '4 idas y vueltas', desc: 'Llevá y traé la pelota usando solo el pie izquierdo.' },
  { anim: 'soccer_zigzag', title: 'Conducción pie derecho', target: '4 idas y vueltas', desc: 'Llevá y traé la pelota usando solo el pie derecho.' },
  { anim: 'squat', title: 'Sentadilla + puntas de pie', target: '3 x 10 reps', desc: 'Al subir de la sentadilla, elevá talones.' },
  { anim: 'pushup', title: 'Flexiones pies elevados', target: '3 x 6 reps', desc: 'Pies sobre un escalón bajo con abdomen firme.' },
  { anim: 'russian_twist', title: 'Giros rusos con pausa', target: '3 x 12 giros', desc: 'Marcá 1 segundo a cada lado manteniendo el giro.' },
  { anim: 'shoulder_press', title: 'Remo inclinado con 1 kg', target: '3 x 12 reps', desc: 'Torso inclinado con espalda recta, llevá codos atrás.' },
  { anim: 'squat', title: 'Rodillas altas en el lugar', target: '4 x 20 seg', desc: 'Subí rodillas a la altura de la cadera con braceo.' },
  { anim: 'soccer_zigzag', title: 'Control con muslo y pie', target: '3 x 10 toques', desc: 'Elevá la pelota suave con el muslo y controlá.' },
  { anim: 'squat', title: 'Sentadilla bajada lenta', target: '3 x 8 reps', desc: 'Bajá contando 4 segundos y subí en 1 segundo.' },
  { anim: 'pushup', title: 'Plancha con toque de hombro', target: '3 x 12 toques', desc: 'En plancha alta, tocá el hombro contrario sin mover cadera.' },
  { anim: 'russian_twist', title: 'Elevación de piernas', target: '3 x 10 reps', desc: 'Acostado, subí y bajá piernas sin tocar el suelo.' },
  { anim: 'shoulder_press', title: 'Press alterno a un brazo', target: '3 x 10 por brazo', desc: 'Empujá un brazo a la vez manteniendo el tronco recto.' },
  { anim: 'squat', title: 'Puente a una pierna', target: '3 x 8 por pierna', desc: 'Subí la cadera impulsando con un solo pie apoyado.' },
  { anim: 'soccer_zigzag', title: 'Zigzag con cambio de ritmo', target: '4 pasadas', desc: 'Despacio en los conos y rápido en el tramo recto.' },
  { anim: 'squat', title: 'Sentadilla con rebote corto', target: '3 x 10 reps', desc: 'Abajo hacé un pequeño rebote controlado y subí.' },
  { anim: 'pushup', title: 'Flexiones amplias', target: '3 x 8 reps', desc: 'Manos más abiertas que los hombros, pecho firme.' },
  { anim: 'russian_twist', title: 'Bicicleta abdominal lenta', target: '3 x 16 giros', desc: 'Acercá codo a la rodilla contraria de forma controlada.' },
  { anim: 'shoulder_press', title: 'Círculos con mancuernas', target: '3 x 15 seg/sentido', desc: 'Brazos abiertos a los costados haciendo círculos cortos.' },
  { anim: 'squat', title: 'Paso lateral en sentadilla', target: '3 x 8 por lado', desc: 'Desplazate de lado sin subir la cadera en los pasos.' },
  { anim: 'soccer_zigzag', title: 'Freno con planta del pie', target: '3 x 15 frenos', desc: 'Rodá la pelota suave y frenala pisándola.' },
  { anim: 'pushup', title: 'Plancha con balanceo', target: '3 x 20 seg', desc: 'Balanceo corto adelante y atrás desde los hombros.' },
  { anim: 'squat', title: 'Sentadilla + salto suave', target: '3 x 8 reps', desc: 'Bajá controlado y saltá suave cayendo blando.' },
  { anim: 'pushup', title: 'Flexiones a 90 grados', target: '3 x 8 reps', desc: 'Bajá hasta doblar codos a 90° y subí con control.' },
  { anim: 'bird_dog', title: 'Superman suave', target: '3 x 10 reps', desc: 'Boca abajo, despegá apenas pecho y piernas sin forzar cuello.' },
  { anim: 'shoulder_press', title: 'Aguante arriba con 1 kg', target: '3 x 20 seg', desc: 'Sostené las mancuernas arriba con brazos casi extendidos.' },
  { anim: 'soccer_zigzag', title: 'Conducción en 8', target: '4 vueltas', desc: 'Dibujá el 8 completo rodeando ambos conos.' },
  { anim: 'squat', title: 'Sentadilla manos en nuca', target: '3 x 10 reps', desc: 'Mantené el pecho alto y la espalda bien derecha.' },
  { anim: 'bird_dog', title: 'Plancha lateral + pierna', target: '3 x 8 por lado', desc: 'Subí y bajá la pierna de arriba sin bajar la cadera.' },
  { anim: 'squat', title: 'Toques rápidos de punta', target: '4 x 20 seg', desc: 'Ritmo ágil alternando puntas de pie en el lugar.' },
  { anim: 'russian_twist', title: 'Giros rusos pies elevados', target: '3 x 10 giros', desc: 'Mantené los pies apenas despegados del suelo si podés.' },
  { anim: 'pushup', title: 'Flexión + carpa', target: '3 x 6 reps', desc: 'Hacé 1 flexión y llevá la cadera arriba y atrás.' },
  { anim: 'shoulder_press', title: 'Press sentado con 1 kg', target: '3 x 12 reps', desc: 'Sentado con espalda recta, empujá las mancuernas arriba.' },
  { anim: 'squat', title: 'Zancada cruzada atrás', target: '3 x 8 por lado', desc: 'Llevá el pie atrás en diagonal y bajá controlado.' },
  { anim: 'soccer_zigzag', title: 'Toques con borde externo', target: '4 pasadas', desc: 'Conducí girando con el exterior de cada pie.' },
  { anim: 'russian_twist', title: 'Abdominales en V cortos', target: '3 x 10 reps', desc: 'Acercá rodillas y pecho al mismo tiempo con control.' },
  { anim: 'bird_dog', title: 'Equilibrio en un pie', target: '3 x 25 seg/pie', desc: 'Mantené el equilibrio en un pie con rodilla semiflexionada.' },
  { anim: 'pushup', title: 'Flexiones bajada en 3 seg', target: '3 x 6 reps', desc: 'Bajá contando 3 segundos y subí firme.' }
];

const STORAGE_KEY = 'amrap_13yo_mobile_v2';
const TOTAL_SECONDS = 20 * 60;
const DAILY_COINS_REWARD = 10;
const DAILY_CHALLENGE_BONUS = 5;
const FREEZE_COST = 100;
const MAX_FREEZES = 2;

let timerSecondsLeft = TOTAL_SECONDS;
let timerInterval = null;
let isTimerRunning = false;
let completed20MinToday = false;
let resetConfirmPending = false;
let resetConfirmTimeout = null;

let currentRounds = 0;
let selectedEffort = 'Normal';
let checklistState = {};
let selectedExerciseFilter = EXERCISES[0].id;
let monthOffset = 0;
let wakeLockSentinel = null;
let selectedStreakStyleIndex = 0;

let sessions = [];
let coins = 0;
let streakFreezes = 0;
let frozenDates = [];
let rewardedDates = [];
let claimedChallengeDates = [];
let unlockedPerks = [];

document.addEventListener('DOMContentLoaded', () => {
  loadSessions();
  applyAutomaticStreakFreezes();
  renderQuickChecklist();
  renderExerciseTabs();
  renderExercisesGrid();
  startSkeletonAnimationLoop();
  updateTimerUI();
  updateRoundsUI();
  refreshProgressView();
  refreshShopView();

  const manualForm = document.getElementById('manual-session-form');
  if (manualForm) {
    manualForm.addEventListener('submit', handleManualSessionSubmit);
  }

  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible' && wakeLockSentinel !== null) {
      await requestWakeLock(true);
    }
  });
});

function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isoToDayNumber(isoStr) {
  const [y, m, d] = isoStr.split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / (24 * 60 * 60 * 1000));
}

function dayNumberToISO(dayNum) {
  const dt = new Date(dayNum * 24 * 60 * 60 * 1000);
  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const d = String(dt.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDisplayDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function getDailyChallengeForDate(isoStr) {
  const dayNum = isoToDayNumber(isoStr);
  const idx = ((dayNum % DAILY_EXERCISES.length) + DAILY_EXERCISES.length) % DAILY_EXERCISES.length;
  return {
    dayIndex: idx + 1,
    ...DAILY_EXERCISES[idx]
  };
}

function normalizeSessionItem(item) {
  return {
    date: item.date,
    rounds: Number(item.rounds) || 0,
    effort: (item.effort === 'Bien' ? 'Normal' : item.effort) || (item.quality === 'Bien' ? 'Normal' : item.quality) || 'Normal',
    notes: item.notes || ''
  };
}

function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('amrap_13yo_progress_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        sessions = parsed.filter(i => i && typeof i.date === 'string').map(normalizeSessionItem);
      } else if (parsed && typeof parsed === 'object') {
        sessions = Array.isArray(parsed.sessions)
          ? parsed.sessions.filter(i => i && typeof i.date === 'string').map(normalizeSessionItem)
          : [];
        const baseCoins = Number(parsed.coins) || 0;
        const legacyDaily = Number(parsed.dailyCoins) || 0;
        const legacyEpic = Number(parsed.epicCoins) || 0;
        coins = Math.max(0, baseCoins > 0 ? baseCoins : (legacyDaily + legacyEpic));

        streakFreezes = Math.max(0, Math.min(MAX_FREEZES, Number(parsed.streakFreezes) || 0));
        frozenDates = Array.isArray(parsed.frozenDates)
          ? Array.from(new Set(parsed.frozenDates.filter(d => typeof d === 'string')))
          : [];
        rewardedDates = Array.isArray(parsed.rewardedDates)
          ? Array.from(new Set(parsed.rewardedDates.filter(d => typeof d === 'string')))
          : [];
        claimedChallengeDates = Array.isArray(parsed.claimedChallengeDates)
          ? Array.from(new Set(parsed.claimedChallengeDates.filter(d => typeof d === 'string')))
          : [];
        const perksSource = Array.isArray(parsed.unlockedPerks)
          ? parsed.unlockedPerks
          : (Array.isArray(parsed.unlockedEpicPerks) ? parsed.unlockedEpicPerks : []);
        unlockedPerks = Array.from(new Set(perksSource.filter(p => typeof p === 'string')));
      }
    }
  } catch (e) {
    sessions = [];
    coins = 0;
    streakFreezes = 0;
    frozenDates = [];
    rewardedDates = [];
    claimedChallengeDates = [];
    unlockedPerks = [];
  }
}

function saveSessions() {
  try {
    const payload = {
      sessions,
      coins,
      streakFreezes,
      frozenDates,
      rewardedDates,
      claimedChallengeDates,
      unlockedPerks
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    showToast('No se pudo guardar.');
  }
}

function applyAutomaticStreakFreezes() {
  if (!sessions.length || streakFreezes <= 0) return;

  const trainedDays = new Set(sessions.map(s => s.date));
  const frozenSet = new Set(frozenDates);
  const sortedTrained = Array.from(trainedDays).sort();
  let consumedCount = 0;

  for (let i = 1; i < sortedTrained.length && streakFreezes > 0; i++) {
    const prevDay = isoToDayNumber(sortedTrained[i - 1]);
    const currDay = isoToDayNumber(sortedTrained[i]);
    if (currDay - prevDay === 2) {
      const missedISO = dayNumberToISO(prevDay + 1);
      if (!trainedDays.has(missedISO) && !frozenSet.has(missedISO)) {
        frozenSet.add(missedISO);
        streakFreezes = Math.max(0, streakFreezes - 1);
        consumedCount++;
      }
    }
  }

  const todayDay = isoToDayNumber(getTodayISO());
  const lastTrainedDay = isoToDayNumber(sortedTrained[sortedTrained.length - 1]);
  if (todayDay - lastTrainedDay === 2 && streakFreezes > 0) {
    const yesterdayISO = dayNumberToISO(todayDay - 1);
    if (!trainedDays.has(yesterdayISO) && !frozenSet.has(yesterdayISO)) {
      frozenSet.add(yesterdayISO);
      streakFreezes = Math.max(0, streakFreezes - 1);
      consumedCount++;
    }
  }

  if (consumedCount > 0) {
    frozenDates = Array.from(frozenSet).sort();
    saveSessions();
    showToast(consumedCount === 1 ? 'Protector usado: 1 día salvado' : `Protectores usados: ${consumedCount} días`);
  }
}

function buyStreakFreeze() {
  if (streakFreezes >= MAX_FREEZES) {
    showToast(`Máximo ${MAX_FREEZES}/${MAX_FREEZES}`);
    return;
  }
  if (coins < FREEZE_COST) {
    showToast(`Faltan ${FREEZE_COST - coins} monedas`);
    return;
  }

  coins -= FREEZE_COST;
  streakFreezes = Math.min(MAX_FREEZES, streakFreezes + 1);
  saveSessions();
  refreshProgressView();
  refreshShopView();
  showToast(`Protector comprado (${streakFreezes}/${MAX_FREEZES})`);
}

function buyReward(perkId, cost) {
  if (unlockedPerks.includes(perkId)) {
    showToast('Ya desbloqueado');
    return;
  }
  if (coins < cost) {
    showToast(`Faltan ${cost - coins} monedas`);
    return;
  }

  coins -= cost;
  unlockedPerks.push(perkId);
  saveSessions();
  refreshShopView();
  showToast('Extra desbloqueado');
}

function claimDailyChallengeBonus() {
  const todayISO = getTodayISO();
  if (claimedChallengeDates.includes(todayISO)) {
    showToast('Ya cobraste el bonus de hoy');
    return;
  }

  coins += DAILY_CHALLENGE_BONUS;
  claimedChallengeDates.push(todayISO);
  saveSessions();
  refreshProgressView();
  refreshShopView();
  showToast(`+${DAILY_CHALLENGE_BONUS} monedas bonus`);
}

function refreshShopView() {
  const coinsEl = document.getElementById('shop-coins');
  const freezeCountEl = document.getElementById('shop-freeze-count');
  const buyBtn = document.getElementById('btn-buy-freeze');
  const buyLabel = document.getElementById('buy-freeze-label');

  if (coinsEl) coinsEl.textContent = coins;
  if (freezeCountEl) freezeCountEl.textContent = `${streakFreezes}/${MAX_FREEZES}`;

  if (buyBtn && buyLabel) {
    if (streakFreezes >= MAX_FREEZES) {
      buyBtn.disabled = true;
      buyLabel.textContent = `Protector · Máximo (${MAX_FREEZES}/${MAX_FREEZES})`;
    } else if (coins < FREEZE_COST) {
      buyBtn.disabled = true;
      buyLabel.textContent = `Protector · ${FREEZE_COST} monedas (faltan ${FREEZE_COST - coins})`;
    } else {
      buyBtn.disabled = false;
      buyLabel.textContent = `Protector de racha · ${FREEZE_COST} monedas`;
    }
  }

  const frameBtn = document.getElementById('btn-buy-epic-frame');
  if (frameBtn) {
    frameBtn.disabled = unlockedPerks.includes('frame') || coins < 25;
    frameBtn.textContent = unlockedPerks.includes('frame') ? 'Activo' : '25 Monedas';
  }

  const chimeBtn = document.getElementById('btn-buy-epic-chime');
  if (chimeBtn) {
    chimeBtn.disabled = unlockedPerks.includes('chime') || coins < 30;
    chimeBtn.textContent = unlockedPerks.includes('chime') ? 'Activo' : '30 Monedas';
  }

  const todayISO = getTodayISO();
  const challenge = getDailyChallengeForDate(todayISO);
  const numEl = document.getElementById('daily-challenge-number');
  const targetEl = document.getElementById('daily-challenge-target');
  const titleEl = document.getElementById('daily-challenge-title');
  const descEl = document.getElementById('daily-challenge-desc');
  const claimBtn = document.getElementById('btn-claim-daily-bonus');

  if (numEl) numEl.textContent = `Ejercicio #${challenge.dayIndex}/${DAILY_EXERCISES.length}`;
  if (targetEl) targetEl.textContent = challenge.target;
  if (titleEl) titleEl.textContent = challenge.title;
  if (descEl) descEl.textContent = challenge.desc;

  if (claimBtn) {
    const claimed = claimedChallengeDates.includes(todayISO);
    claimBtn.disabled = claimed;
    claimBtn.textContent = claimed ? 'Bonus cobrado hoy (+5)' : 'Completar y cobrar +5 monedas';
  }
}

function switchView(viewName) {
  const views = ['timer', 'exercises', 'progress', 'shop'];
  views.forEach(v => {
    const section = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`nav-${v}`);
    if (!section || !btn) return;
    if (v === viewName) {
      section.classList.remove('hidden');
      btn.classList.remove('bg-purewhite', 'text-pureblack');
      btn.classList.add('bg-pureblack', 'text-purewhite');
    } else {
      section.classList.add('hidden');
      btn.classList.remove('bg-pureblack', 'text-purewhite');
      btn.classList.add('bg-purewhite', 'text-pureblack');
    }
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
  if (viewName === 'progress') refreshProgressView();
  if (viewName === 'shop') refreshShopView();
}

async function toggleWakeLock() {
  if (wakeLockSentinel) {
    try { await wakeLockSentinel.release(); } catch (e) {}
    wakeLockSentinel = null;
    updateWakeLockButton(false);
    showToast('Pantalla activa: Off');
  } else {
    await requestWakeLock(false);
  }
}

async function requestWakeLock(silent) {
  if (!('wakeLock' in navigator)) {
    if (!silent) showToast('No compatible en este navegador');
    return;
  }
  try {
    wakeLockSentinel = await navigator.wakeLock.request('screen');
    updateWakeLockButton(true);
    if (!silent) showToast('Pantalla activa: On');
    wakeLockSentinel.addEventListener('release', () => updateWakeLockButton(false));
  } catch (err) {
    wakeLockSentinel = null;
    updateWakeLockButton(false);
  }
}

function updateWakeLockButton(active) {
  const btn = document.getElementById('btn-wakelock');
  const label = document.getElementById('wakelock-label');
  if (!btn || !label) return;
  btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  label.textContent = active ? 'Pantalla activa: On' : 'Pantalla activa: Off';
}

function playSoftFinishAlert() {
  if ('vibrate' in navigator) {
    try { navigator.vibrate([250, 120, 250, 120, 400]); } catch (e) {}
  }

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const hasExtraChime = unlockedPerks.includes('chime');
    const freqs = hasExtraChime ? [440, 554.37, 659.25, 880] : [440, 554.37, 659.25];
    const duration = hasExtraChime ? 0.85 : 0.55;

    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.25);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.25);
      gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + i * 0.25 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.25 + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.25);
      osc.stop(ctx.currentTime + i * 0.25 + duration + 0.02);
    });
  } catch (e) {}
}

function updateTimerUI() {
  const mins = Math.floor(timerSecondsLeft / 60);
  const secs = timerSecondsLeft % 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  const pct = Math.max(0, Math.min(100, (timerSecondsLeft / TOTAL_SECONDS) * 100));
  const bar = document.getElementById('timer-progress-bar');
  if (bar) bar.style.width = `${pct}%`;

  const toggleBtn = document.getElementById('btn-toggle-timer');
  const toggleText = document.getElementById('toggle-timer-text');
  const toggleIcon = document.getElementById('toggle-timer-icon');

  if (toggleBtn && toggleText && toggleIcon) {
    if (isTimerRunning) {
      toggleBtn.classList.remove('bg-pureblack', 'text-purewhite');
      toggleBtn.classList.add('bg-purewhite', 'text-pureblack');
      toggleText.textContent = 'Pausar';
      toggleIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    } else {
      toggleBtn.classList.remove('bg-purewhite', 'text-pureblack');
      toggleBtn.classList.add('bg-pureblack', 'text-purewhite');
      toggleText.textContent = timerSecondsLeft === TOTAL_SECONDS ? 'Iniciar' : 'Reanudar';
      toggleIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
  }
}

function toggleTimer() {
  if (isTimerRunning) pauseTimer();
  else startTimer();
}

function startTimer() {
  if (isTimerRunning) return;
  if (timerSecondsLeft <= 0) timerSecondsLeft = TOTAL_SECONDS;
  isTimerRunning = true;
  updateTimerUI();

  if (!wakeLockSentinel && 'wakeLock' in navigator) {
    requestWakeLock(true);
  }

  timerInterval = setInterval(() => {
    if (timerSecondsLeft > 0) {
      timerSecondsLeft--;
      updateTimerUI();
    } else {
      pauseTimer();
      completed20MinToday = true;
      updateTimerUI();
      playSoftFinishAlert();
      showToast('20 minutos listos');
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  updateTimerUI();
}

function handleResetTimerTap() {
  if (timerSecondsLeft === TOTAL_SECONDS && !isTimerRunning) {
    showToast('Ya está en 20:00');
    return;
  }

  const resetBtn = document.getElementById('btn-reset-timer');
  const resetText = document.getElementById('reset-timer-text');
  if (!resetBtn || !resetText) return;

  if (!resetConfirmPending) {
    resetConfirmPending = true;
    resetBtn.classList.remove('bg-purewhite', 'text-pureblack');
    resetBtn.classList.add('bg-pureblack', 'text-purewhite');
    resetText.textContent = '¿Seguro?';

    resetConfirmTimeout = setTimeout(() => {
      resetConfirmPending = false;
      resetBtn.classList.remove('bg-pureblack', 'text-purewhite');
      resetBtn.classList.add('bg-purewhite', 'text-pureblack');
      resetText.textContent = 'Reiniciar';
    }, 3000);
  } else {
    clearTimeout(resetConfirmTimeout);
    resetConfirmPending = false;
    resetBtn.classList.remove('bg-purewhite', 'text-pureblack');
    resetBtn.classList.add('bg-pureblack', 'text-purewhite');
    resetText.textContent = 'Reiniciar';

    pauseTimer();
    timerSecondsLeft = TOTAL_SECONDS;
    updateTimerUI();
    showToast('Reiniciado a 20:00');
  }
}

function changeRounds(delta, fromFullCircuit = false) {
  currentRounds = Math.max(0, currentRounds + delta);
  updateRoundsUI();
  if (delta > 0) {
    if ('vibrate' in navigator) {
      try { navigator.vibrate(45); } catch (e) {}
    }
    resetChecklist();
    showToast(fromFullCircuit ? `Vuelta completa (${currentRounds})` : `+1 vuelta (${currentRounds})`);
  }
}

function updateRoundsUI() {
  const disp = document.getElementById('rounds-display');
  if (disp) disp.textContent = currentRounds;
  const doneCount = EXERCISES.filter(ex => checklistState[ex.id]).length;
  const hint = document.getElementById('round-status-hint');
  if (hint) hint.textContent = `${doneCount}/6`;
}

function renderQuickChecklist() {
  const container = document.getElementById('quick-circuit-list');
  if (!container) return;

  container.innerHTML = EXERCISES.map(ex => {
    const checked = !!checklistState[ex.id];
    return `
      <button type="button" onclick="toggleChecklistItem('${ex.id}')" class="w-full min-h-[58px] text-left border-2 border-pureblack px-3.5 py-2.5 flex items-center justify-between gap-3 btn-press ${checked ? 'bg-pureblack text-purewhite' : 'bg-purewhite text-pureblack'}">
        <div class="flex items-center gap-3 min-w-0">
          <span class="text-xs font-bold tabular-nums px-2 py-1 border ${checked ? 'border-purewhite text-purewhite' : 'border-pureblack text-pureblack'} shrink-0">
            ${ex.number}
          </span>
          <div class="truncate">
            <div class="text-sm sm:text-base font-bold truncate">${ex.name}</div>
            <div class="text-xs ${checked ? 'text-neutral-300' : 'text-neutral-600'}">${ex.reps}</div>
          </div>
        </div>
        <div class="w-7 h-7 shrink-0 border-2 ${checked ? 'border-purewhite bg-purewhite text-pureblack' : 'border-pureblack bg-purewhite'} flex items-center justify-center">
          ${checked ? `
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ` : ''}
        </div>
      </button>
    `;
  }).join('');

  updateRoundsUI();
}

function toggleChecklistItem(id) {
  checklistState[id] = !checklistState[id];
  renderQuickChecklist();

  if (EXERCISES.every(ex => checklistState[ex.id])) {
    setTimeout(() => {
      if (EXERCISES.every(ex => checklistState[ex.id])) {
        changeRounds(1, true);
      }
    }, 180);
  }
}

function resetChecklist() {
  checklistState = {};
  renderQuickChecklist();
}

function selectEffort(effort) {
  selectedEffort = effort;
  document.querySelectorAll('.effort-btn').forEach(btn => {
    const active = btn.dataset.effort === effort;
    btn.classList.toggle('bg-pureblack', active);
    btn.classList.toggle('text-purewhite', active);
    btn.classList.toggle('bg-purewhite', !active);
    btn.classList.toggle('text-pureblack', !active);
  });
}

function applySessionRewards(dateISO, rounds, previousBestRounds) {
  const todayISO = getTodayISO();
  let earned = 0;

  if (dateISO === todayISO && completed20MinToday && rounds > 0 && !rewardedDates.includes(todayISO)) {
    earned += DAILY_COINS_REWARD;
    rewardedDates.push(todayISO);
  }

  if (rounds > previousBestRounds && rounds > 0) {
    earned += 20;
  }

  if ((selectedEffort === 'Fuerte' || selectedEffort === 'A tope') && rounds > 0) {
    earned += 5;
  }

  if (earned > 0) {
    coins += earned;
    return ` (+${earned} monedas)`;
  }
  return '';
}

function saveTodaySession() {
  const today = getTodayISO();
  const previousBestRounds = sessions.reduce((max, s) => Math.max(max, Number(s.rounds) || 0), 0);
  const idx = sessions.findIndex(s => s.date === today);
  const record = {
    date: today,
    rounds: currentRounds,
    effort: selectedEffort,
    notes: idx >= 0 ? sessions[idx].notes : ''
  };

  const applySave = () => {
    if (idx >= 0) sessions[idx] = record;
    else sessions.push(record);

    const rewardMsg = applySessionRewards(today, currentRounds, previousBestRounds);
    saveSessions();
    refreshProgressView();
    refreshShopView();
    showToast(`Guardado: ${currentRounds} vueltas${rewardMsg}`);
  };

  if (idx >= 0) {
    openConfirmModal(
      'Actualizar hoy',
      `Ya tenés ${sessions[idx].rounds} vueltas en ${formatDisplayDate(today)}. ¿Cambiar a ${currentRounds} vueltas?`,
      applySave
    );
  } else {
    applySave();
  }
}

function renderExerciseTabs() {
  const container = document.getElementById('exercise-filter-tabs');
  if (!container) return;

  container.innerHTML = EXERCISES.map(ex => {
    const active = selectedExerciseFilter === ex.id;
    return `
      <button type="button" onclick="filterExercises('${ex.id}')" class="min-h-[44px] px-1.5 text-xs font-bold uppercase border-2 border-pureblack btn-press ${active ? 'bg-pureblack text-purewhite' : 'bg-purewhite text-pureblack'}">
        ${ex.number}
      </button>
    `;
  }).join('');
}

function filterExercises(id) {
  selectedExerciseFilter = id;
  renderExerciseTabs();
  renderExercisesGrid();
}

function renderExercisesGrid() {
  const grid = document.getElementById('exercises-grid');
  if (!grid) return;
  const filtered = EXERCISES.filter(ex => ex.id === selectedExerciseFilter);

  grid.innerHTML = filtered.map(ex => `
    <article class="brutal-border bg-purewhite overflow-hidden">
      <div class="p-4 border-b-2 border-pureblack flex items-center justify-between gap-2">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="px-2.5 py-1 bg-pureblack text-purewhite text-xs font-bold tabular-nums shrink-0">${ex.number}</span>
          <h3 class="text-base sm:text-lg font-bold uppercase tracking-tight leading-tight">${ex.name}</h3>
        </div>
        <span class="px-2.5 py-1 border-2 border-pureblack text-xs font-bold uppercase whitespace-nowrap shrink-0">
          ${ex.reps}
        </span>
      </div>

      <div class="p-3 bg-purewhite border-b border-lightborder">
        <svg id="skel-svg-${ex.id}" viewBox="0 0 340 185" class="w-full h-auto bg-purewhite block" role="img" aria-label="${ex.name}"></svg>
      </div>

      <div class="p-4 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase text-neutral-600">
          <span>${ex.rhythm}</span>
          <span>${ex.equipment}</span>
        </div>

        <ol class="space-y-2.5 text-base text-pureblack list-decimal list-inside">
          ${ex.steps.map(step => `<li class="leading-snug">${step}</li>`).join('')}
        </ol>

        <details class="border-2 border-pureblack mt-3">
          <summary class="min-h-[46px] px-3.5 py-2.5 bg-neutral-50 font-bold text-xs uppercase tracking-wider flex items-center justify-between cursor-pointer select-none">
            <span>Error y adaptación</span>
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="p-3.5 border-t border-pureblack bg-purewhite space-y-2.5 text-sm leading-relaxed">
            <p><strong class="uppercase text-xs">Error:</strong> ${ex.avoid}</p>
            <p><strong class="uppercase text-xs">Adaptación:</strong> ${ex.modification}</p>
          </div>
        </details>
      </div>
    </article>
  `).join('');

  drawStaticExerciseSVGs();
}

let fkAnimationFrameId = null;

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function polarPoint(origin, length, angleDeg) {
  const r = degToRad(angleDeg);
  return {
    x: origin.x + length * Math.cos(r),
    y: origin.y + length * Math.sin(r)
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothWave(tSec, periodSec) {
  return 0.5 - 0.5 * Math.cos((2 * Math.PI * tSec) / periodSec);
}

function renderArticulatedFigure(sk, extrasTop = '', extrasBottom = '') {
  const LEFT_COLOR = '#000000';
  const RIGHT_COLOR = '#777777';

  const seg = (p1, p2, color, width = 3.2) =>
    `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" />`;

  const joint = (p, color, r = 2.1) =>
    `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" fill="${color}" />`;

  const foot = (ankle, footTip, color) =>
    footTip ? seg(ankle, footTip, color, 3) : '';

  return `
    ${extrasBottom}
    ${seg(sk.hipR, sk.kneeR, RIGHT_COLOR, 3.2)}
    ${seg(sk.kneeR, sk.ankleR, RIGHT_COLOR, 3.2)}
    ${foot(sk.ankleR, sk.footR, RIGHT_COLOR)}
    ${joint(sk.kneeR, RIGHT_COLOR, 2)}

    ${seg(sk.shoulderR, sk.elbowR, RIGHT_COLOR, 3)}
    ${seg(sk.elbowR, sk.handR, RIGHT_COLOR, 3)}
    ${joint(sk.elbowR, RIGHT_COLOR, 1.9)}

    ${seg(sk.pelvis, sk.waist, LEFT_COLOR, 3.8)}
    ${seg(sk.waist, sk.neck, LEFT_COLOR, 3.8)}
    ${joint(sk.waist, LEFT_COLOR, 2.2)}
    ${seg(sk.neck, sk.headCenter, LEFT_COLOR, 2.6)}
    <circle cx="${sk.headCenter.x.toFixed(1)}" cy="${sk.headCenter.y.toFixed(1)}" r="${sk.headR || 9.5}" fill="#FFFFFF" stroke="${LEFT_COLOR}" stroke-width="2.5" />

    ${seg(sk.hipL, sk.kneeL, LEFT_COLOR, 3.4)}
    ${seg(sk.kneeL, sk.ankleL, LEFT_COLOR, 3.4)}
    ${foot(sk.ankleL, sk.footL, LEFT_COLOR)}
    ${joint(sk.kneeL, LEFT_COLOR, 2.1)}

    ${seg(sk.shoulderL, sk.elbowL, LEFT_COLOR, 3.2)}
    ${seg(sk.elbowL, sk.handL, LEFT_COLOR, 3.2)}
    ${joint(sk.elbowL, LEFT_COLOR, 2)}
    ${extrasTop}
  `;
}

function buildSquatFrame(tSec) {
  const p = smoothWave(tSec, 2.8);
  const floorY = 148;

  const ankleL = { x: 165, y: floorY };
  const footL = { x: 180, y: floorY };
  const ankleR = { x: 167, y: floorY - 1 };
  const footR = { x: 182, y: floorY - 1 };

  const shinLen = 36;
  const thighLen = 38;
  const shinAngle = lerp(-92, -62, p);
  const thighAngle = lerp(-90, -162, p);

  const kneeL = polarPoint(ankleL, shinLen, shinAngle);
  const kneeR = polarPoint(ankleR, shinLen, shinAngle);

  const hipL = polarPoint(kneeL, thighLen, thighAngle);
  const hipR = polarPoint(kneeR, thighLen, thighAngle);
  const pelvis = { x: (hipL.x + hipR.x) / 2, y: (hipL.y + hipR.y) / 2 };

  const lowerTorsoAngle = lerp(-90, -64, p);
  const upperTorsoAngle = lerp(-90, -62, p);
  const waist = polarPoint(pelvis, 20, lowerTorsoAngle);
  const neck = polarPoint(waist, 22, upperTorsoAngle);
  const headCenter = polarPoint(neck, 12.5, upperTorsoAngle);

  const shoulderL = { x: neck.x, y: neck.y + 3 };
  const shoulderR = { x: neck.x + 2, y: neck.y + 2 };

  const upperArmAngle = lerp(84, 4, p);
  const forearmAngle = lerp(72, -10, p);
  const elbowL = polarPoint(shoulderL, 20, upperArmAngle);
  const handL = polarPoint(elbowL, 20, forearmAngle);

  const elbowR = polarPoint(shoulderR, 20, upperArmAngle);
  const handR = polarPoint(elbowR, 20, forearmAngle);

  const floorLine = `<line x1="16" y1="${floorY}" x2="324" y2="${floorY}" stroke="#000000" stroke-width="2" />`;

  return renderArticulatedFigure({
    pelvis, waist, neck, headCenter, headR: 9.5,
    hipL, kneeL, ankleL, footL,
    hipR, kneeR, ankleR, footR,
    shoulderL, elbowL, handL,
    shoulderR, elbowR, handR
  }, '', floorLine);
}

function buildPushupFrame(tSec) {
  const p = smoothWave(tSec, 2.6);
  const floorY = 144;

  const footL = { x: 82, y: floorY };
  const ankleL = { x: 82, y: floorY - 5 };
  const footR = { x: 88, y: floorY - 2 };
  const ankleR = { x: 88, y: floorY - 7 };

  const plankAngle = lerp(-24, -8.5, p);

  const kneeL = polarPoint(ankleL, 38, plankAngle);
  const hipL = polarPoint(kneeL, 38, plankAngle);

  const kneeR = polarPoint(ankleR, 38, plankAngle);
  const hipR = polarPoint(kneeR, 38, plankAngle);

  const pelvis = { x: (hipL.x + hipR.x) / 2, y: (hipL.y + hipR.y) / 2 };
  const waist = polarPoint(pelvis, 21, plankAngle);
  const neck = polarPoint(waist, 23, plankAngle);
  const headCenter = polarPoint(neck, 13, plankAngle);

  const shoulderL = { x: neck.x - 3, y: neck.y + 3 };
  const shoulderR = { x: neck.x + 2, y: neck.y + 1 };

  const handL = { x: shoulderL.x + 2, y: floorY };
  const handR = { x: shoulderR.x + 3, y: floorY - 2 };

  const upperArmLen = 21;
  const forearmLen = 21;
  const elbowL = solveTwoBoneIK(shoulderL, handL, upperArmLen, forearmLen, false);
  const elbowR = solveTwoBoneIK(shoulderR, handR, upperArmLen, forearmLen, false);

  const floorLine = `<line x1="16" y1="${floorY}" x2="324" y2="${floorY}" stroke="#000000" stroke-width="2" />`;

  return renderArticulatedFigure({
    pelvis, waist, neck, headCenter, headR: 9,
    hipL, kneeL, ankleL, footL,
    hipR, kneeR, ankleR, footR,
    shoulderL, elbowL, handL,
    shoulderR, elbowR, handR
  }, '', floorLine);
}

function solveTwoBoneIK(p1, p2, len1, len2, bendUp) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const maxReach = len1 + len2 - 0.5;
  const minReach = Math.abs(len1 - len2) + 0.5;
  const dist = Math.max(minReach, Math.min(maxReach, Math.hypot(dx, dy)));
  const a = (len1 * len1 - len2 * len2 + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(0, len1 * len1 - a * a));
  const xm = p1.x + (a * dx) / dist;
  const ym = p1.y + (a * dy) / dist;
  const rx = (-dy * h) / dist;
  const ry = (dx * h) / dist;
  const opt1 = { x: xm + rx, y: ym + ry };
  const opt2 = { x: xm - rx, y: ym - ry };
  return bendUp ? (opt1.y < opt2.y ? opt1 : opt2) : (opt1.y > opt2.y ? opt1 : opt2);
}

function buildRussianTwistFrame() {
  const floorY = 148;
  const LEFT_COLOR = '#000000';
  const RIGHT_COLOR = '#777777';

  const seg = (p1, p2, color, width = 2.8) =>
    `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" />`;
  const joint = (p, color, r = 1.8) =>
    `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" fill="${color}" />`;

  const renderStickPerson = (ox, mode) => {
    const pelvis = { x: ox, y: floorY - 5 };
    const hipL = { x: ox, y: floorY - 5 };
    const hipR = { x: ox + 2.5, y: floorY - 5 };

    const waist = { x: ox - 18, y: floorY - 23 };
    const neck = { x: ox - 36, y: floorY - 41 };
    const headCenter = { x: ox - 45, y: floorY - 51 };

    const kneeL = { x: ox + 42, y: floorY - 33 };
    const kneeR = { x: ox + 44, y: floorY - 31.5 };

    const ankleL = { x: ox + 80, y: floorY - 4 };
    const footL = { x: ox + 93, y: floorY - 4 };
    const ankleR = { x: ox + 77, y: floorY - 5.5 };
    const footR = { x: ox + 90, y: floorY - 5.5 };

    const shoulderL = { x: neck.x - 1, y: neck.y + 2.5 };
    const shoulderR = { x: neck.x + 3, y: neck.y + 2.5 };

    const isFront = mode === 'front';
    const ballX = isFront ? (ox - 10) : (ox - 24);
    const ballY = isFront ? (floorY - 17) : (floorY - 22);

    const handL = { x: ballX - 5.5, y: ballY + 1 };
    const handR = { x: ballX + 5.5, y: ballY - 1 };

    const elbowL = isFront
      ? { x: shoulderL.x - 6, y: shoulderL.y + 15 }
      : { x: shoulderL.x - 12, y: shoulderL.y + 11 };
    const elbowR = isFront
      ? { x: shoulderR.x + 8, y: shoulderR.y + 13 }
      : { x: shoulderR.x + 2, y: shoulderR.y + 14 };

    const ballSVG = `
      <g>
        <circle cx="${ballX.toFixed(1)}" cy="${ballY.toFixed(1)}" r="6.8" fill="#FFFFFF" stroke="#000000" stroke-width="2.1" />
        <circle cx="${ballX.toFixed(1)}" cy="${ballY.toFixed(1)}" r="2.2" fill="#000000" />
      </g>
    `;

    const legsAndBody = `
      ${seg(hipR, kneeR, RIGHT_COLOR, 2.7)}
      ${seg(kneeR, ankleR, RIGHT_COLOR, 2.7)}
      ${seg(ankleR, footR, RIGHT_COLOR, 2.5)}
      ${joint(kneeR, RIGHT_COLOR, 1.7)}

      ${seg(pelvis, waist, LEFT_COLOR, 3.2)}
      ${seg(waist, neck, LEFT_COLOR, 3.2)}
      ${joint(waist, LEFT_COLOR, 1.8)}
      ${seg(neck, headCenter, LEFT_COLOR, 2.2)}
      <circle cx="${headCenter.x.toFixed(1)}" cy="${headCenter.y.toFixed(1)}" r="7.5" fill="#FFFFFF" stroke="${LEFT_COLOR}" stroke-width="2.1" />

      ${seg(hipL, kneeL, LEFT_COLOR, 2.9)}
      ${seg(kneeL, ankleL, LEFT_COLOR, 2.9)}
      ${seg(ankleL, footL, LEFT_COLOR, 2.5)}
      ${joint(kneeL, LEFT_COLOR, 1.8)}
    `;

    const armsSVG = `
      ${seg(shoulderR, elbowR, RIGHT_COLOR, 2.6)}
      ${seg(elbowR, handR, RIGHT_COLOR, 2.6)}
      ${joint(elbowR, RIGHT_COLOR, 1.6)}

      ${seg(shoulderL, elbowL, LEFT_COLOR, 2.8)}
      ${seg(elbowL, handL, LEFT_COLOR, 2.8)}
      ${joint(elbowL, LEFT_COLOR, 1.7)}
    `;

    const badgeX = ox + 12;
    const stepLabel = isFront ? 'PASO 1' : 'PASO 2';

    return `
      <rect x="${(badgeX - 24).toFixed(1)}" y="24" width="48" height="14" fill="#000000" />
      <text x="${badgeX.toFixed(1)}" y="34" font-size="8.5" font-weight="700" text-anchor="middle" fill="#FFFFFF">${stepLabel}</text>
      ${isFront ? `${legsAndBody}${armsSVG}${ballSVG}` : `${ballSVG}${legsAndBody}${armsSVG}`}
    `;
  };

  const floorLine = `<line x1="14" y1="${floorY}" x2="326" y2="${floorY}" stroke="#000000" stroke-width="2" />`;
  const divider = `<line x1="170" y1="22" x2="170" y2="${floorY - 2}" stroke="#D4D4D4" stroke-width="1.2" stroke-dasharray="3 3" />`;

  return `
    ${floorLine}
    ${divider}
    ${renderStickPerson(72, 'front')}
    ${renderStickPerson(236, 'back')}
  `;
}

function buildShoulderPressFrame(tSec) {
  const p = smoothWave(tSec, 2.4);
  const floorY = 152;
  const centerX = 170;

  const pelvis = { x: centerX, y: 100 };
  const hipL = { x: centerX, y: 100 };
  const hipR = { x: centerX, y: 100 };

  const thighAngleL = 104;
  const thighAngleR = 76;
  const kneeL = polarPoint(hipL, 26, thighAngleL);
  const ankleL = polarPoint(kneeL, 27, thighAngleL);
  const footL = { x: ankleL.x - 8, y: floorY };

  const kneeR = polarPoint(hipR, 26, thighAngleR);
  const ankleR = polarPoint(kneeR, 27, thighAngleR);
  const footR = { x: ankleR.x + 8, y: floorY };

  const waist = { x: centerX, y: 82 };
  const neck = { x: centerX, y: 60 };
  const headCenter = { x: centerX, y: 46 };

  const shoulderL = { x: centerX, y: 65 };
  const shoulderR = { x: centerX, y: 65 };

  const upperAngleL = lerp(150, 228, p);
  const elbowL = polarPoint(shoulderL, 21, upperAngleL);
  const handL = polarPoint(elbowL, 19, -90);

  const upperAngleR = lerp(30, -48, p);
  const elbowR = polarPoint(shoulderR, 21, upperAngleR);
  const handR = polarPoint(elbowR, 19, -90);

  const dumbbells = `
    <g>
      <rect x="${(handL.x - 9).toFixed(1)}" y="${(handL.y - 4.5).toFixed(1)}" width="18" height="4.8" fill="#000000" />
      <rect x="${(handR.x - 9).toFixed(1)}" y="${(handR.y - 4.5).toFixed(1)}" width="18" height="4.8" fill="#777777" />
    </g>
  `;

  const floorLine = `<line x1="16" y1="${floorY}" x2="324" y2="${floorY}" stroke="#000000" stroke-width="2" />`;

  return renderArticulatedFigure({
    pelvis, waist, neck, headCenter, headR: 9.5,
    hipL, kneeL, ankleL, footL,
    hipR, kneeR, ankleR, footR,
    shoulderL, elbowL, handL,
    shoulderR, elbowR, handR
  }, dumbbells, floorLine);
}

function buildBirdDogFrame(tSec) {
  const cycle = 4.6;
  const phase = (tSec % cycle) / cycle;

  let extA = 0;
  let extB = 0;

  if (phase < 0.5) {
    const localT = phase / 0.5;
    extA = 0.5 - 0.5 * Math.cos(2 * Math.PI * localT);
  } else {
    const localT = (phase - 0.5) / 0.5;
    extB = 0.5 - 0.5 * Math.cos(2 * Math.PI * localT);
  }

  const floorY = 144;

  const pelvis = { x: 136, y: 92 };
  const waist = { x: 168, y: 92 };
  const neck = { x: 200, y: 92 };
  const headCenter = { x: 213, y: 86 };

  const shoulderL = { x: 198, y: 93 };
  const shoulderR = { x: 203, y: 91 };
  const hipL = { x: 135, y: 93 };
  const hipR = { x: 140, y: 91 };

  const armAngleL = lerp(90, 0, extA);
  const elbowL = polarPoint(shoulderL, 25, armAngleL);
  const handL = polarPoint(elbowL, 26, armAngleL);

  const armAngleR = lerp(90, 0, extB);
  const elbowR = polarPoint(shoulderR, 26, armAngleR);
  const handR = polarPoint(elbowR, 27, armAngleR);

  const thighAngleL = lerp(90, 180, extB);
  const shinAngleL = lerp(180, 180, extB);
  const kneeL = polarPoint(hipL, 51, thighAngleL);
  const ankleL = polarPoint(kneeL, 28, shinAngleL);
  const footL = { x: ankleL.x, y: ankleL.y - 4 };

  const thighAngleR = lerp(90, 180, extA);
  const shinAngleR = lerp(180, 180, extA);
  const kneeR = polarPoint(hipR, 53, thighAngleR);
  const ankleR = polarPoint(kneeR, 28, shinAngleR);
  const footR = { x: ankleR.x, y: ankleR.y - 4 };

  const floorLine = `<line x1="16" y1="${floorY}" x2="324" y2="${floorY}" stroke="#000000" stroke-width="2" />`;

  return renderArticulatedFigure({
    pelvis, waist, neck, headCenter, headR: 8.5,
    hipL, kneeL, ankleL, footL,
    hipR, kneeR, ankleR, footR,
    shoulderL, elbowL, handL,
    shoulderR, elbowR, handR
  }, '', floorLine);
}

function buildZigzagFrame(tSec) {
  const cycle = 5.2;
  const tau = ((tSec % cycle) / cycle) * Math.PI * 2;

  const centerX = 170;
  const centerY = 114;
  const ampX = 88;
  const ampY = 22;

  const ballX = centerX + ampX * Math.sin(tau);
  const ballY = centerY + ampY * Math.sin(2 * tau);

  const vx = ampX * Math.cos(tau);
  const vy = 2 * ampY * Math.cos(2 * tau);
  const speed = Math.hypot(vx, vy) || 1;
  const tx = vx / speed;
  const ty = vy / speed;
  const nx = -ty;
  const ny = tx;

  const playerX = ballX - tx * 16 + nx * 7;
  const playerY = ballY - ty * 16 + ny * 7;

  const stride = Math.sin(tSec * 12);
  const strideOpp = -stride;
  const facingSign = tx >= 0 ? 1 : -1;

  const pelvis = { x: playerX, y: playerY - 24 };
  const waist = { x: playerX + facingSign * 1.5, y: playerY - 34 };
  const neck = { x: playerX + facingSign * 3, y: playerY - 44 };
  const headCenter = { x: playerX + facingSign * 4, y: playerY - 52 };

  const hipL = { x: pelvis.x - 1, y: pelvis.y };
  const thighAngleL = 90 - facingSign * (stride * 24);
  const kneeL = polarPoint(hipL, 12, thighAngleL);
  const shinAngleL = thighAngleL + facingSign * Math.max(6, stride * 22);
  const ankleL = polarPoint(kneeL, 12, shinAngleL);
  const footL = { x: ankleL.x + facingSign * 4, y: ankleL.y };

  const hipR = { x: pelvis.x + 1.5, y: pelvis.y - 1 };
  const thighAngleR = 90 - facingSign * (strideOpp * 24);
  const kneeR = polarPoint(hipR, 12, thighAngleR);
  const shinAngleR = thighAngleR + facingSign * Math.max(6, strideOpp * 22);
  const ankleR = polarPoint(kneeR, 12, shinAngleR);
  const footR = { x: ankleR.x + facingSign * 4, y: ankleR.y };

  const shoulderL = { x: neck.x - 1, y: neck.y + 2 };
  const armAngleL = 90 - facingSign * (strideOpp * 22);
  const elbowL = polarPoint(shoulderL, 9, armAngleL);
  const handL = polarPoint(elbowL, 9, armAngleL - facingSign * 26);

  const shoulderR = { x: neck.x + 1.5, y: neck.y + 1.5 };
  const armAngleR = 90 - facingSign * (stride * 22);
  const elbowR = polarPoint(shoulderR, 9, armAngleR);
  const handR = polarPoint(elbowR, 9, armAngleR - facingSign * 26);

  let pathD = '';
  const lineSegments = 24;
  for (let i = 0; i <= lineSegments; i++) {
    const a = (i / lineSegments) * Math.PI * 2;
    const px = (centerX + ampX * Math.sin(a)).toFixed(1);
    const py = (centerY + ampY * Math.sin(2 * a)).toFixed(1);
    pathD += (i === 0 ? `M ${px},${py}` : ` L ${px},${py}`);
  }
  pathD += ' Z';

  const cone1X = 116;
  const cone2X = 224;
  const coneY = 114;

  const backgroundField = `
    <line x1="${cone1X}" y1="28" x2="${cone2X}" y2="28" stroke="#000000" stroke-width="1.4" />
    <line x1="${cone1X}" y1="23" x2="${cone1X}" y2="33" stroke="#000000" stroke-width="1.4" />
    <line x1="${cone2X}" y1="23" x2="${cone2X}" y2="33" stroke="#000000" stroke-width="1.4" />
    <rect x="148" y="20" width="44" height="14" fill="#FFFFFF" />
    <text x="170" y="31" font-size="9.5" font-weight="700" text-anchor="middle" fill="#000000">1,5 m</text>

    <path d="${pathD}" fill="none" stroke="#B5B5B5" stroke-width="1.5" />

    <polygon points="${cone1X},${coneY - 9} ${cone1X - 8},${coneY + 7} ${cone1X + 8},${coneY + 7}" fill="#000000" />
    <line x1="${cone1X - 10}" y1="${coneY + 7}" x2="${cone1X + 10}" y2="${coneY + 7}" stroke="#000000" stroke-width="1.8" />

    <polygon points="${cone2X},${coneY - 9} ${cone2X - 8},${coneY + 7} ${cone2X + 8},${coneY + 7}" fill="#000000" />
    <line x1="${cone2X - 10}" y1="${coneY + 7}" x2="${cone2X + 10}" y2="${coneY + 7}" stroke="#000000" stroke-width="1.8" />
  `;

  const soccerBall = `
    <g>
      <ellipse cx="${ballX.toFixed(1)}" cy="${(ballY + 6.5).toFixed(1)}" rx="6.5" ry="2" fill="#E5E5E5" />
      <circle cx="${ballX.toFixed(1)}" cy="${ballY.toFixed(1)}" r="6.5" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
    </g>
  `;

  return renderArticulatedFigure({
    pelvis, waist, neck, headCenter, headR: 5.8,
    hipL, kneeL, ankleL, footL,
    hipR, kneeR, ankleR, footR,
    shoulderL, elbowL, handL,
    shoulderR, elbowR, handR
  }, soccerBall, backgroundField);
}

function drawStaticExerciseSVGs() {
  const staticBuilders = {
    russian_twist: buildRussianTwistFrame
  };

  EXERCISES.forEach(ex => {
    if (!staticBuilders[ex.id]) return;
    const svgEl = document.getElementById(`skel-svg-${ex.id}`);
    if (!svgEl) return;
    const bodySVG = staticBuilders[ex.id]();
    svgEl.innerHTML = `
      <text x="170" y="14" font-size="9.5" font-weight="700" text-anchor="middle" fill="#000000">${ex.animHeader}</text>
      ${bodySVG}
      <text x="170" y="164" font-size="8.5" font-weight="700" text-anchor="middle" fill="#000000">${ex.animFooter}</text>
      <text x="170" y="178" font-size="8" font-weight="700" text-anchor="middle" fill="#555555">Negro: Izquierda • Gris: Derecha</text>
    `;
  });
}

function updateAllSkeletonCanvases(timestampMs) {
  const tSec = timestampMs / 1000;

  const builders = {
    squat: buildSquatFrame,
    pushup: buildPushupFrame,
    russian_twist: buildRussianTwistFrame,
    shoulder_press: buildShoulderPressFrame,
    bird_dog: buildBirdDogFrame,
    soccer_zigzag: buildZigzagFrame
  };

  EXERCISES.forEach(ex => {
    const svgEl = document.getElementById(`skel-svg-${ex.id}`);
    if (!svgEl) return;

    if (ex.id === 'russian_twist' && svgEl.dataset.staticRendered === 'true') {
      return;
    }

    const bodySVG = builders[ex.id](tSec);
    svgEl.innerHTML = `
      <text x="170" y="14" font-size="9.5" font-weight="700" text-anchor="middle" fill="#000000">${ex.animHeader}</text>
      ${bodySVG}
      <text x="170" y="164" font-size="8.5" font-weight="700" text-anchor="middle" fill="#000000">${ex.animFooter}</text>
      <text x="170" y="178" font-size="8" font-weight="700" text-anchor="middle" fill="#555555">Negro: Izquierda • Gris: Derecha</text>
    `;

    if (ex.id === 'russian_twist') {
      svgEl.dataset.staticRendered = 'true';
    }
  });

  // Animación del ejercicio diario bonus en Tienda
  const dailySvg = document.getElementById('daily-challenge-svg');
  if (dailySvg) {
    const todayChallenge = getDailyChallengeForDate(getTodayISO());
    const builder = builders[todayChallenge.anim] || buildSquatFrame;
    const bodySVG = builder(tSec);
    dailySvg.innerHTML = `
      <text x="170" y="14" font-size="9" font-weight="700" text-anchor="middle" fill="#000000">EJEMPLO DE MOVIMIENTO</text>
      ${bodySVG}
    `;
  }

  fkAnimationFrameId = requestAnimationFrame(updateAllSkeletonCanvases);
}

function startSkeletonAnimationLoop() {
  if (fkAnimationFrameId) {
    cancelAnimationFrame(fkAnimationFrameId);
  }
  fkAnimationFrameId = requestAnimationFrame(updateAllSkeletonCanvases);
}

function changeMonthOffset(delta) {
  if (monthOffset + delta > 0) return;
  monthOffset += delta;
  refreshProgressView();
}

function calculateStreaks() {
  const trainedSet = new Set(sessions.map(s => s.date));
  const frozenSet = new Set(frozenDates);
  const activeSet = new Set([...trainedSet, ...frozenSet]);

  if (activeSet.size === 0) {
    return { currentStreak: 0, bestStreak: 0, totalTrainedDays: trainedSet.size };
  }

  const sortedDays = Array.from(activeSet).map(isoToDayNumber).sort((a, b) => a - b);

  let bestStreak = 1;
  let runningStreak = 1;

  for (let i = 1; i < sortedDays.length; i++) {
    if (sortedDays[i] - sortedDays[i - 1] === 1) {
      runningStreak++;
      if (runningStreak > bestStreak) bestStreak = runningStreak;
    } else {
      runningStreak = 1;
    }
  }

  const todayDay = isoToDayNumber(getTodayISO());
  const lastDay = sortedDays[sortedDays.length - 1];

  let currentStreak = 0;
  if (todayDay - lastDay <= 1) {
    currentStreak = 1;
    for (let i = sortedDays.length - 1; i > 0; i--) {
      if (sortedDays[i] - sortedDays[i - 1] === 1) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  return { currentStreak, bestStreak, totalTrainedDays: trainedSet.size };
}

function buildMonthWeeks(year, monthIndex) {
  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const startWeekday = (firstDay.getDay() + 6) % 7;
  const frozenSet = new Set(frozenDates);

  const weeks = [];
  let currentWeek = new Array(7).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    const col = (startWeekday + d - 1) % 7;
    const iso = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const entry = sessions.find(s => s.date === iso) || null;
    const isProtected = !entry && frozenSet.has(iso);

    currentWeek[col] = {
      dayNum: d,
      iso,
      entry,
      trained: !!entry,
      protectedDay: isProtected
    };

    if (col === 6 || d === daysInMonth) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  }

  return weeks;
}

function refreshProgressView() {
  const todayISO = getTodayISO();
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const year = targetDate.getFullYear();
  const monthIndex = targetDate.getMonth();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const monthTitle = document.getElementById('month-selector-title');
  if (monthTitle) monthTitle.textContent = `${monthNames[monthIndex]} ${year}`;

  const nextBtn = document.getElementById('btn-next-month');
  if (nextBtn) nextBtn.disabled = monthOffset >= 0;

  const bestRounds = sessions.reduce((max, s) => Math.max(max, Number(s.rounds) || 0), 0);
  const { currentStreak } = calculateStreaks();

  const streakEl = document.getElementById('stat-current-streak');
  const bestEl = document.getElementById('stat-best-rounds');
  const coinsEl = document.getElementById('stat-coins');
  if (streakEl) streakEl.textContent = `${currentStreak} ${currentStreak === 1 ? 'día' : 'días'}`;
  if (bestEl) bestEl.textContent = bestRounds;
  if (coinsEl) coinsEl.textContent = coins;

  const rowsContainer = document.getElementById('monthly-calendar-rows');
  if (!rowsContainer) return;

  const weeks = buildMonthWeeks(year, monthIndex);
  let trainedDaysCount = 0;

  rowsContainer.innerHTML = weeks.map(week => {
    const segments = [];
    let segStart = null;
    for (let c = 0; c < 7; c++) {
      const cell = week[c];
      const activeInStreak = cell && (cell.trained || cell.protectedDay);
      if (cell && cell.trained) trainedDaysCount++;
      if (activeInStreak) {
        if (segStart === null) segStart = c;
      } else {
        if (segStart !== null) {
          segments.push({ start: segStart, end: c - 1 });
          segStart = null;
        }
      }
    }
    if (segStart !== null) segments.push({ start: segStart, end: 6 });

    const streakBarsHTML = segments.map(seg => {
      const leftPct = (seg.start / 7) * 100;
      const widthPct = ((seg.end - seg.start + 1) / 7) * 100;
      return `
        <div class="absolute top-0.5 bottom-0.5 bg-pureblack pointer-events-none"
             style="left: calc(${leftPct}% + 1px); width: calc(${widthPct}% - 2px);">
        </div>
      `;
    }).join('');

    const cellsHTML = week.map(cell => {
      if (!cell) return `<div class="h-10 sm:h-12"></div>`;
      const isToday = cell.iso === todayISO;
      const isFuture = cell.iso > todayISO;

      if (cell.trained) {
        return `
          <button type="button" onclick="openSessionModal('${cell.iso}')"
            class="relative z-10 h-10 sm:h-12 w-full px-0.5 flex flex-col items-center justify-center text-purewhite btn-press ${isToday ? 'ring-2 ring-pureblack ring-inset' : ''}">
            <span class="text-xs sm:text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
            <span class="text-[8px] sm:text-[9px] font-bold tabular-nums text-neutral-300 leading-none mt-1">${cell.entry.rounds}v</span>
          </button>
        `;
      }

      if (cell.protectedDay) {
        return `
          <button type="button" onclick="openSessionModal('${cell.iso}')"
            class="relative z-10 h-10 sm:h-12 w-full px-0.5 flex flex-col items-center justify-center text-purewhite btn-press">
            <span class="text-xs sm:text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
            <span class="text-[7px] sm:text-[8px] font-bold uppercase tracking-tighter text-neutral-300 leading-none mt-1">Prot</span>
          </button>
        `;
      }

      if (isFuture) {
        return `
          <div aria-disabled="true"
            class="relative z-10 h-10 sm:h-12 w-full px-0.5 flex items-center justify-center text-neutral-300 cursor-not-allowed select-none">
            <span class="text-xs sm:text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
          </div>
        `;
      }

      return `
        <button type="button" onclick="openSessionModal('${cell.iso}')"
          class="relative z-10 h-10 sm:h-12 w-full px-0.5 flex items-center justify-center btn-press ${isToday ? 'border-2 border-pureblack bg-purewhite text-pureblack font-bold' : 'text-neutral-700'}">
          <span class="text-xs sm:text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="relative grid grid-cols-7 items-center bg-neutral-50 border border-lightborder">
        ${streakBarsHTML}
        ${cellsHTML}
      </div>
    `;
  }).join('');

  const summaryEl = document.getElementById('month-summary-subtitle');
  if (summaryEl) {
    summaryEl.textContent = `${trainedDaysCount} ${trainedDaysCount === 1 ? 'día' : 'días'}`;
  }
}

// SOLO 2 ESTILOS: Estilo 1 (blanco) y Estilo 2 (negativo exacto del 1)
function getStreakPalette(styleIndex) {
  const hasPerkFrame = unlockedPerks.includes('frame');

  if (styleIndex === 1) {
    return {
      bg: '#000000',
      fg: '#FFFFFF',
      framed: true,
      doubleFrame: hasPerkFrame,
      fillCalendar: true
    };
  }

  return {
    bg: '#FFFFFF',
    fg: '#000000',
    framed: true,
    doubleFrame: hasPerkFrame,
    fillCalendar: false
  };
}

function drawCalendarWithStreakNumber(ctx, cx, cy, size, streakNumber, palette) {
  const x = cx - size / 2;
  const y = cy - size / 2;
  const headerH = size * 0.24;

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (palette.fillCalendar) {
    ctx.fillStyle = palette.fg;
    ctx.fillRect(x, y, size, size);
  } else {
    ctx.fillStyle = palette.bg;
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = palette.fg;
    ctx.lineWidth = 10;
    ctx.strokeRect(x, y, size, size);
  }

  const stripColor = palette.fillCalendar ? palette.bg : palette.fg;
  ctx.fillStyle = stripColor;
  ctx.fillRect(x, y, size, headerH);

  ctx.strokeStyle = palette.fg;
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(x + size * 0.27, y - 18);
  ctx.lineTo(x + size * 0.27, y + 6);
  ctx.moveTo(x + size * 0.73, y - 18);
  ctx.lineTo(x + size * 0.73, y + 6);
  ctx.stroke();

  const bodyTop = y + headerH;
  const bodyCenterY = bodyTop + (size - headerH) * 0.54;
  const digits = String(streakNumber);
  const numSize =
    digits.length >= 4 ? Math.round(size * 0.28) :
    digits.length === 3 ? Math.round(size * 0.34) :
    digits.length === 2 ? Math.round(size * 0.42) :
    Math.round(size * 0.48);

  ctx.fillStyle = palette.fillCalendar ? palette.bg : palette.fg;
  ctx.font = `bold ${numSize}px Arimo, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(digits, cx, bodyCenterY);

  ctx.restore();
}

function renderStreakCanvas(canvas, styleIndex = selectedStreakStyleIndex) {
  if (!canvas) return;
  const { currentStreak } = calculateStreaks();
  const todayISO = getTodayISO();
  const palette = getStreakPalette(styleIndex);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = palette.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (palette.framed) {
    ctx.strokeStyle = palette.fg;
    ctx.lineWidth = 8;
    ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72);
    if (palette.doubleFrame) {
      ctx.lineWidth = 4;
      ctx.strokeRect(52, 52, canvas.width - 104, canvas.height - 104);
    }
  }

  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = palette.fg;
  ctx.font = 'bold 34px Arimo, sans-serif';
  ctx.fillText('AMRAP', 84, 108);

  ctx.fillStyle = palette.fg;
  ctx.font = 'bold 24px Arimo, sans-serif';
  ctx.fillText('araujo-phi.github.io/AMRAP', 84, 146);

  const calSize = 300;
  const calCenterY = 480;
  drawCalendarWithStreakNumber(ctx, canvas.width / 2, calCenterY, calSize, currentStreak, palette);

  const streakPhrase = currentStreak === 1
    ? '1 dia de racha entrenando'
    : `${currentStreak} dias de racha entrenando`;

  ctx.fillStyle = palette.fg;
  ctx.font = 'bold 40px Arimo, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(streakPhrase, canvas.width / 2, calCenterY + calSize / 2 + 74);

  ctx.fillStyle = palette.fg;
  ctx.font = 'bold 26px Arimo, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(formatDisplayDate(todayISO), 84, canvas.height - 72);
}

function selectStreakStyle(styleIndex) {
  selectedStreakStyleIndex = styleIndex === 1 ? 1 : 0;
  document.querySelectorAll('.streak-style-btn').forEach(btn => {
    const active = Number(btn.dataset.style) === selectedStreakStyleIndex;
    btn.classList.toggle('bg-pureblack', active);
    btn.classList.toggle('text-purewhite', active);
    btn.classList.toggle('bg-purewhite', !active);
    btn.classList.toggle('text-pureblack', !active);
  });
  const previewCanvas = document.getElementById('streak-preview-canvas');
  renderStreakCanvas(previewCanvas, selectedStreakStyleIndex);
}

async function getStreakImageBlob() {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  renderStreakCanvas(canvas, selectedStreakStyleIndex);
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

async function downloadStreakPreviewImage() {
  const { currentStreak } = calculateStreaks();
  const todayISO = getTodayISO();
  const blob = await getStreakImageBlob();
  if (!blob) {
    showToast('Error al generar imagen');
    return;
  }

  const fileName = `racha-amrap-${currentStreak}d-e${selectedStreakStyleIndex + 1}-${todayISO}.png`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  showToast('Imagen descargada');
}

async function confirmShareStreakImage() {
  const { currentStreak } = calculateStreaks();
  const todayISO = getTodayISO();
  const blob = await getStreakImageBlob();
  if (!blob) {
    showToast('Error al generar imagen');
    return;
  }

  const fileName = `racha-amrap-${currentStreak}d-e${selectedStreakStyleIndex + 1}-${todayISO}.png`;
  const shareText = currentStreak === 1
    ? '1 dia de racha entrenando'
    : `${currentStreak} dias de racha entrenando`;

  let canShareFile = false;
  let file = null;

  try {
    if (typeof File === 'function') {
      file = new File([blob], fileName, { type: 'image/png' });
      if (navigator.share && typeof navigator.canShare === 'function') {
        canShareFile = navigator.canShare({ files: [file] });
      }
    }
  } catch (e) {
    canShareFile = false;
  }

  if (canShareFile && file) {
    try {
      await navigator.share({
        title: 'AMRAP',
        text: shareText,
        files: [file]
      });
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  await downloadStreakPreviewImage();
}

function shareStreakImage() {
  const modal = document.getElementById('share-streak-modal');
  if (!modal) {
    confirmShareStreakImage();
    return;
  }
  selectStreakStyle(selectedStreakStyleIndex);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeShareStreakModal() {
  const modal = document.getElementById('share-streak-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function openSessionModal(prefillDate) {
  const todayISO = getTodayISO();
  let targetDate = prefillDate || todayISO;

  if (targetDate > todayISO) {
    showToast('Día futuro');
    return;
  }

  const modal = document.getElementById('session-modal');
  const dateInput = document.getElementById('modal-date');
  const roundsInput = document.getElementById('modal-rounds');
  const effortInput = document.getElementById('modal-effort');
  const notesInput = document.getElementById('modal-notes');
  const deleteWrap = document.getElementById('modal-delete-wrapper');
  const deleteBtn = document.getElementById('modal-delete-btn');
  const titleEl = document.getElementById('session-modal-title');
  if (!modal || !dateInput || !roundsInput) return;

  const existing = sessions.find(s => s.date === targetDate);

  dateInput.max = todayISO;
  dateInput.value = targetDate;

  if (existing) {
    if (titleEl) titleEl.textContent = formatDisplayDate(targetDate);
    roundsInput.value = existing.rounds;
    if (effortInput) effortInput.value = existing.effort || 'Normal';
    if (notesInput) notesInput.value = existing.notes || '';
    if (deleteWrap) deleteWrap.classList.remove('hidden');
    if (deleteBtn) {
      deleteBtn.onclick = () => {
        closeSessionModal();
        confirmDeleteSession(targetDate);
      };
    }
  } else {
    if (titleEl) titleEl.textContent = formatDisplayDate(targetDate);
    roundsInput.value = currentRounds > 0 ? currentRounds : 1;
    if (effortInput) effortInput.value = 'Normal';
    if (notesInput) notesInput.value = '';
    if (deleteWrap) deleteWrap.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSessionModal() {
  const modal = document.getElementById('session-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function adjustModalRounds(delta) {
  const input = document.getElementById('modal-rounds');
  if (!input) return;
  input.value = Math.max(0, (parseInt(input.value, 10) || 0) + delta);
}

function handleManualSessionSubmit(e) {
  e.preventDefault();
  const todayISO = getTodayISO();
  const previousBestRounds = sessions.reduce((max, s) => Math.max(max, Number(s.rounds) || 0), 0);
  const dateEl = document.getElementById('modal-date');
  const roundsEl = document.getElementById('modal-rounds');
  const effortEl = document.getElementById('modal-effort');
  const notesEl = document.getElementById('modal-notes');
  if (!dateEl || !roundsEl) return;

  const date = dateEl.value;
  const rounds = Math.max(0, parseInt(roundsEl.value, 10) || 0);
  const effort = effortEl ? effortEl.value : 'Normal';
  const notes = notesEl ? notesEl.value.trim() : '';

  if (!date || date > todayISO) return;

  const idx = sessions.findIndex(s => s.date === date);
  const record = { date, rounds, effort, notes };

  if (idx >= 0) sessions[idx] = record;
  else sessions.push(record);

  const rewardMsg = applySessionRewards(date, rounds, previousBestRounds);
  saveSessions();
  closeSessionModal();
  refreshProgressView();
  refreshShopView();
  showToast(`Guardado${rewardMsg}`);
}

function confirmDeleteSession(date) {
  openConfirmModal(
    'Borrar día',
    `¿Borrar ${formatDisplayDate(date)}?`,
    () => {
      sessions = sessions.filter(s => s.date !== date);
      saveSessions();
      refreshProgressView();
      refreshShopView();
      showToast('Borrado');
    }
  );
}

function exportProgressJSON() {
  const backupData = {
    sessions,
    coins,
    streakFreezes,
    frozenDates,
    rewardedDates,
    claimedChallengeDates,
    unlockedPerks
  };
  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `progreso-amrap-${getTodayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('JSON exportado');
}

function importProgressJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        sessions = imported.filter(item => item && typeof item.date === 'string').map(normalizeSessionItem);
      } else if (imported && typeof imported === 'object' && Array.isArray(imported.sessions)) {
        sessions = imported.sessions.filter(item => item && typeof item.date === 'string').map(normalizeSessionItem);
        const baseCoins = Number(imported.coins) || 0;
        const legacyDaily = Number(imported.dailyCoins) || 0;
        const legacyEpic = Number(imported.epicCoins) || 0;
        coins = Math.max(0, baseCoins > 0 ? baseCoins : (legacyDaily + legacyEpic));

        streakFreezes = Math.max(0, Math.min(MAX_FREEZES, Number(imported.streakFreezes) || 0));
        frozenDates = Array.isArray(imported.frozenDates)
          ? Array.from(new Set(imported.frozenDates.filter(d => typeof d === 'string')))
          : [];
        rewardedDates = Array.isArray(imported.rewardedDates)
          ? Array.from(new Set(imported.rewardedDates.filter(d => typeof d === 'string')))
          : [];
        claimedChallengeDates = Array.isArray(imported.claimedChallengeDates)
          ? Array.from(new Set(imported.claimedChallengeDates.filter(d => typeof d === 'string')))
          : [];
        const perksSource = Array.isArray(imported.unlockedPerks)
          ? imported.unlockedPerks
          : (Array.isArray(imported.unlockedEpicPerks) ? imported.unlockedEpicPerks : []);
        unlockedPerks = Array.from(new Set(perksSource.filter(p => typeof p === 'string')));
      } else {
        throw new Error('Inválido');
      }
      applyAutomaticStreakFreezes();
      saveSessions();
      refreshProgressView();
      refreshShopView();
      showToast('JSON importado');
    } catch (err) {
      showToast('JSON inválido');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

let toastTimeout = null;
function showToast(msg) {
  const banner = document.getElementById('toast-banner');
  const msgEl = document.getElementById('toast-message');
  if (!banner || !msgEl) return;
  msgEl.textContent = msg;
  banner.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(hideToast, 2800);
}

function hideToast() {
  const banner = document.getElementById('toast-banner');
  if (banner) banner.classList.add('hidden');
}

function openConfirmModal(title, text, onConfirm) {
  const modal = document.getElementById('confirm-modal');
  const titleEl = document.getElementById('confirm-title');
  const textEl = document.getElementById('confirm-text');
  const acceptBtn = document.getElementById('confirm-accept-btn');
  if (!modal || !acceptBtn) return;

  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;

  const newBtn = acceptBtn.cloneNode(true);
  acceptBtn.parentNode.replaceChild(newBtn, acceptBtn);

  newBtn.addEventListener('click', () => {
    closeConfirmModal();
    onConfirm();
  });

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
