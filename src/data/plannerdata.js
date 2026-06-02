// ─── Goals ─────────────────────────────────────────────────────────
export const GOALS = [
  { id: 'hipertrofia', label: 'Hipertrofia', icon: '💪', desc: 'Máximo ganho de massa muscular', repRange: '8–15', rir: '1–2', intensity: '65–80%' },
  { id: 'forca',       label: 'Força',       icon: '🏋️', desc: 'Aumento de força máxima',        repRange: '3–6',  rir: '0–1', intensity: '80–95%' },
  { id: 'corte',       label: 'Corte',       icon: '🔥', desc: 'Definição e perda de gordura',   repRange: '12–20', rir: '0–1', intensity: '55–70%' },
  { id: 'recomp',      label: 'Recomposição', icon: '⚖️', desc: 'Ganhar músculo e perder gordura', repRange: '10–15', rir: '1–2', intensity: '65–75%' },
]

// ─── Levels ────────────────────────────────────────────────────────
export const LEVELS = [
  { id: 'beginner',     label: 'Iniciante',     desc: 'Menos de 1 ano de treino consistente',    volumeMult: 0.7 },
  { id: 'intermediate', label: 'Intermediário', desc: '1–3 anos de treino consistente',          volumeMult: 1.0 },
  { id: 'advanced',     label: 'Avançado',      desc: 'Mais de 3 anos de treino consistente',    volumeMult: 1.35 },
]

// ─── Muscle groups display ──────────────────────────────────────────
export const PLANNER_GROUPS = [
  { id: 'membros-inferiores', label: 'Membros Inferiores', icon: '🦵', color: '#48BB78', abbr: 'Legs' },
  { id: 'costas',             label: 'Costas',             icon: '🔱', color: '#3182CE', abbr: 'Pull' },
  { id: 'peito',              label: 'Peito',              icon: '🫁', color: '#E53E3E', abbr: 'Push' },
  { id: 'ombros',             label: 'Ombros',             icon: '🔥', color: '#9F7AEA', abbr: 'Delts' },
  { id: 'bracos',             label: 'Braços',             icon: '💪', color: '#ED8936', abbr: 'Arms' },
  { id: 'core',               label: 'Core',               icon: '🎯', color: '#F6AD55', abbr: 'Core' },
]

// ─── Development timeline (weeks to first visible results / full dev) ─
export const TIMELINE = {
  'membros-inferiores': { beginner: [8, 24],  intermediate: [12, 36], advanced: [16, 52], note: 'Grupo mais volumoso — progresso consistente mas lento em avançados' },
  'costas':             { beginner: [8, 20],  intermediate: [12, 32], advanced: [16, 48], note: 'Resultado em largura vem antes que espessura — plano longo' },
  'peito':              { beginner: [6, 16],  intermediate: [10, 24], advanced: [14, 40], note: 'Porção superior exige atenção especial — inclua supino inclinado' },
  'ombros':             { beginner: [6, 14],  intermediate: [10, 20], advanced: [14, 36], note: 'Deltóide lateral responde bem a alta frequência' },
  'bracos':             { beginner: [5, 12],  intermediate: [8, 18],  advanced: [12, 30], note: 'Alta frequência acelera o resultado — 2–3x/semana' },
  'core':               { beginner: [4, 10],  intermediate: [6, 14],  advanced: [8, 20],  note: 'Definição depende do % de gordura — nutrição é o principal fator' },
}

// ─── Exercises per group (best for each day type) ─────────────────
export const KEY_EXERCISES = {
  'membros-inferiores': {
    quad:   ['Agachamento Livre', 'Leg Press 45°', 'Hack Squat', 'Cadeira Extensora'],
    post:   ['Terra Romeno (RDL)', 'Hip Thrust', 'Cadeira Flexora', 'Stiff'],
    calf:   ['Panturrilha em Pé', 'Panturrilha Sentada'],
  },
  'costas': {
    wide:   ['Barra Fixa Pronada', 'Pulldown Triângulo', 'Pulldown Larga'],
    thick:  ['Remada Curvada c/ Barra', 'Remada Unilateral', 'Remada Cavalinho'],
    health: ['Face Pull', 'Remada Alta Cabo'],
  },
  'peito': {
    upper:  ['Supino Inclinado Barra 30°', 'Supino Inclinado Halter', 'Crossover Baixo'],
    mid:    ['Supino Plano Barra', 'Supino Plano Halter', 'Peck Deck'],
    lower:  ['Supino Declinado', 'Mergulho (Dip)', 'Crossover Alto'],
  },
  'ombros': {
    press:  ['Desenvolvimento Arnold', 'Desenvolvimento Militar', 'Desenvolvimento Halter'],
    lateral:['Elevação Lateral Halter', 'Elevação Lateral Cabo', 'Elevação Lateral Máquina'],
    rear:   ['Crucifixo Inverso', 'Face Pull c/ Corda'],
  },
  'bracos': {
    biceps: ['Rosca Direta Barra EZ', 'Rosca Alternada Halter', 'Rosca Martelo'],
    triceps:['Tríceps Testa Barra EZ', 'Extensão por Cima Halter', 'Tríceps Pulley Corda'],
  },
  'core': {
    abs:    ['Abdominal Infra Cabo', 'Crunch Declinado', 'Elevação de Pernas'],
    oblique:['Russian Twist', 'Prancha Lateral', 'Crunch Oblíquo'],
    stab:   ['Prancha Isométrica', 'Vacuum', 'Dead Bug'],
  },
}

