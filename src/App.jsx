import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MuscleGroupPage from './components/MuscleGroupPage.jsx'
import BodyMapPage from './components/BodyMapPage.jsx'
import ProtocolPage from './components/ProtocolPage.jsx'
import { muscleGroups } from './data/muscles.js'
import { LEGS_PROTOCOL } from './data/legsprotocol.js'
import { DORSAIS_PROTOCOL } from './data/dorsaisprotocol.js'
import './App.css'

const MODULES = [
  {
    id: 'mod1',
    number: 1,
    label: 'Manual Muscular',
    icon: '📖',
    desc: 'Grupos, exercícios e técnica',
    color: '#E53E3E',
  },
  {
    id: 'mod2',
    number: 2,
    label: 'Mapa Interativo',
    icon: '🫀',
    desc: 'Boneco muscular clicável',
    color: '#9F7AEA',
  },
  {
    id: 'mod3',
    number: 3,
    label: 'Protocolo Legs',
    icon: '🦵',
    desc: '5 capítulos sobre pernas',
    color: '#48BB78',
  },
  {
    id: 'mod4',
    number: 4,
    label: 'Protocolo Dorsais',
    icon: '🔱',
    desc: '7 capítulos sobre costas',
    color: '#3182CE',
  },
]

export default function App() {
  const [activeModule, setActiveModule] = useState('mod1')
  const [activeGroupId, setActiveGroupId] = useState(muscleGroups[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const activeGroup = muscleGroups.find(g => g.id === activeGroupId) || muscleGroups[0]
  const activeMod = MODULES.find(m => m.id === activeModule)
  const hasSidebar = activeModule === 'mod1'

  function handleSelectGroup(id) {
    setActiveGroupId(id)
    setActiveModule('mod1')
    setSidebarOpen(false)
    setMenuOpen(false)
  }

  function handleModuleSelect(id) {
    setActiveModule(id)
    setSidebarOpen(false)
    setMenuOpen(false)
  }

  return (
    <div className="app-wrapper">
      {(sidebarOpen || menuOpen) && (
        <div className="sidebar-overlay" onClick={() => { setSidebarOpen(false); setMenuOpen(false) }} />
      )}

      {/* ── Header ── */}
      <header className="app-header">
        {hasSidebar && (
          <button className="ham-btn" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu grupos">
            <span className={`ham-icon ${sidebarOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        )}

        <div className="app-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">Training Manual</span>
        </div>

        {/* Active module indicator (mobile) */}
        <div
          className="active-mod-chip"
          style={{ '--mc': activeMod?.color }}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span>{activeMod?.icon}</span>
          <span className="amc-label">Módulo {activeMod?.number}</span>
          <span className="amc-chevron">▾</span>
        </div>

        {/* Desktop module tabs */}
        <nav className="header-modules">
          {MODULES.map(m => (
            <button
              key={m.id}
              className={`hmod-btn ${activeModule === m.id ? 'active' : ''}`}
              style={activeModule === m.id ? { '--mc': m.color } : {}}
              onClick={() => handleModuleSelect(m.id)}
            >
              <span className="hmod-num">Módulo {m.number}</span>
              <span className="hmod-icon">{m.icon}</span>
              <span className="hmod-label">{m.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ── Mobile module dropdown ── */}
      {menuOpen && (
        <div className="module-dropdown">
          {MODULES.map(m => (
            <button
              key={m.id}
              className={`mdrop-btn ${activeModule === m.id ? 'active' : ''}`}
              style={{ '--mc': m.color }}
              onClick={() => handleModuleSelect(m.id)}
            >
              <div className="mdrop-num-wrap">
                <span className="mdrop-num">{m.number}</span>
              </div>
              <div className="mdrop-text">
                <span className="mdrop-icon">{m.icon}</span>
                <div className="mdrop-info">
                  <div className="mdrop-title">Módulo {m.number} — {m.label}</div>
                  <div className="mdrop-desc">{m.desc}</div>
                </div>
              </div>
              {activeModule === m.id && <span className="mdrop-check">✓</span>}
            </button>
          ))}
        </div>
      )}

      {/* ── Body ── */}
      <div className="app-body">
        {hasSidebar && (
          <Sidebar
            groups={muscleGroups}
            activeId={activeGroupId}
            onSelect={handleSelectGroup}
            isOpen={sidebarOpen}
          />
        )}

        <main className={`app-main ${hasSidebar ? 'with-sidebar' : ''}`}>
          {activeModule === 'mod1' && <MuscleGroupPage group={activeGroup} />}
          {activeModule === 'mod2' && <BodyMapPage />}
          {activeModule === 'mod3' && <ProtocolPage key="legs" protocol={LEGS_PROTOCOL} />}
          {activeModule === 'mod4' && <ProtocolPage key="dorsais" protocol={DORSAIS_PROTOCOL} />}
        </main>
      </div>
    </div>
  )
}
