// =========================================================================
// DATOS DE LOS 6 EJERCICIOS (SISTEMA DE ESQUELETO ARTICULADO DE 11 PARTES)
// =========================================================================
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
    animFooter: 'Izquierda: Paso 1 (lado delantero) • Derecha: Paso 2 (lado trasero)',
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

// =========================================================================
// ESTADO GLOBAL Y STORAGE
// =========================================================================
const STORAGE_KEY = 'amrap_13yo_mobile_v2';
const TOTAL_SECONDS = 20 * 60; // 20:00
const COINS_PER_SESSION = 10;
const FREEZE_COST = 30;
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
let selectedExerciseFilter = 'all';
let monthOffset = 0; // 0 = mes actual, -1 = mes anterior, etc.
let wakeLockSentinel = null;

// Estructura de sesión: { date: 'YYYY-MM-DD', rounds: number, effort: string, notes: string }
let sessions = [];
let coins = 0;
let streakFreezes = 0;
let frozenDates = [];
let rewardedDates = [];

// =========================================================================
// INICIALIZACIÓN
// =========================================================================
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

  // Re-adquirir Wake Lock si el usuario vuelve a la pestaña mientras el reloj corre
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
        coins = 0;
        streakFreezes = 0;
        frozenDates = [];
        rewardedDates = [];
      } else if (parsed && typeof parsed === 'object') {
        sessions = Array.isArray(parsed.sessions)
          ? parsed.sessions.filter(i => i && typeof i.date === 'string').map(normalizeSessionItem)
          : [];
        coins = Math.max(0, Number(parsed.coins) || 0);
        streakFreezes = Math.max(0, Math.min(MAX_FREEZES, Number(parsed.streakFreezes) || 0));
        frozenDates = Array.isArray(parsed.frozenDates)
          ? Array.from(new Set(parsed.frozenDates.filter(d => typeof d === 'string')))
          : [];
        rewardedDates = Array.isArray(parsed.rewardedDates)
          ? Array.from(new Set(parsed.rewardedDates.filter(d => typeof d === 'string')))
          : [];
      }
    }
  } catch (e) {
    sessions = [];
    coins = 0;
    streakFreezes = 0;
    frozenDates = [];
    rewardedDates = [];
  }
}

function saveSessions() {
  try {
    const payload = {
      sessions,
      coins,
      streakFreezes,
      frozenDates,
      rewardedDates
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    showToast('No se pudo guardar en este navegador.');
  }
}

function applyAutomaticStreakFreezes() {
  if (!sessions.length || streakFreezes <= 0) return;

  const trainedDays = new Set(sessions.map(s => s.date));
  const frozenSet = new Set(frozenDates);
  const sortedTrained = Array.from(trainedDays).sort();
  let consumedCount = 0;

  // Huecos exactos de 1 día entre entrenamientos
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

  // Si ayer quedó sin entrenar y la última sesión fue anteayer
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
    showToast(
      consumedCount === 1
        ? 'Protector usado: salvaste 1 día de racha'
        : `Protectores usados: salvaste ${consumedCount} días`
    );
  }
}

function buyStreakFreeze() {
  if (streakFreezes >= MAX_FREEZES) {
    showToast(`Ya tenés el máximo (${MAX_FREEZES}/${MAX_FREEZES})`);
    return;
  }
  if (coins < FREEZE_COST) {
    showToast(`Te faltan ${FREEZE_COST - coins} monedas`);
    return;
  }

  coins -= FREEZE_COST;
  streakFreezes = Math.min(MAX_FREEZES, streakFreezes + 1);
  saveSessions();
  refreshProgressView();
  showToast(`Protector comprado (${streakFreezes}/${MAX_FREEZES})`);
}

// =========================================================================
// NAVEGACIÓN INFERIOR FIJA
// =========================================================================
function switchView(viewName) {
  const views = ['timer', 'exercises', 'progress'];
  views.forEach(v => {
    const section = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`nav-${v}`);
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
  if (viewName === 'progress') {
    refreshProgressView();
  }
}

// =========================================================================
// SCREEN WAKE LOCK API (MANTENER PANTALLA ACTIVA)
// =========================================================================
async function toggleWakeLock() {
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
    } catch (e) {}
    wakeLockSentinel = null;
    updateWakeLockButton(false);
    showToast('Modo pantalla activa desactivado');
  } else {
    await requestWakeLock(false);
  }
}

async function requestWakeLock(silent) {
  if (!('wakeLock' in navigator)) {
    if (!silent) {
      showToast('Tu navegador no soporta bloqueo automático de pantalla.');
    }
    return;
  }
  try {
    wakeLockSentinel = await navigator.wakeLock.request('screen');
    updateWakeLockButton(true);
    if (!silent) {
      showToast('Pantalla activa: no se apagará mientras entrenas');
    }
    wakeLockSentinel.addEventListener('release', () => {
      updateWakeLockButton(false);
    });
  } catch (err) {
    wakeLockSentinel = null;
    updateWakeLockButton(false);
    if (!silent) {
      showToast('No se pudo activar pantalla fija en este momento.');
    }
  }
}

function updateWakeLockButton(active) {
  const btn = document.getElementById('btn-wakelock');
  const label = document.getElementById('wakelock-label');
  btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  if (active) {
    btn.classList.remove('bg-purewhite', 'text-pureblack');
    btn.classList.add('bg-pureblack', 'text-purewhite');
    label.textContent = 'Pantalla Activa: On';
  } else {
    btn.classList.remove('bg-pureblack', 'text-purewhite');
    btn.classList.add('bg-purewhite', 'text-pureblack');
    label.textContent = 'Pantalla Activa: Off';
  }
}

