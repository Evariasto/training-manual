// ─── localStorage key ─────────────────────────────────────────────
const KEY = 'training_manual_trainer_v1'

// ─── Load / Save ──────────────────────────────────────────────────
export function loadTrainer() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : defaultTrainer()
  } catch { return defaultTrainer() }
}

export function saveTrainer(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)) } catch {}
}

export function defaultTrainer() {
  return {
    config: {
      objective:    'hipertrofia',
      level:        'intermediate',
      frequency:    4,
      focusGroups:  [],   // [{id, priority, note}]
      weaknesses:   '',   // free text
      lastGenerated: null,
    },
    weekPlan: null,       // generated plan
    loadLogs: [],         // [{id, date, exerciseName, dayId, sets:[{setNum,weight,reps}]}]
  }
}

// ─── Objective labels ──────────────────────────────────────────────
export const OBJECTIVES = [
  { id: 'hipertrofia', label: 'Hipertrofia', repRange: '8–12', rir: '1–2' },
  { id: 'forca',       label: 'Força',       repRange: '4–6',  rir: '0–1' },
  { id: 'corte',       label: 'Corte',       repRange: '12–15',rir: '1–2' },
  { id: 'recomp',      label: 'Recomposição',repRange: '10–15',rir: '1–2' },
]

export const LEVELS = [
  { id: 'beginner',     label: 'Iniciante' },
  { id: 'intermediate', label: 'Intermediário' },
  { id: 'advanced',     label: 'Avançado' },
]

export const FOCUS_GROUPS = [
  { id: 'peito',              label: 'Peito',              icon: '🫁', color: '#E53E3E' },
  { id: 'costas',             label: 'Costas',             icon: '🔱', color: '#3182CE' },
  { id: 'ombros',             label: 'Ombros',             icon: '🔥', color: '#9F7AEA' },
  { id: 'bracos',             label: 'Braços',             icon: '💪', color: '#ED8936' },
  { id: 'membros-inferiores', label: 'Membros Inferiores', icon: '🦵', color: '#48BB78' },
  { id: 'core',               label: 'Core',               icon: '🎯', color: '#F6AD55' },
]

