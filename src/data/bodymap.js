// ─── Muscle group accent colors (matches muscles.js) ───────────────
export const GROUP_COLORS = {
  peito:             '#E53E3E',
  costas:            '#3182CE',
  ombros:            '#9F7AEA',
  bracos:            '#ED8936',
  'membros-inferiores': '#48BB78',
  core:              '#F6AD55',
}

// ─── Info displayed in the detail panel ────────────────────────────
export const GROUP_INFO = {
  peito: {
    label: 'Peito',
    icon: '🫁',
    headline: 'Peitoral Maior & Menor',
    keyPoints: [
      'Principal motor do empurrão horizontal e inclinado',
      'Desenvolvido com variação de ângulos (plano, inclinado, declinado)',
      'A inserção esternal cria a espessura; a clavicular, a "prateleira" superior',
      'Mind-muscle: imagine espremer uma bola entre os braços no ponto de contração',
    ],
    volumeBulk:  '12–20 séries semanais | 6–12 reps | RIR 1–2',
    volumeCut:   '8–14 séries semanais | 12–20 reps | RIR 0–1 | Drop-sets no fim',
    bestExercises: ['Supino Inclinado c/ Barra', 'Crossover Cabo', 'Crucifixo Inclinado'],
  },
  costas: {
    label: 'Costas',
    icon: '🔱',
    headline: 'Latíssimo, Trapézio & Romboides',
    keyPoints: [
      'Grupo mais volumoso do tronco — define largura e espessura',
      'Tracionar com o cotovelo, não com a mão',
      'Separe verticais (puxadas) de horizontais (remadas) no planejamento',
      'Retração escapular ativa os romboides e trapézio médio',
    ],
    volumeBulk:  '14–22 séries semanais | 6–12 reps | RIR 1–2',
    volumeCut:   '10–16 séries semanais | 10–15 reps | Supersets costas/bíceps',
    bestExercises: ['Barra Fixa', 'Remada Curvada', 'Pulldown Triângulo'],
  },
  ombros: {
    label: 'Ombros',
    icon: '🔥',
    headline: 'Deltoides Anterior, Lateral & Posterior',
    keyPoints: [
      'A porção lateral dá largura — priorize elevações laterais no volume',
      'Posterior frequentemente sub-treinado — inclua em todo treino de costas',
      'Anterior já é estimulado em peitorais — não exagere no frontal',
      'Cotovelo levemente acima do punho nas elevações para melhor ativação',
    ],
    volumeBulk:  '16–22 séries semanais | 10–20 reps | Alta frequência',
    volumeCut:   '12–18 séries semanais | 15–25 reps | Rest-pause para laterais',
    bestExercises: ['Desenvolvimento Arnold', 'Elevação Lateral com Cabo', 'Face Pull'],
  },
  bracos: {
    label: 'Braços',
    icon: '💪',
    headline: 'Bíceps, Tríceps & Braquial',
    keyPoints: [
      'Tríceps ocupa ⅔ do volume do braço — foque nele para braços grandes',
      'Bíceps responde bem a amplitude completa com supinação no topo',
      'Braquial (debaixo do bíceps) é o verdadeiro elevador do braço',
      'Alta frequência funciona bem — 2–3x por semana',
    ],
    volumeBulk:  '10–20 séries semanais p/ grupo | 8–15 reps',
    volumeCut:   '8–14 séries semanais | 12–20 reps | Supersets bíceps/tríceps',
    bestExercises: ['Rosca Direta', 'Tríceps Pulley', 'Rosca Martelo'],
  },
  'membros-inferiores': {
    label: 'Membros Inferiores',
    icon: '🦵',
    headline: 'Quadríceps, Isquiotibiais, Glúteos & Panturrilha',
    keyPoints: [
      'Grupo mais volumoso — maior potencial de hipertrofia e impacto metabólico',
      'Separar estímulo de quad-dominante (agachamento) de posterior (terra)',
      'Glúteos precisam de abdução E extensão de quadril — faça ambos',
      'Panturrilha responde a alto volume e alta frequência',
    ],
    volumeBulk:  '12–20 séries semanais por subgrupo | 6–15 reps',
    volumeCut:   '10–16 séries | Mais unilaterais, finisher de panturrilha alto rep',
    bestExercises: ['Agachamento Livre', 'Levantamento Terra Romeno', 'Leg Press'],
  },
  core: {
    label: 'Core',
    icon: '🎯',
    headline: 'Reto Abdominal, Oblíquos & Transverso',
    keyPoints: [
      'Core forte = transferência de força em todos os compostos',
      'Transverso (profundo) protege a lombar — treine com vacuum e prancha',
      'Oblíquos criam o "cintura" em palco — treine com rotações e declinados',
      'Não negligenciar: abdominal fraco limita agachamento e terra',
    ],
    volumeBulk:  '6–16 séries semanais | Misto de força e resistência',
    volumeCut:   '10–20 séries | Alta frequência, supersets, circuitos',
    bestExercises: ['Abdominal Infra com Cabo', 'Prancha com Rotação', 'Russian Twist'],
  },
}

// ─── SVG paths — FRONT VIEW ────────────────────────────────────────
// ViewBox: 0 0 200 440