// =========================================================================
// CRONÓMETRO AMRAP 20 MINUTOS + SONIDO SUAVE WEB AUDIO + VIBRACIÓN
// =========================================================================
function playSoftFinishAlert() {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate([250, 120, 250, 120, 400]);
    } catch (e) {}
  }

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const freqs = [440, 554.37, 659.25];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.25);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.25);
      gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + i * 0.25 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.25 + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.25);
      osc.stop(ctx.currentTime + i * 0.25 + 0.56);
    });
  } catch (e) {}
}

function updateTimerUI() {
  const mins = Math.floor(timerSecondsLeft / 60);
  const secs = timerSecondsLeft % 60;
  document.getElementById('timer-display').textContent =
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const pct = Math.max(0, Math.min(100, (timerSecondsLeft / TOTAL_SECONDS) * 100));
  document.getElementById('timer-progress-bar').style.width = `${pct}%`;

  const badge = document.getElementById('timer-20m-badge');
  if (badge) {
    if (completed20MinToday) {
      badge.textContent = '20 min: Listo';
      badge.classList.remove('bg-purewhite', 'text-pureblack');
      badge.classList.add('bg-pureblack', 'text-purewhite');
    } else {
      badge.textContent = '20 min: Pendiente';
      badge.classList.remove('bg-pureblack', 'text-purewhite');
      badge.classList.add('bg-purewhite', 'text-pureblack');
    }
  }

  const toggleBtn = document.getElementById('btn-toggle-timer');
  const toggleText = document.getElementById('toggle-timer-text');
  const toggleIcon = document.getElementById('toggle-timer-icon');

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

function toggleTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (isTimerRunning) return;
  if (timerSecondsLeft <= 0) {
    timerSecondsLeft = TOTAL_SECONDS;
  }
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
      document.getElementById('timer-subtext').textContent = '¡20 minutos cumplidos! Guarda tu sesión abajo.';
      playSoftFinishAlert();
      showToast('¡20 minutos completados! Guarda tu sesión hoy.');
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
    showToast('El reloj ya está en 20:00');
    return;
  }

  const resetBtn = document.getElementById('btn-reset-timer');
  const resetText = document.getElementById('reset-timer-text');

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
    resetBtn.classList.remove('bg-pureblack', 'text-purewhite');
    resetBtn.classList.add('bg-purewhite', 'text-pureblack');
    resetText.textContent = 'Reiniciar';

    pauseTimer();
    timerSecondsLeft = TOTAL_SECONDS;
    document.getElementById('timer-subtext').textContent = 'Técnica limpia antes que velocidad';
    updateTimerUI();
    showToast('Reloj reiniciado a 20:00');
  }
}

// =========================================================================
// CONTADOR DE VUELTAS Y CHECKLIST DE ESTACIONES
// =========================================================================
function changeRounds(delta) {
  currentRounds = Math.max(0, currentRounds + delta);
  updateRoundsUI();
  if (delta > 0) {
    if ('vibrate' in navigator) {
      try { navigator.vibrate(45); } catch (e) {}
    }
    resetChecklist();
    showToast(`Vuelta ${currentRounds} sumada`);
  }
}

function updateRoundsUI() {
  document.getElementById('rounds-display').textContent = currentRounds;
  const doneCount = EXERCISES.filter(ex => checklistState[ex.id]).length;
  const hint = document.getElementById('round-status-hint');
  hint.textContent = `${doneCount}/6 est.`;
}

