   /* ============================================================
   MultimídiaLab — posts.js
   Edite aqui o conteúdo de cada postagem!
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
      <p>Bem-vindo ao <strong>MultimídiaLab</strong>! Este blog é um projeto acadêmico desenvolvido no contexto da disciplina de Multimídias.</p>
      <h3>Os Autores</h3>
      <p>Somos dois estudantes apaixonados por tecnologia e criatividade.</p>
      <!-- ✏️ EDITE: Coloque os nomes reais aqui -->
      <p><strong>Aluno 1:</strong> João Carlos — Estudante de Informatica para Negocios</p>
      <p><strong>Aluno 2:</strong> Laura Conte — Estudante de Informatica para Negocios</p>
        <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">


      <h3>Sobre a Disciplina</h3>
      <p>A disciplina de Multimídias aborda a integração de diferentes formas de mídia — texto, imagem, áudio, vídeo e interatividade — no contexto digital.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Conceitos teóricos explicados de forma acessível</li>
        <li>Exemplos práticos e aplicações reais</li>
        <li>Vídeos, áudios e imagens que ilustram os temas</li>
        <li>Referências para aprofundamento</li>
        <li>Projetos desenvolvidos durante a disciplina</li>
      </ul>

      <div class="info-box"><p>📌 Este blog é atualizado regularmente ao longo do semestre.</p></div>

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
      <p>Criar um blog vai muito além de escrever textos na internet. Quando integramos texto, imagem, vídeo, áudio e links interativos, estamos praticando diretamente os conceitos de <strong>multimídia</strong>.</p>

      <h3>Por que um Blog?</h3>
      <p>O blog permite combinar múltiplas mídias de forma não-linear — um exemplo perfeito de hipermídia.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Documentar o aprendizado ao longo da disciplina</li>
        <li>Praticar a criação e curadoria de conteúdo multimídia</li>
        <li>Desenvolver habilidades de comunicação digital</li>
        <li>Criar um portfólio acadêmico acessível online</li>
      </ul>

      <!-- ✏️ EDITE: Substitua os links pelos vídeos reais que você vai usar -->
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
     <p>O termo <strong>multimídia</strong> refere-se à integração de múltiplas formas de mídia — texto, imagem, áudio, vídeo e animação — em um único suporte ou experiência. Mais do que apenas juntar elementos, a multimídia busca criar uma comunicação mais rica, dinâmica e eficiente.</p>
  <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">
      <h3>Componentes da Multimídia</h3>
  <ul>
    <li><strong>Texto:</strong > 
     O texto é a espinha dorsal de qualquer conteúdo digital. Mesmo na era do vídeo e do áudio, ele continua insubstituível por ser acessível, pesquisável e extremamente preciso na transmissão de ideias complexas.
     No contexto multimídia, pode assumir diferentes funções: corpo principal de um artigo, legenda, roteiro ou descrição. A qualidade do texto impacta diretamente na qualidade da experiência como um todo.
    </li>
    
    <li><strong>Imagem:</strong>
     A imagem comunica de forma imediata. Fotografias criam conexão emocional, ilustrações representam ideias abstratas e infográficos organizam informações complexas.
     Quando bem utilizada, a imagem não apenas ilustra, mas complementa e amplia o entendimento do conteúdo.
    </li>
  </ul>

  <ul>
    <li><strong>Áudio:</strong> 
     O áudio permite o consumo de conteúdo de forma passiva, acompanhando o usuário em diferentes momentos do dia. Podcasts, narrações e trilhas sonoras ampliam a experiência e aumentam o engajamento.
     Um ponto essencial é a qualidade: áudio ruim compromete toda a percepção do conteúdo.
    </li>
   
    <li><strong>Vídeo:</strong> 
     O vídeo combina imagem, som e movimento, sendo o formato mais completo e envolvente da internet atual. Ele transmite informação e emoção simultaneamente, sendo amplamente utilizado em plataformas digitais.
    </li>
   
    <li><strong>Interatividade:</strong> 
     A interatividade transforma o usuário em participante ativo. Quizzes, formulários e experiências interativas aumentam o envolvimento e tornam o aprendizado mais eficaz.
    </li>
  </ul>

  <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769" style="width:100%; border-radius:10px; margin:15px 0;">

  <!-- ✏️ EDITE: vídeos reais -->
  <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">História da Multimídia</div><div class="media-src">https://www.youtube.com/watch?v=Q7EG9VnM0h4</div></div></div>
  <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Multimídia: Definição</div><div class="media-src">https://www.youtube.com/watch?v=0bJz2mQyXyQ</div></div></div>
  <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio</div><div class="media-title">Podcast sobre Mídias Digitais</div><div class="media-src">https://anchor.fm/</div></div></div>

  <h3>Multimídia Linear vs. Não-linear</h3>
  <p>Se você cria conteúdo digital, já lidou com essa escolha: controlar o caminho do usuário ou permitir que ele explore livremente.</p>
  
  <p><strong>Linear:</strong> Conteúdos lineares seguem uma sequência definida, como filmes, aulas gravadas e apresentações. O usuário acompanha do início ao fim, sem interferência na ordem. Esse formato é ideal para narrativas e construção de argumentos progressivos.</p>
  
  <p><strong>Não-linear:</strong> Na multimídia não-linear, o usuário escolhe o caminho. Sites, blogs e plataformas digitais permitem navegação livre, criando experiências personalizadas. A vantagem é a flexibilidade; o desafio é manter a organização.</p>

  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" style="width:100%; border-radius:10px; margin:15px 0;">

  <p><strong>Qual é melhor?</strong> Não existe resposta única. Conteúdos narrativos funcionam melhor no formato linear, enquanto conteúdos informativos se beneficiam da não-linearidade. Na prática, os melhores projetos combinam ambos.</p>

  <div class="info-box"><p>🚀 A multimídia é a base das experiências digitais modernas.</p></div>

  <h3>Referências</h3>
  <ul class="ref-list">
    <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li>
    <li>MAYER, Richard E. <em>Multimedia Learning</em>. Cambridge University Press, 2001.</li>
    <li>MANOVICH, Lev. <em>The Language of New Media</em>. MIT Press, 2001.</li>
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
  <p><strong>Hipermídia</strong> é a evolução do hipertexto, incorporando não apenas texto interligado, mas também imagens, vídeos, áudios e elementos interativos conectados entre si. Trata-se de um modelo de organização da informação baseado em conexões, onde o usuário navega de forma não-linear, escolhendo seu próprio caminho.</p>

  <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" style="width:100%; border-radius:10px; margin:15px 0;">

  <h3>A Origem: O Memex de Vannevar Bush</h3>
  <p>Em 1945, o cientista Vannevar Bush publicou o artigo <em>“As We May Think”</em>, no qual descreveu o conceito do <strong>Memex</strong> — uma máquina teórica capaz de armazenar informações e conectá-las por associação, imitando o funcionamento da mente humana.</p>
  
  <p>Embora nunca tenha sido construído, o Memex antecipou conceitos fundamentais da web moderna, como links, navegação não-linear e organização por conexões. Essa ideia influenciou diretamente o desenvolvimento do hipertexto e, posteriormente, da hipermídia.</p>

  <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87" style="width:100%; border-radius:10px; margin:15px 0;">

  <h3>Do Hipertexto à Hipermídia</h3>
  <p>O hipertexto permite a conexão entre blocos de texto por meio de links. A hipermídia expande esse conceito ao integrar múltiplos formatos de mídia dentro dessas conexões, criando experiências mais ricas e interativas.</p>

  <p>Com o avanço da internet, especialmente com a criação da World Wide Web, a hipermídia tornou-se o padrão dominante de organização da informação digital.</p>

  <h3>Hipermídia na Prática</h3>
  <ul>
    <li>Websites que combinam texto, imagem, vídeo e navegação por links</li>
    <li>E-books interativos com recursos multimídia</li>
    <li>Enciclopédias digitais com navegação interconectada</li>
    <li>Jogos digitais com narrativa não-linear</li>
  </ul>

  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" style="width:100%; border-radius:10px; margin:15px 0;">

  <!-- ✏️ EDITE -->
  <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Ted Nelson e o Hipertexto</div><div class="media-src">https://www.youtube.com/watch?v=En_2T7KH6RA</div></div></div>
  <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo</div><div class="media-title">Como Funciona a Web</div><div class="media-src">https://www.youtube.com/watch?v=7_LPdttKXPc</div></div></div>
  <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio</div><div class="media-title">Narração: Hipermídia e o Futuro da Informação</div></div></div>

  <h3>Por que a Hipermídia é Importante?</h3>
  <p>A hipermídia mudou completamente a forma como consumimos informação. Em vez de seguir uma sequência fixa, o usuário pode explorar conteúdos conforme seus interesses, criando uma experiência personalizada.</p>

  <p>Essa lógica está presente em praticamente toda a internet atual — desde redes sociais até plataformas educacionais — tornando a navegação mais dinâmica e eficiente.</p>

  <div class="info-box">
    <p>🔗 <strong>Link externo:</strong> Projeto Xanadu de Ted Nelson: xanadu.com</p>
  </div>

  <h3>Referências</h3>
  <ul class="ref-list">
    <li>BUSH, Vannevar. <em>As We May Think</em>. The Atlantic Monthly, 1945.</li>
    <li>NELSON, Theodore. <em>Literary Machines</em>. Mindful Press, 1981.</li>
    <li>LANDOW, George P. <em>Hypertext 3.0</em>. Johns Hopkins University Press, 2006.</li>
  </ul>
`
  },
  {
    id: 5, num: '05',
cat: 'xr', catLabel: '🥽 Realidade Virtual', catColor: '#39d98a',
title: 'Realidade Virtual: Hardware e Software',
excerpt: 'Mergulhe no universo da VR — dos óculos HMD aos motores gráficos, entenda toda a infraestrutura que torna mundos virtuais possíveis.',
tags: ['VR','Realidade Virtual','HMD','Unity','Unreal'],
date: 'Abr 2025', readTime: '8 min',
body: `
  <p>A <strong>Realidade Virtual (VR)</strong> é uma tecnologia que permite a criação de ambientes digitais imersivos, nos quais o usuário pode interagir como se estivesse fisicamente presente. Ao combinar gráficos 3D, sensores e dispositivos de visualização, a VR cria uma sensação de presença que redefine a forma como interagimos com o digital.</p>

  <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

  <h3>Hardware de VR</h3>
  <p>O hardware é responsável por criar a imersão sensorial. Ele conecta o mundo físico ao virtual por meio de dispositivos que capturam movimentos e exibem ambientes digitais em tempo real.</p>

  <h4>Head-Mounted Displays (HMDs)</h4>
  <ul>
    <li><strong>Meta Quest 3:</strong> Dispositivo standalone, sem necessidade de computador, ideal para uso acessível e portátil.</li>
    <li><strong>PlayStation VR2:</strong> Integrado ao PS5, com recursos como rastreamento ocular (eye-tracking) e feedback tátil avançado.</li>
    <li><strong>Valve Index:</strong> Voltado para PC, oferece alta fidelidade visual e precisão de movimento.</li>
    <li><strong>Apple Vision Pro:</strong> Dispositivo de realidade mista com altíssima resolução e integração com o ecossistema Apple.</li>
  </ul>

  <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d" style="width:100%; border-radius:10px; margin:15px 0;">

  <h3>Software de VR</h3>
  <p>O software é responsável por construir os mundos virtuais e controlar a interação do usuário com eles.</p>

  <ul>
    <li><strong>Unity:</strong> Um dos motores gráficos mais utilizados no desenvolvimento de experiências VR.</li>
    <li><strong>Unreal Engine:</strong> Conhecido por seus gráficos realistas.</li>
    <li><strong>WebXR:</strong> Permite VR diretamente no navegador.</li>
  </ul>

  <img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

  <!-- LINKS CLICÁVEIS -->
  <div class="media-block">
    <span class="media-icon">🎬</span>
    <div>
      <div class="media-label">Vídeo</div>
      <div class="media-title">Como Funciona a Realidade Virtual</div>
      <div class="media-src">
        <a href="https://www.youtube.com/watch?v=R9kF9Lr3R8s" target="_blank">
          ▶ Assistir no YouTube
        </a>
      </div>
    </div>
  </div>

  <div class="media-block">
    <span class="media-icon">🎬</span>
    <div>
      <div class="media-label">Vídeo</div>
      <div class="media-title">Meta Quest 3 — Demonstração</div>
      <div class="media-src">
        <a href="https://www.youtube.com/watch?v=U6p1sR7w2lQ" target="_blank">
          ▶ Assistir no YouTube
        </a>
      </div>
    </div>
  </div>

  <div class="media-block">
    <span class="media-icon">🔊</span>
    <div>
      <div class="media-label">Áudio</div>
      <div class="media-title">Podcast: O Futuro da Realidade Virtual</div>
      <div class="media-src">
        <a href="https://spotify.com/" target="_blank">
          ▶ Ouvir podcast
        </a>
      </div>
    </div>
  </div>

  <h3>Aplicações da Realidade Virtual</h3>
  <ul>
    <li>Educação e treinamentos imersivos</li>
    <li>Simulações médicas</li>
    <li>Arquitetura e design</li>
    <li>Jogos digitais</li>
  </ul>


  <div class="info-box">
    <p>🔗 <strong>Saiba mais:</strong> developer.mozilla.org/WebXR | docs.unity3d.com/vr</p>
  </div>

  <h3>Referências</h3>
  <ul class="ref-list">
    <li>SHERMAN, William R.; CRAIG, Alan B. <em>Understanding Virtual Reality</em>. Morgan Kaufmann, 2018.</li>
    <li>JERALD, Jason. <em>The VR Book</em>. ACM Books, 2015.</li>
  </ul>
`},
  { id: 6, num: '06', 
cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
title: 'Realidade Aumentada: Hardware e Software',
excerpt: 'Pokémon GO foi só o começo. Explore como a AR sobrepõe o digital ao físico.',
tags: ['AR','ARKit','ARCore','WebAR'], 
date: 'Abr 2025', readTime: '7 min',

body: `
<p>A <strong>Realidade Aumentada (AR)</strong> é uma tecnologia que sobrepõe elementos digitais ao mundo físico em tempo real. Diferente da realidade virtual, que cria um ambiente totalmente artificial, a AR mantém o usuário no mundo real, enriquecendo-o com informações visuais interativas.</p>

<img src="https://images.unsplash.com/photo-1581091012184-5c1b4b0f0c54" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Hardware de AR</h3>
<p>O hardware de AR é responsável por capturar o ambiente real e inserir objetos digitais de forma precisa e alinhada ao espaço físico.</p>

<ul>
  <li><strong>Smartphones:</strong> Dispositivos mais acessíveis, utilizando câmeras e sensores com tecnologias como ARKit (iOS) e ARCore (Android).</li>
  <li><strong>Microsoft HoloLens 2:</strong> Óculos avançados voltados para uso profissional, com interação por gestos e hologramas.</li>
  <li><strong>Magic Leap 2:</strong> Focado em aplicações industriais, médicas e de engenharia.</li>
</ul>

<img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Software de AR</h3>
<p>O software é responsável por interpretar o ambiente e posicionar corretamente os elementos virtuais, garantindo uma experiência fluida e realista.</p>

<ul>
  <li><strong>ARKit (Apple):</strong> SDK nativo para desenvolvimento de AR em dispositivos iOS.</li>
  <li><strong>ARCore (Google):</strong> Plataforma equivalente para dispositivos Android.</li>
  <li><strong>WebAR / A-Frame:</strong> Permite experiências de AR diretamente no navegador, sem necessidade de instalação.</li>
  <li><strong>Spark AR:</strong> Utilizado para criação de filtros interativos em redes sociais como Instagram.</li>
</ul>

<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356" style="width:100%; border-radius:10px; margin:15px 0;">

<!-- LINKS CLICÁVEIS -->
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Realidade Aumentada: Como Funciona</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=1Y6Wz3b7F0Y" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">HoloLens 2 — Demonstração</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=eqFqtAJMtYE" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🔊</span>
  <div>
    <div class="media-label">Áudio</div>
    <div class="media-title">Podcast: AR no Varejo e Educação</div>
    <div class="media-src">
      <a href="https://anchor.fm/" target="_blank">
        ▶ Ouvir podcast
      </a>
    </div>
  </div>
</div>

<h3>Exemplos Práticos</h3>

<p><strong>Medicina:</strong> Cirurgiões utilizam AR para visualizar estruturas internas do corpo durante procedimentos, aumentando a precisão.</p>

<p><strong>Varejo:</strong> Aplicativos como o IKEA Place permitem visualizar móveis em casa antes da compra.</p>

<p><strong>Educação:</strong> Conteúdos interativos tornam o aprendizado mais visual e envolvente.</p>

<p><strong>Projeto Próprio — Merge Cube:</strong> 
Desenvolvi uma experiência utilizando o Merge Cube, um cubo físico que, ao ser reconhecido pela câmera, permite a visualização de objetos 3D em realidade aumentada. 
O projeto demonstra como a AR pode ser aplicada de forma acessível no ensino e na visualização de conteúdos digitais, tornando a interação mais imersiva e intuitiva.</p>

<!-- CAMPO PARA IMAGEM DO SEU PROJETO -->
<div style="margin:15px 0;">
  <p><strong>📸 Imagem do Projeto:</strong></p>
  <input type="file" accept="image/*">
</div>

<div class="info-box">
<p>🔗 aframe.io | experiments.withgoogle.com/collection/ar</p>
</div>

<h3>Referências</h3>
<ul class="ref-list">
<li>AZUMA, Ronald. <em>A Survey of Augmented Reality</em>. Presence, 1997.</li>
<li>CRAIG, Alan B. <em>Understanding Augmented Reality</em>. Morgan Kaufmann, 2013.</li>
</ul>
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
<p>A <strong>Realidade Mista (MR)</strong> combina elementos do mundo real e virtual, permitindo que objetos digitais não apenas apareçam no ambiente físico, mas também interajam com ele em tempo real. Essa integração cria experiências mais avançadas do que a realidade aumentada e mais conectadas ao mundo real do que a realidade virtual.</p>

<img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>O Continuum de Milgram</h3>
<p>Em 1994, Paul Milgram e Fumio Kishino propuseram o conceito de <strong>Reality-Virtuality Continuum</strong>, uma escala que vai do ambiente completamente real até o totalmente virtual.</p>

<p>No meio dessa escala está a Realidade Mista, onde elementos físicos e digitais coexistem e interagem. Esse conceito é fundamental para entender como tecnologias como AR, VR e MR se relacionam.</p>

<img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Hardware de MR</h3>
<p>Os dispositivos de MR são projetados para mapear o ambiente real e posicionar objetos virtuais de forma precisa, permitindo interação natural.</p>

<ul>
  <li><strong>Microsoft HoloLens 2:</strong> Principal dispositivo MR voltado para empresas, com interação por gestos e mapeamento espacial avançado.</li>
  <li><strong>Apple Vision Pro:</strong> Considerado um "computador espacial", combina realidade virtual e aumentada em uma experiência híbrida.</li>
  <li><strong>Magic Leap 2:</strong> Focado em aplicações industriais, médicas e de engenharia.</li>
</ul>

<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356" style="width:100%; border-radius:10px; margin:15px 0;">

<!-- LINKS CLICÁVEIS -->
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Apple Vision Pro: Spatial Computing</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=TX9qSaGXFyg" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">VR vs AR vs MR — Diferenças</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=8hYlB38asDY" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🔊</span>
  <div>
    <div class="media-label">Áudio</div>
    <div class="media-title">Podcast: Metaverso e Realidade Mista</div>
    <div class="media-src">
      <a href="https://spotify.com/" target="_blank">
        ▶ Ouvir podcast
      </a>
    </div>
  </div>
</div>

<h3>Exemplo Prático</h3>

<p>Na <strong>Boeing</strong>, técnicos utilizam dispositivos como o HoloLens para visualizar instruções de montagem diretamente sobre a aeronave real. Essas instruções aparecem alinhadas ao ambiente físico, reduzindo erros e aumentando a eficiência do processo.</p>

<p>Esse tipo de aplicação demonstra como a Realidade Mista pode transformar processos industriais, treinamento e manutenção, tornando tarefas complexas mais intuitivas e precisas.</p>

<img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" style="width:100%; border-radius:10px; margin:15px 0;">

<div class="info-box">
<p>🔗 learn.microsoft.com/mixed-reality | developer.apple.com/visionos</p>
</div>

<h3>Referências</h3>
<ul class="ref-list">
<li>MILGRAM, Paul; KISHINO, Fumio. <em>A Taxonomy of Mixed Reality Visual Displays</em>. IEICE, 1994.</li>
</ul>
` },
  {
    id: 8, num: '08', 
cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
title: 'Holografia: Hardware e Software',
excerpt: 'De Star Wars à realidade — como a holografia funciona e onde é aplicada.',
tags: ['Holografia','Holograma','Display 3D'], 
date: 'Abr 2025', readTime: '7 min',

body: `
<p>A <strong>holografia</strong> é uma técnica que registra e reproduz padrões de luz para criar imagens tridimensionais. Diferente de imagens tradicionais, o holograma preserva profundidade e perspectiva, permitindo que o objeto seja visto de diferentes ângulos.</p>

<p>Um holograma é formado a partir da interferência entre dois feixes de laser: o feixe de referência e o feixe refletido pelo objeto. Essa interação gera um padrão que pode ser reconstruído posteriormente, criando a ilusão tridimensional.</p>

<img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Hardware Holográfico</h3>

<h4>Displays Dinâmicos</h4>
<ul>
  <li><strong>Pepper's Ghost:</strong> Técnica clássica baseada em reflexos com vidro e espelhos, muito usada em shows e apresentações.</li>
  <li><strong>Looking Glass Factory:</strong> Displays holográficos que permitem visualizar objetos 3D sem necessidade de óculos.</li>
  <li><strong>Voxon Photonics:</strong> Tecnologia que cria volumes reais de luz no espaço, aproximando-se da holografia “verdadeira”.</li>
</ul>

<img src="../js/img/holograma_nos_smartphones_20903_3_600.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Aplicações Reais</h3>

<p><strong>Medicina:</strong> Tecnologias como a RealView Imaging permitem visualizar órgãos em 3D, auxiliando diagnósticos e procedimentos cirúrgicos.</p>

<p><strong>Entretenimento:</strong> Shows com hologramas recriam artistas digitalmente, criando experiências imersivas para o público.</p>

<p><strong>Educação:</strong> Modelos tridimensionais ajudam na compreensão de estruturas complexas, como moléculas ou sistemas biológicos.</p>

<img src="../js/img/holograma-medicina.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

<!-- LINKS CLICÁVEIS -->
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Como Funciona a Holografia</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=EmKQsSDlaa4" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Hologramas — Tecnologia Explicada</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=Yqk7P6Fq7iU" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🔊</span>
  <div>
    <div class="media-label">Áudio</div>
    <div class="media-title">Narração: Holografia — Da Física às Aplicações</div>
  </div>
</div>

<div class="info-box">
<p>🔗 lookingglassfactory.com | media.mit.edu/groups/holography</p>
</div>

<h3>Referências</h3>
<ul class="ref-list">
<li>GABOR, Dennis. <em>A New Microscopic Principle</em>. Nature, 1948.</li>
<li>HARIHARAN, P. <em>Optical Holography</em>. Cambridge University Press, 1996.</li>
</ul>
` },
  {
    id: 9, num: '09', 
cat: 'imagem', catLabel: '🖼 Imagem Digital', catColor: '#00e5ff',
title: 'Imagens e seus Formatos',
excerpt: 'PNG, JPEG, WebP, SVG — cada formato tem sua razão de existir.',
tags: ['Imagem','PNG','JPEG','WebP','SVG'], 
date: 'Mai 2025', readTime: '6 min',

body: `
<p>Formatos de imagem representam diferentes formas de armazenar e exibir informação visual. Cada formato foi criado com um objetivo específico — seja reduzir tamanho de arquivo, manter qualidade ou permitir edição.</p>

<img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Imagens Rasterizadas</h3>
<p>Imagens rasterizadas são compostas por pixels. Isso significa que possuem resolução fixa e podem perder qualidade ao serem ampliadas.</p>

<h4>JPEG</h4>
<ul>
  <li>Compressão com perda (lossy)</li>
  <li>Ideal para fotografias</li>
  <li>Arquivos leves</li>
  <li>Não suporta transparência</li>
</ul>

<h4>PNG</h4>
<ul>
  <li>Compressão sem perda (lossless)</li>
  <li>Alta qualidade</li>
  <li>Suporta transparência</li>
  <li>Ideal para logos e interfaces</li>
</ul>

<h4>WebP</h4>
<ul>
  <li>Formato moderno desenvolvido pelo Google</li>
  <li>Arquivos menores que JPEG e PNG</li>
  <li>Suporta transparência e animação</li>
  <li>Ideal para web moderna</li>
</ul>

<img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Imagens Vetoriais (SVG)</h3>
<p>Diferente das imagens rasterizadas, imagens vetoriais são baseadas em fórmulas matemáticas. Isso permite que sejam redimensionadas infinitamente sem perda de qualidade.</p>

<ul>
  <li>Escala infinita sem perda</li>
  <li>Arquivos leves para gráficos simples</li>
  <li>Editável com CSS e JavaScript</li>
  <li>Ideal para logos, ícones e interfaces</li>
</ul>

<img src="https://images.unsplash.com/photo-1558655146-d09347e92766" style="width:100%; border-radius:10px; margin:15px 0;">

<!-- LINKS CLICÁVEIS -->
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Todos os Formatos de Imagem Explicados</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=V0Gx8K2jC0g" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">JPEG vs PNG vs WebP</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=6WZQ2E1rV6k" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🔊</span>
  <div>
    <div class="media-label">Áudio</div>
    <div class="media-title">Podcast: Imagens na Web</div>
    <div class="media-src">
      <a href="https://anchor.fm/" target="_blank">
        ▶ Ouvir podcast
      </a>
    </div>
  </div>
</div>

<h3>Guia Rápido</h3>
<ul>
  <li>📸 Foto para web → <strong>WebP ou JPEG</strong></li>
  <li>🎨 Logo → <strong>SVG ou PNG</strong></li>
  <li>🖨 Impressão → <strong>TIFF ou PDF</strong></li>
</ul>

<div class="info-box">
<p>🔗 web.dev/choose-the-right-image-format</p>
</div>

<h3>Referências</h3>
<ul class="ref-list">
<li>GONZALEZ, Rafael C.; WOODS, Richard E. <em>Digital Image Processing</em>. Pearson, 2018.</li>
</ul>
` },
  {
    id: 10, num: '10', 
cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
title: 'Processamento de Imagens',
excerpt: 'Filtros, segmentação, detecção de bordas — as técnicas que transformam imagens em informação.',
tags: ['Processamento','OpenCV','Python','Visão Computacional'], 
date: 'Mai 2025', readTime: '7 min',

body: `
<p>O <strong>Processamento Digital de Imagens (PDI)</strong> consiste no uso de algoritmos para manipular, analisar e extrair informações de imagens digitais. Essa área é fundamental para aplicações como reconhecimento facial, diagnósticos médicos, sistemas de segurança e veículos autônomos.</p>

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Filtros Espaciais</h3>
<p>Filtros espaciais operam diretamente nos pixels da imagem, alterando sua aparência para destacar ou reduzir determinadas características.</p>

<ul>
  <li><strong>Blur:</strong> Filtros como Gaussiano e Mediana reduzem ruídos e suavizam a imagem.</li>
  <li><strong>Sharpening:</strong> Realça bordas e detalhes, aumentando a nitidez.</li>
  <li><strong>Detecção de bordas:</strong> Algoritmos como Sobel e Canny identificam contornos e limites dos objetos.</li>
</ul>

<img src="https://images.unsplash.com/photo-1518770660439-4636190af475" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Segmentação de Imagens</h3>
<p>A segmentação divide a imagem em regiões com características semelhantes, facilitando a análise e interpretação dos dados. É amplamente utilizada em medicina, agricultura e visão computacional.</p>

<ul>
  <li>Separação de objetos do fundo</li>
  <li>Identificação de regiões de interesse</li>
  <li>Análise automática de imagens</li>
</ul>

<img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Ferramentas</h3>
<p>Diversas bibliotecas facilitam o desenvolvimento de aplicações de processamento de imagens:</p>

<ul>
  <li><strong>OpenCV:</strong> Biblioteca mais utilizada em visão computacional, com suporte a diversas linguagens.</li>
  <li><strong>Pillow (PIL):</strong> Manipulação básica de imagens em Python.</li>
  <li><strong>scikit-image:</strong> Biblioteca voltada para processamento científico.</li>
</ul>

<!-- LINKS CLICÁVEIS -->
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Processamento de Imagens com OpenCV e Python</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=oXlwWbU8l2o" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo</div>
    <div class="media-title">Filtros de Imagem: Como Funcionam</div>
    <div class="media-src">
      <a href="https://www.youtube.com/watch?v=FTr3n7uBIuE" target="_blank">
        ▶ Assistir no YouTube
      </a>
    </div>
  </div>
</div>

<div class="media-block">
  <span class="media-icon">🔊</span>
  <div>
    <div class="media-label">Áudio</div>
    <div class="media-title">Podcast: Visão Computacional no Mundo Real</div>
    <div class="media-src">
      <a href="https://spotify.com/" target="_blank">
        ▶ Ouvir podcast
      </a>
    </div>
  </div>
</div>

<h3>Aplicações do PDI</h3>
<ul>
  <li>Reconhecimento facial e biometria</li>
  <li>Diagnóstico médico por imagem</li>
  <li>Veículos autônomos</li>
  <li>Análise de imagens industriais</li>
</ul>

<img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" style="width:100%; border-radius:10px; margin:15px 0;">

<div class="info-box">
<p>🔗 docs.opencv.org</p>
</div>

<h3>Referências</h3>
<ul class="ref-list">
<li>GONZALEZ, Rafael C.; WOODS, Richard E. <em>Digital Image Processing</em>. Pearson, 2018.</li>
<li>BRADSKI, Gary; KAEHLER, Adrian. <em>Learning OpenCV 4</em>. O'Reilly, 2019.</li>
</ul>
` },
  {
    id: 11, num: '11', cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA generativa, deepfakes, upscaling — como algoritmos estão criando e transformando mídias.',
    tags: ['IA','Machine Learning','Deep Learning','Generativa'], date: 'Mai 2025', readTime: '8 min',
    body: `<p>A <strong>Inteligência Artificial</strong> está transformando radicalmente a produção e consumo de mídia.</p><h3>IA Generativa</h3><p>Modelos que criam conteúdo: imagens (Midjourney, DALL-E), texto (GPT-4, Claude), áudio (Suno, ElevenLabs), vídeo (Sora, Runway).</p><h3>Aplicações em Multimídia</h3><h4>Imagem e Vídeo</h4><ul><li><strong>Upscaling:</strong> Aumentar resolução com IA (Topaz AI)</li><li><strong>Restauração:</strong> Colorização de fotos antigas</li><li><strong>Geração de imagens:</strong> Midjourney, DALL-E 3</li></ul><h4>Áudio e Música</h4><ul><li><strong>Síntese de voz:</strong> ElevenLabs</li><li><strong>Composição musical:</strong> Suno AI</li><li><strong>Redução de ruído:</strong> Adobe Podcast AI</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">IA Generativa: Revolução ou Ameaça?</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Como Funciona o Stable Diffusion</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Música Gerada por IA [Criada com Suno AI pelos autores]</div></div></div><div class="info-box"><p>🔗 midjourney.com | suno.com | paperswithcode.com</p></div><h3>Referências</h3><ul class="ref-list"><li>GOODFELLOW, Ian et al. <em>Deep Learning</em>. MIT Press, 2016.</li><li>RUSSELL, Stuart; NORVIG, Peter. <em>Artificial Intelligence</em>. Pearson, 2020.</li></ul>`
  },
  {
    id: 12, num: '12', cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'O blueprint de qualquer jogo — o que é um GDD e como criá-lo.',
    tags: ['Game Design','GDD','Documentação','Jogos'], date: 'Jun 2025', readTime: '7 min',
    body: `<p>O <strong>Game Design Document (GDD)</strong> é o blueprint que descreve tudo sobre um jogo: mecânicas, narrativa, arte, som e interfaces.</p><h3>Estrutura de um GDD</h3><h4>1. Visão Geral</h4><ul><li>Título, gênero, plataformas-alvo</li><li>Elevator pitch em 1-2 frases</li><li>Público-alvo e referências</li></ul><h4>2. Mecânicas</h4><ul><li>Core loop: ciclo de ação central</li><li>Controles e input</li><li>Condições de vitória e derrota</li></ul><h4>3. Arte e Áudio</h4><ul><li>Estilo visual e mood board</li><li>Trilha sonora e efeitos sonoros</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Como Criar um GDD — Brackeys</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">GDD de Games Famosos</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Game Design na Prática</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 Templates: notion.so/templates/gdd | gamedesigning.org/learn/gdd</p></div><h3>Referências</h3><ul class="ref-list"><li>SCHELL, Jesse. <em>The Art of Game Design</em>. CRC Press, 2019.</li><li>ADAMS, Ernest. <em>Fundamentals of Game Design</em>. New Riders, 2014.</li></ul>`
  },
  {
    id: 13, num: '13', cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
    title: 'Jogo Desenvolvido: Projeto da Disciplina',
    excerpt: 'Apresentação do jogo criado durante a disciplina — mecânicas, desenvolvimento e aprendizados.',
    tags: ['Jogo','Projeto','Unity','Game Dev'], date: 'Jun 2025', readTime: '6 min',
    body: `<!-- ✏️ EDITE TUDO AQUI com os detalhes do jogo real de vocês! --><p>Como parte do projeto da disciplina, desenvolvemos um jogo eletrônico aplicando os conceitos do GDD.</p><h3>Ficha do Jogo</h3><ul><li><strong>Título:</strong> [Coloque o título do jogo aqui]</li><li><strong>Gênero:</strong> [Ex: Plataforma 2D / Puzzle / RPG]</li><li><strong>Motor:</strong> [Ex: Unity, Unreal, Godot]</li><li><strong>Plataforma:</strong> [Ex: PC, WebGL, Mobile]</li></ul><h3>Mecânicas Principais</h3><ul><li>[Descreva as mecânicas principais do jogo]</li><li>[Ex: Movimentação, coleta, combate, puzzle]</li></ul><h3>Processo de Desenvolvimento</h3><p>[Descreva como foi o desenvolvimento — semanas, desafios, ferramentas usadas]</p><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Gameplay do Jogo [Vídeo produzido pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo</div><div class="media-title">Tutorial de referência usado no desenvolvimento</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Trilha Sonora do Jogo [Criada pelos autores]</div></div></div><h3>Aprendizados</h3><ul><li>[O que vocês aprenderam durante o desenvolvimento?]</li></ul><h3>Referências</h3><ul class="ref-list"><li>SCHELL, Jesse. <em>The Art of Game Design</em>. CRC Press, 2019.</li></ul>`
  },
  {
    id: 14, num: '14', cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
    title: 'Internet das Coisas (IoT)',
    excerpt: 'Casas inteligentes, cidades conectadas — entenda a infraestrutura que conecta tudo.',
    tags: ['IoT','Arduino','MQTT','Sensores'], date: 'Jun 2025', readTime: '7 min',
    body: `<p>A <strong>Internet das Coisas (IoT)</strong> é a rede de dispositivos físicos conectados à internet, coletando e trocando dados.</p><h3>Arquitetura IoT</h3><h4>Dispositivos</h4><ul><li><strong>Sensores:</strong> Temperatura, umidade, presença, GPS</li><li><strong>Microcontroladores:</strong> Arduino, ESP32</li><li><strong>Raspberry Pi:</strong> Mais poder computacional</li></ul><h4>Conectividade</h4><ul><li><strong>Wi-Fi:</strong> Alta largura de banda</li><li><strong>Bluetooth LE:</strong> Baixíssimo consumo</li><li><strong>LoRaWAN:</strong> Longo alcance para IoT industrial</li></ul><h4>Cloud</h4><ul><li>AWS IoT Core, Azure IoT Hub</li><li>Protocolo MQTT</li><li>Dashboards: Grafana, Node-RED</li></ul><h3>Aplicações</h3><ul><li><strong>Smart Home:</strong> Termostatos, iluminação inteligente</li><li><strong>Indústria 4.0:</strong> Manutenção preditiva</li><li><strong>Agricultura:</strong> Irrigação automática</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Internet das Coisas: Como Funciona</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Arduino + MQTT: Primeiro Projeto IoT</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: IoT na Indústria 4.0</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 create.arduino.cc/projecthub | nodered.org</p></div><h3>Referências</h3><ul class="ref-list"><li>ASHTON, Kevin. <em>That "Internet of Things" Thing</em>. RFID Journal, 2009.</li></ul>`
  },
  {
    id: 15, num: '15', cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
    title: 'Automação: Conceitos e Aplicações',
    excerpt: 'Da linha de montagem ao Python — como a automação está redefinindo o trabalho.',
    tags: ['Automação','RPA','Python','Indústria 4.0'], date: 'Jun 2025', readTime: '6 min',
    body: `<p><strong>Automação</strong> é o uso de tecnologia para executar tarefas com mínima intervenção humana.</p><h3>Tipos de Automação</h3><h4>Industrial</h4><ul><li>CLPs (Controladores Lógicos Programáveis)</li><li>Robôs industriais: ABB, KUKA</li><li>Cobots: robôs colaborativos</li></ul><h4>TI e Processos</h4><ul><li><strong>RPA:</strong> Bots que imitam ações humanas — UiPath</li><li><strong>Scripts Python:</strong> Automação de arquivos e relatórios</li><li><strong>CI/CD:</strong> GitHub Actions — deploy automático</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Automatize Sua Vida com Python</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Indústria 4.0: O Futuro da Automação</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Automação vai Roubar Empregos?</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 home-assistant.io | automatetheboringstuff.com</p></div><h3>Referências</h3><ul class="ref-list"><li>BRYNJOLFSSON, Erik; McAFEE, Andrew. <em>The Second Machine Age</em>. W.W. Norton, 2014.</li><li>SWEIGART, Al. <em>Automate the Boring Stuff with Python</em>. No Starch Press, 2019.</li></ul>`
  },
  {
    id: 16, num: '16', cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
    title: 'Projeto Desenvolvido: Sistema Multimídia',
    excerpt: 'Documentação completa do projeto prático criado durante a disciplina.',
    tags: ['Projeto','Desenvolvimento','Multimídia'], date: 'Jul 2025', readTime: '5 min',
    body: `<!-- ✏️ EDITE TUDO com os detalhes do projeto real de vocês! --><p>Como atividade integradora, desenvolvemos um projeto aplicando múltiplos conceitos da disciplina.</p><h3>Descrição do Projeto</h3><p>[Descreva o que é o projeto — o que ele faz, qual problema resolve]</p><h3>Tecnologias Utilizadas</h3><ul><li>[Liste as tecnologias que vocês usaram]</li><li>[Ex: Python, Arduino, HTML, Unity, etc.]</li></ul><h3>Funcionalidades</h3><ul><li>[Funcionalidade 1]</li><li>[Funcionalidade 2]</li></ul><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Demonstração do Projeto [Gravado pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo</div><div class="media-title">Tutorial de referência do projeto</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Apresentação do Projeto [Narração pelos autores]</div></div></div><h3>Aprendizados</h3><p>[O que o projeto ensinou? Quais foram os maiores desafios?]</p><h3>Referências</h3><ul class="ref-list"><li>[Referências usadas no projeto]</li></ul>`
  },
  {
    id: 17, num: '17', cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
    title: 'Reflexões Finais: O que Aprendemos',
    excerpt: 'Uma reflexão sobre o percurso, os temas explorados e os projetos desenvolvidos.',
    tags: ['Conclusão','Aprendizado','Semestre'], date: 'Jul 2025', readTime: '4 min',
    body: `<p>Chegamos ao final do semestre. Foi uma jornada de exploração intensa, cobrindo desde multimídia e hipermídia até VR, IA e IoT.</p><h3>O que Exploramos</h3><ul><li>📺 Fundamentos de <strong>Multimídia e Hipermídia</strong></li><li>🥽 Ecossistema de <strong>Realidade Virtual, Aumentada e Mista</strong></li><li>🔮 A ciência da <strong>Holografia</strong></li><li>🖼 <strong>Imagens Digitais</strong> e processamento</li><li>🤖 <strong>Inteligência Artificial</strong> na criação de mídia</li><li>🎮 Criação de <strong>Jogos</strong> — GDD e implementação</li><li>⚙️ <strong>IoT e Automação</strong></li></ul><h3>Principal Aprendizado</h3><p>A multimídia não é um conjunto de tecnologias isoladas — é uma <strong>linguagem</strong>. Uma forma de comunicar que integra múltiplos sentidos.</p><!-- ✏️ EDITE com suas reflexões pessoais --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Video-Resumo do Semestre [Produzido pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Reflexões Finais — Podcast dos Autores</div></div></div><div class="info-box"><p>🙏 <strong>Obrigado por acompanhar o MultimídiaLab!</strong></p></div><h3>Referências Gerais</h3><ul class="ref-list"><li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li><li>MANOVICH, Lev. <em>The Language of New Media</em>. MIT Press, 2001.</li></ul>`
  }
];