export const FRONT_REGIONS = [
  // Ombros (deltoides)
  {
    id: 'ombros',
    paths: [
      // Left deltoid
      'M82,62 C70,54 50,62 48,80 C46,96 56,108 74,106 L84,90 L88,68 Z',
      // Right deltoid
      'M118,62 C130,54 150,62 152,80 C154,96 144,108 126,106 L116,90 L112,68 Z',
    ],
    labelPos: { x: 100, y: 76 },
  },
  // Peito
  {
    id: 'peito',
    paths: [
      // Left pec
      'M88,68 L100,64 L100,114 L72,118 C60,112 56,98 62,86 L74,78 Z',
      // Right pec
      'M112,68 L100,64 L100,114 L128,118 C140,112 144,98 138,86 L126,78 Z',
    ],
    labelPos: { x: 100, y: 94 },
  },
  // Braços — biceps
  {
    id: 'bracos',
    paths: [
      // Left bicep
      'M48,84 C42,100 40,118 42,132 C44,144 54,152 66,150 L74,134 L84,90 L74,106 C56,108 46,96 48,84 Z',
      // Right bicep
      'M152,84 C158,100 160,118 158,132 C156,144 146,152 134,150 L126,134 L116,90 L126,106 C144,108 154,96 152,84 Z',
      // Left forearm
      'M42,136 C38,156 36,174 38,192 C40,206 50,212 62,208 L70,190 L74,138 Z',
      // Right forearm
      'M158,136 C162,156 164,174 162,192 C160,206 150,212 138,208 L130,190 L126,138 Z',
    ],
    labelPos: { x: 44, y: 164 },
  },
  // Core — abs + obliques
  {
    id: 'core',
    paths: [
      // Abs
      'M72,118 L128,118 L128,178 L72,178 Z',
      // Obliques/Hips
      'M68,178 L132,178 L136,208 L64,208 Z',
    ],
    labelPos: { x: 100, y: 152 },
  },
  // Membros inferiores — quads + calves
  {
    id: 'membros-inferiores',
    paths: [
      // Left quad
      'M64,208 L52,304 L84,306 L98,208 Z',
      // Right quad
      'M136,208 L148,304 L116,306 L102,208 Z',
      // Left calf
      'M52,310 L48,394 L80,394 L84,310 Z',
      // Right calf
      'M148,310 L152,394 L120,394 L116,310 Z',
    ],
    labelPos: { x: 100, y: 340 },
  },
]

// ─── SVG paths — BACK VIEW ─────────────────────────────────────────

export const BACK_REGIONS = [
  // Ombros (rear delts)
  {
    id: 'ombros',
    paths: [
      'M82,62 C70,54 50,62 48,80 C46,96 56,108 74,106 L80,92 L84,70 Z',
      'M118,62 C130,54 150,62 152,80 C154,96 144,108 126,106 L120,92 L116,70 Z',
    ],
    labelPos: { x: 100, y: 76 },
  },
  // Costas (traps + lats + rhomboids)
  {
    id: 'costas',
    paths: [
      // Upper traps
      'M84,66 L100,62 L116,66 L120,90 L100,96 L80,90 Z',
      // Left lat
      'M72,104 L68,178 L64,208 L52,170 L44,130 L54,104 Z',
      // Right lat
      'M128,104 L132,178 L136,208 L148,170 L156,130 L146,104 Z',
      // Mid back (rhomboids)
      'M80,90 L120,90 L126,160 L74,160 Z',
    ],
    labelPos: { x: 100, y: 132 },
  },
  // Braços — triceps + forearms (back view)
  {
    id: 'bracos',
    paths: [
      // Left tricep (back of upper arm)
      'M48,84 C42,100 40,118 42,132 C44,144 54,152 66,150 L72,132 L72,104 C56,108 46,96 48,84 Z',
      // Right tricep
      'M152,84 C158,100 160,118 158,132 C156,144 146,152 134,150 L128,132 L128,104 C144,108 154,96 152,84 Z',
      // Left forearm
      'M42,136 C38,156 36,174 38,192 C40,206 50,212 62,208 L70,190 L72,138 Z',
      // Right forearm
      'M158,136 C162,156 164,174 162,192 C160,206 150,212 138,208 L130,190 L128,138 Z',
    ],
    labelPos: { x: 44, y: 164 },
  },
  // Membros inferiores — glutes + hamstrings + calves (back view)
  {
    id: 'membros-inferiores',
    paths: [
      // Left glute
      'M64,208 L66,244 L100,250 L100,208 Z',
      // Right glute
      'M136,208 L134,244 L100,250 L100,208 Z',
      // Left hamstring
      'M66,248 L52,304 L84,306 L100,252 Z',
      // Right hamstring
      'M134,248 L148,304 L116,306 L100,252 Z',
      // Left calf
      'M52,310 L48,394 L80,394 L84,310 Z',
      // Right calf
      'M148,310 L152,394 L120,394 L116,310 Z',
    ],
    labelPos: { x: 100, y: 340 },
  },
  // Core — lower back (back view shows erectors)
  {
    id: 'core',
    paths: [
      'M82,160 L118,160 L120,210 L80,210 Z',
    ],
    labelPos: { x: 100, y: 186 },
  },
]

// ─── Body silhouette paths ──────────────────────────────────────────
export const BODY_SILHOUETTE = {
  front: `
    M 100,4
    C 120,4 116,50 116,68
    L 152,80 L 158,140 L 162,200 L 136,208 L 148,310 L 152,400 L 120,400
    L 116,310 L 104,210 L 96,210 L 84,310 L 80,400 L 48,400 L 52,310
    L 64,208 L 38,200 L 42,140 L 48,80 L 84,68
    C 84,50 80,4 100,4 Z
  `,
  back: `
    M 100,4
    C 120,4 116,50 116,68
    L 152,80 L 158,140 L 162,200 L 136,208 L 148,310 L 152,400 L 120,400
    L 116,310 L 104,250 L 96,250 L 84,310 L 80,400 L 48,400 L 52,310
    L 64,208 L 38,200 L 42,140 L 48,80 L 84,68
    C 84,50 80,4 100,4 Z
  `,
}
