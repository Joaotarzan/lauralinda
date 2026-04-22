   /* ============================================================
   MultimídiaLab — posts.js
   Edite aqui o conteúdo de cada postagem!
   ============================================================ */
const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Um pouco sobre a gente, o blog e como esse projeto surgiu no meio da correria da faculdade.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala aí 👋 seja bem-vindo ao <strong>MultimídiaLab</strong>.</p>

      <p>Esse blog nasceu no meio de um trabalho da faculdade… mas a real é que virou muito mais do que só uma entrega. A gente começou fazendo por obrigação, e quando viu já tava curtindo montar os posts, testar ideia e organizar tudo aqui.</p>

      <h3>Quem tá por trás disso?</h3>
      <p>Somos dois estudantes tentando sobreviver ao curso e ao mesmo tempo criar algo que faça sentido:</p>

      <p><strong>João Carlos:</strong> aquele que mexe com código, organiza as ideias e tenta fazer tudo funcionar (nem sempre dá certo 😅)</p>
      <p><strong>Laura Conte:</strong> responsável por deixar tudo mais bonito, mais organizado e com cara de algo que alguém realmente teria vontade de ler</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a disciplina</h3>
      <p>A matéria de Multimídias basicamente mostra como tudo que a gente usa hoje mistura várias coisas ao mesmo tempo: texto, imagem, vídeo, som… nada é “simples” mais.</p>

      <p>E em vez de só estudar isso na teoria, a ideia foi colocar a mão na massa — e esse blog é exatamente isso.</p>

      <h3>O que você vai ver por aqui</h3>
      <ul>
        <li>Explicações sem aquele jeito engessado de livro</li>
        <li>Exemplos que fazem sentido no mundo real</li>
        <li>Uns testes, uns erros e uns acertos também</li>
        <li>Conteúdo que a gente realmente entendeu (e não só copiou)</li>
      </ul>

      <div class="info-box">
        <p>📌 A ideia é ir atualizando conforme a gente aprende — então sim, isso aqui vai evoluindo aos poucos.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>.</li>
        <li>FELDMAN, Tony. <em>Digital Media</em>.</li>
      </ul>
    `
  },

  {
    id: 2, num: '02',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Por que esse blog existe?',
    excerpt: 'Não foi só porque o professor pediu… (ou foi? 👀)',
    tags: ['Blog','Comunicação','Mídia Digital'],
    date: 'Mar 2026', readTime: '4 min',
    body: `
      <p>Vou ser bem direto: a gente criou esse blog porque era trabalho da faculdade.</p>

      <p>Mas aí veio o plot twist — no meio do processo a gente percebeu que isso aqui é literalmente <strong>multimídia acontecendo na prática</strong>.</p>

      <h3>Não é só escrever</h3>
      <p>Quando você monta um blog, você não tá só digitando texto. Você tá pensando em:</p>

      <ul>
        <li>Como a pessoa vai ler</li>
        <li>Onde entra imagem</li>
        <li>Se vale um vídeo ali</li>
        <li>Como deixar menos chato</li>
      </ul>

      <p>Ou seja… você já tá trabalhando com várias mídias ao mesmo tempo sem nem perceber.</p>

      <h3>O objetivo real disso aqui</h3>
      <ul>
        <li>Guardar o que a gente aprendeu (porque a gente esquece fácil 😅)</li>
        <li>Treinar explicar de um jeito mais humano</li>
        <li>Fugir daquele padrão “copiar e colar definição”</li>
        <li>E de quebra, ter algo pra mostrar depois</li>
      </ul>

      <p>No fim das contas, esse blog virou meio que um diário técnico nosso.</p>

      <div class="media-block">
        <span class="media-icon">🎬</span>
        <div>
          <div class="media-label">Vídeo</div>
          <div class="media-title">O que é Comunicação Digital?</div>
          <div class="media-src">https://youtu.be/nKPyvZSfNTc</div>
        </div>
      </div>

      <div class="media-block">
        <span class="media-icon">🎬</span>
        <div>
          <div class="media-label">Vídeo</div>
          <div class="media-title">A evolução dos blogs</div>
          <div class="media-src">https://youtu.be/ZEShuc4knkc</div>
        </div>
      </div>

      <div class="info-box">
        <p>💡 Se você tá fazendo algo parecido, dica real: tenta entender o que você tá escrevendo. Faz MUITA diferença.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>JENKINS, Henry. <em>Convergence Culture</em>.</li>
      </ul>
    `
  },

  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia na vida real',
    excerpt: 'Não é só conceito bonito — você usa isso todo dia.',
    tags: ['Multimídia','Digital'],
    date: 'Mar 2026', readTime: '6 min',
    body: `
      <p>Se alguém te perguntar “o que é multimídia”, a resposta padrão vai ser bonita… mas meio sem graça.</p>

      <p>Agora a versão real: <strong>multimídia é tudo misturado funcionando junto</strong>.</p>

      <h3>Exemplo simples</h3>
      <p>Pensa no YouTube:</p>
      <ul>
        <li>Tem vídeo</li>
        <li>Tem áudio</li>
        <li>Tem texto (título, descrição, comentário)</li>
        <li>Tem interação</li>
      </ul>

      <p>Isso é multimídia. Simples assim.</p>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>O que compõe isso tudo?</h3>

      <p><strong>Texto:</strong> ainda manda muito. É onde você explica, organiza e dá sentido.</p>

      <p><strong>Imagem:</strong> chama atenção na hora. Às vezes explica mais rápido que texto.</p>

      <p><strong>Áudio:</strong> perfeito pra consumir conteúdo sem precisar olhar.</p>

      <p><strong>Vídeo:</strong> junta tudo e vira o formato mais forte hoje.</p>

      <p><strong>Interatividade:</strong> aqui muda o jogo — a pessoa deixa de ser só espectadora.</p>

      <h3>Linear vs Não-linear</h3>

      <p>Tem dois jeitos de consumir conteúdo:</p>

      <p><strong>Linear:</strong> tipo filme — começa, meio e fim.</p>

      <p><strong>Não-linear:</strong> tipo internet — você sai clicando em tudo e vai indo.</p>

      <p>E sinceramente? A gente vive muito mais no não-linear hoje.</p>

      <div class="info-box">
        <p>🚀 Resumindo: multimídia não é teoria — é literalmente o jeito que a internet funciona.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>MAYER, Richard. <em>Multimedia Learning</em>.</li>
      </ul>
    `
  },
