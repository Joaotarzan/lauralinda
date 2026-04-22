const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça os autores deste blog e a proposta da disciplina de Multimídias que motivou a sua criação.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala! Seja bem-vindo ao <strong>MultimídiaLab</strong>. Esse blog nasceu basicamente como um trabalho da faculdade... mas a ideia não foi só “entregar algo e pronto”. A gente quis montar algo que realmente tivesse cara de internet, sabe? Algo que desse vontade de ler.</p>

      <h3>Os Autores</h3>
      <p>Somos dois estudantes que curtem tecnologia, mas cada um com seu jeitão. Esse blog é meio que um reflexo disso: mistura de teoria com prática e um pouco da nossa visão também.</p>

      <p><strong>Aluno 1:</strong> João Carlos — Estudante de Informática para Negócios</p>
      <p><strong>Aluno 2:</strong> Laura Conte — Estudante de Informática para Negócios</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a Disciplina</h3>
      <p>A matéria de Multimídia basicamente mostra como tudo que a gente consome hoje na internet não é só texto. É imagem, som, vídeo, interação… tudo junto. E entender isso muda totalmente a forma de criar conteúdo.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Explicações sem aquele clima de livro chato</li>
        <li>Exemplos mais próximos do mundo real</li>
        <li>Vídeos e conteúdos que a gente realmente assistiria</li>
        <li>Coisas que a gente foi aprendendo na prática</li>
        <li>Projetos feitos durante o semestre (sem enrolação)</li>
      </ul>

      <div class="info-box"><p>📌 A ideia é ir atualizando isso aqui conforme a matéria vai avançando.</p></div>

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
      <p>Quando a gente começou esse projeto, a primeira dúvida foi: “mano, por que um blog?”. Só que aí fez sentido rápido. Criar um blog é literalmente aplicar multimídia na prática.</p>

      <p>Não é só escrever texto. É misturar vídeo, imagem, áudio, link… tudo no mesmo lugar. Ou seja, você não estuda multimídia — você usa.</p>

      <h3>Por que um Blog?</h3>
      <p>Porque aqui dá pra juntar tudo. Não precisa seguir uma ordem fixa, dá pra clicar, voltar, explorar… é muito mais parecido com a internet real do que um trabalho em PDF.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Registrar o que a gente foi aprendendo ao longo do tempo</li>
        <li>Treinar criação de conteúdo de verdade (não só teoria)</li>
        <li>Melhorar a forma de explicar ideias</li>
        <li>Ter algo pronto que dá até pra usar como portfólio depois</li>
      </ul>

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
      <p>Multimídia não é só um nome bonito que professor usa. É basicamente tudo que a gente consome hoje na internet. Literalmente tudo.</p>

      <p>Pensa: você abre um site — tem texto, imagem, vídeo, botão, animação… isso tudo junto é multimídia. Não é só juntar coisa aleatória, é fazer tudo funcionar junto.</p>

      <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

      <h3>Componentes da Multimídia</h3>

      <ul>
        <li><strong>Texto:</strong> ainda é a base de tudo. Mesmo com vídeo e áudio, é o texto que organiza e explica as ideias.</li>
        <li><strong>Imagem:</strong> chama atenção na hora. Muitas vezes explica melhor que mil palavras.</li>
        <li><strong>Áudio:</strong> perfeito pra consumir conteúdo sem ficar olhando pra tela o tempo todo.</li>
        <li><strong>Vídeo:</strong> mistura tudo — imagem + som + movimento. É o mais completo.</li>
        <li><strong>Interatividade:</strong> é o que faz você participar, não só assistir.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>No fim, multimídia é isso: não é só conteúdo… é experiência.</p>
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
      <p>Se multimídia já mistura tudo, a <strong>hipermídia</strong> vai além: ela conecta tudo. Não é só conteúdo — é conteúdo com caminhos.</p>

      <p>Sabe quando você tá lendo algo e vai clicando em link atrás de link e, do nada, já tá em outro assunto totalmente diferente? Então… isso é hipermídia na prática.</p>

      <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>A Origem: O Memex</h3>
      <p>Muito antes da internet existir, um cara chamado Vannevar Bush já tava pensando nisso. Ele imaginou uma máquina chamada <strong>Memex</strong>, que conectava informações como se fosse a mente humana.</p>

      <p>Não existia tecnologia pra fazer isso na época, mas a ideia virou base pra tudo que a gente usa hoje na web.</p>

      <h3>Do Hipertexto à Hipermídia</h3>
      <p>O hipertexto conecta textos. Já a hipermídia conecta tudo: vídeo, áudio, imagem, interação… tudo linkado.</p>

      <p>Basicamente, é isso que transforma a internet num lugar explorável e não só linear.</p>

      <h3>Na prática</h3>
      <ul>
        <li>Sites com navegação por links</li>
        <li>Blogs (tipo esse aqui)</li>
        <li>Jogos com múltiplos caminhos</li>
        <li>Plataformas como Wikipedia</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>No fim das contas, a hipermídia é o que faz a internet não ser uma “linha reta”, mas sim um mapa cheio de caminhos.</p>
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
      <p>A <strong>Realidade Virtual</strong> é aquele negócio que parece coisa de filme… até você colocar um óculos VR e perceber que é real mesmo.</p>

      <p>A sensação é muito doida: você sabe que tá no seu quarto, mas seu cérebro começa a acreditar que tá em outro lugar.</p>

      <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Hardware</h3>
      <p>Os dispositivos são o que fazem tudo acontecer. Sem eles, não tem imersão nenhuma.</p>

      <ul>
        <li><strong>Meta Quest 3:</strong> mais acessível, não precisa de PC</li>
        <li><strong>PS VR2:</strong> focado em console</li>
        <li><strong>Valve Index:</strong> qualidade absurda</li>
        <li><strong>Apple Vision Pro:</strong> outro nível (e outro preço também)</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Software</h3>
      <p>Sem software, o hardware não faz nada. É aqui que os mundos são criados.</p>

      <ul>
        <li><strong>Unity:</strong> mais usado</li>
        <li><strong>Unreal:</strong> gráficos insanos</li>
        <li><strong>WebXR:</strong> VR direto no navegador</li>
      </ul>

      <p>VR não é só jogo. Já tem uso em medicina, treinamento e até arquitetura.</p>

      <p>E sendo bem sincero… isso aqui ainda tá só começando.</p>
    `
  },

  {
    id: 6, num: '06',
    cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
    title: 'Realidade Aumentada: Hardware e Software',
    excerpt: 'Pokémon GO foi só o começo.',
    tags: ['AR','ARKit','ARCore','WebAR'],
    date: 'Abr 2025', readTime: '7 min',
    body: `
      <p>A <strong>Realidade Aumentada</strong> é tipo um “upgrade” do mundo real. Você continua vendo tudo ao seu redor, mas com elementos digitais por cima.</p>

      <p>Se você já usou filtro de Instagram ou jogou Pokémon GO, você já usou AR.</p>

      <img src="https://insidetecnologia.com/site/wp-content/uploads/2024/05/A-futuristic-scene-showcasing-augmented-reality-in-action.-The-image-depicts-a-user-interacting-with-virtual-3D-objects-overlaid-on-the-real-world-via.webp" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Hardware</h3>
      <ul>
        <li>Celular (o mais comum)</li>
        <li>HoloLens</li>
        <li>Magic Leap</li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>ARKit</li>
        <li>ARCore</li>
        <li>WebAR</li>
        <li>Spark AR</li>
      </ul>

      <p>O mais interessante da AR é que ela não te tira da realidade — ela melhora ela.</p>

      <p>Na medicina, isso ajuda cirurgias. No varejo, ajuda você a testar produtos. E na educação… deixa tudo muito mais visual.</p>

      <img src="../js/img/cubo.png" style="width:100%; border-radius:10px; margin:15px 0;">
    `
  },

  {
    id: 7, num: '07',
    cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
    title: 'Realidade Mista: Hardware e Software',
    excerpt: 'Quando o virtual e o físico coexistem.',
    tags: ['MR','Realidade Mista','Metaverso'],
    date: 'Abr 2025', readTime: '6 min',
    body: `
      <p>A <strong>Realidade Mista</strong> é tipo o meio termo entre VR e AR… só que mais avançado.</p>

      <p>A diferença aqui é que os objetos digitais não só aparecem — eles interagem com o mundo real.</p>

      <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Imagina um objeto virtual apoiado na sua mesa de verdade… e você podendo mexer nele. É isso.</p>

      <h3>Dispositivos</h3>
      <ul>
        <li>HoloLens</li>
        <li>Vision Pro</li>
        <li>Magic Leap</li>
      </ul>

      <p>Isso já tá sendo usado em indústria, manutenção e treinamento.</p>

      <p>Não é tão popular ainda… mas quando ficar, vai mudar muita coisa.</p>
    `
  },

  {
    id: 8, num: '08',
    cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
    title: 'Holografia: Hardware e Software',
    excerpt: 'De Star Wars à realidade.',
    tags: ['Holografia','Holograma'],
    date: 'Abr 2025', readTime: '7 min',
    body: `
      <p>Holograma parece coisa de filme… mas já existe há muito tempo.</p>

      <p>A ideia é criar uma imagem 3D que você pode ver de vários ângulos, como se fosse real.</p>

      <img src="../js/img/aguaviva.jpeg" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Isso funciona usando luz e interferência de laser — parece complexo (e é), mas o resultado é absurdo.</p>

      <h3>Aplicações</h3>
      <ul>
        <li>Medicina</li>
        <li>Shows</li>
        <li>Educação</li>
      </ul>

      <img src="../js/img/holograma-medicina.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Hoje ainda não é algo comum… mas já tá sendo usado em várias áreas importantes.</p>

      <p>E provavelmente vai ficar cada vez mais presente.</p>
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
<p>Se você já mexeu com qualquer coisa na internet, você já lidou com formato de imagem — mesmo sem perceber.</p>

