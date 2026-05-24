import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard.jsx'
import PhraseGenerator from './PhraseGenerator.jsx'
import './MuscleGroupPage.css'

export default function MuscleGroupPage({ group }) {
  const [activeMuscleId, setActiveMuscleId] = useState(null)

  const activeMuscle = group.muscles.find(m => m.id === activeMuscleId) || null

  return (
    <div className="mgp">
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
            <MuscleCard key={muscle.id} muscle={muscle} color={group.color} />
          ))
        }
      </div>

      <PhraseGenerator
        context={
          activeMuscle
            ? `Treinamento de ${activeMuscle.name} (${group.name})`
            : `Treinamento do grupo muscular ${group.name}`
        }
      />
    </div>
  )
}

function MuscleCard({ muscle, color }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="muscle-card" style={{ '--gc': color }}>
      {/* Muscle header */}
      <div className="muscle-card-header">
        <div className="muscle-header-info">
          <h2 className="muscle-name">{muscle.name}</h2>
          {muscle.scientificName && (
            <div className="muscle-sci">{muscle.scientificName}</div>
          )}
        </div>
        <button
          className={`info-toggle ${showInfo ? 'active' : ''}`}
          onClick={() => setShowInfo(o => !o)}
          title="Informações do músculo"
        >
          ℹ
        </button>
      </div>

      {/* Info panel */}
      {showInfo && (
        <div className="muscle-info-panel">
          {muscle.function && (
            <div className="muscle-info-row">
              <span className="muscle-info-label">Função</span>
              <span className="muscle-info-val">{muscle.function}</span>
            </div>
          )}
          {muscle.benefits && muscle.benefits.length > 0 && (
            <div className="muscle-info-row">
              <span className="muscle-info-label">Benefícios ao desenvolver</span>
              <ul className="muscle-benefits">
                {muscle.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

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