// ─── Exercise library per group ────────────────────────────────────
const EXLIB = {
  peito: [
    { name: 'Supino Inclinado Barra 30°', sets: 4, reps: '6–10', note: 'Foco no peito superior' },
    { name: 'Supino Plano Barra',         sets: 4, reps: '6–10', note: 'Principal composto' },
    { name: 'Supino com Halter',          sets: 3, reps: '10–14',note: 'Amplitude máxima' },
    { name: 'Crossover Cabo (polia alta)',sets: 3, reps: '12–16',note: 'Tensão constante' },
    { name: 'Peck Deck',                  sets: 3, reps: '12–20',note: 'Pump + conexão' },
    { name: 'Mergulho (Dip) — Peito',    sets: 3, reps: '8–12', note: 'Peito inferior' },
    { name: 'Crucifixo Inclinado Halter', sets: 3, reps: '12–15',note: 'Isolamento clavicular' },
  ],
  costas: [
    { name: 'Barra Fixa Pronada',        sets: 4, reps: '5–8',  note: 'Largura + força' },
    { name: 'Remada Curvada Barra',      sets: 4, reps: '6–10', note: 'Espessura — cotovelo colado' },
    { name: 'Pulldown Triângulo',        sets: 3, reps: '10–14',note: 'Lat inferior — grip neutro' },
    { name: 'Remada Unilateral Halter',  sets: 3, reps: '10–12',note: 'Amplitude total' },
    { name: 'Remada Cavalinho T-Bar',    sets: 3, reps: '10–14',note: 'Trap médio + romboide' },
    { name: 'Face Pull com Corda',       sets: 3, reps: '15–20',note: 'Manguito + saúde ombro' },
    { name: 'Levantamento Terra',        sets: 4, reps: '4–6',  note: 'Força máxima — composto' },
  ],
  ombros: [
    { name: 'Desenvolvimento Arnold',    sets: 4, reps: '8–12', note: '3 porções do deltóide' },
    { name: 'Desenvolvimento Halter',    sets: 3, reps: '10–14',note: 'Amplitude máxima' },
    { name: 'Elevação Lateral Halter',   sets: 4, reps: '12–16',note: 'Largura — controle total' },
    { name: 'Elevação Lateral Cabo',     sets: 3, reps: '14–18',note: 'Tensão constante' },
    { name: 'Crucifixo Inverso Halter',  sets: 3, reps: '14–18',note: 'Deltóide posterior' },
    { name: 'Face Pull c/ Corda',        sets: 3, reps: '15–20',note: 'Posterior + manguito' },
    { name: 'Elevação Lateral Máquina',  sets: 3, reps: '12–20',note: 'Drop set possível' },
  ],
  bracos: [
    { name: 'Rosca Direta Barra EZ',     sets: 4, reps: '8–12', note: 'Base do bíceps' },
    { name: 'Rosca Alternada Halter',    sets: 3, reps: '10–14',note: 'Supinação completa' },
    { name: 'Rosca Inclinada Halter',    sets: 3, reps: '10–14',note: 'Pico — cabeça longa' },
    { name: 'Rosca Martelo Alternada',   sets: 3, reps: '12–16',note: 'Braquial + antebraço' },
    { name: 'Tríceps Testa Barra EZ',    sets: 4, reps: '8–12', note: 'Cabeça longa — base' },
    { name: 'Extensão por Cima Halter',  sets: 3, reps: '10–14',note: 'Cabeça longa — alongamento' },
    { name: 'Tríceps Pulley Corda',      sets: 3, reps: '12–16',note: 'Cabeça lateral — pump' },
  ],
  'membros-inferiores': [
    { name: 'Agachamento Livre',         sets: 4, reps: '6–10', note: 'Profundidade + técnica' },
    { name: 'Leg Press 45°',             sets: 3, reps: '10–15',note: 'Pés médios na plataforma' },
    { name: 'Afundo Búlgaro',            sets: 3, reps: '10–12',note: 'Unilateral — foco VMO/glúteo' },
    { name: 'Terra Romeno (RDL)',         sets: 4, reps: '8–12', note: 'Pausa no alongamento' },
    { name: 'Hip Thrust',                sets: 4, reps: '10–15',note: 'Squeeze no topo' },
    { name: 'Cadeira Flexora Sentada',   sets: 3, reps: '10–15',note: 'Controle excêntrico 3s' },
    { name: 'Cadeira Extensora',         sets: 3, reps: '12–20',note: 'Finalizador VMO' },
    { name: 'Panturrilha em Pé',         sets: 4, reps: '15–20',note: 'Amplitude total' },
  ],
  core: [
    { name: 'Abdominal Infra Cabo',      sets: 3, reps: '12–15',note: 'Controle total' },
    { name: 'Crunch Declinado',          sets: 3, reps: '15–20',note: 'Reto abdominal' },
    { name: 'Russian Twist',             sets: 3, reps: '20–30',note: 'Oblíquos' },
    { name: 'Prancha Isométrica',        sets: 3, reps: '45–60s',note: 'Transverso + core' },
    { name: 'Elevação de Pernas Paralela',sets:3, reps: '12–15',note: 'Flexores + reto inf.' },
    { name: 'Vacuum (Abdominal)',        sets: 3, reps: '30–60s',note: 'Transverso profundo' },
  ],
}