<p>À primeira vista parece tudo igual… mas não é. Cada formato tem um propósito específico, e usar o formato errado pode ferrar qualidade ou desempenho.</p>

<img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Imagens Rasterizadas</h3>
<p>Essas são as mais comuns. São feitas de pixels, ou seja, se você aumentar demais… já era, vai perder qualidade.</p>

<h4>JPEG</h4>
<ul>
<li>Mais leve</li>
<li>Ideal pra fotos</li>
<li>Perde qualidade (mas quase não dá pra perceber)</li>
</ul>

<h4>PNG</h4>
<ul>
<li>Qualidade alta</li>
<li>Tem transparência</li>
<li>Mais pesado</li>
</ul>

<h4>WebP</h4>
<ul>
<li>Mais moderno</li>
<li>Mais leve que os dois</li>
<li>Perfeito pra web</li>
</ul>

<img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Vetorial (SVG)</h3>
<p>Aqui muda tudo. Não são pixels, são cálculos. Isso significa que você pode aumentar o quanto quiser que não perde qualidade.</p>

<ul>
<li>Ideal pra logos</li>
<li>Leve</li>
<li>Escala infinita</li>
</ul>

<p>No fim, não existe “melhor formato”… existe o formato certo pra cada situação.</p>
`
  },

  {
    id: 10, num: '10',
    cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Filtros, segmentação e visão computacional.',
    tags: ['Processamento','OpenCV','Python'],
    date: 'Mai 2025', readTime: '7 min',
    body: `