// ─── Split templates ────────────────────────────────────────────────
//  Each day: { name, focus: [{groupId, type, exercises: 2–3}] }
export function generateSplit(frequency, priorities, goal, duration) {
  const pri = priorities.length > 0 ? priorities : ['membros-inferiores', 'costas', 'peito']
  const exPerSession = duration <= 45 ? 4 : duration <= 60 ? 5 : duration <= 75 ? 6 : 7

  const splits = {
    3: buildSplit3(pri, exPerSession, goal),
    4: buildSplit4(pri, exPerSession, goal),
    5: buildSplit5(pri, exPerSession, goal),
    6: buildSplit6(pri, exPerSession, goal),
  }
  return splits[frequency] || splits[4]
}

function pickEx(groupId, type, n = 2) {
  const group = KEY_EXERCISES[groupId]
  if (!group) return []
  const arr = group[type] || Object.values(group).flat()
  return arr.slice(0, n)
}

function buildSplit3(pri, exPerDay) {
  return {
    name: 'Full Body A/B/C (3×/semana)',
    restDays: [3, 5, 6], // Wed, Sat, Sun
    days: [
      {
        dayIndex: 0, dayName: 'Segunda', label: 'Full Body A',
        color: '#E53E3E',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'upper', 2).concat(pickEx('peito', 'mid', 1)) },
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'wide', 2) },
          { groupId: 'core',   label: 'Core',   exercises: pickEx('core', 'abs', 2) },
        ],
      },
      {
        dayIndex: 1, dayName: 'Terça', label: 'Full Body B',
        color: '#48BB78',
        focus: [
          { groupId: 'membros-inferiores', label: 'Pernas (Quad)', exercises: pickEx('membros-inferiores', 'quad', 3) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'press', 1).concat(pickEx('ombros', 'lateral', 1)) },
          { groupId: 'bracos', label: 'Braços', exercises: pickEx('bracos', 'biceps', 1).concat(pickEx('bracos', 'triceps', 1)) },
        ],
      },
      {
        dayIndex: 3, dayName: 'Quinta', label: 'Full Body C',
        color: '#3182CE',
        focus: [
          { groupId: 'costas',             label: 'Costas (Espessura)', exercises: pickEx('costas', 'thick', 2).concat(pickEx('costas', 'health', 1)) },
          { groupId: 'membros-inferiores', label: 'Pernas (Post)',      exercises: pickEx('membros-inferiores', 'post', 2).concat(pickEx('membros-inferiores', 'calf', 1)) },
          { groupId: 'core',               label: 'Core',               exercises: pickEx('core', 'stab', 2) },
        ],
      },
    ],
  }
}

function buildSplit4(pri, exPerDay) {
  return {
    name: 'Upper A / Lower A / Upper B / Lower B (4×/semana)',
    restDays: [2, 5, 6],
    days: [
      {
        dayIndex: 0, dayName: 'Segunda', label: 'Upper A — Empurrar',
        color: '#E53E3E',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'upper', 2).concat(pickEx('peito', 'mid', 1)) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'press', 1).concat(pickEx('ombros', 'lateral', 1)) },
          { groupId: 'bracos', label: 'Tríceps', exercises: pickEx('bracos', 'triceps', 2) },
        ],
      },
      {
        dayIndex: 1, dayName: 'Terça', label: 'Lower A — Quad',
        color: '#48BB78',
        focus: [
          { groupId: 'membros-inferiores', label: 'Pernas (Quad)', exercises: pickEx('membros-inferiores', 'quad', 3).concat(pickEx('membros-inferiores', 'calf', 1)) },
          { groupId: 'core', label: 'Core', exercises: pickEx('core', 'abs', 2) },
        ],
      },
      {
        dayIndex: 3, dayName: 'Quinta', label: 'Upper B — Puxar',
        color: '#3182CE',
        focus: [
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'wide', 2).concat(pickEx('costas', 'thick', 1)) },
          { groupId: 'ombros', label: 'Post. Ombro', exercises: pickEx('ombros', 'rear', 1).concat(pickEx('ombros', 'lateral', 1)) },
          { groupId: 'bracos', label: 'Bíceps', exercises: pickEx('bracos', 'biceps', 2) },
        ],
      },
      {
        dayIndex: 4, dayName: 'Sexta', label: 'Lower B — Posterior',
        color: '#ED8936',
        focus: [
          { groupId: 'membros-inferiores', label: 'Pernas (Post)', exercises: pickEx('membros-inferiores', 'post', 3).concat(pickEx('membros-inferiores', 'calf', 1)) },
          { groupId: 'core', label: 'Core', exercises: pickEx('core', 'oblique', 2) },
        ],
      },
    ],
  }
}

