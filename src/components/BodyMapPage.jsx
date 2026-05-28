import React, { useState } from 'react'
import Body from 'react-muscle-highlighter'
import { GROUP_COLORS, GROUP_INFO } from '../data/bodymap.js'
import './BodyMapPage.css'

const GROUP_SLUGS = {
  peito:                { front: ['chest'],                               back: [] },
  costas:               { front: [],                                      back: ['upper-back', 'trapezius'] },
  ombros:               { front: ['deltoids'],                            back: ['deltoids'] },
  bracos:               { front: ['biceps', 'forearm'],                   back: ['triceps'] },
  'membros-inferiores': { front: ['quadriceps', 'adductors', 'tibialis'], back: ['hamstring', 'gluteal', 'calves'] },
  core:                 { front: ['abs', 'obliques'],                     back: ['lower-back'] },
}

function hex2rgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

function buildBodyData(view, activeId) {
  const data = []
  Object.entries(GROUP_SLUGS).forEach(([groupId, viewMap]) => {
    const slugs = viewMap[view] || []
    if (!slugs.length) return
    const color = GROUP_COLORS[groupId]
    const alpha = activeId ? (activeId === groupId ? 1.0 : 0.12) : 0.52
    slugs.forEach(slug => {
      data.push({ slug, color: alpha === 1.0 ? color : hex2rgba(color, alpha) })
    })
  })
  return data
}

export default function BodyMapPage() {
  const [view, setView]         = useState('front')
  const [activeId, setActiveId] = useState(null)
  const [modoCut, setModoCut]   = useState(false)

  const info = activeId ? GROUP_INFO[activeId] : null

  function handleGroupClick(id) {
    setActiveId(prev => prev === id ? null : id)
  }

  return (
    <div className="bmp-wrapper">
      <div className="bmp-header">
        <div className="bmp-header-info">
          <h1 className="bmp-title">Mapa Muscular Interativo</h1>
          <p className="bmp-subtitle">Selecione um grupo muscular para ver detalhes</p>
        </div>
        <div className="bmp-controls">
          <div className="view-toggle">
            <button className={`vtog-btn ${view === 'front' ? 'active' : ''}`} onClick={() => { setView('front'); setActiveId(null) }}>◉ Frontal</button>
            <button className={`vtog-btn ${view === 'back' ? 'active' : ''}`} onClick={() => { setView('back'); setActiveId(null) }}>◎ Posterior</button>
          </div>
          <button className={`cut-toggle ${modoCut ? 'active' : ''}`} onClick={() => setModoCut(m => !m)}>
            {modoCut ? '🔥 Modo Corte' : '💪 Modo Bulk'}
          </button>
        </div>
      </div>

      <div className="bmp-body-area">
        <div className="bmp-figure-wrap">
          <div className="bmp-body-lib">
            <Body
              data={buildBodyData(view, activeId)}
              side={view}
              scale={1.18}
              border="#303050"
              defaultFill="#1C1C2E"
            />
          </div>
          <div className="bmp-legend">
            {Object.entries(GROUP_INFO).map(([id, gInfo]) => {
              const color = GROUP_COLORS[id]
              const isActive = activeId === id
              return (
                <button key={id} className={`legend-chip ${isActive ? 'active' : ''}`} style={{ '--lc': color }} onClick={() => handleGroupClick(id)}>
                  <span className="legend-dot" />
                  {gInfo.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className={`bmp-panel ${info ? 'visible' : ''}`}>
          {info ? (
            <InfoPanel info={info} color={GROUP_COLORS[activeId]} modoCut={modoCut} onClose={() => setActiveId(null)} />
          ) : (
            <div className="bmp-panel-empty">
              <div className="bmp-panel-empty-icon">👆</div>
              <div className="bmp-panel-empty-text">Clique em um grupo muscular na legenda para ver informações detalhadas</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function InfoPanel({ info, color, modoCut, onClose }) {
  return (
    <div className="info-panel" style={{ '--pc': color }}>
      <div className="ip-header">
        <span className="ip-icon">{info.icon}</span>
        <div className="ip-title-block">
          <div className="ip-label">{info.label}</div>
          <div className="ip-headline">{info.headline}</div>
        </div>
        <button className="ip-close" onClick={onClose}>✕</button>
      </div>
      <div className="ip-mode-badge" style={{ background: modoCut ? 'rgba(229,62,62,0.12)' : 'rgba(72,187,120,0.12)', borderColor: modoCut ? '#E53E3E' : '#48BB78', color: modoCut ? '#E53E3E' : '#48BB78' }}>
        {modoCut ? '🔥 Modo Corte ativo' : '💪 Modo Bulk ativo'}
      </div>
      <div className="ip-section">
        <div className="ip-section-title">📌 Pontos-Chave</div>
        <ul className="ip-list">{info.keyPoints.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
      </div>
      <div className="ip-section">
        <div className="ip-section-title">📊 Volume Recomendado</div>
        <div className="ip-volume">{modoCut ? info.volumeCut : info.volumeBulk}</div>
      </div>
      <div className="ip-section">
        <div className="ip-section-title">🏆 Melhores Exercícios</div>
        <div className="ip-exercises">{info.bestExercises.map((ex, i) => <span key={i} className="ip-ex-chip">{ex}</span>)}</div>
      </div>
    </div>
  )
}
