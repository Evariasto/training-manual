import React from 'react'

const C = {
  bg:      '#0D0D0D',
  body:    '#2A1A0E',
  bodyStr: '#180E06',
  skin:    '#C4956A',
  skinDk:  '#3A2010',
  pri:     '#E53E3E',
  sec:     '#C05050',
  sup:     '#7A4A44',
  def:     '#1A0E06',   // muscle definition / groove lines
  lbl:     '#C8C8E8',
  lead:    '#5858A0',
  arr:     '#DD8B20',
}

// ─── Body segments — wide, muscular athletic proportions ──────────
// Shoulder span: x 28–172 (144 px). Arms held slightly out.
// viewBox 0 0 200 420
const SEG = {
  head:  null,
  neck:  'M91,40 C88,50 88,62 92,66 L108,66 C112,62 112,50 109,40 Z',
  torso: `M28,68
    C18,92 14,132 16,172
    C18,194 30,214 60,222
    L140,222
    C170,214 182,194 184,172
    C186,132 182,92 172,68 Z`,
  arm_l: `M28,68
    C14,72 0,98 0,126
    C0,156 6,180 18,200
    C24,212 38,220 56,216
    C70,212 76,198 74,178
    C72,154 64,120 54,94
    C48,78 38,64 28,68 Z`,
  arm_r: `M172,68
    C186,72 200,98 200,126
    C200,156 194,180 182,200
    C176,212 162,220 144,216
    C130,212 124,198 126,178
    C128,154 136,120 146,94
    C152,78 162,64 172,68 Z`,
  leg_l: `M36,220
    C24,246 14,284 12,324
    C10,358 14,388 20,408
    C24,418 40,420 60,419
    C78,418 86,406 84,386
    C82,358 78,322 76,308
    C70,272 64,242 56,220 Z`,
  leg_r: `M164,220
    C176,246 186,284 188,324
    C190,358 186,388 180,408
    C176,418 160,420 140,419
    C122,418 114,406 116,386
    C118,358 122,322 124,308
    C130,272 136,242 144,220 Z`,
}

