import React from 'react'

const C = {
  bg:      '#0D0D0D',
  skin:    '#C4956A',
  skinStr: '#8B6A48',
  pri:     '#E53E3E',
  sec:     '#C05050',
  sup:     '#7A4A44',
  lbl:     '#C8C8E8',
  lead:    '#5858A0',
  arr:     '#DD8B20',
}

const SIL = {
  front: `M100,4 C118,4 115,48 115,68 L150,80 L157,140 L161,200 L135,208
    L147,310 L151,400 L120,400 L115,310 L103,210 L97,210
    L85,310 L80,400 L49,400 L53,310 L65,208 L39,200 L43,140 L50,80
    L85,68 C85,48 82,4 100,4 Z`,
  back: `M100,4 C118,4 115,48 115,68 L150,80 L157,140 L161,200 L135,208
    L147,310 L151,400 L120,400 L115,310 L103,250 L97,250
    L85,310 L80,400 L49,400 L53,310 L65,208 L39,200 L43,140 L50,80
    L85,68 C85,48 82,4 100,4 Z`,
}

const P = {
  // ── FRONT ──────────────────────────────────────────────────────
  pec_upper_l: 'M100,68 C90,64 76,68 68,78 C62,86 64,96 76,98 C86,99 96,93 100,84 Z',
  pec_upper_r: 'M100,68 C110,64 124,68 132,78 C138,86 136,96 124,98 C114,99 104,93 100,84 Z',
  pec_lower_l: 'M100,82 C84,88 66,98 62,112 C58,124 64,136 80,140 C92,143 100,136 100,122 Z',
  pec_lower_r: 'M100,82 C116,88 134,98 138,112 C142,124 136,136 120,140 C108,143 100,136 100,122 Z',

  delt_ant_l:  'M84,64 C68,56 46,66 42,84 C38,100 48,114 68,112 C80,111 88,100 88,86 C88,76 86,68 84,64 Z',
  delt_ant_r:  'M116,64 C132,56 154,66 158,84 C162,100 152,114 132,112 C120,111 112,100 112,86 C112,76 114,68 116,64 Z',
  delt_lat_l:  'M50,72 C36,78 28,100 32,118 C36,132 50,138 66,130 C76,124 80,112 76,96 C72,82 62,68 50,72 Z',
  delt_lat_r:  'M150,72 C164,78 172,100 168,118 C164,132 150,138 134,130 C124,124 120,112 124,96 C128,82 138,68 150,72 Z',

  bicep_l:     'M76,110 C58,114 42,126 40,144 C38,160 46,172 60,172 C72,172 82,162 82,148 C82,134 82,116 76,110 Z',
  bicep_r:     'M124,110 C142,114 158,126 160,144 C162,160 154,172 140,172 C128,172 118,162 118,148 C118,134 118,116 124,110 Z',
  forearm_l:   'M40,140 C34,158 32,178 34,196 C36,210 46,218 60,214 C70,212 76,200 74,182 C72,164 68,144 60,138 Z',
  forearm_r:   'M160,140 C166,158 168,178 166,196 C164,210 154,218 140,214 C130,212 124,200 126,182 C128,164 132,144 140,138 Z',
  brachial_l:  'M48,118 C40,136 36,156 38,174 C40,188 50,196 64,192 C74,189 80,178 78,160 C76,144 70,124 62,116 Z',
  brachial_r:  'M152,118 C160,136 164,156 162,174 C160,188 150,196 136,192 C126,189 120,178 122,160 C124,144 130,124 138,116 Z',

  abs_u:       'M84,122 L84,140 L116,140 L116,122 Z',
  abs_m:       'M82,144 L82,162 L118,162 L118,144 Z',
  abs_l:       'M82,166 L82,182 L118,182 L118,166 Z',
  obliq_l:     'M62,122 C56,136 54,158 58,178 C60,190 70,198 82,194 L82,122 Z',
  obliq_r:     'M138,122 C144,136 146,158 142,178 C140,190 130,198 118,194 L118,122 Z',
  obliq_lo_l:  'M62,182 C58,194 60,210 68,216 L84,212 L80,182 Z',
  obliq_lo_r:  'M138,182 C142,194 140,210 132,216 L116,212 L120,182 Z',

  quad_l:      'M66,212 C56,232 50,264 50,296 C50,308 58,314 72,314 C84,314 92,306 92,294 C92,264 90,232 84,212 Z',
  quad_r:      'M134,212 C144,232 150,264 150,296 C150,308 142,314 128,314 C116,314 108,306 108,294 C108,264 110,232 116,212 Z',
  quad_vm_l:   'M84,290 C80,296 80,310 88,318 C94,322 102,320 104,312 C106,304 102,296 96,292 Z',
  quad_vm_r:   'M116,290 C120,296 120,310 112,318 C106,322 98,320 96,312 C94,304 98,296 104,292 Z',
  adduct_l:    'M88,214 C92,232 96,264 96,294 C96,308 92,314 86,312 C80,310 78,300 80,282 C82,256 84,230 88,214 Z',
  adduct_r:    'M112,214 C108,232 104,264 104,294 C104,308 108,314 114,312 C120,310 122,300 120,282 C118,256 116,230 112,214 Z',
  tibial_l:    'M50,318 C44,338 42,364 44,384 C46,396 56,402 70,400 C80,398 84,388 82,372 C80,352 76,324 70,316 Z',
  tibial_r:    'M150,318 C156,338 158,364 156,384 C154,396 144,402 130,400 C120,398 116,388 118,372 C120,352 124,324 130,316 Z',

  // ── BACK ───────────────────────────────────────────────────────
  trap_up_l:   'M100,68 C90,66 76,70 70,80 C66,88 70,98 82,100 C90,101 98,96 100,86 Z',
  trap_up_r:   'M100,68 C110,66 124,70 130,80 C134,88 130,98 118,100 C110,101 102,96 100,86 Z',
  trap_mid:    'M82,100 C74,108 72,128 74,152 C76,162 86,166 100,164 C114,166 124,162 126,152 C128,128 126,108 118,100 L100,108 Z',
  rear_delt_l: 'M84,68 C68,60 46,70 42,88 C38,104 48,118 68,116 C80,114 90,104 90,90 C90,80 87,72 84,68 Z',
  rear_delt_r: 'M116,68 C132,60 154,70 158,88 C162,104 152,118 132,116 C120,114 110,104 110,90 C110,80 113,72 116,68 Z',
  lat_l:       'M72,112 C56,122 42,142 40,166 C38,184 46,200 62,206 C74,210 84,204 86,188 C88,170 86,146 78,116 Z',
  lat_r:       'M128,112 C144,122 158,142 160,166 C162,184 154,200 138,206 C126,210 116,204 114,188 C112,170 114,146 122,116 Z',
  rhomboid:    'M84,100 C78,106 76,120 78,136 C80,148 90,154 100,152 C110,154 120,148 122,136 C124,120 122,106 116,100 L100,108 Z',
  erector_l:   'M82,162 C80,174 80,192 82,210 C84,218 90,222 96,218 L100,212 L100,162 Z',
  erector_r:   'M118,162 C120,174 120,192 118,210 C116,218 110,222 104,218 L100,212 L100,162 Z',
  tricep_l:    'M72,114 C56,122 40,136 38,156 C36,172 44,186 60,188 C72,189 84,180 86,162 C88,146 84,126 72,114 Z',
  tricep_r:    'M128,114 C144,122 160,136 162,156 C164,172 156,186 140,188 C128,189 116,180 114,162 C112,146 116,126 128,114 Z',
  glute_l:     'M66,212 C56,224 52,244 56,264 C60,278 74,286 92,284 L100,281 L100,212 Z',
  glute_r:     'M134,212 C144,224 148,244 144,264 C140,278 126,286 108,284 L100,281 L100,212 Z',
  ham_l:       'M64,272 C56,290 52,310 54,328 C56,342 68,348 82,344 C94,340 100,328 100,308 L100,272 Z',
  ham_r:       'M136,272 C144,290 148,310 146,328 C144,342 132,348 118,344 C106,340 100,328 100,308 L100,272 Z',
  calf_b_l:    'M54,320 C46,340 42,366 46,388 C48,402 60,408 76,406 C88,404 94,394 92,376 C90,354 82,326 72,318 Z',
  calf_b_r:    'M146,320 C154,340 158,366 154,388 C152,402 140,408 124,406 C112,404 106,394 108,376 C110,354 118,326 128,318 Z',
}

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

