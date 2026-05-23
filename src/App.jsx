import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MuscleGroupPage from './components/MuscleGroupPage.jsx'
import BodyMapPage from './components/BodyMapPage.jsx'
import ProtocolPage from './components/ProtocolPage.jsx'
import { muscleGroups } from './data/muscles.js'
import { LEGS_PROTOCOL } from './data/legsprotocol.js'
import './App.css'

const MODULES = [
  { id: 'mod1', label: 'Manual Muscular', icon: '📖' },
  { id: 'mod2', label: 'Mapa Interativo', icon: '🫀' },
  { id: 'mod3', label: 'Protocolo Legs', icon: '🦵' },
]

export default function App() {
  const [activeModule, setActiveModule] = useState('mod1')
  const [activeGroupId, setActiveGroupId] = useState(muscleGroups[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeGroup = muscleGroups.find(g => g.id === activeGroupId) || muscleGroups[0]

  function handleSelectGroup(id) {
    setActiveGroupId(id)
    setActiveModule('mod1')
    setSidebarOpen(false)
  }

  function handleModuleSelect(id) {
    setActiveModule(id)
    setSidebarOpen(false)
  }

  const hasSidebar = activeModule === 'mod1'

  return (
    <div className="app-wrapper">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header */}
      <header className="app-header">
        <button
          className="ham-btn"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`ham-icon ${sidebarOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
        <div className="app-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">Training Manual</span>
        </div>

        <div className="header-modules">
          {MODULES.map(m => (
            <button
              key={m.id}
              className={`hmod-btn ${activeModule === m.id ? 'active' : ''}`}
              onClick={() => handleModuleSelect(m.id)}
            >
              {m.icon} {m.label}
            </button>
          ))}
        </div>
      </header>

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
          {activeModule === 'mod3' && <ProtocolPage protocol={LEGS_PROTOCOL} />}
        </main>
      </div>
    </div>
  )
}
