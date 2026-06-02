// ─── localStorage key ─────────────────────────────────────────────
const KEY = 'training_manual_trainer_v2'

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
      // [{id, priority, note, subgroups: ['id1','id2']}]
      focusGroups:  [],
      weaknesses:   '',
      lastGenerated: null,
    },
    weekPlan: null,
    loadLogs: [],
  }
}

// ─── Config options ────────────────────────────────────────────────
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

// ─── Main groups ───────────────────────────────────────────────────
export const FOCUS_GROUPS = [
  { id: 'peito',              label: 'Peito',              icon: '🫁', color: '#E53E3E' },
  { id: 'costas',             label: 'Costas',             icon: '🔱', color: '#3182CE' },
  { id: 'ombros',             label: 'Ombros',             icon: '🔥', color: '#9F7AEA' },
  { id: 'bracos',             label: 'Braços',             icon: '💪', color: '#ED8936' },
  { id: 'membros-inferiores', label: 'Membros Inferiores', icon: '🦵', color: '#48BB78' },
  { id: 'core',               label: 'Core',               icon: '🎯', color: '#F6AD55' },
]

// ─── Sub-muscle groups per main group ─────────────────────────────
export const SUBGROUPS = {
  peito: [
    { id: 'clavicular', label: 'Porção Clavicular',  icon: '⬆️', desc: 'Peito superior — supino inclinado 30°' },
    { id: 'esternal',   label: 'Miolo / Esternal',   icon: '🎯', desc: 'Volume central — supino plano e crossover' },
    { id: 'inferior',   label: 'Porção Inferior',    icon: '⬇️', desc: 'Definição inferior — declinado e mergulho' },
    { id: 'serratil',   label: 'Serrátil Anterior',  icon: '⚡', desc: 'Dentado lateral — pullover e amplitude máxima' },
  ],
  costas: [
    { id: 'latissimo',  label: 'Dorsais (Lat)',       icon: '📐', desc: 'Largura e V-taper — puxadas e pulldown' },
    { id: 'trapezio',   label: 'Trapézio',            icon: '🔷', desc: 'Espessura central — remadas com retração' },
    { id: 'romboides',  label: 'Romboides',           icon: '🔶', desc: 'Meio das costas — remada fechada + face pull' },
    { id: 'eretores',   label: 'Eretores / Lombar',   icon: '🏛️', desc: 'Colunas lombar em palco — terra e good morning' },
  ],
  ombros: [
    { id: 'lateral',    label: 'Deltóide Lateral',   icon: '↔️', desc: 'Largura dos ombros — elevações laterais' },
    { id: 'posterior',  label: 'Deltóide Posterior', icon: '🔙', desc: 'Redondeza traseira — crucifixo inverso, face pull' },
    { id: 'anterior',   label: 'Deltóide Anterior',  icon: '⬆️', desc: 'Frontal — press + elevação frontal (já treinado em peito)' },
  ],
  bracos: [
    { id: 'biceps',     label: 'Bíceps',             icon: '💪', desc: 'Pico e volume frontal — roscas com supinação' },
    { id: 'triceps',    label: 'Tríceps',            icon: '🔱', desc: '⅔ do braço — extensões + paralelas' },
    { id: 'braquial',   label: 'Braquial + Antebraço',icon:'🤜', desc: 'Base e profundidade — rosca martelo' },
  ],
  'membros-inferiores': [
    { id: 'quadriceps', label: 'Quadríceps / VMO',   icon: '🦵', desc: 'Frente da coxa — agachamento, leg press, extensora' },
    { id: 'posterior',  label: 'Posterior / Isquio', icon: '⬇️', desc: 'Bíceps femoral — terra romeno, flexora' },
    { id: 'gluteos',    label: 'Glúteos',            icon: '🍑', desc: 'Hip thrust, abdução, kickback' },
    { id: 'panturrilha',label: 'Panturrilha',        icon: '👟', desc: 'Gêmeos + sóleo — panturrilha em pé e sentada' },
  ],
  core: [
    { id: 'reto',       label: 'Reto Abdominal',     icon: '📏', desc: 'Tanquinho + força de flexão — infra, crunch' },
    { id: 'obliquos',   label: 'Oblíquos',           icon: '↪️', desc: 'Cintura e rotação — Russian Twist, oblíquo' },
    { id: 'transverso', label: 'Transverso (Core)',  icon: '🔵', desc: 'Profundo — vacuum, prancha, dead bug' },
  ],
}