// ─── Split templates ────────────────────────────────────────────────
const SPLIT_TEMPLATES = {
  3: [
    { id: 'A', name: 'Full Body A', primaryGroups: ['peito', 'costas', 'core'] },
    { id: 'B', name: 'Full Body B', primaryGroups: ['membros-inferiores', 'ombros', 'bracos'] },
    { id: 'C', name: 'Full Body C', primaryGroups: ['costas', 'membros-inferiores', 'core'] },
  ],
  4: [
    { id: 'A', name: 'Upper A — Push',       primaryGroups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Lower A — Quad',       primaryGroups: ['membros-inferiores', 'core'] },
    { id: 'C', name: 'Upper B — Pull',       primaryGroups: ['costas', 'bracos', 'ombros'] },
    { id: 'D', name: 'Lower B — Posterior',  primaryGroups: ['membros-inferiores', 'core'] },
  ],
  5: [
    { id: 'A', name: 'Push — Peito + Ombro + Tríceps', primaryGroups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Pull — Costas + Bíceps',         primaryGroups: ['costas', 'bracos'] },
    { id: 'C', name: 'Legs — Pernas Completo',         primaryGroups: ['membros-inferiores', 'core'] },
    { id: 'D', name: 'Upper — Peito + Costas',         primaryGroups: ['peito', 'costas', 'ombros'] },
    { id: 'E', name: 'Braços + Core',                  primaryGroups: ['bracos', 'core'] },
  ],
  6: [
    { id: 'A', name: 'Push A — Volume',      primaryGroups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Pull A — Volume',      primaryGroups: ['costas', 'bracos'] },
    { id: 'C', name: 'Legs A — Quad',        primaryGroups: ['membros-inferiores', 'core'] },
    { id: 'D', name: 'Push B — Intensidade', primaryGroups: ['peito', 'ombros', 'bracos'] },
    { id: 'E', name: 'Pull B — Intensidade', primaryGroups: ['costas', 'bracos'] },
    { id: 'F', name: 'Legs B — Posterior',   primaryGroups: ['membros-inferiores', 'core'] },
  ],
}

// ─── Plan generator ────────────────────────────────────────────────
export function generateWeekPlan(config) {
  const { objective, level, frequency, focusGroups, weaknesses } = config
  const obj = OBJECTIVES.find(o => o.id === objective) || OBJECTIVES[0]
  const days = SPLIT_TEMPLATES[frequency] || SPLIT_TEMPLATES[4]
  const priorityIds = focusGroups.map(g => g.id)

  // Parse weaknesses text for keyword boosts
  const weakLower = (weaknesses || '').toLowerCase()
  const weakBoosts = {
    peito:    weakLower.includes('peito') || weakLower.includes('peit'),
    costas:   weakLower.includes('costa') || weakLower.includes('lat'),
    ombros:   weakLower.includes('ombro') || weakLower.includes('delt') || weakLower.includes('lateral'),
    bracos:   weakLower.includes('brac') || weakLower.includes('bicep') || weakLower.includes('tricep'),
    'membros-inferiores': weakLower.includes('perna') || weakLower.includes('quad') || weakLower.includes('glut'),
    core:     weakLower.includes('core') || weakLower.includes('abdom'),
  }

  function getExercisesForDay(day) {
    const exsPerGroup = {}
    day.primaryGroups.forEach(gid => {
      const lib = EXLIB[gid] || []
      const isPriority = priorityIds.includes(gid)
      const isWeak = weakBoosts[gid]
      // More exercises for priority/weak groups
      let count = isPriority ? 3 : (isWeak ? 2 : 2)
      if (level === 'advanced') count = Math.min(count + 1, 4)
      if (level === 'beginner') count = Math.max(count - 1, 1)
      // Shuffle a bit so not always the same first exercises
      const selected = lib.slice(0, count).map(ex => ({
        ...ex,
        reps: overrideReps(ex, obj, level),
        sets: overrideSets(ex, isPriority, level, objective),
        highlight: isPriority || isWeak,
      }))
      exsPerGroup[gid] = selected
    })
    return exsPerGroup
  }

  const planDays = days.map(day => ({
    id: day.id,
    name: day.name,
    primaryGroups: day.primaryGroups,
    exercisesByGroup: getExercisesForDay(day),
  }))

  return {
    generatedAt: new Date().toISOString(),
    weekNumber: getCurrentWeek(),
    objective: obj,
    level,
    focusSummary: focusGroups.map(f => {
      const g = FOCUS_GROUPS.find(x => x.id === f.id)
      return `${g?.icon} ${g?.label}${f.note ? ` — ${f.note}` : ''}`
    }),
    weaknessesSummary: weaknesses,
    days: planDays,
  }
}

function overrideReps(ex, obj) {
  const base = ex.reps
  if (obj.id === 'forca')   return base.replace(/\d+–\d+/, '4–6')
  if (obj.id === 'corte')   return base.replace(/\d+–\d+/, s => { const [a,b] = s.split('–').map(Number); return `${a+2}–${b+4}` })
  return obj.repRange || base
}

function overrideSets(ex, isPriority, level, objId) {
  let s = ex.sets
  if (isPriority) s = Math.min(s + 1, 5)
  if (level === 'beginner') s = Math.max(s - 1, 2)
  if (level === 'advanced') s = Math.min(s + 1, 5)
  if (objId === 'forca') s = Math.min(s + 1, 6)
  return s
}

function getCurrentWeek() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)
  return Math.ceil((((now - start) / 86400000) + start.getDay() + 1) / 7)
}

// ─── Load log helpers ──────────────────────────────────────────────
export function getLogsForExercise(logs, exerciseName) {
  return logs
    .filter(l => l.exerciseName === exerciseName)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getLastLoad(logs, exerciseName) {
  const ex = getLogsForExercise(logs, exerciseName)
  if (!ex.length) return null
  const last = ex[0]
  const maxWeight = Math.max(...last.sets.map(s => s.weight || 0))
  return { date: last.date, maxWeight, sets: last.sets }
}

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
