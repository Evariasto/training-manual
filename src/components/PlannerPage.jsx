import React, { useState } from 'react'
import {
  GOALS, LEVELS, PLANNER_GROUPS, TIMELINE,
  generateSplit, getWeeklyVolume, getMesociclo
} from '../data/plannerdata.js'
import './PlannerPage.css'

const FREQUENCIES = [3, 4, 5, 6]
const DURATIONS   = [45, 60, 75, 90]
const DAYS_PT     = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export default function PlannerPage() {
  const [step, setStep]         = useState(1)
  const [goal, setGoal]         = useState('hipertrofia')
  const [level, setLevel]       = useState('intermediate')
  const [frequency, setFreq]    = useState(4)
  const [duration, setDuration] = useState(60)
  const [priorities, setPri]    = useState([])
  const [plan, setPlan]         = useState(null)

  function togglePriority(id) {
    setPri(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  function moveUp(id) {
    setPri(prev => {
      const i = prev.indexOf(id)
      if (i <= 0) return prev
      const arr = [...prev]
      ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      return arr
    })
  }

  function moveDown(id) {
    setPri(prev => {
      const i = prev.indexOf(id)
      if (i < 0 || i >= prev.length - 1) return prev
      const arr = [...prev]
      ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      return arr
    })
  }

  function handleGenerate() {
    const split    = generateSplit(frequency, priorities, goal, duration)
    const meso     = getMesociclo(goal)
    const goalObj  = GOALS.find(g => g.id === goal)
    const levelObj = LEVELS.find(l => l.id === level)

    const volumes  = PLANNER_GROUPS.map(g => ({
      ...g,
      sets: getWeeklyVolume(g.id, level, priorities.includes(g.id), goal),
      isPriority: priorities.includes(g.id),
      rank: priorities.indexOf(g.id),
      timeline: TIMELINE[g.id]?.[level] ?? [8, 24],
      note: TIMELINE[g.id]?.note ?? '',
    })).sort((a, b) => {
      if (a.isPriority && !b.isPriority) return -1
      if (!a.isPriority && b.isPriority) return 1
      if (a.rank >= 0 && b.rank >= 0) return a.rank - b.rank
      return 0
    })

    setPlan({ split, meso, volumes, goalObj, levelObj })
    setStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="planner-wrapper">
      {/* ── Progress bar ── */}
      <div className="planner-steps">
        {[1, 2, 3].map(s => (
          <div key={s} className={`planner-step ${step === s ? 'active' : step > s ? 'done' : ''}`}>
            <div className="ps-circle">{step > s ? '✓' : s}</div>
            <div className="ps-label">{['Configuração', 'Prioridades', 'Seu Plano'][s - 1]}</div>
          </div>
        ))}
        <div className="ps-line" style={{ '--progress': `${((step - 1) / 2) * 100}%` }} />
      </div>

      {/* ══ STEP 1: Config ══════════════════════════════════════════ */}
      {step === 1 && (
        <div className="planner-card">
          <h2 className="planner-card-title">🎯 Qual é o seu objetivo?</h2>
          <div className="goal-grid">
            {GOALS.map(g => (
              <button
                key={g.id}
                className={`goal-btn ${goal === g.id ? 'active' : ''}`}
                onClick={() => setGoal(g.id)}
              >
                <span className="goal-icon">{g.icon}</span>
                <span className="goal-label">{g.label}</span>
                <span className="goal-desc">{g.desc}</span>
                {goal === g.id && <span className="goal-check">✓</span>}
              </button>
            ))}
          </div>

          <h2 className="planner-card-title" style={{ marginTop: 28 }}>🏅 Nível de treino</h2>
          <div className="level-grid">
            {LEVELS.map(l => (
              <button
                key={l.id}
                className={`level-btn ${level === l.id ? 'active' : ''}`}
                onClick={() => setLevel(l.id)}
              >
                <span className="level-label">{l.label}</span>
                <span className="level-desc">{l.desc}</span>
              </button>
            ))}
          </div>

          <div className="config-row">
            <div className="config-block">
              <h2 className="planner-card-title">📅 Dias por semana</h2>
              <div className="freq-grid">
                {FREQUENCIES.map(f => (
                  <button
                    key={f}
                    className={`freq-btn ${frequency === f ? 'active' : ''}`}
                    onClick={() => setFreq(f)}
                  >
                    {f}×
                  </button>
                ))}
              </div>
            </div>
            <div className="config-block">
              <h2 className="planner-card-title">⏱ Duração por sessão</h2>
              <div className="freq-grid">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    className={`freq-btn ${duration === d ? 'active' : ''}`}
                    onClick={() => setDuration(d)}
                  >
                    {d}min
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className="planner-next-btn" onClick={() => setStep(2)}>
            Próximo — Definir Prioridades →
          </button>
        </div>
      )}

      {/* ══ STEP 2: Priorities ══════════════════════════════════════ */}
      {step === 2 && (
        <div className="planner-card">
          <h2 className="planner-card-title">💪 Quais grupos são sua prioridade?</h2>
          <p className="planner-card-sub">
            Selecione e ordene os grupos que você quer desenvolver. Os grupos no topo recebem mais volume e frequência. Você pode pular essa etapa para usar o plano padrão.
          </p>

          {/* Available groups */}
          <div className="pri-group-grid">
            {PLANNER_GROUPS.filter(g => !priorities.includes(g.id)).map(g => (
              <button
                key={g.id}
                className="pri-group-card"
                style={{ '--gc': g.color }}
                onClick={() => togglePriority(g.id)}
              >
                <span className="pgc-icon">{g.icon}</span>
                <span className="pgc-label">{g.label}</span>
                <span className="pgc-add">+</span>
              </button>
            ))}
          </div>

          {/* Ranked list */}
          {priorities.length > 0 && (
            <div className="pri-ranked">
              <div className="pri-ranked-title">Prioridades selecionadas (arraste para reordenar):</div>
              {priorities.map((id, i) => {
                const g = PLANNER_GROUPS.find(x => x.id === id)
                return (
                  <div key={id} className="pri-rank-item" style={{ '--gc': g.color }}>
                    <span className="pri-rank-num">{i + 1}</span>
                    <span className="pri-rank-icon">{g.icon}</span>
                    <span className="pri-rank-label">{g.label}</span>
                    <div className="pri-rank-actions">
                      <button onClick={() => moveUp(id)} disabled={i === 0} className="pri-move">▲</button>
                      <button onClick={() => moveDown(id)} disabled={i === priorities.length - 1} className="pri-move">▼</button>
                      <button onClick={() => togglePriority(id)} className="pri-remove">✕</button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="planner-nav-row">
            <button className="planner-back-btn" onClick={() => setStep(1)}>← Voltar</button>
            <button className="planner-next-btn" onClick={handleGenerate}>
              🚀 Gerar Meu Plano
            </button>
          </div>
        </div>
      )}

      {/* ══ STEP 3: Generated Plan ══════════════════════════════════ */}
      {step === 3 && plan && (
        <div className="plan-result">
          {/* Summary header */}
          <div className="plan-summary-header">
            <div className="psh-badge" style={{ background: 'rgba(72,187,120,0.12)', color: '#48BB78', border: '1px solid rgba(72,187,120,0.3)' }}>
              ✓ Plano gerado
            </div>
            <h1 className="psh-title">Seu Protocolo Personalizado</h1>
            <div className="psh-chips">
              <span className="psh-chip">{plan.goalObj?.icon} {plan.goalObj?.label}</span>
              <span className="psh-chip">🏅 {plan.levelObj?.label}</span>
              <span className="psh-chip">📅 {frequency}×/semana</span>
              <span className="psh-chip">⏱ {duration}min/sessão</span>
            </div>
            <button className="planner-back-btn" style={{ marginTop: 12 }} onClick={() => setStep(1)}>
              ← Refazer Configuração
            </button>
          </div>

          {/* Weekly split */}
          <PlanSection title="📅 Split Semanal" subtitle={plan.split.name}>
            <div className="week-grid">
              {[0, 1, 2, 3, 4, 5, 6].map(di => {
                const day = plan.split.days.find(d => d.dayIndex === di)
                const isRest = plan.split.restDays?.includes(di)
                return (
                  <div key={di} className={`week-day ${day ? 'training' : 'rest'}`} style={day ? { '--dc': day.color } : {}}>
                    <div className="wd-name">{DAYS_PT[di]}</div>
                    {day ? (
                      <>
                        <div className="wd-label">{day.label}</div>
                        <div className="wd-groups">
                          {day.focus.map((f, i) => {
                            const gInfo = PLANNER_GROUPS.find(g => g.id === f.groupId)
                            return (
                              <div key={i} className="wd-group-tag" style={{ '--gc': gInfo?.color ?? '#888' }}>
                                {gInfo?.icon} {f.label}
                              </div>
                            )
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="wd-rest">😴 Descanso</div>
                    )}
                  </div>
                )
              })}
            </div>
          </PlanSection>

          {/* Exercise list per day */}
          <PlanSection title="🏋️ Exercícios por Dia">
            <div className="ex-days-list">
              {plan.split.days.map((day, di) => (
                <div key={di} className="ex-day-card" style={{ '--dc': day.color }}>
                  <div className="edc-header">
                    <span className="edc-day">{day.dayName}</span>
                    <span className="edc-label">{day.label}</span>
                  </div>
                  <div className="edc-body">
                    {day.focus.map((f, fi) => (
                      <div key={fi} className="edc-group">
                        <div className="edc-group-title">
                          {PLANNER_GROUPS.find(g => g.id === f.groupId)?.icon} {f.label}
                        </div>
                        <ul className="edc-ex-list">
                          {f.exercises.map((ex, ei) => (
                            <li key={ei}>{ex}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PlanSection>

          {/* Volume per group */}
          <PlanSection title="📊 Volume Semanal Recomendado">
            <div className="volume-list">
              {plan.volumes.map(v => (
                <div key={v.id} className={`volume-row ${v.isPriority ? 'priority' : ''}`} style={{ '--gc': v.color }}>
                  <div className="vr-left">
                    <span className="vr-icon">{v.icon}</span>
                    <div className="vr-info">
                      <span className="vr-label">{v.label}</span>
                      {v.isPriority && <span className="vr-pri-tag">⭐ Prioridade #{v.rank + 1}</span>}
                    </div>
                  </div>
                  <div className="vr-bar-wrap">
                    <div className="vr-bar" style={{ width: `${(v.sets / 26) * 100}%` }} />
                  </div>
                  <span className="vr-sets">{v.sets} séries/sem</span>
                </div>
              ))}
            </div>
          </PlanSection>

          {/* Development timeline */}
          <PlanSection title="⏳ Timeline de Desenvolvimento">
            <p className="plan-section-note">
              Estimativas baseadas em evidências científicas para o nível <strong>{plan.levelObj?.label}</strong>. Consistência + nutrição + sono determinam os resultados reais.
            </p>
            <div className="timeline-list">
              {plan.volumes.map(v => (
                <div key={v.id} className="tl-row" style={{ '--gc': v.color }}>
                  <div className="tl-left">
                    <span className="tl-icon">{v.icon}</span>
                    <span className="tl-label">{v.label}</span>
                    {v.isPriority && <span className="tl-pri">⭐</span>}
                  </div>
                  <div className="tl-milestones">
                    <div className="tl-milestone">
                      <span className="tlm-weeks">{v.timeline[0]}–{Math.round(v.timeline[0] * 1.5)} sem</span>
                      <span className="tlm-label">Primeiros resultados visíveis</span>
                    </div>
                    <div className="tl-milestone tl-full">
                      <span className="tlm-weeks">{v.timeline[1]} sem</span>
                      <span className="tlm-label">Desenvolvimento completo</span>
                    </div>
                  </div>
                  <div className="tl-note">{v.note}</div>
                </div>
              ))}
            </div>
          </PlanSection>

          {/* 12-week mesociclo */}
          <PlanSection title="🗓 Periodização — 12 Semanas">
            <div className="meso-list">
              {plan.meso.map((m, i) => (
                <div key={i} className="meso-block">
                  <div className="mb-header">
                    <span className="mb-icon">{m.icon}</span>
                    <div className="mb-title-wrap">
                      <span className="mb-weeks">Semanas {m.weeks}</span>
                      <span className="mb-phase">{m.phase}</span>
                    </div>
                  </div>
                  <div className="mb-stats">
                    <div className="mb-stat"><span className="mbs-label">Repetições</span><span className="mbs-val">{plan.goalObj?.repRange || m.reps}</span></div>
                    <div className="mb-stat"><span className="mbs-label">RIR</span><span className="mbs-val">{plan.goalObj?.rir || m.rir}</span></div>
                    <div className="mb-stat"><span className="mbs-label">Intensidade</span><span className="mbs-val">{plan.goalObj?.intensity || m.intensity}</span></div>
                  </div>
                  <p className="mb-focus">{m.focus}</p>
                </div>
              ))}
            </div>
          </PlanSection>
        </div>
      )}
    </div>
  )
}

function PlanSection({ title, subtitle, children }) {
  return (
    <div className="plan-section">
      <div className="plan-section-header">
        <h2 className="plan-section-title">{title}</h2>
        {subtitle && <span className="plan-section-sub">{subtitle}</span>}
      </div>
      {children}
    </div>
  )
}
