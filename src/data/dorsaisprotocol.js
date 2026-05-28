export const DORSAIS_PROTOCOL = {
  id: 'dorsais',
  title: 'Protocolo Dorsais',
  subtitle: 'Anatomia, padrões de movimento, montagem, técnicas e poses para costas completas',
  icon: '🔱',
  color: '#3182CE',

  chapters: [
    // ─────────────────── CAP 1: ANATOMIA ───────────────────────────
    {
      id: 'anatomia',
      number: 1,
      title: 'Anatomia das Costas',
      icon: '🧬',
      intro: 'As costas são o grupo mais complexo do tronco — múltiplos músculos com funções distintas que precisam de estímulos diferentes. Entender a anatomia define o exercício certo para cada objetivo.',
      sections: [
        {
          type: 'muscle-cards',
          muscles: [
            {
              name: 'Latíssimo do Dorso',
              scientificName: 'Musculus Latissimus Dorsi',
              icon: '🔵',
              heads: ['Porção Superior', 'Porção Inferior', 'Porção Lateral'],
              function: 'Adução, extensão e rotação medial do úmero. Principal responsável pela largura das costas — o músculo que cria o "V-taper".',
              tip: 'O lat inferior (próximo à crista ilíaca) é ativado maximamente quando o cotovelo passa atrás do corpo. Para lat superior: puxadas com grip largo. Para lat inferior: remadas com cotovelo colado ao corpo.',
              keyFact: 'Maior músculo do tronco — define a largura das costas e o V-taper',
            },
            {
              name: 'Trapézio',
              scientificName: 'Musculus Trapezius',
              icon: '🔷',
              heads: ['Trapézio Superior', 'Trapézio Médio', 'Trapézio Inferior'],
              function: 'Elevação (superior), retração (médio) e depressão/rotação (inferior) da escápula. Cobre a área central superior das costas.',
              tip: 'Trapézio superior responde a encolhimentos. Médio e inferior são ativados em remadas com retração escapular — não negligencie a retração no fim de cada rep.',
              keyFact: 'Três porções com funções opostas — treinar apenas a superior cria desequilíbrio postural',
            },
            {
              name: 'Romboides',
              scientificName: 'Musculi Rhomboidei',
              icon: '🟦',
              heads: ['Rombóide Maior', 'Rombóide Menor'],
              function: 'Retração e elevação da escápula. Responsável pela espessura do meio das costas e pela postura correta da escápula.',
              tip: 'Ativados principalmente em remadas com pegada fechada e pronada. A retração escapular completa no final de cada remada é fundamental para ativar os romboides.',
              keyFact: 'Deficiente na maioria das pessoas — causa escápulas aladas e postura curvada',
            },
            {
              name: 'Redondo Maior',
              scientificName: 'Musculus Teres Major',
              icon: '🟣',
              heads: ['Porção única'],
              function: 'Adução e extensão do úmero — funciona de forma sinérgica com o latíssimo do dorso. Cria a "axila" das costas.',
              tip: 'Frequentemente chamado de "lat pequeno". Ativado nas mesmas condições que o lat — puxadas e remadas. Contribui para o shape da inserção do lat.',
              keyFact: 'Forma a borda inferior da axila — contribui para a estética do "Lat Spread"',
            },
            {
              name: 'Eretores da Espinha',
              scientificName: 'Musculi Erectores Spinae',
              icon: '🟡',
              heads: ['Iliocostal', 'Longuíssimo', 'Espinhal'],
              function: 'Extensão e estabilização da coluna vertebral. Responsável pelo shape das "colunas" na região lombar visíveis em palco.',
              tip: 'Treinados diretamente no levantamento terra e good morning. Mas atenção: na maioria dos exercícios de costas a função é estabilizadora — não se forçam além do peso corporal.',
              keyFact: 'Protege a coluna em todos os compostos pesados — fundamental para longevidade',
            },
            {
              name: 'Infraespinal & Redondo Menor',
              scientificName: 'M. Infraspinatus / M. Teres Minor',
              icon: '🔴',
              heads: ['Manguito Rotador Posterior'],
              function: 'Rotação externa e estabilização da cabeça do úmero na cavidade glenoidal. Parte do manguito rotador.',
              tip: 'Treinados com Face Pull, rotação externa com cabo e puxadas com grip neutro. Essenciais para a saúde do ombro — previnem impingimento.',
              keyFact: 'Manguito rotador — negligenciá-lo leva a lesões crônicas de ombro em treinos pesados',
            },
          ],
        },
      ],
    },

    // ─────────────────── CAP 2: EXERCÍCIOS ─────────────────────────
    {
      id: 'exercicios',
      number: 2,
      title: 'Arsenal de Exercícios',
      icon: '🏋️',
      intro: 'Costas exigem variedade de ângulos e planos. Um bom programa combina movimentos verticais (puxadas) com horizontais (remadas), pesos livres com cabos, e carga com controle.',
      sections: [
        {
          type: 'exercise-categories',
          categories: [
            {
              name: 'Movimentos Verticais — Largura',
              icon: '⬆️',
              color: '#3182CE',
              exercises: [
                {
                  name: 'Barra Fixa (Pull-up)',
                  difficulty: 'advanced',
                  pattern: 'Bilateral Composto',
                  equipment: ['Barra Fixa'],
                  musclesFocus: 'Latíssimo (superior) + Bíceps + Redondo Maior',
                  execution: [
                    'Pegada pronada (supinada = chin-up, mais bíceps) ligeiramente mais larga que os ombros',
                    'Parta de suspensão completa — escápulas elevadas no início',
                    'Deprima as escápulas e inicie puxando os cotovelos em direção às costelas',
                    'Queixo acima da barra — pausa e desça com controle total',
                    'Não faça kipping — movimento controlado maximiza hipertrofia',
                  ],
                  tip: 'Se não consegue reps completas: assistida na máquina ou com elástico. Se consegue 12+: adicione peso (colete ou cinto).',
                },
                {
                  name: 'Pulldown na Polia',
                  difficulty: 'beginner',
                  pattern: 'Bilateral Composto',
                  equipment: ['Polia', 'Barra Larga'],
                  musclesFocus: 'Latíssimo + Redondo Maior + Bíceps',
                  execution: [
                    'Pegada pronada, mãos à largura dos ombros ou um pouco mais',
                    'Incline levemente o tronco para trás (~15–20°)',
                    'Puxe a barra para a parte superior do peitoral — não para atrás da cabeça',
                    'Cotovelos apontam para baixo e ligeiramente para frente no ponto final',
                    'Retorne à posição inicial com controle — sinta o alongamento',
                  ],
                  tip: 'Pulldown atrás da cabeça sobrecarrega o manguito rotador — evite. Frontal sempre.',
                },
                {
                  name: 'Pulldown Triângulo (Pegada Neutra)',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Polia', 'Triângulo'],
                  musclesFocus: 'Latíssimo Inferior + Redondo Maior',
                  execution: [
                    'Pegada neutra (palmas frente a frente)',
                    'Puxe o triângulo para o esterno — cotovelos colados ao corpo',
                    'Máxima retração escapular no ponto final — pause 1 segundo',
                    'Desça com controle total — 3 segundos na fase excêntrica',
                  ],
                  tip: 'Grip neutro ativa mais o lat inferior e cria menor stress no bíceps. Excelente para quem sente mais bíceps do que costas nas puxadas.',
                },
              ],
            },
            {
              name: 'Movimentos Horizontais — Espessura',
              icon: '↔️',
              color: '#9F7AEA',
              exercises: [
                {
                  name: 'Remada Curvada com Barra',
                  difficulty: 'advanced',
                  pattern: 'Bilateral Composto',
                  equipment: ['Barra'],
                  musclesFocus: 'Latíssimo + Trapézio Médio + Romboides + Bíceps',
                  execution: [
                    'Pegada pronada ligeiramente mais larga que os ombros',
                    'Tronco inclinado ~45° — paralelo ao chão para mais lat, mais ereto para mais trapézio',
                    'Puxe a barra para o umbigo — não para o peito',
                    'Cotovelos abertos = mais trapézio; cotovelos colados = mais lat',
                    'Retração escapular completa no ponto final — não apenas puxe com os braços',
                  ],
                  tip: 'Remada é o exercício de maior potencial de carga para costas. Progresso de carga aqui = costas grossas.',
                },
                {
                  name: 'Remada Unilateral com Halter',
                  difficulty: 'intermediate',
                  pattern: 'Unilateral',
                  equipment: ['Halter', 'Banco'],
                  musclesFocus: 'Latíssimo + Romboides + Redondo Maior',
                  execution: [
                    'Joelho e mão apoiados no banco — tronco paralelo ao chão',
                    'Puxe o halter para o quadril — não para o peito',
                    'Cotovelo passa levemente atrás do corpo no ponto final',
                    'Máximo de retração escapular e rotação torácica',
                    'Desça o halter com controle — permita leve protração no fundo',
                  ],
                  tip: 'Unilateral permite maior amplitude de movimento e retração do que a remada bilateral. Inclua ambas no programa.',
                },
                {
                  name: 'Remada Serrote',
                  difficulty: 'intermediate',
                  pattern: 'Unilateral',
                  equipment: ['Halter'],
                  musclesFocus: 'Latíssimo Inferior — foco máximo',
                  execution: [
                    'Pé dianteiro à frente, mão livre apoiada no joelho',
                    'Tronco inclinado — sem banco de apoio para maior liberdade',
                    'Cotovelo colado ao corpo, puxe para o quadril',
                    'Permita rotação torácica para aumentar a amplitude',
                  ],
                  tip: 'Variação do unilateral com maior ativação do lat inferior. Boa alternativa quando o banco está ocupado.',
                },
                {
                  name: 'Remada Cavalinho (T-Bar)',
                  difficulty: 'intermediate',
                  pattern: 'Bilateral',
                  equipment: ['T-Bar', 'Barra + Landmine'],
                  musclesFocus: 'Trapézio Médio + Romboides + Lat',
                  execution: [
                    'Pegada pronada estreita ou neutra no triângulo',
                    'Tronco ~30–45° em relação ao chão',
                    'Puxe para o esterno — cotovelos abertos para fora',
                    'Ênfase na retração escapular — pause 1 segundo no ponto final',
                  ],
                  tip: 'Excelente para espessura central das costas (romboides e trapézio médio). Complementa bem as puxadas.',
                },
                {
                  name: 'Remada Baixa Aberta (Low Row)',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Polia Baixa', 'Barra Larga ou Corda'],
                  musclesFocus: 'Lat Inferior + Romboides + Trapézio Médio',
                  execution: [
                    'Sente-se na máquina de polia baixa — costas eretas, joelhos levemente flexionados',
                    'Pegada aberta (mais larga que ombros) com barra reta ou W',
                    'Puxe para o umbigo mantendo os cotovelos afastados do corpo (~45–60°)',
                    'No ponto final, retraia as escápulas completamente — pause 1 segundo',
                    'Retorne com controle — permita alongamento completo no início',
                  ],
                  tip: 'Pegada aberta direciona mais para romboides e trapézio médio do que a pegada neutra estreita. Ideal para criar espessura no meio das costas.',
                },
                {
                  name: 'Pull Around com Cabo',
                  difficulty: 'intermediate',
                  pattern: 'Unilateral',
                  equipment: ['Polia Alta', 'Corda ou Alça'],
                  musclesFocus: 'Lat Superior + Redondo Maior + Serrátil',
                  execution: [
                    'Fique de lado para a polia alta — braço estendido para cima pegando a alça',
                    'Mantenha o cotovelo levemente flexionado durante todo o movimento',
                    'Puxe em arco para baixo e para o lado do corpo — cotovelo aponta para o chão',
                    'O cabo deve "contornar" o corpo — não puxe para frente',
                    'Segure 1 segundo com o lat contraído — retorne com controle total',
                  ],
                  tip: 'Variação de pullover unilateral no cabo — ativa o lat superior e o serrátil de forma diferente das puxadas convencionais. Ótimo finalizador.',
                },
                {
                  name: 'Pullover com Haltere',
                  difficulty: 'intermediate',
                  pattern: 'Bilateral',
                  equipment: ['Haltere', 'Banco'],
                  musclesFocus: 'Lat Superior + Serrátil + Peitoral Inferior',
                  execution: [
                    'Deite transversalmente no banco — ombros apoiados, quadril livre',
                    'Segure o haltere com as duas mãos — cotovelos levemente flexionados',
                    'Baixe o peso atrás da cabeça em arco até sentir o lat alongar',
                    'Puxe de volta em arco espremendo o lat — não deixe o cotovelo dobrar mais',
                    'O quadril pode descer levemente ao descer o peso — amplia o alongamento do serrátil',
                  ],
                  tip: 'Um dos únicos exercícios que treina extensão de ombro com carga no alongamento — janela de hipertrofia que remadas não alcançam.',
                },
              ],
            },
            {
              name: 'Levantamento Terra & Derivados',
              icon: '🏆',
              color: '#ED8936',
              exercises: [
                {
                  name: 'Levantamento Terra Convencional',
                  difficulty: 'advanced',
                  pattern: 'Bilateral Composto',
                  equipment: ['Barra'],
                  musclesFocus: 'Costas Completas + Glúteos + Isquiotibiais',
                  execution: [
                    'Pés na largura dos quadris — barra sobre o metatarso',
                    'Pegada dupla pronada ou alternada para cargas máximas',
                    'Quadril mais alto que no agachamento — tronco inclinado',
                    'Empurre o chão para baixo (quad) enquanto eleva o quadril para cima',
                    'Barra roçando as pernas durante todo o movimento',
                    'Extensão completa de quadril e joelho no topo — não hiperetenda',
                  ],
                  tip: 'O exercício de maior potencial de força do corpo humano. Progressão aqui constrói costas densas e espessas que nenhum isolamento consegue.',
                },
                {
                  name: 'Good Morning',
                  difficulty: 'advanced',
                  pattern: 'Bilateral',
                  equipment: ['Barra'],
                  musclesFocus: 'Eretores da Espinha + Isquiotibiais + Glúteos',
                  execution: [
                    'Barra sobre os trapézios — mesma posição do agachamento',
                    'Empurre o quadril para trás com joelhos levemente flexionados',
                    'Incline o tronco até sentir forte alongamento nos posteriores',
                    'Mantenha coluna neutra absolutamente — não arredonde',
                    'Suba espremendo os glúteos e empurrando o quadril para frente',
                  ],
                  tip: 'Exercise "proibido" por muitos, adorado por Powerlifters. Com carga adequada e técnica correta é o melhor exercício para eretores.',
                },
              ],
            },
            {
              name: 'Saúde do Ombro & Manguito',
              icon: '🩺',
              color: '#48BB78',
              exercises: [
                {
                  name: 'Face Pull',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Polia', 'Corda'],
                  musclesFocus: 'Infraespinal + Redondo Menor + Trapézio Posterior',
                  execution: [
                    'Polia na altura dos olhos ou acima — cabo com corda',
                    'Puxe para o rosto, cotovelos para cima e para fora',
                    'Dedos indicadores apontando para o teto no ponto final',
                    'Pause 1–2 segundos — sinta a rotação externa',
                    'Retorne devagar — não deixe o peso puxar de volta',
                  ],
                  tip: 'O exercício mais subestimado da academia. Inclua em TODO treino de ombro e costas para prevenção de lesão.',
                },
                {
                  name: 'Remada Alta com Cabo',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Polia baixa', 'Corda ou barra'],
                  musclesFocus: 'Trapézio Médio/Inferior + Romboides',
                  execution: [
                    'Polia baixa — sente no banco ou em pé levemente inclinado',
                    'Puxe para o esterno — cotovelos para os lados',
                    'Retração escapular máxima e pausa de 2 segundos',
                    'Desça com controle completo — protração ativa no retorno',
                  ],
                  tip: 'Foco em retração e depressão escapular — essencial para quem tem ombros anterorizados por excesso de peito e falta de costas.',
                },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────── CAP 3: PADRÕES DE MOVIMENTO ───────────────
    {
      id: 'padroes',
      number: 3,
      title: 'Padrões de Movimento',
      icon: '🔀',
      intro: 'Costas completas exigem dois padrões distintos: verticais (puxar de cima para baixo) para largura, e horizontais (puxar da frente para o corpo) para espessura. Negligenciar um cria costas visualmente incompletas.',
      sections: [
        {
          type: 'protocol-principles',
          principles: [
            {
              icon: '⬆️',
              title: 'Vertical (Largura)',
              content: 'Puxadas e pulldowns. Ativam primariamente o latíssimo superior e criam o "V-taper". Cotovelo se move de cima para baixo em relação ao corpo. Mínimo: 1 exercício vertical por treino de costas.',
            },
            {
              icon: '↔️',
              title: 'Horizontal (Espessura)',
              content: 'Remadas. Ativam latíssimo inferior, trapézio médio e romboides. Cotovelo se move da frente para trás em relação ao tronco. Essencial para costas grossas e para postura. Mínimo: 1 exercício horizontal por treino.',
            },
            {
              icon: '🎯',
              title: 'Proporção Recomendada',
              content: 'Para estética: 40% vertical + 40% horizontal + 20% terra/extensão. Para força: inverta (mais terra e remadas). Para postura: enfatize horizontal. Adapte conforme objetivo.',
            },
            {
              icon: '✋',
              title: 'Variações de Pegada',
              content: 'Pronada (palmas para baixo): mais trapézio. Supinada (palmas para cima): mais bíceps e lat inferior. Neutra (palmas frente a frente): equilíbrio — menos stress no ombro. Varie a pegada entre mesociclos.',
            },
          ],
        },
        {
          type: 'workout-examples',
          workouts: [
            {
              name: 'Exemplo de Sessão — Completa',
              tag: 'Intermediário',
              duration: '65–75 min',
              exercises: [
                { name: 'Barra Fixa c/ Peso', sets: '4', reps: '5–8', rest: '3 min', note: 'Puxada pronada — largura' },
                { name: 'Remada Curvada c/ Barra', sets: '4', reps: '8–12', rest: '2 min', note: 'Cotovelo colado — espessura' },
                { name: 'Pulldown Triângulo', sets: '3', reps: '10–14', rest: '90s', note: 'Lat inferior — pegada neutra' },
                { name: 'Remada Unilateral Halter', sets: '3', reps: '10–12 cada', rest: '90s', note: 'Amplitude total' },
                { name: 'Face Pull com Corda', sets: '3', reps: '15–20', rest: '60s', note: 'Manguito + pós' },
                { name: 'Encolhimento Trapézio', sets: '3', reps: '12–15', rest: '60s', note: 'Trap superior' },
              ],
            },
            {
              name: 'Exemplo de Sessão — Terra Foco',
              tag: 'Avançado',
              duration: '60–70 min',
              exercises: [
                { name: 'Levantamento Terra', sets: '5', reps: '3–6', rest: '4 min', note: 'Principal — força máxima' },
                { name: 'Remada Cavalinho (T-Bar)', sets: '4', reps: '8–12', rest: '2 min', note: 'Espessura central' },
                { name: 'Barra Fixa Supinada', sets: '3', reps: '8–12', rest: '2 min', note: 'Lat inferior + bíceps' },
                { name: 'Pulldown Polia c/ Corda', sets: '3', reps: '12–15', rest: '90s', note: 'Pump + conexão' },
                { name: 'Face Pull', sets: '3', reps: '15–20', rest: '60s', note: 'Saúde do ombro' },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────── CAP 4: PROTOCOLO ──────────────────────────
    {
      id: 'protocolo',
      number: 4,
      title: 'Montagem do Protocolo',
      icon: '📋',
      intro: 'Como estruturar o volume, frequência e seleção de exercícios para costas em função do seu nível e objetivo principal.',
      sections: [
        {
          type: 'protocol-principles',
          principles: [
            {
              icon: '🔄',
              title: 'Frequência',
              content: 'Costas respondem bem a 2× por semana. Use Treino A com foco em largura (puxadas + remadas abertas) e Treino B com foco em espessura (terra + remadas fechadas). 1× é suficiente para iniciantes.',
            },
            {
              icon: '📊',
              title: 'Volume Semanal',
              content: 'Iniciante: 10–14 séries. Intermediário: 14–20 séries. Avançado: 18–26 séries. Distribua igualmente entre verticais e horizontais. Lat responde bem a volume moderado-alto com boa execução.',
            },
            {
              icon: '📐',
              title: 'Ordem dos Exercícios',
              content: 'Terra/compostos pesados primeiro. Puxadas e remadas com peso livre depois. Pulldown e remadas na máquina em seguida. Face Pull e isolamentos sempre no final. Nunca inverta — fadiga compromete forma nos compostos.',
            },
            {
              icon: '🎯',
              title: 'Prioridade de Desenvolvimento',
              content: 'Lat fraco: priorize verticais (3:1 sobre horizontais). Lat espesso mas estreito: inverta. Postura curvada: enfatize face pull e remadas com retração. Costas planas no palco: adicione terra e good morning.',
            },
          ],
        },
        {
          type: 'workout-examples',
          workouts: [
            {
              name: 'Treino A — Foco em Largura',
              tag: 'Intermediário',
              duration: '60–70 min',
              exercises: [
                { name: 'Barra Fixa Pronada', sets: '4', reps: '6–10', rest: '3 min', note: 'Largura — pegada larga' },
                { name: 'Pulldown Triângulo', sets: '3', reps: '10–14', rest: '90s', note: 'Lat inferior' },
                { name: 'Remada Unilateral Halter', sets: '4', reps: '10–12', rest: '2 min', note: 'Amplitude máxima' },
                { name: 'Pulldown Polia Corda', sets: '3', reps: '12–15', rest: '90s', note: 'Pump + conexão' },
                { name: 'Face Pull', sets: '3', reps: '15–20', rest: '60s', note: 'Manguito rotador' },
              ],
            },
            {
              name: 'Treino B — Foco em Espessura',
              tag: 'Intermediário',
              duration: '65–75 min',
              exercises: [
                { name: 'Terra Romeno ou Convencional', sets: '4', reps: '6–10', rest: '3 min', note: 'Principal composto' },
                { name: 'Remada Curvada c/ Barra', sets: '4', reps: '8–12', rest: '2 min', note: 'Espessura — cot. colado' },
                { name: 'Remada Cavalinho T-Bar', sets: '3', reps: '10–14', rest: '2 min', note: 'Trap médio + romboide' },
                { name: 'Pulldown Larga Polia', sets: '3', reps: '10–14', rest: '90s', note: 'Manutenção de largura' },
                { name: 'Face Pull + Encolhimento', sets: '3+3', reps: '15–20 / 12–15', rest: '60s', note: 'Superset pós-treino' },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────── CAP 5: INTENSIDADE ────────────────────────
    {
      id: 'intensidade',
      number: 5,
      title: 'Técnicas de Intensidade',
      icon: '⚡',
      intro: 'Costas são um grupo em que a conexão mente-músculo é o principal limitante — não a carga. Use técnicas que aumentam o tempo sob tensão e forçam maior recrutamento do lat.',
      sections: [
        {
          type: 'technique-cards',
          techniques: [
            {
              name: 'Isometria no Topo',
              icon: '🔒',
              level: 'intermediate',
              description: 'Pause 2–3 segundos no ponto de máxima contração (puxada/remada) antes de descer. Elimina o momentum e força contração máxima do lat.',
              application: 'Barra fixa, pulldown, remadas na máquina e polia.',
              warning: 'Exige redução de carga — comece com 70–80% do habitual e aumente gradualmente.',
            },
            {
              name: 'Pausa no Alongamento',
              icon: '🧘',
              level: 'intermediate',
              description: 'Pause 2 segundos no ponto de máximo alongamento (braços estendidos/frente) antes de iniciar a contração. Aumenta o dano miofibrilar e recrutamento na fase inicial.',
              application: 'Pulldown, remadas na polia, remada unilateral.',
              warning: 'Não combine com isometria no topo na mesma série — escolha um dos dois por exercício.',
            },
            {
              name: 'Remada de Alta Frequência',
              icon: '🔁',
              level: 'intermediate',
              description: 'Inclua 2–3 séries leves de face pull ou remada no cabo no início de todo treino de peito, ombro e bíceps. Aquece o manguito e treina costas com maior frequência sem aumentar o volume por sessão.',
              application: 'Face pull leve (15–20 reps) antes de qualquer treino de empurrar.',
              warning: 'Use cargas leves (40–50% do máximo) — objetivo é ativação e frequência, não sobrecarga.',
            },
            {
              name: 'Superset Costas/Bíceps',
              icon: '💪',
              level: 'intermediate',
              description: 'Encadeie um exercício de costas com uma rosca direta ou rosca martelo. O bíceps pré-fatigado força a costas a recrutar mais fibras próprias nas remadas/puxadas seguintes.',
              application: 'Pulldown + Rosca Direta. Remada Unilateral + Rosca Martelo.',
              warning: 'Reduz a carga nos compostos de costas — não use nas séries principais de força do mesociclo.',
            },
            {
              name: 'Puxada Negativa',
              icon: '📉',
              level: 'advanced',
              description: 'Suba com impulso ou assistência e desça o mais lentamente possível (5–10 segundos). Ativa mais fibras musculares que a fase concêntrica.',
              application: 'Barra fixa — ideal para quem não consegue reps completas ainda.',
              warning: 'DOMS intenso nas primeiras sessões. Use no máximo 2 séries com descanso longo (3 min+).',
            },
            {
              name: 'Drop Set em Pulldown',
              icon: '📊',
              level: 'intermediate',
              description: 'Após a falha, reduza 25% da carga imediatamente e continue. Repita 1 vez para triplicar o volume de pump sem aumentar o tempo total de treino.',
              application: 'Pulldown na polia — último exercício da sessão.',
              warning: 'Máximo 1 drop set por sessão no pulldown. Mais do que isso aumenta o risco de tendinite no cotovelo.',
            },
          ],
        },
      ],
    },

    // ─────────────────── CAP 6: PERIODIZAÇÃO ───────────────────────
    {
      id: 'periodizacao',
      number: 6,
      title: 'Periodização & Progressão',
      icon: '📈',
      intro: 'Costas são o grupo que mais recompensa consistência de longo prazo. Os resultados aparecem devagar mas são duradouros — não queime etapas.',
      sections: [
        {
          type: 'progression-blocks',
          blocks: [
            {
              title: 'Progressão de Força',
              icon: '⬆️',
              items: [
                'Foque em progressão nos compostos: barra fixa, remada e terra. São eles que constroem costas reais',
                'Progressão dupla: aumente reps até o topo da faixa, depois aumente carga e volte ao mínimo de reps',
                'Se barra fixa estagna: faça negativas, assistida, ou trabalhe pull-up com elástico',
              ],
            },
            {
              title: 'Deload de Costas',
              icon: '⬇️',
              items: [
                'A cada 4–6 semanas: reduza volume para 40–50% do habitual, mantenha frequência',
                'Especialmente importante após semanas com terra pesado — o SNC precisa de recuperação',
                'Substitua compostos por trabalho leve de polia e máquina no deload',
              ],
            },
            {
              title: 'Conexão Mente-Músculo',
              icon: '🧠',
              items: [
                'Costas é o grupo muscular mais difícil de sentir — a maioria usa demais o bíceps',
                'Aquecimento com polia e isometrias ajuda a "ligar" o lat antes dos compostos',
                'Pense em puxar o cotovelo para baixo e para trás — não em "pegar" a barra',
                'Olhe para trás (espelho traseiro) durante as remadas para monitorar retração escapular',
              ],
            },
            {
              title: 'Indicadores de Progresso',
              icon: '📊',
              items: [
                'Carga no terra e na remada curvada: principais indicadores de força',
                'Número de reps na barra fixa: melhor indicador de hipertrofia funcional de costas',
                'Medida de largura torácica e de costa a costa: mensalmente',
                'Fotos de lado (lat spread) e de costas (rear lat spread) mensalmente',
              ],
            },
          ],
        },
        {
          type: 'tips-grid',
          tips: [
            { icon: '🤚', title: 'Grip Limitante', text: 'Mãos e antebraços frequentemente falham antes das costas. Use straps em exercícios como terra e remada curvada para garantir que costas sejam o fator limitante.' },
            { icon: '🧊', title: 'Recuperação', text: 'Costas pesadas (terra, remada) geram DOMS de 48–72h. Planeje treinos de pernas ou peito nos dias seguintes — evite costas novamente antes de 48h.' },
            { icon: '📐', title: 'Postura no Dia a Dia', text: 'Quem senta muitas horas desenvolve hipercifose (costas curvadas). Inclua exercícios de retração escapular em TODA sessão — Face Pull, remada alta — para contrabalançar.' },
            { icon: '⚡', title: 'Lat vs. Bíceps', text: 'Se você sente mais bíceps do que costas nas remadas, tente usar straps ou pegada com o "polegar por cima" (thumbless grip) para reduzir o engajamento do antebraço e bíceps.' },
          ],
        },
      ],
    },

    // ─────────────────── CAP 7: POSES & PALCO ──────────────────────
    {
      id: 'poses',
      number: 7,
      title: 'Poses & Apresentação',
      icon: '🏆',
      intro: 'Costas são o grupo mais impactante no palco. Uma pose de rear lat spread perfeita pode compensar deficiências em outros grupos. Treinar a pose é tão importante quanto treinar o músculo.',
      sections: [
        {
          type: 'muscle-cards',
          muscles: [
            {
              name: 'Rear Lat Spread',
              scientificName: 'Pose Principal de Costas',
              icon: '🥇',
              heads: ['Largura do Lat', 'Inserção Baixa do Lat', 'Espessura Central', 'Separação dos Eretores'],
              function: 'Exibe a largura total do latíssimo, a profundidade das costas e a simetria do V-taper. É a pose mais importante para bodybuilding clássico.',
              tip: 'Treino de pose: 5–10 minutos por dia, na frente do espelho. Pratique expansão das costelas (respiração profunda), posicionamento dos cotovelos e controle do lat de forma isométrica.',
              keyFact: 'Julgada em todas as categorias — mais impactante que qualquer outra pose de costas',
            },
            {
              name: 'Rear Double Biceps',
              scientificName: 'Pose de Costas com Bíceps',
              icon: '🥈',
              heads: ['Bíceps Contraído', 'Lat em Spread', 'Glúteo Contraído', 'Isquiotibiais em Destaque'],
              function: 'Exibe simultaneamente costas, bíceps, glúteos e isquiotibiais. Requer contração de múltiplos grupos ao mesmo tempo com separação muscular máxima.',
              tip: 'Aprenda a contrair glúteos, isquiotibiais e lats simultaneamente. Dica: posicione um pé levemente à frente para mostrar separação de isquiotibiais.',
              keyFact: 'A pose mais difícil de executar — exige contração total de anterior e posterior ao mesmo tempo',
            },
            {
              name: 'Side Chest (Lateral)',
              scientificName: 'Pose Lateral com Costas',
              icon: '🥉',
              heads: ['Profundidade Dorsal', 'Separação de Eretores', 'Lat Inferior Visível'],
              function: 'De lado, exibe a profundidade das costas, espessura do lat e a separação dos eretores da espinha na lombar.',
              tip: 'Posicione o braço posterior com cotovelo apontando para trás — isso expande o lat e o torna visível de lado. Contraia a lombar para mostrar os eretores.',
              keyFact: 'Muitos atletas perdem pontos nessa pose por não trabalharem a profundidade dorsal',
            },
            {
              name: 'Vacuum (Abdome)',
              scientificName: 'Pose Clássica de Cintura',
              icon: '⭐',
              heads: ['Transverso do Abdome', 'Oblíquos', 'Cintura Estreita'],
              function: 'Contração máxima do transverso — cria a ilusão de cintura estreita e contraste com a largura do lat.',
              tip: 'Treine: expire completamente, puxe o umbigo em direção à coluna ao máximo e segure. Comece com 10 segundos e evolua para 30–60 segundos. Pratique em jejum de manhã.',
              keyFact: 'Extremamente valorizado no Classic Physique e Men\'s Physique — cria contraste visual de cintura',
            },
          ],
        },
        {
          type: 'tips-grid',
          tips: [
            { icon: '🪞', title: 'Prática Diária', text: 'Treine as poses todos os dias, não apenas antes de competições. 5–10 minutos de prática diária no espelho cria memória muscular e controle total da contração isométrica.' },
            { icon: '💨', title: 'Expansão Torácica', text: 'Na pose de costas, inspire fundo e expanda o tórax lateralmente antes de espalhar o lat. Costas abertas com tórax expandido criam ilusão de muito mais largura.' },
            { icon: '🦵', title: 'Posicionamento dos Pés', text: 'Na Rear Double Biceps, posicione a perna posterior em ponta do pé — contrai automaticamente a panturrilha e cria linha visual mais elegante de baixo para cima.' },
            { icon: '☀️', title: 'Bronzeado & Iluminação', text: 'Costas com bronzeado competitivo aumentam dramaticamente a definição visual. A separação muscular que não aparece sem bronzeado se torna evidente com iluminação lateral + óleo + bronzeado escuro.' },
          ],
        },
      ],
    },
  ],
}