// ─── Exercise library indexed by sub-muscle ────────────────────────
const SUBEX = {
  // PEITO
  'peito.clavicular': [
    { name: 'Supino Inclinado Barra 30°',    sets: 4, reps: '6–10', note: 'Ângulo 30° — foco no peito superior' },
    { name: 'Supino Inclinado Halter',       sets: 3, reps: '10–14',note: 'Amplitude máxima' },
    { name: 'Crossover Cabo (polia baixa)',  sets: 3, reps: '12–16',note: 'Cruzamento para superior' },
    { name: 'Crucifixo Inclinado Halter',    sets: 3, reps: '12–15',note: 'Isolamento clavicular' },
  ],
  'peito.esternal': [
    { name: 'Supino Plano Barra',            sets: 4, reps: '6–10', note: 'Principal composto' },
    { name: 'Supino Plano Halter',           sets: 3, reps: '10–14',note: 'Amplitude maior' },
    { name: 'Crossover Cabo (polia alta)',   sets: 3, reps: '12–16',note: 'Tensão constante' },
    { name: 'Peck Deck',                     sets: 3, reps: '12–20',note: 'Pump + conexão mente-músculo' },
  ],
  'peito.inferior': [
    { name: 'Supino Declinado',              sets: 3, reps: '10–14',note: 'Definição inferior' },
    { name: 'Mergulho (Dip) — Peito',       sets: 3, reps: '8–12', note: 'Tronco inclinado 30°' },
    { name: 'Crossover Neutro (polia alta)', sets: 3, reps: '12–16',note: 'Cruzamento inferior' },
  ],
  'peito.serratil': [
    { name: 'Pullover com Halter',           sets: 3, reps: '12–15',note: 'Expansão torácica + serrátil' },
    { name: 'Crucifixo Plano Halter',        sets: 3, reps: '12–15',note: 'Amplitude total + serrátil' },
  ],
  // COSTAS
  'costas.latissimo': [
    { name: 'Barra Fixa Pronada',            sets: 4, reps: '5–8',  note: 'Largura — grip largo' },
    { name: 'Pulldown Triângulo (grip neutro)', sets: 3, reps: '10–14', note: 'Lat inferior' },
    { name: 'Pulldown Polia Larga',          sets: 3, reps: '10–14',note: 'Lat superior' },
    { name: 'Remada Serrote',               sets: 3, reps: '10–12',note: 'Unilateral — amplitude máxima' },
  ],
  'costas.trapezio': [
    { name: 'Remada Curvada Barra',          sets: 4, reps: '6–10', note: 'Cotovelo colado — espessura' },
    { name: 'Remada Cavalinho T-Bar',        sets: 3, reps: '10–14',note: 'Trap médio + espessura' },
    { name: 'Encolhimento Barra / Halter',   sets: 4, reps: '12–15',note: 'Trap superior' },
  ],
  'costas.romboides': [
    { name: 'Remada Unilateral Halter',      sets: 4, reps: '10–12',note: 'Retração máxima' },
    { name: 'Face Pull com Corda',           sets: 3, reps: '15–20',note: 'Romboide + posterior ombro' },
    { name: 'Remada Alta Cabo',              sets: 3, reps: '12–15',note: 'Retração + depressão escapular' },
  ],
  'costas.eretores': [
    { name: 'Levantamento Terra Convencional', sets: 4, reps: '4–6',note: 'Composto principal — eretores' },
    { name: 'Terra Romeno (RDL)',             sets: 3, reps: '8–12', note: 'Eretores + isquio' },
    { name: 'Extensão Lombar (GHD)',          sets: 3, reps: '12–15',note: 'Isolamento dos eretores' },
  ],
  // OMBROS
  'ombros.lateral': [
    { name: 'Elevação Lateral Halter',       sets: 4, reps: '12–16',note: 'Controle excêntrico 3s' },
    { name: 'Elevação Lateral Cabo',         sets: 3, reps: '14–18',note: 'Tensão constante no arco todo' },
    { name: 'Elevação Lateral Máquina',      sets: 3, reps: '12–20',note: 'Drop set possível' },
    { name: 'Desenvolvimento Halter',        sets: 4, reps: '8–12', note: 'Composto para lateral + anterior' },
  ],
  'ombros.posterior': [
    { name: 'Crucifixo Inverso Halter',      sets: 3, reps: '14–18',note: 'Tronco paralelo ao chão' },
    { name: 'Face Pull c/ Corda',            sets: 3, reps: '15–20',note: 'Posterior + manguito' },
    { name: 'Remada Alta Cabo (polia baixa)',sets: 3, reps: '12–15',note: 'Posterior + retração' },
  ],
  'ombros.anterior': [
    { name: 'Desenvolvimento Arnold',        sets: 4, reps: '8–12', note: '3 porções — anterior em destaque' },
    { name: 'Desenvolvimento Militar Barra', sets: 4, reps: '5–8',  note: 'Força máxima de ombro' },
    { name: 'Elevação Frontal Cabo',         sets: 3, reps: '12–15',note: 'Isolamento deltóide anterior' },
  ],
  // BRAÇOS
  'bracos.biceps': [
    { name: 'Rosca Direta Barra EZ',         sets: 4, reps: '8–12', note: 'Base do bíceps' },
    { name: 'Rosca Alternada Halter',        sets: 3, reps: '10–14',note: 'Supinação completa' },
    { name: 'Rosca Inclinada Halter',        sets: 3, reps: '10–14',note: 'Pico — cabeça longa' },
    { name: 'Rosca Concentrada',             sets: 2, reps: '12–15',note: 'Isolamento máximo' },
  ],
  'bracos.triceps': [
    { name: 'Tríceps Testa Barra EZ',        sets: 4, reps: '8–12', note: 'Cabeça longa — base' },
    { name: 'Extensão por Cima Halter',      sets: 3, reps: '10–14',note: 'Cabeça longa — alongamento' },
    { name: 'Tríceps Pulley Corda',          sets: 3, reps: '12–16',note: 'Cabeça lateral — pump' },
    { name: 'Mergulho nas Paralelas',        sets: 3, reps: '8–12', note: 'Tronco vertical — tríceps total' },
  ],
  'bracos.braquial': [
    { name: 'Rosca Martelo Alternada',       sets: 3, reps: '12–16',note: 'Braquial + braquiorradial' },
    { name: 'Rosca Inversa (Pronada)',        sets: 3, reps: '12–15',note: 'Braquiorradial + antebraço' },
    { name: 'Rosca no Cabo (grip neutro)',   sets: 3, reps: '12–15',note: 'Tensão constante — braquial' },
  ],
  // MEMBROS INFERIORES
  'membros-inferiores.quadriceps': [
    { name: 'Agachamento Livre',             sets: 4, reps: '6–10', note: 'Profundidade + técnica' },
    { name: 'Leg Press 45°',                 sets: 3, reps: '10–15',note: 'Pés baixos — foco quad' },
    { name: 'Hack Squat',                    sets: 3, reps: '10–14',note: 'VMO — pés baixos e fechados' },
    { name: 'Cadeira Extensora',             sets: 3, reps: '12–20',note: 'Finalizador VMO — extensão total' },
  ],
  'membros-inferiores.posterior': [
    { name: 'Terra Romeno (RDL)',             sets: 4, reps: '8–12', note: 'Pausa no alongamento' },
    { name: 'Cadeira Flexora Sentada',        sets: 3, reps: '10–15',note: 'Controle excêntrico 3s' },
    { name: 'Stiff (Terra pernas rígidas)',  sets: 3, reps: '10–14',note: 'Alongamento máximo isquio' },
    { name: 'Afundo Búlgaro',                sets: 3, reps: '10–12',note: 'Unilateral — posterior + glúteo' },
  ],
  'membros-inferiores.gluteos': [
    { name: 'Hip Thrust',                    sets: 4, reps: '10–15',note: 'Squeeze intenso no topo' },
    { name: 'Abdução de Quadril',            sets: 3, reps: '15–20',note: 'Glúteo médio e mínimo' },
    { name: 'Leg Press (pés altos e abertos)',sets: 3, reps: '10–15',note: 'Pés altos = mais glúteo' },
    { name: 'Kickback no Cabo',              sets: 3, reps: '15–20',note: 'Isolamento glúteo máximo' },
  ],
  'membros-inferiores.panturrilha': [
    { name: 'Panturrilha em Pé (Gêmeos)',    sets: 4, reps: '15–20',note: 'Amplitude total — sem quique' },
    { name: 'Panturrilha Sentada (Sóleo)',    sets: 3, reps: '15–20',note: 'Joelho 90° — sóleo' },
    { name: 'Panturrilha no Leg Press',       sets: 3, reps: '20–25',note: 'Alto volume — pump' },
  ],
  // CORE
  'core.reto': [
    { name: 'Abdominal Infra Cabo',          sets: 3, reps: '12–15',note: 'Controle total' },
    { name: 'Crunch Declinado',              sets: 3, reps: '15–20',note: 'Reto abdominal' },
    { name: 'Elevação de Pernas Paralela',   sets: 3, reps: '12–15',note: 'Reto inferior' },
    { name: 'Abdominal Roda (Ab Wheel)',     sets: 3, reps: '8–12', note: 'Core completo + reto' },
  ],
  'core.obliquos': [
    { name: 'Russian Twist c/ Peso',         sets: 3, reps: '20–30',note: 'Rotação bilateral' },
    { name: 'Prancha Lateral',               sets: 3, reps: '30–45s',note: 'Oblíquo + quadrado lombar' },
    { name: 'Crunch Oblíquo',                sets: 3, reps: '15–20',note: 'Rotação com peso' },
  ],
  'core.transverso': [
    { name: 'Prancha Isométrica',            sets: 3, reps: '45–60s',note: 'Transverso + core completo' },
    { name: 'Vacuum Abdominal',              sets: 3, reps: '30–60s',note: 'Transverso profundo' },
    { name: 'Dead Bug',                      sets: 3, reps: '10–12', note: 'Estabilidade lombar' },
  ],
}

