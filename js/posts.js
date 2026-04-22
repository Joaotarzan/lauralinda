/* ============================================================
   MultimídiaLab — posts.js (VERSÃO BLOG EXPANDIDA)
   BLOCO 1 — POSTS 1 AO 5
   ============================================================ */

const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça os autores deste blog e a proposta da disciplina de Multimídias que motivou a sua criação.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala aí 👋 Seja muito bem-vindo ao <strong>MultimídiaLab</strong>.</p>

      <p>Esse blog começou como um trabalho da faculdade… mas não demorou muito pra gente perceber que dava pra ir além do básico. Em vez de só “entregar um trabalho”, a gente quis montar algo que realmente tivesse cara de projeto nosso.</p>

      <p>A ideia aqui é simples: mostrar o que a gente aprendeu, mas de um jeito mais leve, mais direto e sem aquele clima engessado de texto acadêmico.</p>

      <h3>Os Autores</h3>

      <p>Por trás disso aqui estão dois estudantes tentando equilibrar faculdade, prazos e vida — e no meio disso tudo, criar algo que faça sentido.</p>

      <p><strong>Aluno 1:</strong> João Carlos — sempre mexendo com tecnologia, curioso com interfaces e com essa parte mais visual do digital.</p>

      <p><strong>Aluno 2:</strong> Laura Conte — focada em organização, design e em como deixar conteúdo mais claro e fácil de consumir.</p>

      <p>Esse blog é basicamente um reflexo do nosso processo — não só o resultado final.</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a Disciplina</h3>

      <p>A disciplina de Multimídias mostrou pra gente que conteúdo digital não é só texto bonito com imagem jogada do lado.</p>

      <p>É sobre combinar diferentes mídias de um jeito que faça sentido — e que realmente melhore a experiência de quem tá consumindo aquilo.</p>

      <h3>O que você vai encontrar aqui</h3>

      <ul>
        <li>Explicações mais diretas e sem enrolação</li>
        <li>Exemplos reais (não só teoria)</li>
        <li>Vídeos, imagens e áudios pra complementar</li>
        <li>Algumas opiniões nossas no meio</li>
        <li>E os projetos que fomos desenvolvendo</li>
      </ul>

      <div class="info-box">
        <p>📌 Esse blog foi sendo construído ao longo do semestre — então ele evolui junto com a gente.</p>
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
      <p>Quando a gente ouviu “criar um blog”, parecia algo simples… tipo escrever texto e pronto.</p>

      <p>Mas na prática, a gente percebeu que um blog é praticamente um laboratório de multimídia.</p>

      <p>Aqui dentro você não trabalha só com texto — você junta vídeo, imagem, áudio, link… tudo no mesmo espaço.</p>

      <h3>Por que um Blog?</h3>

      <p>Porque ele permite exatamente isso: misturar tudo.</p>

      <p>Diferente de um trabalho tradicional, aqui dá pra navegar, clicar, explorar… cada pessoa pode consumir do seu jeito.</p>

      <h3>Objetivos do Projeto</h3>

      <ul>
        <li>Registrar o que a gente foi aprendendo</li>
        <li>Praticar criação de conteúdo digital de verdade</li>
        <li>Melhorar comunicação (explicar bem não é fácil)</li>
        <li>Criar algo que a gente possa mostrar depois</li>
      </ul>

      <p>No fim, esse blog virou mais do que um trabalho — virou tipo um portfólio.</p>

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
      <p>Quando a gente fala “multimídia”, parece um termo meio técnico… mas na real você usa isso o tempo todo sem perceber.</p>

      <p>Instagram, YouTube, TikTok, sites — tudo isso é multimídia.</p>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>O que realmente é?</h3>

      <p>É basicamente juntar várias formas de conteúdo no mesmo lugar: texto, imagem, áudio, vídeo e interação.</p>

      <p>Mas não é só juntar — é fazer tudo funcionar junto.</p>

      <h3>Componentes</h3>

      <ul>
        <li><strong>Texto:</strong> ainda é a base de tudo</li>
        <li><strong>Imagem:</strong> chama atenção na hora</li>
        <li><strong>Áudio:</strong> cria imersão</li>
        <li><strong>Vídeo:</strong> junta tudo</li>
        <li><strong>Interatividade:</strong> prende o usuário</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>No fim, multimídia é sobre experiência.</p>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">História da Multimídia</div><div class="media-src">https://www.youtube.com/watch?v=Q7EG9VnM0h4</div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Multimídia: Definição</div><div class="media-src">https://www.youtube.com/watch?v=0bJz2mQyXyQ</div></div></div>

      <div class="info-box">
        <p>🚀 Hoje, praticamente tudo na internet é multimídia.</p>
      </div>
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
      <p>Se multimídia já é juntar várias mídias… hipermídia é quando você conecta tudo isso.</p>

      <p>É o que permite você sair clicando de um conteúdo pra outro sem seguir uma ordem fixa.</p>

      <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Basicamente, é o que faz a internet ser… a internet.</p>

      <h3>Na prática</h3>

      <ul>
        <li>Links entre páginas</li>
        <li>Sites interativos</li>
        <li>Conteúdo não-linear</li>
      </ul>

      <p>Você não segue um caminho — você escolhe.</p>

      <div class="info-box">
        <p>🔗 A hipermídia é o que transforma conteúdo em experiência explorável.</p>
      </div>
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
      <p>Realidade Virtual é uma daquelas coisas que parecem coisa de filme… até você testar.</p>

      <p>Quando você coloca um óculos VR, você literalmente “entra” em outro ambiente.</p>

      <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Hardware</h3>

      <ul>
        <li>Meta Quest</li>
        <li>PS VR</li>
        <li>Valve Index</li>
      </ul>

      <h3>Software</h3>

      <ul>
        <li>Unity</li>
        <li>Unreal Engine</li>
      </ul>

      <p>Sem software, o hardware não faz nada. E sem hardware, o software não tem onde rodar.</p>

      <div class="info-box">
        <p>🎮 VR não é só jogo — já tá sendo usado em educação e medicina.</p>
      </div>
    `
  }
];
  {
    id: 6, num: '06', 
    cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
    title: 'Realidade Aumentada: Hardware e Software',
    excerpt: 'Pokémon GO foi só o começo. Explore como a AR sobrepõe o digital ao físico.',
    tags: ['AR','ARKit','ARCore','WebAR'], 
    date: 'Abr 2025', readTime: '7 min',

    body: `
