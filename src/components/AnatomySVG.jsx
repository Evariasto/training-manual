import React from 'react'

const C = {
  bg:       '#0D0D0D',
  body:     '#2A1A0E',   // dark warm brown — body base
  bodyStr:  '#180E06',
  skin:     '#C4956A',   // skin tone — muscle surfaces
  skinDark: '#3A2010',   // muscle definition borders
  skinMid:  '#8B5E38',   // mid-tone for muscle valleys
  pri:      '#E53E3E',
  sec:      '#C05050',
  sup:      '#7A4A44',
  lbl:      '#C8C8E8',
  lead:     '#5858A0',
  arr:      '#DD8B20',
}

// ─── Separate body-part paths for a proper athletic silhouette ────
// These are rendered as the dark body base BEFORE muscles.
// Using different segments prevents the blobby single-path look.
const SEGMENT = {
  head:  null, // rendered as <ellipse>
  neck:  'M91,44 C89,52 89,63 91,68 L109,68 C111,63 111,52 109,44 Z',
  // Torso: wide at shoulders (y≈70), narrowing to waist (y≈195)
  torso: 'M44,74 C36,92 34,126 36,162 C38,182 42,200 44,214 L156,214 C158,200 162,182 164,162 C166,126 164,92 156,74 Z',
  // Arms: full arm including shoulder cap area
  arm_l: 'M46,68 C32,72 18,94 16,120 C14,148 22,172 34,188 C40,198 54,204 68,200 C80,196 86,184 84,166 C82,144 76,114 68,90 C64,78 56,66 46,68 Z',
  arm_r: 'M154,68 C168,72 182,94 184,120 C186,148 178,172 166,188 C160,198 146,204 132,200 C120,196 114,184 116,166 C118,144 124,114 132,90 C136,78 144,66 154,68 Z',
  // Legs: separate paths, slight gap between them
  leg_l: 'M44,212 C36,234 30,268 30,306 C30,338 34,370 36,392 C38,406 50,414 70,412 C86,410 94,398 92,380 C90,354 88,322 88,304 C88,270 84,234 76,212 Z',
  leg_r: 'M156,212 C164,234 170,268 170,306 C170,338 166,370 164,392 C162,406 150,414 130,412 C114,410 106,398 108,380 C110,354 112,322 112,304 C112,270 116,234 124,212 Z',
}