// ─── Plan generator ────────────────────────────────────────────────
const SPLIT_TEMPLATES = {
  3: [
    { id: 'A', name: 'Full Body A', groups: ['peito', 'costas', 'core'] },
    { id: 'B', name: 'Full Body B', groups: ['membros-inferiores', 'ombros', 'bracos'] },
    { id: 'C', name: 'Full Body C', groups: ['costas', 'membros-inferiores', 'core'] },
  ],
  4: [
    { id: 'A', name: 'Upper A — Push',      groups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Lower A — Quad',      groups: ['membros-inferiores', 'core'] },
    { id: 'C', name: 'Upper B — Pull',      groups: ['costas', 'bracos', 'ombros'] },
    { id: 'D', name: 'Lower B — Posterior', groups: ['membros-inferiores', 'core'] },
  ],
  5: [
    { id: 'A', name: 'Push — Peito + Ombro', groups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Pull — Costas + Bíceps', groups: ['costas', 'bracos'] },
    { id: 'C', name: 'Legs — Pernas',        groups: ['membros-inferiores', 'core'] },
    { id: 'D', name: 'Upper — Peito + Costas', groups: ['peito', 'costas', 'ombros'] },
    { id: 'E', name: 'Braços + Core',        groups: ['bracos', 'core'] },
  ],
  6: [
    { id: 'A', name: 'Push A — Volume',     groups: ['peito', 'ombros', 'bracos'] },
    { id: 'B', name: 'Pull A — Volume',     groups: ['costas', 'bracos'] },
    { id: 'C', name: 'Legs A — Quad',       groups: ['membros-inferiores', 'core'] },
    { id: 'D', name: 'Push B — Intensidade',groups: ['peito', 'ombros', 'bracos'] },
    { id: 'E', name: 'Pull B — Intensidade',groups: ['costas', 'bracos'] },
    { id: 'F', name: 'Legs B — Posterior',  groups: ['membros-inferiores', 'core'] },
  ],
}

export function generateWeekPlan(config) {
  const { objective, level, frequency, focusGroups, weaknesses } = config
  const obj = OBJECTIVES.find(o => o.id === objective) || OBJECTIVES[0]
  const days = SPLIT_TEMPLATES[frequency] || SPLIT_TEMPLATES[4]

  // Build a map: groupId → selected subgroups
  const subgroupMap = {}
  focusGroups.forEach(fg => {
    subgroupMap[fg.id] = fg.subgroups || []
  })

  // Parse weaknesses for keyword boosts
  const wl = (weaknesses || '').toLowerCase()

  function getExercisesForGroup(groupId, dayIndex) {
    const fg = focusGroups.find(g => g.id === groupId)
    const selectedSubs = (fg?.subgroups || [])
    const isPriority = !!fg
    const allSubs = SUBGROUPS[groupId] || []

    // If specific sub-groups selected → use those exercises
    // Otherwise use first 1-2 sub-groups as default
    const subsToUse = selectedSubs.length > 0
      ? selectedSubs
      : allSubs.slice(0, level === 'beginner' ? 1 : 2).map(s => s.id)

    const result = []
    subsToUse.forEach(subId => {
      const key = `${groupId}.${subId}`
      const lib = SUBEX[key] || []
      const subInfo = allSubs.find(s => s.id === subId)
      let count = isPriority ? 2 : 1
      if (level === 'advanced') count = Math.min(count + 1, 3)
      if (level === 'beginner') count = Math.max(count - 1, 1)
      lib.slice(0, count).forEach(ex => {
        result.push({
          ...ex,
          subgroup: subInfo?.label || subId,
          sets: adjustSets(ex.sets, isPriority, level, objective),
          highlight: isPriority,
        })
      })
    })

    return result
  }

  const planDays = days.map(day => ({
    id: day.id,
    name: day.name,
    groups: day.groups,
    exercisesByGroup: Object.fromEntries(
      day.groups.map(gid => [gid, getExercisesForGroup(gid, day.id)])
    ),
  }))

  return {
    generatedAt: new Date().toISOString(),
    weekNumber: getCurrentWeek(),
    objective: obj,
    level,
    focusSummary: focusGroups.map(f => {
      const g = FOCUS_GROUPS.find(x => x.id === f.id)
      const subs = (f.subgroups || []).map(sid => {
        const sg = (SUBGROUPS[f.id] || []).find(s => s.id === sid)
        return sg?.label || sid
      })
      return `${g?.icon} ${g?.label}${subs.length ? ` (${subs.join(', ')})` : ''}${f.note ? ` — ${f.note}` : ''}`
    }),
    weaknessesSummary: weaknesses,
    days: planDays,
  }
}

function adjustSets(base, isPriority, level, objId) {
  let s = base
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
  const maxWeight = Math.max(...last.sets.map(s => Number(s.weight) || 0))
  return { date: last.date, maxWeight, sets: last.sets }
}

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
