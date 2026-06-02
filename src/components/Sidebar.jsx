import React from 'react'
import './Sidebar.css'

export default function Sidebar({ groups, activeId, onSelect, isOpen, onTrainer, trainerActive }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-inner">
        <div className="sidebar-title">Grupos Musculares</div>
        <ul className="group-list">
          {groups.map(g => (
            <li key={g.id}>
              <button
                className={`group-btn ${activeId === g.id && !trainerActive ? 'active' : ''}`}
                onClick={() => onSelect(g.id)}
                style={activeId === g.id && !trainerActive ? { '--gc': g.color } : {}}
              >
                <span className="group-icon">{g.icon}</span>
                <span className="group-name">{g.name}</span>
                <span className="group-count">{g.muscles.length}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* ── Área do Treinador ── */}
        <div className="trainer-zone">
          <div className="trainer-zone-label">⭐ Área do Treinador</div>
          <button
            className={`trainer-zone-btn ${trainerActive ? 'active' : ''}`}
            onClick={onTrainer}
          >
            <span className="tz-icon">📋</span>
            <span className="tz-label">Meu Treino</span>
          </button>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer-text">Training Manual v1.0</div>
          <div className="sidebar-footer-sub">Módulo 1 — Base Muscular</div>
        </div>
      </div>
    </nav>
  )
}