// ─── Muscle paths (wider, more anatomical) ───────────────────────
const P = {
  // ── FRONT ────────────────────────────────────────────────────
  pec_upper_l: 'M100,70 C82,64 62,68 54,80 C48,90 52,102 68,104 C82,105 98,99 100,88 Z',
  pec_upper_r: 'M100,70 C118,64 138,68 146,80 C152,90 148,102 132,104 C118,105 102,99 100,88 Z',
  pec_lower_l: 'M100,86 C78,92 54,104 48,120 C44,134 52,150 70,156 C86,161 100,152 100,136 Z',
  pec_lower_r: 'M100,86 C122,92 146,104 152,120 C156,134 148,150 130,156 C114,161 100,152 100,136 Z',

  delt_ant_l:  'M28,68 C10,60 (-4),74 (-2),96 C0,116 14,128 34,126 C48,124 58,112 58,94 C58,80 44,64 28,68 Z',
  delt_ant_r:  'M172,68 C190,60 204,74 202,96 C200,116 186,128 166,126 C152,124 142,112 142,94 C142,80 156,64 172,68 Z',
  delt_lat_l:  'M28,64 C10,66 (-2),88 0,112 C2,128 16,136 34,134 C50,132 60,118 58,98 C56,82 44,62 28,64 Z',
  delt_lat_r:  'M172,64 C190,66 202,88 200,112 C198,128 184,136 166,134 C150,132 140,118 142,98 C144,82 156,62 172,64 Z',

  bicep_l:     'M24,128 C6,132 (-2),148 (-2),168 C(-2),186 8,200 26,202 C44,202 58,190 58,172 C58,154 52,136 38,128 Z',
  bicep_r:     'M176,128 C194,132 202,148 202,168 C202,186 192,200 174,202 C156,202 142,190 142,172 C142,154 148,136 162,128 Z',
  forearm_l:   'M2,196 C(-2),216 (-2),238 2,256 C6,270 20,278 36,274 C52,270 58,256 56,236 C54,216 46,196 30,194 Z',
  forearm_r:   'M198,196 C202,216 202,238 198,256 C194,270 180,278 164,274 C148,270 142,256 144,236 C146,216 154,196 170,194 Z',
  brachial_l:  'M16,126 C2,146 (-2),170 2,192 C6,208 20,218 38,214 C52,210 60,198 58,176 C56,156 46,130 30,124 Z',
  brachial_r:  'M184,126 C198,146 202,170 198,192 C194,208 180,218 162,214 C148,210 140,198 142,176 C144,156 154,130 170,124 Z',

  abs_u:       'M82,126 L82,148 L118,148 L118,126 Z',
  abs_m:       'M80,152 L80,172 L120,172 L120,152 Z',
  abs_l:       'M80,176 L80,196 L120,196 L120,176 Z',
  obliq_l:     'M48,128 C40,144 38,168 42,192 C44,208 58,220 76,216 L82,128 Z',
  obliq_r:     'M152,128 C160,144 162,168 158,192 C156,208 142,220 124,216 L118,128 Z',
  obliq_lo_l:  'M44,194 C38,210 40,230 52,240 L82,232 L78,194 Z',
  obliq_lo_r:  'M156,194 C162,210 160,230 148,240 L118,232 L122,194 Z',

  // Serratus anterior — finger-like projections on ribcage sides
  ser1_l:      'M48,118 C42,124 42,134 50,138 C56,140 64,136 66,128 C68,120 64,114 56,116 Z',
  ser2_l:      'M44,138 C38,146 40,156 48,160 C54,162 62,158 64,150 C66,142 60,136 54,136 Z',
  ser3_l:      'M46,158 C40,166 42,176 50,180 C56,182 64,178 64,170 C64,162 58,156 52,156 Z',
  ser1_r:      'M152,118 C158,124 158,134 150,138 C144,140 136,136 134,128 C132,120 136,114 144,116 Z',
  ser2_r:      'M156,138 C162,146 160,156 152,160 C146,162 138,158 136,150 C134,142 140,136 146,136 Z',
  ser3_r:      'M154,158 C160,166 158,176 150,180 C144,182 136,178 136,170 C136,162 142,156 148,156 Z',

  quad_l:      'M56,222 C42,248 28,288 26,330 C24,350 30,364 50,366 C68,367 80,354 82,332 C84,300 80,262 74,224 Z',
  quad_r:      'M144,222 C158,248 172,288 174,330 C176,350 170,364 150,366 C132,367 120,354 118,332 C116,300 120,262 126,224 Z',
  quad_vm_l:   'M72,322 C64,332 66,350 78,358 C88,364 100,360 102,348 C104,336 98,324 88,320 Z',
  quad_vm_r:   'M128,322 C136,332 134,350 122,358 C112,364 100,360 98,348 C96,336 102,324 112,320 Z',
  adduct_l:    'M80,224 C84,250 88,288 88,324 C88,342 84,352 76,350 C68,348 66,334 68,312 C70,280 74,252 80,224 Z',
  adduct_r:    'M120,224 C116,250 112,288 112,324 C112,342 116,352 124,350 C132,348 134,334 132,312 C130,280 126,252 120,224 Z',
  tibial_l:    'M26,370 C16,390 14,410 18,418 C22,420 38,420 56,419 C70,418 76,408 74,390 C72,368 62,348 50,344 Z',
  tibial_r:    'M174,370 C184,390 186,410 182,418 C178,420 162,420 144,419 C130,418 124,408 126,390 C128,368 138,348 150,344 Z',

  // ── BACK ────────────────────────────────────────────────────
  trap_up_l:   'M100,70 C88,66 70,70 62,82 C56,92 62,104 78,106 C90,107 100,100 100,90 Z',
  trap_up_r:   'M100,70 C112,66 130,70 138,82 C144,92 138,104 122,106 C110,107 100,100 100,90 Z',
  trap_mid:    'M78,106 C68,116 66,138 68,166 C70,178 82,184 100,182 C118,184 130,178 132,166 C134,138 132,116 122,106 L100,116 Z',
  rear_delt_l: 'M28,68 C10,60 (-4),74 (-2),96 C0,116 14,128 34,126 C48,124 58,112 58,94 C58,80 44,64 28,68 Z',
  rear_delt_r: 'M172,68 C190,60 204,74 202,96 C200,116 186,128 166,126 C152,124 142,112 142,94 C142,80 156,64 172,68 Z',
  lat_l:       'M56,116 C38,128 20,152 18,180 C16,200 24,220 44,226 C60,230 76,222 80,204 C84,182 82,152 72,122 Z',
  lat_r:       'M144,116 C162,128 180,152 182,180 C184,200 176,220 156,226 C140,230 124,222 120,204 C116,182 118,152 128,122 Z',
  rhomboid:    'M78,106 C70,114 68,130 70,150 C72,164 84,172 100,170 C116,172 128,164 130,150 C132,130 130,114 122,106 L100,116 Z',
  erector_l:   'M80,170 C78,186 78,206 80,226 C82,236 90,240 98,236 L100,228 L100,170 Z',
  erector_r:   'M120,170 C122,186 122,206 120,226 C118,236 110,240 102,236 L100,228 L100,170 Z',
  tricep_l:    'M28,116 C10,126 (-4),144 (-2),168 C0,188 12,204 32,206 C50,206 64,194 66,172 C68,152 62,128 44,118 Z',
  tricep_r:    'M172,116 C190,126 204,144 202,168 C200,188 188,204 168,206 C150,206 136,194 134,172 C132,152 138,128 156,118 Z',
  glute_l:     'M56,222 C44,236 38,260 44,284 C48,302 64,314 88,312 L100,309 L100,222 Z',
  glute_r:     'M144,222 C156,236 162,260 156,284 C152,302 136,314 112,312 L100,309 L100,222 Z',
  ham_l:       'M54,286 C42,310 36,338 38,362 C40,378 54,386 72,382 C88,378 100,364 100,342 L100,286 Z',
  ham_r:       'M146,286 C158,310 164,338 162,362 C160,378 146,386 128,382 C112,378 100,364 100,342 L100,286 Z',
  calf_b_l:    'M38,368 C26,392 22,412 26,419 C30,420 46,420 64,419 C80,418 86,406 84,386 C82,360 70,336 58,330 Z',
  calf_b_r:    'M162,368 C174,392 178,412 174,419 C170,420 154,420 136,419 C120,418 114,406 116,386 C118,360 130,336 142,330 Z',
}

