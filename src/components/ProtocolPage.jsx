import React, { useState } from 'react'
import './ProtocolPage.css'

const DIFF_LABEL = { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado' }
const DIFF_CLASS = { beginner: 'pb-begin', intermediate: 'pb-inter', advanced: 'pb-adv' }
const LEVEL_CLASS = { beginner: 'pb-begin', intermediate: 'pb-inter', advanced: 'pb-adv' }

export default function ProtocolPage({ protocol }) {
  const [activeChapter, setActiveChapter] = useState(protocol.chapters[0].id)
  const chapter = protocol.chapters.find(c => c.id === activeChapter)

  return (
    <div className="pp-wrapper">
      {/* ── Hero ── */}
      <div className="pp-hero" style={{ '--pc': protocol.color }}>
        <div className="pp-hero-icon">{protocol.icon}</div>
        <div className="pp-hero-text">
          <h1 className="pp-hero-title">{protocol.title}</h1>
          <p className="pp-hero-sub">{protocol.subtitle}</p>
        </div>
        <div className="pp-hero-badge">{protocol.chapters.length} capítulos</div>
      </div>

      {/* ── Chapter nav ── */}
      <div className="pp-chapnav">
        {protocol.chapters.map(ch => (
          <button
            key={ch.id}
            className={`pp-chapbtn ${activeChapter === ch.id ? 'active' : ''}`}
            onClick={() => setActiveChapter(ch.id)}
            style={activeChapter === ch.id ? { '--pc': protocol.color } : {}}
          >
            <span className="pp-chapnum">{ch.number}</span>
            <span className="pp-chapicon">{ch.icon}</span>
            <span className="pp-chaplabel">{ch.title}</span>
          </button>
        ))}
      </div>

      {/* ── Chapter content ── */}
      {chapter && (
        <div className="pp-chapter" key={chapter.id}>
          <div className="pp-chapter-header">
            <div className="pp-chapter-num" style={{ '--pc': protocol.color }}>
              Capítulo {chapter.number}
            </div>
            <h2 className="pp-chapter-title">
              {chapter.icon} {chapter.title}
            </h2>
            {chapter.intro && (
              <p className="pp-chapter-intro">{chapter.intro}</p>
            )}
          </div>

          <div className="pp-sections">
            {chapter.sections.map((section, si) => (
              <Section key={si} section={section} color={protocol.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Section router ────────────────────────────────────────────────
function Section({ section, color }) {
  switch (section.type) {
    case 'muscle-cards':        return <MuscleCards section={section} color={color} />
    case 'exercise-categories': return <ExerciseCategories section={section} />
    case 'protocol-principles': return <ProtocolPrinciples section={section} color={color} />
    case 'workout-examples':    return <WorkoutExamples section={section} color={color} />
    case 'technique-cards':     return <TechniqueCards section={section} color={color} />
    case 'progression-blocks':  return <ProgressionBlocks section={section} color={color} />
    case 'tips-grid':           return <TipsGrid section={section} color={color} />
    default: return null
  }
}

// ─── Muscle Cards ──────────────────────────────────────────────────
function MuscleCards({ section, color }) {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="pp-section">
      <div className="mc-grid">
        {section.muscles.map((m, i) => {
          const open = activeId === i
          return (
            <div key={i} className={`mc-card ${open ? 'open' : ''}`} style={{ '--pc': color }}>
              <button className="mc-card-head" onClick={() => setActiveId(open ? null : i)}>
                <span className="mc-icon">{m.icon}</span>
                <div className="mc-head-text">
                  <div className="mc-name">{m.name}</div>
                  <div className="mc-sci">{m.scientificName}</div>
                </div>
                <span className="mc-key-fact">{m.keyFact}</span>
                <span className={`mc-chevron ${open ? 'up' : ''}`}>▾</span>
              </button>
              {open && (
                <div className="mc-body">
                  <div className="mc-row">
                    <div className="mc-label">Porções / Cabeças</div>
                    <div className="mc-heads">
                      {m.heads.map((h, j) => (
                        <span key={j} className="mc-head-chip">{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mc-row">
                    <div className="mc-label">Função Principal</div>
                    <div className="mc-value">{m.function}</div>
                  </div>
                  <div className="mc-tip">
                    <span className="mc-tip-icon">💡</span>
                    <span>{m.tip}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Exercise Categories ───────────────────────────────────────────
function ExerciseCategories({ section }) {
  const [openCat, setOpenCat] = useState(0)
  const [openEx, setOpenEx] = useState(null)

  function handleCat(i) {
    setOpenCat(openCat === i ? null : i)
    setOpenEx(null)
  }

  return (
    <div className="pp-section">
      {section.categories.map((cat, ci) => (
        <div key={ci} className="excat" style={{ '--cc': cat.color }}>
          <button className="excat-header" onClick={() => handleCat(ci)}>
            <span className="excat-icon">{cat.icon}</span>
            <span className="excat-name">{cat.name}</span>
            <span className="excat-count">{cat.exercises.length} exercícios</span>
            <span className={`excat-chevron ${openCat === ci ? 'up' : ''}`}>▾</span>
          </button>

          {openCat === ci && (
            <div className="excat-body">
              {cat.exercises.map((ex, ei) => {
                const key = `${ci}-${ei}`
                const isOpen = openEx === key
                return (
                  <div key={ei} className={`ex-item ${isOpen ? 'open' : ''}`}>
                    <button className="ex-item-head" onClick={() => setOpenEx(isOpen ? null : key)}>
                      <div className="ex-item-left">
                        <span className="ex-item-name">{ex.name}</span>
                        <div className="ex-item-badges">
                          <span className={`badge ${DIFF_CLASS[ex.difficulty]}`}>
                            {DIFF_LABEL[ex.difficulty]}
                          </span>
                          <span className="badge badge-pattern">{ex.pattern}</span>
                          {ex.equipment && ex.equipment.map((eq, j) => (
                            <span key={j} className="badge badge-equip">{eq}</span>
                          ))}
                        </div>
                      </div>
                      <span className="ex-focus-label">{ex.musclesFocus}</span>
                      <span className={`ex-item-chevron ${isOpen ? 'up' : ''}`}>▾</span>
                    </button>

                    {isOpen && (
                      <div className="ex-item-body">
                        {ex.execution && (
                          <div className="ex-detail-section">
                            <div className="ex-detail-label">📋 Execução</div>
                            <ol className="ex-steps">
                              {ex.execution.map((s, j) => <li key={j}>{s}</li>)}
                            </ol>
                          </div>
                        )}
                        {ex.tip && (
                          <div className="ex-tip">
                            <span>💡</span>
                            <span>{ex.tip}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Protocol Principles ───────────────────────────────────────────
function ProtocolPrinciples({ section, color }) {
  return (
    <div className="pp-section">
      <div className="principles-grid">
        {section.principles.map((p, i) => (
          <div key={i} className="principle-card" style={{ '--pc': color }}>
            <div className="principle-icon">{p.icon}</div>
            <div className="principle-title">{p.title}</div>
            <div className="principle-content">{p.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Workout Examples ──────────────────────────────────────────────
function WorkoutExamples({ section, color }) {
  const [activeW, setActiveW] = useState(0)
  const workout = section.workouts[activeW]

  return (
    <div className="pp-section">
      <div className="workout-tabs">
        {section.workouts.map((w, i) => (
          <button
            key={i}
            className={`workout-tab ${activeW === i ? 'active' : ''}`}
            onClick={() => setActiveW(i)}
            style={activeW === i ? { '--pc': color } : {}}
          >
            {w.name}
          </button>
        ))}
      </div>

      <div className="workout-card" style={{ '--pc': color }}>
        <div className="workout-meta">
          <span className="workout-tag">{workout.tag}</span>
          <span className="workout-duration">⏱ {workout.duration}</span>
        </div>
        <div className="workout-table-wrap">
          <table className="workout-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Exercício</th>
                <th>Séries</th>
                <th>Repetições</th>
                <th>Descanso</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {workout.exercises.map((ex, i) => (
                <tr key={i}>
                  <td className="wt-num">{i + 1}</td>
                  <td className="wt-name">{ex.name}</td>
                  <td className="wt-center">{ex.sets}</td>
                  <td className="wt-center">{ex.reps}</td>
                  <td className="wt-center">{ex.rest}</td>
                  <td className="wt-note">{ex.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ─── Technique Cards ───────────────────────────────────────────────
function TechniqueCards({ section, color }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="pp-section">
      <div className="technique-grid">
        {section.techniques.map((t, i) => {
          const isOpen = openIdx === i
          return (
            <div key={i} className={`tech-card ${isOpen ? 'open' : ''}`} style={{ '--pc': color }}>
              <button className="tech-head" onClick={() => setOpenIdx(isOpen ? null : i)}>
                <span className="tech-icon">{t.icon}</span>
                <div className="tech-head-text">
                  <div className="tech-name">{t.name}</div>
                  <span className={`badge ${LEVEL_CLASS[t.level]}`}>
                    {DIFF_LABEL[t.level]}
                  </span>
                </div>
                <span className={`tech-chevron ${isOpen ? 'up' : ''}`}>▾</span>
              </button>
              {isOpen && (
                <div className="tech-body">
                  <p className="tech-desc">{t.description}</p>
                  <div className="tech-row">
                    <span className="tech-label">Aplicar em</span>
                    <span className="tech-value">{t.application}</span>
                  </div>
                  <div className="tech-warning">
                    <span>⚠️</span>
                    <span>{t.warning}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Progression Blocks ────────────────────────────────────────────
function ProgressionBlocks({ section, color }) {
  return (
    <div className="pp-section">
      <div className="prog-grid">
        {section.blocks.map((b, i) => (
          <div key={i} className="prog-block" style={{ '--pc': color }}>
            <div className="prog-block-header">
              <span className="prog-icon">{b.icon}</span>
              <span className="prog-title">{b.title}</span>
            </div>
            <ul className="prog-list">
              {b.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Tips Grid ─────────────────────────────────────────────────────
function TipsGrid({ section, color }) {
  return (
    <div className="pp-section">
      <div className="tips-grid">
        {section.tips.map((tip, i) => (
          <div key={i} className="tip-card" style={{ '--pc': color }}>
            <div className="tip-icon">{tip.icon}</div>
            {tip.title && <div className="tip-title">{tip.title}</div>}
            <div className="tip-text">{tip.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
