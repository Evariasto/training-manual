import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MuscleGroupPage from './components/MuscleGroupPage.jsx'
import { muscleGroups } from './data/muscles.js'
import './App.css'

export default function App() {
  const [activeGroupId, setActiveGroupId] = useState(muscleGroups[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeGroup = muscleGroups.find(g => g.id === activeGroupId) || muscleGroups[0]

  function handleSelectGroup(id) {
    setActiveGroupId(id)
    setSidebarOpen(false)
  }

  return (
    <div className="app-wrapper">
      {/* Overlay for mobile sidebar */}
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
        <div className="header-badge">Módulo 1</div>
      </header>

      <div className="app-body">
        {/* Sidebar */}
        <Sidebar
          groups={muscleGroups}
          activeId={activeGroupId}
          onSelect={handleSelectGroup}
          isOpen={sidebarOpen}
        />

        {/* Main content */}
        <main className="app-main">
          <MuscleGroupPage group={activeGroup} />
        </main>
      </div>
    </div>
  )
}