// ─── Muscle paths — organic curves per muscle group ───────────────
const P = {
  // ── FRONT ────────────────────────────────────────────────────
  pec_upper_l: 'M100,70 C90,66 76,70 68,80 C62,88 64,98 76,100 C86,101 96,95 100,86 Z',
  pec_upper_r: 'M100,70 C110,66 124,70 132,80 C138,88 136,98 124,100 C114,101 104,95 100,86 Z',
  pec_lower_l: 'M100,84 C84,90 66,100 62,114 C58,126 64,138 80,142 C92,145 100,138 100,124 Z',
  pec_lower_r: 'M100,84 C116,90 134,100 138,114 C142,126 136,138 120,142 C108,145 100,138 100,124 Z',

  delt_ant_l:  'M84,66 C68,58 46,68 42,86 C38,102 48,116 68,114 C80,113 88,102 88,88 C88,78 87,70 84,66 Z',
  delt_ant_r:  'M116,66 C132,58 154,68 158,86 C162,102 152,116 132,114 C120,113 112,102 112,88 C112,78 113,70 116,66 Z',
  delt_lat_l:  'M50,74 C36,80 26,102 30,120 C34,134 50,140 66,132 C76,126 80,114 76,98 C72,84 62,70 50,74 Z',
  delt_lat_r:  'M150,74 C164,80 174,102 170,120 C166,134 150,140 134,132 C124,126 120,114 124,98 C128,84 138,70 150,74 Z',

  bicep_l:     'M76,112 C58,116 42,128 40,146 C38,162 46,174 60,174 C72,174 82,164 82,150 C82,136 82,118 76,112 Z',
  bicep_r:     'M124,112 C142,116 158,128 160,146 C162,162 154,174 140,174 C128,174 118,164 118,150 C118,136 118,118 124,112 Z',
  forearm_l:   'M40,142 C34,160 32,180 34,198 C36,212 46,220 60,216 C70,214 76,202 74,184 C72,166 68,146 60,140 Z',
  forearm_r:   'M160,142 C166,160 168,180 166,198 C164,212 154,220 140,216 C130,214 124,202 126,184 C128,166 132,146 140,140 Z',
  brachial_l:  'M48,120 C40,138 36,158 38,176 C40,190 50,198 64,194 C74,191 80,180 78,162 C76,146 70,126 62,118 Z',
  brachial_r:  'M152,120 C160,138 164,158 162,176 C160,190 150,198 136,194 C126,191 120,180 122,162 C124,146 130,126 138,118 Z',

  abs_u:       'M84,124 C84,128 84,138 84,142 L116,142 C116,138 116,128 116,124 Z',
  abs_m:       'M82,146 L82,164 L118,164 L118,146 Z',
  abs_l:       'M82,168 L82,184 L118,184 L118,168 Z',
  obliq_l:     'M62,124 C56,138 54,160 58,180 C60,192 70,200 82,196 L82,124 Z',
  obliq_r:     'M138,124 C144,138 146,160 142,180 C140,192 130,200 118,196 L118,124 Z',
  obliq_lo_l:  'M62,184 C58,196 60,212 68,218 L84,214 L80,184 Z',
  obliq_lo_r:  'M138,184 C142,196 140,212 132,218 L116,214 L120,184 Z',

  quad_l:      'M66,214 C56,234 50,266 50,298 C50,310 58,316 72,316 C84,316 92,308 92,296 C92,266 90,234 84,214 Z',
  quad_r:      'M134,214 C144,234 150,266 150,298 C150,310 142,316 128,316 C116,316 108,308 108,296 C108,266 110,234 116,214 Z',
  quad_vm_l:   'M84,292 C80,298 80,312 88,320 C94,324 102,322 104,314 C106,306 102,298 96,294 Z',
  quad_vm_r:   'M116,292 C120,298 120,312 112,320 C106,324 98,322 96,314 C94,306 98,298 104,294 Z',
  adduct_l:    'M88,216 C92,234 96,266 96,296 C96,310 92,316 86,314 C80,312 78,302 80,284 C82,258 84,232 88,216 Z',
  adduct_r:    'M112,216 C108,234 104,266 104,296 C104,310 108,316 114,314 C120,312 122,302 120,284 C118,258 116,232 112,216 Z',
  tibial_l:    'M50,320 C44,340 42,366 44,386 C46,398 56,404 70,402 C80,400 84,390 82,374 C80,354 76,326 70,318 Z',
  tibial_r:    'M150,320 C156,340 158,366 156,386 C154,398 144,404 130,402 C120,400 116,390 118,374 C120,354 124,326 130,318 Z',

  // ── BACK ────────────────────────────────────────────────────
  trap_up_l:   'M100,70 C90,68 76,72 70,82 C66,90 70,100 82,102 C90,103 98,98 100,88 Z',
  trap_up_r:   'M100,70 C110,68 124,72 130,82 C134,90 130,100 118,102 C110,103 102,98 100,88 Z',
  trap_mid:    'M82,102 C74,110 72,130 74,154 C76,164 86,168 100,166 C114,168 124,164 126,154 C128,130 126,110 118,102 L100,110 Z',
  rear_delt_l: 'M84,70 C68,62 46,72 42,90 C38,106 48,120 68,118 C80,116 90,106 90,92 C90,82 87,74 84,70 Z',
  rear_delt_r: 'M116,70 C132,62 154,72 158,90 C162,106 152,120 132,118 C120,116 110,106 110,92 C110,82 113,74 116,70 Z',
  lat_l:       'M72,114 C56,124 42,144 40,168 C38,186 46,202 62,208 C74,212 84,206 86,190 C88,172 86,148 78,118 Z',
  lat_r:       'M128,114 C144,124 158,144 160,168 C162,186 154,202 138,208 C126,212 116,206 114,190 C112,172 114,148 122,118 Z',
  rhomboid:    'M84,102 C78,108 76,122 78,138 C80,150 90,156 100,154 C110,156 120,150 122,138 C124,122 122,108 116,102 L100,110 Z',
  erector_l:   'M82,164 C80,176 80,194 82,212 C84,220 90,224 96,220 L100,214 L100,164 Z',
  erector_r:   'M118,164 C120,176 120,194 118,212 C116,220 110,224 104,220 L100,214 L100,164 Z',
  tricep_l:    'M72,116 C56,124 40,138 38,158 C36,174 44,188 60,190 C72,191 84,182 86,164 C88,148 84,128 72,116 Z',
  tricep_r:    'M128,116 C144,124 160,138 162,158 C164,174 156,188 140,190 C128,191 116,182 114,164 C112,148 116,128 128,116 Z',
  glute_l:     'M66,214 C56,226 52,246 56,266 C60,280 74,288 92,286 L100,283 L100,214 Z',
  glute_r:     'M134,214 C144,226 148,246 144,266 C140,280 126,288 108,286 L100,283 L100,214 Z',
  ham_l:       'M64,274 C56,292 52,312 54,330 C56,344 68,350 82,346 C94,342 100,330 100,310 L100,274 Z',
  ham_r:       'M136,274 C144,292 148,312 146,330 C144,344 132,350 118,346 C106,342 100,330 100,310 L100,274 Z',
  calf_b_l:    'M54,322 C46,342 42,368 46,390 C48,404 60,410 76,408 C88,406 94,396 92,378 C90,356 82,328 72,320 Z',
  calf_b_r:    'M146,322 C154,342 158,368 154,390 C152,404 140,410 124,408 C112,406 106,396 108,378 C110,356 118,328 128,320 Z',
}