<p>A primeira vez que muita gente teve contato com <strong>Realidade Aumentada</strong> foi jogando Pokémon GO. E ali já dava pra ter uma noção do potencial disso.</p>

<p>Mas a real é que AR vai muito além de joguinho. Ela basicamente pega o mundo real e adiciona uma camada digital por cima — em tempo real.</p>

<p>Ou seja: você continua vendo o mundo como ele é… só que com informação extra, objetos virtuais e interação.</p>

<img src="https://insidetecnologia.com/site/wp-content/uploads/2024/05/A-futuristic-scene-showcasing-augmented-reality-in-action.-The-image-depicts-a-user-interacting-with-virtual-3D-objects-overlaid-on-the-real-world-via.webp" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Hardware de AR</h3>

<p>Diferente da VR, você nem sempre precisa de equipamento caro. Na maioria das vezes, seu próprio celular já resolve.</p>

<ul>
  <li><strong>Smartphones:</strong> são a porta de entrada — praticamente todo mundo já tem</li>
  <li><strong>HoloLens 2:</strong> mais avançado, usado em empresas</li>
  <li><strong>Magic Leap:</strong> focado em aplicações profissionais</li>
</ul>

<img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Software</h3>

<p>É aqui que a mágica acontece — o software entende o ambiente e encaixa os objetos digitais no lugar certo.</p>

<ul>
  <li><strong>ARKit:</strong> para iPhone</li>
  <li><strong>ARCore:</strong> para Android</li>
  <li><strong>WebAR:</strong> roda direto no navegador</li>
  <li><strong>Spark AR:</strong> filtros de Instagram</li>
</ul>

<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356" style="width:100%; border-radius:10px; margin:15px 0;">

<p>Hoje em dia, AR já aparece em tudo: filtro de rede social, apps de loja, educação…</p>

<p>E o mais interessante: você usa sem nem perceber.</p>

