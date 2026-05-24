import React from 'react'
import './Sidebar.css'

export default function Sidebar({ groups, activeId, onSelect, isOpen }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-inner">
        <div className="sidebar-title">Grupos Musculares</div>
        <ul className="group-list">
          {groups.map(g => (
            <li key={g.id}>
              <button
                className={`group-btn ${activeId === g.id ? 'active' : ''}`}
                onClick={() => onSelect(g.id)}
                style={activeId === g.id ? { '--gc': g.color } : {}}
              >
                <span className="group-icon">{g.icon}</span>
                <span className="group-name">{g.name}</span>
                <span className="group-count">{g.muscles.length}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-footer-text">Manual de Treino v1.0</div>
          <div className="sidebar-footer-sub">Módulo 1 — Base Muscular</div>
        </div>
      </div>
    </nav>
  )
}
