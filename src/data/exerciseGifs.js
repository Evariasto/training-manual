const BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

const IDS = {
  // ── Peito ──────────────────────────────────────────────────
  'Supino Inclinado com Barra':          'Barbell_Incline_Bench_Press_-_Medium_Grip',
  'Supino Inclinado com Halteres':       'Incline_Dumbbell_Press',
  'Crossover no Cabo — Polia Alta':      'Cable_Crossover',
  'Supino Reto com Barra':               'Barbell_Bench_Press_-_Medium_Grip',
  'Supino Reto com Halteres':            'Dumbbell_Bench_Press',
  'Crucifixo Plano com Halteres':        'Dumbbell_Flyes',
  'Crossover Neutro — Polia Média':      'Low_Cable_Crossover',
  'Mergulho nas Paralelas (Dip)':        'Dips_-_Chest_Version',
  'Pullover com Haltere':                'Bent-Arm_Dumbbell_Pullover',

  // ── Costas ─────────────────────────────────────────────────
  'Barra Fixa Pronada Larga':            'Pullups',
  'Pulldown Pegada Larga':               'Wide-Grip_Lat_Pulldown',
  'Remada Baixa na Polia (Pulley)':      'Seated_Cable_Rows',
  'Encolhimento com Barra (Shrug)':      'Barbell_Shrug',
  'Face Pull na Polia':                  'Face_Pull',
  'Remada Alta com Barra':               'Upright_Barbell_Row',
  'Remada Curvada com Barra':            'Bent_Over_Barbell_Row',
  'Remada Unilateral com Haltere':       'One-Arm_Dumbbell_Row',
  'Voador Invertido com Halteres':       'Seated_Bent-Over_Rear_Delt_Raise',

  // ── Ombros ─────────────────────────────────────────────────
  'Desenvolvimento Militar com Barra':   'Barbell_Shoulder_Press',
  'Elevação Frontal com Haltere':        'Front_Dumbbell_Raise',
  'Elevação Lateral com Halteres':       'Side_Lateral_Raise',
  'Elevação Lateral na Polia':           'Cable_Seated_Lateral_Raise',
  'Desenvolvimento com Halteres':        'Dumbbell_Shoulder_Press',
  'Voador Invertido na Máquina / Haltere': 'Reverse_Flyes',

  // ── Braços ─────────────────────────────────────────────────
  'Rosca Direta com Barra':              'Barbell_Curl',
  'Rosca Alternada com Halteres':        'Dumbbell_Alternate_Bicep_Curl',
  'Rosca Scott (Preacher Curl)':         'Preacher_Curl',
  'Rosca Concentrada':                   'Concentration_Curls',
  'Tríceps Testa com Barra EZ':          'EZ-Bar_Skullcrusher',
  'Tríceps Corda na Polia':              'Triceps_Pushdown_-_Rope_Attachment',
  'Extensão Overhead com Haltere':       'Overhead_Triceps',
  'Mergulho Fechado (Dip para Tríceps)': 'Dips_-_Triceps_Version',
  'Rosca Martelo (Hammer Curl)':         'Alternate_Hammer_Curl',
  'Rosca com Corda na Polia':            'Cable_Hammer_Curls_-_Rope_Attachment',

  // ── Membros Inferiores ─────────────────────────────────────
  'Agachamento Livre':                   'Barbell_Squat',
  'Leg Press 45°':                       'Leg_Press',
  'Cadeira Extensora':                   'Leg_Extensions',
  'Stiff Deadlift (Romanian Deadlift)':  'Romanian_Deadlift',
  'Flexora Deitada na Máquina':          'Lying_Leg_Curls',
  'Leg Curl em Pé (Unilateral)':         'Seated_Leg_Curl',
  'Hip Thrust com Barra':                'Barbell_Hip_Thrust',
  'Agachamento Sumô':                    'Sumo_Deadlift',
  'Panturrilha em Pé (Standing Calf Raise)': 'Standing_Calf_Raises',
  'Panturrilha Sentada (Seated Calf Raise)':  'Seated_Calf_Raise',

  // ── Core ───────────────────────────────────────────────────
  'Abdominal Crunch':                    'Crunches',
  'Crunch na Polia':                     'Cable_Crunch',
  'Elevação de Pernas Suspenso':         'Hanging_Leg_Raise',
  'Prancha Lateral':                     'Plank',
  'Russian Twist':                       'Russian_Twist',
  'Prancha Frontal':                     'Plank',
  'Vacuum Abdominal':                    'Stomach_Vacuum',
  'Dead Bug':                            'Dead_Bug',
}

export function getExerciseImgs(name) {
  const id = IDS[name]
  if (!id) return null
  return {
    start: `${BASE}/${id}/0.jpg`,
    end:   `${BASE}/${id}/1.jpg`,
  }
}
