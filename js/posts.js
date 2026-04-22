const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça os autores deste blog e a proposta da disciplina de Multimídias que motivou a sua criação.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala aí 👋 Seja muito bem-vindo ao <strong>MultimídiaLab</strong>!</p>

      <p>Antes de qualquer coisa, deixa a gente se apresentar rapidão… esse blog não surgiu “do nada”. Ele nasceu dentro da faculdade, mais especificamente na disciplina de Multimídias. Só que ao invés de fazer algo travado e cheio de formalidade, a gente quis transformar isso aqui em algo mais vivo, mais real — tipo um espaço onde a gente realmente troca ideia sobre tecnologia.</p>

      <h3>Os Autores</h3>
      <p>Somos dois estudantes que curtem tecnologia de verdade — não só estudar, mas testar, errar, aprender e construir coisa.</p>

      <p><strong>Aluno 1:</strong> João Carlos — Estudante de Informática para Negócios</p>
      <p><strong>Aluno 2:</strong> Laura Conte — Estudante de Informática para Negócios</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <p>A ideia aqui nunca foi só “entregar trabalho”. A gente quis criar algo que desse vontade de ler, que fizesse sentido fora da sala de aula também.</p>

      <h3>Sobre a Disciplina</h3>
      <p>A matéria de Multimídias basicamente junta tudo que você usa na internet hoje: texto, imagem, vídeo, áudio… tudo isso funcionando junto. Só que quando você começa a estudar de verdade, percebe que tem muita coisa por trás.</p>

      <p>E foi aí que a gente decidiu: ao invés de só estudar, vamos documentar tudo isso de um jeito mais leve.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Explicações sem enrolação</li>
        <li>Conteúdos com exemplos reais</li>
        <li>Vídeos e mídias pra complementar</li>
        <li>Projetos que a gente realmente desenvolveu</li>
        <li>E uns comentários sinceros no meio 😅</li>
      </ul>

      <div class="info-box">
        <p>📌 A ideia é ir atualizando isso aqui ao longo do semestre, então sempre vai ter coisa nova.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li>
        <li>FELDMAN, Tony. <em>An Introduction to Digital Media</em>. Routledge, 1997.</li>
      </ul>
    `
  },

  {
    id: 2, num: '02',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Finalidade do Blog',
    excerpt: 'Por que criar um blog para a disciplina? Entenda como a produção de conteúdo digital é em si uma prática multimídia.',
    tags: ['Blog','Comunicação','Mídia Digital'],
    date: 'Mar 2026', readTime: '4 min',
    body: `
      <p>Se você parar pra pensar, criar um blog parece algo simples… só escrever e postar, né? Mas na prática, não é bem assim.</p>

      <p>Quando a gente começou esse projeto, percebeu que um blog é praticamente um laboratório de multimídia. Aqui você mistura texto, imagem, vídeo, áudio… e ainda organiza tudo de um jeito que faça sentido pra quem está lendo.</p>

      <p>Ou seja: sem perceber, você já está aplicando vários conceitos da matéria.</p>

      <h3>Por que um Blog?</h3>
      <p>A escolha do blog não foi aleatória. Ele é um dos melhores exemplos de hipermídia na prática, porque você não precisa seguir uma ordem fixa. Dá pra clicar, voltar, explorar… cada pessoa navega do seu jeito.</p>

      <p>E isso muda completamente a experiência de consumo.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Registrar o que a gente está aprendendo de verdade</li>
        <li>Treinar criação de conteúdo (na prática, não só teoria)</li>
        <li>Melhorar a forma como a gente se comunica online</li>
        <li>E ainda sair com algo que pode virar portfólio</li>
      </ul>

      <p>No fim, isso aqui vira meio que um diário técnico — só que bem mais útil.</p>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo 🎬</div><div class="media-title">O que é Comunicação Digital?</div><div class="media-src">https://youtu.be/nKPyvZSfNTc?si=luQ7ua0opY3hKyKH</div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo 🎬</div><div class="media-title">Blogs e a Revolução da Web 2.0</div><div class="media-src">https://youtu.be/ZEShuc4knkc?si=PeJ_93J0yVFv-TV5</div></div></div>

      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio 🔊 </div><div class="media-title">Podcast: Criação de Conteúdo Digital</div><div class="media-src">https://youtu.be/USWPIBqwI8c?si=a28uMIymhdW2agHA</div></div></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>JENKINS, Henry. <em>Convergence Culture</em>. NYU Press, 2006.</li>
        <li>O'REILLY, Tim. <em>What is Web 2.0</em>. O'Reilly Media, 2005.</li>
      </ul>
    `
  },

  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia: Conceito e Aplicações',
    excerpt: 'O que é multimídia de verdade? Explore sua definição, história e como ela permeia absolutamente tudo no mundo digital.',
    tags: ['Multimídia','Mídia','Digital','História'],
    date: 'Mar 2026', readTime: '6 min',
    body: `
      <p>Multimídia é uma daquelas palavras que todo mundo usa… mas pouca gente para pra pensar no que realmente significa.</p>

      <p>No geral, ela representa a junção de várias formas de mídia — texto, imagem, áudio, vídeo e interatividade — trabalhando juntas pra transmitir uma ideia.</p>

      <p>Mas na prática, vai muito além disso. É sobre criar uma experiência.</p>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>Componentes da Multimídia</h3>

      <ul>
        <li><strong>Texto:</strong> é a base de tudo. Mesmo com vídeo e áudio dominando hoje, o texto ainda organiza a informação e dá clareza.</li>

        <li><strong>Imagem:</strong> muitas vezes uma imagem explica mais rápido do que um parágrafo inteiro. Ela cria conexão instantânea.</li>

        <li><strong>Áudio:</strong> perfeito pra consumir conteúdo sem precisar olhar pra tela — tipo podcast.</li>

        <li><strong>Vídeo:</strong> junta tudo — imagem, som e movimento. É o formato mais completo hoje.</li>

        <li><strong>Interatividade:</strong> aqui o usuário deixa de ser só espectador e passa a participar.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Quando tudo isso é bem combinado, a experiência fica muito mais rica — e muito mais interessante.</p>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">História da Multimídia</div><div class="media-src">https://www.youtube.com/watch?v=Q7EG9VnM0h4</div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Multimídia: Definição</div><div class="media-src">https://www.youtube.com/watch?v=0bJz2mQyXyQ</div></div></div>

      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio</div><div class="media-title">Podcast sobre Mídias Digitais</div><div class="media-src">https://anchor.fm/</div></div></div>

      <h3>Linear vs Não-linear</h3>

      <p>Tem um ponto que muda completamente a experiência: o controle.</p>

      <p>No conteúdo <strong>linear</strong>, você só segue o fluxo (tipo filme).</p>

      <p>No <strong>não-linear</strong>, você escolhe o caminho (tipo blog, sites, etc).</p>

      <p>E sinceramente? Hoje quase tudo que a gente usa é não-linear.</p>

      <div class="info-box">
        <p>🚀 Multimídia não é só tecnologia — é a forma como a gente consome o mundo digital hoje.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li>
        <li>MAYER, Richard E. <em>Multimedia Learning</em>. Cambridge University Press, 2001.</li>
      </ul>
    `
  },
     {
    id: 4, num: '04',
    cat: 'midia', catLabel: '📺 Hipermídia', catColor: '#ff6230',
    title: 'Hipermídia: Além do Hipertexto',
    excerpt: 'Da ideia do Memex à web atual — como a hipermídia revolucionou a forma como consumimos informação.',
    tags: ['Hipermídia','Hipertexto','Web','Navegação'],
    date: 'Mar 2026', readTime: '5 min',
    body: `
      <p>Se você já saiu clicando em vários links sem nem perceber como chegou ali… parabéns, você já vive na hipermídia 😅</p>

      <p><strong>Hipermídia</strong> nada mais é do que a evolução do hipertexto. Só que em vez de conectar só textos, ela conecta tudo: imagem, vídeo, áudio, interação… basicamente, é o jeito que a internet funciona hoje.</p>

      <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>A Origem: O Memex</h3>
      <p>Isso aqui não começou ontem. Lá em 1945, o Vannevar Bush já tava viajando numa ideia chamada <strong>Memex</strong>.</p>

      <p>Basicamente, seria uma máquina que armazenava informações e conectava tudo por associação — tipo como nosso cérebro funciona.</p>

      <p>Ele literalmente antecipou a lógica da internet… décadas antes dela existir.</p>

      <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Do Hipertexto à Hipermídia</h3>
      <p>O hipertexto já era um avanço (links conectando textos), mas ainda era limitado.</p>

      <p>A hipermídia chega e fala: “por que parar no texto?” — e começa a conectar tudo.</p>

      <p>Hoje, qualquer site que você abre já é isso na prática.</p>

      <h3>Onde isso aparece no dia a dia?</h3>
      <ul>
        <li>Sites com navegação por links</li>
        <li>Blogs (tipo esse aqui)</li>
        <li>Plataformas tipo YouTube</li>
        <li>Jogos com múltiplos caminhos</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" style="width:100%; border-radius:10px; margin:15px 0;">

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Ted Nelson e o Hipertexto</div><div class="media-src">https://www.youtube.com/watch?v=En_2T7KH6RA</div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Como Funciona a Web</div><div class="media-src">https://www.youtube.com/watch?v=7_LPdttKXPc</div></div></div>

      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio</div><div class="media-title">Narração: Hipermídia e o Futuro da Informação</div></div></div>

      <h3>Por que isso importa?</h3>
      <p>Porque mudou completamente a forma como a gente consome informação.</p>

      <p>Antes era tudo linear. Hoje você decide o caminho.</p>

      <div class="info-box">
        <p>🔗 Isso aqui basicamente é a base da internet moderna.</p>
      </div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>BUSH, Vannevar. <em>As We May Think</em>. 1945.</li>
        <li>NELSON, Theodore. <em>Literary Machines</em>. 1981.</li>
      </ul>
    `
  },

  {
    id: 5, num: '05',
    cat: 'xr', catLabel: '🥽 Realidade Virtual', catColor: '#39d98a',
    title: 'Realidade Virtual: Hardware e Software',
    excerpt: 'Mergulhe no universo da VR — dos óculos HMD aos motores gráficos.',
    tags: ['VR','Realidade Virtual','HMD','Unity','Unreal'],
    date: 'Abr 2025', readTime: '8 min',
    body: `
      <p>A primeira vez que você testa VR é meio bizarra… parece que você realmente saiu do mundo real.</p>

      <p>A <strong>Realidade Virtual</strong> cria ambientes totalmente digitais onde você pode interagir como se estivesse lá dentro.</p>

      <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Hardware</h3>
      <p>Sem hardware, não tem imersão. É ele que faz o cérebro “comprar” a ideia.</p>

      <ul>
        <li><strong>Meta Quest 3:</strong> fácil de usar, não precisa de PC</li>
        <li><strong>PS VR2:</strong> integração com console</li>
        <li><strong>Valve Index:</strong> altíssima precisão</li>
        <li><strong>Apple Vision Pro:</strong> absurdo de tecnologia</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Software</h3>
      <p>Aqui é onde a mágica acontece.</p>

      <ul>
        <li><strong>Unity:</strong> muito usado pra VR</li>
        <li><strong>Unreal:</strong> gráficos absurdos</li>
        <li><strong>WebXR:</strong> VR direto no navegador</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-title">Como Funciona a VR</div><div class="media-src"><a href="https://www.youtube.com/watch?v=R9kF9Lr3R8s" target="_blank">▶ Assistir</a></div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-title">Meta Quest 3</div><div class="media-src"><a href="https://www.youtube.com/watch?v=U6p1sR7w2lQ" target="_blank">▶ Assistir</a></div></div></div>

      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-title">Podcast VR</div><div class="media-src"><a href="https://spotify.com/" target="_blank">▶ Ouvir</a></div></div></div>

      <h3>Aplicações</h3>
      <ul>
        <li>Treinamento</li>
        <li>Jogos</li>
        <li>Simulações</li>
      </ul>

      <div class="info-box">
        <p>VR não é só entretenimento — é tecnologia de imersão real.</p>
      </div>
    `
  },

  {
    id: 6, num: '06',
    cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
    title: 'Realidade Aumentada: Hardware e Software',
    excerpt: 'Pokémon GO foi só o começo.',
    tags: ['AR','ARKit','ARCore'],
    date: 'Abr 2025', readTime: '7 min',
    body: `
      <p>Diferente da VR, a <strong>Realidade Aumentada</strong> não te tira do mundo real — ela adiciona coisa nele.</p>

      <p>Sabe quando você aponta a câmera e aparece um objeto 3D? Então… isso é AR.</p>

      <img src="https://insidetecnologia.com/site/wp-content/uploads/2024/05/A-futuristic-scene-showcasing-augmented-reality-in-action.-The-image-depicts-a-user-interacting-with-virtual-3D-objects-overlaid-on-the-real-world-via.webp" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Hardware</h3>
      <ul>
        <li>Smartphones</li>
        <li>HoloLens</li>
        <li>Magic Leap</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Software</h3>
      <ul>
        <li>ARKit</li>
        <li>ARCore</li>
        <li>Spark AR</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Inclusive, a gente chegou a testar isso com o <strong>Merge Cube</strong> — e mano, é muito mais daora do que parece.</p>

      <img src="../js/img/cubo.png" style="width:100%; border-radius:10px; margin:15px 0;">

      <div class="info-box">
        <p>AR tá cada vez mais presente — e você já usa sem perceber.</p>
      </div>
    `
  },

  {
    id: 7, num: '07',
    cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
    title: 'Realidade Mista: Hardware e Software',
    excerpt: 'Quando o virtual e o físico se misturam de verdade.',
    tags: ['MR','Metaverso'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>A <strong>Realidade Mista</strong> é tipo o meio termo entre AR e VR — só que mais avançado.</p>

      <p>Aqui não é só “ver” objeto virtual… ele interage com o ambiente real.</p>

      <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Exemplo real</h3>
      <p>Na Boeing, os caras usam isso pra montar avião com instruções flutuando no ar.</p>

      <p>Simplesmente absurdo.</p>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-title">Vision Pro</div><div class="media-src"><a href="https://www.youtube.com/watch?v=TX9qSaGXFyg" target="_blank">▶ Assistir</a></div></div></div>

      <div class="info-box">
        <p>Isso aqui é literalmente o futuro da computação.</p>
      </div>
    `
  },
  {
    id: 8, num: '08',
    cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
    title: 'Holografia: Hardware e Software',
    excerpt: 'De Star Wars à realidade — como a holografia funciona e onde é aplicada.',
    tags: ['Holografia','Holograma','Display 3D'],
    date: 'Abr 2025', readTime: '7 min',
    body: `
      <p>Se você já assistiu <em>Star Wars</em> e ficou pensando “isso aí nunca vai existir”… então, talvez você tenha se enganado 😅</p>

      <p>A <strong>holografia</strong> é uma tecnologia que cria imagens tridimensionais usando luz. E o mais louco: você consegue ver o objeto de ângulos diferentes, como se ele estivesse realmente ali.</p>

      <p>Não é só ilusão visual simples — tem física pesada por trás disso.</p>

      <img src="../js/img/aguaviva.jpeg" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Como funciona?</h3>
      <p>De forma resumida: um holograma nasce da interferência entre dois feixes de laser.</p>

      <p>Um deles bate no objeto, o outro serve como referência. Quando esses dois se encontram, eles criam um padrão que pode ser reconstruído depois — e aí surge o efeito 3D.</p>

      <p>Simples na teoria… complicado na prática 😅</p>

      <h3>Hardware</h3>
      <ul>
        <li><strong>Pepper's Ghost:</strong> técnica clássica de ilusão com espelhos</li>
        <li><strong>Looking Glass:</strong> displays 3D sem óculos</li>
        <li><strong>Voxon:</strong> criando volume real de luz</li>
      </ul>

      <img src="../js/img/holograma_nos_smartphones_20903_3_600.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Aplicações reais</h3>
      <p><strong>Medicina:</strong> visualizar órgãos em 3D antes de operar</p>
      <p><strong>Entretenimento:</strong> shows com artistas “revividos”</p>
      <p><strong>Educação:</strong> entender estruturas complexas de forma visual</p>

      <img src="../js/img/holograma-medicina.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-title">Como Funciona a Holografia</div><div class="media-src"><a href="https://www.youtube.com/watch?v=EmKQsSDlaa4" target="_blank">▶ Assistir</a></div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-title">Hologramas Explicados</div><div class="media-src"><a href="https://www.youtube.com/watch?v=Yqk7P6Fq7iU" target="_blank">▶ Assistir</a></div></div></div>

      <div class="info-box">
        <p>Isso ainda não tá 100% popular… mas já deixou de ser ficção faz tempo.</p>
      </div>
    `
  },

  {
    id: 9, num: '09',
    cat: 'imagem', catLabel: '🖼 Imagem Digital', catColor: '#00e5ff',
    title: 'Imagens e seus Formatos',
    excerpt: 'PNG, JPEG, WebP, SVG — cada formato tem sua razão de existir.',
    tags: ['Imagem','PNG','JPEG','WebP','SVG'],
    date: 'Mai 2025', readTime: '6 min',
    body: `
      <p>Se você já exportou uma imagem e ficou na dúvida entre PNG ou JPEG… você não tá sozinho 😅</p>

      <p>Cada formato de imagem existe por um motivo — e escolher errado pode ferrar a qualidade ou deixar o arquivo gigante.</p>

      <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Raster (pixels)</h3>
      <p>Essas são as imagens comuns — feitas de pixels.</p>

      <ul>
        <li><strong>JPEG:</strong> leve, ideal pra fotos</li>
        <li><strong>PNG:</strong> qualidade alta + transparência</li>
        <li><strong>WebP:</strong> moderno e otimizado</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Vetorial (SVG)</h3>
      <p>Aqui não tem pixel — é tudo baseado em matemática.</p>

      <p>Ou seja: pode aumentar infinito sem perder qualidade.</p>

      <img src="https://images.unsplash.com/photo-1558655146-d09347e92766" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Dica rápida</h3>
      <ul>
        <li>Foto → JPEG/WebP</li>
        <li>Logo → PNG/SVG</li>
        <li>Interface → SVG</li>
      </ul>

      <div class="info-box">
        <p>Escolher formato certo faz MUITA diferença no desempenho.</p>
      </div>
    `
  },

  {
    id: 10, num: '10',
    cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Filtros, segmentação, detecção de bordas.',
    tags: ['Processamento','OpenCV','Python'],
    date: 'Mai 2025', readTime: '7 min',
    body: `
      <p>Aqui é onde a coisa começa a ficar mais técnica… mas também mais interessante.</p>

      <p>O <strong>Processamento de Imagens</strong> é basicamente ensinar o computador a “entender” uma imagem.</p>

      <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Filtros</h3>
      <ul>
        <li>Blur → suaviza</li>
        <li>Sharpen → aumenta nitidez</li>
        <li>Bordas → detecta contornos</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Segmentação</h3>
      <p>Divide a imagem em partes pra facilitar análise.</p>

      <p>Muito usado em medicina e IA.</p>

      <h3>Ferramentas</h3>
      <ul>
        <li>OpenCV</li>
        <li>Pillow</li>
        <li>scikit-image</li>
      </ul>

      <div class="info-box">
        <p>Isso aqui é base pra visão computacional.</p>
      </div>
    `
  },

  {
    id: 11, num: '11',
    cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA generativa, deepfakes e mais.',
    tags: ['IA','Machine Learning'],
    date: 'Mai 2025', readTime: '8 min',
    body: `
      <p>A IA deixou de ser “futuro” faz tempo… ela já tá em tudo.</p>

      <p>Hoje você consegue gerar imagem, música, texto e até vídeo com poucos comandos.</p>

      <h3>IA Generativa</h3>
      <p>Ferramentas que criam conteúdo do zero.</p>

      <ul>
        <li>Imagem → Midjourney</li>
        <li>Texto → GPT</li>
        <li>Áudio → ElevenLabs</li>
      </ul>

      <h3>Aplicações</h3>
      <ul>
        <li>Upscaling</li>
        <li>Restauração</li>
        <li>Geração de mídia</li>
      </ul>

      <div class="info-box">
        <p>Isso aqui tá mudando tudo — inclusive como a gente cria conteúdo.</p>
      </div>
    `
  },

  {
    id: 12, num: '12',
    cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'O blueprint de qualquer jogo.',
    tags: ['Game Design','GDD'],
    date: 'Jun 2025', readTime: '7 min',
    body: `
      <p>Antes de fazer um jogo, você precisa planejar tudo.</p>

      <p>O <strong>GDD</strong> é basicamente o documento que organiza isso.</p>

      <h3>O que tem dentro?</h3>
      <ul>
        <li>Ideia do jogo</li>
        <li>Mecânicas</li>
        <li>Arte</li>
        <li>Som</li>
      </ul>

      <p>Sem isso, o projeto vira bagunça muito rápido.</p>

      <div class="info-box">
        <p>Todo jogo grande começou com um GDD.</p>
      </div>
    `
  },
{
  id: 11, num: '11', cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
  title: 'Inteligência Artificial e Multimídia',
  excerpt: 'Como a IA deixou de ser ficção e passou a criar imagens, vídeos, músicas e textos no nosso dia a dia.',
  tags: ['IA','Machine Learning','Deep Learning','Generativa'], date: 'Mai 2025', readTime: '8 min',
  body: `
  <p>Se tem uma coisa que a gente percebeu estudando multimídia é que a <strong>Inteligência Artificial</strong> não é mais só teoria ou coisa de filme — ela já virou ferramenta do dia a dia.</p>

  <p>Hoje em dia, você consegue gerar imagem, escrever texto, criar música e até vídeo usando IA. E o mais louco: em questão de segundos.</p>

  <h3>IA Generativa na prática</h3>
  <p>Foi aí que a gente começou a testar algumas ferramentas e ficou bem claro como isso muda tudo.</p>

  <ul>
    <li><strong>Imagem:</strong> ferramentas como Midjourney e DALL-E criam artes completas só com texto</li>
    <li><strong>Texto:</strong> modelos como GPT ajudam desde código até roteiro</li>
    <li><strong>Áudio:</strong> vozes sintéticas realistas com ElevenLabs</li>
    <li><strong>Música:</strong> IA compondo trilhas inteiras</li>
  </ul>

  <p>Não é exagero dizer que a IA virou praticamente uma “caixa de ferramentas criativa”.</p>

  <h3>Onde isso entra na multimídia?</h3>
  <p>Basicamente em tudo:</p>

  <ul>
    <li>Melhoria de imagens antigas (upscaling)</li>
    <li>Criação de conteúdo visual do zero</li>
    <li>Edição automática de áudio</li>
    <li>Geração de roteiros e ideias</li>
  </ul>

  <p>Ou seja, ela não substitui criatividade — ela potencializa.</p>

  <div class="info-box">
    <p>🤖 A IA virou parte do processo criativo, não só ferramenta técnica.</p>
  </div>
`
},