function buildSplit5(pri, exPerDay) {
  return {
    name: 'Push / Pull / Legs / Upper / Arms (5×/semana)',
    restDays: [5, 6],
    days: [
      {
        dayIndex: 0, dayName: 'Segunda', label: 'Push — Peito + Ombros + Tríceps',
        color: '#E53E3E',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'upper', 2).concat(pickEx('peito', 'mid', 1)) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'press', 1).concat(pickEx('ombros', 'lateral', 1)) },
          { groupId: 'bracos', label: 'Tríceps', exercises: pickEx('bracos', 'triceps', 1) },
        ],
      },
      {
        dayIndex: 1, dayName: 'Terça', label: 'Pull — Costas + Bíceps',
        color: '#3182CE',
        focus: [
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'wide', 2).concat(pickEx('costas', 'thick', 2)) },
          { groupId: 'bracos', label: 'Bíceps', exercises: pickEx('bracos', 'biceps', 2) },
        ],
      },
      {
        dayIndex: 2, dayName: 'Quarta', label: 'Legs — Pernas Completas',
        color: '#48BB78',
        focus: [
          { groupId: 'membros-inferiores', label: 'Quad', exercises: pickEx('membros-inferiores', 'quad', 2) },
          { groupId: 'membros-inferiores', label: 'Post + Glúteo', exercises: pickEx('membros-inferiores', 'post', 2).concat(pickEx('membros-inferiores', 'calf', 1)) },
          { groupId: 'core', label: 'Core', exercises: pickEx('core', 'abs', 1).concat(pickEx('core', 'stab', 1)) },
        ],
      },
      {
        dayIndex: 3, dayName: 'Quinta', label: 'Upper — Peito + Costas',
        color: '#9F7AEA',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'mid', 1).concat(pickEx('peito', 'lower', 1)) },
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'thick', 2).concat(pickEx('costas', 'health', 1)) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'lateral', 1).concat(pickEx('ombros', 'rear', 1)) },
        ],
      },
      {
        dayIndex: 4, dayName: 'Sexta', label: 'Braços + Core',
        color: '#ED8936',
        focus: [
          { groupId: 'bracos', label: 'Bíceps',  exercises: pickEx('bracos', 'biceps', 2) },
          { groupId: 'bracos', label: 'Tríceps', exercises: pickEx('bracos', 'triceps', 2) },
          { groupId: 'core',   label: 'Core',    exercises: pickEx('core', 'oblique', 1).concat(pickEx('core', 'abs', 1)) },
        ],
      },
    ],
  }
}

