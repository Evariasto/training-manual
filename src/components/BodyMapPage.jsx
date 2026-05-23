import React, { useState } from 'react'
import {
  GROUP_COLORS, GROUP_INFO,
  FRONT_REGIONS, BACK_REGIONS, BODY_SILHOUETTE,
} from '../data/bodymap.js'
import './BodyMapPage.css'

export default function BodyMapPage() {
  const [view, setView] = useState('front')       // 'front' | 'back'
  const [activeId, setActiveId] = useState(null)  // selected group id
  const [hoveredId, setHoveredId] = useState(null)
  const [modoCut, setModoCut] = useState(false)

  const regions = view === 'front' ? FRONT_REGIONS : BACK_REGIONS
  const info = activeId ? GROUP_INFO[activeId] : null

  function handleRegionClick(id) {
    setActiveId(prev => prev === id ? null : id)
  }

  return (
    <div className="bmp-wrapper">
      {/* ── Header ── */}
      <div className="bmp-header">
        <div className="bmp-header-info">
          <h1 className="bmp-title">Mapa Muscular Interativo</h1>
          <p className="bmp-subtitle">Clique em um músculo para ver detalhes</p>
        </div>
        <div className="bmp-controls">
          {/* Front / Back toggle */}
          <div className="view-toggle">
            <button
              className={`vtog-btn ${view === 'front' ? 'active' : ''}`}
              onClick={() => { setView('front'); setActiveId(null) }}
            >
              ◉ Frontal
            </button>
            <button
              className={`vtog-btn ${view === 'back' ? 'active' : ''}`}
              onClick={() => { setView('back'); setActiveId(null) }}
            >
              ◎ Posterior
            </button>
          </div>

          {/* Modo Corte toggle */}
          <button
            className={`cut-toggle ${modoCut ? 'active' : ''}`}
            onClick={() => setModoCut(m => !m)}
            title="Modo Corte: volume e exercícios para definição"
          >
            {modoCut ? '🔥 Modo Corte' : '💪 Modo Bulk'}
          </button>
        </div>
      </div>

      {/* ── Body + Panel ── */}
      <div className="bmp-body-area">
        {/* SVG Figure */}
        <div className="bmp-figure-wrap">
          <svg
            viewBox="0 0 200 420"
            className="bmp-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Body silhouette (background) */}
            <path
              d={BODY_SILHOUETTE[view]}
              fill="#1e1e2e"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Head */}
            <circle
              cx="100" cy="26" r="20"
              fill="#1e1e2e"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Neck */}
            <path
              d="M 91,46 L 109,46 L 111,64 L 89,64 Z"
              fill="#1a1a28"
              stroke="none"
            />

            {/* Muscle regions */}
            {regions.map(region => {
              const color = GROUP_COLORS[region.id]
              const isActive = activeId === region.id
              const isHovered = hoveredId === region.id
              const opacity = activeId
                ? (isActive ? 0.85 : 0.15)
                : (isHovered ? 0.80 : 0.40)

              return (
                <g
                  key={region.id}
                  className="muscle-region"
                  onClick={() => handleRegionClick(region.id)}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {region.paths.map((d, i) => (
                    <path
                      key={i}
                      d={d}
                      fill={color}
                      fillOpacity={opacity}
                      stroke={color}
                      strokeWidth={isActive || isHovered ? 1.5 : 0.5}
                      strokeOpacity={isActive || isHovered ? 0.9 : 0.3}
                      style={{ transition: 'fill-opacity 0.2s, stroke-width 0.2s' }}
                    />
                  ))}
                  {/* Glow on hover/active */}
                  {(isActive || isHovered) && region.paths.map((d, i) => (
                    <path
                      key={`glow-${i}`}
                      d={d}
                      fill="none"
                      stroke={color}
                      strokeWidth="4"
                      strokeOpacity="0.18"
                      style={{ filter: 'blur(3px)' }}
                    />
                  ))}
                </g>
              )
            })}

            {/* Labels */}
            {regions.map(region => {
              const isActive = activeId === region.id
              const isHovered = hoveredId === region.id
              if (!isActive && !isHovered) return null
              const color = GROUP_COLORS[region.id]
              const info = GROUP_INFO[region.id]
              return (
                <text
                  key={`lbl-${region.id}`}
                  x={region.labelPos.x}
                  y={region.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={color}
                  fontSize="9"
                  fontWeight="800"
                  fontFamily="Inter, sans-serif"
                  style={{ pointerEvents: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  {info?.label || region.id}
                </text>
              )
            })}

            {/* Feet visual */}
            <path
              d="M 48,394 L 44,414 L 82,414 L 80,394 Z"
              fill="#1e1e2e" stroke="var(--border)" strokeWidth="0.8"
            />
            <path
              d="M 152,394 L 156,414 L 118,414 L 120,394 Z"
              fill="#1e1e2e" stroke="var(--border)" strokeWidth="0.8"
            />
          </svg>

          {/* Legend */}
          <div className="bmp-legend">
            {Object.entries(GROUP_INFO).map(([id, info]) => {
              const color = GROUP_COLORS[id]
              const isActive = activeId === id
              return (
                <button
                  key={id}
                  className={`legend-chip ${isActive ? 'active' : ''}`}
                  style={{ '--lc': color }}
                  onClick={() => handleRegionClick(id)}
                >
                  <span className="legend-dot" />
                  {info.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Info Panel */}
        <div className={`bmp-panel ${info ? 'visible' : ''}`}>
          {info ? (
            <InfoPanel
              info={info}
              color={GROUP_COLORS[activeId]}
              modoCut={modoCut}
              onClose={() => setActiveId(null)}
            />
          ) : (
            <div className="bmp-panel-empty">
              <div className="bmp-panel-empty-icon">👆</div>
              <div className="bmp-panel-empty-text">
                Clique em um músculo no diagrama para ver informações detalhadas
              </div>
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

      {/* Mode badge */}
      <div className="ip-mode-badge" style={{ background: modoCut ? 'rgba(229,62,62,0.12)' : 'rgba(72,187,120,0.12)', borderColor: modoCut ? '#E53E3E' : '#48BB78', color: modoCut ? '#E53E3E' : '#48BB78' }}>
        {modoCut ? '🔥 Modo Corte ativo' : '💪 Modo Bulk ativo'}
      </div>

      {/* Key Points */}
      <div className="ip-section">
        <div className="ip-section-title">📌 Pontos-Chave</div>
        <ul className="ip-list">
          {info.keyPoints.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>

      {/* Volume */}
      <div className="ip-section">
        <div className="ip-section-title">📊 Volume Recomendado</div>
        <div className="ip-volume">
          {modoCut ? info.volumeCut : info.volumeBulk}
        </div>
      </div>

      {/* Best exercises */}
      <div className="ip-section">
        <div className="ip-section-title">🏆 Melhores Exercícios</div>
        <div className="ip-exercises">
          {info.bestExercises.map((ex, i) => (
            <span key={i} className="ip-ex-chip">{ex}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