<p>Processamento de imagem é basicamente ensinar o computador a “enxergar”.</p>

<p>Não no sentido humano… mas reconhecer padrões, identificar objetos e extrair informação.</p>

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Filtros</h3>
<ul>
<li><strong>Blur:</strong> suaviza a imagem</li>
<li><strong>Sharpen:</strong> deixa mais nítido</li>
<li><strong>Bordas:</strong> identifica contornos</li>
</ul>

<h3>Segmentação</h3>
<p>Aqui o sistema separa partes da imagem. Tipo identificar um objeto no meio do fundo.</p>

<p>Isso é muito usado em medicina, carros autônomos e reconhecimento facial.</p>

<img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Ferramentas</h3>
<ul>
<li>OpenCV</li>
<li>Pillow</li>
<li>scikit-image</li>
</ul>

<p>Hoje isso tá em tudo: desde câmera de celular até IA pesada.</p>
`
  },

  {
    id: 11, num: '11',
    cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA criando conteúdo em escala absurda.',
    tags: ['IA','Machine Learning','Deep Learning'],
    date: 'Mai 2025', readTime: '8 min',
    body: `
<p>A IA mudou completamente a forma de criar conteúdo. Não é mais só ferramenta — agora ela cria junto (ou até sozinha).</p>

<h3>IA Generativa</h3>
<p>Hoje você consegue gerar imagem, texto, música e até vídeo com IA.</p>