// ─── Muscle-to-view mapping ───────────────────────────────────────
const MV = {
  pec_upper_l:'front', pec_upper_r:'front',
  pec_lower_l:'front', pec_lower_r:'front',
  delt_ant_l:'front',  delt_ant_r:'front',
  delt_lat_l:'front',  delt_lat_r:'front',
  bicep_l:'front',     bicep_r:'front',
  forearm_l:'front',   forearm_r:'front',
  brachial_l:'front',  brachial_r:'front',
  abs_u:'front',       abs_m:'front',       abs_l:'front',
  obliq_l:'front',     obliq_r:'front',
  obliq_lo_l:'front',  obliq_lo_r:'front',
  quad_l:'front',      quad_r:'front',
  quad_vm_l:'front',   quad_vm_r:'front',
  adduct_l:'front',    adduct_r:'front',
  tibial_l:'front',    tibial_r:'front',
  trap_up_l:'back',    trap_up_r:'back',
  trap_mid:'back',
  rear_delt_l:'back',  rear_delt_r:'back',
  lat_l:'back',        lat_r:'back',
  rhomboid:'back',
  erector_l:'back',    erector_r:'back',
  tricep_l:'back',     tricep_r:'back',
  glute_l:'back',      glute_r:'back',
  ham_l:'back',        ham_r:'back',
  calf_b_l:'back',     calf_b_r:'back',
}

