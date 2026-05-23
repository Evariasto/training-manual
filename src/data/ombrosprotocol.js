export const OMBROS_PROTOCOL = {
  id: 'ombros',
  title: 'Protocolo Ombros',
  subtitle: 'Deltoides anterior, lateral e posterior — largura, redondeza e equilíbrio',
  icon: '🔥',
  color: '#9F7AEA',

  chapters: [
    {
      id: 'anatomia',
      number: 1,
      title: 'Anatomia dos Deltoides',
      icon: '🧬',
      intro: 'O ombro é composto por três porções com funções completamente distintas — e que respondem a exercícios diferentes. A maioria dos atletas treina em excesso o deltóide anterior (já estimulado nos supinos) e neglencia o lateral e o posterior.',
      sections: [
        {
          type: 'muscle-cards',
          muscles: [
            {
              name: 'Deltóide Anterior',
              scientificName: 'Deltoideus Pars Clavicularis',
              icon: '🟣',
              heads: ['Porção anterior — inserção na clavícula'],
              function: 'Flexão e rotação medial do úmero. Elevação frontal do braço. Assistente no supino e em todos os empurrões horizontais.',
              tip: 'O deltóide anterior já recebe estímulo indireto em TODOS os supinos. Priorizar o frontal raramente é necessário — foque no lateral e posterior.',
              keyFact: 'Mais estimulado indiretamente que qualquer outra porção — raramente é a fraqueza limitante',
            },
            {
              name: 'Deltóide Lateral',
              scientificName: 'Deltoideus Pars Acromialis',
              icon: '🟣',
              heads: ['Porção medial — inserção no acrômio'],
              function: 'Abdução do braço (elevação lateral). A porção que cria a largura dos ombros — define o "boulder shoulders" e o visual de V-taper.',
              tip: 'Melhor ativado em abdução pura com cotovelo levemente dobrado. O cotovelo deve estar no mesmo nível ou acima do punho durante a elevação lateral — cotovelo acima = mais ativação.',
              keyFact: 'Define a largura visual dos ombros — a porção mais treinada por fisiculturistas',
            },
            {
              name: 'Deltóide Posterior',
              scientificName: 'Deltoideus Pars Spinalis',
              icon: '🟣',
              heads: ['Porção posterior — inserção na espinha da escápula'],
              function: 'Extensão, abdução horizontal e rotação externa do úmero. Stabilizador do ombro durante puxadas e remadas.',
              tip: 'O deltóide posterior é o mais subestimado e subtreinado. Cria a "redondeza" posterior do ombro visível de lado e de costas. Inclua face pull e crucifixo inverso em TODO treino de ombro.',
              keyFact: 'Mais negligenciado — sua fraqueza cria desequilíbrio postural e risco de impingimento',
            },
            {
              name: 'Manguito Rotador',
              scientificName: 'Musculi Rotatores Cuff (SITS)',
              icon: '🔴',
              heads: ['Supraespinal', 'Infraespinal', 'Redondo Menor', 'Subescapular'],
              function: 'Estabilização da cabeça do úmero na cavidade glenoidal durante todos os movimentos do ombro. Não cria volume visual — mas sua fraqueza causa todas as lesões de ombro.',
              tip: 'Treine o manguito preventivamente: face pull, rotação externa com cabo e press sobre cabeça com amplitude controlada. 5 minutos por treino de ombro vale meses de prevenção.',
              keyFact: 'Não visível — mas responsável por 90% das lesões de ombro em atletas de força',
            },
          ],
        },
      ],
    },

    {
      id: 'exercicios',
      number: 2,
      title: 'Arsenal de Exercícios',
      icon: '🏋️',
      intro: 'Ombros exigem 3 categorias de exercícios: desenvolvimentos (força + volume), elevações (isolamento de laterais) e trabalho posterior (saúde + shape). Nenhuma categoria é opcional.',
      sections: [
        {
          type: 'exercise-categories',
          categories: [
            {
              name: 'Desenvolvimentos — Força & Massa',
              icon: '💪',
              color: '#9F7AEA',
              exercises: [
                {
                  name: 'Desenvolvimento com Halter',
                  difficulty: 'intermediate',
                  pattern: 'Bilateral',
                  equipment: ['Halters', 'Banco c/ encosto'],
                  musclesFocus: 'Deltóide Anterior + Lateral + Tríceps',
                  execution: [
                    'Banco com encosto a 90° ou levemente inclinado para trás',
                    'Halters na altura dos ombros, palmas para frente',
                    'Empurre diretamente para cima — não incline o tronco',
                    'No topo, não trave os cotovelos — mantenha tensão',
                    'Desça até cotovelos a 90° — amplitude completa',
                  ],
                  tip: 'Maior amplitude que o desenvolvimento com barra e menor risco de impingimento. Preferido para hipertrofia.',
                },
                {
                  name: 'Desenvolvimento Arnold',
                  difficulty: 'intermediate',
                  pattern: 'Bilateral',
                  equipment: ['Halters'],
                  musclesFocus: 'Deltóide Completo (3 porções)',
                  execution: [
                    'Inicie com palmas voltadas para você, halters na frente do rosto',
                    'Rotacione externamente os ombros enquanto sobe — palmas para frente no topo',
                    'Descida inverte a rotação — palmas para você novamente',
                    'Movimento fluido — não force a rotação rápida',
                  ],
                  tip: 'A rotação ativa as 3 porções ao longo do movimento. Ótimo para desenvolvimento estético completo do ombro.',
                },
                {
                  name: 'Desenvolvimento Militar (Barra)',
                  difficulty: 'advanced',
                  pattern: 'Bilateral Composto',
                  equipment: ['Barra'],
                  musclesFocus: 'Deltóide + Tríceps + Core',
                  execution: [
                    'Em pé ou sentado — barra na frente, pegada pronada',
                    'Barra sobe pela frente — não atrás da cabeça',
                    'Core contraído para proteger a lombar',
                    'Cotovelos levemente à frente no ponto inicial',
                  ],
                  tip: 'Maior potencial de sobrecarga para ombros. Atrás da cabeça é contraindicado — sobrecarrega o manguito e a cervical.',
                },
              ],
            },
            {
              name: 'Elevações Laterais — Largura',
              icon: '↔️',
              color: '#ED8936',
              exercises: [
                {
                  name: 'Elevação Lateral com Halter',
                  difficulty: 'beginner',
                  pattern: 'Bilateral/Unilateral',
                  equipment: ['Halters'],
                  musclesFocus: 'Deltóide Lateral — isolamento',
                  execution: [
                    'Ligeira inclinação do tronco para frente (10–15°) — alinha o lateral com a linha de força',
                    'Cotovelo levemente dobrado durante todo o movimento',
                    'Cotovelo sobe junto ou acima do punho — não eleve apenas a mão',
                    'Ligeira rotação interna (pinky acima) pode aumentar ativação do lateral',
                    'Desça com controle — excêntrico de 3 segundos',
                  ],
                  tip: 'Use cargas mais leves do que imagina. A amplitude e o controle valem mais que o peso no isolamento do lateral.',
                },
                {
                  name: 'Elevação Lateral com Cabo',
                  difficulty: 'beginner',
                  pattern: 'Unilateral',
                  equipment: ['Polia baixa'],
                  musclesFocus: 'Deltóide Lateral — tensão constante',
                  execution: [
                    'Polia na altura do tornozelo — cabo passa pela frente do corpo',
                    'Eleve lateralmente com cotovelo suave',
                    'Tensão constante em todo o arco — superior ao halter na posição baixa',
                    'Alterne os lados para trabalho unilateral focado',
                  ],
                  tip: 'O cabo mantém tensão no ponto mais baixo — onde o halter "cai" por gravidade. Combine os dois para cobertura total do arco.',
                },
                {
                  name: 'Elevação Lateral na Máquina',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Máquina'],
                  musclesFocus: 'Deltóide Lateral com sobrecarga progressiva',
                  execution: [
                    'Ajuste o pivô alinhado com o ombro',
                    'Use os cotovelos para empurrar (não as mãos)',
                    'Suba até os braços paralelos ao chão',
                    'Rest-pause e drop sets são mais seguros aqui do que com halter',
                  ],
                  tip: 'Permite maior sobrecarga e técnicas avançadas com mais segurança. Ideal para finalizador de elevações após os compostos.',
                },
              ],
            },
            {
              name: 'Posteriores & Manguito',
              icon: '🩺',
              color: '#3182CE',
              exercises: [
                {
                  name: 'Crucifixo Inverso com Halter',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Halters'],
                  musclesFocus: 'Deltóide Posterior + Trapézio + Romboides',
                  execution: [
                    'Inclinado com tronco paralelo ao chão, olhando para baixo',
                    'Cotovelos levemente flexionados, palmas voltadas entre si',
                    'Eleve lateralmente até braços paralelos ao chão',
                    'Sinta o deltóide posterior contrair — não o trapézio',
                    'Retorne com controle — não balance o tronco',
                  ],
                  tip: 'Se sentir mais trapézio do que deltóide posterior: abaixe mais o tronco e reduza a carga.',
                },
                {
                  name: 'Face Pull com Corda',
                  difficulty: 'beginner',
                  pattern: 'Bilateral',
                  equipment: ['Polia', 'Corda'],
                  musclesFocus: 'Deltóide Posterior + Infraespinal + Trapézio',
                  execution: [
                    'Polia na altura dos olhos ou acima',
                    'Puxe para o rosto — cotovelos para cima e para fora',
                    'Dedos indicadores apontando para o teto no ponto final',
                    'Pause 2 segundos — sinta a rotação externa',
                  ],
                  tip: 'O exercício mais importante para saúde do ombro. Inclua em TODO treino de ombro, peito e costas.',
                },
                {
                  name: 'Elevação Frontal com Cabo',
                  difficulty: 'beginner',
                  pattern: 'Unilateral/Bilateral',
                  equipment: ['Cabo'],
                  musclesFocus: 'Deltóide Anterior',
                  execution: [
                    'Polia baixa atrás do corpo',
                    'Eleve o braço à frente até paralelo ao chão',
                    'Mantenha cotovelo suave — não rígido',
                    'Descida controlada com resistência do cabo',
                  ],
                  tip: 'Use apenas se o deltóide anterior for identificado como ponto fraco — a maioria não precisa de trabalho extra para ele.',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'protocolo',
      number: 3,
      title: 'Montagem do Protocolo',
      icon: '📋',
      intro: 'Ombros exigem atenção equilibrada entre as 3 porções. A proporção incorreta (muito frontal) é o erro mais comum e cria ombros com boa massa mas sem a largura visual que definem um físico.',
      sections: [
        {
          type: 'protocol-principles',
          principles: [
            {
              icon: '⚖️',
              title: 'Proporção das Porções',
              content: 'Anterior já treinado em supinos — não precisa de volume extra para maioria. Lateral: 50% do volume total de ombro. Posterior: 30%. Anterior direto: 20% (ou zero para quem faz muito peito).',
            },
            {
              icon: '🔄',
              title: 'Frequência',
              content: '2× por semana para intermediários — ombros respondem bem a alta frequência. A porção lateral especialmente: é pequena e recupera rápido. Inclua Face Pull em TODO treino de empurrar.',
            },
            {
              icon: '📊',
              title: 'Volume',
              content: 'Lateral: 14–22 séries semanais (alta frequência). Posterior: 10–14 séries (inclua no dia de costas também). Desenvolvimento: 6–10 séries semanais de força. Anterior: 0–6 séries (depende do volume de peito).',
            },
            {
              icon: '🎯',
              title: 'Ordem dos Exercícios',
              content: 'Desenvolvimento primeiro (composto + pesado). Elevações laterais depois (isolamento + volume). Posteriores/face pull no final. Não inverta — a fadiga nos compostos comprometeria o volume nos isolamentos.',
            },
          ],
        },
        {
          type: 'workout-examples',
          workouts: [
            {
              name: 'Treino de Ombro Completo',
              tag: 'Intermediário',
              duration: '55–65 min',
              exercises: [
                { name: 'Desenvolvimento Arnold', sets: '4', reps: '8–12', rest: '2 min', note: 'Principal — 3 porções' },
                { name: 'Elevação Lateral Halter', sets: '4', reps: '12–16', rest: '90s', note: 'Largura — volume alto' },
                { name: 'Elevação Lateral Cabo', sets: '3', reps: '14–18', rest: '60s', note: 'Tensão constante' },
                { name: 'Crucifixo Inverso', sets: '3', reps: '12–16', rest: '90s', note: 'Posterior — shape' },
                { name: 'Face Pull c/ Corda', sets: '3', reps: '15–20', rest: '60s', note: 'Manguito obrigatório' },
              ],
            },
            {
              name: 'Treino de Ombro — Força + Volume',
              tag: 'Avançado',
              duration: '65–75 min',
              exercises: [
                { name: 'Desenvolvimento Militar Barra', sets: '4', reps: '5–8', rest: '3 min', note: 'Força máxima' },
                { name: 'Desenvolvimento Halter', sets: '3', reps: '10–14', rest: '2 min', note: 'Volume + amplitude' },
                { name: 'Elev. Lateral Halter Unilateral', sets: '4', reps: '14–18', rest: '60s', note: 'Foco lateral' },
                { name: 'Elev. Lateral Máquina (Drop)', sets: '3', reps: '12+Drop', rest: '90s', note: 'Drop set final' },
                { name: 'Crucifixo Inverso c/ Halter', sets: '3', reps: '14–18', rest: '60s', note: 'Posterior completo' },
                { name: 'Face Pull', sets: '3', reps: '15–20', rest: '60s', note: 'Manguito + trap post.' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'intensidade',
      number: 4,
      title: 'Técnicas de Intensidade',
      icon: '⚡',
      intro: 'Ombros — especialmente as elevações laterais — respondem excepcionalmente bem a técnicas de alta repetição e rest-pause. A porção lateral tem alta proporção de fibras tipo 1 e aguenta volume alto.',
      sections: [
        {
          type: 'technique-cards',
          techniques: [
            {
              name: 'Rest-Pause nas Elevações',
              icon: '⏸️',
              level: 'intermediate',
              description: 'Nas elevações laterais, chegue à falha, descanse 10–15 segundos (halters abaixados) e retome. Repita 2–3 vezes. Triplicação do volume efetivo por série.',
              application: 'Elevação lateral com halter ou cabo. Muito eficaz também na máquina.',
              warning: 'Use com cargas moderadas — o objetivo é acumular repetições, não carga máxima.',
            },
            {
              name: 'Drop Set 21s',
              icon: '📉',
              level: 'intermediate',
              description: '7 reps completas + 7 reps apenas a metade superior + 7 reps apenas a metade inferior = 21 reps em 3 amplitudes diferentes. Ativa diferentes porções da curva de força.',
              application: 'Elevação lateral com halter. Elevação frontal. Crucifixo inverso.',
              warning: 'Use peso bem menor que o habitual — as parciais parecem simples mas a fadiga acumula rápido.',
            },
            {
              name: 'Série Gigante Deltóide',
              icon: '🔁',
              level: 'advanced',
              description: 'Desenvolvimento → Elevação Lateral → Crucifixo Inverso → Face Pull sem descanso. Cobre todas as porções com estímulo metabólico intenso.',
              application: '3–4 ciclos. Use cargas moderadas para manter forma em todas as porções.',
              warning: 'Alta demanda de recuperação. Use no máximo uma vez a cada 2 semanas.',
            },
            {
              name: 'Excêntrico Lento',
              icon: '🐢',
              level: 'beginner',
              description: 'Desça as elevações laterais em 4–5 segundos (fase excêntrica). A maioria das pessoas "cai" a fase excêntrica — esse é o maior dano muscular que você está deixando na mesa.',
              application: 'Qualquer elevação lateral. Crucifixo inverso. Desenvolvimento com halter.',
              warning: 'Reduz carga necessária em 30–40%. Comece com peso bem menor que o habitual.',
            },
            {
              name: 'Alta Frequência de Face Pull',
              icon: '🔒',
              level: 'beginner',
              description: 'Inclua 2–3 séries de face pull no início de TODOS os treinos de empurrar (peito, ombro). A porção posterior aquece o manguito e contrabalança a anteriorização do ombro.',
              application: 'Face pull leve (40–50% máximo) como aquecimento específico.',
              warning: 'Não é técnica de intensidade — é protocolo de saúde. Mantenha a carga leve e o foco na execução.',
            },
          ],
        },
      ],
    },

    {
      id: 'periodizacao',
      number: 5,
      title: 'Periodização & Progressão',
      icon: '📈',
      intro: 'Ombros são o grupo mais propenso a lesões por volume excessivo. Progrida devagar, monitore sinais de alerta e nunca sacrifique saúde por volume.',
      sections: [
        {
          type: 'progression-blocks',
          blocks: [
            {
              title: 'Progressão nos Desenvolvimentos',
              icon: '⬆️',
              items: [
                'Progresso nos desenvolvimentos = ombros crescem em largura e espessura',
                'Progressão dupla: aumente reps até o máximo, depois aumente carga',
                'Desenvolvimento com halter: mais fácil de progredir de forma segura que com barra',
              ],
            },
            {
              title: 'Volume nas Elevações',
              icon: '📊',
              items: [
                'Elevações laterais respondem a acumulação de volume — não apenas a carga',
                'Aumente o volume progressivamente: +1 série por semana durante o mesociclo',
                'Diminua no deload: volte ao volume inicial do mesociclo anterior',
              ],
            },
            {
              title: 'Sinais de Alerta',
              icon: '⚠️',
              items: [
                'Dor na face anterior do ombro durante desenvolvimentos = possível bursite ou impingimento',
                'Estalo com dor no ombro = pare imediatamente — não é "normal"',
                'Formigamento nos braços após desenvolvimentos = sobrecarga do plexo braquial — reduza amplitude',
              ],
            },
            {
              title: 'Deload',
              icon: '⬇️',
              items: [
                'A cada 4–6 semanas: reduza volume para 40–50%, mantenha frequência',
                'No deload de ombro: substitua desenvolvimentos pesados por Arnold leve',
                'Face pull: mantenha mesmo no deload — saúde não tira folga',
              ],
            },
          ],
        },
        {
          type: 'tips-grid',
          tips: [
            { icon: '📏', title: 'Ângulo das Elevações', text: 'Incline levemente o tronco para frente nas elevações laterais (10–15°). Isso alinha a linha de força com o deltóide lateral — ativação significativamente maior com mesma carga.' },
            { icon: '🎯', title: 'Cotovelo vs Punho', text: 'Nas elevações, o COTOVELO deve liderar o movimento — não a mão. Se você eleva a mão com o cotovelo caindo, você ativa mais trapézio do que deltóide.' },
            { icon: '🏋️', title: 'Carga nas Elevações', text: 'A maioria das pessoas usa carga excessiva nas elevações e compensa com o trapézio. Reduza o peso e foque na amplitude e contração. 10kg com técnica supera 20kg com compensação.' },
            { icon: '🔄', title: 'Posterior Todo Dia', text: 'Faça face pull ou crucifixo inverso em TODO treino que inclua empurrar. Ombro anterior e peitoral ficam cronicamente mais curtos e fortes que o posterior — contrabalance sempre.' },
          ],
        },
      ],
    },
  ],
}