<div class="info-box">
<p>📱 AR é provavelmente a tecnologia mais acessível de todas que vimos até agora.</p>
</div>
`
 },

  {
    id: 7, num: '07', 
    cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
    title: 'Realidade Mista: Hardware e Software',
    excerpt: 'Quando o virtual e o físico coexistem e interagem.',
    tags: ['MR','Realidade Mista','Metaverso','Spatial Computing'], 
    date: 'Abr 2025', readTime: '6 min',

    body: `
<p>Se a VR te leva pra um mundo totalmente digital, e a AR adiciona coisas no mundo real… a <strong>Realidade Mista</strong> mistura os dois de um jeito mais profundo.</p>

<p>Aqui não é só “ver um objeto virtual”. Ele interage com o ambiente.</p>

<p>Tipo: ele entende espaço, profundidade, posição… e se comporta como se estivesse ali de verdade.</p>

<img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>O conceito por trás</h3>

<p>Existe uma ideia chamada “continuum da realidade” — que vai do mundo real até o totalmente virtual.</p>

<p>E a MR fica bem no meio disso.</p>

<h3>Hardware</h3>

<ul>
  <li>HoloLens</li>
  <li>Apple Vision Pro</li>
  <li>Magic Leap</li>
</ul>

<p>Esses dispositivos são mais avançados porque precisam entender o ambiente inteiro ao redor.</p>

<p>Não é só mostrar — é integrar.</p>

<p>E isso muda completamente o nível da experiência.</p>

<div class="info-box">
<p>🚀 Realidade Mista é tipo o “próximo nível” da interação digital.</p>
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
<p>Holograma parece coisa de filme… mas já é real faz tempo.</p>

<p>A <strong>holografia</strong> basicamente cria imagens 3D usando luz. E o mais louco é que você consegue ver de ângulos diferentes, como se fosse um objeto de verdade.</p>

<img src="../js/img/aguaviva.jpeg" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Como funciona (sem complicar)</h3>

<p>Ela usa laser pra registrar como a luz reflete em um objeto. Depois, esse padrão é recriado.</p>

<p>Resultado: uma imagem tridimensional que parece “flutuar”.</p>

<h3>Onde aparece</h3>

<ul>
  <li>Shows</li>
  <li>Medicina</li>
  <li>Educação</li>
</ul>

<img src="../js/img/holograma_nos_smartphones_20903_3_600.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

<p>Ainda não é algo comum no dia a dia… mas claramente tá evoluindo rápido.</p>

<img src="../js/img/holograma-medicina.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

<div class="info-box">
<p>🔬 Holografia é uma das tecnologias mais “futuristas” que já estão entre nós.</p>
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
<p>Se você já salvou uma imagem e ficou na dúvida entre PNG ou JPG… você já esbarrou nisso aqui.</p>

<p>Cada formato existe por um motivo — e escolher errado pode ferrar qualidade ou peso do arquivo.</p>

<img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Raster (pixel)</h3>

<p>São imagens feitas de pixels — ou seja, se aumentar demais, perde qualidade.</p>

<ul>
  <li><strong>JPEG:</strong> leve, bom pra foto</li>
  <li><strong>PNG:</strong> qualidade alta, transparência</li>
  <li><strong>WebP:</strong> moderno e otimizado</li>
</ul>

<img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Vetorial</h3>

<p>Aqui não tem pixel — é tudo matemático.</p>

<p>Resultado: pode aumentar infinito sem perder qualidade.</p>

<ul>
  <li>SVG</li>
</ul>

<img src="https://images.unsplash.com/photo-1558655146-d09347e92766" style="width:100%; border-radius:10px; margin:15px 0;">

<div class="info-box">
<p>💡 Saber escolher formato faz MUITA diferença em performance.</p>
</div>
`
  },

  {
    id: 10, num: '10', 
    cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Filtros, segmentação, detecção de bordas — as técnicas que transformam imagens em informação.',
    tags: ['Processamento','OpenCV','Python','Visão Computacional'], 
    date: 'Mai 2025', readTime: '7 min',

    body: `
<p>Aqui já começa a entrar num nível mais técnico — mas ainda assim dá pra entender de boa.</p>

<p>Processamento de imagem é basicamente ensinar o computador a “ver”.</p>

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Filtros</h3>

<ul>
  <li>Blur (tirar ruído)</li>
  <li>Sharpen (melhorar detalhe)</li>
  <li>Detecção de borda</li>
</ul>