const CFG = {
  'peitoral-clavicular': {
    view: 'front',
    primary:   ['pec_upper_l','pec_upper_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   ['pec_lower_l','pec_lower_r'],
    arrow: { d:'M144,72 C154,60 166,62 170,76 C173,88 168,100 158,104', double:false },
    labels: [
      { x:4,   y:79,  text:'Peitoral Clavicular', anchor:'start', dot:{cx:78,cy:83} },
      { x:4,   y:94,  text:'Deltóide Ant.',        anchor:'start', dot:{cx:62,cy:92} },
    ],
  },
  'peitoral-esternal': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['delt_ant_l','delt_ant_r','bicep_l','bicep_r'],
    support:   ['pec_upper_l','pec_upper_r'],
    arrow: { d:'M28,118 C16,108 14,96 24,88', double:false },
    labels: [
      { x:196, y:118, text:'Peitoral Esternal', anchor:'end', dot:{cx:124,cy:120} },
      { x:196, y:88,  text:'Deltóide Ant.',     anchor:'end', dot:{cx:134,cy:88} },
    ],
  },
  'peitoral-menor': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:4, y:120, text:'Peitoral Menor', anchor:'start', dot:{cx:74,cy:120} },
      { x:4, y:86,  text:'Peitoral Maior', anchor:'start', dot:{cx:74,cy:86} },
    ],
  },
  'latissimo': {
    view: 'back',
    primary:   ['lat_l','lat_r'],
    secondary: ['tricep_l','tricep_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid','rear_delt_l','rear_delt_r'],
    arrow: { d:'M36,150 C24,134 24,116 36,102', double:false },
    labels: [
      { x:4,   y:164, text:'Latíssimo do Dorso', anchor:'start', dot:{cx:56,cy:162} },
      { x:196, y:136, text:'Tríceps (sec.)',      anchor:'end',   dot:{cx:140,cy:134} },
    ],
  },
  'trapezio': {
    view: 'back',
    primary:   ['trap_up_l','trap_up_r','trap_mid'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   ['lat_l','lat_r','rhomboid'],
    arrow: { d:'M164,84 C174,72 174,58 164,52', double:false },
    labels: [
      { x:4, y:84,  text:'Trapézio Superior', anchor:'start', dot:{cx:82,cy:84} },
      { x:4, y:128, text:'Trapézio Médio',    anchor:'start', dot:{cx:80,cy:124} },
    ],
  },
  'romboides': {
    view: 'back',
    primary:   ['rhomboid'],
    secondary: ['lat_l','lat_r','rear_delt_l','rear_delt_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid'],
    arrow: { d:'M32,124 C20,118 18,106 28,100', double:false },
    labels: [
      { x:100, y:66,  text:'Romboides', anchor:'middle', dot:{cx:100,cy:96} },
      { x:4,   y:162, text:'Latíssimo', anchor:'start',  dot:{cx:56,cy:162} },
    ],
  },
  'deltoide-anterior': {
    view: 'front',
    primary:   ['delt_ant_l','delt_ant_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   ['bicep_l','bicep_r'],
    arrow: { d:'M28,90 C16,76 16,60 28,52', double:false },
    labels: [
      { x:4,   y:90, text:'Deltóide Anterior', anchor:'start', dot:{cx:60,cy:90} },
      { x:196, y:86, text:'Peitoral Clav.',    anchor:'end',   dot:{cx:122,cy:84} },
    ],
  },
  'deltoide-lateral': {
    view: 'front',
    primary:   ['delt_lat_l','delt_lat_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   [],
    arrow: { d:'M22,106 C10,90 10,74 22,62', double:false },
    labels: [
      { x:4, y:102, text:'Deltóide Lateral', anchor:'start', dot:{cx:46,cy:102} },
      { x:4, y:76,  text:'Deltóide Ant.',    anchor:'start', dot:{cx:62,cy:80} },
    ],
  },
  'deltoide-posterior': {
    view: 'back',
    primary:   ['rear_delt_l','rear_delt_r'],
    secondary: ['rhomboid','trap_up_l','trap_up_r'],
    support:   ['lat_l','lat_r'],
    arrow: { d:'M32,94 C20,82 18,68 28,60', double:false },
    labels: [
      { x:4, y:90,  text:'Deltóide Posterior', anchor:'start', dot:{cx:58,cy:92} },
      { x:4, y:122, text:'Romboides',           anchor:'start', dot:{cx:80,cy:122} },
    ],
  },
  'biceps': {
    view: 'front',
    primary:   ['bicep_l','bicep_r'],
    secondary: ['forearm_l','forearm_r'],
    support:   ['brachial_l','brachial_r'],
    arrow: { d:'M32,166 C20,150 20,130 32,114', double:true },
    labels: [
      { x:4, y:128, text:'Bíceps Braquial', anchor:'start', dot:{cx:50,cy:128} },
      { x:4, y:184, text:'Antebraço',       anchor:'start', dot:{cx:42,cy:182} },
    ],
  },
  'triceps': {
    view: 'back',
    primary:   ['tricep_l','tricep_r'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   [],
    arrow: { d:'M32,120 C20,140 20,162 32,178', double:true },
    labels: [
      { x:4, y:124, text:'Tríceps Braquial', anchor:'start', dot:{cx:52,cy:124} },
      { x:4, y:92,  text:'Deltóide Post.',   anchor:'start', dot:{cx:62,cy:94} },
    ],
  },
  'braquial': {
    view: 'front',
    primary:   ['brachial_l','brachial_r'],
    secondary: ['bicep_l','bicep_r'],
    support:   ['forearm_l','forearm_r'],
    arrow: { d:'M32,166 C20,150 20,132 32,118', double:true },
    labels: [
      { x:4, y:162, text:'Braquial',     anchor:'start', dot:{cx:46,cy:160} },
      { x:4, y:124, text:'Bíceps (sec.)',anchor:'start', dot:{cx:52,cy:124} },
    ],
  },
  'quadriceps': {
    view: 'front',
    primary:   ['quad_l','quad_r','quad_vm_l','quad_vm_r'],
    secondary: ['adduct_l','adduct_r'],
    support:   ['tibial_l','tibial_r'],
    arrow: { d:'M164,294 L164,222', double:true },
    labels: [
      { x:4, y:266, text:'Quadríceps Femoral', anchor:'start', dot:{cx:60,cy:264} },
      { x:4, y:308, text:'Vasto Medial',       anchor:'start', dot:{cx:82,cy:306} },
    ],
  },
  'isquiotibiais': {
    view: 'back',
    primary:   ['ham_l','ham_r'],
    secondary: ['glute_l','glute_r','calf_b_l','calf_b_r'],
    support:   [],
    arrow: { d:'M32,286 C20,266 20,244 32,226', double:false },
    labels: [
      { x:4,   y:284, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:284} },
      { x:100, y:224, text:'Glúteo',        anchor:'middle', dot:{cx:100,cy:242} },
    ],
  },
  'gluteos': {
    view: 'back',
    primary:   ['glute_l','glute_r'],
    secondary: ['ham_l','ham_r'],
    support:   ['erector_l','erector_r'],
    arrow: { d:'M168,254 C180,234 180,212 168,198', double:false },
    labels: [
      { x:100, y:228, text:'Glúteo Máximo', anchor:'middle', dot:{cx:100,cy:246} },
      { x:4,   y:286, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:286} },
    ],
  },
  'panturrilha': {
    view: 'back',
    primary:   ['calf_b_l','calf_b_r'],
    secondary: ['ham_l','ham_r'],
    support:   [],
    arrow: { d:'M168,384 C180,360 180,334 168,314', double:false },
    labels: [
      { x:4,   y:366, text:'Gastrocnêmio', anchor:'start', dot:{cx:58,cy:364} },
      { x:196, y:398, text:'Sóleo',        anchor:'end',   dot:{cx:140,cy:396} },
    ],
  },
  'adutores': {
    view: 'front',
    primary:   ['adduct_l','adduct_r'],
    secondary: ['quad_l','quad_r'],
    support:   [],
    arrow: { d:'M84,264 C72,254 68,240 76,230', double:false },
    labels: [
      { x:100, y:204, text:'Adutores da Coxa', anchor:'middle', dot:{cx:100,cy:220} },
      { x:4,   y:270, text:'Quadríceps',       anchor:'start',  dot:{cx:62,cy:268} },
    ],
  },
  'reto-abdominal': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l'],
    secondary: ['obliq_l','obliq_r'],
    support:   [],
    arrow: { d:'M126,154 C140,148 146,138 140,130', double:false },
    labels: [
      { x:196, y:138, text:'Reto Abdominal', anchor:'end', dot:{cx:116,cy:136} },
      { x:196, y:178, text:'Oblíquos',       anchor:'end', dot:{cx:118,cy:178} },
    ],
  },
  'obliquos': {
    view: 'front',
    primary:   ['obliq_l','obliq_r','obliq_lo_l','obliq_lo_r'],
    secondary: ['abs_u','abs_m','abs_l'],
    support:   [],
    arrow: null,
    labels: [
      { x:4,   y:162, text:'Oblíquos',       anchor:'start', dot:{cx:60,cy:162} },
      { x:196, y:154, text:'Reto Abdominal', anchor:'end',   dot:{cx:116,cy:154} },
    ],
  },
  'transverso': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l','obliq_l','obliq_r'],
    secondary: ['obliq_lo_l','obliq_lo_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:100, y:202, text:'Core Profundo',  anchor:'middle', dot:null },
      { x:196, y:154, text:'Reto Abdominal', anchor:'end',    dot:{cx:116,cy:154} },
    ],
  },
}

