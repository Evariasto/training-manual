import React, { useState, useEffect } from 'react'
import {
  loadTrainer, saveTrainer, defaultTrainer,
  OBJECTIVES, LEVELS, FOCUS_GROUPS, generateWeekPlan,
  getLogsForExercise, getLastLoad, uid
} from '../data/trainerdata.js'
import './TrainerArea.css'

export default function TrainerArea() {
  const [tab, setTab]     = useState('config')
  const [data, setData]   = useState(() => loadTrainer())

  function update(newData) {
    setData(newData)
    saveTrainer(newData)
  }

  function handleGenerate() {
    const plan = generateWeekPlan(data.config)
    const newData = { ...data, weekPlan: plan, config: { ...data.config, lastGenerated: plan.generatedAt } }
    update(newData)
    setTab('ficha')
  }

  function handleLogLoad(exerciseName, dayId, sets) {
    const log = {
      id: uid(),
      date: new Date().toISOString().split('T')[0],
      exerciseName,
      dayId,
      sets,
    }
    const newLogs = [log, ...data.loadLogs]
    update({ ...data, loadLogs: newLogs })
  }

  return (
    <div className="trainer-wrapper">
      {/* Header */}
      <div className="trainer-header">
        <div className="trainer-header-icon">⭐</div>
        <div className="trainer-header-text">
          <h1 className="trainer-title">Área do Treinador</h1>
          <p className="trainer-sub">Configure seus focos, gere a ficha semanal e lance cargas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="trainer-tabs">
        <button className={`ttab ${tab === 'config' ? 'active' : ''}`} onClick={() => setTab('config')}>
          ⚙️ Configuração
        </button>
        <button className={`ttab ${tab === 'ficha' ? 'active' : ''}`} onClick={() => setTab('ficha')}>
          📋 Ficha Semanal
          {data.weekPlan && <span className="ttab-badge">✓</span>}
        </button>
        <button className={`ttab ${tab === 'evolucao' ? 'active' : ''}`} onClick={() => setTab('evolucao')}>
          📈 Evolução
          {data.loadLogs.length > 0 && <span className="ttab-badge">{data.loadLogs.length}</span>}
        </button>
      </div>

      {/* Content */}
      <div className="trainer-content">
        {tab === 'config'  && <ConfigTab data={data} update={update} onGenerate={handleGenerate} />}
        {tab === 'ficha'   && <FichaTab  data={data} onLogLoad={handleLogLoad} onGenerate={handleGenerate} />}
        {tab === 'evolucao'&& <EvolucaoTab data={data} />}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// CONFIG TAB
// ══════════════════════════════════════════════════════════════════
function ConfigTab({ data, update, onGenerate }) {
  const cfg = data.config

  function setCfg(key, val) {
    update({ ...data, config: { ...cfg, [key]: val } })
  }

  function toggleFocusGroup(id) {
    const exists = cfg.focusGroups.find(g => g.id === id)
    if (exists) {
      setCfg('focusGroups', cfg.focusGroups.filter(g => g.id !== id))
    } else {
      setCfg('focusGroups', [...cfg.focusGroups, { id, priority: cfg.focusGroups.length + 1, note: '' }])
    }
  }

  function setGroupNote(id, note) {
    setCfg('focusGroups', cfg.focusGroups.map(g => g.id === id ? { ...g, note } : g))
  }

  function moveGroup(id, dir) {
    const arr = [...cfg.focusGroups]
    const i = arr.findIndex(g => g.id === id)
    if (dir === -1 && i > 0) { [arr[i-1], arr[i]] = [arr[i], arr[i-1]] }
    if (dir === 1 && i < arr.length-1) { [arr[i], arr[i+1]] = [arr[i+1], arr[i]] }
    setCfg('focusGroups', arr.map((g, idx) => ({ ...g, priority: idx + 1 })))
  }

  return (
    <div className="config-tab">
      {/* Objetivo */}
      <div className="cfg-block">
        <div className="cfg-title">🎯 Objetivo da Fase</div>
        <div className="obj-grid">
          {OBJECTIVES.map(o => (
            <button key={o.id} className={`obj-btn ${cfg.objective === o.id ? 'active' : ''}`}
              onClick={() => setCfg('objective', o.id)}>
              <span className="obj-label">{o.label}</span>
              <span className="obj-rep">{o.repRange} reps</span>
            </button>
          ))}
        </div>
      </div>

      {/* Nível + Frequência */}
      <div className="cfg-row">
        <div className="cfg-block flex1">
          <div className="cfg-title">🏅 Nível</div>
          <div className="level-row">
            {LEVELS.map(l => (
              <button key={l.id} className={`level-btn ${cfg.level === l.id ? 'active' : ''}`}
                onClick={() => setCfg('level', l.id)}>{l.label}</button>
            ))}
          </div>
        </div>
        <div className="cfg-block flex1">
          <div className="cfg-title">📅 Dias/semana</div>
          <div className="freq-row">
            {[3,4,5,6].map(f => (
              <button key={f} className={`freq-btn ${cfg.frequency === f ? 'active' : ''}`}
                onClick={() => setCfg('frequency', f)}>{f}×</button>
            ))}
          </div>
        </div>
      </div>

      {/* Focus groups */}
      <div className="cfg-block">
        <div className="cfg-title">💪 Grupos em Foco <span className="cfg-hint">(selecione e ordene por prioridade)</span></div>
        <div className="fg-grid">
          {FOCUS_GROUPS.filter(g => !cfg.focusGroups.find(f => f.id === g.id)).map(g => (
            <button key={g.id} className="fg-add-btn" style={{ '--gc': g.color }}
              onClick={() => toggleFocusGroup(g.id)}>
              {g.icon} {g.label} <span>+</span>
            </button>
          ))}
        </div>

        {cfg.focusGroups.length > 0 && (
          <div className="fg-selected">
            {cfg.focusGroups.map((fg, i) => {
              const gInfo = FOCUS_GROUPS.find(g => g.id === fg.id)
              return (
                <div key={fg.id} className="fg-item" style={{ '--gc': gInfo?.color }}>
                  <div className="fgi-left">
                    <span className="fgi-rank">{i+1}</span>
                    <span className="fgi-icon">{gInfo?.icon}</span>
                    <span className="fgi-label">{gInfo?.label}</span>
                  </div>
                  <input
                    className="fgi-note"
                    placeholder="O que precisa melhorar? (ex: porção superior fraca)"
                    value={fg.note}
                    onChange={e => setGroupNote(fg.id, e.target.value)}
                  />
                  <div className="fgi-actions">
                    <button className="fgi-move" onClick={() => moveGroup(fg.id, -1)} disabled={i===0}>▲</button>
                    <button className="fgi-move" onClick={() => moveGroup(fg.id, 1)} disabled={i===cfg.focusGroups.length-1}>▼</button>
                    <button className="fgi-del" onClick={() => toggleFocusGroup(fg.id)}>✕</button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Weaknesses text */}
      <div className="cfg-block">
        <div className="cfg-title">📝 Pontos Fracos & Observações</div>
        <textarea
          className="weakness-textarea"
          placeholder="Descreva o que está travado ou precisa de atenção especial. Ex: VMO muito fraco, deltóide posterior sub-desenvolvido, posterior de coxa sem força..."
          value={cfg.weaknesses}
          onChange={e => setCfg('weaknesses', e.target.value)}
          rows={4}
        />
      </div>

      {/* Generate button */}
      <button className="generate-btn" onClick={onGenerate}>
        ⭐ Gerar Ficha Semanal
      </button>

      {cfg.lastGenerated && (
        <div className="last-gen">
          Último plano gerado: {new Date(cfg.lastGenerated).toLocaleDateString('pt-BR', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' })}
        </div>
      )}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// FICHA TAB
// ══════════════════════════════════════════════════════════════════
function FichaTab({ data, onLogLoad, onGenerate }) {
  const [activeDay, setActiveDay] = useState(0)
  const [logModal, setLogModal]   = useState(null) // {exerciseName, dayId, sets}

  const plan = data.weekPlan

  if (!plan) {
    return (
      <div className="ficha-empty">
        <div className="fe-icon">📋</div>
        <div className="fe-text">Nenhuma ficha gerada ainda</div>
        <div className="fe-sub">Configure seus focos e clique em Gerar Ficha Semanal</div>
        <button className="generate-btn" style={{ marginTop: 16 }} onClick={onGenerate}>
          ⭐ Gerar Ficha Agora
        </button>
      </div>
    )
  }

  const day = plan.days[activeDay]

  return (
    <div className="ficha-tab">
      {/* Plan summary */}
      <div className="plan-summary">
        <div className="ps-chips">
          <span className="ps-chip gold">⭐ {plan.objective?.label}</span>
          <span className="ps-chip">🏅 {plan.level === 'beginner' ? 'Iniciante' : plan.level === 'intermediate' ? 'Intermediário' : 'Avançado'}</span>
          <span className="ps-chip">📅 {plan.days.length}× / semana</span>
          <span className="ps-chip muted">Sem. {plan.weekNumber}</span>
        </div>
        {plan.focusSummary?.length > 0 && (
          <div className="ps-focus">
            Focos: {plan.focusSummary.join(' · ')}
          </div>
        )}
        {plan.weaknessesSummary && (
          <div className="ps-weakness">💬 {plan.weaknessesSummary}</div>
        )}
      </div>

      {/* Day tabs */}
      <div className="day-tabs">
        {plan.days.map((d, i) => (
          <button key={d.id} className={`day-tab ${activeDay === i ? 'active' : ''}`}
            onClick={() => setActiveDay(i)}>
            <span className="dt-id">{d.id}</span>
            <span className="dt-name">{d.name.split('—')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Day content */}
      <div className="day-content">
        <div className="day-title">{day.name}</div>

        {day.primaryGroups.map(gid => {
          const exercises = day.exercisesByGroup[gid] || []
          if (!exercises.length) return null
          const gInfo = FOCUS_GROUPS.find(g => g.id === gid)
          return (
            <div key={gid} className="group-section" style={{ '--gc': gInfo?.color }}>
              <div className="gs-header">
                <span className="gs-icon">{gInfo?.icon}</span>
                <span className="gs-label">{gInfo?.label}</span>
              </div>
              <table className="ex-table">
                <thead>
                  <tr>
                    <th>Exercício</th>
                    <th>Séries</th>
                    <th>Reps</th>
                    <th>Última Carga</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.map((ex, ei) => {
                    const lastLoad = getLastLoad(data.loadLogs, ex.name)
                    return (
                      <tr key={ei} className={ex.highlight ? 'highlight-row' : ''}>
                        <td>
                          <div className="ex-name-cell">
                            {ex.name}
                            {ex.note && <span className="ex-note">{ex.note}</span>}
                          </div>
                        </td>
                        <td className="td-center">{ex.sets}×</td>
                        <td className="td-center">{ex.reps}</td>
                        <td className="td-load">
                          {lastLoad
                            ? <span className="last-load-badge">{lastLoad.maxWeight}kg <span className="load-date">({lastLoad.date})</span></span>
                            : <span className="no-load">—</span>
                          }
                        </td>
                        <td>
                          <button className="log-btn" onClick={() => setLogModal({
                            exerciseName: ex.name,
                            dayId: day.id,
                            sets: Array.from({ length: ex.sets }, (_, i) => ({
                              setNum: i+1, weight: lastLoad?.sets?.[i]?.weight || '', reps: ''
                            }))
                          })}>
                            + Carga
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>

      {/* Load modal */}
      {logModal && (
        <LoadModal
          modal={logModal}
          onChange={setLogModal}
          onSave={() => { onLogLoad(logModal.exerciseName, logModal.dayId, logModal.sets); setLogModal(null) }}
          onClose={() => setLogModal(null)}
        />
      )}
    </div>
  )
}

function LoadModal({ modal, onChange, onSave, onClose }) {
  function setSet(i, field, val) {
    const sets = modal.sets.map((s, si) => si === i ? { ...s, [field]: val } : s)
    onChange({ ...modal, sets })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">+ Lançar Cargas</div>
          <div className="modal-ex">{modal.exerciseName}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="modal-set-header">
            <span>Série</span><span>Kg</span><span>Reps</span>
          </div>
          {modal.sets.map((s, i) => (
            <div key={i} className="modal-set-row">
              <span className="modal-set-num">{s.setNum}</span>
              <input
                type="number"
                className="modal-input"
                placeholder="kg"
                value={s.weight}
                onChange={e => setSet(i, 'weight', e.target.value)}
              />
              <input
                type="number"
                className="modal-input"
                placeholder="reps"
                value={s.reps}
                onChange={e => setSet(i, 'reps', e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="modal-save-btn" onClick={onSave}>
          ✓ Salvar Cargas
        </button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// EVOLUÇÃO TAB
// ══════════════════════════════════════════════════════════════════
function EvolucaoTab({ data }) {
  const logs = data.loadLogs

  if (!logs.length) {
    return (
      <div className="ficha-empty">
        <div className="fe-icon">📈</div>
        <div className="fe-text">Nenhuma carga lançada ainda</div>
        <div className="fe-sub">Lance as cargas na aba Ficha Semanal após treinar</div>
      </div>
    )
  }

  // Group by exercise name
  const byExercise = {}
  logs.forEach(log => {
    if (!byExercise[log.exerciseName]) byExercise[log.exerciseName] = []
    byExercise[log.exerciseName].push(log)
  })

  return (
    <div className="evolucao-tab">
      <div className="evo-header-note">
        Histórico de cargas máximas por exercício. O plano é reorganizado automaticamente com base na sua evolução.
      </div>
      {Object.entries(byExercise).map(([exName, exLogs]) => {
        const sorted = [...exLogs].sort((a,b) => a.date.localeCompare(b.date))
        const maxWeights = sorted.map(l => Math.max(...l.sets.map(s => Number(s.weight) || 0)))
        const first = maxWeights[0]
        const last  = maxWeights[maxWeights.length - 1]
        const diff  = last - first
        const pct   = first > 0 ? Math.round((diff / first) * 100) : 0

        return (
          <div key={exName} className="evo-card">
            <div className="evo-card-header">
              <span className="evo-ex-name">{exName}</span>
              <div className="evo-badge-row">
                <span className="evo-sessions">{exLogs.length} sessões</span>
                {diff !== 0 && (
                  <span className={`evo-diff ${diff > 0 ? 'up' : 'down'}`}>
                    {diff > 0 ? '▲' : '▼'} {Math.abs(diff)}kg ({Math.abs(pct)}%)
                  </span>
                )}
              </div>
            </div>

            {/* Mini progress bar */}
            <div className="evo-bar-wrap">
              {maxWeights.map((w, i) => (
                <div key={i} className="evo-bar-col" title={`${sorted[i].date}: ${w}kg`}>
                  <div className="evo-bar-fill" style={{
                    height: `${Math.max(10, (w / Math.max(...maxWeights)) * 100)}%`,
                    background: diff >= 0 ? '#48BB78' : '#E53E3E'
                  }} />
                  <div className="evo-bar-val">{w}</div>
                  <div className="evo-bar-date">{sorted[i].date.slice(5)}</div>
                </div>
              ))}
            </div>

            {/* Last session detail */}
            <div className="evo-last-detail">
              <span className="evo-last-label">Última sessão ({sorted[sorted.length-1].date}):</span>
              <div className="evo-sets">
                {sorted[sorted.length-1].sets.map((s, i) => (
                  <span key={i} className="evo-set-chip">
                    S{s.setNum}: {s.weight}kg × {s.reps}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
