import React, { useState, useEffect, useRef } from 'react'
import AnatomySVG from './AnatomySVG.jsx'
import './MuscleModal.css'

export default function MuscleModal({ muscle, groupColor, onClose }) {
  const [activeExIdx, setActiveExIdx] = useState(0)
  const [svgKey, setSvgKey] = useState(0)          // força re-fade ao trocar exercício
  const overlayRef = useRef(null)
  const touchStartY = useRef(null)

  // Fecha com Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Bloqueia scroll do body enquanto modal está aberto
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Swipe down para fechar (mobile)
  const onTouchStart = e => { touchStartY.current = e.touches[0].clientY }
  const onTouchEnd = e => {
    if (touchStartY.current !== null) {
      const dy = e.changedTouches[0].clientY - touchStartY.current
      if (dy > 80) onClose()
      touchStartY.current = null
    }
  }

  const selectExercise = idx => {
    setActiveExIdx(idx)
    setSvgKey(k => k + 1) // anima SVG (fade)
  }

  const activeEx = muscle.exercises[activeExIdx]
  const diffLabel = {
    beginner:     'Iniciante',
    intermediate: 'Intermediário',
    advanced:     'Avançado',
  }

  return (
    <div
      className="mm-overlay"
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Anatomia — ${muscle.name}`}
    >
      <div
        className="mm-panel"
        style={{ '--mc': groupColor }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* handle mobile */}
        <div className="mm-handle" aria-hidden="true" />

        {/* Botão fechar */}
        <button className="mm-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="mm-body">

          {/* ── Coluna esquerda: Ilustração ─────────────────── */}
          <div className="mm-col-illus">
            <div className="mm-svg-pair" key={svgKey}>
              <div className="mm-svg-wrap">
                <AnatomySVG muscleId={muscle.id} forcedView="front" groupColor={groupColor} />
              </div>
              <div className="mm-svg-wrap">
                <AnatomySVG muscleId={muscle.id} forcedView="back" groupColor={groupColor} />
              </div>
            </div>

            <div className="mm-legend">
              <span className="mm-legend-item">
                <span className="mm-dot mm-dot--primary" />Principal
              </span>
              <span className="mm-legend-item">
                <span className="mm-dot mm-dot--secondary" />Secundário
              </span>
              <span className="mm-legend-item">
                <span className="mm-dot mm-dot--support" />Suporte
              </span>
              <span className="mm-legend-item mm-legend-arrow">
                <span className="mm-arrow-icon">→</span>Movimento
              </span>
            </div>
          </div>

          {/* ── Coluna direita: Ficha Técnica ───────────────── */}
          <div className="mm-col-sheet">

            {/* Cabeçalho */}
            <div className="mm-header">
              <h2 className="mm-name">{muscle.name}</h2>
              {muscle.scientificName && (
                <p className="mm-sci">{muscle.scientificName}</p>
              )}
            </div>

            {/* Função principal */}
            {muscle.function && (
              <div className="mm-section">
                <h3 className="mm-section-title">Função Principal</h3>
                <p className="mm-section-text">{muscle.function}</p>
              </div>
            )}

            {/* Dica mente-músculo do exercício selecionado */}
            {activeEx?.mindMuscle && (
              <div className="mm-section mm-mind">
                <h3 className="mm-section-title">Dica Mente-Músculo</h3>
                <p className="mm-section-text">{activeEx.mindMuscle}</p>
              </div>
            )}

            {/* Lista de exercícios (clicável) */}
            <div className="mm-section">
              <h3 className="mm-section-title">Exercícios Principais</h3>
              <div className="mm-ex-list">
                {muscle.exercises.map((ex, idx) => (
                  <button
                    key={idx}
                    className={`mm-ex-btn ${activeExIdx === idx ? 'active' : ''}`}
                    onClick={() => selectExercise(idx)}
                  >
                    <span className="mm-ex-name">{ex.name}</span>
                    <span className={`mm-ex-diff d-${ex.difficulty}`}>
                      {diffLabel[ex.difficulty] || ex.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalhe do exercício selecionado */}
            {activeEx && (
              <div className="mm-section mm-ex-detail">
                <h3 className="mm-section-title">{activeEx.name}</h3>

                {activeEx.volume && (
                  <div className="mm-volume">{activeEx.volume}</div>
                )}

                <div className="mm-steps">
                  {activeEx.howTo.map((step, i) => (
                    <div key={i} className="mm-step">
                      <span className="mm-step-num">{i + 1}</span>
                      <span className="mm-step-text">{step}</span>
                    </div>
                  ))}
                </div>

                {activeEx.commonMistakes?.length > 0 && (
                  <div className="mm-mistakes">
                    <p className="mm-mistakes-title">Erros Comuns</p>
                    {activeEx.commonMistakes.map((m, i) => (
                      <p key={i} className="mm-mistake">⚠ {m}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