{
  id: 12, num: '12', cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
  title: 'Game Design Document (GDD)',
  excerpt: 'Como organizar um jogo antes mesmo de começar a desenvolver.',
  tags: ['Game Design','GDD','Documentação','Jogos'], date: 'Jun 2025', readTime: '7 min',
  body: `
  <p>No começo a gente achava que fazer jogo era só sair programando… mas não. Antes de qualquer linha de código existe o <strong>GDD (Game Design Document)</strong>.</p>

  <p>Ele é tipo o “mapa” do jogo. Sem ele, você se perde fácil.</p>

  <h3>Pra que serve?</h3>
  <p>Basicamente pra organizar tudo:</p>

  <ul>
    <li>Ideia principal</li>
    <li>Mecânicas</li>
    <li>Visual</li>
    <li>Som</li>
    <li>Fluxo do jogo</li>
  </ul>

  <h3>O que a gente aprendeu fazendo</h3>
  <p>Quando começamos a montar nosso GDD, percebemos que:</p>

  <ul>
    <li>Ter ideia é fácil, difícil é organizar</li>
    <li>Mecânica mal pensada quebra o jogo</li>
    <li>Quanto mais detalhado, melhor o desenvolvimento depois</li>
  </ul>

  <p>Foi literalmente o que evitou a gente de se perder no projeto.</p>
`
},