function buildSplit6(pri, exPerDay) {
  return {
    name: 'Push / Pull / Legs × 2 (6×/semana)',
    restDays: [6],
    days: [
      {
        dayIndex: 0, dayName: 'Segunda', label: 'Push A — Volume',
        color: '#E53E3E',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'upper', 2).concat(pickEx('peito', 'mid', 1)) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'lateral', 2) },
          { groupId: 'bracos', label: 'Tríceps', exercises: pickEx('bracos', 'triceps', 2) },
        ],
      },
      {
        dayIndex: 1, dayName: 'Terça', label: 'Pull A — Volume',
        color: '#3182CE',
        focus: [
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'wide', 2).concat(pickEx('costas', 'thick', 1)) },
          { groupId: 'bracos', label: 'Bíceps', exercises: pickEx('bracos', 'biceps', 2) },
          { groupId: 'ombros', label: 'Post.', exercises: pickEx('ombros', 'rear', 1) },
        ],
      },
      {
        dayIndex: 2, dayName: 'Quarta', label: 'Legs A — Quad',
        color: '#48BB78',
        focus: [
          { groupId: 'membros-inferiores', label: 'Quad', exercises: pickEx('membros-inferiores', 'quad', 3) },
          { groupId: 'membros-inferiores', label: 'Panturrilha', exercises: pickEx('membros-inferiores', 'calf', 2) },
          { groupId: 'core', label: 'Core', exercises: pickEx('core', 'abs', 2) },
        ],
      },
      {
        dayIndex: 3, dayName: 'Quinta', label: 'Push B — Intensidade',
        color: '#E53E3E',
        focus: [
          { groupId: 'peito',  label: 'Peito',  exercises: pickEx('peito', 'mid', 1).concat(pickEx('peito', 'lower', 1)) },
          { groupId: 'ombros', label: 'Ombros', exercises: pickEx('ombros', 'press', 1).concat(pickEx('ombros', 'lateral', 1)) },
          { groupId: 'bracos', label: 'Tríceps', exercises: pickEx('bracos', 'triceps', 2) },
        ],
      },
      {
        dayIndex: 4, dayName: 'Sexta', label: 'Pull B — Intensidade',
        color: '#3182CE',
        focus: [
          { groupId: 'costas', label: 'Costas', exercises: pickEx('costas', 'thick', 2).concat(pickEx('costas', 'health', 1)) },
          { groupId: 'bracos', label: 'Bíceps', exercises: pickEx('bracos', 'biceps', 2) },
        ],
      },
      {
        dayIndex: 5, dayName: 'Sábado', label: 'Legs B — Posterior',
        color: '#48BB78',
        focus: [
          { groupId: 'membros-inferiores', label: 'Post + Glúteo', exercises: pickEx('membros-inferiores', 'post', 3) },
          { groupId: 'membros-inferiores', label: 'Panturrilha', exercises: pickEx('membros-inferiores', 'calf', 1) },
          { groupId: 'core', label: 'Core', exercises: pickEx('core', 'oblique', 1).concat(pickEx('core', 'stab', 1)) },
        ],
      },
    ],
  }
}

// ─── Weekly volume recommendations ────────────────────────────────
export function getWeeklyVolume(groupId, level, isPriority, goal) {
  const base = {
    'membros-inferiores': { beginner: 10, intermediate: 14, advanced: 18 },
    'costas':             { beginner: 10, intermediate: 14, advanced: 18 },
    'peito':              { beginner: 8,  intermediate: 12, advanced: 16 },
    'ombros':             { beginner: 10, intermediate: 16, advanced: 20 },
    'bracos':             { beginner: 8,  intermediate: 12, advanced: 16 },
    'core':               { beginner: 6,  intermediate: 10, advanced: 14 },
  }
  let sets = (base[groupId]?.[level]) ?? 12
  if (isPriority) sets = Math.round(sets * 1.25)
  if (goal === 'corte') sets = Math.round(sets * 0.85)
  if (goal === 'forca') sets = Math.round(sets * 0.75)
  return Math.min(sets, 26)
}

// ─── Mesociclo 12 weeks ────────────────────────────────────────────
export function getMesociclo(goal) {
  const base = [
    { weeks: '1–4',  phase: 'Acumulação — Volume',   icon: '📈', reps: '10–15', rir: '2–3', intensity: '65–75% 1RM', focus: 'Aprenda os movimentos e construa a base de volume. Aumente 1 série por semana nos principais exercícios.' },
    { weeks: '5–8',  phase: 'Intensificação',         icon: '🔥', reps: '6–10',  rir: '1–2', intensity: '75–85% 1RM', focus: 'Reduza volume, aumente carga. Cada sessão deve ser mais pesada que a semana anterior.' },
    { weeks: '9',    phase: 'Deload',                 icon: '🧘', reps: '12–15', rir: '4–5', intensity: '60–65% 1RM', focus: 'Volume e carga reduzidos para 50%. Recuperação ativa — mantenha frequência mas sem chegar perto da falha.' },
    { weeks: '10–12', phase: 'Realização — Pico',     icon: '🏆', reps: '4–8',   rir: '0–1', intensity: '85–95% 1RM', focus: 'Baixo volume, máxima intensidade. Bateu recordes pessoais aqui — depois recomeça o ciclo com carga maior.' },
  ]
  if (goal === 'corte') {
    base[0].reps = '12–20'; base[0].intensity = '55–70% 1RM'
    base[1].reps = '10–15'; base[1].intensity = '65–75% 1RM'
    base[2].focus = 'Deload metabólico. Substitua compostos por máquinas e cabos.'
    base[3].reps = '8–12';  base[3].intensity = '70–80% 1RM'
    base[3].phase = 'Manutenção de Massa'
    base[3].focus = 'Mantenha força e massa enquanto o déficit calórico faz o trabalho de definição.'
  }
  if (goal === 'forca') {
    base[0].reps = '5–8';   base[0].intensity = '75–82% 1RM'
    base[1].reps = '3–5';   base[1].intensity = '82–90% 1RM'
    base[3].reps = '1–3';   base[3].intensity = '90–100% 1RM'
    base[3].phase = 'Pico de Força — Teste 1RM'
  }
  return base
}