function renderQuickChecklist() {
  const container = document.getElementById('quick-circuit-list');
  const allDone = EXERCISES.every(ex => checklistState[ex.id]);

  const addRoundBtn = document.getElementById('btn-add-round');
  if (allDone) {
    addRoundBtn.classList.add('ring-4', 'ring-black/25');
  } else {
    addRoundBtn.classList.remove('ring-4', 'ring-black/25');
  }

  container.innerHTML = EXERCISES.map(ex => {
    const checked = !!checklistState[ex.id];
    return `
      <button type="button" onclick="toggleChecklistItem('${ex.id}')" class="w-full min-h-[60px] text-left border-2 border-pureblack px-3.5 py-2.5 flex items-center justify-between gap-3 btn-press ${checked ? 'bg-pureblack text-purewhite' : 'bg-purewhite text-pureblack'}">
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
    showToast('¡6 ejercicios listos! Toca "1 Vuelta Completa"');
  }
}

function resetChecklist() {
  checklistState = {};
  renderQuickChecklist();
}

function selectEffort(effort) {
  selectedEffort = effort;
  document.querySelectorAll('.effort-btn').forEach(btn => {
    if (btn.dataset.effort === effort) {
      btn.classList.remove('bg-purewhite', 'text-pureblack');
      btn.classList.add('bg-pureblack', 'text-purewhite');
    } else {
      btn.classList.remove('bg-pureblack', 'text-purewhite');
      btn.classList.add('bg-purewhite', 'text-pureblack');
    }
  });
}

function tryAwardTodayCoins(dateISO, rounds) {
  const todayISO = getTodayISO();
  if (dateISO !== todayISO) return '';
  if (!completed20MinToday || rounds <= 0) return '';
  if (rewardedDates.includes(todayISO)) return '';

  coins += COINS_PER_SESSION;
  rewardedDates.push(todayISO);
  return ` (+${COINS_PER_SESSION} monedas)`;
}

function saveTodaySession() {
  const today = getTodayISO();
  const idx = sessions.findIndex(s => s.date === today);
  const record = {
    date: today,
    rounds: currentRounds,
    effort: selectedEffort,
    notes: idx >= 0 ? sessions[idx].notes : 'Circuito 20 min'
  };

  const applySave = () => {
    if (idx >= 0) {
      sessions[idx] = record;
    } else {
      sessions.push(record);
    }
    const earnedMsg = tryAwardTodayCoins(today, currentRounds);
    saveSessions();
    refreshProgressView();

    if (currentRounds > 0 && !completed20MinToday && !rewardedDates.includes(today)) {
      showToast(`Guardado: ${currentRounds} vueltas (Completa los 20 min para monedas)`);
    } else {
      showToast(`Guardado: ${currentRounds} vueltas (${selectedEffort})${earnedMsg}`);
    }
  };

  if (idx >= 0) {
    openConfirmModal(
      'Actualizar Registro de Hoy',
      `Hoy (${formatDisplayDate(today)}) ya tienes ${sessions[idx].rounds} vueltas guardadas. ¿Quieres actualizarlo a ${currentRounds} vueltas (${selectedEffort})?`,
      applySave
    );
  } else {
    applySave();
  }
}

// =========================================================================
// VISTA 2: GUÍA VISUAL DE EJERCICIOS CON ACORDEÓN COLAPSABLE
// =========================================================================
function renderExerciseTabs() {
  const container = document.getElementById('exercise-filter-tabs');
  const items = [
    { id: 'all', label: 'Todos' },
    ...EXERCISES.map(ex => ({ id: ex.id, label: ex.number }))
  ];

  container.innerHTML = items.map(item => {
    const active = selectedExerciseFilter === item.id;
    return `
      <button onclick="filterExercises('${item.id}')" class="min-h-[44px] px-2 text-xs font-bold uppercase border-2 border-pureblack btn-press ${active ? 'bg-pureblack text-purewhite' : 'bg-purewhite text-pureblack'}">
        ${item.label}
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
  const filtered = selectedExerciseFilter === 'all'
    ? EXERCISES
    : EXERCISES.filter(ex => ex.id === selectedExerciseFilter);

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
        <svg id="skel-svg-${ex.id}" viewBox="0 0 340 185" class="w-full h-auto bg-purewhite block" role="img" aria-label="Guía visual de ${ex.name}"></svg>
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
            <span>Ver error común y adaptación</span>
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="p-3.5 border-t border-pureblack bg-purewhite space-y-2.5 text-sm leading-relaxed">
            <p><strong class="uppercase text-xs">Error común:</strong> ${ex.avoid}</p>
            <p><strong class="uppercase text-xs">Adaptación:</strong> ${ex.modification}</p>
          </div>
        </details>
      </div>
    </article>
  `).join('');

  drawStaticExerciseSVGs();
}

// =========================================================================
// MOTOR DE CINEMÁTICA DIRECTA (FORWARD KINEMATICS) - 11 PARTES ARTICULADAS
// =========================================================================
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

  fkAnimationFrameId = requestAnimationFrame(updateAllSkeletonCanvases);
}

function startSkeletonAnimationLoop() {
  if (fkAnimationFrameId) {
    cancelAnimationFrame(fkAnimationFrameId);
  }
  fkAnimationFrameId = requestAnimationFrame(updateAllSkeletonCanvases);
}

// =========================================================================
// VISTA 3: PROGRESO MENSUAL, TIENDA Y COMPARTIR IMAGEN DE RACHA
// =========================================================================
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

  document.getElementById('month-selector-title').textContent = `${monthNames[monthIndex]} ${year}`;

  const nextBtn = document.getElementById('btn-next-month');
  nextBtn.disabled = monthOffset >= 0;

  const bestRounds = sessions.reduce((max, s) => Math.max(max, Number(s.rounds) || 0), 0);
  const { currentStreak } = calculateStreaks();

  document.getElementById('stat-current-streak').textContent =
    `${currentStreak} ${currentStreak === 1 ? 'día' : 'días'}`;
  document.getElementById('stat-best-rounds').textContent = bestRounds;

  const coinsEl = document.getElementById('stat-coins');
  const freezesEl = document.getElementById('stat-freezes');
  if (coinsEl) coinsEl.textContent = coins;
  if (freezesEl) freezesEl.textContent = streakFreezes;

  const buyBtn = document.getElementById('btn-buy-freeze');
  const buyLabel = document.getElementById('buy-freeze-label');
  if (buyBtn && buyLabel) {
    if (streakFreezes >= MAX_FREEZES) {
      buyBtn.disabled = true;
      buyLabel.textContent = `Máximo Alcanzado (${MAX_FREEZES}/${MAX_FREEZES})`;
    } else if (coins < FREEZE_COST) {
      buyBtn.disabled = true;
      buyLabel.textContent = `Protector (${FREEZE_COST} Monedas · Faltan ${FREEZE_COST - coins})`;
    } else {
      buyBtn.disabled = false;
      buyLabel.textContent = `Comprar Protector (${FREEZE_COST} Monedas)`;
    }
  }

  const weeks = buildMonthWeeks(year, monthIndex);
  let trainedDaysCount = 0;

  const rowsContainer = document.getElementById('monthly-calendar-rows');
  rowsContainer.innerHTML = weeks.map(week => {
    const segments = [];
    let segStart = null;
    for (let c = 0; c < 7; c++) {
      const cell = week[c];
      const activeInStreak = cell && (cell.trained || cell.protectedDay);
      if (cell && cell.trained) {
        trainedDaysCount++;
      }
      if (activeInStreak) {
        if (segStart === null) segStart = c;
      } else {
        if (segStart !== null) {
          segments.push({ start: segStart, end: c - 1 });
          segStart = null;
        }
      }
    }
    if (segStart !== null) {
      segments.push({ start: segStart, end: 6 });
    }

    const streakBarsHTML = segments.map(seg => {
      const leftPct = (seg.start / 7) * 100;
      const widthPct = ((seg.end - seg.start + 1) / 7) * 100;
      return `
        <div class="absolute top-1 bottom-1 bg-pureblack pointer-events-none"
             style="left: calc(${leftPct}% + 2px); width: calc(${widthPct}% - 4px);">
        </div>
      `;
    }).join('');

    const cellsHTML = week.map(cell => {
      if (!cell) {
        return `<div class="h-11 sm:h-12"></div>`;
      }

      const isToday = cell.iso === todayISO;
      const isFuture = cell.iso > todayISO;

      if (cell.trained) {
        return `
          <button type="button" onclick="openSessionModal('${cell.iso}')"
            title="${formatDisplayDate(cell.iso)}: ${cell.entry.rounds} vueltas"
            class="relative z-10 h-11 sm:h-12 w-full flex flex-col items-center justify-center text-purewhite btn-press ${isToday ? 'ring-2 ring-pureblack ring-offset-1' : ''}">
            <span class="text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
            <span class="text-[9px] font-bold tabular-nums text-neutral-300 mt-0.5">${cell.entry.rounds}v</span>
          </button>
        `;
      }

      if (cell.protectedDay) {
        return `
          <button type="button" onclick="openSessionModal('${cell.iso}')"
            title="${formatDisplayDate(cell.iso)}: Protegido"
            class="relative z-10 h-11 sm:h-12 w-full flex flex-col items-center justify-center text-purewhite btn-press">
            <span class="text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
            <span class="text-[8px] font-bold uppercase tracking-tighter text-neutral-300 mt-0.5">Prot.</span>
          </button>
        `;
      }

      if (isFuture) {
        return `
          <div aria-disabled="true"
            title="${formatDisplayDate(cell.iso)}: Día futuro"
            class="relative z-10 h-11 sm:h-12 w-full flex items-center justify-center text-neutral-300 cursor-not-allowed select-none">
            <span class="text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
          </div>
        `;
      }

      return `
        <button type="button" onclick="openSessionModal('${cell.iso}')"
          title="${formatDisplayDate(cell.iso)}: Sin registro"
          class="relative z-10 h-11 sm:h-12 w-full flex items-center justify-center btn-press ${isToday ? 'border-2 border-pureblack bg-purewhite text-pureblack font-bold' : 'text-neutral-600 hover:border hover:border-pureblack'}">
          <span class="text-sm font-bold tabular-nums leading-none">${cell.dayNum}</span>
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

  document.getElementById('month-summary-subtitle').textContent =
    `${trainedDaysCount} ${trainedDaysCount === 1 ? 'día entrenado' : 'días entrenados'}`;
}

function getStreakMilestone(streakDays) {
  if (streakDays >= 365) {
    return {
      tier: 'year_365',
      badge: '1 AÑO+ · CAMPEÓN ANUAL',
      phrase: 'UN AÑO ENTERO SIN SOLTAR EL RITMO',
      expression: 'legend',
      pose: 'year_one_master',
      numberScale: 1.14,
      doubleFrame: true,
      rays: true,
      crown: true
    };
  }
  if (streakDays >= 270) {
    return {
      tier: 'months_270',
      badge: '9 MESES · TRAMO FINAL AL AÑO',
      phrase: 'NUEVE MESES DE DISCIPLINA SOSTENIDA',
      expression: 'legend',
      pose: 'nine_months_titan',
      numberScale: 1.12,
      doubleFrame: true,
      rays: true,
      crown: false
    };
  }
  if (streakDays >= 180) {
    return {
      tier: 'months_180',
      badge: '6 MESES · MEDIO AÑO DE PODER',
      phrase: 'MEDIO AÑO CONSTRUYENDO FUERZA REAL',
      expression: 'legend',
      pose: 'half_year_power',
      numberScale: 1.1,
      doubleFrame: true,
      rays: true,
      crown: false
    };
  }
  if (streakDays >= 90) {
    return {
      tier: 'legend_90',
      badge: '3 MESES+ · LEYENDA',
      phrase: 'TRES MESES DE CONSTANCIA IMPARABLE',
      expression: 'legend',
      pose: 'legend_victory',
      numberScale: 1.08,
      doubleFrame: true,
      rays: true,
      crown: false
    };
  }
  if (streakDays >= 30) {
    return {
      tier: 'month_30',
      badge: '1 MES · CONSTANCIA TOTAL',
      phrase: 'UN MES ENTERO CUMPLIENDO EL CIRCUITO',
      expression: 'hyped',
      pose: 'trophy',
      numberScale: 1.04,
      doubleFrame: true,
      rays: false,
      crown: false
    };
  }
  if (streakDays >= 21) {
    return {
      tier: 'habit_21',
      badge: '21 DÍAS · HÁBITO ACTIVO',
      phrase: 'TRES SEMANAS CONSTRUYENDO EL HÁBITO',
      expression: 'focused',
      pose: 'ready_stance',
      numberScale: 1.0,
      doubleFrame: false,
      rays: false,
      crown: false
    };
  }
  if (streakDays >= 7) {
    return {
      tier: 'week_7',
      badge: '7 DÍAS · SEMANA COMPLETA',
      phrase: 'SIETE DÍAS DÁNDOLE SIN AFLOJAR',
      expression: 'hyped',
      pose: 'arms_up',
      numberScale: 1.0,
      doubleFrame: false,
      rays: false,
      crown: false
    };
  }
  if (streakDays >= 3) {
    return {
      tier: 'starter_3',
      badge: '3 DÍAS · EN MARCHA',
      phrase: 'PRIMEROS TRES DÍAS DE RITMO FIRME',
      expression: 'focused',
      pose: 'flex_power',
      numberScale: 0.98,
      doubleFrame: false,
      rays: false,
      crown: false
    };
  }
  if (streakDays >= 1) {
    return {
      tier: 'day_1',
      badge: 'DÍA 1+ · ARRANQUE',
      phrase: 'TÉCNICA LIMPIA ANTES QUE VELOCIDAD',
      expression: 'calm',
      pose: 'standing',
      numberScale: 0.95,
      doubleFrame: false,
      rays: false,
      crown: false
    };
  }
  return {
    tier: 'zero',
    badge: 'RACHA EN 0 · HOY SE ARRANCA',
    phrase: 'TÉCNICA LIMPIA ANTES QUE VELOCIDAD',
    expression: 'thinking',
    pose: 'thinking',
    numberScale: 0.92,
    doubleFrame: false,
    rays: false,
    crown: false
  };
}

function drawStickmanMilestone(ctx, cx, bottomY, milestone) {
  ctx.save();
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#000000';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const drawSeg = (x1, y1, x2, y2, w = 8) => {
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  drawSeg(cx - 92, bottomY, cx + 92, bottomY, 6);

  if (milestone.rays) {
    ctx.lineWidth = 4;
    const rayAngles = [-155, -132, -110, -90, -70, -48, -25];
    rayAngles.forEach(deg => {
      const rad = (deg * Math.PI) / 180;
      const r1 = 132;
      const r2 = milestone.crown ? 168 : 158;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * r1, bottomY - 120 + Math.sin(rad) * r1);
      ctx.lineTo(cx + Math.cos(rad) * r2, bottomY - 120 + Math.sin(rad) * r2);
      ctx.stroke();
    });
  }

  let hip = { x: cx, y: bottomY - 76 };
  let shoulder = { x: cx, y: bottomY - 134 };
  let head = { x: cx, y: bottomY - 166 };
  let footL = { x: cx - 34, y: bottomY };
  let footR = { x: cx + 34, y: bottomY };
  let kneeL = { x: cx - 26, y: bottomY - 38 };
  let kneeR = { x: cx + 26, y: bottomY - 38 };
  let handL = { x: cx - 55, y: bottomY - 105 };
  let handR = { x: cx + 55, y: bottomY - 105 };
  let elbowL = { x: cx - 36, y: bottomY - 118 };
  let elbowR = { x: cx + 36, y: bottomY - 118 };

  if (milestone.pose === 'thinking') {
    hip = { x: cx - 6, y: bottomY - 74 };
    shoulder = { x: cx + 2, y: bottomY - 130 };
    head = { x: cx + 8, y: bottomY - 161 };
    footL = { x: cx - 22, y: bottomY };
    footR = { x: cx + 24, y: bottomY };
    kneeL = { x: cx - 18, y: bottomY - 37 };
    kneeR = { x: cx + 20, y: bottomY - 37 };
    elbowR = { x: cx + 34, y: bottomY - 112 };
    handR = { x: cx + 16, y: bottomY - 152 };
    elbowL = { x: cx - 32, y: bottomY - 106 };
    handL = { x: cx - 26, y: bottomY - 78 };
  } else if (milestone.pose === 'flex_power') {
    footL = { x: cx - 44, y: bottomY };
    footR = { x: cx + 44, y: bottomY };
    kneeL = { x: cx - 38, y: bottomY - 38 };
    kneeR = { x: cx + 38, y: bottomY - 38 };
    elbowL = { x: cx - 56, y: bottomY - 136 };
    handL = { x: cx - 36, y: bottomY - 164 };
    elbowR = { x: cx + 56, y: bottomY - 136 };
    handR = { x: cx + 36, y: bottomY - 164 };
  } else if (milestone.pose === 'arms_up') {
    footL = { x: cx - 38, y: bottomY };
    footR = { x: cx + 38, y: bottomY };
    kneeL = { x: cx - 32, y: bottomY - 38 };
    kneeR = { x: cx + 32, y: bottomY - 38 };
    elbowL = { x: cx - 42, y: bottomY - 166 };
    handL = { x: cx - 56, y: bottomY - 196 };
    elbowR = { x: cx + 42, y: bottomY - 166 };
    handR = { x: cx + 56, y: bottomY - 196 };
  } else if (milestone.pose === 'ready_stance') {
    hip = { x: cx, y: bottomY - 68 };
    shoulder = { x: cx + 6, y: bottomY - 122 };
    head = { x: cx + 12, y: bottomY - 154 };
    footL = { x: cx - 54, y: bottomY };
    footR = { x: cx + 52, y: bottomY };
    kneeL = { x: cx - 46, y: bottomY - 34 };
    kneeR = { x: cx + 36, y: bottomY - 34 };
    elbowL = { x: cx - 28, y: bottomY - 114 };
    handL = { x: cx + 14, y: bottomY - 128 };
    elbowR = { x: cx + 38, y: bottomY - 108 };
    handR = { x: cx + 32, y: bottomY - 136 };
  } else if (milestone.pose === 'trophy') {
    footL = { x: cx - 48, y: bottomY };
    footR = { x: cx + 48, y: bottomY };
    kneeL = { x: cx - 40, y: bottomY - 38 };
    kneeR = { x: cx + 40, y: bottomY - 38 };
    elbowL = { x: cx - 54, y: bottomY - 158 };
    handL = { x: cx - 30, y: bottomY - 194 };
    elbowR = { x: cx + 54, y: bottomY - 158 };
    handR = { x: cx + 30, y: bottomY - 194 };
  } else if (milestone.pose === 'legend_victory') {
    hip = { x: cx, y: bottomY - 72 };
    shoulder = { x: cx, y: bottomY - 130 };
    head = { x: cx, y: bottomY - 162 };
    footL = { x: cx - 58, y: bottomY };
    footR = { x: cx + 58, y: bottomY };
    kneeL = { x: cx - 48, y: bottomY - 36 };
    kneeR = { x: cx + 48, y: bottomY - 36 };
    elbowL = { x: cx - 64, y: bottomY - 168 };
    handL = { x: cx - 44, y: bottomY - 204 };
    elbowR = { x: cx + 64, y: bottomY - 168 };
    handR = { x: cx + 44, y: bottomY - 204 };
  } else if (milestone.pose === 'half_year_power') {
    hip = { x: cx, y: bottomY - 70 };
    shoulder = { x: cx, y: bottomY - 128 };
    head = { x: cx, y: bottomY - 160 };
    footL = { x: cx - 64, y: bottomY };
    footR = { x: cx + 64, y: bottomY };
    kneeL = { x: cx - 52, y: bottomY - 35 };
    kneeR = { x: cx + 52, y: bottomY - 35 };
    elbowL = { x: cx - 72, y: bottomY - 154 };
    handL = { x: cx - 62, y: bottomY - 198 };
    elbowR = { x: cx + 72, y: bottomY - 154 };
    handR = { x: cx + 62, y: bottomY - 198 };
  } else if (milestone.pose === 'nine_months_titan') {
    hip = { x: cx, y: bottomY - 72 };
    shoulder = { x: cx, y: bottomY - 130 };
    head = { x: cx, y: bottomY - 162 };
    footL = { x: cx - 68, y: bottomY };
    footR = { x: cx + 68, y: bottomY };
    kneeL = { x: cx - 54, y: bottomY - 36 };
    kneeR = { x: cx + 54, y: bottomY - 36 };
    elbowL = { x: cx - 62, y: bottomY - 172 };
    handL = { x: cx - 38, y: bottomY - 210 };
    elbowR = { x: cx + 62, y: bottomY - 172 };
    handR = { x: cx + 38, y: bottomY - 210 };
  } else if (milestone.pose === 'year_one_master') {
    hip = { x: cx, y: bottomY - 72 };
    shoulder = { x: cx, y: bottomY - 130 };
    head = { x: cx, y: bottomY - 162 };
    footL = { x: cx - 74, y: bottomY };
    footR = { x: cx + 74, y: bottomY };
    kneeL = { x: cx - 58, y: bottomY - 36 };
    kneeR = { x: cx + 58, y: bottomY - 36 };
    elbowL = { x: cx - 70, y: bottomY - 178 };
    handL = { x: cx - 48, y: bottomY - 216 };
    elbowR = { x: cx + 70, y: bottomY - 178 };
    handR = { x: cx + 48, y: bottomY - 216 };
  }

  drawSeg(hip.x, hip.y, kneeL.x, kneeL.y, 8.5);
  drawSeg(kneeL.x, kneeL.y, footL.x, footL.y, 8.5);
  drawSeg(hip.x, hip.y, kneeR.x, kneeR.y, 8.5);
  drawSeg(kneeR.x, kneeR.y, footR.x, footR.y, 8.5);
  drawSeg(hip.x, hip.y, shoulder.x, shoulder.y, 10.5);

  drawSeg(shoulder.x, shoulder.y, elbowL.x, elbowL.y, 8);
  drawSeg(elbowL.x, elbowL.y, handL.x, handL.y, 8);
  drawSeg(shoulder.x, shoulder.y, elbowR.x, elbowR.y, 8);
  drawSeg(elbowR.x, elbowR.y, handR.x, handR.y, 8);

  if (milestone.crown) {
    const cy = head.y - 26;
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(head.x - 18, cy);
    ctx.lineTo(head.x - 14, cy - 16);
    ctx.lineTo(head.x - 5, cy - 7);
    ctx.lineTo(head.x, cy - 19);
    ctx.lineTo(head.x + 5, cy - 7);
    ctx.lineTo(head.x + 14, cy - 16);
    ctx.lineTo(head.x + 18, cy);
    ctx.closePath();
    ctx.fill();
  }

  const headR = 24;
  ctx.fillStyle = '#FFFFFF';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(head.x, head.y, headR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#000000';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(head.x - 8, head.y - 3, 2.8, 0, Math.PI * 2);
  ctx.arc(head.x + 8, head.y - 3, 2.8, 0, Math.PI * 2);
  ctx.fill();

  if (milestone.expression === 'focused' || milestone.expression === 'legend') {
    ctx.beginPath();
    ctx.moveTo(head.x - 13, head.y - 10);
    ctx.lineTo(head.x - 3, head.y - 6);
    ctx.moveTo(head.x + 13, head.y - 10);
    ctx.lineTo(head.x + 3, head.y - 6);
    ctx.stroke();
  } else if (milestone.expression === 'thinking') {
    ctx.beginPath();
    ctx.moveTo(head.x - 13, head.y - 9);
    ctx.lineTo(head.x - 4, head.y - 11);
    ctx.moveTo(head.x + 4, head.y - 8);
    ctx.lineTo(head.x + 13, head.y - 12);
    ctx.stroke();
  }

  ctx.beginPath();
  if (milestone.expression === 'hyped' || milestone.expression === 'legend') {
    ctx.arc(head.x, head.y + 5, 9, 0, Math.PI);
  } else if (milestone.expression === 'thinking') {
    ctx.moveTo(head.x - 6, head.y + 10);
    ctx.lineTo(head.x + 6, head.y + 8);
  } else {
    ctx.moveTo(head.x - 7, head.y + 9);
    ctx.lineTo(head.x + 7, head.y + 9);
  }
  ctx.stroke();

  ctx.restore();
}

async function shareStreakImage() {
  const { currentStreak, bestStreak, totalTrainedDays } = calculateStreaks();
  const todayISO = getTodayISO();
  const milestone = getStreakMilestone(currentStreak);

  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 18;
  ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

  if (milestone.doubleFrame) {
    ctx.lineWidth = 6;
    ctx.strokeRect(66, 66, canvas.width - 132, canvas.height - 132);
  }

  ctx.fillStyle = '#000000';
  ctx.fillRect(96, 104, 28, 28);
  ctx.font = 'bold 36px Arimo, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('AMRAP · 20 MIN', 142, 130);

  ctx.font = 'bold 24px Arimo, sans-serif';
  ctx.fillStyle = '#555555';
  ctx.textAlign = 'right';
  ctx.fillText(formatDisplayDate(todayISO), canvas.width - 96, 128);

  const boxX = 96;
  const boxY = 195;
  const boxW = canvas.width - 192;
  const boxH = 560;

  ctx.fillStyle = '#000000';
  ctx.fillRect(boxX, boxY, boxW, boxH);

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(boxX + 40, boxY + 28, boxW - 80, 44);
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 22px Arimo, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(milestone.badge, canvas.width / 2, boxY + 58);

  const numCenterX = boxX + 270;
  const baseFontSize = currentStreak >= 100 ? 155 : 215;
  const fontSize = Math.round(baseFontSize * milestone.numberScale);

  if (milestone.doubleFrame) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 5;
    ctx.strokeRect(boxX + 40, boxY + 104, 460, 390);
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px Arimo, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(`${currentStreak}`, numCenterX, boxY + 345);

  ctx.fillStyle = '#D4D4D4';
  ctx.font = 'bold 30px Arimo, sans-serif';
  ctx.fillText(currentStreak === 1 ? 'DÍA DE RACHA' : 'DÍAS DE RACHA', numCenterX, boxY + 415);

  const stickBoxX = boxX + 525;
  const stickBoxY = boxY + 104;
  const stickBoxW = 319;
  const stickBoxH = 390;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(stickBoxX, stickBoxY, stickBoxW, stickBoxH);

  drawStickmanMilestone(
    ctx,
    stickBoxX + stickBoxW / 2,
    stickBoxY + stickBoxH - 42,
    milestone
  );

  const stats = [
    { label: 'RÉCORD VUELTAS', value: `${bestStreak}` },
    { label: 'DÍAS ENTRENADOS', value: `${totalTrainedDays}` },
    { label: 'PROTECTORES', value: `${streakFreezes}/${MAX_FREEZES}` }
  ];

  const gap = 24;
  const cardW = (canvas.width - 192 - gap * 2) / 3;
  const cardY = 795;
  const cardH = 230;

  stats.forEach((st, idx) => {
    const x = 96 + idx * (cardW + gap);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x, cardY, cardW, cardH);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 6;
    ctx.strokeRect(x, cardY, cardW, cardH);

    ctx.fillStyle = '#555555';
    ctx.font = 'bold 20px Arimo, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(st.label, x + cardW / 2, cardY + 62);

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 68px Arimo, sans-serif';
    ctx.fillText(st.value, x + cardW / 2, cardY + 158);
  });

  ctx.fillStyle = '#000000';
  ctx.font = 'bold 26px Arimo, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(milestone.phrase, canvas.width / 2, 1135);

  ctx.fillStyle = '#666666';
  ctx.font = 'bold 22px Arimo, sans-serif';
  ctx.fillText('araujo-phi.github.io/AMRAP', canvas.width / 2, 1185);

  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) {
    showToast('No se pudo generar la imagen');
    return;
  }

  const fileName = `racha-amrap-${currentStreak}d-${todayISO}.png`;
  const file = new File([blob], fileName, { type: 'image/png' });

  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: 'Mi racha en AMRAP',
        text: `${milestone.badge} · Racha de ${currentStreak} ${currentStreak === 1 ? 'día' : 'días'} en AMRAP.`,
        files: [file]
      });
      showToast('Racha compartida');
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Imagen PNG descargada');
}