<img src="https://images.unsplash.com/photo-1518770660439-4636190af475" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Segmentação</h3>

<p>Separar partes da imagem — tipo identificar objeto e fundo.</p>

<img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Ferramentas</h3>

<ul>
  <li>OpenCV</li>
  <li>Pillow</li>
  <li>scikit-image</li>
</ul>

<p>Hoje isso é base pra IA, reconhecimento facial, carros autônomos…</p>

<div class="info-box">
<p>🤖 Computador não “vê” como a gente — ele calcula.</p>
</div>
`
  },
  {
    id: 11, num: '11',
    cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA generativa, deepfakes, upscaling — como algoritmos estão criando e transformando mídias.',
    tags: ['IA','Machine Learning','Deep Learning','Generativa'],
    date: 'Mai 2025', readTime: '8 min',

    body: `
<p>Se tem uma coisa que explodiu nos últimos anos foi a <strong>Inteligência Artificial</strong>.</p>

<p>Hoje em dia, você consegue gerar imagem, texto, música e até vídeo só escrevendo um prompt. Isso mudou completamente a forma como a gente cria conteúdo.</p>

<h3>IA Generativa</h3>

<p>Essa é a parte mais absurda: modelos que criam coisas do zero.</p>

<ul>
<li>Imagem: Midjourney, DALL-E</li>
<li>Texto: GPT</li>
<li>Áudio: ElevenLabs, Suno</li>
<li>Vídeo: Runway, Sora</li>
</ul>

<p>Antes você precisava saber desenhar, editar ou programar. Agora você descreve… e a IA faz.</p>

<h3>Aplicações</h3>

<h4>Imagem e Vídeo</h4>
<ul>
<li>Upscaling (melhorar qualidade)</li>
<li>Restauração de fotos antigas</li>
<li>Criação de imagens do zero</li>
</ul>

<h4>Áudio</h4>
<ul>
<li>Voz sintética</li>
<li>Música gerada</li>
<li>Limpeza de áudio</li>
</ul>

<p>Mas junto com isso vem um ponto importante: até onde isso é positivo?</p>

<p>Deepfakes, fake news… tudo isso também entra no jogo.</p>

<div class="info-box">
<p>⚠️ IA não é só ferramenta — também levanta muita discussão ética.</p>
</div>
`
  },

  {
    id: 12, num: '12',
    cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'O blueprint de qualquer jogo — o que é um GDD e como criá-lo.',
    tags: ['Game Design','GDD','Documentação','Jogos'],
    date: 'Jun 2025', readTime: '7 min',

    body: `
<p>Se você acha que fazer jogo é só sair programando… já começou errado.</p>

<p>Antes de qualquer linha de código, existe o <strong>GDD</strong> — Game Design Document.</p>

<p>É basicamente o “plano do jogo”.</p>

<h3>Pra que serve?</h3>

<p>Organizar tudo: ideia, mecânica, visual, som…</p>

<p>Sem isso, o projeto vira bagunça rápido.</p>

<h3>Estrutura</h3>

<h4>Visão Geral</h4>
<ul>
<li>Nome do jogo</li>
<li>Gênero</li>
<li>Plataforma</li>
</ul>

<h4>Mecânicas</h4>
<ul>
<li>Como o jogo funciona</li>
<li>Regras</li>
<li>Objetivo</li>
</ul>

<h4>Arte e Áudio</h4>
<ul>
<li>Estilo visual</li>
<li>Trilha sonora</li>
</ul>

<p>No nosso caso, o GDD foi essencial — sem ele a gente ia se perder fácil.</p>

<div class="info-box">
<p>🎮 Um jogo bom começa muito antes do código.</p>
</div>
`
  },

  {
    id: 13, num: '13',
    cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
    title: 'Jogo Desenvolvido: Projeto da Disciplina',
    excerpt: 'Apresentação do jogo criado durante a disciplina.',
    tags: ['Jogo','Projeto','Unity','Game Dev'],
    date: 'Jun 2025', readTime: '6 min',

    body: `
<p>Aqui foi onde a teoria virou prática de verdade.</p>

<p>Desenvolver um jogo parece simples olhando de fora… mas quando você começa, vê que envolve MUITA coisa.</p>

<h3>O Projeto</h3>

<p>A gente criou um jogo aplicando o que estudou — desde design até implementação.</p>

