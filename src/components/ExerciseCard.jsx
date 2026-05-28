import React, { useState } from 'react'
import { getExerciseImgs } from '../data/exerciseGifs.js'
import './ExerciseCard.css'

const DIFF_LABEL = {
  beginner: 'Iniciante',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
}

const DIFF_CLASS = {
  beginner: 'badge-beginner',
  intermediate: 'badge-inter',
  advanced: 'badge-advanced',
}

export default function ExerciseCard({ exercise, accentColor }) {
  const [expanded, setExpanded] = useState(false)
  const imgs = getExerciseImgs(exercise.name)

  return (
    <div className={`ex-card ${expanded ? 'expanded' : ''}`} style={{ '--ac': accentColor }}>
      {/* Card Header */}
      <button className="ex-card-header" onClick={() => setExpanded(o => !o)}>
        <div className="ex-card-top">
          <span className="ex-name">{exercise.name}</span>
          <div className="ex-badges">
            <span className={`badge ${DIFF_CLASS[exercise.difficulty]}`}>
              {DIFF_LABEL[exercise.difficulty] || exercise.difficulty}
            </span>
            {exercise.equipment && exercise.equipment.map(eq => (
              <span key={eq} className="badge badge-equip">{eq}</span>
            ))}
          </div>
        </div>
        {imgs && (
          <div className="ex-thumb-wrap">
            <img src={imgs.start} alt="" className="ex-thumb" loading="lazy" />
          </div>
        )}
        <span className={`ex-chevron ${expanded ? 'up' : ''}`}>▾</span>
      </button>

      {/* Expandable content */}
      {expanded && (
        <div className="ex-card-body">

          {/* Exercise demo images */}
          {imgs && (
            <div className="ex-demo">
              <div className="ex-demo-frame">
                <img src={imgs.start} alt="Posição inicial" className="ex-demo-img" loading="lazy" />
                <span className="ex-demo-label">Início</span>
              </div>
              <div className="ex-demo-frame">
                <img src={imgs.end} alt="Posição final" className="ex-demo-img" loading="lazy" />
                <span className="ex-demo-label">Final</span>
              </div>
            </div>
          )}

          {/* How To */}
          {exercise.howTo && exercise.howTo.length > 0 && (
            <div className="ex-section">
              <div className="ex-section-title">📋 Execução</div>
              <ol className="ex-steps">
                {exercise.howTo.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Common Mistakes */}
          {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
            <div className="ex-section">
              <div className="ex-section-title">⚠️ Erros Comuns</div>
              <ul className="ex-mistakes">
                {exercise.commonMistakes.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Mind-Muscle */}
          {exercise.mindMuscle && (
            <div className="ex-section">
              <div className="ex-section-title">🧠 Conexão Mente-Músculo</div>
              <p className="ex-mindmuscle">{exercise.mindMuscle}</p>
            </div>
          )}

          {/* Volume */}
          {exercise.volume && (
            <div className="ex-section">
              <div className="ex-section-title">📊 Volume Sugerido</div>
              <div className="ex-volume">{exercise.volume}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