// arrow: { d, double? }  — path for movement indicator, double = bidirectional
const CFG = {
  'peitoral-clavicular': {
    view: 'front',
    primary:   ['pec_upper_l','pec_upper_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   ['pec_lower_l','pec_lower_r'],
    arrow: { d:'M144,72 C154,60 166,62 170,76 C173,88 168,100 158,104', double:false },
    labels: [
      { x:4,   y:79,  text:'Peitoral Clavicular', anchor:'start', dot:{cx:78,cy:81} },
      { x:4,   y:94,  text:'Deltóide Ant.',        anchor:'start', dot:{cx:62,cy:90} },
    ],
  },
  'peitoral-esternal': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['delt_ant_l','delt_ant_r','bicep_l','bicep_r'],
    support:   ['pec_upper_l','pec_upper_r'],
    arrow: { d:'M30,116 C18,108 16,96 26,88', double:false },
    labels: [
      { x:196, y:118, text:'Peitoral Esternal', anchor:'end', dot:{cx:124,cy:118} },
      { x:196, y:88,  text:'Deltóide Ant.',     anchor:'end', dot:{cx:134,cy:86} },
    ],
  },
  'peitoral-menor': {
    view: 'front',
    primary:   ['pec_lower_l','pec_lower_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:4, y:118, text:'Peitoral Menor', anchor:'start', dot:{cx:74,cy:118} },
      { x:4, y:84,  text:'Peitoral Maior', anchor:'start', dot:{cx:74,cy:84} },
    ],
  },

  'latissimo': {
    view: 'back',
    primary:   ['lat_l','lat_r'],
    secondary: ['tricep_l','tricep_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid','rear_delt_l','rear_delt_r'],
    arrow: { d:'M36,148 C24,132 24,114 36,100', double:false },
    labels: [
      { x:4,   y:162, text:'Latíssimo do Dorso', anchor:'start', dot:{cx:56,cy:160} },
      { x:196, y:134, text:'Tríceps (sec.)',      anchor:'end',   dot:{cx:140,cy:132} },
    ],
  },
  'trapezio': {
    view: 'back',
    primary:   ['trap_up_l','trap_up_r','trap_mid'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   ['lat_l','lat_r','rhomboid'],
    arrow: { d:'M164,82 C174,70 174,56 164,50', double:false },
    labels: [
      { x:4, y:82,  text:'Trapézio Superior', anchor:'start', dot:{cx:82,cy:82} },
      { x:4, y:126, text:'Trapézio Médio',    anchor:'start', dot:{cx:80,cy:122} },
    ],
  },
  'romboides': {
    view: 'back',
    primary:   ['rhomboid'],
    secondary: ['lat_l','lat_r','rear_delt_l','rear_delt_r'],
    support:   ['trap_up_l','trap_up_r','trap_mid'],
    arrow: { d:'M34,122 C22,116 20,104 30,98', double:false },
    labels: [
      { x:100, y:66,  text:'Romboides', anchor:'middle', dot:{cx:100,cy:94} },
      { x:4,   y:160, text:'Latíssimo', anchor:'start',  dot:{cx:56,cy:160} },
    ],
  },

  'deltoide-anterior': {
    view: 'front',
    primary:   ['delt_ant_l','delt_ant_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support:   ['bicep_l','bicep_r'],
    arrow: { d:'M30,88 C18,74 18,58 30,50', double:false },
    labels: [
      { x:4,   y:88, text:'Deltóide Anterior', anchor:'start', dot:{cx:60,cy:88} },
      { x:196, y:84, text:'Peitoral Clav.',    anchor:'end',   dot:{cx:122,cy:82} },
    ],
  },
  'deltoide-lateral': {
    view: 'front',
    primary:   ['delt_lat_l','delt_lat_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support:   [],
    arrow: { d:'M24,104 C12,88 12,72 24,60', double:false },
    labels: [
      { x:4, y:100, text:'Deltóide Lateral', anchor:'start', dot:{cx:46,cy:100} },
      { x:4, y:74,  text:'Deltóide Ant.',    anchor:'start', dot:{cx:62,cy:78} },
    ],
  },
  'deltoide-posterior': {
    view: 'back',
    primary:   ['rear_delt_l','rear_delt_r'],
    secondary: ['rhomboid','trap_up_l','trap_up_r'],
    support:   ['lat_l','lat_r'],
    arrow: { d:'M34,92 C22,80 20,66 30,58', double:false },
    labels: [
      { x:4, y:88,  text:'Deltóide Posterior', anchor:'start', dot:{cx:58,cy:90} },
      { x:4, y:120, text:'Romboides',           anchor:'start', dot:{cx:80,cy:120} },
    ],
  },

  'biceps': {
    view: 'front',
    primary:   ['bicep_l','bicep_r'],
    secondary: ['forearm_l','forearm_r'],
    support:   ['brachial_l','brachial_r'],
    arrow: { d:'M34,164 C22,148 22,128 34,112', double:true },
    labels: [
      { x:4, y:126, text:'Bíceps Braquial', anchor:'start', dot:{cx:50,cy:126} },
      { x:4, y:182, text:'Antebraço',       anchor:'start', dot:{cx:42,cy:180} },
    ],
  },
  'triceps': {
    view: 'back',
    primary:   ['tricep_l','tricep_r'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support:   [],
    arrow: { d:'M34,118 C22,138 22,160 34,176', double:true },
    labels: [
      { x:4, y:122, text:'Tríceps Braquial', anchor:'start', dot:{cx:52,cy:122} },
      { x:4, y:90,  text:'Deltóide Post.',   anchor:'start', dot:{cx:62,cy:92} },
    ],
  },
  'braquial': {
    view: 'front',
    primary:   ['brachial_l','brachial_r'],
    secondary: ['bicep_l','bicep_r'],
    support:   ['forearm_l','forearm_r'],
    arrow: { d:'M34,164 C22,148 22,130 34,116', double:true },
    labels: [
      { x:4, y:160, text:'Braquial',     anchor:'start', dot:{cx:46,cy:158} },
      { x:4, y:122, text:'Bíceps (sec.)',anchor:'start', dot:{cx:52,cy:122} },
    ],
  },

  'quadriceps': {
    view: 'front',
    primary:   ['quad_l','quad_r','quad_vm_l','quad_vm_r'],
    secondary: ['adduct_l','adduct_r'],
    support:   ['tibial_l','tibial_r'],
    arrow: { d:'M162,292 L162,220', double:true },
    labels: [
      { x:4, y:264, text:'Quadríceps Femoral', anchor:'start', dot:{cx:60,cy:262} },
      { x:4, y:306, text:'Vasto Medial',       anchor:'start', dot:{cx:82,cy:304} },
    ],
  },
  'isquiotibiais': {
    view: 'back',
    primary:   ['ham_l','ham_r'],
    secondary: ['glute_l','glute_r','calf_b_l','calf_b_r'],
    support:   [],
    arrow: { d:'M34,284 C22,264 22,242 34,224', double:false },
    labels: [
      { x:4,   y:282, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:282} },
      { x:100, y:222, text:'Glúteo',        anchor:'middle', dot:{cx:100,cy:240} },
    ],
  },
  'gluteos': {
    view: 'back',
    primary:   ['glute_l','glute_r'],
    secondary: ['ham_l','ham_r'],
    support:   ['erector_l','erector_r'],
    arrow: { d:'M166,252 C178,232 178,210 166,196', double:false },
    labels: [
      { x:100, y:226, text:'Glúteo Máximo', anchor:'middle', dot:{cx:100,cy:244} },
      { x:4,   y:284, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:284} },
    ],
  },
  'panturrilha': {
    view: 'back',
    primary:   ['calf_b_l','calf_b_r'],
    secondary: ['ham_l','ham_r'],
    support:   [],
    arrow: { d:'M166,382 C178,358 178,332 166,312', double:false },
    labels: [
      { x:4,   y:364, text:'Gastrocnêmio', anchor:'start', dot:{cx:58,cy:362} },
      { x:196, y:396, text:'Sóleo',        anchor:'end',   dot:{cx:140,cy:394} },
    ],
  },
  'adutores': {
    view: 'front',
    primary:   ['adduct_l','adduct_r'],
    secondary: ['quad_l','quad_r'],
    support:   [],
    arrow: { d:'M86,262 C74,252 70,238 78,228', double:false },
    labels: [
      { x:100, y:202, text:'Adutores da Coxa', anchor:'middle', dot:{cx:100,cy:218} },
      { x:4,   y:268, text:'Quadríceps',       anchor:'start',  dot:{cx:62,cy:266} },
    ],
  },

  'reto-abdominal': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l'],
    secondary: ['obliq_l','obliq_r'],
    support:   [],
    arrow: { d:'M124,152 C138,146 144,136 138,128', double:false },
    labels: [
      { x:196, y:136, text:'Reto Abdominal', anchor:'end', dot:{cx:116,cy:134} },
      { x:196, y:176, text:'Oblíquos',       anchor:'end', dot:{cx:118,cy:176} },
    ],
  },
  'obliquos': {
    view: 'front',
    primary:   ['obliq_l','obliq_r','obliq_lo_l','obliq_lo_r'],
    secondary: ['abs_u','abs_m','abs_l'],
    support:   [],
    arrow: null,
    labels: [
      { x:4,   y:160, text:'Oblíquos',       anchor:'start', dot:{cx:60,cy:160} },
      { x:196, y:152, text:'Reto Abdominal', anchor:'end',   dot:{cx:116,cy:152} },
    ],
  },
  'transverso': {
    view: 'front',
    primary:   ['abs_u','abs_m','abs_l','obliq_l','obliq_r'],
    secondary: ['obliq_lo_l','obliq_lo_r'],
    support:   [],
    arrow: null,
    labels: [
      { x:100, y:200, text:'Core Profundo',  anchor:'middle', dot:null },
      { x:196, y:152, text:'Reto Abdominal', anchor:'end',    dot:{cx:116,cy:152} },
    ],
  },
}

export default function AnatomySVG({ muscleId, className }) {
  const cfg     = CFG[muscleId]
  const view    = cfg?.view || 'front'
  const baseMuscles = Object.keys(MV).filter(k => MV[k] === view)
  const highlighted = new Set([
    ...(cfg?.primary   || []),
    ...(cfg?.secondary || []),
    ...(cfg?.support   || []),
  ])
  const showAbsDividers = highlighted.has('abs_u') || highlighted.has('abs_m') || highlighted.has('abs_l')

  return (
    <svg viewBox="0 0 200 420" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <marker id="arrEnd" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr} />
        </marker>
        <marker id="arrStart" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L0,7 L7,3.5 Z" fill={C.arr} />
        </marker>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="200" height="420" fill={C.bg} />

      {/* Body silhouette */}
      <path d={SIL[view]} fill="#1A1625" stroke="#242436" strokeWidth="0.8" />
      <circle cx="100" cy="25" r="18" fill="#1A1625" stroke="#242436" strokeWidth="0.8" />
      <path d="M93,43 L107,43 L109,62 L91,62 Z" fill="#1A1625" stroke="#242436" strokeWidth="0.5" />

      {/* Base layer — all non-highlighted muscles in skin tone */}
      {baseMuscles.filter(k => !highlighted.has(k)).map(k => (
        <path key={`b-${k}`} d={P[k]}
          fill={C.skin} fillOpacity="0.14"
          stroke={C.skinStr} strokeWidth="0.4" strokeOpacity="0.35" />
      ))}

      {cfg ? (
        <>
          {cfg.support?.map((k,i) => P[k] && (
            <path key={`s${i}`} d={P[k]} fill={C.sup} fillOpacity="0.60" />
          ))}
          {cfg.secondary?.map((k,i) => P[k] && (
            <path key={`e${i}`} d={P[k]} fill={C.sec} fillOpacity="0.80" />
          ))}
          {cfg.primary?.map((k,i) => P[k] && (
            <path key={`p${i}`} d={P[k]} fill={C.pri} fillOpacity="0.92" filter="url(#glow)" />
          ))}

          {showAbsDividers && (
            <g stroke="#0D0D0D" strokeWidth="1.3" opacity="0.7">
              <line x1="100" y1="122" x2="100" y2="182" />
              <line x1="82"  y1="142" x2="118" y2="142" />
              <line x1="82"  y1="164" x2="118" y2="164" />
            </g>
          )}

          {cfg.arrow && (
            <path
              d={cfg.arrow.d}
              stroke={C.arr} strokeWidth="2" fill="none" strokeLinecap="round"
              markerEnd="url(#arrEnd)"
              markerStart={cfg.arrow.double ? 'url(#arrStart)' : undefined}
              opacity="0.82"
            />
          )}

          {cfg.labels?.map((lbl, i) => {
            const isLeft = lbl.anchor === 'start'
            const tw = lbl.text.length * 4.6
            const lineEndX = isLeft ? lbl.x + tw + 2 : lbl.x - tw - 2
            return (
              <g key={`l${i}`}>
                {lbl.dot && (
                  <>
                    <line
                      x1={lineEndX} y1={lbl.y - 2}
                      x2={lbl.dot.cx} y2={lbl.dot.cy}
                      stroke={C.lead} strokeWidth="0.7" strokeDasharray="3 2"
                    />
                    <circle cx={lbl.dot.cx} cy={lbl.dot.cy} r="2" fill={C.lead} />
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
