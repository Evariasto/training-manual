import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MuscleGroupPage from './components/MuscleGroupPage.jsx'
import BodyMapPage from './components/BodyMapPage.jsx'
import ProtocolPage from './components/ProtocolPage.jsx'
import PlannerPage from './components/PlannerPage.jsx'
import { muscleGroups } from './data/muscles.js'
import { LEGS_PROTOCOL } from './data/legsprotocol.js'
import { DORSAIS_PROTOCOL } from './data/dorsaisprotocol.js'
import { PEITORAL_PROTOCOL } from './data/peitoralprotocol.js'
import { OMBROS_PROTOCOL } from './data/ombrosprotocol.js'
import { BRACOS_PROTOCOL } from './data/bracosprotocol.js'
import { CORE_PROTOCOL } from './data/coreprotocol.js'
import './App.css'

const MODULES = [
  { id: 'mod1', number: 1, label: 'Manual Muscular',   icon: '📖', desc: 'Grupos, exercícios e técnica',              color: '#E53E3E' },
  { id: 'mod2', number: 2, label: 'Mapa Interativo',   icon: '🫀', desc: 'Boneco muscular clicável',                  color: '#9F7AEA' },
  { id: 'mod3', number: 3, label: 'Protocolo Legs',    icon: '🦵', desc: '5 capítulos sobre pernas',                  color: '#48BB78' },
  { id: 'mod4', number: 4, label: 'Protocolo Dorsais', icon: '🔱', desc: '7 capítulos sobre costas',                  color: '#3182CE' },
  { id: 'mod5', number: 5, label: 'Protocolo Peito',   icon: '🫁', desc: '5 capítulos sobre peitoral',                color: '#E53E3E' },
  { id: 'mod6', number: 6, label: 'Protocolo Ombros',  icon: '🔥', desc: '5 capítulos sobre deltoides',              color: '#9F7AEA' },
  { id: 'mod7', number: 7, label: 'Protocolo Braços',  icon: '💪', desc: '5 capítulos — bíceps, tríceps e braquial', color: '#ED8936' },
  { id: 'mod8', number: 8, label: 'Protocolo Core',    icon: '🎯', desc: 'Abdômen, oblíquos e core completo',         color: '#6366F1' },
  { id: 'mod9', number: 9, label: 'Meu Planejador',    icon: '🗓', desc: 'Crie sua periodização personalizada',       color: '#F6AD55' },
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

      <header className="app-header">
        {hasSidebar && (
          <button className="ham-btn" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu grupos">
            <span className={ham-icon + (sidebarOpen ? 'open' : '')}>
              <span /><span /><span />
            </span>
          </button>
        )}
        <div className="app-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">Training Manual</span>
        </div>
        <div className="active-mod-chip" style={{ '--mc': activeMod?.color }} onClick={() => setMenuOpen(o => !o)}>
          <span>{activeMod?.icon}</span>
          <span className="amc-label">Módulo {activeMod?.number} — {activeMod?.label}</span>
          <span className="amc-chevron">{menuOpen ? '▴' : '▾'}</span>
        </div>
        <nav className="header-modules">
          {MODULES.map(m => (
            <button key={m.id} className={hmod-btn +(activeModule===m.id?'active':'')} style={activeModule===m.id?{'--mc':m.color}:{}} onClick={() => handleModuleSelect(m.id)} title={m.desc}>
              <span className="hmod-num">Módulo {m.number}</span>
              <span className="hmod-icon">{m.icon}</span>
              <span className="hmod-label">{m.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {menuOpen && (
        <div className="module-dropdown">
          {MODULES.map(m => (
            <button key={m.id} className={mdrop-btn +(activeModule===m.id?'active':'')} style={{'--mc':m.color}} onClick={() => handleModuleSelect(m.id)}>
              <div className="mdrop-num-wrap"><span className="mdrop-num">{m.number}</span></div>
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

      <div className="app-body">
        {hasSidebar && (
          <Sidebar groups={muscleGroups} activeId={activeGroupId} onSelect={handleSelectGroup} isOpen={sidebarOpen} />
        )}
        <main className={`app-main ${hasSidebar ? 'with-sidebar' : ''}`}>
          {activeModule === 'mod1' && <MuscleGroupPage group={activeGroup} />}
          {activeModule === 'mod2' && <BodyMapPage />}
          {activeModule === 'mod3' && <ProtocolPage key="legs"    protocol={LEGS_PROTOCOL} />}
          {activeModule === 'mod4' && <ProtocolPage key="dorsais" protocol={DORSAIS_PROTOCOL} />}
          {activeModule === 'mod5' && <ProtocolPage key="peito"   protocol={PEITORAL_PROTOCOL} />}
          {activeModule === 'mod6' && <ProtocolPage key="ombros"  protocol={OMBROS_PROTOCOL} />}
          {activeModule === 'mod7' && <ProtocolPage key="bracos"  protocol={BRACOS_PROTOCOL} />}
          {activeModule === 'mod8' && <ProtocolPage key="core"    protocol={CORE_PROTOCOL} />}
          {activeModule === 'mod9' && <PlannerPage />}
        </main>
      </div>
    </div>
  )
}