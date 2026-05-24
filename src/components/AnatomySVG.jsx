import React from 'react'

// ─── Color tokens ────────────────────────────────────────────────────
const PRIMARY   = '#E53E3E'
const SECONDARY = '#C05050'
const SUPPORT   = '#7A4A44'
const BODY_FILL = '#C4956A'
const BODY_STR  = '#A07855'

// ─── Body silhouette (reutilizado do bodymap.js) ─────────────────────
const SIL = {
  front: `M 100,4 C 120,4 116,50 116,68
    L 152,80 L 158,140 L 162,200 L 136,208
    L 148,310 L 152,400 L 120,400
    L 116,310 L 104,210 L 96,210 L 84,310
    L 80,400 L 48,400 L 52,310
    L 64,208 L 38,200 L 42,140 L 48,80 L 84,68
    C 84,50 80,4 100,4 Z`,
  back: `M 100,4 C 120,4 116,50 116,68
    L 152,80 L 158,140 L 162,200 L 136,208
    L 148,310 L 152,400 L 120,400
    L 116,310 L 104,250 L 96,250 L 84,310
    L 80,400 L 48,400 L 52,310
    L 64,208 L 38,200 L 42,140 L 48,80 L 84,68
    C 84,50 80,4 100,4 Z`,
}

// ─── Muscle paths (named) ─────────────────────────────────────────────
const P = {
  // FRONT ─────────────────────────────────────────────────────────────
  pec_upper_l:  'M88,68 L100,64 L100,90 L80,92 C68,90 64,80 68,72 Z',
  pec_upper_r:  'M112,68 L100,64 L100,90 L120,92 C132,90 136,80 132,72 Z',
  pec_lower_l:  'M80,90 L100,90 L100,114 L72,118 C60,112 58,100 64,92 Z',
  pec_lower_r:  'M120,90 L100,90 L100,114 L128,118 C140,112 142,100 136,92 Z',

  delt_ant_l:   'M82,62 C70,54 50,62 48,80 C46,96 56,108 74,106 L84,90 L88,68 Z',
  delt_ant_r:   'M118,62 C130,54 150,62 152,80 C154,96 144,108 126,106 L116,90 L112,68 Z',
  delt_lat_l:   'M52,68 C40,76 34,98 38,116 C42,128 56,132 68,126 L72,102 L66,72 Z',
  delt_lat_r:   'M148,68 C160,76 166,98 162,116 C158,128 144,132 132,126 L128,102 L134,72 Z',

  bicep_l:      'M48,84 C42,100 40,118 42,132 C44,144 54,152 66,150 L74,134 L84,90 L74,106 C56,108 46,96 48,84 Z',
  bicep_r:      'M152,84 C158,100 160,118 158,132 C156,144 146,152 134,150 L126,134 L116,90 L126,106 C144,108 154,96 152,84 Z',
  forearm_l:    'M42,136 C38,156 36,174 38,192 C40,206 50,212 62,208 L70,190 L74,138 Z',
  forearm_r:    'M158,136 C162,156 164,174 162,192 C160,206 150,212 138,208 L130,190 L126,138 Z',
  brachial_l:   'M44,118 C38,134 36,152 38,170 C40,182 50,188 60,184 L68,168 L70,122 Z',
  brachial_r:   'M156,118 C162,134 164,152 162,170 C160,182 150,188 140,184 L132,168 L130,122 Z',

  abs:          'M72,118 L128,118 L128,178 L72,178 Z',
  obliq:        'M68,178 L132,178 L136,208 L64,208 Z',
  obliq_sl:     'M62,120 L72,118 L72,178 L58,174 Z',
  obliq_sr:     'M138,120 L128,118 L128,178 L142,174 Z',

  quad_l:       'M64,208 L52,304 L84,306 L98,208 Z',
  quad_r:       'M136,208 L148,304 L116,306 L102,208 Z',
  adduct_l:     'M86,208 L98,208 L96,295 L82,298 Z',
  adduct_r:     'M102,208 L114,208 L118,295 L104,298 Z',
  calf_fl:      'M52,310 L48,394 L80,394 L84,310 Z',
  calf_fr:      'M148,310 L152,394 L120,394 L116,310 Z',

  // BACK ──────────────────────────────────────────────────────────────
  trap_up:      'M84,66 L100,62 L116,66 L120,90 L100,96 L80,90 Z',
  trap_mid:     'M80,90 L120,90 L124,155 L76,155 Z',
  rear_delt_l:  'M82,62 C70,54 50,62 48,80 C46,96 56,108 74,106 L80,92 L84,70 Z',
  rear_delt_r:  'M118,62 C130,54 150,62 152,80 C154,96 144,108 126,106 L120,92 L116,70 Z',
  lat_l:        'M72,104 L68,178 L64,208 L52,170 L44,130 L54,104 Z',
  lat_r:        'M128,104 L132,178 L136,208 L148,170 L156,130 L146,104 Z',
  rhomboid:     'M80,90 L120,90 L120,140 L80,140 Z',
  lower_back:   'M80,155 L120,155 L122,205 L78,205 Z',
  tricep_l:     'M48,84 C42,100 40,118 42,132 C44,144 54,152 66,150 L72,132 L72,104 C56,108 46,96 48,84 Z',
  tricep_r:     'M152,84 C158,100 160,118 158,132 C156,144 146,152 134,150 L128,132 L128,104 C144,108 154,96 152,84 Z',
  glute_l:      'M64,208 L66,244 L100,250 L100,208 Z',
  glute_r:      'M136,208 L134,244 L100,250 L100,208 Z',
  ham_l:        'M66,248 L52,304 L84,306 L100,252 Z',
  ham_r:        'M134,248 L148,304 L116,306 L100,252 Z',
  calf_bl:      'M52,310 L48,394 L80,394 L84,310 Z',
  calf_br:      'M148,310 L152,394 L120,394 L116,310 Z',
}