<h3>Mecânicas</h3>

<ul>
<li>Movimentação</li>
<li>Interação</li>
<li>Objetivo claro</li>
</ul>

<p>Teve erro, bug, coisa quebrando… mas faz parte.</p>

<h3>O mais importante</h3>

<p>Não foi o jogo em si — foi o processo.</p>

<p>Entender como construir algo do zero muda totalmente a visão.</p>

<div class="info-box">
<p>🛠️ Desenvolver ensina mais que só estudar.</p>
</div>
`
  },

  {
    id: 14, num: '14',
    cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
    title: 'Internet das Coisas (IoT)',
    excerpt: 'Casas inteligentes, cidades conectadas.',
    tags: ['IoT','Arduino','MQTT','Sensores'],
    date: 'Jun 2025', readTime: '7 min',

    body: `
<p>IoT é quando objetos do dia a dia começam a se conectar na internet.</p>

<p>Tipo lâmpada, geladeira, sensor… tudo trocando informação.</p>

<h3>Como funciona</h3>

<ul>
<li>Sensores coletam dados</li>
<li>Dispositivos processam</li>
<li>Internet conecta tudo</li>
</ul>

<p>Simples na ideia… mas gigante na prática.</p>

<h3>Onde aparece</h3>

<ul>
<li>Casa inteligente</li>
<li>Indústria</li>
<li>Agricultura</li>
</ul>

<p>O mundo tá ficando cada vez mais conectado.</p>

<div class="info-box">
<p>🌐 IoT é tipo dar “vida digital” aos objetos.</p>
</div>
`
  },

  {
    id: 15, num: '15',
    cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
    title: 'Automação: Conceitos e Aplicações',
    excerpt: 'Como a automação está redefinindo o trabalho.',
    tags: ['Automação','RPA','Python','Indústria 4.0'],
    date: 'Jun 2025', readTime: '6 min',

    body: `
<p>Automação é basicamente fazer a máquina trabalhar por você.</p>

<p>E isso já acontece em tudo — desde indústria até tarefas simples no PC.</p>

<h3>Tipos</h3>

<ul>
<li>Industrial (robôs)</li>
<li>TI (scripts, bots)</li>
</ul>

<p>Hoje, muita coisa repetitiva já é automatizada.</p>

<p>E isso muda totalmente o mercado de trabalho.</p>

<div class="info-box">
<p>⚙️ Quem entende automação sai na frente.</p>
</div>
`
  },

  {
    id: 16, num: '16',
    cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
    title: 'Projeto Desenvolvido: Sistema Multimídia',
    excerpt: 'Documentação do projeto prático criado.',
    tags: ['Projeto','Desenvolvimento','Multimídia'],
    date: 'Jul 2025', readTime: '5 min',

    body: `
<p>Esse foi o fechamento de tudo que a gente viu.</p>

<p>Um projeto onde juntamos várias tecnologias e conceitos.</p>

<h3>O que foi feito</h3>

<p>Um sistema que aplica multimídia na prática.</p>

<h3>O que aprendemos</h3>

<ul>
<li>Organização</li>
<li>Planejamento</li>
<li>Execução</li>
</ul>

<p>No fim, deu pra ver como tudo se conecta.</p>

<div class="info-box">
<p>🚀 Projeto prático é onde tudo faz sentido.</p>
</div>
`
  },

  {
    id: 17, num: '17',
    cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
    title: 'Reflexões Finais: O que Aprendemos',
    excerpt: 'Uma reflexão sobre o percurso.',
    tags: ['Conclusão','Aprendizado','Semestre'],
    date: 'Jul 2025', readTime: '4 min',

    body: `
<p>Chegamos no final — e olhando pra trás, dá pra ver o quanto evoluiu.</p>

<p>No começo era só teoria… hoje já dá pra entender como tudo funciona junto.</p>

<h3>Resumo</h3>

<ul>
<li>Multimídia</li>
<li>XR (VR, AR, MR)</li>
<li>IA</li>
<li>Jogos</li>
<li>IoT</li>
</ul>

<p>Mas o principal aprendizado foi outro:</p>

<p><strong>tecnologia não é só código — é comunicação.</strong></p>

<div class="info-box">
<p>🙏 Valeu por acompanhar o MultimídiaLab!</p>
</div>
`
  }
];