<ul>
<li>Imagem: Midjourney, DALL-E</li>
<li>Texto: GPT</li>
<li>Áudio: ElevenLabs</li>
<li>Vídeo: Runway</li>
</ul>

<h3>Aplicações</h3>
<ul>
<li>Upscaling de imagem</li>
<li>Restauração de fotos antigas</li>
<li>Geração de conteúdo</li>
</ul>

<p>Isso abre muitas possibilidades… mas também levanta várias discussões (tipo deepfake).</p>

<p>A real é: quem aprende a usar isso agora sai muito na frente.</p>
`
  },

  {
    id: 12, num: '12',
    cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'O planejamento por trás de qualquer jogo.',
    tags: ['Game Design','GDD'],
    date: 'Jun 2025', readTime: '7 min',
    body: `
<p>Antes de qualquer jogo existir, existe um documento que organiza tudo: o GDD.</p>

<p>É tipo o “plano mestre” do jogo.</p>

<h3>O que tem dentro?</h3>

<h4>Visão geral</h4>
<ul>
<li>Ideia do jogo</li>
<li>Público</li>
<li>Plataforma</li>
</ul>

<h4>Mecânicas</h4>
<ul>
<li>Como joga</li>
<li>Objetivo</li>
<li>Regras</li>
</ul>

<h4>Arte e Som</h4>
<ul>
<li>Estilo visual</li>
<li>Trilha sonora</li>
</ul>

<p>Sem isso, o projeto vira bagunça rápido.</p>

<p>Com isso, todo mundo sabe o que tá fazendo.</p>
`
  },

  {
    id: 13, num: '13',
    cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
    title: 'Jogo Desenvolvido: Projeto da Disciplina',
    excerpt: 'Nosso jogo na prática.',
    tags: ['Jogo','Projeto'],
    date: 'Jun 2025', readTime: '6 min',
    body: `
<p>Essa foi a parte mais prática de tudo: desenvolver um jogo de verdade.</p>

<h3>Sobre o jogo</h3>
<p>A ideia foi aplicar tudo que a gente viu — desde planejamento até execução.</p>

<h3>Desenvolvimento</h3>
<p>No começo parece simples… mas rapidamente surgem vários problemas.</p>

<p>Bug, lógica, mecânica, ajuste… é um processo constante.</p>

<p>Mas é justamente isso que faz aprender de verdade.</p>

<h3>Aprendizado</h3>
<ul>
<li>Organização é tudo</li>
<li>Testar o tempo todo</li>
<li>Errar faz parte</li>
</ul>

<p>No final, ver o jogo rodando compensa tudo.</p>
`
  },
     {
    id: 14, num: '14',
    cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
    title: 'Internet das Coisas (IoT)',
    excerpt: 'Casas inteligentes, cidades conectadas — entenda a infraestrutura que conecta tudo.',
    tags: ['IoT','Arduino','MQTT','Sensores'],
    date: 'Jun 2025', readTime: '7 min',
    body: `
<p>A <strong>Internet das Coisas</strong> é basicamente quando objetos comuns começam a ficar “inteligentes”.</p>

<p>Tipo lâmpada que liga pelo celular, sensor que mede temperatura sozinho, ou até geladeira conectada.</p>

<h3>Como funciona</h3>
<p>Não é mágica — é um conjunto de partes trabalhando juntas.</p>