// ─── Component ────────────────────────────────────────────────────
export default function AnatomySVG({ muscleId, className }) {
  const cfg          = CFG[muscleId]
  const view         = cfg?.view || 'front'
  const baseMuscles  = Object.keys(MV).filter(k => MV[k] === view)
  const highlighted  = new Set([
    ...(cfg?.primary   || []),
    ...(cfg?.secondary || []),
    ...(cfg?.support   || []),
  ])
  const showAbsGrid  = highlighted.has('abs_u') || highlighted.has('abs_m') || highlighted.has('abs_l')

  return (
    <svg viewBox="0 0 200 420" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        {/* Gradient for primary muscle highlight — gives 3-D pop */}
        <radialGradient id="gradPri" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#FF6B6B" stopOpacity="1" />
          <stop offset="100%" stopColor="#B02020" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="gradSec" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#D06060" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B2E2E" stopOpacity="1" />
        </radialGradient>
        {/* Subtle skin-tone gradient for base muscles */}
        <radialGradient id="gradSkin" cx="50%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#D4A070" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5A30" stopOpacity="1" />
        </radialGradient>
        {/* Movement arrow markers */}
        <marker id="arrEnd" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr} />
        </marker>
        <marker id="arrStart" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr} />
        </marker>
        {/* Glow for primary muscles */}
        <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* Soft shadow under body segments */}
        <filter id="shadow" x="-10%" y="-5%" width="120%" height="120%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* ── Background ───────────────────────────────────────── */}
      <rect width="200" height="420" fill={C.bg} />

      {/* ── Body segments (dark warm base) ───────────────────── */}
      {/* Torso */}
      <path d={SEGMENT.torso} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)" />
      {/* Arms */}
      <path d={SEGMENT.arm_l} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)" />
      <path d={SEGMENT.arm_r} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)" />
      {/* Legs */}
      <path d={SEGMENT.leg_l} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)" />
      <path d={SEGMENT.leg_r} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)" />
      {/* Head */}
      <ellipse cx="100" cy="24" rx="19" ry="21" fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" />
      {/* Neck */}
      <path d={SEGMENT.neck} fill={C.body} stroke={C.bodyStr} strokeWidth="0.6" />

      {/* ── Base muscle layer — all in skin tone ─────────────── */}
      {/* Non-highlighted: skin gradient + dark definition border */}
      {baseMuscles.filter(k => !highlighted.has(k)).map(k => (
        <path key={`b-${k}`} d={P[k]}
          fill="url(#gradSkin)"
          fillOpacity="0.55"
          stroke={C.skinDark}
          strokeWidth="0.7"
          strokeOpacity="0.65"
        />
      ))}

      {/* ── Highlighted muscles ───────────────────────────────── */}
      {cfg ? (
        <>
          {cfg.support?.map((k,i) => P[k] && (
            <path key={`s${i}`} d={P[k]}
              fill={C.sup} fillOpacity="0.75"
              stroke={C.skinDark} strokeWidth="0.6"
            />
          ))}
          {cfg.secondary?.map((k,i) => P[k] && (
            <path key={`e${i}`} d={P[k]}
              fill="url(#gradSec)" fillOpacity="0.88"
              stroke="#6B1A1A" strokeWidth="0.5"
            />
          ))}
          {cfg.primary?.map((k,i) => P[k] && (
            <path key={`p${i}`} d={P[k]}
              fill="url(#gradPri)" fillOpacity="0.96"
              stroke="#8B1A1A" strokeWidth="0.6"
              filter="url(#glow)"
            />
          ))}

          {/* Abs grid dividers */}
          {showAbsGrid && (
            <g stroke="#180E06" strokeWidth="1.4" opacity="0.8">
              <line x1="100" y1="124" x2="100" y2="184" />
              <line x1="82"  y1="144" x2="118" y2="144" />
              <line x1="82"  y1="166" x2="118" y2="166" />
            </g>
          )}

          {/* Pec center groove (visible when either pec is highlighted) */}
          {(highlighted.has('pec_lower_l') || highlighted.has('pec_upper_l')) && (
            <line x1="100" y1="70" x2="100" y2="144" stroke="#180E06" strokeWidth="1.2" opacity="0.6" />
          )}

          {/* Movement arrow */}
          {cfg.arrow && (
            <path
              d={cfg.arrow.d}
              stroke={C.arr} strokeWidth="2.2" fill="none" strokeLinecap="round"
              markerEnd="url(#arrEnd)"
              markerStart={cfg.arrow.double ? 'url(#arrStart)' : undefined}
              opacity="0.88"
            />
          )}

          {/* Labels with leader lines */}
          {cfg.labels?.map((lbl, i) => {
            const isLeft  = lbl.anchor === 'start'
            const tw      = lbl.text.length * 4.6
            const lineEndX = isLeft ? lbl.x + tw + 2 : lbl.x - tw - 2
            return (
              <g key={`l${i}`}>
                {lbl.dot && (
                  <>
                    <line
                      x1={lineEndX} y1={lbl.y - 2}
                      x2={lbl.dot.cx} y2={lbl.dot.cy}
                      stroke={C.lead} strokeWidth="0.8" strokeDasharray="3 2"
                    />
                    <circle cx={lbl.dot.cx} cy={lbl.dot.cy} r="2.2" fill={C.lead} />
                  </>
                )}
                <text
                  x={lbl.x} y={lbl.y}
                  textAnchor={lbl.anchor}
                  fill={C.lbl} fontSize="8.5" fontWeight="700"
                  fontFamily="system-ui,-apple-system,BlinkMacSystemFont,sans-serif"
                >
                  {lbl.text}
                </text>
              </g>
            )
          })}
        </>
      ) : (
        <text x="100" y="220" textAnchor="middle" fill="#444" fontSize="11"
          fontFamily="system-ui,sans-serif">Ilustração em breve</text>
      )}
    </svg>
  )
}
