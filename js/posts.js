/* ============================================================
   MultimídiaLab — posts.js
   ============================================================ */

const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça quem tá por trás disso aqui e como esse blog surgiu.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala aí 👋 bem-vindo ao <strong>MultimídiaLab</strong>! Esse blog começou como um trabalho da faculdade… mas acabou virando algo que a gente realmente curtiu fazer.</p>

      <h3>Os Autores</h3>
      <p>Somos dois estudantes tentando sobreviver ao curso e, no meio disso tudo, criar algo daora com tecnologia.</p>

      <p><strong>Aluno 1:</strong> João Carlos — o cara que fica mexendo no código até funcionar (ou quebrar tudo 😅)</p>
      <p><strong>Aluno 2:</strong> Laura Conte — quem deixa tudo mais bonito e organizado</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a Disciplina</h3>
      <p>A matéria de Multimídias basicamente mostra como tudo hoje mistura várias coisas: texto, imagem, áudio, vídeo… nada é simples mais.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Explicações sem aquele jeito travado de livro</li>
        <li>Exemplos que fazem sentido na vida real</li>
        <li>Conteúdos que a gente realmente entendeu</li>
        <li>Uns erros e aprendizados no meio do caminho</li>
      </ul>

      <div class="info-box"><p>📌 Isso aqui vai sendo atualizado conforme a gente vai aprendendo.</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay.</li>
        <li>FELDMAN, Tony.</li>
      </ul>
    `
  },

  {
    id: 2, num: '02',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Finalidade do Blog',
    excerpt: 'Não foi só porque precisava… ou foi?',
    tags: ['Blog','Comunicação','Mídia Digital'],
    date: 'Mar 2026', readTime: '4 min',
    body: `
      <p>A real? Esse blog nasceu porque era trabalho da faculdade.</p>

      <p>Mas no meio do caminho a gente percebeu que isso aqui é literalmente multimídia acontecendo na prática.</p>

      <h3>Por que um Blog?</h3>
      <p>Porque aqui dá pra misturar tudo: texto, imagem, vídeo, áudio… e ainda deixar a pessoa navegar do jeito dela.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Guardar o que a gente aprendeu</li>
        <li>Praticar criação de conteúdo</li>
        <li>Aprender a explicar de forma simples</li>
        <li>Ter algo pra mostrar depois</li>
      </ul>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">O que é Comunicação Digital?</div><div class="media-src">https://youtu.be/nKPyvZSfNTc</div></div></div>

      <div class="info-box"><p>💡 Se você entende o que escreve, o conteúdo muda completamente.</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>JENKINS, Henry.</li>
      </ul>
    `
  },

  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia: Conceito e Aplicações',
    excerpt: 'Multimídia no mundo real, sem enrolação.',
    tags: ['Multimídia','Digital'],
    date: 'Mar 2026', readTime: '6 min',
    body: `
      <p>Multimídia parece complicado… mas na prática é simples: é tudo funcionando junto.</p>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>Componentes</h3>

      <p><strong>Texto:</strong> ainda é a base de tudo. É onde você explica e organiza as ideias.</p>
      <p><strong>Imagem:</strong> chama atenção na hora e ajuda a entender mais rápido.</p>
      <p><strong>Áudio:</strong> perfeito pra consumir conteúdo sem precisar olhar.</p>
      <p><strong>Vídeo:</strong> junta tudo e vira o formato mais completo hoje.</p>
      <p><strong>Interatividade:</strong> faz o usuário participar.</p>

      <p>No fim, tudo isso junto cria a experiência que a gente usa todo dia na internet.</p>

      <div class="info-box"><p>🚀 A multimídia é basicamente o jeito que a internet funciona hoje.</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>MAYER, Richard.</li>
      </ul>
    `
  },

  {
    id: 4, num: '04',
    cat: 'midia', catLabel: '📺 Hipermídia', catColor: '#ff6230',
    title: 'Hipermídia: Além do Hipertexto',
    excerpt: 'Quando você sai clicando em tudo.',
    tags: ['Hipermídia'],
    date: 'Mar 2026', readTime: '5 min',
    body: `
      <p>Sabe quando você entra num site e começa a clicar em link atrás de link?</p>

      <p>Então… isso é hipermídia.</p>

      <p>Ao invés de seguir uma ordem fixa, você escolhe o caminho.</p>

      <div class="info-box">
        <p>🔗 A internet inteira funciona assim hoje.</p>
      </div>
    `
  },

  {
    id: 5, num: '05',
    cat: 'xr', catLabel: '🥽 Realidade Virtual', catColor: '#39d98a',
    title: 'Realidade Virtual: Hardware e Software',
    excerpt: 'Entrar num mundo que não existe.',
    tags: ['VR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Realidade Virtual é quando você coloca um óculos e entra em outro mundo.</p>

      <p>E o mais louco: seu cérebro acredita nisso.</p>

      <div class="info-box"><p>🎮 É tipo videogame… só que muito mais imersivo.</p></div>
    `
  },

  {
    id: 6, num: '06',
    cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
    title: 'Realidade Aumentada: Hardware e Software',
    excerpt: 'Misturando digital com o mundo real.',
    tags: ['AR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Aqui você não sai do mundo real… você só adiciona coisas digitais nele.</p>

      <p>Tipo Pokémon GO mesmo.</p>

      <div class="info-box"><p>📱 Seu celular já faz isso hoje.</p></div>
    `
  },

  {
    id: 7, num: '07',
    cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
    title: 'Realidade Mista: Hardware e Software',
    excerpt: 'Digital e real interagindo.',
    tags: ['MR'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Aqui o virtual não só aparece… ele interage com o mundo real.</p>

      <div class="info-box"><p>🤯 É o nível mais avançado hoje.</p></div>
    `
  },

  {
    id: 8, num: '08',
    cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
    title: 'Holografia: Hardware e Software',
    excerpt: 'Imagem 3D no ar.',
    tags: ['Holograma'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>Holografia cria imagens tridimensionais usando luz.</p>

      <div class="info-box"><p>✨ Parece coisa de filme… mas já é real.</p></div>
    `
  },

  {
    id: 9, num: '09',
    cat: 'imagem', catLabel: '🖼 Imagem Digital', catColor: '#00e5ff',
    title: 'Imagens e seus Formatos',
    excerpt: 'Cada formato tem seu uso.',
    tags: ['Imagem'],
    date: 'Mai 2025', readTime: '6 min',
    body: `
      <p>Nem toda imagem é igual — cada formato existe por um motivo.</p>

      <ul>
        <li>JPEG → foto</li>
        <li>PNG → qualidade</li>
        <li>SVG → escala infinita</li>
      </ul>
    `
  },

  {
    id: 10, num: '10',
    cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Como o computador entende imagens.',
    tags: ['PDI'],
    date: 'Mai 2025', readTime: '6 min',
    body: `
      <p>Processamento de imagem é basicamente ensinar o computador a entender o que tem numa foto.</p>
    `
  },

  {
    id: 11, num: '11',
    cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA criando conteúdo.',
    tags: ['IA'],
    date: 'Mai 2025', readTime: '6 min',
    body: `
      <p>Hoje a IA cria imagens, textos, áudio… tudo.</p>

      <div class="info-box"><p>🤖 E isso só tá começando.</p></div>
    `
  },

  {
    id: 12, num: '12',
    cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'Planejamento de jogo.',
    tags: ['Game'],
    date: 'Jun 2025', readTime: '6 min',
    body: `<p>É o documento que define tudo do jogo.</p>`
  },

  {
    id: 13, num: '13',
    cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
    title: 'Jogo Desenvolvido',
    excerpt: 'Nosso projeto.',
    tags: ['Projeto'],
    date: 'Jun 2025', readTime: '6 min',
    body: `<p>Aqui entra o jogo de vocês.</p>`
  },

  {
    id: 14, num: '14',
    cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
    title: 'Internet das Coisas',
    excerpt: 'Tudo conectado.',
    tags: ['IoT'],
    date: 'Jun 2025', readTime: '6 min',
    body: `<p>Objetos conectados à internet.</p>`
  },

  {
    id: 15, num: '15',
    cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
    title: 'Automação',
    excerpt: 'Deixa a máquina fazer.',
    tags: ['Automação'],
    date: 'Jun 2025', readTime: '6 min',
    body: `<p>Menos trabalho manual, mais tecnologia.</p>`
  },

  {
    id: 16, num: '16',
    cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
    title: 'Projeto Desenvolvido',
    excerpt: 'Sistema criado.',
    tags: ['Projeto'],
    date: 'Jul 2025', readTime: '5 min',
    body: `<p>Detalhes do projeto aqui.</p>`
  },

  {
    id: 17, num: '17',
    cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
    title: 'Reflexões Finais',
    excerpt: 'O que ficou disso tudo.',
    tags: ['Conclusão'],
    date: 'Jul 2025', readTime: '4 min',
    body: `
      <p>No fim, a gente percebeu que multimídia não é só teoria.</p>

      <p>É o jeito que tudo funciona hoje.</p>

      <div class="info-box"><p>🙏 Valeu por acompanhar.</p></div>
    `
  }
];