<h4>Dispositivos</h4>
<ul>
<li>Sensores (temperatura, presença, etc.)</li>
<li>Microcontroladores (Arduino, ESP32)</li>
<li>Computadores pequenos (Raspberry Pi)</li>
</ul>

<h4>Conexão</h4>
<ul>
<li>Wi-Fi</li>
<li>Bluetooth</li>
<li>LoRa</li>
</ul>

<h4>Nuvem</h4>
<ul>
<li>Armazena dados</li>
<li>Processa informações</li>
<li>Gera dashboards</li>
</ul>

<p>Ou seja: coleta → envia → processa → mostra.</p>

<h3>Onde isso aparece</h3>
<ul>
<li>Casa inteligente</li>
<li>Indústria</li>
<li>Agricultura</li>
</ul>

<p>IoT parece simples… mas por trás tem muita coisa rolando.</p>
`
  },

  {
    id: 15, num: '15',
    cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
    title: 'Automação: Conceitos e Aplicações',
    excerpt: 'Como a automação está mudando tudo.',
    tags: ['Automação','RPA','Python'],
    date: 'Jun 2025', readTime: '6 min',
    body: `
<p>Automação é basicamente fazer máquina trabalhar por você.</p>

<p>Desde fábrica até script em Python… tudo entra nisso.</p>

<h3>Tipos</h3>

<h4>Industrial</h4>
<ul>
<li>Robôs</li>
<li>CLPs</li>
<li>Linhas automatizadas</li>
</ul>

<h4>TI</h4>
<ul>
<li>RPA</li>
<li>Scripts</li>
<li>Deploy automático</li>
</ul>

<p>Hoje, quem sabe automatizar economiza tempo absurdo.</p>

<p>E sinceramente… ninguém quer ficar fazendo tarefa repetitiva pra sempre.</p>
`
  },

  {
    id: 16, num: '16',
    cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
    title: 'Projeto Desenvolvido: Sistema Multimídia',
    excerpt: 'Aplicando tudo na prática.',
    tags: ['Projeto','Desenvolvimento'],
    date: 'Jul 2025', readTime: '5 min',
    body: `
<p>Esse projeto foi onde tudo começou a fazer sentido de verdade.</p>

<p>Até então era teoria… aqui virou prática.</p>

<h3>Sobre</h3>
<p>A ideia foi criar um sistema que juntasse vários conceitos de multimídia em um só lugar.</p>

<h3>Desenvolvimento</h3>
<p>No começo parecia tranquilo… mas conforme foi avançando, foi ficando mais complexo.</p>

<p>Integração, interface, lógica… tudo começou a pesar.</p>

<h3>Aprendizados</h3>
<ul>
<li>Planejamento faz diferença</li>
<li>Testar evita dor de cabeça</li>
<li>Errar faz parte do processo</li>
</ul>

<p>No fim, ver tudo funcionando foi a melhor parte.</p>
`
  },

  {
    id: 17, num: '17',
    cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
    title: 'Reflexões Finais: O que Aprendemos',
    excerpt: 'Uma reflexão sobre o percurso.',
    tags: ['Conclusão','Aprendizado'],
    date: 'Jul 2025', readTime: '4 min',
    body: `
<p>Chegando no final, dá pra perceber o quanto coisa foi vista.</p>

<p>No começo parecia só mais uma matéria… mas acabou sendo bem mais completo do que esperado.</p>

<h3>Resumo geral</h3>
<ul>
<li>Multimídia e hipermídia</li>
<li>VR, AR e MR</li>
<li>Imagem e processamento</li>
<li>IA</li>
<li>Jogos</li>
<li>IoT e automação</li>
</ul>

<p>Mas o principal não foi só o conteúdo… foi entender como tudo se conecta.</p>

<p>Hoje é difícil separar tecnologia — tudo conversa entre si.</p>

<div class="info-box">
<p>🙏 Valeu por acompanhar o MultimídiaLab!</p>
</div>

<p>E provavelmente… isso aqui ainda é só o começo.</p>
`
  }
];