{
  id: 13, num: '13', cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
  title: 'Jogo Desenvolvido: Projeto da Disciplina',
  excerpt: 'Como foi criar um jogo do zero na prática.',
  tags: ['Jogo','Projeto','Unity','Game Dev'], date: 'Jun 2025', readTime: '6 min',
  body: `
  <p>Esse aqui foi o momento mais daora da disciplina: <strong>colocar a mão na massa e criar um jogo de verdade</strong>.</p>

  <h3>Como começou</h3>
  <p>A gente saiu de uma ideia simples e começou a transformar em algo jogável. No começo parecia tranquilo… depois ficou caótico 😂</p>

  <h3>Principais desafios</h3>
  <ul>
    <li>Fazer o personagem se mover direito</li>
    <li>Corrigir bugs que apareciam do nada</li>
    <li>Organizar código sem virar bagunça</li>
  </ul>

  <h3>O que mais marcou</h3>
  <p>Ver o jogo rodando pela primeira vez foi absurdo. Aquela sensação de “caraca, fomos nós que fizemos isso”.</p>

  <div class="info-box">
    <p>🎮 Nada ensina mais do que construir algo do zero.</p>
  </div>
`
},

{
  id: 14, num: '14', cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
  title: 'Internet das Coisas (IoT)',
  excerpt: 'Como objetos do dia a dia estão ficando inteligentes.',
  tags: ['IoT','Arduino','MQTT','Sensores'], date: 'Jun 2025', readTime: '7 min',
  body: `
  <p>A <strong>Internet das Coisas</strong> é basicamente quando objetos comuns começam a “pensar” e se comunicar.</p>

  <p>Tipo lâmpada que liga pelo celular, sensor que mede temperatura, câmera inteligente… tudo conectado.</p>

  <h3>Onde vimos isso na prática</h3>
  <ul>
    <li>Casas inteligentes</li>
    <li>Indústria automatizada</li>
    <li>Sistemas de monitoramento</li>
  </ul>

  <p>O mais interessante é como isso junta hardware + software + internet.</p>

  <div class="info-box">
    <p>📡 IoT é quando o mundo físico vira digital.</p>
  </div>
`
},

