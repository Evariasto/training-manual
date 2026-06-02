import React from 'react'
import Body from 'react-muscle-highlighter'

// Map our exercise muscle IDs → library slugs per view
const SLUGS = {
  'peitoral-clavicular': {
    front: { pri: ['chest'], sec: ['deltoids'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'peitoral-esternal': {
    front: { pri: ['chest'], sec: ['deltoids', 'biceps'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'peitoral-menor': {
    front: { pri: ['chest'], sec: [], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'latissimo': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['upper-back'], sec: ['triceps'], sup: ['trapezius', 'deltoids'] },
  },
  'trapezio': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['trapezius'], sec: ['deltoids'], sup: ['upper-back'] },
  },
  'romboides': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['upper-back'], sec: ['trapezius', 'deltoids'], sup: [] },
  },
  'deltoide-anterior': {
    front: { pri: ['deltoids'], sec: ['chest'], sup: ['biceps'] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'deltoide-lateral': {
    front: { pri: ['deltoids'], sec: [], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'deltoide-posterior': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['deltoids'], sec: ['upper-back'], sup: ['trapezius'] },
  },
  'biceps': {
    front: { pri: ['biceps'], sec: ['forearm'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'triceps': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['triceps'], sec: ['deltoids'], sup: [] },
  },
  'braquial': {
    front: { pri: ['biceps'], sec: [], sup: ['forearm'] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'quadriceps': {
    front: { pri: ['quadriceps'], sec: ['adductors'], sup: ['tibialis'] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'isquiotibiais': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['hamstring'], sec: ['gluteal', 'calves'], sup: [] },
  },
  'gluteos': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['gluteal'], sec: ['hamstring'], sup: ['lower-back'] },
  },
  'panturrilha': {
    front: { pri: [], sec: [], sup: [] },
    back:  { pri: ['calves'], sec: ['hamstring'], sup: [] },
  },
  'adutores': {
    front: { pri: ['adductors'], sec: ['quadriceps'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'reto-abdominal': {
    front: { pri: ['abs'], sec: ['obliques'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'obliquos': {
    front: { pri: ['obliques'], sec: ['abs'], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
  'transverso': {
    front: { pri: ['abs', 'obliques'], sec: [], sup: [] },
    back:  { pri: [], sec: [], sup: [] },
  },
}

function rgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

export default function AnatomySVG({ muscleId, forcedView = 'front', groupColor = '#E53E3E' }) {
  const m = SLUGS[muscleId]?.[forcedView] || { pri: [], sec: [], sup: [] }

  const data = [
    ...m.pri.map(slug => ({ slug, color: groupColor })),
    ...m.sec.map(slug => ({ slug, color: rgba(groupColor, 0.68) })),
    ...m.sup.map(slug => ({ slug, color: rgba(groupColor, 0.40) })),
  ]

  return (
    <Body
      data={data}
      side={forcedView}
      scale={1}
      border="#303050"
      defaultFill="#1C1C2E"
    />
  )
}
