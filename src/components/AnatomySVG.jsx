import React from 'react'
import { FRONT_REGIONS, BACK_REGIONS, BODY_SILHOUETTE, GROUP_COLORS } from '../data/bodymap.js'

// Maps muscleId (from muscles.js) to bodymap group id
const MUSCLE_TO_GROUP = {
  // Peito
  'peitoral-clavicular': 'peito',
  'peitoral-esternal':   'peito',
  'peitoral-menor':      'peito',
  // Costas
  'latissimo':           'costas',
  'trapezio':            'costas',
  'romboides':           'costas',
  'redondo-maior':       'costas',
  'eretores':            'costas',
  // Ombros
  'deltoide-anterior':   'ombros',
  'deltoide-lateral':    'ombros',
  'deltoide-posterior':  'ombros',
  'manguito':            'ombros',
  // Braços
  'biceps':              'bracos',
  'triceps':             'bracos',
  'braquial':            'bracos',
  'braquiorradial':      'bracos',
  // Membros inferiores
  'quadriceps':          'membros-inferiores',
  'isquiotibiais':       'membros-inferiores',
  'gluteos':             'membros-inferiores',
  'panturrilha':         'membros-inferiores',
  'adutores':            'membros-inferiores',
  // Core
  'reto-abdominal':      'core',
  'obliquos':            'core',
  'transverso':          'core',
}

export default function AnatomySVG({ muscleId, forcedView = 'front', groupColor }) {
  const groupId = MUSCLE_TO_GROUP[muscleId]
  const color = groupColor || GROUP_COLORS[groupId] || '#E53E3E'
  const regions = forcedView === 'front' ? FRONT_REGIONS : BACK_REGIONS

  return (
    <svg viewBox="0 0 200 420" style={{ width: '100%', maxWidth: 160, display: 'block' }}
      xmlns="http://www.w3.org/2000/svg">
      <path d={BODY_SILHOUETTE[forcedView]} fill="#1e1e2e" stroke="#2A2A3A" strokeWidth="1" />
      <circle cx="100" cy="26" r="20" fill="#1e1e2e" stroke="#2A2A3A" strokeWidth="1" />
      <path d="M91,46 L109,46 L111,64 L89,64 Z" fill="#1a1a28" />

      {regions.map(region => {
        const isTarget = region.id === groupId
        const opacity = groupId ? (isTarget ? 0.82 : 0.10) : 0.35
        const rc = GROUP_COLORS[region.id] || '#888'
        return region.paths.map((d, i) => (
          <path key={`${region.id}-${i}`} d={d}
            fill={isTarget ? color : rc}
            fillOpacity={opacity}
            stroke={isTarget ? color : rc}
            strokeWidth={isTarget ? 1.5 : 0.4}
            strokeOpacity={isTarget ? 0.8 : 0.2}
          />
        ))
      })}

      <path d="M48,394 L44,414 L82,414 L80,394 Z" fill="#1e1e2e" stroke="#2A2A3A" strokeWidth="0.8" />
      <path d="M152,394 L156,414 L118,414 L120,394 Z" fill="#1e1e2e" stroke="#2A2A3A" strokeWidth="0.8" />
    </svg>
  )
}
