import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard.jsx'
import MuscleModal from './MuscleModal.jsx'
import './MuscleGroupPage.css'

export default function MuscleGroupPage({ group }) {
  const [activeMuscleId, setActiveMuscleId] = useState(null)
  const [modalMuscle, setModalMuscle]       = useState(null)

  return (
    <div className="mgp">
      {/* Modal de anatomia */}
      {modalMuscle && (
        <MuscleModal
          muscle={modalMuscle}
          groupColor={group.color}
          onClose={() => setModalMuscle(null)}
        />
      )}

      {/* Group hero */}
      <div className="mgp-hero" style={{ '--gc': group.color }}>
        <div className="mgp-hero-icon">{group.icon}</div>
        <div className="mgp-hero-info">
          <h1 className="mgp-hero-title">{group.name}</h1>
          <p className="mgp-hero-desc">{group.description}</p>
        </div>
        <div className="mgp-hero-badge">{group.muscles.length} músculos</div>
      </div>

      {/* Muscle selector tabs */}
      <div className="mgp-tabs" role="tablist">
        <button
          role="tab"
          className={`mgp-tab ${activeMuscleId === null ? 'active' : ''}`}
          onClick={() => setActiveMuscleId(null)}
          style={activeMuscleId === null ? { '--gc': group.color } : {}}
        >
          Todos
        </button>
        {group.muscles.map(m => (
          <button
            key={m.id}
            role="tab"
            className={`mgp-tab ${activeMuscleId === m.id ? 'active' : ''}`}
            onClick={() => setActiveMuscleId(m.id)}
            style={activeMuscleId === m.id ? { '--gc': group.color } : {}}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Muscle cards */}
      <div className="mgp-muscles">
        {group.muscles
          .filter(m => activeMuscleId === null || m.id === activeMuscleId)
          .map(muscle => (
            <MuscleCard
              key={muscle.id}
              muscle={muscle}
              color={group.color}
              onOpenModal={() => setModalMuscle(muscle)}
            />
          ))
        }
      </div>
    </div>
  )
}

function MuscleCard({ muscle, color, onOpenModal }) {
  return (
    <div className="muscle-card" style={{ '--gc': color }}>

      {/* Header clicável — abre modal de anatomia */}
      <button
        className="muscle-card-header"
        onClick={onOpenModal}
        aria-label={`Ver anatomia de ${muscle.name}`}
      >
        <div className="muscle-header-info">
          <h2 className="muscle-name">{muscle.name}</h2>
          {muscle.scientificName && (
            <div className="muscle-sci">{muscle.scientificName}</div>
          )}
        </div>
        <div className="muscle-anatomy-cta">
          <svg className="muscle-anatomy-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10 6.5C8.6 6.5 7.5 7.6 7.5 9s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S11.4 6.5 10 6.5Z"
              fill="currentColor" fillOpacity=".6"/>
            <path d="M6 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2"
              strokeLinecap="round"/>
          </svg>
          <span className="muscle-anatomy-label">Ver anatomia</span>
        </div>
      </button>

      {/* Exercise count */}
      <div className="muscle-ex-header">
        <span className="muscle-ex-title">Exercícios</span>
        <span className="muscle-ex-count">{muscle.exercises.length}</span>
      </div>

      {/* Exercise cards */}
      <div className="muscle-exercises">
        {muscle.exercises.map((ex, i) => (
          <ExerciseCard key={i} exercise={ex} accentColor={color} />
        ))}
      </div>
    </div>
  )
}