{
  id: 15, num: '15', cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
  title: 'Automação: Conceitos e Aplicações',
  excerpt: 'Como máquinas e sistemas estão fazendo tarefas sozinhos.',
  tags: ['Automação','RPA','Python','Indústria 4.0'], date: 'Jun 2025', readTime: '6 min',
  body: `
  <p>A automação tá em todo lugar — e muitas vezes a gente nem percebe.</p>

  <p>Desde um script simples até robôs industriais gigantes, tudo segue a mesma ideia: <strong>fazer tarefas sem intervenção humana</strong>.</p>

  <h3>Onde isso aparece</h3>
  <ul>
    <li>Empresas automatizando processos</li>
    <li>Scripts facilitando tarefas repetitivas</li>
    <li>Linhas de produção inteligentes</li>
  </ul>

  <p>Depois que você aprende, começa a ver automação em tudo.</p>
`
},

{
  id: 16, num: '16', cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
  title: 'Projeto Desenvolvido: Sistema Multimídia',
  excerpt: 'Aplicando tudo que aprendemos em um projeto real.',
  tags: ['Projeto','Desenvolvimento','Multimídia'], date: 'Jul 2025', readTime: '5 min',
  body: `
  <p>Esse projeto foi tipo o “final boss” da disciplina.</p>

  <p>A ideia era juntar tudo que vimos — multimídia, interação, organização — em um sistema funcional.</p>

  <h3>O que aprendemos aqui</h3>
  <ul>
    <li>Planejamento é essencial</li>
    <li>Organização de código faz diferença</li>
    <li>Interface influencia muito na experiência</li>
  </ul>

  <p>Foi difícil, mas foi o que mais consolidou tudo.</p>
`
},

{
  id: 17, num: '17', cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
  title: 'Reflexões Finais: O que Aprendemos',
  excerpt: 'O fechamento da jornada e tudo que levamos dessa experiência.',
  tags: ['Conclusão','Aprendizado','Semestre'], date: 'Jul 2025', readTime: '4 min',
  body: `
  <p>Chegando no final, dá pra perceber o quanto a gente evoluiu.</p>

  <p>No começo era tudo meio teórico… agora faz sentido na prática.</p>

  <h3>O principal aprendizado</h3>
  <p>Multimídia não é só tecnologia — é uma forma de comunicar melhor.</p>

  <h3>O que ficou</h3>
  <ul>
    <li>Mais visão prática</li>
    <li>Mais organização</li>
    <li>Mais noção de projeto real</li>
  </ul>

  <div class="info-box">
    <p>🙏 Valeu demais por acompanhar até aqui.</p>
  </div>
`
}
   
