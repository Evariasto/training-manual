import { useState } from 'react'
import './PhraseGenerator.css'

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages'

const SYSTEM_PROMPT = `Você é um coach de treinamento físico especializado e altamente motivador.
Gere frases motivacionais curtas, impactantes e específicas em português brasileiro para
atletas e entusiastas do fitness que estão estudando protocolos de treinamento.

Regras obrigatórias:
- Máximo de 2 linhas
- Seja específico ao contexto de treinamento fornecido
- Linguagem direta, enérgica e inspiradora
- Responda APENAS com a frase, sem introdução, aspas ou explicação extra`

async function generatePhrase(context) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('VITE_ANTHROPIC_API_KEY não configurada no arquivo .env')

  const res = await fetch(ANTHROPIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      // Prompt caching: system prompt is stable across calls
      'anthropic-beta': 'prompt-caching-2024-07-31',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      thinking: { type: 'adaptive' },
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content: `Contexto de estudo: ${context}`,
        },
      ],
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `Erro ${res.status}`)
  }

  const data = await res.json()
  const textBlock = data.content?.find(b => b.type === 'text')
  return textBlock?.text?.trim() ?? ''
}

export default function PhraseGenerator({ context }) {
  const [phrase, setPhrase] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleGenerate() {
    setLoading(true)
    setError('')
    setPhrase('')
    try {
      const text = await generatePhrase(context)
      setPhrase(text)
    } catch (err) {
      setError(err.message || 'Erro ao gerar frase. Verifique a chave de API.')
      console.error('[PhraseGenerator]', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pg-wrap">
      <button
        className={`pg-btn ${loading ? 'pg-btn--loading' : ''}`}
        onClick={handleGenerate}
        disabled={loading}
      >
        <span className="pg-btn-icon">{loading ? '⏳' : '✨'}</span>
        {loading ? 'Gerando frase...' : 'Gerar Frase Motivacional'}
      </button>

      {phrase && (
        <div className="pg-card">
          <span className="pg-icon">💬</span>
          <p className="pg-text">{phrase}</p>
        </div>
      )}

      {error && <p className="pg-error">{error}</p>}
    </div>
  )
}