// ─── View mapping ─────────────────────────────────────────────────
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
  ser1_l:'front',      ser2_l:'front',      ser3_l:'front',
  ser1_r:'front',      ser2_r:'front',      ser3_r:'front',
  quad_l:'front',      quad_r:'front',
  quad_vm_l:'front',   quad_vm_r:'front',
  adduct_l:'front',    adduct_r:'front',
  tibial_l:'front',    tibial_r:'front',
  trap_up_l:'back',    trap_up_r:'back',    trap_mid:'back',
  rear_delt_l:'back',  rear_delt_r:'back',
  lat_l:'back',        lat_r:'back',
  rhomboid:'back',
  erector_l:'back',    erector_r:'back',
  tricep_l:'back',     tricep_r:'back',
  glute_l:'back',      glute_r:'back',
  ham_l:'back',        ham_r:'back',
  calf_b_l:'back',     calf_b_r:'back',
}

// ─── Anatomical definition lines (muscle groove / separation) ─────
// Rendered as dark strokes to show muscle structure even on base layer
const DEF = {
  front: [
    // Pec central groove
    { d:'M100,70 L100,154', sw:1.4 },
    // Clavicles
    { d:'M36,64 C58,58 82,64 100,70', sw:0.9 },
    { d:'M164,64 C142,58 118,64 100,70', sw:0.9 },
    // Pec/delt crease
    { d:'M54,94 C58,102 56,116', sw:0.8 },
    { d:'M146,94 C142,102 144,116', sw:0.8 },
    // Ab center line
    { d:'M100,126 L100,196', sw:1.2 },
    // Hip crease
    { d:'M58,216 C76,208 100,206 124,208 142,216', sw:0.9 },
    // Bicep head split (tiny)
    { d:'M12,154 C14,162 14,172', sw:0.7 },
    { d:'M188,154 C186,162 186,172', sw:0.7 },
  ],
  back: [
    // Spine groove
    { d:'M100,70 L100,224', sw:1.2 },
    // Scapula borders
    { d:'M68,90 C74,106 76,128 72,148', sw:0.8 },
    { d:'M132,90 C126,106 124,128 128,148', sw:0.8 },
    // Glute separation
    { d:'M100,224 C100,248 100,272 100,296', sw:1.0 },
    // Trap/delt separation line
    { d:'M54,96 C58,106 56,116', sw:0.8 },
    { d:'M146,96 C142,106 144,116', sw:0.8 },
    // Lower erector crease
    { d:'M90,170 L90,224', sw:0.7 },
    { d:'M110,170 L110,224', sw:0.7 },
  ],
}