// ─── Per-muscle config ────────────────────────────────────────────────
// view: 'front' | 'back'
// primary / secondary / support: arrays of keys from P{}
// labels: [ { x, y, text, anchor, dot?: {cx,cy} } ]
const CFG = {
  // ── PEITO ────────────────────────────────────────────────────────
  'peitoral-clavicular': {
    view: 'front',
    primary: ['pec_upper_l','pec_upper_r'],
    secondary: ['delt_ant_l','delt_ant_r'],
    support: ['pec_lower_l','pec_lower_r'],
    labels: [
      { x:4, y:79, text:'Peitoral Clavicular', anchor:'start', dot:{cx:78,cy:81} },
      { x:4, y:97, text:'Deltóide Ant.', anchor:'start', dot:{cx:62,cy:94} },
    ],
  },
  'peitoral-esternal': {
    view: 'front',
    primary: ['pec_lower_l','pec_lower_r'],
    secondary: ['delt_ant_l','delt_ant_r','bicep_l','bicep_r'],
    support: ['pec_upper_l','pec_upper_r'],
    labels: [
      { x:196, y:106, text:'Peitoral Esternal', anchor:'end', dot:{cx:122,cy:104} },
      { x:196, y:80,  text:'Deltóide Ant.', anchor:'end', dot:{cx:132,cy:82} },
    ],
  },
  'peitoral-menor': {
    view: 'front',
    primary: ['pec_lower_l','pec_lower_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support: [],
    labels: [
      { x:4, y:111, text:'Peitoral Menor', anchor:'start', dot:{cx:72,cy:111} },
      { x:4, y:82,  text:'Peitoral Maior', anchor:'start', dot:{cx:74,cy:82} },
    ],
  },

  // ── COSTAS ──────────────────────────────────────────────────────
  'latissimo': {
    view: 'back',
    primary: ['lat_l','lat_r'],
    secondary: ['tricep_l','tricep_r'],
    support: ['trap_up','trap_mid','rear_delt_l','rear_delt_r'],
    labels: [
      { x:4,   y:152, text:'Latíssimo do Dorso', anchor:'start', dot:{cx:55,cy:152} },
      { x:196, y:128, text:'Tríceps (sec.)', anchor:'end', dot:{cx:138,cy:126} },
    ],
  },
  'trapezio': {
    view: 'back',
    primary: ['trap_up','trap_mid'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support: ['lat_l','lat_r','rhomboid'],
    labels: [
      { x:4, y:79,  text:'Trapézio Superior', anchor:'start', dot:{cx:82,cy:79} },
      { x:4, y:122, text:'Trapézio Médio',    anchor:'start', dot:{cx:78,cy:118} },
    ],
  },
  'romboides': {
    view: 'back',
    primary: ['rhomboid'],
    secondary: ['lat_l','lat_r','rear_delt_l','rear_delt_r'],
    support: ['trap_up','trap_mid'],
    labels: [
      { x:100, y:70,  text:'Romboides', anchor:'middle', dot:{cx:100,cy:90} },
      { x:4,   y:152, text:'Latíssimo', anchor:'start',  dot:{cx:55,cy:152} },
    ],
  },

  // ── OMBROS ──────────────────────────────────────────────────────
  'deltoide-anterior': {
    view: 'front',
    primary: ['delt_ant_l','delt_ant_r'],
    secondary: ['pec_upper_l','pec_upper_r'],
    support: ['bicep_l','bicep_r'],
    labels: [
      { x:4,   y:84, text:'Deltóide Anterior', anchor:'start', dot:{cx:64,cy:84} },
      { x:196, y:84, text:'Peitoral Clav.',    anchor:'end',   dot:{cx:120,cy:82} },
    ],
  },
  'deltoide-lateral': {
    view: 'front',
    primary: ['delt_lat_l','delt_lat_r'],
    secondary: ['trap_up'],
    support: ['delt_ant_l','delt_ant_r'],
    labels: [
      { x:4,   y:98, text:'Deltóide Lateral', anchor:'start',  dot:{cx:50,cy:98} },
      { x:100, y:57, text:'Trapézio',          anchor:'middle', dot:{cx:100,cy:68} },
    ],
  },
  'deltoide-posterior': {
    view: 'back',
    primary: ['rear_delt_l','rear_delt_r'],
    secondary: ['rhomboid','trap_up'],
    support: ['lat_l','lat_r'],
    labels: [
      { x:4, y:83,  text:'Deltóide Posterior', anchor:'start', dot:{cx:60,cy:86} },
      { x:4, y:116, text:'Romboides',           anchor:'start', dot:{cx:80,cy:116} },
    ],
  },

  // ── BRAÇOS ──────────────────────────────────────────────────────
  'biceps': {
    view: 'front',
    primary: ['bicep_l','bicep_r'],
    secondary: ['forearm_l','forearm_r'],
    support: [],
    labels: [
      { x:4, y:122, text:'Bíceps Braquial', anchor:'start', dot:{cx:52,cy:122} },
      { x:4, y:177, text:'Antebraço',       anchor:'start', dot:{cx:44,cy:174} },
    ],
  },
  'triceps': {
    view: 'back',
    primary: ['tricep_l','tricep_r'],
    secondary: ['rear_delt_l','rear_delt_r'],
    support: [],
    labels: [
      { x:4, y:118, text:'Tríceps Braquial', anchor:'start', dot:{cx:52,cy:118} },
      { x:4, y:84,  text:'Deltóide Post.',   anchor:'start', dot:{cx:60,cy:86} },
    ],
  },
  'braquial': {
    view: 'front',
    primary: ['brachial_l','brachial_r'],
    secondary: ['bicep_l','bicep_r'],
    support: ['forearm_l','forearm_r'],
    labels: [
      { x:4, y:154, text:'Braquial',       anchor:'start', dot:{cx:46,cy:152} },
      { x:4, y:118, text:'Bíceps (sec.)',  anchor:'start', dot:{cx:52,cy:116} },
    ],
  },

  // ── MEMBROS INFERIORES ───────────────────────────────────────────
  'quadriceps': {
    view: 'front',
    primary: ['quad_l','quad_r'],
    secondary: ['glute_l','glute_r'],
    support: ['calf_fl','calf_fr'],
    labels: [
      { x:4,   y:258, text:'Quadríceps Femoral', anchor:'start', dot:{cx:62,cy:258} },
      { x:100, y:230, text:'Glúteo (suporte)',   anchor:'middle', dot:{cx:100,cy:244} },
    ],
  },
  'isquiotibiais': {
    view: 'back',
    primary: ['ham_l','ham_r'],
    secondary: ['glute_l','glute_r','calf_bl','calf_br'],
    support: [],
    labels: [
      { x:4,   y:275, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:275} },
      { x:100, y:230, text:'Glúteo',        anchor:'middle', dot:{cx:100,cy:240} },
    ],
  },
  'gluteos': {
    view: 'back',
    primary: ['glute_l','glute_r'],
    secondary: ['ham_l','ham_r'],
    support: ['lower_back'],
    labels: [
      { x:100, y:230, text:'Glúteo Máximo', anchor:'middle', dot:{cx:100,cy:244} },
      { x:4,   y:275, text:'Isquiotibiais', anchor:'start',  dot:{cx:62,cy:275} },
    ],
  },
  'panturrilha': {
    view: 'back',
    primary: ['calf_bl','calf_br'],
    secondary: ['ham_l','ham_r'],
    support: [],
    labels: [
      { x:4,   y:355, text:'Gastrocnêmio', anchor:'start', dot:{cx:56,cy:352} },
      { x:196, y:355, text:'Sóleo',        anchor:'end',   dot:{cx:144,cy:352} },
    ],
  },
  'adutores': {
    view: 'front',
    primary: ['adduct_l','adduct_r'],
    secondary: ['quad_l','quad_r'],
    support: [],
    labels: [
      { x:100, y:204, text:'Adutores da Coxa', anchor:'middle', dot:{cx:100,cy:218} },
      { x:4,   y:262, text:'Quadríceps',       anchor:'start',  dot:{cx:62,cy:262} },
    ],
  },

  // ── CORE ────────────────────────────────────────────────────────
  'reto-abdominal': {
    view: 'front',
    primary: ['abs'],
    secondary: ['obliq'],
    support: [],
    labels: [
      { x:196, y:150, text:'Reto Abdominal', anchor:'end', dot:{cx:128,cy:148} },
      { x:196, y:195, text:'Oblíquos',       anchor:'end', dot:{cx:132,cy:192} },
    ],
  },
  'obliquos': {
    view: 'front',
    primary: ['obliq','obliq_sl','obliq_sr'],
    secondary: ['abs'],
    support: [],
    labels: [
      { x:4,   y:155, text:'Oblíquos',       anchor:'start', dot:{cx:62,cy:155} },
      { x:196, y:148, text:'Reto Abdominal', anchor:'end',   dot:{cx:128,cy:148} },
    ],
  },
  'transverso': {
    view: 'front',
    primary: ['abs','obliq'],
    secondary: ['obliq_sl','obliq_sr'],
    support: [],
    labels: [
      { x:100, y:200, text:'Core Profundo',  anchor:'middle', dot:null },
      { x:196, y:148, text:'Reto Abdominal', anchor:'end', dot:{cx:128,cy:148} },
    ],
  },
}

// ─── Component ────────────────────────────────────────────────────────
export default function AnatomySVG({ muscleId, className }) {
  const cfg = CFG[muscleId]
  const view = cfg?.view || 'front'

  return (
    <svg
      viewBox="0 0 200 420"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="200" height="420" fill="#0D0D0D" />

      {/* Silhouette */}
      <path d={SIL[view]} fill={BODY_FILL} fillOpacity="0.25" stroke={BODY_STR} strokeWidth="0.6" />

      {/* Head */}
      <circle cx="100" cy="26" r="20" fill={BODY_FILL} fillOpacity="0.25" stroke={BODY_STR} strokeWidth="0.6" />

      {/* Neck */}
      <path d="M93,46 L107,46 L109,64 L91,64 Z" fill={BODY_FILL} fillOpacity="0.25" stroke={BODY_STR} strokeWidth="0.4" />

      {cfg ? (
        <>
          {cfg.support?.map((k, i) => P[k] && (
            <path key={`sup${i}`} d={P[k]} fill={SUPPORT} fillOpacity="0.55" />
          ))}
          {cfg.secondary?.map((k, i) => P[k] && (
            <path key={`sec${i}`} d={P[k]} fill={SECONDARY} fillOpacity="0.72" />
          ))}
          {cfg.primary?.map((k, i) => P[k] && (
            <path key={`pri${i}`} d={P[k]} fill={PRIMARY} fillOpacity="0.92" />
          ))}

          {/* Labels */}
          {cfg.labels?.map((lbl, i) => {
            const textX = lbl.x
            const isLeft = lbl.anchor === 'start'
            // leader line end at text edge
            const lineEndX = isLeft ? textX + lbl.text.length * 4.8 : textX - lbl.text.length * 4.8
            return (
              <g key={`lbl${i}`}>
                {lbl.dot && (
                  <>
                    <line
                      x1={lineEndX} y1={lbl.y - 2}
                      x2={lbl.dot.cx} y2={lbl.dot.cy}
                      stroke="#6060A0"
                      strokeWidth="0.7"
                      strokeDasharray="3 2"
                    />
                    <circle cx={lbl.dot.cx} cy={lbl.dot.cy} r="2" fill="#6060A0" />
                  </>
                )}
                <text
                  x={lbl.x}
                  y={lbl.y}
                  textAnchor={lbl.anchor}
                  fill="#C8C8E8"
                  fontSize="8.5"
                  fontFamily="system-ui,-apple-system,BlinkMacSystemFont,sans-serif"
                  fontWeight="700"
                >
                  {lbl.text}
                </text>
              </g>
            )
          })}
        </>
      ) : (
        <text x="100" y="220" textAnchor="middle" fill="#444" fontSize="11"
          fontFamily="system-ui,sans-serif">
          Ilustração em breve
        </text>
      )}
    </svg>
  )
}
