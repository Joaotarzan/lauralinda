/* ============================================================
   MultimídiaLab — posts.js
   ============================================================ */

const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Um pouco sobre a gente e como esse blog surgiu no meio da faculdade.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala aí 👋 bem-vindo ao <strong>MultimídiaLab</strong>.</p>

      <p>Esse blog começou como um trabalho da faculdade… mas acabou virando algo que a gente realmente curtiu fazer.</p>

      <h3>Quem somos</h3>
      <p><strong>João Carlos:</strong> o cara do código, que tenta fazer tudo funcionar (às vezes vai na tentativa e erro mesmo 😅)</p>
      <p><strong>Laura Conte:</strong> quem deixa tudo mais bonito, organizado e com cara de algo que dá vontade de ver</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a disciplina</h3>
      <p>A matéria de Multimídias mostra como tudo hoje mistura texto, imagem, vídeo e interação. Nada é só uma coisa só.</p>

      <h3>O que tem aqui</h3>
      <ul>
        <li>Explicações sem linguagem travada</li>
        <li>Exemplos reais</li>
        <li>Coisas que a gente realmente entendeu</li>
      </ul>

      <div class="info-box">
        <p>📌 Isso aqui vai sendo atualizado conforme a gente aprende.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay</li>
        <li>FELDMAN, Tony</li>
      </ul>
    `
  },

  {
    id: 2, num: '02',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Por que esse blog existe?',
    excerpt: 'Spoiler: começou como trabalho… mas virou mais que isso.',
    tags: ['Blog','Comunicação'],
    date: 'Mar 2026', readTime: '4 min',
    body: `
      <p>A verdade? Esse blog nasceu porque precisava entregar um trabalho.</p>

      <p>Mas no meio do caminho a gente percebeu que tava literalmente aplicando multimídia na prática.</p>

      <h3>Não é só escrever</h3>
      <p>Quando você cria um blog, você pensa em:</p>
      <ul>
        <li>Texto</li>
        <li>Imagem</li>
        <li>Vídeo</li>
        <li>Interação</li>
      </ul>

      <p>Ou seja… você já tá fazendo multimídia sem perceber.</p>

      <h3>Objetivo real</h3>
      <ul>
        <li>Aprender de verdade</li>
        <li>Explicar de forma simples</li>
        <li>Não ficar só copiando definição</li>
      </ul>

      <div class="info-box">
        <p>💡 Dica: entender o conteúdo vale muito mais do que só entregar.</p>
      </div>
    `
  },

  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia na vida real',
    excerpt: 'Você usa isso todo dia e nem percebe.',
    tags: ['Multimídia'],
    date: 'Mar 2026', readTime: '6 min',
    body: `
      <p>Multimídia parece um conceito complicado… mas na prática é simples:</p>

      <p><strong>é tudo funcionando junto</strong>.</p>

      <h3>Exemplo</h3>
      <p>YouTube:</p>
      <ul>
        <li>Vídeo</li>
        <li>Áudio</li>
        <li>Texto</li>
        <li>Interação</li>
      </ul>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>Componentes</h3>
      <p><strong>Texto:</strong> explica</p>
      <p><strong>Imagem:</strong> chama atenção</p>
      <p><strong>Áudio:</strong> acompanha</p>
      <p><strong>Vídeo:</strong> junta tudo</p>
      <p><strong>Interação:</strong> engaja</p>

      <h3>Linear vs Não-linear</h3>
      <p><strong>Linear:</strong> começo, meio e fim</p>
      <p><strong>Não-linear:</strong> você escolhe o caminho</p>

      <div class="info-box">
        <p>🚀 A internet inteira funciona assim hoje.</p>
      </div>
    `
  },

  {
    id: 4, num: '04',
    cat: 'midia', catLabel: '📺 Hipermídia', catColor: '#ff6230',
    title: 'Hipermídia na prática',
    excerpt: 'Basicamente… clicar e sair abrindo tudo.',
    tags: ['Hipermídia'],
    date: 'Mar 2026', readTime: '5 min',
    body: `
      <p>Sabe quando você entra num site e vai clicando em link atrás de link?</p>

      <p>Isso é hipermídia.</p>

      <h3>Ideia principal</h3>
      <p>Você não segue uma ordem fixa. Você escolhe o caminho.</p>

      <h3>Exemplos</h3>
      <ul>
        <li>Sites</li>
        <li>Blogs</li>
        <li>Wikipedia</li>
      </ul>

      <div class="info-box">
        <p>🔗 A internet inteira é baseada nisso.</p>
      </div>
    `
  },

  {
    id: 5, num: '05',
    cat: 'xr', catLabel: '🥽 VR', catColor: '#39d98a',
    title: 'Realidade Virtual',
    excerpt: 'Entrar num mundo que não existe… mas parece que existe.',
    tags: ['VR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Realidade Virtual é quando você literalmente entra em outro mundo.</p>

      <h3>Exemplo</h3>
      <p>Colocou o óculos → já era, você tá dentro.</p>

      <h3>Onde usa</h3>
      <ul>
        <li>Jogos</li>
        <li>Treinamentos</li>
        <li>Simulações</li>
      </ul>

      <div class="info-box">
        <p>🎮 É tipo videogame… só que muito mais imersivo.</p>
      </div>
    `
  },

  {
    id: 6, num: '06',
    cat: 'xr', catLabel: '🔮 AR', catColor: '#ffd060',
    title: 'Realidade Aumentada',
    excerpt: 'Mistura o mundo real com coisas digitais.',
    tags: ['AR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Diferente da VR, aqui você continua no mundo real.</p>

      <p>Só que com coisas digitais aparecendo junto.</p>

      <h3>Exemplo</h3>
      <p>Pokémon GO.</p>

      <div class="info-box">
        <p>📱 Seu celular já faz isso hoje.</p>
      </div>
    `
  },

  {
    id: 7, num: '07',
    cat: 'xr', catLabel: '🔀 MR', catColor: '#ff4d8d',
    title: 'Realidade Mista',
    excerpt: 'O digital interagindo com o real.',
    tags: ['MR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Aqui o virtual não só aparece… ele interage.</p>

      <p>É tipo um nível acima da AR.</p>

      <div class="info-box">
        <p>🤯 É o mais avançado hoje.</p>
      </div>
    `
  },

  {
    id: 8, num: '08',
    cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
    title: 'Holografia',
    excerpt: 'Imagem 3D no ar (quase isso).',
    tags: ['Holograma'],
    date: 'Abr 2025',
    readTime: '6 min',
    body: `
      <p>Holografia cria imagens tridimensionais usando luz.</p>

      <p>Sim, parece coisa de filme.</p>

      <div class="info-box">
        <p>✨ Ainda não é igual Star Wars… mas tá chegando.</p>
      </div>
    `
  },

  {
    id: 9, num: '09',
    cat: 'imagem', catLabel: '🖼 Imagem',
    catColor: '#00e5ff',
    title: 'Formatos de Imagem',
    excerpt: 'JPEG, PNG… cada um tem seu uso.',
    tags: ['Imagem'],
    date: 'Mai 2025',
    readTime: '5 min',
    body: `
      <p>Nem toda imagem é igual.</p>

      <h3>Resumo rápido</h3>
      <ul>
        <li>JPEG → foto</li>
        <li>PNG → qualidade</li>
        <li>SVG → escala infinita</li>
      </ul>
    `
  },

  {
    id: 10, num: '10',
    cat: 'imagem',
    catLabel: '🖼 Processamento',
    catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Como o computador entende imagens.',
    tags: ['PDI'],
    date: 'Mai 2025',
    readTime: '6 min',
    body: `
      <p>Processamento de imagem é fazer o computador entender o que tem numa foto.</p>

      <ul>
        <li>Reconhecimento facial</li>
        <li>Filtros</li>
        <li>Detecção</li>
      </ul>
    `
  },

  {
    id: 11, num: '11',
    cat: 'ia',
    catLabel: '🤖 IA',
    catColor: '#ff4d8d',
    title: 'IA e Multimídia',
    excerpt: 'A IA criando conteúdo.',
    tags: ['IA'],
    date: 'Mai 2025',
    readTime: '6 min',
    body: `
      <p>Hoje a IA cria imagem, texto, áudio… tudo.</p>

      <div class="info-box">
        <p>🤖 E isso só tá começando.</p>
      </div>
    `
  },

  {
    id: 12, num: '12',
    cat: 'game',
    catLabel: '🎮 Game Design',
    catColor: '#ffd060',
    title: 'GDD',
    excerpt: 'Planejamento de jogo.',
    tags: ['Game'],
    date: 'Jun 2025',
    readTime: '6 min',
    body: `<p>É o documento que define tudo do jogo.</p>`
  },

  {
    id: 13, num: '13',
    cat: 'game',
    catLabel: '🎮 Jogo',
    catColor: '#ffd060',
    title: 'Jogo Desenvolvido',
    excerpt: 'Nosso projeto.',
    tags: ['Projeto'],
    date: 'Jun 2025',
    readTime: '6 min',
    body: `<p>Aqui entra o jogo de vocês.</p>`
  },

  {
    id: 14, num: '14',
    cat: 'tech',
    catLabel: '⚙️ IoT',
    catColor: '#39d98a',
    title: 'IoT',
    excerpt: 'Tudo conectado.',
    tags: ['IoT'],
    date: 'Jun 2025',
    readTime: '6 min',
    body: `<p>Objetos conectados à internet.</p>`
  },

  {
    id: 15, num: '15',
    cat: 'tech',
    catLabel: '⚙️ Automação',
    catColor: '#39d98a',
    title: 'Automação',
    excerpt: 'Deixa a máquina fazer.',
    tags: ['Automação'],
    date: 'Jun 2025',
    readTime: '6 min',
    body: `<p>Menos trabalho manual, mais tecnologia.</p>`
  },

  {
    id: 16, num: '16',
    cat: 'tech',
    catLabel: '⚙️ Projeto',
    catColor: '#39d98a',
    title: 'Projeto Desenvolvido',
    excerpt: 'Sistema criado.',
    tags: ['Projeto'],
    date: 'Jul 2025',
    readTime: '5 min',
    body: `<p>Detalhes do projeto aqui.</p>`
  },

  {
    id: 17, num: '17',
    cat: 'apresentacao',
    catLabel: '📋 Conclusão',
    catColor: '#00e5ff',
    title: 'Reflexão Final',
    excerpt: 'O que ficou disso tudo.',
    tags: ['Conclusão'],
    date: 'Jul 2025',
    readTime: '4 min',
    body: `
      <p>No fim, a gente percebeu que multimídia não é só teoria.</p>

      <p>É o jeito que tudo funciona hoje.</p>

      <div class="info-box">
        <p>🙏 Valeu por acompanhar.</p>
      </div>
    `
  }
];