const CFG = {
  'peitoral-clavicular': {
    view: 'front',
    primary:   ['pec_upper_l','pec_upper_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   ['pec_lower_l','pec_lower_r'],
    arrow: { d:'M148,72 C160,58 174,60 178,76 C181,90 175,104 163,108', double:false },
    labels: [
      { x:4,   y:79, text:'Peitoral Clavicular', anchor:'start', dot:{cx:72,cy:85} },
      { x:4,   y:96, text:'Deltóide Ant.',        anchor:'start', dot:{cx:26,cy:94} },
    ],
  },
  'peitoral-esternal': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['delt_ant_l','delt_ant_r','bicep_l','bicep_r'],
    support:   ['pec_upper_l','pec_upper_r'],
    arrow: { d:'M22,122 C8,110 6,96 18,88', double:false },
    labels: [
      { x:196, y:126, text:'Peitoral Esternal', anchor:'end', dot:{cx:122,cy:128} },
      { x:196, y:90,  text:'Deltóide Ant.',     anchor:'end', dot:{cx:140,cy:90} },
    ],
  },
  'peitoral-menor': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:4, y:126, text:'Peitoral Menor', anchor:'start', dot:{cx:70,cy:128} },
      { x:4, y:88,  text:'Peitoral Maior', anchor:'start', dot:{cx:70,cy:88} },
    ],
  },
  'latissimo': {
    view: 'back',
    primary:   ['lat_l','lat_r'],
    secondary: ['tricep_l','tricep_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid','rear_delt_l','rear_delt_r'],
    arrow: { d:'M28,162 C14,144 14,122 28,106', double:false },
    labels: [
      { x:4,   y:170, text:'Latíssimo do Dorso', anchor:'start', dot:{cx:36,cy:170} },
      { x:196, y:138, text:'Tríceps (sec.)',      anchor:'end',   dot:{cx:152,cy:138} },
    ],
  },
  'trapezio': {
    view: 'back',
    primary:   ['trap_up_l','trap_up_r','trap_mid'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   ['lat_l','lat_r','rhomboid'],
    arrow: { d:'M168,84 C180,70 180,56 168,50', double:false },
    labels: [
      { x:4, y:84,  text:'Trapézio Superior', anchor:'start', dot:{cx:78,cy:84} },
      { x:4, y:130, text:'Trapézio Médio',    anchor:'start', dot:{cx:76,cy:130} },
    ],
  },
  'romboides': {
    view: 'back',
    primary:   ['rhomboid'],
    secondary: ['lat_l','lat_r','rear_delt_l','rear_delt_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid'],
    arrow: { d:'M26,128 C12,120 10,108 22,100', double:false },
    labels: [
      { x:100, y:64,  text:'Romboides', anchor:'middle', dot:{cx:100,cy:98} },
      { x:4,   y:168, text:'Latíssimo', anchor:'start',  dot:{cx:36,cy:168} },
    ],
  },
  'deltoide-anterior': {
    view: 'front',
    primary:   ['delt_ant_l','delt_ant_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   ['bicep_l','bicep_r'],
    arrow: { d:'M20,94 C6,78 6,60 20,52', double:false },
    labels: [
      { x:4,   y:92, text:'Deltóide Anterior', anchor:'start', dot:{cx:24,cy:92} },
      { x:196, y:86, text:'Peitoral Clav.',    anchor:'end',   dot:{cx:128,cy:86} },
    ],
  },
  'deltoide-lateral': {
    view: 'front',
    primary:   ['delt_lat_l','delt_lat_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   [],
    arrow: { d:'M12,106 C(-2),88 (-2),70 12,58', double:false },
    labels: [
      { x:4, y:104, text:'Deltóide Lateral', anchor:'start', dot:{cx:22,cy:102} },
      { x:4, y:76,  text:'Deltóide Ant.',    anchor:'start', dot:{cx:26,cy:80} },
    ],
  },
  'deltoide-posterior': {
    view: 'back',
    primary:   ['rear_delt_l','rear_delt_r'],
    secondary: ['rhomboid','trap_up_l','trap_up_r'],
    support:   ['lat_l','lat_r'],
    arrow: { d:'M22,96 C8,82 6,66 20,58', double:false },
    labels: [
      { x:4, y:92,  text:'Deltóide Posterior', anchor:'start', dot:{cx:24,cy:94} },
      { x:4, y:124, text:'Romboides',           anchor:'start', dot:{cx:76,cy:124} },
    ],
  },
  'biceps': {
    view: 'front',
    primary:   ['bicep_l','bicep_r'],
    secondary: ['forearm_l','forearm_r'],
    support:   ['brachial_l','brachial_r'],
    arrow: { d:'M8,178 C(-2),158 (-2),136 8,118', double:true },
    labels: [
      { x:4, y:152, text:'Bíceps Braquial', anchor:'start', dot:{cx:14,cy:152} },
      { x:4, y:230, text:'Antebraço',       anchor:'start', dot:{cx:10,cy:228} },
    ],
  },
  'triceps': {
    view: 'back',
    primary:   ['tricep_l','tricep_r'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   [],
    arrow: { d:'M8,124 C(-2),146 (-2),170 8,188', double:true },
    labels: [
      { x:4, y:148, text:'Tríceps Braquial', anchor:'start', dot:{cx:14,cy:148} },
      { x:4, y:96,  text:'Deltóide Post.',   anchor:'start', dot:{cx:24,cy:96} },
    ],
  },
  'braquial': {
    view: 'front',
    primary:   ['brachial_l','brachial_r'],
    secondary: ['bicep_l','bicep_r'],
    support:   ['forearm_l','forearm_r'],
    arrow: { d:'M8,178 C(-2),158 (-2),138 8,120', double:true },
    labels: [
      { x:4, y:168, text:'Braquial',     anchor:'start', dot:{cx:14,cy:168} },
      { x:4, y:148, text:'Bíceps (sec.)',anchor:'start', dot:{cx:14,cy:148} },
    ],
  },
  'quadriceps': {
    view: 'front',
    primary:   ['quad_l','quad_r','quad_vm_l','quad_vm_r'],
    secondary: ['adduct_l','adduct_r'],
    support:   ['tibial_l','tibial_r'],
    arrow: { d:'M178,310 L178,230', double:true },
    labels: [
      { x:4, y:292, text:'Quadríceps Femoral', anchor:'start', dot:{cx:36,cy:290} },
      { x:4, y:340, text:'Vasto Medial',       anchor:'start', dot:{cx:72,cy:340} },
    ],
  },
  'isquiotibiais': {
    view: 'back',
    primary:   ['ham_l','ham_r'],
    secondary: ['glute_l','glute_r','calf_b_l','calf_b_r'],
    support:   [],
    arrow: { d:'M22,308 C8,284 8,258 22,236', double:false },
    labels: [
      { x:4,   y:308, text:'Isquiotibiais', anchor:'start',  dot:{cx:46,cy:308} },
      { x:100, y:232, text:'Glúteo',        anchor:'middle', dot:{cx:100,cy:252} },
    ],
  },
  'gluteos': {
    view: 'back',
    primary:   ['glute_l','glute_r'],
    secondary: ['ham_l','ham_r'],
    support:   ['erector_l','erector_r'],
    arrow: { d:'M176,266 C190,244 190,220 176,206', double:false },
    labels: [
      { x:100, y:236, text:'Glúteo Máximo', anchor:'middle', dot:{cx:100,cy:256} },
      { x:4,   y:310, text:'Isquiotibiais', anchor:'start',  dot:{cx:46,cy:310} },
    ],
  },
  'panturrilha': {
    view: 'back',
    primary:   ['calf_b_l','calf_b_r'],
    secondary: ['ham_l','ham_r'],
    support:   [],
    arrow: { d:'M176,390 C190,364 190,336 176,316', double:false },
    labels: [
      { x:4,   y:380, text:'Gastrocnêmio', anchor:'start', dot:{cx:42,cy:378} },
      { x:196, y:408, text:'Sóleo',        anchor:'end',   dot:{cx:146,cy:406} },
    ],
  },
  'adutores': {
    view: 'front',
    primary:   ['adduct_l','adduct_r'],
    secondary: ['quad_l','quad_r'],
    support:   [],
    arrow: { d:'M72,280 C58,268 54,252 64,240', double:false },
    labels: [
      { x:100, y:218, text:'Adutores da Coxa', anchor:'middle', dot:{cx:100,cy:232} },
      { x:4,   y:296, text:'Quadríceps',       anchor:'start',  dot:{cx:36,cy:294} },
    ],
  },
  'reto-abdominal': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l'],
    secondary: ['obliq_l','obliq_r'],
    support:   [],
    arrow: { d:'M130,158 C144,152 150,140 144,132', double:false },
    labels: [
      { x:196, y:142, text:'Reto Abdominal', anchor:'end', dot:{cx:118,cy:140} },
      { x:196, y:186, text:'Oblíquos',       anchor:'end', dot:{cx:120,cy:184} },
    ],
  },
  'obliquos': {
    view: 'front',
    primary:   ['obliq_l','obliq_r','obliq_lo_l','obliq_lo_r'],
    secondary: ['abs_u','abs_m','abs_l'],
    support:   [],
    arrow: null,
    labels: [
      { x:4,   y:168, text:'Oblíquos',       anchor:'start', dot:{cx:50,cy:168} },
      { x:196, y:158, text:'Reto Abdominal', anchor:'end',   dot:{cx:118,cy:158} },
    ],
  },
  'transverso': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l','obliq_l','obliq_r'],
    secondary: ['obliq_lo_l','obliq_lo_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:100, y:214, text:'Core Profundo',  anchor:'middle', dot:null },
      { x:196, y:158, text:'Reto Abdominal', anchor:'end',    dot:{cx:118,cy:158} },
    ],
  },
}

// ─── Component ────────────────────────────────────────────────────
export default function AnatomySVG({ muscleId, className }) {
  const cfg         = CFG[muscleId]
  const view        = cfg?.view || 'front'
  const baseMuscles = Object.keys(MV).filter(k => MV[k] === view)
  const highlighted = new Set([
    ...(cfg?.primary   || []),
    ...(cfg?.secondary || []),
    ...(cfg?.support   || []),
  ])
  const showAbsGrid = highlighted.has('abs_u') || highlighted.has('abs_m') || highlighted.has('abs_l')
  const showPecLine = highlighted.has('pec_lower_l') || highlighted.has('pec_upper_l')
  const defLines    = DEF[view] || []

  return (
    <svg viewBox="0 0 200 420" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        {/* 3-D radial gradients for muscles */}
        <radialGradient id="gPri" cx="45%" cy="35%" r="58%">
          <stop offset="0%"   stopColor="#FF7070"/>
          <stop offset="60%"  stopColor="#E53E3E"/>
          <stop offset="100%" stopColor="#8B1A1A"/>
        </radialGradient>
        <radialGradient id="gSec" cx="45%" cy="35%" r="58%">
          <stop offset="0%"   stopColor="#D06060"/>
          <stop offset="60%"  stopColor="#B03030"/>
          <stop offset="100%" stopColor="#6B1A1A"/>
        </radialGradient>
        <radialGradient id="gSup" cx="45%" cy="35%" r="55%">
          <stop offset="0%"   stopColor="#9A6060"/>
          <stop offset="100%" stopColor="#4A2A2A"/>
        </radialGradient>
        <radialGradient id="gSkin" cx="45%" cy="30%" r="62%">
          <stop offset="0%"   stopColor="#D8A878"/>
          <stop offset="55%"  stopColor="#C4956A"/>
          <stop offset="100%" stopColor="#7A4E2E"/>
        </radialGradient>
        {/* Arrow markers */}
        <marker id="aE" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr}/>
        </marker>
        <marker id="aS" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr}/>
        </marker>
        {/* Glow for primary muscles */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* Drop shadow for body segments */}
        <filter id="shadow" x="-8%" y="-4%" width="116%" height="114%">
          <feDropShadow dx="1" dy="2" stdDeviation="3.5" floodColor="#000" floodOpacity="0.55"/>
        </filter>
      </defs>

      <rect width="200" height="420" fill={C.bg}/>

      {/* ── Body segments ──────────────────────────────────── */}
      <path d={SEG.torso} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)"/>
      <path d={SEG.arm_l} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)"/>
      <path d={SEG.arm_r} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)"/>
      <path d={SEG.leg_l} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)"/>
      <path d={SEG.leg_r} fill={C.body} stroke={C.bodyStr} strokeWidth="0.8" filter="url(#shadow)"/>
      <ellipse cx="100" cy="23" rx="18" ry="20" fill={C.body} stroke={C.bodyStr} strokeWidth="0.8"/>
      <path d={SEG.neck}  fill={C.body} stroke={C.bodyStr} strokeWidth="0.6"/>

      {/* ── Base muscles — skin gradient + definition border ─ */}
      {baseMuscles.filter(k => !highlighted.has(k)).map(k => (
        <path key={`b-${k}`} d={P[k]}
          fill="url(#gSkin)" fillOpacity="0.60"
          stroke={C.skinDk} strokeWidth="0.75" strokeOpacity="0.70"/>
      ))}

      {/* ── Anatomical definition lines (always visible) ───── */}
      {defLines.map((l, i) => (
        <path key={`def${i}`} d={l.d}
          fill="none" stroke={C.def} strokeWidth={l.sw}
          strokeOpacity="0.45" strokeLinecap="round"/>
      ))}

      {cfg ? (
        <>
          {/* Support */}
          {cfg.support?.map((k,i) => P[k] && (
            <path key={`s${i}`} d={P[k]}
              fill="url(#gSup)" fillOpacity="0.80"
              stroke={C.skinDk} strokeWidth="0.7"/>
          ))}
          {/* Secondary */}
          {cfg.secondary?.map((k,i) => P[k] && (
            <path key={`e${i}`} d={P[k]}
              fill="url(#gSec)" fillOpacity="0.90"
              stroke="#6B1A1A" strokeWidth="0.6"/>
          ))}
          {/* Primary */}
          {cfg.primary?.map((k,i) => P[k] && (
            <path key={`p${i}`} d={P[k]}
              fill="url(#gPri)" fillOpacity="0.97"
              stroke="#7A1010" strokeWidth="0.7"
              filter="url(#glow)"/>
          ))}

          {/* Abs segmentation grid */}
          {showAbsGrid && (
            <g stroke={C.def} strokeWidth="1.5" opacity="0.75">
              <line x1="100" y1="126" x2="100" y2="196"/>
              <line x1="80"  y1="150" x2="120" y2="150"/>
              <line x1="80"  y1="174" x2="120" y2="174"/>
            </g>
          )}

          {/* Pec center groove (extra prominent when pec focused) */}
          {showPecLine && (
            <line x1="100" y1="70" x2="100" y2="154"
              stroke={C.def} strokeWidth="1.6" opacity="0.7"/>
          )}

          {/* Movement arrow */}
          {cfg.arrow && (
            <path d={cfg.arrow.d}
              stroke={C.arr} strokeWidth="2.4" fill="none" strokeLinecap="round"
              markerEnd="url(#aE)"
              markerStart={cfg.arrow.double ? 'url(#aS)' : undefined}
              opacity="0.90"/>
          )}

          {/* Labels */}
          {cfg.labels?.map((lbl, i) => {
            const isLeft   = lbl.anchor === 'start'
            const tw       = lbl.text.length * 4.5
            const lineEndX = isLeft ? lbl.x + tw + 2 : lbl.x - tw - 2
            return (
              <g key={`l${i}`}>
                {lbl.dot && (
                  <>
                    <line x1={lineEndX} y1={lbl.y - 2} x2={lbl.dot.cx} y2={lbl.dot.cy}
                      stroke={C.lead} strokeWidth="0.8" strokeDasharray="3 2"/>
                    <circle cx={lbl.dot.cx} cy={lbl.dot.cy} r="2.4" fill={C.lead}/>
                  </>
                )}
                <text x={lbl.x} y={lbl.y} textAnchor={lbl.anchor}
                  fill={C.lbl} fontSize="8.5" fontWeight="700"
                  fontFamily="system-ui,-apple-system,BlinkMacSystemFont,sans-serif">
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
