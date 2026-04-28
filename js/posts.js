const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça os autores deste blog e a proposta da disciplina de Multimídias que motivou a sua criação.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2026', readTime: '3 min',
    body: `
      <p>Fala! Seja bem-vindo ao <strong>MultimídiaLab</strong>. Esse blog nasceu basicamente como um trabalho da faculdade... mas a ideia não foi só "entregar algo e pronto". A gente quis montar algo que realmente tivesse cara de internet, sabe? Algo que desse vontade de ler — não aquele PDF genérico que ninguém abre depois que entrega.</p>

      <h3>Os Autores</h3>
      <p>Somos dois estudantes do curso de <strong>Informática para Negócios</strong> que curtem tecnologia, mas cada um com seu jeitão. Um mais ligado na parte técnica, o outro mais no lado de comunicação e conteúdo. Esse blog é meio que um reflexo disso: mistura de teoria com prática e um pouco da nossa visão também.</p>

      <p><strong>Aluno 1:</strong> João Carlos — Estudante de Informática para Negócios</p>
      <p><strong>Aluno 2:</strong> Laura Conte — Estudante de Informática para Negócios</p>

      <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

      <h3>Sobre a Disciplina</h3>
      <p>A matéria de <strong>Multimídia</strong> é daquelas que você entra achando que vai ser "sei lá, coisa de design" e sai com a cabeça virada. Ela mostra como tudo que a gente consome hoje na internet não é só texto. É imagem, som, vídeo, interação… tudo junto, construído com intenção. E entender isso muda totalmente a forma de criar conteúdo — e de consumir também.</p>

      <p>A disciplina cobre desde fundamentos teóricos (história da multimídia, formatos digitais, hipermídia) até projetos práticos como desenvolvimento de jogos, sistemas IoT e realidade estendida. É bastante coisa pra um semestre, mas faz sentido quando você vê o quadro completo.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Explicações sem aquele clima de livro chato — direto ao ponto</li>
        <li>Exemplos mais próximos do mundo real e do cotidiano</li>
        <li>Vídeos e conteúdos que a gente realmente assistiria (nada de vídeo institucional de 40 minutos)</li>
        <li>Coisas que a gente foi aprendendo na prática, inclusive os erros</li>
        <li>Projetos feitos durante o semestre com reflexão honesta sobre o processo</li>
      </ul>

      <div class="info-box"><p>📌 A ideia é ir atualizando isso aqui conforme a matéria vai avançando — então se você tiver voltando depois de um tempo, pode ter post novo por aí.</p></div>

      
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
      <p>Quando a gente começou esse projeto, a primeira dúvida foi: "mano, por que um blog?". Podia ser um PDF, uma apresentação, um vídeo... mas aí fez sentido rápido. Criar um blog é literalmente aplicar multimídia na prática — você não estuda o conceito, você executa ele.</p>

      <p>Não é só escrever texto. É misturar vídeo, imagem, áudio, link, navegação… tudo no mesmo lugar, pensando em quem vai ler. Ou seja: você não aprende sobre multimídia estudando sobre multimídia — você aprende <em>fazendo</em> multimídia.</p>

      <h3>Por que um Blog?</h3>
      <p>Porque aqui dá pra juntar tudo sem ficar preso em uma estrutura linear. Não precisa seguir uma ordem fixa, dá pra clicar, voltar, explorar por categoria, pesquisar por tag… é muito mais parecido com a internet real do que um trabalho em PDF que ninguém vai abrir de novo depois da entrega.</p>

      <p>Além disso, blog tem memória. Um PDF você entrega e some. Um blog fica, pode ser atualizado, pode ser lido por outras pessoas. É um formato que respeita o conteúdo que você produz.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Registrar o que a gente foi aprendendo ao longo do semestre, com contexto e honestidade</li>
        <li>Treinar criação de conteúdo de verdade — não só resumir teoria, mas explicar com a própria voz</li>
        <li>Melhorar a forma de comunicar ideias técnicas de um jeito acessível</li>
        <li>Ter algo pronto que dá até pra usar como portfólio depois, sem precisar reescrever tudo do zero</li>
      </ul>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo 🎬</div><div class="media-title">O que é Comunicação Digital?</div><div class="media-src">https://youtu.be/nKPyvZSfNTc?si=luQ7ua0opY3hKyKH</div></div></div>

      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo 🎬</div><div class="media-title">Blogs e a Revolução da Web 2.0</div><div class="media-src">https://youtu.be/ZEShuc4knkc?si=PeJ_93J0yVFv-TV5</div></div></div>

      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio 🔊 </div><div class="media-title">Podcast: Criação de Conteúdo Digital</div><div class="media-src">https://youtu.be/USWPIBqwI8c?si=a28uMIymhdW2agHA</div></div></div>
`  },

  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia: Conceito e Aplicações',
    excerpt: 'O que é multimídia de verdade? Explore sua definição, história e como ela permeia absolutamente tudo no mundo digital.',
    tags: ['Multimídia','Mídia','Digital','História'],
    date: 'Mar 2026', readTime: '6 min',
    body: `
      <p>Multimídia não é só um nome bonito que professor usa pra nomear a disciplina. É basicamente tudo que a gente consome hoje na internet. Literalmente <em>tudo</em>.</p>

      <p>Pensa: você abre qualquer site — tem texto, imagem, vídeo, botão clicável, animação… isso tudo junto é multimídia. Não é só jogar coisa aleatória numa página, é fazer com que texto, imagem, som e interação trabalhem juntos pra comunicar uma ideia de forma mais eficiente do que qualquer um desses elementos faria sozinho.</p>


      <h3>Um pouco de história</h3>
      <p>O termo "multimídia" ficou popular nos anos 90, com o boom dos CD-ROMs. Era a época em que enciclopédias vinham em disco e você ficava impressionado de ver uma foto e clicar pra ouvir um som. Parece pouco hoje, mas pra época era revolucionário.</p>

      <p>Com a internet, o conceito explodiu. A web virou a maior plataforma multimídia da história — e continua evoluindo. O que antes exigia equipamento caro e especializado, hoje roda no navegador do celular.</p>

      <h3>Componentes da Multimídia</h3>

      <ul>
        <li><strong>Texto:</strong> ainda é a base de tudo. Mesmo com vídeo e áudio dominando, é o texto que organiza, indexa e explica as ideias. SEO existe por causa disso.</li>
        <li><strong>Imagem:</strong> chama atenção na hora. Processa mais rápido que texto — o cérebro humano processa imagem em cerca de 13 milissegundos. Não à toa, conteúdo com imagem tem muito mais engajamento.</li>
        <li><strong>Áudio:</strong> perfeito pra consumir conteúdo sem ficar olhando pra tela. O boom dos podcasts mostrou que áudio tem um mercado enorme que estava sendo subestimado.</li>
        <li><strong>Vídeo:</strong> mistura tudo — imagem + som + movimento. É o formato mais completo e, hoje, o mais consumido na internet.</li>
        <li><strong>Interatividade:</strong> é o que separa multimídia de TV. É o que faz você participar, não só assistir. Sem interatividade, é só um vídeo sofisticado.</li>
      </ul>


      <h3>Multimídia linear vs. não-linear</h3>
      <p>Uma distinção importante que a disciplina trouxe foi essa: multimídia <strong>linear</strong> é quando o usuário não tem controle sobre o fluxo (tipo um vídeo normal). Já a <strong>não-linear</strong> é quando ele escolhe o caminho — tipo esse blog, um jogo ou um e-learning interativo.</p>

      <p>No fim, multimídia é isso: não é só conteúdo… é <em>experiência</em>. E quem cria conteúdo hoje, seja pra empresa ou pra estudo, precisa pensar nessa lógica.</p>
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
      <p>Se multimídia já mistura tudo, a <strong>hipermídia</strong> vai além: ela <em>conecta</em> tudo. Não é só conteúdo — é conteúdo com caminhos. É a estrutura que transforma a internet num labirinto explorável em vez de uma sequência linear.</p>

      <p>Sabe quando você tá lendo algo, vai clicando em link atrás de link, e do nada já tá em outro assunto completamente diferente do que você começou? Então… isso é hipermídia na prática. E acontece com todo mundo, todo dia.</p>

      <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>A Origem: O Memex</h3>
      <p>Muito antes da internet existir, em 1945, um cientista chamado <strong>Vannevar Bush</strong> publicou um artigo chamado "As We May Think" na revista The Atlantic. Nele, ele imaginou uma máquina chamada <strong>Memex</strong> — um dispositivo que armazenaria livros, registros e comunicações, e permitiria que o usuário navegasse entre eles de forma associativa, como a mente humana funciona.</p>

      <p>Não existia tecnologia pra fazer isso na época, mas a ideia foi tão poderosa que virou a base teórica de tudo que a gente usa hoje na web. Ted Nelson, nos anos 60, foi mais longe e criou o termo <strong>hipertexto</strong> — texto com links que conectam outros textos. Tim Berners-Lee, em 1989, transformou isso na World Wide Web.</p>

      <h3>Do Hipertexto à Hipermídia</h3>
      <p>O hipertexto conecta textos. A hipermídia conecta tudo: vídeo, áudio, imagem, interação, dados… tudo linkado e navegável.</p>

      <p>A diferença parece pequena, mas é enorme na prática. Um livro digital com links já é hipertexto. Uma plataforma como YouTube, onde você assiste um vídeo, clica numa recomendação, vai pra outro canal, encontra uma playlist e acaba aprendendo algo que não planejava — isso é hipermídia.</p>

      <h3>Por que isso importa pra quem cria conteúdo?</h3>
      <p>Porque a hipermídia muda a forma de pensar a estrutura de qualquer coisa que você cria. Um blog não é uma sequência de posts — é uma rede. Cada post pode linkear pra outro, cada tag conecta conteúdos relacionados, cada imagem pode ter um link. Quando você pensa assim, cria coisas melhores.</p>

      <h3>Na prática</h3>
      <ul>
        <li>Sites com navegação por links internos e externos</li>
        <li>Blogs com sistema de categorias e tags (tipo esse aqui)</li>
        <li>Jogos com múltiplos caminhos e narrativas ramificadas</li>
        <li>Wikipedia — o exemplo mais claro de hipermídia em escala</li>
        <li>E-learning interativo com caminhos personalizados por nível</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>No fim das contas, a hipermídia é o que faz a internet não ser uma "linha reta", mas um mapa cheio de caminhos — e é justamente isso que a torna tão viciante e tão poderosa ao mesmo tempo.</p>
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
      <p>A <strong>Realidade Virtual</strong> é aquele negócio que parece coisa de filme… até você colocar um óculos VR e perceber que é real mesmo. A sensação é muito estranha no começo: seu cérebro sabe que você tá parado no seu quarto, mas os olhos estão mandando um sinal completamente diferente. E em poucos segundos, o cérebro começa a acreditar no que tá vendo.</p>

      <p>Esse fenômeno tem nome: <strong>presença</strong>. É a sensação subjetiva de "estar lá". E é o objetivo central de qualquer experiência de VR bem feita.</p>

      <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Como funciona tecnicamente</h3>
      <p>VR depende de alguns elementos críticos pra funcionar bem. O mais importante é o <strong>Field of View (FoV)</strong> — quanto do seu campo visual o dispositivo cobre. Humanos têm FoV de ~200°, e os melhores HMDs chegam a ~110°. Quanto menor o FoV, mais você fica "olhando por um binóculo" em vez de estar "dentro" da cena.</p>

      <p>Outro fator crucial é o <strong>refresh rate</strong>. Abaixo de 72Hz, boa parte das pessoas sente enjoo (motion sickness). Os dispositivos mais avançados chegam a 120Hz ou mais justamente pra eliminar esse problema.</p>

      <h3>Hardware — o que tá no mercado</h3>
      <p>Os dispositivos são o que fazem tudo acontecer. Sem eles, não tem imersão nenhuma. O mercado se divide basicamente em duas categorias: standalone (funciona sozinho) e PC-tethered (precisa de computador potente).</p>

      <ul>
        <li><strong>Meta Quest 3:</strong> o mais acessível e popular. Standalone, não precisa de PC. Boa resolução, tracking de mão nativo. Ótima entrada pra quem quer experimentar VR sem gastar muito.</li>
        <li><strong>PS VR2:</strong> focado em console, exige PS5. Tem eye tracking e feedback háptico nos controles — detalhe que faz diferença na imersão.</li>
        <li><strong>Valve Index:</strong> qualidade absurda de tracking e áudio. Padrão de referência pra quem leva VR a sério. Mas é caro e exige PC potente.</li>
        <li><strong>Apple Vision Pro:</strong> outro nível de qualidade de display — e outro nível de preço também. Mais focado em Mixed Reality do que VR pura.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Software — onde os mundos são criados</h3>
      <p>Sem software, o hardware não passa de um visor caro. É aqui que os mundos são construídos, otimizados e distribuídos.</p>

      <ul>
        <li><strong>Unity:</strong> o mais usado pra VR. Tem suporte a praticamente todos os dispositivos, comunidade enorme e muita documentação. Ideal pra quem tá começando.</li>
        <li><strong>Unreal Engine:</strong> gráficos de outro mundo. Mais complexo de aprender, mas quando você vê o resultado… compensa. Muito usado em visualizações arquitetônicas e simulações.</li>
        <li><strong>WebXR:</strong> VR direto no navegador, sem instalar nada. Ainda com limitações técnicas, mas evolui rápido. É o futuro da VR acessível.</li>
      </ul>

      <h3>Além do entretenimento</h3>
      <p>VR não é só jogo. Já tem uso consolidado em medicina (simulação cirúrgica, tratamento de fobias com terapia de exposição), treinamento industrial (ambientes perigosos simulados), arquitetura (cliente "visita" o imóvel antes de construir) e educação (aula dentro de uma célula, de um motor, de um evento histórico).</p>

      <p>E sendo bem sincero… isso aqui ainda tá só começando. Quando os dispositivos ficarem mais leves e baratos, vai mudar muita coisa.</p>
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
      <p>A <strong>Realidade Aumentada</strong> é tipo um "upgrade" do mundo real. Você continua vendo tudo ao seu redor, mas com elementos digitais sobrepostos por cima — de forma que pareçam pertencer àquele espaço.</p>

      <p>Se você já usou filtro de Instagram (aqueles que colocam óculos ou orelhinhas no seu rosto), jogou Pokémon GO ou usou o IKEA Place pra ver como um móvel ficaria na sua sala, você já usou AR. E provavelmente nem parou pra pensar nisso.</p>

      <img src="https://insidetecnologia.com/site/wp-content/uploads/2024/05/A-futuristic-scene-showcasing-augmented-reality-in-action.-The-image-depicts-a-user-interacting-with-virtual-3D-objects-overlaid-on-the-real-world-via.webp" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>A diferença essencial em relação à VR</h3>
      <p>Na VR, você substitui a realidade. Na AR, você <em>complementa</em> ela. Isso muda completamente o contexto de uso. AR não exige isolamento — você pode usá-la em movimento, no trabalho, na rua. Isso torna a barreira de adoção muito menor.</p>

      <p>A principal dificuldade técnica da AR é o <strong>tracking</strong>: o sistema precisa entender o ambiente em tempo real pra posicionar os objetos digitais de forma convincente. Se o objeto "desliza" pela superfície ou não acompanha bem o movimento da câmera, a ilusão quebra.</p>

      <h3>Hardware</h3>
      <ul>
        <li><strong>Celular:</strong> o hardware mais democratizado. Com câmera traseira e giroscópio, praticamente qualquer smartphone moderno já suporta AR básica.</li>
        <li><strong>HoloLens (Microsoft):</strong> óculos de AR voltados pra uso corporativo e industrial. Permite trabalhar de mãos livres com sobreposição de informações.</li>
        <li><strong>Magic Leap:</strong> mais focado em enterprise também. Já teve versões mais ambiciosas; hoje é mais nicho.</li>
      </ul>

      <h3>Software e SDKs</h3>
      <ul>
        <li><strong>ARKit (Apple):</strong> SDK nativo do iOS. Muito bem integrado ao hardware da Apple — tracking e iluminação dinâmica são o diferencial.</li>
        <li><strong>ARCore (Google):</strong> equivalente da Apple pro Android. Funciona na maioria dos dispositivos Android modernos.</li>
        <li><strong>WebAR:</strong> AR no navegador, sem precisar instalar app. Evolui bem com a API WebXR.</li>
        <li><strong>Spark AR (Meta):</strong> plataforma de criação de filtros pra Instagram e Facebook. Acessível até pra quem não sabe programar.</li>
      </ul>

      <h3>Aplicações que já fazem sentido hoje</h3>
      <p>O mais interessante da AR é que ela não te tira da realidade — ela melhora ela. E isso abre espaço pra aplicações muito práticas:</p>

      <ul>
        <li><strong>Medicina:</strong> cirurgiões vendo estruturas anatômicas sobrepostas durante procedimentos</li>
        <li><strong>Varejo:</strong> testar roupa, óculos ou maquiagem virtualmente antes de comprar</li>
        <li><strong>Educação:</strong> visualizar sistemas complexos (célula, átomo, mapa) em 3D na mesa da sala de aula</li>
        <li><strong>Manutenção industrial:</strong> técnico vê instruções sobrepostas na máquina enquanto faz o reparo</li>
      </ul>

      <img src="../js/img/cubo.png" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>AR ainda não chegou no mainstream de hardware (tipo todo mundo usando óculos AR no dia a dia), mas no celular já é realidade — e bem presente.</p>
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
      <p>A <strong>Realidade Mista</strong> é o ponto onde VR e AR se encontram — mas com um detalhe que muda tudo: os objetos digitais não só aparecem no mundo real, eles <em>interagem</em> com ele.</p>

      <p>Na AR comum, um objeto 3D fica "colado" numa superfície, mas sem relação real com o ambiente. Na MR, o sistema entende a geometria do espaço — paredes, mesas, objetos — e os elementos digitais respondem a isso. Um objeto virtual pode ficar atrás de uma cadeira real. Pode ser ocluído por uma parede. Pode rolar por uma mesa e cair no chão.</p>

      <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>O que torna isso diferente</h3>
      <p>A chave é o <strong>mapeamento espacial</strong>. Os dispositivos de MR usam câmeras de profundidade e sensores pra construir um modelo 3D do ambiente em tempo real. É isso que permite que o digital e o físico coexistam de forma convincente.</p>

      <p>Imagina um objeto virtual apoiado na sua mesa de verdade, com sombra correta e sendo ocluído pelos seus livros reais. Não é AR simples — é uma fusão dos dois mundos.</p>

      <h3>Dispositivos</h3>
      <ul>
        <li><strong>HoloLens 2 (Microsoft):</strong> referência no mercado corporativo. Mapeamento espacial preciso, interação por gestos e voz.</li>
        <li><strong>Apple Vision Pro:</strong> o mais avançado disponível hoje. Alterna entre VR total e passthrough em tempo real com qualidade impressionante.</li>
        <li><strong>Magic Leap 2:</strong> focado em enterprise, com bom desempenho em ambientes industriais.</li>
      </ul>

      <h3>Onde já é usado</h3>
      <p>MR não é hype sem aplicação — ela já tem casos de uso reais e funcionando:</p>
      <ul>
        <li><strong>Indústria:</strong> montagem guiada passo a passo com instruções sobrepostas diretamente na peça</li>
        <li><strong>Medicina:</strong> planejamento cirúrgico com modelo 3D do paciente sobrepostos a exames reais</li>
        <li><strong>Treinamento:</strong> simulação de situações de risco sem risco real</li>
        <li><strong>Arquitetura:</strong> visualização de projeto em escala real no terreno antes de construir</li>
      </ul>

      <p>Não é popular ainda no mercado consumidor — o preço e a complexidade dos dispositivos ainda limitam. Mas quando os óculos de MR forem tão comuns quanto AirPods, vai mudar bastante coisa no dia a dia.</p>
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
      <p>Holograma parece coisa de filme de ficção científica — e por muito tempo, era exatamente isso. Mas a holografia existe como tecnologia desde os anos 60, desenvolvida pelo físico Dennis Gabor (que ganhou o Nobel por isso em 1971). O que mudou é que agora ela começou a sair do laboratório.</p>

      <p>A ideia central é criar uma imagem 3D que você pode ver de vários ângulos, como se o objeto estivesse realmente ali no espaço — sem precisar de óculos especiais.</p>

      <img src="../js/img/aguaviva.jpeg" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Como funciona</h3>
      <p>A holografia clássica funciona usando interferência de luz laser. Dois feixes de laser — um de referência e um que reflete no objeto — criam um padrão de interferência que é gravado em uma placa fotossensível. Quando iluminado depois, esse padrão reconstrói a imagem 3D.</p>

      <p>Parece complexo (e é), mas o resultado é impressionante: você vira a cabeça e a perspectiva muda, como com um objeto real.</p>

      <h3>Holografia moderna: além do laser</h3>
      <p>Hoje existem abordagens diferentes pra criar efeitos holográficos:</p>
      <ul>
        <li><strong>Pepper's Ghost:</strong> técnica com reflexo em vidro transparente. É o que faz o "fantasma" aparecer no palco em shows. Simples, mas eficaz — foi usada no show póstumo do Tupac em 2012.</li>
        <li><strong>Displays volumétricos:</strong> criam imagens em 3D real no espaço, usando pontos de luz em movimento muito rápido (voxels). Ainda em desenvolvimento.</li>
        <li><strong>HoloLens/MR:</strong> tecnicamente não é holografia pura, mas é a versão mais acessível e utilizável do conceito hoje.</li>
      </ul>

      <h3>Aplicações</h3>
      <ul>
        <li><strong>Medicina:</strong> visualização de órgãos e estruturas anatômicas em 3D pra planejamento cirúrgico e ensino</li>
        <li><strong>Shows e entretenimento:</strong> apresentações de artistas falecidos, efeitos especiais em palco</li>
        <li><strong>Educação:</strong> objetos complexos (moléculas, sistemas solares, mecanismos) em 3D explorável</li>
        <li><strong>Varejo:</strong> exibição de produtos sem protótipo físico</li>
      </ul>

      <img src="../js/img/holograma-medicina.jpg" style="width:100%; border-radius:10px; margin:15px 0;">

      <p>Hoje ainda não é algo comum no dia a dia — o custo e a complexidade técnica ainda são altos. Mas a trajetória é clara: cada ano fica mais acessível, mais preciso, mais presente. É uma das tecnologias que vale ficar de olho.</p>
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
      <p>Se você já mexeu com qualquer coisa na internet, você já lidou com formato de imagem — mesmo sem perceber. Mas quando você começa a trabalhar com desenvolvimento web ou design, essa escolha começa a importar muito.</p>

      <p>À primeira vista parece tudo igual: "é uma foto, tanto faz". Mas não é. Cada formato tem um propósito específico, e usar o errado pode afetar qualidade, tamanho de arquivo, velocidade de carregamento e até SEO do site.</p>

      <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Imagens Rasterizadas</h3>
      <p>As rasterizadas são compostas por pixels — uma grade de pontos coloridos. Quanto mais pixels, mais detalhada a imagem. O problema: se você aumentar além da resolução original, a imagem fica "pixelada". Cada pixel é esticado e o resultado é aquela aparência borrada que todo mundo já viu.</p>

      <h4>JPEG (.jpg)</h4>
      <ul>
        <li>Compressão com perda (lossy) — descarta informação que o olho humano mal percebe</li>
        <li>Ideal pra fotografias e imagens com muitas variações de cor</li>
        <li>Não suporta transparência</li>
        <li>Quanto mais você salva, mais qualidade perde (cuidado com "salvar cópia da cópia")</li>
      </ul>

      <h4>PNG (.png)</h4>
      <ul>
        <li>Compressão sem perda (lossless) — mantém todos os dados da imagem original</li>
        <li>Suporta transparência (canal alpha) — essencial pra logos sobre fundos variados</li>
        <li>Mais pesado que JPEG, mas não perde qualidade ao salvar</li>
        <li>Melhor pra screenshots, ícones, ilustrações com bordas definidas</li>
      </ul>

      <h4>WebP (.webp)</h4>
      <ul>
        <li>Desenvolvido pelo Google, suportado por todos os navegadores modernos</li>
        <li>Mais leve que JPEG e PNG com qualidade equivalente ou superior</li>
        <li>Suporta transparência E compressão eficiente ao mesmo tempo</li>
        <li>Padrão recomendado pra web hoje — se você não tá usando, deveria estar</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Vetorial (SVG)</h3>
      <p>Aqui muda tudo. SVG não é feito de pixels — é feito de instruções matemáticas que descrevem formas, curvas e cores. Isso significa que você pode aumentar o quanto quiser que a qualidade não muda nada. Um logo SVG fica perfeito num crachá e numa parede de 10 metros.</p>

      <ul>
        <li>Ideal pra logos, ícones e ilustrações</li>
        <li>Arquivo muito leve (é basicamente código XML)</li>
        <li>Editável por código — dá pra mudar cor com CSS, por exemplo</li>
        <li>Não serve pra fotografias (seria enorme)</li>
      </ul>

      <h3>Qual usar?</h3>
      <p>A regra prática: foto → WebP (ou JPEG se WebP não couber). Logo/ícone → SVG. Imagem com transparência → WebP ou PNG. Não existe "melhor formato" — existe o formato certo pra cada situação. Entender isso é o que separa quem sabe o que tá fazendo de quem só chuta.</p>
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
      <p>Processamento de imagem é basicamente ensinar o computador a "enxergar". Não no sentido humano de interpretar emoções ou contexto — mas de identificar padrões, extrair informação, reconhecer estruturas. É a base de tudo que envolve visão computacional.</p>

      <p>E tá em muito mais lugar do que parece: câmera do celular que detecta rosto, aplicativo que lê QR code, carro que identifica pedestres, médico que analisa raio-X com IA. Tudo isso começa com processamento de imagem.</p>

      <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Conceitos fundamentais</h3>
      <p>Antes de qualquer processamento, a imagem precisa ser representada de um jeito que o computador entenda. No fundo, uma imagem digital é uma matriz de números — cada pixel tem um valor (ou três valores, em RGB) que representa sua cor. Processamento de imagem é manipular esses números de formas específicas.</p>

      <h3>Filtros</h3>
      <p>Filtros são operações matemáticas aplicadas sobre os pixels da imagem. Os mais comuns:</p>
      <ul>
        <li><strong>Blur (desfoque):</strong> suaviza a imagem calculando a média dos pixels vizinhos. Útil pra reduzir ruído antes de outras operações.</li>
        <li><strong>Sharpen (nitidez):</strong> aumenta o contraste nas bordas, tornando a imagem mais nítida. O algoritmo basicamente amplia as diferenças entre pixels adjacentes.</li>
        <li><strong>Detecção de bordas:</strong> identifica contornos onde há mudança brusca de cor ou intensidade. O algoritmo de Canny é o mais clássico pra isso.</li>
        <li><strong>Threshold (limiarização):</strong> converte a imagem em preto e branco baseando-se num valor de corte. Fundamental pra separar objeto do fundo.</li>
      </ul>

      <h3>Segmentação</h3>
      <p>Aqui o sistema vai além — ele separa partes da imagem com significado diferente. Tipo identificar exatamente onde começa e termina uma pessoa numa foto, ou separar o tumor do tecido saudável num exame.</p>

      <p>A segmentação semântica classifica cada pixel por categoria. A segmentação de instâncias vai mais longe e distingue objetos individuais. Isso é o que permite que um carro autônomo saiba que tem dois pedestres na frente, não apenas "pixels de pessoa".</p>

      <img src="https://images.unsplash.com/photo-1581090700227-1e8a5b5f3f68" style="width:100%; border-radius:10px; margin:15px 0;">

      <h3>Ferramentas</h3>
      <ul>
        <li><strong>OpenCV:</strong> a biblioteca mais usada. Open source, suporta Python e C++, tem função pra praticamente tudo. É o ponto de partida.</li>
        <li><strong>Pillow:</strong> mais simples, ideal pra operações básicas de manipulação de imagem em Python.</li>
        <li><strong>scikit-image:</strong> mais focado em análise científica. Boa pra contextos acadêmicos e biomédicos.</li>
        <li><strong>TensorFlow / PyTorch:</strong> quando a coisa sobe de nível e entra deep learning (detecção de objetos, classificação, etc.).</li>
      </ul>

      <p>Hoje processamento de imagem tá em tudo: câmera de celular, controle de qualidade industrial, diagnóstico médico, segurança pública. Não é mais nicho — é infraestrutura.</p>
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
      <p>A IA mudou completamente a forma de criar conteúdo. Não é mais só uma ferramenta que automatiza tarefas repetitivas — agora ela cria junto, ou às vezes sozinha. E isso levanta perguntas que a disciplina de multimídia não podia ignorar.</p>

      <p>Vamos ser diretos: se você trabalha com criação de conteúdo e ainda não entende o básico de como a IA generativa funciona, você já tá atrasado. Não porque vai "roubar seu emprego" (discurso cansativo), mas porque quem sabe usar isso tem uma vantagem real de produtividade.</p>

      <h3>Como a IA "aprende" a criar</h3>
      <p>O que está por trás das IAs generativas são modelos treinados em quantidades absurdas de dados. Um modelo de geração de imagem viu centenas de milhões de pares imagem-descrição. Com isso, ele aprende associações — como determinadas combinações de palavras correspondem a determinados padrões visuais.</p>

      <p>O processo de geração mais comum hoje é a <strong>difusão</strong>: o modelo começa com ruído puro e vai removendo ruído aos poucos, guiado pelo prompt, até chegar numa imagem coerente. É meio contra-intuitivo, mas funciona absurdamente bem.</p>

      <h3>IA Generativa por tipo de conteúdo</h3>
      <ul>
        <li><strong>Imagem:</strong> Midjourney, DALL-E (OpenAI), Stable Diffusion (open source). Cada um com estética diferente e casos de uso distintos.</li>
        <li><strong>Texto:</strong> GPT-4, Claude, Gemini. Já são usados em produção por empresas de todos os tamanhos.</li>
        <li><strong>Áudio/Voz:</strong> ElevenLabs pra clonagem e síntese de voz. Suno pra geração de músicas completas com vocal.</li>
        <li><strong>Vídeo:</strong> Runway, Sora (OpenAI). Ainda com limitações de duração e coerência temporal, mas evoluindo muito rápido.</li>
      </ul>

      <h3>Aplicações práticas em multimídia</h3>
      <ul>
        <li><strong>Upscaling de imagem:</strong> IA reconstituindo detalhes que não existiam — restauração de fotos antigas ou upscale de vídeos antigos pra 4K</li>
        <li><strong>Remoção de fundo automática:</strong> o que antes levava horas em Photoshop, hoje leva segundos</li>
        <li><strong>Geração de assets:</strong> texturas, ícones, personagens pra jogos e apresentações</li>
        <li><strong>Legendagem e tradução automática:</strong> transcreção + tradução em tempo real com qualidade razoável</li>
      </ul>

      <h3>O lado que precisa de conversa</h3>
      <p>IA generativa levanta questões reais: direitos autorais de dados usados no treinamento, deepfake como ferramenta de desinformação, homogeneização estética quando todo mundo usa a mesma ferramenta. Não tem resposta fácil pra nenhum desses.</p>

      <p>A real é: quem aprende a usar isso agora, com senso crítico sobre o que é e o que não é, sai muito na frente. Ignorar não é opção.</p>
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
      <p>Antes de qualquer jogo existir, existe um documento que organiza tudo: o GDD — Game Design Document. É tipo o "plano mestre" do jogo, o lugar onde a ideia deixa de ser nebulosa e vira algo que uma equipe pode de fato construir.</p>

      <p>A maioria dos projetos de jogo que fracassam no desenvolvimento não falham por falta de talento ou tecnologia. Falham por falta de planejamento. O GDD existe exatamente pra evitar isso.</p>

      <h3>O que é um GDD, na prática</h3>
      <p>Um GDD é um documento vivo — ele começa simples e vai crescendo com o projeto. Não precisa ser perfeito no início, mas precisa existir. É ele que impede que a equipe passe horas debatendo "mas o personagem pode pular duas vezes?" quando essa decisão deveria ter sido tomada semanas antes.</p>

      <h3>O que tem dentro?</h3>

      <h4>Visão geral</h4>
      <ul>
        <li><strong>Conceito central:</strong> a ideia do jogo em uma frase. Se não couber em uma frase, ainda não tá claro o suficiente.</li>
        <li><strong>Público-alvo:</strong> quem vai jogar? Isso influencia dificuldade, estética, plataforma, tudo.</li>
        <li><strong>Plataforma:</strong> mobile, PC, console — cada um tem restrições e convenções diferentes.</li>
        <li><strong>Gênero:</strong> plataformer, RPG, puzzle, shooter… define expectativas dos jogadores.</li>
      </ul>

      <h4>Mecânicas</h4>
      <ul>
        <li><strong>Core loop:</strong> o ciclo principal do jogo. O que o jogador faz, repetidamente, e por que isso é divertido?</li>
        <li><strong>Controles:</strong> como o jogador interage com o mundo</li>
        <li><strong>Sistema de progressão:</strong> como o jogo evolui — ficando mais difícil, desbloqueando coisas, contando história</li>
        <li><strong>Regras e limites:</strong> o que pode e o que não pode dentro da lógica do jogo</li>
      </ul>

      <h4>Arte e Som</h4>
      <ul>
        <li><strong>Referências visuais:</strong> mood boards, paleta de cores, estilo (pixel art, 3D, cartoon…)</li>
        <li><strong>Trilha sonora:</strong> clima, gênero musical, como o som reage às ações do jogador</li>
        <li><strong>SFX:</strong> efeitos sonoros de interação — muito subestimados no feedback do jogador</li>
      </ul>

      <h3>Por que isso importa?</h3>
      <p>Sem o GDD, o projeto vira bagunça rápido. Cada pessoa tem uma versão diferente do jogo na cabeça. Com o GDD, todo mundo sabe o que tá construindo — e, quando surge uma dúvida, tem um lugar pra consultar antes de improvisar.</p>

      <p>Não precisa ser um documento de 100 páginas. Pra projetos pequenos, uma boa wiki ou até um Notion bem organizado já resolve. O importante é que exista.</p>
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
      <p>Essa foi a parte mais prática de toda a disciplina: desenvolver um jogo de verdade. Não um esboço, não um protótipo de papel — um jogo funcional, com mecânicas reais, arte, lógica e a quantidade certa de bugs que toda primeira versão tem.</p>

      <h3>Sobre o jogo</h3>
      <p>A proposta foi aplicar tudo que vimos ao longo do semestre — desde o planejamento no GDD até a execução técnica. O escopo foi mantido deliberadamente pequeno. E isso foi uma boa decisão.</p>

      <p>Uma das primeiras lições de game dev é que qualquer ideia parece simples até você começar a implementar. A segunda lição é que escopo controlado é o que separa projetos que terminam de projetos que ficam eternamente "em desenvolvimento".</p>

      <h3>O processo de desenvolvimento</h3>
      <p>No começo parece tranquilo. Você tem o GDD, tem a ferramenta, tem a ideia. Aí você começa e aparecem as perguntas que o planejamento não respondeu: como a colisão vai funcionar exatamente? E quando o personagem morre, o que acontece com os itens coletados? O inimigo precisa de animação pra cada direção ou só pras principais?</p>

      <p>Bug, lógica, ajuste de física, sincronização de animação com mecânica… é um processo constante de testar, quebrar, corrigir e testar de novo. Não tem como fugir disso. É assim que desenvolvimento funciona.</p>

      <h3>Ferramentas usadas</h3>
      <p>O desenvolvimento foi feito usando as mesmas ferramentas que profissionais da área usam — o que torna o aprendizado mais transferível do que se fosse uma ferramenta criada só pra fins didáticos.</p>

      <h3>Aprendizados que ficam</h3>
      <ul>
        <li><strong>Organização é tudo:</strong> código bagunçado vira pesadelo quando você precisa adicionar uma feature nova ou corrigir algo que quebrou sem razão aparente</li>
        <li><strong>Testar o tempo todo:</strong> o erro mais caro é descobrir um problema tarde demais, quando já tem muita coisa construída em cima dele</li>
        <li><strong>Escopo é decisão, não fraqueza:</strong> cortar features é parte do processo. Um jogo pequeno e polido é melhor que um jogo grande e quebrado</li>
        <li><strong>Errar faz parte:</strong> literalmente cada desenvolvedor de jogo tem histórias de coisas que quebraram de forma absurda e sem explicação</li>
      </ul>

      <p>No final, ver o jogo rodando — com tudo funcionando junto, arte, som, lógica — compensa todo o processo. É um dos poucos momentos em que você consegue medir de forma concreta o que aprendeu.</p>
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
      <p>A <strong>Internet das Coisas</strong> é basicamente quando objetos comuns começam a ficar "inteligentes" — não no sentido de pensar, mas de coletar dados, se comunicar e responder a comandos sem intervenção humana direta.</p>

      <p>Lâmpada que liga pelo celular, sensor que mede temperatura e manda alerta se subir demais, geladeira que detecta quando o leite acaba. No Brasil, automação residencial ainda é nicho, mas industrialmente e na agricultura o IoT já é realidade consolidada há anos.</p>

      <h3>A arquitetura básica de um sistema IoT</h3>
      <p>Não é mágica — é um conjunto de camadas trabalhando juntas. Entender essa arquitetura é o que permite criar sistemas funcionais em vez de gambiarras que funcionam só em condições ideais.</p>

      <h4>Camada de dispositivos (Edge)</h4>
      <ul>
        <li><strong>Sensores:</strong> temperatura (DHT22), umidade, presença (PIR), luminosidade, CO2 — são os "olhos e ouvidos" do sistema</li>
        <li><strong>Microcontroladores:</strong> Arduino (simples, robusto, ótimo pra aprender), ESP32 (Wi-Fi e Bluetooth integrados, muito usado em projetos reais)</li>
        <li><strong>Computadores embarcados:</strong> Raspberry Pi quando você precisa de mais processamento ou um sistema operacional completo</li>
      </ul>

      <h4>Camada de conectividade</h4>
      <ul>
        <li><strong>Wi-Fi:</strong> mais fácil de implementar, mas consome mais energia — ruim pra dispositivos com bateria</li>
        <li><strong>Bluetooth/BLE:</strong> curto alcance, baixo consumo — ideal pra wearables e dispositivos próximos</li>
        <li><strong>LoRa:</strong> longo alcance (quilômetros), baixíssimo consumo — perfeito pra sensores rurais ou urbanos espalhados</li>
        <li><strong>MQTT:</strong> protocolo de mensagens leve, muito usado pra comunicação entre dispositivos IoT e servidores</li>
      </ul>

      <h4>Camada de nuvem</h4>
      <ul>
        <li>Armazena os dados coletados pelos sensores</li>
        <li>Processa e gera alertas baseados em regras ou ML</li>
        <li>Disponibiliza dashboards pra visualização em tempo real</li>
      </ul>

      <p>O fluxo é: <strong>coleta → transmite → processa → visualiza → age</strong>. Simples de entender, complexo de escalar.</p>

      <h3>Onde IoT já faz diferença hoje</h3>
      <ul>
        <li><strong>Agricultura de precisão:</strong> sensores de solo e clima otimizando irrigação e reduzindo desperdício de água</li>
        <li><strong>Indústria 4.0:</strong> monitoramento preditivo de máquinas — o sensor detecta vibração anormal antes da peça quebrar</li>
        <li><strong>Cidades inteligentes:</strong> semáforos que adaptam tempo de acordo com fluxo real, lixeiras que avisam quando precisam ser esvaziadas</li>
        <li><strong>Saúde:</strong> monitores vestíveis que acompanham sinais vitais e transmitem pra médico remotamente</li>
      </ul>

      <p>IoT parece simples na superfície, mas por trás tem desafios sérios: segurança (dispositivos IoT são notoriamente vulneráveis), escalabilidade, consumo de energia e padronização de protocolos. Quanto mais fundo você vai, mais complexo fica.</p>
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
      <p>Automação é basicamente fazer máquinas trabalharem por você — executar tarefas repetíveis, previsíveis e regidas por regras sem precisar de intervenção humana a cada ciclo. Desde a linha de montagem da Ford em 1913 até um script Python que processa planilhas toda segunda de manhã, o conceito é o mesmo.</p>

      <p>O que mudou é a acessibilidade. Automatizar antes exigia engenheiros especializados e equipamentos caros. Hoje, com Python e algumas bibliotecas, qualquer pessoa com conhecimento básico consegue automatizar boa parte das tarefas que consome seu dia.</p>

      <h3>Tipos de automação</h3>

      <h4>Automação Industrial</h4>
      <p>O mais antigo e mais consolidado. Robôs em linha de montagem, CLPs (Controladores Lógicos Programáveis) gerenciando processos contínuos, sistemas SCADA monitorando infraestrutura. Altamente especializado, requer integração física com hardware.</p>
      <ul>
        <li>Robótica industrial (soldagem, pintura, montagem)</li>
        <li>Sistemas de controle de processo (temperatura, pressão, fluxo)</li>
        <li>Controle de qualidade automatizado por visão computacional</li>
      </ul>

      <h4>Automação de TI e Processos Digitais</h4>
      <p>É aqui que entra o que é mais relevante no cotidiano de quem trabalha com tecnologia e negócios:</p>
      <ul>
        <li><strong>RPA (Robotic Process Automation):</strong> softwares que imitam ações humanas em sistemas — clicar, preencher formulário, copiar dados entre sistemas. UiPath e Automation Anywhere são os mais usados em empresas.</li>
        <li><strong>Scripts:</strong> Python, Shell Script, PowerShell. Automatizar relatórios, processamento de arquivos, integração entre sistemas.</li>
        <li><strong>CI/CD (Integração e Deploy Contínuo):</strong> automação de todo o ciclo de desenvolvimento de software — testar, validar e publicar código automaticamente a cada commit.</li>
        <li><strong>Automação de marketing:</strong> e-mails disparados por comportamento do usuário, segmentação dinâmica, relatórios automáticos.</li>
      </ul>

      <h3>Por que isso importa pra quem estuda tecnologia</h3>
      <p>Porque a automação não é uma ameaça que você precisa se defender — é uma habilidade que você pode desenvolver. Profissional que sabe automatizar processos entrega mais, erra menos em tarefas repetitivas e tem tempo pra focar no que realmente exige raciocínio.</p>

      <p>Um exemplo concreto: em vez de passar horas compilando dados de planilhas toda semana, você escreve um script que faz isso em segundos. Aquelas horas viram tempo pra analisar os dados ao invés de coletá-los.</p>

      <p>Quem sabe automatizar economiza tempo absurdo. E sinceramente — ninguém deveria ficar fazendo tarefa repetitiva pra sempre quando dá pra ensinar uma máquina a fazer isso.</p>
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
      <p>Esse projeto foi o ponto onde tudo começou a fazer sentido de verdade. Até então, os conceitos existiam de forma relativamente separada: multimídia aqui, IoT ali, automação acolá. No projeto prático, eles tiveram que conversar entre si.</p>

      <p>E é justamente aí que o aprendizado real acontece — não quando você lê sobre integração de sistemas, mas quando você tenta integrar dois sistemas que não foram feitos um pro outro e precisa descobrir como fazer isso funcionar.</p>

      <h3>Sobre o sistema</h3>
      <p>A proposta foi criar um sistema que reunisse múltiplos elementos de multimídia em uma experiência coesa. Isso significou tomar decisões sobre arquitetura, interface, fluxo de dados e apresentação — tudo ao mesmo tempo, com prazo.</p>

      <p>A fase de planejamento foi mais curta do que deveria. Descobrimos isso quando chegamos na implementação e percebemos que algumas decisões que pareciam óbvias no começo geravam conflitos conforme o sistema crescia.</p>

      <h3>Desafios reais do desenvolvimento</h3>
      <p>No começo, o projeto parecia tranquilo. A ideia estava clara, a tecnologia era conhecida, o escopo parecia controlado. Aí você começa a implementar de verdade.</p>

      <p>Integração é onde a complexidade esconde — quando dois componentes que funcionam perfeitamente separados precisam trabalhar juntos e simplesmente não funcionam. Interface é onde o que parecia simples no papel vira problema de usabilidade real. Lógica de estado é o que te faz ficar 2 horas procurando um bug que era uma variável com nome errado.</p>

      <h3>Aprendizados que ficam</h3>
      <ul>
        <li><strong>Planejamento faz diferença:</strong> não precisava ser perfeito, mas precisava ser mais cuidadoso. Decisões tomadas no começo têm impacto enorme depois.</li>
        <li><strong>Testar evita dor de cabeça:</strong> bugs encontrados cedo custam muito menos do que bugs encontrados tarde.</li>
        <li><strong>Documentar enquanto faz:</strong> o código que parecia óbvio quando você escreveu vira mistério duas semanas depois sem comentários.</li>
        <li><strong>Errar faz parte do processo:</strong> não como consolo, mas como fato técnico. Iteração é o método.</li>
      </ul>

      <p>Ver tudo funcionando no final — a interface, a lógica, os dados fluindo — foi a melhor parte. Não porque ficou perfeito. Ficou longe disso. Mas porque funcionou, e a gente sabia exatamente por quê cada parte funcionava do jeito que funcionava.</p>
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
      <p>Chegando no final, dá pra perceber o quanto foi coberto num semestre. No começo parecia só mais uma disciplina obrigatória — uma daquelas que você cumpre pro currículo. Acabou sendo bem mais do que isso.</p>

      <p>A multimídia, como área de estudo, tem essa característica de conectar muita coisa. Você começa falando de formatos de imagem e termina discutindo ética em IA. Começa com conceito de hipertexto e termina programando um jogo. Essa amplitude é ao mesmo tempo desafiadora e interessante.</p>

      <h3>O que a gente viu</h3>
      <ul>
        <li><strong>Multimídia e hipermídia:</strong> fundamentos que explicam como a internet foi estruturada e como ela funciona até hoje</li>
        <li><strong>Realidade Estendida (VR, AR, MR) e Holografia:</strong> onde o digital e o físico se encontram — e onde isso tá indo</li>
        <li><strong>Imagem digital e processamento:</strong> desde escolher o formato certo até ensinar um computador a "enxergar"</li>
        <li><strong>Inteligência Artificial aplicada:</strong> ferramentas, limitações, e por que você precisa entender isso agora</li>
        <li><strong>Game Design e desenvolvimento:</strong> da teoria do GDD ao jogo funcionando de verdade</li>
        <li><strong>IoT e automação:</strong> sistemas conectados e o futuro da infraestrutura tecnológica</li>
      </ul>

      <h3>O que fica além do conteúdo</h3>
      <p>O mais valioso não foi nenhum conceito específico. Foi entender que essas áreas não existem em silos separados — elas se alimentam. IA melhora processamento de imagem. Processamento de imagem viabiliza AR. AR se beneficia de IoT. IoT gera dados que alimentam modelos de ML. Tudo conectado.</p>

      <p>E fazer o blog foi parte importante disso. Porque escrever sobre um assunto te força a entender ele de verdade — você descobre os buracos do seu conhecimento quando tenta explicar algo pra outra pessoa.</p>

      <div class="info-box">
        <p>🙏 Valeu por acompanhar o MultimídiaLab até aqui. Espero que algo aqui tenha sido útil — ou pelo menos interessante.</p>
      </div>

      <p>E provavelmente… isso aqui ainda é só o começo. Das tecnologias, da área, e do que a gente vai aprender daqui pra frente.</p>
    `
  }
];