// =========================================================================
// MODAL DE EDICIÓN / REGISTRO MANUAL Y EXPORTACIÓN JSON
// =========================================================================
function openSessionModal(prefillDate) {
  const todayISO = getTodayISO();
  let targetDate = prefillDate || todayISO;

  if (targetDate > todayISO) {
    showToast('No puedes anotar días futuros');
    return;
  }

  const modal = document.getElementById('session-modal');
  const dateInput = document.getElementById('modal-date');
  const roundsInput = document.getElementById('modal-rounds');
  const effortInput = document.getElementById('modal-effort');
  const notesInput = document.getElementById('modal-notes');
  const deleteWrap = document.getElementById('modal-delete-wrapper');
  const deleteBtn = document.getElementById('modal-delete-btn');

  const existing = sessions.find(s => s.date === targetDate);

  dateInput.max = todayISO;
  dateInput.value = targetDate;

  if (existing) {
    document.getElementById('session-modal-title').textContent = `Editar Día (${formatDisplayDate(targetDate)})`;
    roundsInput.value = existing.rounds;
    effortInput.value = existing.effort || 'Normal';
    notesInput.value = existing.notes || '';
    deleteWrap.classList.remove('hidden');
    deleteBtn.onclick = () => {
      closeSessionModal();
      confirmDeleteSession(targetDate);
    };
  } else {
    document.getElementById('session-modal-title').textContent = `Anotar Día (${formatDisplayDate(targetDate)})`;
    roundsInput.value = currentRounds > 0 ? currentRounds : 3;
    effortInput.value = 'Normal';
    notesInput.value = '';
    deleteWrap.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSessionModal() {
  const modal = document.getElementById('session-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function adjustModalRounds(delta) {
  const input = document.getElementById('modal-rounds');
  const val = Math.max(0, (parseInt(input.value, 10) || 0) + delta);
  input.value = val;
}

document.getElementById('manual-session-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todayISO = getTodayISO();
  const date = document.getElementById('modal-date').value;
  const rounds = Math.max(0, parseInt(document.getElementById('modal-rounds').value, 10) || 0);
  const effort = document.getElementById('modal-effort').value;
  const notes = document.getElementById('modal-notes').value.trim();

  if (!date) return;

  if (date > todayISO) {
    showToast('No puedes anotar días futuros');
    return;
  }

  const idx = sessions.findIndex(s => s.date === date);
  const record = { date, rounds, effort, notes };

  if (idx >= 0) {
    sessions[idx] = record;
  } else {
    sessions.push(record);
  }

  const earnedMsg = tryAwardTodayCoins(date, rounds);

  saveSessions();
  closeSessionModal();
  refreshProgressView();
  showToast(`Guardado: ${formatDisplayDate(date)}${earnedMsg}`);
});

function confirmDeleteSession(date) {
  openConfirmModal(
    'Eliminar Día',
    `¿Borrar el registro del ${formatDisplayDate(date)}?`,
    () => {
      sessions = sessions.filter(s => s.date !== date);
      saveSessions();
      refreshProgressView();
      showToast('Registro eliminado');
    }
  );
}

function exportProgressJSON() {
  const backupData = {
    sessions,
    coins,
    streakFreezes,
    frozenDates,
    rewardedDates
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
  showToast('Respaldo JSON descargado');
}

function importProgressJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        sessions = imported
          .filter(item => item && typeof item.date === 'string')
          .map(normalizeSessionItem);
      } else if (imported && typeof imported === 'object' && Array.isArray(imported.sessions)) {
        sessions = imported.sessions
          .filter(item => item && typeof item.date === 'string')
          .map(normalizeSessionItem);
        coins = Math.max(0, Number(imported.coins) || 0);
        streakFreezes = Math.max(0, Math.min(MAX_FREEZES, Number(imported.streakFreezes) || 0));
        frozenDates = Array.isArray(imported.frozenDates)
          ? Array.from(new Set(imported.frozenDates.filter(d => typeof d === 'string')))
          : [];
        rewardedDates = Array.isArray(imported.rewardedDates)
          ? Array.from(new Set(imported.rewardedDates.filter(d => typeof d === 'string')))
          : [];
      } else {
        throw new Error('Inválido');
      }
      applyAutomaticStreakFreezes();
      saveSessions();
      refreshProgressView();
      showToast(`Importadas ${sessions.length} sesiones`);
    } catch (err) {
      showToast('Archivo JSON inválido');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// =========================================================================
// UTILIDADES DE NOTIFICACIÓN Y MODAL DE CONFIRMACIÓN
// =========================================================================
let toastTimeout = null;
function showToast(msg) {
  const banner = document.getElementById('toast-banner');
  document.getElementById('toast-message').textContent = msg;
  banner.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(hideToast, 3200);
}

function hideToast() {
  document.getElementById('toast-banner').classList.add('hidden');
}

function openConfirmModal(title, text, onConfirm) {
  const modal = document.getElementById('confirm-modal');
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-text').textContent = text;

  const acceptBtn = document.getElementById('confirm-accept-btn');
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
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
